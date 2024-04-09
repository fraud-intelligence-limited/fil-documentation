# Signing transactions

Every operation that contains `.../assemble` in its path and has a mirroring endpoint (e.g., [assembling a contribution](../api-specification/contribution-controller/assembling-a-contribution.md) -> [submitting a contribution](../api-specification/contribution-controller/submitting-a-contribution.md)) requires its transaction to be represented as a `transactionHex` string retrieved from the first request to be signed as a Hex before it is used for the second one.

For reference, see any of the following tutorials:

- [Submitting a contribution](./submitting-a-contribution.md)
- [Flagging a contribution](./flagging-a-contribution.md)

The exact implementation to your system may vary depending on the specific SDK or programming language being used. However, the overall sequence of events to sign a transaction should be the following:

1. Create a `keyPair` object from the public and private keys of the user's [**Blockchain** key pair](../overview/web-interface.md#blockchain-key-pair).
2. Retrieve the Hex string of the required transaction.
3. Decode the retrieved transaction Hex string.
4. Sign the decoded transaction.
5. Re-encode the signed transaction to Hex format.

The resulting encoded transaction Hex string can be used as the body for requests to the following endpoints:

```http
POST /api/v1/contribution-management/contribution
PATCH /api/v1/contribution-management/contribution/flag
```

## Iroha SDK references

You can use [any Iroha SDK available](../index.md#what-is-iroha-2) to sign a transaction. Below are references on how to sign a transaction using the following Iroha SDKs:

::: code-group Iroha SDK references

```kotlin [Iroha Java/Kotlin SDK]
// Your package value:
package something

// Import dependencies:
import jp.co.soramitsu.iroha2.appendSignatures
import jp.co.soramitsu.iroha2.generated.datamodel.transaction.SignedTransaction
import jp.co.soramitsu.iroha2.keyPairFromHex
import net.i2p.crypto.eddsa.spec.EdDSANamedCurveTable
import org.bouncycastle.util.encoders.Hex
import java.io.File

// Example transaction Hex string:
// transactionHex = "0114616c69636528776f6e6465726c616e640004000d09001468656c6c6f00002cde318c87010000a0860100000000000000041c65643235353139807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101bef276fc36ba638abd422e76fd0e6df319df1c3d336ab60d7276333b4010bb7d962d04b273d9caf91cb8509581c0b55e1cdee371c52863a8b4b62c67fbfc870f"
fun decodeSignEncode(transactionHex: String): String {
    // Example ed25519 public key:
    val publicKey = "7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac"

    // Example ed25519 private key:
    // Note: In Kotlin/Java SDK the truncated representation is more common, although you can refer to full ones represented as concatenation of private and public ones in other SDKs
    val privateKey = "413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc3"

    // Obtain 'keyPair' from the public and private keys of the 'Blockchain' key pair:
    val keyPair = keyPairFromHex(
        publicKey,
        privateKey,
        EdDSANamedCurveTable.getByName(EdDSANamedCurveTable.ED_25519)
    )

    // Decode the transaction:
    val transaction: ByteArray = try {
        Hex.decode(transactionHex)
    } catch (e: IllegalArgumentException) {
        println("Could not decode transaction from hex format: $e")
        throw e
    }
    val decodedTransaction = transaction.let { SignedTransaction.decode(it) }

    // Sign the transaction:
    val signedTransaction = decodedTransaction.appendSignatures(keyPair)

    // Re-encode the transaction:
    val encoded = signedTransaction.let { SignedTransaction.encode(it) }
    val encodedHex = Hex.toHexString(encoded)

    // Use the value wherever needed further:
    println("Signed transaction (Hex): $encodedHex")
    return encodedHex
}
```

```js [Iroha JavaScript SDK]
// @ts-check

import { crypto } from '@iroha2/crypto-target-node' // version: 1.0.0
import * as datamodel from '@iroha2/data-model' // version: 4.1.0
import { signTransaction, setCrypto, Signer } from '@iroha2/client' // version: 4.1.0
import { freeScope } from '@iroha2/crypto-core' // version: 1.0.0

setCrypto(crypto)

/**
 * @param {Uint8Array} bytes
 * @returns {string}
 */
function bytesToHex(bytes) {
  return Array.from(bytes, (v) => v.toString(16).padStart(2, '0')).join('')
}

/**
 * @param {string} hex
 * @returns {Uint8Array}
 */
function hexToBytes(hex) {
  /** @type {number[]} */
  const bytes = []
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.slice(i, i + 2), 16))
  }
  return Uint8Array.from(bytes)
}

/**
 * @param {datamodel.SignedTransaction} tx
 * @param {import('@iroha2/crypto-core').KeyPair} keyPair
 * @return {datamodel.SignedTransaction}
 */
function appendSignatureWithKeyPair(tx, keyPair) {
  const signer = new Signer(tx.payload.account_id, keyPair)
  const signature = signTransaction(tx.payload, signer)
  return datamodel.SignedTransaction({
    payload: tx.payload,
    signatures: [...tx.signatures, signature]
  })
}

/**
 * @param {string} publicKeyHex - ed25519 pub key hex
 * @param {string} privateKeyHex - ed25519 private key hex
 * @param {string} transaction - hex of the transaction
 * @returns {string} - hex of the transaction with the appended signature
 */
function appendSignature(publicKeyHex, privateKeyHex, transaction) {
  return freeScope(() => {
    const keyPair = crypto.KeyPair.fromJSON({
      public_key:
        // magic ed25519 multihash prefix
        'ed0120' + publicKeyHex,
      private_key: {
        digest_function: 'ed25519',
        payload: privateKeyHex
      }
    })

    const txDecoded = datamodel.VersionedSignedTransaction.fromBuffer(
      hexToBytes(transaction)
    )

    const txNew = datamodel.VersionedSignedTransaction(
      'V1',
      appendSignatureWithKeyPair(txDecoded.as('V1'), keyPair)
    )

    return bytesToHex(datamodel.VersionedSignedTransaction.toBuffer(txNew))

    return bytesToHex(datamodel.VersionedSignedTransaction.toBuffer(txNew))
  })
}

// example transaction
const tx = appendSignature(
  '7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac',
  '413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc37fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac',
  '0114616c69636528776f6e6465726c616e640004000d09001468656c6c6f00002cde318c87010000a0860100000000000000041c65643235353139807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101bef276fc36ba638abd422e76fd0e6df319df1c3d336ab60d7276333b4010bb7d962d04b273d9caf91cb8509581c0b55e1cdee371c52863a8b4b62c67fbfc870f'
)

console.log(tx)
// => 0114616c69636528776f6e6465726c616e640004000d09001468656c6c6f00002cde318c87010000a0860100000000000000081c65643235353139807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101bef276fc36ba638abd422e76fd0e6df319df1c3d336ab60d7276333b4010bb7d962d04b273d9caf91cb8509581c0b55e1cdee371c52863a8b4b62c67fbfc870f1c65643235353139807fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac01014a3cffcfb6276cc6de039c3ab287e7614e6dffc5e152200efa817d59c04334839c9624781bb1bda7b1d5ead0f0ea1c31238cccf9a948becf71d09728c4914d0d
```

```python [Iroha Python SDK]
# Import dependency
import iroha

# Example signed transaction, encoded with SCALE codec and represented as hex string:
encoded_transaction = "010400807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101b65301ad504ea1430c171379ed45226bfc5fe770a216815654e20491626bbf857247bee73f6790314f892ed1a3e4c18cc6815ce9ff85ce956e0f9ab46605bc093962fb8f8e01000028776f6e6465726c616e6414616c6963650008000d09020c786f7228776f6e6465726c616e6401000000020d1402000000000000000002000000000000000d08030c786f7228776f6e6465726c616e6428776f6e6465726c616e6414616c69636501a0860100000000000000"

# Example ed25519 key pair
key_pair = iroha.KeyPair.from_json("""
{
  "public_key": "ed0120BA85186D0F8C995F8DEA6C95B3EDA321C88C983D4F6B28E079CC121B40AA8E00",
  "private_key": {
    "digest_function": "ed25519",
    "payload": "1b9068cd9b4acaabf1e8c66c622d9bd15ff3b04099819b750e3987be73d2096fba85186d0f8c995f8dea6c95b3eda321c88c983d4f6b28e079cc121b40aa8e00"
  }
}
""")

# Decode the transaction:
transaction = iroha.SignedTransaction.decode_hex(encoded_transaction)

# Sign the transaction with the provided private key:
transaction.append_signature(key_pair)

# Re-encode the transaction:
re_encoded_transaction = transaction.encode_hex()

# Retrieve the encoded Hex string of the transaction:
print(f"Signed and encoded transaction:\n{re_encoded_transaction}")
```

:::

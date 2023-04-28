# Signing transactions

Every operation that contains `…/assemble` in its path and has a mirroring endpoint (e.g., [assembling a contribution](../api-specification/contribution-controller/assembling-a-contribution.md) -> [submitting a contribution](../api-specification/contribution-controller/submitting-a-contribution.md)) requires its transaction to be represented as a `transactionHex` string retrieved from the first request to be signed as a Hex before it is used for the second one.

For reference, see any of the following tutorials:
- [Submitting a contribution](./submitting-a-contribution.md)
- [Flagging a contribution](./flagging-a-contribution.md)

The exact implementation to your system may vary depending on the specific SDK or programming language being used. However, the overall sequence of events to sign a transaction should be the following:
1. Create a `keyPair` object from the public and private keys of the Iroha 2 key pair.
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
// Your package value
package something

// Import dependencies
import jp.co.soramitsu.iroha2.appendSignatures
import jp.co.soramitsu.iroha2.generated.datamodel.transaction.VersionedSignedTransaction
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
    
    // Obtain 'keyPair' from the public and private keys of the Iroha 2 key pair:
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
    val decodedTransaction = transaction.let { VersionedSignedTransaction.decode(it) }
    
    // Sign the transaction:
    val signedTransaction = decodedTransaction.appendSignatures(keyPair)
    
    // Re-encode the transaction:
   val encoded = signedTransaction.let { VersionedSignedTransaction.encode(it) }
   val encodedHex = Hex.toHexString(encoded)
   
    // Use the value wherever needed further
   println("Signed transaction (Hex): $encodedHex")
   return encodedHex
}

```

```python [Iroha Python SDK]
# Import dependencies
from iroha2.data_model.transaction import SignedTransaction
from iroha2.crypto import KeyPair

# Example signed transaction, encoded with SCALE codec and represented as hex string
encoded_transaction = "0114616c69636528776f6e6465726c616e640004000d09001468656c6c6f00002cde318c87010000a0860100000000000000041c65643235353139807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101bef276fc36ba638abd422e76fd0e6df319df1c3d336ab60d7276333b4010bb7d962d04b273d9caf91cb8509581c0b55e1cdee371c52863a8b4b62c67fbfc870f"

# Example ed25519 private key
private_key = "413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc37fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac"

# Recover keypair from private key
key_pair = KeyPair.from_private(private_key)
# ed25519 is the default, for e.g. secp256k1 key you would
# need to explicitly specify the algorithm:
#key_pair = KeyPair.from_private(private_key, "secp256k1")

# Decode transaction
transaction = SignedTransaction.decode(encoded_transaction)

# Sign transaction with provided private key
transaction.append_signature(key_pair)

# Re-encode the transaction
re_encoded_transaction = transaction.encode()

print(f"Signed and encoded transaction:\n{re_encoded_transaction}")
```

:::

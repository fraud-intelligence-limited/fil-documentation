# Signing transactions

Every operation that has an `…/assemble` mirroring endpoint operations, such as [flagging a contribution](flagging-a-contribution.md), requires a transaction to be signed as a Hex using the Iroha 2 key-pair before sending it to the backend.

To sign a transaction, you need to provide the following input data: the public key and private key of the Iroha 2 key pair, and an unsigned transaction.

When you sign a transaction, the expected output is a transaction content, and the signed result is a string in the Hex format. You can use [any Iroha SDK available](../index.md#what-is-iroha-2) to sign a transaction.

The following are examples of how to sign a transaction using one of the following Iroha SDKs

::: details Iroha Java/Kotlin SDK

1. Read the hex strings of the public and private keys.
2. Use the `keyPairFromHex` method to obtain a `keyPair` object.
3. Decode the transaction using the <br>`VersionedSignedTransaction.decode(<your transaction's hex string>)` method.
4. Sign the decoded transaction using the `.appendSignatures(keyPair)` method.
5. Encode the signed transaction using the <br>`VersionedSignedTransaction.encode(<transaction object>)` method.
6. Use the resulting encoded transaction object as the body for certain requests <br> (e.g., see _[Submitting a contribution](submitting-a-contribution.md), steps 2 and 3_).

:::

::: details Iroha Python SDK

```python
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

::: tip Note

The exact implementation may vary depending on the specific SDK or programming language being used.<br>However, the overall sequence of events should be the same: recover the `keyPair` object from the provided hex strings, get the transaction hex, decode it, sign it, and then encode it.

:::

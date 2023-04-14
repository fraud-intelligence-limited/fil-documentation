# Signing transactions

Every operation that has an `…/assemble` mirroring endpoint operations, such as [flagging a contribution](flagging_a_contribution.md), requires a transaction to be signed as a Hex using the Iroha 2 key-pair before sending it to the backend.

To sign a transaction, you need to provide the following input data: the public key and private key of the Iroha 2 key pair, and an unsigned transaction.

When you sign a transaction, the expected output is a transaction content, and the signed result is a string in the Hex format. You can use [any Iroha SDK available](../index.md#what-is-iroha-2) to sign a transaction.

The following example shows how to sign a transaction using the Kotlin/Java Iroha SDK:

1. Read the hex strings of the public and private keys.
2. Use the `keyPairFromHex` method to obtain a `keyPair` object.
3. Decode the transaction using the `VersionedSignedTransaction.decode(<your transaction's hex string>)` method.
4. Sign the decoded transaction using the `.appendSignatures(keyPair)` method.
5. Encode the signed transaction using the `VersionedSignedTransaction.encode(<transaction object>)`
6. Use the resulting encoded transaction object as the body for certain requests <br> (e.g., see _[Submitting a contribution](submitting_a_contribution.md), steps 2 and 3_).

::: tip Note

The exact implementation may vary depending on the specific SDK or programming language being used.<br> However, the overall sequence of events should be the same: recover the `keyPair` object from the provided hex strings, get the transaction hex, decode it, sign it, and then encode it.

:::

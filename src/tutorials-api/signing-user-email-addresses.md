# Signing user email addresses

Every API request to [authorize a user in the system](../api-specification/auth-controller/authorizing-a-user-in-the-system.md) requires a signature of the user's email address.

The exact implementation to your system may vary depending on the specific SDK or programming language being used. However, the overall sequence of events to sign a user email address should be the following:

1. Create a `keyPair` object from the public and private keys of the user's authentication key pair.
2. Obtain a `signature` of the user's email address.
3. Encode the `signature` as a Hex string.

The resulting encoded `signature` Hex string can be used as a part of the body for requests to the following endpoint:

```http
POST /auth/api/v1/authentication-management/session
```

## Iroha SDK references

You can use [any Iroha SDK available](../index.md#what-is-iroha-2) to sign a user's email address. Below are references on how to sign a transaction using the following Iroha SDKs:

::: code-group Iroha SDK references

```kotlin [Iroha Java/Kotlin SDK]
// Your package value
package something

// Import dependencies
import jp.co.soramitsu.iroha2.keyPairFromHex
import jp.co.soramitsu.iroha2.sign
import jp.co.soramitsu.iroha2.toHex

class SimpleSigner {

    fun main(args: Array<String>) {
        if (args.size != 3) {
            println("Specify public_key, private_key and text to sign")
            return
        }

        // The public key of the user's authentication key pair
        val publicKey = args[0]

        // The private key of the user's authentication key pair
        val privateKey = args[1]

        // The user's email address
        val toSign = args[2]

        // Create a `keyPair` object from the Hex string of the public and private keys of the user's authentication key pair
        val keyPair = keyPairFromHex(publicKey, privateKey)

        // Obtain a `signature` of the user's email address
        val signature = keyPair.private.sign(toSign.toByteArray(Charsets.UTF_8)).toHex()

        // Encode the `signature` as a Hex string
        println("Signed message (Hex): $signature")
    }
}
```

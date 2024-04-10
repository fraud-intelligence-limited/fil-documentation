# Signing user email addresses

Every API request to [authorize a user in the system](../api-specification/auth-controller/authorizing-a-user-in-the-system.md) requires a signature of the user's email address.

The exact implementation to your system may vary depending on the specific SDK or programming language being used. However, the overall sequence of events to sign a user email address should be the following:

1. Create a `keyPair` object from the public and private keys of the user's [**Authorization** key pair](../overview/web-interface.md#authorization-key-pair).
2. Obtain a `signature` of the user's email address.
3. Encode the `signature` as a Hex string.

The resulting encoded `signature` Hex string can be used as a part of the body for requests to the following endpoint:

> [Authorizing a user in the system](../api-specification/auth-controller/authorizing-a-user-in-the-system.md)

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

        // The public key of the user's 'Authorization' key pair
        val publicKey = args[0]

        // The private key of the user's 'Authorization' key pair
        val privateKey = args[1]

        // The user's email address
        val toSign = args[2]

        // Create a `keyPair` object from the Hex string of the public and private keys of the user's 'Authorization' key pair
        val keyPair = keyPairFromHex(publicKey, privateKey)

        // Obtain a `signature` of the user's email address
        val signature = keyPair.private.sign(toSign.toByteArray(Charsets.UTF_8)).toHex()

        // Encode the `signature` as a Hex string
        println("Signed message (Hex): $signature")
    }
}
```

```js [Iroha JavaScript SDK]
// @ts-check

import { crypto } from '@iroha2/crypto-target-node' // version: 1.1.1
import { freeScope } from '@iroha2/crypto-core' // version: 1.1.1

/**
 * @param {string} publicKeyHex - ed25519 pub key hex
 * @param {string} privateKeyHex - ed25519 private key hex
 * @param {string} email
 * @returns {string} - email signature hex
 */
function createEmailSignature(publicKeyHex, privateKeyHex, email) {
  return freeScope(() => {
    const keyPair = crypto.KeyPair.fromJSON({
      public_key: 'ed0120' + publicKeyHex,
      private_key: {
        digest_function: 'ed25519',
        payload: privateKeyHex
      }
    })

    const hashedEmail = crypto.Hash.hash(
      'array',
      new TextEncoder().encode(email)
    ).bytes()

    return keyPair.sign('array', hashedEmail).payload('hex')
  })
}

// example signature
const signature = createEmailSignature(
  '7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac',
  '413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc37fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac',
  'alice@wonderland.space'
)

console.log(signature)
// => 9729e8fbcd425bfe48809cc996c9e6d3cecddf0848a51d8758582b3c84bb2caca8e41a8290018aa7064f0b9ec61d2b1a155d5e4c772bc992d918528cf6cb6308
```

```python [Iroha Python SDK]
# Import dependency
import iroha

# Example ed25519 key pair
key_pair = iroha.KeyPair.from_json("""
{
  "public_key": "ed01207233BFC89DCBD68C19FDE6CE6158225298EC1131B6A130D1AEB454C1AB5183C0",
  "private_key": {
    "digest_function": "ed25519",
    "payload": "9ac47abf59b356e0bd7dcbbbb4dec080e302156a48ca907e47cb6aea1d32719e7233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c0"
  }
}
""")

# Hash the user's email address:
hashed_email = iroha.hash(b"email@address")

# Sign the user's email address:
signature = key_pair.sign(bytes(hashed_email))

# Retrieve the encoded Hex string of the user's `signature`
print(f"Encoded signature:\n{bytes(signature).hex()}")
```

:::

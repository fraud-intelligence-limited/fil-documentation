# Signing user email addresses

Every API request to [authorize a user in the system](../api-specification/auth-controller/authorizing-a-user-in-the-system.md) requires a signature of the user's email address.

The signature is a standard Ed25519 signature over the hashed email address, encoded as a Hex string:

```
digest      = BLAKE2b-256( UTF-8(email) )
digest[31] |= 1
signature   = Hex( Ed25519-Sign( authPrivateKey, digest ) )
```

Any cryptographic library that provides Ed25519 and BLAKE2b-256 can produce it, in any programming language. No blockchain SDK is required.

::: warning THE LAST BYTE OF THE DIGEST

Setting the low bit of the digest's last byte is required. It is part of how the hash is represented, and a signature made without it is rejected with `InvalidSignature`.

It changes the digest for roughly half of all addresses, and leaves the other half untouched, so an implementation that omits it passes for some addresses and fails for others. Check yours against both test vectors below: the second one exercises this bit.

:::

::: warning KEYS TO USE

Sign with the **Authorization** key pair, not with the **Blockchain** one. Both key pairs are shown on the FIB Web App **Profile** screen. For details, see [Web App UI: 'Authorization' key pair](../overview/web-interface.md#akp).

A private key is 64 characters long. In **Iroha SDK format** the public key is appended to it, making a 128-character string: the Iroha SDKs expect that longer form, every other library expects the 64-character key. If the key you copied is 128 characters, its first 64 characters are the private key.

A signature made with the wrong key pair is rejected with a `422` response.

:::

## Examples

The examples below sign the address `alice@wonderland.space` with the [test key pair](#test-vector).

::: code-group

```python [Python]
# pip install cryptography
import hashlib

from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey


def sign_email(email: str, auth_private_key_hex: str) -> str:
    # In Iroha SDK format the key is 128 characters: private key then public key.
    key = Ed25519PrivateKey.from_private_bytes(bytes.fromhex(auth_private_key_hex[:64]))
    digest = bytearray(hashlib.blake2b(email.encode("utf-8"), digest_size=32).digest())
    digest[31] |= 1
    return key.sign(bytes(digest)).hex()


print(sign_email(
    "alice@wonderland.space",
    "413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc3",
))
# => 57e7115dfb9faa9add2d2ceb321c20db8c1e7f468d2ffc122793fa61e8ed61581580faaeae83a07fe857894bb33defd61c4ba099b981020146fe8d2be00e630a
```

```js [Node.js]
// npm install @noble/hashes
import { createPrivateKey, sign } from 'node:crypto'
import { blake2b } from '@noble/hashes/blake2b'

// DER header that turns 32 raw key bytes into a PKCS#8 Ed25519 key
const PKCS8_ED25519_PREFIX = '302e020100300506032b657004220420'

/**
 * @param {string} email
 * @param {string} authPrivateKeyHex - in Iroha SDK format the key is 128
 *                                     characters: private key then public key
 * @returns {string} - email signature hex
 */
function signEmail(email, authPrivateKeyHex) {
  const key = createPrivateKey({
    key: Buffer.from(
      PKCS8_ED25519_PREFIX + authPrivateKeyHex.slice(0, 64),
      'hex'
    ),
    format: 'der',
    type: 'pkcs8'
  })

  const digest = Buffer.from(
    blake2b(new TextEncoder().encode(email), { dkLen: 32 })
  )
  digest[31] |= 1

  return sign(null, digest, key).toString('hex')
}

console.log(
  signEmail(
    'alice@wonderland.space',
    '413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc3'
  )
)
// => 57e7115dfb9faa9add2d2ceb321c20db8c1e7f468d2ffc122793fa61e8ed61581580faaeae83a07fe857894bb33defd61c4ba099b981020146fe8d2be00e630a
```

```kotlin [Kotlin/Java]
// Import dependencies
import jp.co.soramitsu.iroha2.keyPairFromHex
import jp.co.soramitsu.iroha2.sign
import jp.co.soramitsu.iroha2.toHex

// The SDK hashes the email address inside `sign`,
// so it is passed in as raw bytes.
fun signEmail(
    email: String,
    authPublicKeyHex: String,
    authPrivateKeyHex: String,
): String {
    val keyPair = keyPairFromHex(authPublicKeyHex, authPrivateKeyHex)

    return keyPair.private.sign(email.toByteArray(Charsets.UTF_8)).toHex()
}
```

:::

## Test vector {#test-vector}

Before you call the API, check your implementation against these values. All of them are public example data, not credentials of a real account:

| Field | Value |
| --- | --- |
| Email address | `alice@wonderland.space` |
| Authorization private key | `413b285d1819a6166b0daa762bb6bef2d082cffb9a13ce041cb0fda5e2f06dc3` |
| Authorization public key | `7fbedb314a9b0c00caef967ac5cabb982ec45da828a0c58a9aafc854f32422ac` |
| Signature | `57e7115dfb9faa9add2d2ceb321c20db8c1e7f468d2ffc122793fa61e8ed61581580faaeae83a07fe857894bb33defd61c4ba099b981020146fe8d2be00e630a` |

The digest of that address already ends in an odd byte, so it passes with or without the last-byte rule. This second vector, same key pair, does not:

| Field | Value |
| --- | --- |
| Email address | `bob@wonderland.space` |
| Signature | `c7126087ca5b91fe0466dee18cdcf9a084c03458691a77da84c5d05a869e1285af9082f915e6546f529363035329e6f9ea94c4098e92c633eb095e351ebbc30c` |

Ed25519 signatures are deterministic, so a correct implementation returns exactly this signature.

## Using the signature

Send the resulting Hex string as the `signature` field of the authorization request:

```http
POST /auth/api/v1/authentication-management/session
```

For the full request and the tokens it returns, see [Authorizing an account](./authorizing-an-account.md).

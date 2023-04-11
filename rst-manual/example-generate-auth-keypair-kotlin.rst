0. Import the dependencies:
   
    .. code-block:: java

       import net.i2p.crypto.eddsa.EdDSAPrivateKey
       import net.i2p.crypto.eddsa.EdDSAPublicKey
       import net.i2p.crypto.eddsa.spec.EdDSANamedCurveTable
       import net.i2p.crypto.eddsa.spec.EdDSAPrivateKeySpec
       import net.i2p.crypto.eddsa.spec.EdDSAPublicKeySpec
       import java.security.KeyPair
       import java.security.SecureRandom
       import javax.crypto.Cipher
       import javax.crypto.KeyGenerator

1. Define the function to generate authentication key-pair:

   .. code-block:: kotlin

      fun deterministicAuthKeyPair(email: String, password: String): KeyPair {
          // step 1: Create a hash from user email and password
          val hash = (email + password).toByteArray(Charsets.UTF_8).hash()
          // step 2: Use symmetric encryption to generate a random seed
          val keypairSeed = encryptSymmetric(hash, password.toByteArray(Charsets.UTF_8))
          // step 3: Generate authentication key-pair from the generated seed
          return keypairFromSeed(keypairSeed)
      }

2. Define the function for symmetric encryption to generate a random seed based on user password and the hash of user email and password:

   .. code-block:: kotlin

      fun encryptSymmetric(message: ByteArray, password: ByteArray): ByteArray {
          val random = SecureRandom.getInstance("SHA1PRNG").apply { setSeed(password) }
          val keyGenerator = KeyGenerator.getInstance("AES").apply { init(256, random) }
          val secretKey = keyGenerator.generateKey()
          return Cipher.getInstance("AES/CBC/PKCS5PADDING")
              .apply { init(Cipher.ENCRYPT_MODE, secretKey, random) }
              .doFinal(message)
      }

3. Define the function to generate a key-pair from the generated seed:

   .. code-block:: kotlin

      fun keypairFromSeed(seed: ByteArray): KeyPair {
          val random = SecureRandom.getInstance("SHA1PRNG").apply { setSeed(seed) }
          val spec = EdDSANamedCurveTable.getByName(EdDSANamedCurveTable.ED_25519)
          val keyPairSeed = ByteArray(spec.curve.field.getb() / 8).apply { random.nextBytes(this) }
          val privKey = EdDSAPrivateKeySpec(keyPairSeed, spec)
          val pubKey = EdDSAPublicKeySpec(privKey.a, spec)
          return KeyPair(EdDSAPublicKey(pubKey), EdDSAPrivateKey(privKey))
      }
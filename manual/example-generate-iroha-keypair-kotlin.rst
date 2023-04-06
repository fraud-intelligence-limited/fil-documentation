0. Import the dependencies:

   .. code-block:: java

      import net.i2p.crypto.eddsa.EdDSAPrivateKey
      import net.i2p.crypto.eddsa.EdDSAPublicKey
      import net.i2p.crypto.eddsa.spec.EdDSANamedCurveTable
      import net.i2p.crypto.eddsa.spec.EdDSAPrivateKeySpec
      import net.i2p.crypto.eddsa.spec.EdDSAPublicKeySpec
      import java.security.KeyPair
      import java.security.SecureRandom


1. Define the function to generate Iroha2 key-pair:

   .. code-block:: kotlin

      fun irohaKeyPair(email: String,
                       password: String,
                       salt: ByteArray = email.toByteArray(Charsets.UTF_8).hash()): KeyPair {
          // step 1: Create a hash from user email and password
          val hash = (email + password).toByteArray(Charsets.UTF_8).hash()
          // step 2: Generate a blockchain seed from the generated hash and salt
          val blockchainSeed = (hash + salt).hash()
          // step 3: Generate Iroha2 key-pair from the generated blockchain seed
          return keypairFromSeed(blockchainSeed)
      }


2. Define the function to generate a key-pair from the generated seed:

   .. code-block:: kotlin

      fun keypairFromSeed(seed: ByteArray): KeyPair {
          val random = SecureRandom.getInstance("SHA1PRNG").apply { setSeed(seed) }
          val spec = EdDSANamedCurveTable.getByName(EdDSANamedCurveTable.ED_25519)
          val keyPairSeed = ByteArray(spec.curve.field.getb() / 8).apply { random.nextBytes(this) }
          val privKey = EdDSAPrivateKeySpec(keyPairSeed, spec)
          val pubKey = EdDSAPublicKeySpec(privKey.a, spec)
          return KeyPair(EdDSAPublicKey(pubKey), EdDSAPrivateKey(privKey))
      }

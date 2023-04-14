# Generating key pairs

### Generating authentication key pair

To generate an **authentication key pair**, perform the following steps:

1. Create a [Blake2b-256 hash](<https://en.wikipedia.org/wiki/BLAKE_(hash_function)>) from a user **email** and **password**.
2. Use symmetric encryption to generate a random **seed** based on the **generated hash** and user **password**. We recommend using [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) with GCM or CCM secure mode.
3. Generate an authentication key-pair from the **generated seed**.

### Generating Iroha 2 key pair

To generate an **Iroha 2 key pair**, perform the following steps:

1. [Request a salt value](../api_specification/auth-controller/retrieving_salt_values.md), which is a random piece of bytes only known to the network owners.
2. Create a [Blake2b-256 hash](<https://en.wikipedia.org/wiki/BLAKE_(hash_function)>) from a user email and password.
3. Generate a **blockchain seed** from the **generated hash** and **salt**.
4. Generate an Iroha2 key-pair from the **blockchain seed**.

# How FIB works

FIB is a decentralized network that enables the secure sharing and analysis of data related to [_fraud events_](Fraud_events.md).

Authorized participants—**_peers_**—can submit information about suspected or confirmed fraudulent activities to the FIB network, where it is recorded on the blockchain. The submitted information can include details such as origin identifiers (e.g., IP addresses), the type of event, the exact time the event occurred, etc.

By sharing this information and collaborating with other peers in the network, contributors can help prevent future fraudulent activities. In return for their contributions, peers can earn rewards in the form of credit tokens.

## Data on the network

The FIB network serves as a secure database of various [_fraud events_](Fraud_events.md) that are stored on the blockchain as [_contributions_](Contributions.md).

Authorized peers can upload and download these contributions.

Contributions uploaded by peers allow for the continuous expansion and updating of the FIB network. This facilitates information sharing and enhances the overall accuracy of data stored on the network.

The contributions on the network can also be download by peers to update their own records and stay informed about the latest fraudulent activities. This process helps organizations remain vigilant and prevent fraudulent activities from occurring within their own systems.

For more information, see [_Uploading contributions_](./Tokenomics.md#uploading-fraud-events) and [_Downloading contributions_](./Tokenomics.md#downloading-fraud-events).

## Network security

The security of the FIB network is crucial to ensure the safety of its users and transactions. To achieve this, the network uses scalable backend services serving requests to create and send transactions to a blockchain node securely.

The network consists of multiple nodes, which increases its resilience and availability, potentially improving its ability to recover from disruptions.

The security of the FIB network also relies on the use of key pairs and digital signatures.

There are two types of key pairs that are required to interact with the FIB API backend:

1. **Authentication key pair** — a deterministic [_Ed25519_](https://en.wikipedia.org/wiki/EdDSA) key pair generated from the user’s **email** and **password**.
2. **Iroha 2 key pair** — a deterministic [_Ed25519_](https://en.wikipedia.org/wiki/EdDSA) key pair generated from the user’s **email**, **password**, and a random **salt** value.

When a user creates a transaction on the FIB network, they sign it with their private key, which can then be verified by anyone using their public key. This process ensures that only the intended user is authorized to sign their transactions.

Additionally, signing transactions with key pairs can enhance the privacy and confidentiality of the user's information on the network. Overall, the use of key pairs and digital signatures is a crucial aspect of the FIB network's security infrastructure.

For more information, see _[Generating key pairs](../Tutorials/Generating_key_pairs.md)_ and _[Signing transactions](../Tutorials/Signing_transactions.md)_.

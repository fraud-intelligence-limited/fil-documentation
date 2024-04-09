# How FIB works

FIB is a decentralized network that enables the secure sharing and analysis of data related to [fraud events](fraud-events.md).

Our system allows the telco companies and vendors to register as **peers**. In turn, employees of these companies can register as **users** under their company's domain.

::: tip Note

Peers are also considered to be users.

:::

Authorized participants—**peers** and **users**—can submit information about suspected or confirmed fraudulent activities to the FIB network, where it is recorded on the blockchain. The submitted information can include details such as origin identifiers (e.g., IP addresses), the type of event, the exact time the event occurred, etc.

By sharing this information and collaborating with other peers on the network, contributors can help prevent future fraudulent activities. In return for their contributions, peers and their users can earn rewards in the form of digital credits, called **tokens**.

## Data on the network

The FIB network serves as a secure database of various [fraud events](fraud-events.md) that are stored on the blockchain as [contributions](contributions.md).

Registered users can upload and download these contributions.

Contributions uploaded by peers and their users allow for the continuous expansion and updating of the FIB network. This facilitates information sharing and enhances the overall accuracy of data stored on the network.

The contributions on the network can also be downloaded by peers to update their own records and stay informed about the latest fraudulent activities. This process helps organizations remain vigilant and prevent fraudulent activities from occurring within their own systems.

For more information, see [Uploading contributions](./tokenomics.md#uploading-fraud-events) and [Downloading contributions](./tokenomics.md#downloading-fraud-events).

::: tip Note

To streamline the process of sharing fraud data, registered companies can implement their already existing system with FIB via API.

For details, see [Getting started](../getting-started.md).

:::

## Network security

The security of the FIB network is crucial to ensure the safety of its users and transactions. To achieve this, the network uses scalable backend services serving requests to create and send transactions to a blockchain node securely.

The network consists of multiple nodes, which increases its resilience and availability, potentially improving its ability to recover from disruptions.

The security of the FIB network also relies on the use of key pairs and digital signatures.

There are two types of key pairs that are required to interact with the FIB API backend:

1. [**Authorization** key pair](web-interface.md#akp) — a deterministic [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) key pair generated from the user’s **email** and **password**; used for authorization on the FIB network.
2. [**Blockchain** key pair](web-interface.md#bkp) — a deterministic [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) key pair generated from the user’s **email**, **password**, and an additional random numeric value; used for signing user transactions on the FIB network.

::: info

These key pairs are generated automatically for every new user during registration, and can be found at the **Profile** screen of the [FIB Web App](https://app.fraudintelligencelimited.com).

For details, see the following:

  - [Web App UI: 'Authorization' key pair](web-interface.md#akp)
  - [Web App UI: 'Blockchain' key pair](web-interface.md#bkp)

:::

When a user creates a transaction on the FIB network, they sign it with their private key, which can then be verified by anyone using their public key. This process ensures that only the intended user is authorized to sign their transactions.

Additionally, signing transactions with key pairs can enhance the privacy and confidentiality of the user's information on the network. Overall, the use of key pairs and digital signatures is a crucial aspect of the FIB network's security infrastructure.

For more information, see [Signing transactions](../tutorials-api/signing-transactions.md) and [Signing user email addresses](../tutorials-api/signing-user-email-addresses.md).

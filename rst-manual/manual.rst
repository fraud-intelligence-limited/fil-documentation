Orillion API
############

Glossary
********

Here we define the terms that will be used throughout the manual.

Iroha2
------

`Iroha2 <https://github.com/hyperledger/iroha/tree/iroha2>`_ is a blockchain ledger used to manage accounts, assets, and on-chain data storage with efficient smart contracts.
Iroha2 is written in Rust and provides the following SDKs:

- `Iroha Java/Kotlin <https://github.com/hyperledger/iroha-java/tree/iroha2-dev>`_
- `Iroha Python <https://github.com/hyperledger/iroha-python>`_
- `Iroha Javascript <https://github.com/hyperledger/iroha-javascript/tree/iroha2>`_
- `Iroha Swift <https://github.com/hyperledger/iroha-ios/tree/iroha2-dev>`_

Check out `Iroha2 Tutorial <https://hyperledger.github.io/iroha-2-docs/>`_ as it provides an introduction to Iroha2
as well as language-specific guides for Bash, Python, Rust, Kotlin/Java, and Javascript/TypeScript.

Fraud Identifier
----------------

Fraud Identifier is the main identifier of a fraud event, which could be one of these:

- a phone number or a range of phone numbers
- an IP address or a range of IP addresses
- a device identifier (IMEI)

Check `contribution` data structure for details of how a fraud event is described when reported.

Fraud Type
----------

The type of fraud that is being reported, could be one of these:

- ``IPFraud`` for fraud events with IP addresses
- ``IRSF`` for International Revenue Share Fraud
- ``StolenDevice`` for fraud events with stolen devices
- ``Wangiri`` for Wangiri fraud (a call-back scam) that tricks victims into calling back a premium number


Contribution
------------

Contribution is a piece of data that describes a fraud event. Contributions have the following predefined structure:

.. include:: data-contribution.rst

Authentication key-pair 
-----------------------

One of the two key-pairs needed to interact with the backend (the other one is `Iroha2 key-pair`_).

**Authentication key-pair** is used only to authenticate on backend and retrieve a JSON web token as result of authentication.
To generate authentication key-pair, you need user **email** and **password**.
The key-pair is generated any time you enter user credentials.

See how to `generate authentication key-pair`_.

Note: The authentication key-pair depends on the user password, which means that when you change the password, you need to update the authentication key-pair in the metadata for the account.

Iroha2 key-pair
---------------

One of the two key-pairs needed to interact with the backend (the other one is `authentication key-pair`_).

**Iroha2 key-pair** is used to sign messages to Iroha2.
To generate Iroha2 key-pair, you need user **email**, user **password**, and random `salt`_.
The key-pair is generated any time you need to send a signed message to Iroha2.

See how to `generate Iroha2 key-pair`_.

Note: The Iroha2 key-pair depends on the user password, which means that when you change the password, you need to update the Iroha2 key-pair in the metadata for the account.

Salt
----

Salt is a random piece of bytes generated upon registration. It is known only to the network node owners.
Salt is needed to `generate Iroha2 key-pair`_. It also increases the entropy.

Peer
----

Peer is a participant of the system responsible for primary data contributions. Peers are represented as a set of users/credentials within the same organization.

To register a peer, admin would need the following data:

.. list-table::
   :widths: 20 20 40
   :header-rows: 1

   * - Field
     - Value Type 
     - Description
   * - ``accountName``
     - ``string``
     - The desired name for the Iroha2 account
   * - ``email``
     - ``string``
     - User email
   * - `authPublicKey`
     - ``string``
     - The public key of `authentication key-pair`_
   * - ``irohaPublicKey``
     - ``string``
     - The public key of `Iroha2 key-pair`_
   * - ``salt``
     - ``string``
     - Random `salt`_, which is a random piece of bytes generated upon registration and known only to the network owners

Key-pair Generation
*******************

You need `authentication key-pair`_ and `Iroha2 key-pair`_ to interact with the backend.

Generate authentication key-pair
--------------------------------

`Authentication key-pair`_ is a deterministic `Ed25519 <https://en.wikipedia.org/wiki/EdDSA>`_ key-pair
generated from user **email** and **password**.

To generate the authentication key-pair, follow these steps:

1. Create a `Blake2b-256 hash <https://en.wikipedia.org/wiki/BLAKE_(hash_function)>`_ from user **email** and **password**.
2. Use symmetric encryption to generate a random **seed** based on the **generated hash** and user **password**.
   We recommend using `AES-256 <https://en.wikipedia.org/wiki/Advanced_Encryption_Standard>`_ with GCM or CCM secure mode.
3. Generate authentication key-pair from the **generated seed**.

Below is an example of doing this in Kotlin:

.. include:: example-generate-auth-keypair-kotlin.rst

Generate Iroha2 key-pair
------------------------

`Iroha2 key-pair`_ is a deterministic `Ed25519 <https://en.wikipedia.org/wiki/EdDSA>`_ key-pair
generated from user **email**, user **password**, and random `salt`_.

To generate the Iroha2 key-pair, follow these steps:

1. `Request salt value`_, which is a random piece of bytes known only to the network owners.
2. Create a `Blake2b-256 hash <https://en.wikipedia.org/wiki/BLAKE_(hash_function)>`_ from user email and password.
3. Generate a **blockchain seed** from the **generated hash** and **salt**.
4. Generate Iroha2 key-pair from the **blockchain seed**.

Below is an example of doing this in Kotlin:

.. include:: example-generate-iroha-keypair-kotlin.rst

Transaction Signer
******************

Some operations require a transaction to be signed as Hex using `Iroha2 key-pair`_ before sending it to the backend.

When you sign a transaction, you provide the following input data:

- the public key of Iroha2 key-pair
- the private key of Iroha2 key-pair
- unsigned transaction 

The expected output is a transaction content and the signed result in Hex format.

You may use
`Iroha2 Transaction Signer <https://github.com/soramitsu/iroha2-tools/blob/master/transaction-signer/src/main/java/jp/co/soramitsu/orillion/signer/TransactionSigner.kt>`_
(written in Kotlin) as an example.

API
***

This section contains scenarios of how a user can interact with Orillion API:

- `Request salt value`_
- `Authorize a user account`_
- `Create a contribution`_
- `Query contribution history`_ (global and for a current user)
- `Query user balance`_

Request salt value
------------------

To get the deterministic `salt`_ from the blockchain, send ``/auth/api/v1/salt`` request.

The structure of the output:

.. code-block:: json

   {
      "data": "string",
      "status": {
        "code": 0,
        "message": "string",
        "name": "string"
      }
   }

The ``data`` contains the string with the salt value.

Authorize a user account
------------------------

To authorize an account, send ``/auth/api/v1/login`` request with valid input data:

.. list-table::
   :widths: 20 20 40
   :header-rows: 1

   * - Field
     - Value Type 
     - Description
   * - ``email``
     - ``string``
     - User email
   * - ``signature``
     - ``string``
     - The signature of the email encoded in hex with or without prefix (see `Transaction Signer`_)
   * - ``publicKey``
     - ``string``
     - The public key of the `authentication key-pair`_

Input data example:

.. code-block:: json

   {
       "email": "alice_wonderland@mail.com",
       "publicKey": "c99d5bd65f4fba5785739c36c5d4ce8ca332f8dbda4f9a3a0cdf1bca3ddb4a99",
       "signature": "dbdfe4a198822a46d8dcf9b9dcb9835e76e3a8812711f69b6f165d73656accf7ed \\
                     8d03cfd66a1e333e7c2d468be099c996fdf8a29bd209b7c0ef1e828e5cc30b"
   }

If authorization was successful, you will get the response with the following JSON web tokens:

.. list-table::
   :widths: 20 20 40
   :header-rows: 1

   * - Field
     - Value Type 
     - Description
   * - ``accessToken``
     - ``string``
     - Access token, which you will later use in headers of other requests as a `Bearer token <https://jwt.io/introduction>`_
   * - ``expirationTime``
     - `integer($int64)`
     - Token expiration moment in seconds of Unix epoch
   * - ``refreshToken``
     - ``string``
     - Refresh token

The structure of the output:

.. code-block:: json

   {
    "data": {
        "accessToken": "string",
        "expirationTime": 0,
        "refreshToken": "string"
    },
    "status": {
        "code": 0,
        "message": "string",
        "name": "string"
    }
   }


Create a contribution
---------------------

1. Send ``data/api/v1/assemble/contribution`` request with the following input data:

   .. include:: data-contribution.rst

   Examples of valid ranges for fraud identifiers:

   - ``79091231234-79091231245``
   - ``192.55.123.5-192.55.124.5``

   Example of input data:

   .. code-block:: json

      {
        "destination": "US",
        "expiryDate": 0,
        "fraudType": "IPFraud",
        "id": "192.55.123.5-192.55.124.5",
        "origination": "US"
      }

   In case of success, you will get the response with the unsigned data.

2. Sign the transaction as Hex using Iroha2 key-pair (see `Transaction Signer`_).
3. Send the signed transaction using ``/data/api/v1/contribution`` endpoint.

   The input data is a ``string`` with Hex-encoded signed transaction. The structure of the output:    

   .. code-block:: json

      {
        "data": {
            "accountId": "accountName@accountDomain",
            "definitionId": "assetName#assetDomain"
        },
        "status": {
            "code": 0,
            "message": "string",
            "name": "string"
        }
      }

   .. include:: data-token-id.rst

Query contribution history
--------------------------

To query contribution history, send:

- ``​/data​/api​/v1​/contribution​/top​/peer`` to request **current user** contribution history
- ``/data/api/v1/contribution/top`` to request **global** contribution history

with the following input parameters if you need to filter or paginate the response:

.. list-table::
   :widths: 20 20 40
   :header-rows: 1

   * - Parameter
     - Value Type 
     - Description
   * - ``size``
     - ``integer($int32)``
     - The number of contributions to request
   * - ``ts``
     - ``string`` 
     - The timestamp (`Unix epoch time <https://www.epochconverter.com/clock>`_) to request contributions made after that point in time

Examples:

- ``/data/api/v1/contribution/top/peer?ts=0`` will return **all** contributions made by the current user
- ``/data/api/v1/contribution/top?ts=0`` will return **all** contributions
- ``​/data​/api​/v1​/contribution​/top​?ts=value`` with ``value`` being the current Unix epoch time will return an empty response

You will get the response output with an array of contributions. See `contribution`_ data structure for more details.

.. code-block:: json

   {
      "data": [
        {
          "destination": "US",
          "expiryDate": 0,
          "fraudType": "IPFraud",
          "id": "127.0.0.1",
          "origination": "US"
        }
      ],
      "status": {
        "code": 0,
        "message": "string",
        "name": "string"
      }
   }

Query user balance
------------------

To get user balance, send the ``/data/api/v1/balance`` request.

You will receive the output in the following format:

.. code-block:: json

    {
      "data": {
        "balance": 0,
        "tokenId": {
          "accountId": "accountName@accountDomain",
          "definitionId": "assetName#assetDomain"
        }
      },
      "status": {
        "code": 0,
        "message": "string",
        "name": "string"
      }
    }


The data in the response:

.. list-table::
  :widths: 20 20 40
  :header-rows: 1

  * - Field
    - Value Type 
    - Description
  * - ``balance``
    - ``integer($int32)``
    - User balance
  * - ``tokenId``
    - ``TokenId``
    - The structure with account id and token definition id

The ``TokenId`` data structure:

.. include:: data-token-id.rst
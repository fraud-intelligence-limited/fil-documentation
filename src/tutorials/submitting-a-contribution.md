# Submitting a contribution

::: tip Note

A peer account must be authorized for this operation to succeed. <br>_See [Authorizing an account](authorizing-an-account.md)_.

:::

To submit a contribution, perform the following steps:

1. Assemble a contribution:

   Send a `POST` request to the <br> `/data/api/v1/contribution-management/contribution/assemble` endpoint with the following data specified in the body of the request:

   | Field | Value Type | Description |
   | --- | --- | --- |
   | `id` | `string` | Fraud event identifier. |
   | `fraudType` | `enum string` | The type of the fraud event. <br> Could be one of the following:<ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
   | `origination` | `string` | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
   | `destination` | `string` | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
   | `expiryDate` | `integer($int32)` | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |

   ::: details Input structure

   ```json5
   {
     id: 'string',
     fraudType: 'Wangiri', //Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
     origination: 'string',
     destination: 'string',
     expiryDate: 0, //integer($int32)
     fraudStatus: 'Active', //Could be one of the following: Active, Expired, Flagged
     confidenceIndex: 0, //number($double)
     isPremium: true, //boolean
     peerId: 'string',
     premium: true //boolean
   }
   ```

   :::

   ::: details Input example

   ```json5
   {
     id: '127.0.0.1-127.0.0.2',
     fraudType: 'IPFraud',
     origination: 'SE',
     destination: 'SE',
     expiryDate: 1694775553,
     fraudStatus: 'Active'
   }
   ```

   :::

   ::: details Output structure

   ```json5
   {
     status: {
       code: 0, //integer($int32)
       name: 'string',
       message: 'string'
     },
     data: 'string'
   }
   ```

   :::

   ::: details Output example

   ```json5
   // 200 "OK"

   {
     status: {
       code: 0,
       name: 'Ok'
     },
     data: 'transactionBase64'
   }
   ```

   :::

2. Sign the `transactionBase64` string (see [Signing transactions](signing-transactions.md)).
3. Submit the contribution you assembled and signed in **_steps 1 and 2:_**

   - Send a `POST` request to the `/data/api/v1/contribution-management/contribution` endpoint with the signed `transactionBase64` string in the body of the request.

   ::: details Input structure

   ```json5
   'string'
   ```

   :::

   ::: details Input example

   ```
   transactionBase64
   ```

   :::

   ::: details Output structure

   ```json5
   {
     status: {
       code: 0, //integer($int32)
       name: 'string',
       message: 'string'
     },
     data: {}
   }
   ```

   :::

   ::: details Output example

   ```json5
   // 200 "OK"

   {
     status: {
       code: 0,
       name: 'Ok'
     },
     data: {
       definitionId: '***#domain',
       accountId: 'user@domain'
     }
   }
   ```

   :::

### Expected result

An assembled and signed contribution is submitted to the ledger, the peer’s list of contributions is updated and their credit balance is increased by a number equal to the number of contributions submitted, based on the current reward rate active in the network.

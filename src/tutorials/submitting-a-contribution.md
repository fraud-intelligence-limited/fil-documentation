# Submitting a contribution

::: tip Note

A peer account must be authorized for this operation to succeed. _See [Authorizing an account](authorizing-an-account.md)_.

:::

To submit a contribution, perform the following steps:

1. Assemble a contribution by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   POST /data/api/v1/contribution-management/contribution/assemble
   ```

   ```json5 [Input structure]
   {
     id: 'string', //A unique fraud event identifier
     fraudType: 'Wangiri', //The type of the fraud event. Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
     origination: 'string', //The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166)
     destination: 'string', //The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166)
     expiryDate: 0 //integer($int32) //The exact time and date until which the event is considered relevant (represented as Unix Epoch time in seconds)
   }
   ```

   ```json5 [Input example]
   {
     id: '127.0.0.1-127.0.0.2',
     fraudType: 'IPFraud',
     origination: 'SE',
     destination: 'SE',
     expiryDate: 1694775553
   }
   ```

   ```json5 [Output structure]
   {
     status: {
       code: 0, //integer($int32)
       name: 'string',
       message: 'string'
     },
     data: 'string'
   }
   ```

   ```json5 [Output example]
   // 200 "OK"

   {
     status: {
       code: 0,
       name: 'Ok'
     },
     data: 'transactionHex'
   }
   ```

   :::

2. Sign the `transactionHex` string (see [Signing transactions](signing-transactions.md)) retrieved from the response.
3. Submit the assembled and signed contribution by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   POST /data/api/v1/contribution-management/contribution
   ```

   ```json5 [Input structure]
   'transactionHex'
   ```

   ```json5 [Input example]
   '0114616c69636528776f6e6465726c616e640004000d09001468656c6c6f00002cde318c87010000a0860100000000000000041c65643235353139807233bfc89dcbd68c19fde6ce6158225298ec1131b6a130d1aeb454c1ab5183c00101bef276fc36ba638abd422e76fd0e6df319df1c3d336ab60d7276333b4010bb7d962d04b273d9caf91cb8509581c0b55e1cdee371c52863a8b4b62c67fbfc870f'
   ```

   ```json5 [Output structure]
   {
     status: {
       code: 0, //integer($int32)
       name: 'string',
       message: 'string'
     },
     data: {}
   }
   ```

   ```json5 [Output example]
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

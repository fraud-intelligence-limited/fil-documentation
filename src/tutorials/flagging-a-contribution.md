# Flagging a contribution

::: tip Note

A peer account must be authorized for this operation to succeed. See [Authorizing an account](authorizing-an-account.md).

:::

To flag a contribution, perform the following steps:

1. Request to flag a contribution by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   POST /data/api/v1/contribution-management/contribution/{contributionID} //{contributionID} is a range of 'id' values (Fraud identifiers)
   ```

   ```json5 [Output structure]
   {
     status: {
       code: 0, //integer($int32)
       name: 'string',
       message: 'string'
     },
     data: [
       {
         assetIds: [
           {
             definitionId: 'MPtVi@4`V}YI~WtYc~BK(2!E_Z^pvG6ch{ycg^usDlMu>UAhwI_:C/>B:D#$=*]3{;-,\\,%t"vB5EK:3hGa+Y7p&mBS6xx2O>@?V_Pg\\B,{B!PC;`&N+>Z3{edxQkY!##*RDF!%/w-Z2]_:tO',
             accountId: 'V)60Rw";qse6jLG|T+ij`0D.sy91[eWW=vO6mYF@jI<741{%FDj(<s"[gh_`XWz?jOu;(+kJ/(\'\\`b_him2G5N:@{T|db~)X@TJ6rYj>Q_?>,-9l\'M\\{;Pi'
           }
         ]
       }
     ]
   }
   ```

   ```json5 [Output example]
   // 200 "OK"

   {
     status: {
       code: 0,
       name: 'Ok'
     },
     data: [
       {
         assetDefinitionId: '127.0.0.1-127.0.0.2_1666194511450#contribution',
         contribution: {
           id: '127.0.0.1-127.0.0.2',
           fraudType: 'IPFraud',
           origination: 'SE',
           destination: 'SE',
           expiryDate: 1694775553,
           fraudStatus: 'Active',
           confidenceIndex: null
         }
       }
     ]
   }
   ```

   :::

   ::: tip Note

   If the `{contributionID}` corresponds to a phone number or an IP address, it can be represented as a single value.

   :::

2. Assemble a contribution flag by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   PATCH /data/api/v1/contribution-manager/contribution/flag/assemble
   ```

   ```json5 [Input structure]
   {
     assetIds: [
       {
         definitionId: 'id_range#contribution', //<id_range> must be the same as `{contributionID}` value set in Step 1
         accountId: 'user@peerId'
       }
     ]
   }
   ```

   ```json5 [Input example]
   {
     assetIds: [
       {
         definitionId: '127.0.0.1-127.0.0.2_1666194511450#contribution',
         accountId: 'qa@qa'
       }
     ]
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

3. Sign the `transactionHex` string (see [Signing transactions](signing-transactions.md)) retrieved from the response.
4. Submit the assembled and signed contribution flag by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   PATCH /data/api/v1/contribution-management/contribution/flag
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
   // 200 "OK"

   {
     status: {
       code: 0,
       name: 'Ok'
     },
     data: {}
   }
   ```

   :::

### Expected result

The contribution’s `fraudStatus` value is set to `Flagged`.

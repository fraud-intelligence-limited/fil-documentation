# Flagging a contribution

::: tip Note

A peer account must be authorized for this operation to succeed. _See [Authorizing an account](authorizing-an-account.md)_.

:::

To flag a contribution, perform the following steps:

1. Retrieve the contribution(s) that you would like to flag by sending the following request:

   ::: code-group Data structure

   ```http [Request]
   POST /data/api/v1/contribution-management/contribution/{id} //{id} is a range of 'id' values (Fraud identifiers)
   ```

   ```http [Request example]
   POST /data/api/v1/contribution-management/contribution/130.130.130.1-130.130.130.130
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": [
       {
           "assetDefinitionIds": "idRange#contribution",
           "contribution": {
               "id": "idRange", //127.0.0.1 OR 127.0.0.1-127.0.0.2 OR +14155552671 OR +14155552671-+14155552672 OR 107615702016566
               "fraudType": "string",
               "origination": "string",
               "destination": "string",
               "expiryDate": integer($int32),
               "fraudStatus": "string(enum)", //'ACTIVE' OR 'EXPIRED' OR 'FLAGGED'
               "confidenceIndex": number($double),
               "isPrivileged": boolean,
               "peerId": "string",
               "flagger": "string",
               "timestamp": integer($int32),
               "flagTimestamp": integer($int32)
         }
       }
     ]
   }
   ```

   ```json5 [Output example]
   {
     status: {
       code: 200,
       name: 'Ok',
       message: 'Contribution has been successfully retrieved by its ID'
     },
     data: [
       {
         assetDefinitionIds: '130.130.130.1-130.130.130.130_1711570471#contribution',
         contribution: {
           id: '130.130.130.1-130.130.130.130',
           fraudType: 'IPFraud',
           origination: 'GB',
           destination: 'US',
           expiryDate: 1719346471,
           fraudStatus: 'Active',
           confidenceIndex: null,
           isPrivileged: false,
           peerId: 'soramitsu',
           flagger: null,
           timestamp: 1711570471,
           flagTimestamp: null
         }
       }
     ]
   }
   ```

   :::

   ::: tip Note

   If the `{id}` corresponds to a phone number or an IP address, it can be represented as a single value.

   :::

2. Assemble a contribution flag by sending the following request (use the `assetDefinitionIds` value retrieved in Step 1 for this request):

   ::: code-group Data structure

   ```http [Request]
   PATCH /data/api/v1/contribution-manager/contribution/flag/assemble
   ```

   ```json5 [Input structure]
   {
     assetDefinitionIds: [
       {
         definitionId: 'idRange#contribution', //Must be the same as `{assetDefinitionIds}` value specified in Step 1
         accountId: 'accountName@accountDomain'
       }
     ]
   }
   ```

   ```json5 [Input example]
   {
     assetDefinitionIds: [
       {
         definitionId: '127.0.0.1-127.0.0.2_1666194511450#contribution',
         accountId: 'alice@sora'
       }
     ]
   }
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": "transactionHex"
   }
   ```

   ```json5 [Output example]
   {
     status: {
       code: 200,
       name: 'OK',
       message: 'Contribution flag has been assembled and its `transactionHex` string has been retrieved successfully'
     },
     data: '90275ddf11ae82c18aa9c74cee1513098e2199c270e3f24170eb1c2545753ba6985b037c4caef649afd1fa7f8252b42bb19d540afdfa85f4b1330da51bdce70a396d5d0bacea7416f24f513b8ae34fdcd889f709fa38c3c4e5c4e7170834b4bc4b46a2e8adc89ae58611d5f326fa0a1e476622ff42bd5ce2de16f5d5caf413aa'
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
   'transactionHex(signed)'
   ```

   ```json5 [Input example]
   'c11ed7ea555c4dd0fab11c43d0530c618c5bebd8a5123c4ac8d72223cbd80b4b0258cdf1b932084873e739b0c8cd6885600e0321868297442060bd353d8c45c89fcdd21934f378235639b08a29ca557b80b4e18002b97a4dc5b664d9863ed51713904415cafc222f47bece2d4fb18e2b0a0b95777dbdfbd14640ff5260e85362'
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": {
       "rewarded": integer($int32)
     }
   }
   ```

   ```json5 [Output example]
   {
     status: {
       code: 200,
       name: 'OK',
       message: 'Contribution has been flagged and its `transactionHex` string has been retrieved successfully'
     },
     data: {
       rewarded: 10
     }
   }
   ```

   :::

### Expected result

The contribution’s `fraudStatus` value is set to `Flagged`, and the submitting peer is rewarded with tokens.

For details, see the following:

- [Contributions: API data structures](../overview/contributions.md#api-data-structures)
- [Fraud Events: Fraud event data model](../overview/fraud-events.md#fraud-event-data-model)

::: tip Note

Flagging a contribution uploaded by the same peer does not provide token rewards.

:::

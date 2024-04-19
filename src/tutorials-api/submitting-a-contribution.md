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
   [
     {
       "id": "string", //127.0.0.1 OR 127.0.0.1-127.0.0.2 OR +14155552671 OR +14155552671-+14155552672 OR 107615702016566
       "fraudType": "string",
       "origination": "string",
       "destination": "string",
       "expiryDate": integer($int32),
       "fraudStatus": "string(enum)", //'ACTIVE' OR 'EXPIRED' OR 'FLAGGED'
       "confidenceIndex": number($double),
       "isPrivileged": boolean,
       "peerId": "string",
       "flagger": "string",
       "timestamp": integer($int32)
     }
   ]
   ```

   ```json5 [Input example]
   [
     {
       "id": "129.0.0.1",
       "fraudType": "IPFraud",
       "origination": "SE",
       "destination": "GB",
       "expiryDate": 1719068894
       "fraudStatus": "Active"
       "confidenceIndex": 100,
       "isPrivileged": true,
       "peerId": "wonderland",
       "flagger": "alice@wonderland",
       "timestamp": 1711120097
     }
   ]
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
       message: 'Contribution has been assembled and its transaction `transactionHex` string has been retrieved successfully'
     },
     data: '01004b3f31cf8c0100001461646d696e0c626f620014000d0902843132392e302e302e312d3132392e302e302e315f3137303432383331363033393530636f6e747269627574696f6e030000000a0d0d6443616e5365744b657956616c7565496e55736572417373657421017b2261737365745f6964223a20223132392e302e302e312d3132392e302e302e315f3137303432383331363033393523636f6e747269627574696f6e23626f624061646d696e227d0d08011461646d696e0c626f620a0d0d7c43616e526567697374657241737365747357697468446566696e6974696f6e25017b2261737365745f646566696e6974696f6e5f6964223a20223132392e302e302e312d3132392e302e302e315f3137303432383331363033393523636f6e747269627574696f6e227d0d08011461646d696e0c626f62000d090900d86f757464617465645f636f6e747269627574696f6e3132392e302e302e312d3132392e302e302e315f313730343238333136303339350004080d0803843132392e302e302e312d3132392e302e302e315f3137303432383331363033393530636f6e747269627574696f6e1461646d696e0c626f620d020c7374730d14000100000001010000001461646d696e0c626f620201dcb9127100000000000000000000080d08011461646d696e0c626f620d0234636f6e747269627574696f6e730d0199015b7b226964223a223132392e302e302e312d3132392e302e302e31222c226674223a332c226f7267223a225345222c22647374223a225345222c22737473223a302c226564223a313839373035323633362c227473223a313730343238333136303339357d5d01005c26050000000001a187959900'
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
   'transactionHex(signed)'
   ```

   ```json5 [Input example]
   '01004b3f31cf8c0100001461646d696e0c626f620014000d0902843132392e302e302e312d3132392e302e302e315f3137303432383331363033393530636f6e747269627574696f6e030000000a0d0d6443616e5365744b657956616c7565496e55736572417373657421017b2261737365745f6964223a20223132392e302e302e312d3132392e302e302e315f3137303432383331363033393523636f6e747269627574696f6e23626f624061646d696e227d0d08011461646d696e0c626f620a0d0d7c43616e526567697374657241737365747357697468446566696e6974696f6e25017b2261737365745f646566696e6974696f6e5f6964223a20223132392e302e302e312d3132392e302e302e315f3137303432383331363033393523636f6e747269627574696f6e227d0d08011461646d696e0c626f62000d090900d86f757464617465645f636f6e747269627574696f6e3132392e302e302e312d3132392e302e302e315f313730343238333136303339350004080d0803843132392e302e302e312d3132392e302e302e315f3137303432383331363033393530636f6e747269627574696f6e1461646d696e0c626f620d020c7374730d14000100000001010000001461646d696e0c626f620201dcb9127100000000000000000000080d08011461646d696e0c626f620d0234636f6e747269627574696f6e730d0199015b7b226964223a223132392e302e302e312d3132392e302e302e31222c226674223a332c226f7267223a225345222c22647374223a225345222c22737473223a302c226564223a313839373035323633362c227473223a313730343238333136303339357d5d01005c26050000000001a187959900'
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": {
       "tokenIds": [
         {
           "definitionId": "idRange#assetDomain",
           "accountId": "accountName@accountDomain"
         }
       ],
       "rewarded": integer($int32)
     }
   }
   ```

   ```json5 [Output example]
   {
     status: {
       code: 200,
       name: 'OK',
       message: 'Contribution has been submitted and tokens have been rewarded successfully'
     },
     data: {
       tokenIds: [
         {
           definitionId: '+79991234567_12345#contribution',
           accountId: 'cat_thecat@xome'
         }
       ],
       rewarded: 100
     }
   }
   ```

   :::

### Expected result

An assembled and signed contribution is submitted to the ledger, the peer’s list of contributions is updated and their [token balance](../overview/tokenomics.md#token-balance) is increased based on the current reward rate active in the network (see [Current conversion rate](../overview/tokenomics.md)).

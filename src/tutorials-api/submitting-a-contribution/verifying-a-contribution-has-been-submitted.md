# Verifying a contribution has been submitted

To verify that a contribution has been successfully submitted and the contributor’s balance has been updated accordingly, perform any one or both of the following steps:

1. Retrieve a list of the peer’s contributions:

   ::: code-group

   ```http [Request]
   GET /data/api/v1/contribution-management/contribution?self-only=true
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": {
       "contributions": [
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
       ],
       "details": {
         "self": integer($int32), //The number of contributions that have been submitted by the requesting user
         "old": integer($int32), //The number of contributions that have already been seen by the requesting user
         "new": integer($int32), //The number of contributions that have _not_ yet been seen by the requesting user
         "tokensSpent": integer($int32), //The total amount of tokens spent on the retrieved contributions
         "balanceLeft": integer($int32), //The remaining tokens balance after retrieving contributions
         "contributionsNotReturned": integer($int32) //The number of contributions not yet returned
       }
     }
   }
   ```

   ```json5 [Output example]
   {
       "status": {
           "code": 200,
           "name": "Ok",
           "message": "Contributions have been successfully retrieved and filtered by the specified parameters"
       },
       "data": {
           "contributions": [
               {
                   "id": "127.0.0.1-127.0.0.1",
                   "fraudType": "IPFraud",
                   "origination": "UA",
                   "destination": "GB",
                   "expiryDate": 1711373543,
                   "fraudStatus": "Active",
                   "confidenceIndex": null,
                   "isPrivileged": false,
                   "peerId": "test",
                   "flagger": null,
                   "timestamp": xxx,
                   "flagTimestamp": 1711891326
               },
               {
                   "id": "127.0.0.1-127.0.0.1",
                   "fraudType": "IPFraud",
                   "origination": "GA",
                   "destination": "RU",
                   "expiryDate": 1711372367,
                   "fraudStatus": "Flagged",
                   "confidenceIndex": null,
                   "isPrivileged": false,
                   "peerId": "test",
                   "flagger": "alice@mail.com",
                   "timestamp": xxx,
                   "flagTimestamp": 1711977724
               }
           ],
           "details": {
               "self": 6,
               "old": 19,
               "new": 123,
               "tokensSpent": 190,
               "balanceLeft": 50,
               "contributionsNotReturned": 1
           }
       }
   }
   ```

   :::

   > If a contribution has been submitted successfully, it is added to the top of the list of the peer’s contributions.

2. Retrieve the peer’s token balance:

   ::: code-group

   ```http [Request]
   GET `/data/api/v1/wallet-management/balance`
   ```

   ```json5 [Output structure]
   {
     "status": {
       "code": integer($int32),
       "name": "string",
       "message": "string"
     },
     "data": {
       "tokenId": {
         "definitionId": "assetName#assetDomain",
         "accountId": "accountName@accountDomain"
       },
       "balance": integer($int64)
     }
   }
   ```

   ```json5 [Output request]
   {
     "status": {
       "code": 200,
       "name": "OK",
       "message": "Token balance has been retrieved successfully"
     },
     "data": {
       "tokenId": {
         "definitionId": "token#admin",
         "accountId": "alice@mail.com"
       },
       "balance": 510
     }
   }
   ```

   > If a contribution has been submitted successfully, the peer’s balance is updated in accordance with the declared reward amounts.

# Verifying a contribution has been flagged

To verify that a contribution has been successfully flagged and the flagger's balance has been updated accordingly, perform any one or both of the following steps:

1. [Retrieve a list of the peer’s contributions](../../api-specification/contribution-controller/retrieving-contributions.md):

   ::: code-group

   ```http [Request]
   GET /data/api/v1/contribution-management/contribution?self-only=true
   ```

   ```json5 [Output structure]
   {
     status: {
       code: integer($int32),
       name: 'string',
       message: 'string'
     },
     data: {
       contributions: [
           {
             id: 'string', //127.0.0.1 OR 127.0.0.1-127.0.0.2 OR +14155552671 OR +14155552671-+14155552672 OR 107615702016566
             fraudType: 'string',
             origination: 'string',
             destination: 'string',
             expiryDate: integer($int32),
             fraudStatus: 'string(enum)', //'ACTIVE' OR 'EXPIRED' OR 'FLAGGED'
             confidenceIndex: number($double),
             isPrivileged: boolean,
             peerId: 'string',
             flagger: 'string',
             timestamp: integer($int32)
           }
       ],
       details: {
         self: integer($int32), //The number of contributions that have been submitted by the requesting user
         old: integer($int32), //The number of contributions that have already been seen by the requesting user
         new: integer($int32), //The number of contributions that have _not_ yet been seen by the requesting user
         newWithConfidenceIndex: integer($int32), //The number of retrieved `new` contributions that had their price potentailly affected by the confidence index
         creditsSpent: integer($int32), //The total amount of tokens spent on the retrieved contributions
         balanceLeft: integer($int32), //The remaining tokens balance after retrieving contributions
         contributionsNotReturned: integer($int32), //The number of contributions not yet returned
         contributionsNotReturnedCost: integer($int64) //The total cost of all the contributions that have not been returned but met the filter requirements
       }
     }
   }
   ```

   ```json5 [Output example]
   {
     status: {
       code: 200,
       name: 'Ok',
       message: 'Contributions have been successfully retrieved and filtered by the specified parameters'
     },
     data: {
       contributions: [
         {
           id: '127.0.0.1-127.0.0.1',
           fraudType: 'IPFraud',
           origination: 'UA',
           destination: 'GB',
           expiryDate: 1711373543,
           fraudStatus: 'Active',
           confidenceIndex: null,
           isPrivileged: false,
           peerId: 'test',
           flagger: null,
           timestamp: 2024-08-31T11:35:41Z,
           flagTimestamp: 2024-09-15T10:05:24Z
         },
         {
           id: '127.0.0.1-127.0.0.1',
           fraudType: 'IPFraud',
           origination: 'GA',
           destination: 'RU',
           expiryDate: 1711372367,
           fraudStatus: 'Flagged',
           confidenceIndex: null,
           isPrivileged: false,
           peerId: 'test',
           flagger: 'alice@mail.com',
           timestamp: 2024-08-30T17:07:33Z,
           flagTimestamp: 2024-09-15T10:05:24Z
         }
       ],
       details: {
         self: 6,
         old: 19,
         new: 123,
         creditsSpent: 190,
         balanceLeft: 50,
         contributionsNotReturned: 1
       }
     }
   }
   ```

   :::

   > If a contribution has been flagged successfully, it's `fraudStatus` is changed to `Flagged`.

2. [Retrieve the peer’s token balance](../../api-specification/wallet-controller/retrieving-token-balance.md):

   ::: code-group

   ```http [Request]
   GET `/data/api/v1/wallet-management/balance`
   ```

   ```json5 [Output structure]
   {
     status: {
       code: integer($int32),
       name: 'string',
       message: 'string'
     },
     data: {
       tokenId: {
         definitionId: 'assetName#assetDomain',
         accountId: 'accountName@accountDomain'
       },
       balance: integer($int64)
     }
   }
   ```

   ```json5 [Output request]
   {
     status: {
       code: 200,
       name: 'OK',
       message: 'Token balance has been retrieved successfully'
     },
     data: {
       tokenId: {
         definitionId: 'token#admin',
         accountId: 'alice@mail.com'
       },
       balance: 510
     }
   }
   ```

   > If a contribution has been flagged successfully, the peer’s balance is updated in accordance with the declared reward amounts.

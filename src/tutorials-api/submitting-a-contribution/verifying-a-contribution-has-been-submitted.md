# Verifying a contribution has been submitted

To verify that a contribution has been successfully submitted and the contributor’s balance has been updated accordingly, perform the following steps:

1. Retrieve a list of the peer’s top contributions:

   - Send the following request:

     ::: code-group

     ```http [Request]
     GET /data/api/v1/contribution-management/contribution?self-only=true
     ```

     ```json5 [Output structure]
     {
       status: {
         code: 0, //integer($int32)
         name: 'string',
         message: 'string'
       },
       data: []
     }
     ```

     ```json5 [Output example]
     {
       status: {
         code: 0,
         name: 'Ok'
       },
       data: [
         {
           id: '127.0.0.1-127.0.0.2',
           fraudType: 'IPFraud',
           origination: 'SE',
           destination: 'SE',
           expiryDate: 1694775553,
           fraudStatus: 'Active',
           confidenceIndex: null
         }
       ]
     }
     ```

     :::

   - If a contribution has been submitted successfully, it is added to the top of the list of the peer’s contributions.

2. Retrieve the peer’s credit balance:

   - Send the following request:

     ::: code-group

     ```http [Request]
     GET `/data/api/v1/wallet-management/balance`
     ```

     ```json5 [Output structure]
     {
       status: {
         code: 0, //integer($int32)
         name: 'string',
         message: 'string'
       },
       data: {
         tokenId: {
           definitionId: '<##g0?Fd2Tl@L.;XT<3!T#gf#^nm$g=IpRW,uB/BpdKye^s',
           accountId: '8*rV=|xv@PN^J~JO(V9\\K[Ho-4C:,MEpIMb-?~v4s[S._s;8l'
         },
         balance: 0 //integer($int32)
       }
     }
     ```

     ```json5 [Output request]
     {
       status: {
         code: 0,
         name: 'Ok'
       },
       data: {
         tokenId: {
           definitionId: 'credit#admin',
           accountId: 'qa@qa'
         },
         balance: 1001
       }
     }
     ```

   - If a contribution has been submitted successfully, the peer’s balance is updated in accordance with the declared reward amounts.

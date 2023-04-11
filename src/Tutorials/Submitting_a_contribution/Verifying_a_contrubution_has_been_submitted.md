# Verifying a contrubution has been submitted

To verify that a contribution has been successfully submitted and the contributor’s balance has been updated accordingly, perform the following steps:

1. Retrieve a list of the peer’s top contributions:

   - Send a `GET` request to the `/data/api/v1/contribution-management/contribution` endpoint with the `self-only` request parameter set to `true`.
   - If a contribution has been submitted successfuly, it is added to the top of the list of the peer’s contributions. ::: details Output structure

     ```json5
     {
       status: {
         code: 0, //integer($int32)
         name: 'string',
         message: 'string',
       },
       data: [],
     }
     ```

     :::

     ::: details Output example

     ```json5
     // 200 "OK"

     {
       status: {
         code: 0,
         name: 'Ok',
       },
       data: [
         {
           id: '127.0.0.1-127.0.0.2',
           fraudType: 'IPFraud',
           origination: 'SE',
           destination: 'SE',
           expiryDate: 1694775553,
           fraudStatus: 'Active',
           confidenceIndex: null,
         },
       ],
     }
     ```

     :::

2. Retrieve the peer’s credit balance:

   - Send a `GET` request to the `/data/api/v1/wallet-management/balance` endpoint.
   - If a contribution has been submitted successfuly, the peer’s balance is updated in accordance with the declared reward amounts. ::: details Output structure

     ```json5
     {
       status: {
         code: 0, //integer($int32)
         name: 'string',
         message: 'string',
       },
       data: {
         tokenId: {
           definitionId: '<##g0?Fd2Tl@L.;XT<3!T#gf#^nm$g=IpRW,uB/BpdKye^s',
           accountId: '8*rV=|xv@PN^J~JO(V9\\K[Ho-4C:,MEpIMb-?~v4s[S._s;8l',
         },
         balance: 0, //integer($int32)
       },
     }
     ```

     :::

     ::: details Output example

     ```json5
     // 200 "OK"

     {
       status: {
         code: 0,
         name: 'Ok',
       },
       data: {
         tokenId: {
           definitionId: 'credit#admin',
           accountId: 'qa@qa',
         },
         balance: 1001,
       },
     }
     ```

     :::

# Flagging a contribution

::: tip Note
A peer account must be authorized for this operation to succeed.
*See [Authorizing an account](Authorizing_an_account.md).*
:::

To flag a contribution, perform the following steps:

1. Request to flag a contribution:
    - Send a `POST` request to the <br>
    `/data/api/v1/contribution-management/contribution/{contributionID}` endpoint, where `{contributionID}` is a range of `id` values (Fraud identifiers).
    ::: details Ouput structure

    ```jsx
        {
          "status": {
            "code": 0,                  //integer($int32)
            "name": "string",
            "message": "string"
          },
          "data": [
            {
              "assetIds": [
                {
                  "definitionId": "MPtVi@4`V}YI~WtYc~BK(2!E_Z^pvG6ch{ycg^usDlMu>UAhwI_:C/>B:D#$=*]3{;-,\\,%t\"vB5EK:3hGa+Y7p&mBS6xx2O>@?V_Pg\\B,{B!PC;`&N+>Z3{edxQkY!##*RDF!%/w-Z2]_:tO",
                  "accountId": "V)60Rw\";qse6jLG|T+ij`0D.sy91[eWW=vO6mYF@jI<741{%FDj(<s\"[gh_`XWz?jOu;(+kJ/('\\`b_him2G5N:@{T|db~)X@TJ6rYj>Q_?>,-9l'M\\{;Pi"
                }
              ]
            }
          ]
        }
    ```
    :::

    ::: details Ouput example

    ```jsx
        200 "OK"

        {
        "status": {
          "code": 0,
          "name": "Ok"
        },
        "data": [
        {
            "assetDefinitionId": "127.0.0.1-127.0.0.2_1666194511450#contribution",
            "contribution": {
              "id": "127.0.0.1-127.0.0.2",
              "fraudType": "IPFraud",
              "origination": "SE",
              "destination": "SE",
              "expiryDate": 1694775553,
              "fraudStatus": "Active",
              "confidenceIndex": null
              }
            }   
          ]
        }
    ```
    :::


    ::: tip Note
    If the `{contributionID}` corresponds to a phone number or an IP address, it can be represented as a single value.
    :::

2. Assemble a contribution flag:
    - Send a `PATCH` request to the <br> `/data/api/v1/contribution-manager/contribution/flag/assemble` endpoint with the same values for the `definitionId` field that were used as `{contributionID}` in ***Step 1***.
    ::: details Input structure

    ```jsx
        {
          "assetIds": [
            {
              "definitionId": "CTgO1z^skW@4eO}rujd|p#a~xL05I\\IQlj/1.DMmRm#+CBw*t*s-krya74z@sDB",
              "accountId": "RJ03f{&m'wUhZmJ,AA~ccwomw(Ger^cV^^Zw(0i2I:^yx@#AKb$Flp/U<p1)X8kPOkQRtq4!2)VrbFM1}(=]f~=E7U_!\"kn-/hCxGaL(!bfF)1#'OSuV(D@xL'ijOE[\")a*TjU51%4"
            }
          ]
        }
    ```
    :::

    ::: details Input example

    ```jsx
        {
          "assetIds": [
            {
              "definitionId": "127.0.0.1-127.0.0.2_1666194511450#contribution",
              "accountId": "qa@qa"
            }
          ]
        }
    ```
    :::

    ::: details Output structure

    ```jsx
        {
          "status": {
            "code": 0,                  //integer($int32)
            "name": "string",
            "message": "string"
          },
          "data": "string"
        }
    ```
    :::

    ::: details Output example

    ```jsx
        200 "OK"

        {
          "status": {
            "code": 0,
            "name": "Ok"
          },
          "data": "someData"
        }
    ```
    :::

3. Sign the `someData` string (see *[Signing transactions](Signing_transactions.md)*).
4. Submit the contribution flag you assembled and signed in ***steps 2 and 3:***
    - Send a `PATCH` request to the `/data/api/v1/contribution-management/contribution/flag` endpoint with the signed `someData` string in the body of the request.
    ::: details Input structure

    ```jsx
        "string"
    ```
    :::

    ::: details Input example

    ```jsx
        someData
    ```
    :::

    ::: details Output structure

    ```jsx
        {
          "status": {
            "code": 0,                  //integer($int32)
            "name": "string",
            "message": "string"
          },
          "data": {}
        }
    ```
    :::

    ::: details Output example

    ```jsx
        200 "OK"

        {
          "status": {
            "code": 0,
            "name": "Ok"
          },
          "data": {}
        }
    ```
    :::


### Expected result

The contribution’s `fraudStatus` value is set to `Flagged`.

# Submitting a contribution

<aside>
ℹ️ A peer account must be authorized for this operation to succeed.
***************************See [Authorizing an account](Authorizing%20an%20account).*

</aside>

To submit a contribution, perform the following steps:

1. Assemble a contribution:
    - Send a POST request to the `/api/v1/contribution-management/contribution/assemble` endpoint with the following data specified in the body of the request:
        
        
        | Field | Value Type | Description |
        | --- | --- | --- |
        | id | string | Fraud event identifier. |
        | fraudType | enum string | The type of the fraud event.
        Could be one of the following:
        1. Wangiri 
        2. IRSF
        3. StolenDevice 
        4. IPFraud
        5. SMSA2P |
        | origination | string | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
        | destination | string | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
        | expiryDate | integer($int32) | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |
        - Input structure
            
            ```jsx
            {
              "id": "string",
              "fraudType": "Wangiri",           //Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
              "origination": "string",
              "destination": "string",
              "expiryDate": 0,                  //integer($int32)
              "fraudStatus": "Active",          //Could be one of the following: Active, Expired, Flagged
              "confidenceIndex": 0,             //number($double)
              "isPremium": true,                //boolean
              "peerId": "string",
              "premium": true                   //boolean
            }
            ```
            
        - Input example
            
            ```jsx
            {
            	"id": "127.0.0.1-127.0.0.2",
            	"fraudType": "IPFraud",
            	"origination": "SE",
            	"destination": "SE",
            	"expiryDate": 1694775553,
            	"fraudStatus": "Active"
            }
            ```
            
        - Output structure
            
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
            
        - Output example
            
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
            
2. Sign the `someData` string (see *[Signing transactions](./Signing_transactions)*).
3. Submit the contribution you assembled and signed in **************steps 1 and 2:**************
    - Send a POST request to the `/api/v1/contribution-management/contribution` endpoint with the signed `someData` string in the body of the request.
        - Input structure
            
            ```jsx
            "string"
            ```
            
        - Input example
            
            ```jsx
            someData
            ```
            
        - Output structure
            
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
            
        - Output example
            
            ```jsx
            200 "OK"
            
            {
            	"status": {
            		"code": 0,
            		"name": "Ok"
            },
            	"data": {
            		"definitionId": "***#domain",
            		"accountId": "user@domain"
            	}
            }
            ```
            

### **Expected result**

An assembled and signed contribution is submitted to the ledger, the peer’s list of contributions is updated and their credit balance is increased by a number equal to the number of contributions submitted, based on the current reward rate active in the network.

---

[Verifying a contrubution has been submitted](../Tutorials/Submitting_a_contribution/Verifying_a_contrubution_has_been_submitted.md)

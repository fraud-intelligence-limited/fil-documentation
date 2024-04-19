# Retrieving contributions

::: tip Note

A peer account must be authorized for this operation to succeed. _See [Authorizing an account](authorizing-an-account.md)_.

:::

When downloading fraud events—retrieving contributions—it is possible to filter the results generated in the response in various ways, using the request parameters.

Request parameters can be used in any combination to tailor response results to your specific needs.

Since request parameters are optional, specifying no parameters when sending a request will result in a response containing contributions from the entire ledger.

For more information, see [API Specification > Retrieving contributions: Parameters](../api-specification/contribution-controller/retrieving-contributions.md).

To retrieve contributions, send the following request:

::: code-group Data structure

```http [Input structure]
GET /api/v1/contribution-management/contribution?size=''&from=''&to=''&ft=''&org=''&self-only=''
```

```http [Input examples]
// size
/api/v1/contribution-management/contribution?size=10

// from & to
/api/v1/contribution-management/contribution?from=0&to=1680089219

// ft
/api/v1/contribution-management/contribution?ft=wangiri

// org
/api/v1/contribution-management/contribution?org=US

// self-only
/api/v1/contribution-management/contribution?self-only=true

// fetch-mode
/api/v1/contribution-management/contribution?fetch-mode=new

// combination
/api/v1/contribution-management/contribution?size=2&ft=StolenDevice&org=US&self-only=true&fetch-mode=new
```

:::

### Expected result

The response to the `GET` request contains a list of the contributions, filtered according to the parameters set in the request, if any.

::: code-group Data structure

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
      "creditsSpent": integer($int32), //The total amount of tokens spent on the retrieved contributions
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
                "flagger": "admin@test",
                "timestamp": xxx,
                "flagTimestamp": 1711977724
            }
        ],
        "details": {
            "self": 6,
            "old": 19,
            "new": 123,
            "creditsSpent": 190,
            "balanceLeft": 50,
            "contributionsNotReturned": 1
        }
    }
}
```

:::

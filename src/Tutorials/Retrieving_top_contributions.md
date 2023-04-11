# Retrieving top contributions

::: tip

Note A peer account must be authorized for this operation to succeed. _See [Authorizing an account](Authorizing_an_account.md)._ 

:::

When downloading fraud events—retrieving contributions—it is possible to filter the results generated in the response in various ways, using the request parameters.

Request parameters can be used in any combination to tailor response results to your specific needs.

Since request parameters are optional, specifying no parameters when sending a request will result in a response containing the top contributions from the entire ledger.

For more information, see [Retrieving top contributions > Parameters](/API_Specification/contribution-controller/Retrieving_top_contributions.md).

To retrieve top contributions, perform the following:

Send a `GET` request to the `/data/api/v1/contribution-management/contribution` endpoint.

Optionally, you may specify any one or several parameters in the request.

::: details Input structure

```http
/api/v1/contribution-management/contribution?size=''&from=''&to=''&ft=''&org=''&self-only=''
```

:::

::: details Input example

```http
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

// combination
/api/v1/contribution-management/contribution?size=2&ft=StolenDevice&org=US&self-only=true
```

:::

### Expected result

The response to the `GET` request contains a list of the top contributions, filtered according to the parameters set in the request, if any.

::: details Output structure

```json5
{
  status: {
    code: 0, //integer($int32)
    name: 'string',
    message: 'string',
  },
  data: [
    {
      id: 'string',
      fraudType: 'Wangiri', //Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
      origination: 'string',
      destination: 'string',
      expiryDate: 0, //integer($int32)
      fraudStatus: 'string(enum)', //Could be one of the following: Active, Expired, Flagged
      confidenceIndex: 0, //number($double)
      isPremium: true, //boolean
      peerId: 'string',
      premium: true, //boolean
    },
  ],
}
```

:::

::: details Output example

```json5
{
  status: {
    code: 0,
    name: 'Ok',
  },
  data: [
    {
      id: '+14155552671-+14155552981',
      fraudType: 'StolenDevice',
      origination: 'US',
      destination: 'FI',
      expiryDate: 1666195955,
      fraudStatus: 'Expired',
      confidenceIndex: null,
      isPremium: true,
      peerId: 'string',
      premium: false,
    },
    {
      id: '127.0.0.1-127.0.0.2',
      fraudType: 'StolenDevice',
      origination: 'US',
      destination: 'SE',
      expiryDate: 1694775553,
      fraudStatus: 'Flagged',
      confidenceIndex: null,
      isPremium: true,
      peerId: 'string',
      premium: false,
    },
  ],
}
```

:::

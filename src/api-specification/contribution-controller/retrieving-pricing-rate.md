# Retrieving download pricing rate

> Retrieves the current prices established for [retrieving contributions](retrieving-contributions.md).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/price`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  status: {
    code: integer($int32),
    name: 'string'
  },
  data: {
    price: integer($int32) //the amount of tokens rewarded for submitting a contribution
    confidenceIndexPrice: integer($int32) //the amount of tokens rewarded for submitting a contribution with the maximum confidence index
  }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK'
  },
  data: {
    price: 1,
    confidenceIndexPrice: 2
  }
}
```

:::

### Responses

| Response Code | Description                                            |
| :-----------: | ------------------------------------------------------ |
|     `200`     | The pricing rate has been successfully retrieved.      |
|     `401`     | User signature is incorrect or failed to be decoded.   |
|     `404`     | Either account or its metadata key has not been found. |
|     `500`     | Internal server error.                                 |

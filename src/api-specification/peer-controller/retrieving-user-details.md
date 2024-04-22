# Retrieving user details

> Retrieves all of the details about the [authorized FIB user](../auth-controller/authorizing-a-user-in-the-system.md).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/peer-management/account`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  "status": {
    "code": integer($int32),
    "name": "string"
  },
  "data": {
    "email": "string",
    "accountId": "string",
    "authPubKeyHex": "string",
    "irohaPubKeyHex": "string",
    "salt": "string",
    "role": "string(enum)", //'ROLE_ADMIN' OR 'ROLE_DOMAIN_ADMIN' OR 'ROLE_PEER'
    "status": "string(enum)",
    "phoneNumber": "string",
    "firstName": "string",
    "lastName": "string",
    "roleName": "string",
    "peerCompanyName": "string",
    "peerOperatingCountry": "string",
    "peerType": "string(enum)", //'LARGE_TELCO' OR 'MEDIUM_TELCO' OR 'SMALL_TELCO' OR 'VENDOR'
    "peerConnectionType": "string(enum)",
    "peerGroup": "string",
    "peerIsPrivileged": boolean,
    "registrationDate": "string", //ISO 8601
    "subscriptionType": "string(enum)", //'TRIAL' OR 'FREEMIUM' OR 'PREMIUM'
    "subscriptionExpiryDate": "string" //ISO 8601
  }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'Ok'
  },
  data: {
    email: 'alice@wonder.land',
    accountId: 'alice@sora',
    authPublicKeyHex: '8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b',
    irohaPublicKeyHex: '0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e',
    salt: 'a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9a2b4e1c8f0d3e9a7d5e6b0c8a7e4d2f9',
    role: 'ROLE_PEER',
    status: 'ACTIVE',
    phoneNumber: '+81123456789',
    firstName: 'Alice',
    lastName: 'Liddell',
    roleName: 'Field Technician',
    peerCompanyName: 'Sora',
    peerOperatingCountry: 'Japan',
    peerType: 'MEDIUM_TELCO',
    peerConnectionType: 'Web',
    peerGroup: 'Group1',
    isPrivileged: false,
    registrationDate: '2024-01-20T10:02:50.118297',
    subscriptionType: 'PAID',
    subscriptionExpiryDate: '2024-12-03T10:15:30.118297'
  }
}
```

:::

:::

### Responses

| Response Code | Description                                    |
| :-----------: | ---------------------------------------------- |
|     `200`     | User details have been retrieved successfully. |
|     `404`     | User/domain/account/asset not found.           |
|     `500`     | Internal server error.                         |

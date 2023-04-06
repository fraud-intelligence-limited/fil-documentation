# Flagging a contribution

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/api/v1/contribution-management/contribution/flag`

**Method**: `PATCH`

**Parameters**: —

**Input/request structure**:

::: details Show

```jsx
    "string"
```
:::


**Output/response structure**:

::: details Show

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

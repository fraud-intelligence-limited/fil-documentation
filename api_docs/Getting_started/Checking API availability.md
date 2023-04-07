# Checking API availability

Before implementing any API calls, it's important to ensure that the API is available and accessible to your application. To do so, authorize your account and retrieve a JSON token.

To check the API availability, follow the [*Authorizing an account*](https://www.notion.so/Authorizing-an-account-8d4e2e8187784cada733a0a4b21646bd) tutorial. 

If the JSON token is retrieved successfully, then the FIB API is available and you can proceed with *[Calling API endpoints](https://www.notion.so/Calling-API-endpoints-78bf0fd5d2504515860bef122f7893b7)*.

Otherwise, a response with an error code is displayed indicating the issue that needs to be resolved before proceeding.

For a list of possible responses, see [*Authorizing a user in the system > Responses*](../../API_Specification/auth-controller/Authorizing a user in the system.md).

<aside>
⚠️ There are a variety of external issues that may be preventing you from successfully retrieving a JSON token. Examples include blocked outgoing HTTP requests and no Internet connection.

</aside>
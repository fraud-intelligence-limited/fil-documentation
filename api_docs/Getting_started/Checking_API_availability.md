# Checking API availability

Before implementing any API calls, it's important to ensure that the API is available and accessible to your application. To do so, authorize your account and retrieve a JSON token.

To check the API availability, follow the [*Authorizing an account*](../Tutorials/Authorizing_an_account.md) tutorial.

If the JSON token is retrieved successfully, then the FIB API is available and you can proceed with *[Calling API endpoints](../Getting_started/Calling_API_endpoints.md)*.

Otherwise, a response with an error code is displayed indicating the issue that needs to be resolved before proceeding.

For a list of possible responses, see [*Authorizing a user in the system > Responses*](../API_Specification/auth-controller/Authorizing_a_user_in_the_system.md#responses).

::: tip Note
There are a variety of external issues that may be preventing you from successfully retrieving a JSON token. Examples include blocked outgoing HTTP requests and no Internet connection.
:::

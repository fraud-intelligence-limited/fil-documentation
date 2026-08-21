# Calling API endpoints

Once your registration application has been approved, the connection credentials are sent to the email address you provided during registration.

::: tip NOTE

The API is intended for automated integrations. To upload, flag or download fraud data manually, use the FIB Web App: it signs every request for you, and no code is needed. See [Tutorials: Web App](../tutorials-web.md), for example [Downloading fraud data](../tutorials-web/downloading-fraud-data.md).

:::

Using these credentials, you can implement calls to the FIB API endpoints into the code of your own application or system.

## Base URL

Send every API request to:

```
https://backend.fraudintelligencelimited.com
```

Endpoint paths throughout this documentation are relative to that host. For example, [Authorizing an account](../tutorials-api/authorizing-an-account.md) gives the path `POST /auth/api/v1/authentication-management/session`, so the full URL is `https://backend.fraudintelligencelimited.com/auth/api/v1/authentication-management/session`.

Following the basic API architecture, your application or system—the _API client_ in this relationship—connects to the FIB _API server_.

To integrate your API client with the FIB API server, you can use different programming languages and frameworks, including Python, Java, Node.js, RUST, depending on the requirements of your own application or system.

Some tutorials in this documentation provide code snippets for the operations that require a signature, such as [Signing user email addresses](../tutorials-api/signing-user-email-addresses.md).

The provided FIB [API endpoints](../api-specification.md) allow users to access the network's blockchain data, enabling users to perform operations such as [submitting](../tutorials-api/submitting-a-contribution.md), [retrieving](../tutorials-api/retrieving-contributions.md) and [flagging contributions](../tutorials-api/flagging-a-contribution.md), etc.

For examples of scenarios where FIB API endpoints are being called, check out the topics in the [Tutorials: API](../tutorials-api.md) section.

::: tip NOTE

Certain API requests require the use of either your [**Authorization** key pair](../overview/web-interface.md#akp) or [**Blockchain** key pair](../overview/web-interface.md#bkp).

:::

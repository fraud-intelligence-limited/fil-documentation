# Calling API endpoints

Once your registration application has been approved, the connection credentials are sent to the email address you provided during registration.

Using these credentials, you can implement calls to the FIB API endpoints into the code of your own application or system.

Following the basic API architecture, your application or system—the _API client_ in this relationship—connects to the FIB _API server_.

To integrate your API client with the FIB API server, you can use different programming languages and frameworks, including Python, Java, Node.js, RUST, depending on the requirements of your own application or system.

Some tutorials in this documentation provide code snippets in Kotlin/Java that are required in order to perform Iroha-related operations.

The provided FIB [API endpoints](../api-specification.md) allow users to access the network's blockchain data, enabling users to perform operations such as [submitting](../tutorials-api/submitting-a-contribution.md), [retrieving](../tutorials-api/retrieving-contributions.md) and [flagging contributions](../tutorials-api/flagging-a-contribution.md), etc.

For examples of scenarios where FIB API endpoints are being called, check out the topics in the [Tutorials: API](../tutorials-api.md) section.

::: tip NOTE

Certain API requests require the use of either your [**Authorization** key pair](../overview/web-interface.md#authorization-key-pair) or [**Blockchain** key pair](../overview/web-interface.md#blockchain-key-pair).

:::

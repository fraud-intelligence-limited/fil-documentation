# Registering an account

To use all of the features that FIB has to offer through either API endpoints or the Web App, you must have an active FIB account.

To register a new account, perform the following steps:

1. Go to the [Fraud Intelligence Blockchain website](https://app.fraudintelligencelimited.com) and select **Sign up**.
2. On the **Choose your plan** screen that appears, select the following:
   - Subscription plan for the account.\
     Can be one of the following:
       - **Free** — regular rules for interacting with FIB as they are described in [Tokenomics](../overview/tokenomics.md).
       - **Premium** — special conditions for interacting with FIB that may be adjusted on the case-by-case basis.\
       For details, see [Tokenomics: Premium subscription](../overview/tokenomics.md#premium-subscription).
   - Access method for the account.\
     Can be one of the following:
       - **Web application and API** — the registered account will be able to not only access the Web App but also make API calls to the FIB API servers.
       - **Web application only** — the registered account will only be able to access the Web App.
3. When ready, select **Next**.
4. On the **Specify company details** screen that appears, specify the following details:
   - **Company details**:
     - **Company name** — full legal name of the business that the account is associated with.
     - **Operating country** — the country of operation of the business that the account is associated with.\
     Selected from a dropdown menu; only one country can be selected.
     - **Membership type** — the type of the business that the account is associated with.\
     Can be one of the following:
       - **Telco** — telecommunication company that provides a number of various telecommunications services (e.g., telephony, internet access, etc.) to their end customers.\
       If **Telco** is selected, then its **Number of subscribers** must also be specified in the dropdown menu that appears.
       - **Vendor** — company that provides telco companies with all-level facilities and support, including installation and maintenance of hardware.
   - **Personal details**:
     - **First name** — your full first name.
     - **Last name** — your full last name.
     - **Your role in company** — the position that you occupy in the business that the account is associated with.
     - **Phone number** — your contact phone number, starting with your country's dial-in code (e.g., `+81` for Japan).
5. When ready, select **Next**.
6. On the **Account credentials** screen that appears, specify the following details:
   - **Your email** — the email address that is registered under your business' domain and is only accessible by you.
   - **Password** — a unique combination of symbols that will be used to log in to your account via the Web App.
   - **Repeat password** — same as **Password**; must be entered to ensure that no typos were entered the first time.

   ::: tip Note

   Your password must adhere to the following rules:
     - Must be at least six characters in length;
     - Must contain at least one lower case letter (e.g., `a`-`z`);
     - Must contain at least one upper case letter (e.g., `A`-`Z`);
     - Must contain at least one numeral character (e.g., `0`-`1`);
     - Must contain at least one special character (e.g., `?`, `#`, `(`, `[`, etc.).

   **Example**: `Xfj&Hv7k`

   :::

   ::: warning

   Don't use the same password that you use for authorization on any other online application and/or service.

   For a deeper understanding of the password security principles, you may want to read the following topic of the Iroha 2 documentation: [Iroha 2 > Security > Password Security](https://docs.iroha.tech/guide/security/password-security.html).

   :::

7. Review the [Terms & Conditions](https://github.com/fraud-intelligence-limited/fil-legal/blob/main/Fraud%20Intelligence%20Blockchain%20Terms%20of%20Use%20v6.0.md), then select the corresponding **I agree with the Terms and Conditions** checkbox.
8. When ready, select **Create account**.

### Expected Result

Upon completing the steps, the **Account successfully created** notification appears, informing you that your registration application has been successfully submitted and will soon be reviewed by the FIB Administrator.

As soon as your application is approved, you receive an email notifying you that you have become a peer in the FIB network and, depending on the chosen access method, you can access the FIB functionality via Web App and/or API endpoints.

::: tip What's next?

For Web App tutorials, see [Tutorials: Web interface](../tutorials-web.md).

For API tutorials, see [Tutorials: API](../tutorials-api.md).

You can also familiarize yourself with the [Web App UI](../overview/web-interface.md)

:::

## Restoring access to an account

If you have forgotten the password on your account, you can reset it by performing the following steps:

1. Go to the [Fraud Intelligence Blockchain website](https://app.fraudintelligencelimited.com) and select **Forgot password?**.
2. On the **Remember password** screen that appears, enter the email address that you registered with in the **Your email** field, then select **Send link**.
3. Check your email inbox for a message from FIB with instructions on how to reset your password.
4. Follow the instructions from the received email.

### Expected Result

Once you have reset your password, you can log in to your FIB account using your new password.

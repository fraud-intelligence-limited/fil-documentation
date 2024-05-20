# Uploading fraud data

To upload fraud event data via FIB Web App, perform the following steps:

1. On the [Dashboard](../overview/web-interface.md#dashboard) screen, select **Upload fraud data** from the [Upload](../overview/web-interface.md#upload) tab.
2. On the **Upload fraud data** screen that appears, enter information about the fraud event that you wish to upload in the following format:

   ::: info Format

   `Fraud type`, `Fraud Identifier` (Number or range of numbers), `Origination country two-letter code` ([ISO 3166](https://www.iso.org/iso-3166-country-codes.html), Alpha-2), `Destination country two-letter code` ([ISO 3166](https://www.iso.org/iso-3166-country-codes.html), Alpha-2)

   > **Example**: StolenDevice, 298385762738475, GB, US

   If you are uploading a range of fraud identifiers (i.e., a range of phone numbers or IP addresses), separate the starting and ending values for the range of fraud identifiers by comma.

   > **Example**: IPFraud, +447000123456, +447000123461, GB, US

   :::

   ::: tip Note

   For the list of all Alpha-2 country codes, see [ISO.ORG: Online Browsing Platform](https://www.iso.org/obp/ui/#search/code/).

   :::

   <!-- TODO: Screenshot placeholder -->

3. When ready, select **Upload to ledger**.

::: tip Note

If you are uploading several individual fraud identifiers, each entry must start from a new line.

A single fraud event data submission can contain up to `500` entries.

:::

### Expected result

<!-- TODO: Screenshot placeholder -->

Your list of contributions is updated and the [token balance](../overview/web-interface.md#balance) is increased based on the current conversion rate active in the network (see [Current conversion rate](../overview/tokenomics.md#current-conversion-rate)).

::: info

For more information on fraud event data, including fraud identifiers, fraud types, and other relevant concepts, see [Fraud events](../overview/fraud-events.md) and [Contributions](../overview/contributions.md).

:::

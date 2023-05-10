# Uploading fraud data

To upload fraud event data via FIB Web UI, perform the following steps:

1. From the top right menu, select **Upload**.
2. On the **Upload Fraud Data** screen that appears, specify the following data:

   - **Select Fraud Type** dropdown menu — select the fraud type of the fraud event that you are uploading.
   - **Select Transaction Type** dropdown menu — select **Add Fraud Data**.
   - **Data Upload** box — input the following data about the fraud event, separated by comma:
     - The `id` fraud identifier.
     - The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166).
     - The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166).

   > **Example**: +33000123456, FR, ZA

   ::: tip Note

   If you are uploading a range of fraud identifiers (i.e., a range of phone numbers or IP addresses), select **This is a Fraud data range**.

   In this case, the following data about the fraud event is input, separated by comma: The starting and ending values for the range of fraud identifiers, the origination country two-digit code, and the destination country two-digit code.

   **Example**: +447000123456, +447000123460, GB, US

   :::

3. Select **Upload to Ledger** to upload the fraud event data.

For more information on fraud event data, including fraud identifiers, fraud types, and other relevant concepts, see [Fraud Events](../overview/fraud-events.md).

::: tip Note

If you are uploading several individual fraud identifiers, each entry must start from a new line.

A single fraud event data submission can contain up to 500 entries.

:::

### Expected result

Your list of contributions is updated and the credit balance is increased based on the current conversion rate active in the network (see [Current conversion rate](../overview/tokenomics.md#current-conversion-rate)).

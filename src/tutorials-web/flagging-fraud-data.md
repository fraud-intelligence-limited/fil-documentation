# Flagging fraud data

To flag fraud event data via FIB Web UI, perform the following steps:

1. On the **Home** screen, select **Upload** from the top right menu.
2. On the **Upload Fraud Data** screen that appears, specify the following data:
    - **Select Fraud Type** dropdown menu — select the fraud type of the fraud event that you are flagging.
    - **Select Transaction Type** dropdown menu — select **Flag Fraud Data as False Positive**.
    - **Search Value** box — input the `id` fraud identifier of the fraud event that you are flagging.
3. Select **Find in Ledger** to update the list of retrieved transactions.
4. Find the fraud event that you wish to flag and select **Flag Tx**.

### Expected result

The fraud event status is set to `Flagged`.

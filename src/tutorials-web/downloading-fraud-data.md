# Downloading fraud data

To download fraud event data via FIB Web UI, perform the following steps:

1. From the top right menu, select **Download**.
2. On the **Download Fraud Data** screen that appears, specify the following data:
   - **Select Fraud Type** dropdown menu — select the fraud type of the fraud events you wish to download, then select **Add**; several individual fraud types can be added to the request.
   - **Select Originating Country** dropdown menu — select the country that the fraud events originated from, then select **Add**; several individual countries can be added to the request.
   - **From Date** box — from the pop-up calendar, select the start date that the requested fraud events are filtered by; or enter the date manually in the _DD.MM.YYYY_ format.
   - **To Date** box — from the pop-up calendar, select the end date that the requested fraud events are filtered by; or enter the date manually in the _DD.MM.YYYY_ format.
3. Select **Download** to download the fraud events data filtered according to the data specified.

For more information on fraud event data, including fraud identifiers, fraud types, and other relevant concepts, see [Fraud Events](../overview/fraud-events.md).

### Expected result

The fraud events data, filtered according to your specified criteria, is downloaded to your device as a .csv file, which can be opened using any spreadsheet software available to you (e.g., Microsoft Excel, Google Sheets); and the credit balance is decreased based on the current conversion rate active in the network (see [Current conversion rate](../overview/tokenomics.md#current-conversion-rate)).

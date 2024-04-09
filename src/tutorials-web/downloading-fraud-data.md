# Downloading fraud data

To download fraud event data via FIB Web App, perform the following steps:

1. On the [Dashboard](../overview/web-interface.md#dashboard) screen, select **Download fraud data** from the [Download](../overview/web-interface.md#download) tab.
2. On the **Download fraud data** screen that appears, specify the following information about the fraud event:
   - **Select fraud type** — select the fraud type of the fraud events that you wish to download.\
   Multiple fraud types can be selected.
   - **Select originating countries** — select the country where the fraud events originated from.\
   Multiple countries can be selected.
   - **Select scope of novelty** — select the kind of fraud events in terms of how they relate to your account.\
   Can be one of the following:
     - **Only new** — fraud events that have not been downloaded previously.
     - **Only old** — fraud events that either have already been downloaded or have been uploaded by your account.
     - **Any** — all fraud events.
   - **Select the date range** — if necessary, specify the timeframe that the requested fraud events are filtered by:
     - **From** box — from the pop-up calendar, select the start date that the requested fraud events are filtered by; or enter the date manually in the _DD.MM.YYYY_ format.
     - **To** box — from the pop-up calendar, select the end date that the requested fraud events are filtered by; or enter the date manually in the _DD.MM.YYYY_ format.

     ::: info

     If left unspecified, the requested fraud events will be collected since the establishment of the FIB network.

     :::

3. When ready, select **Confirm purchase**.

### Expected result

The fraud events data, filtered according to your specified criteria, is downloaded to your device as a `.csv` file, which can be opened using any spreadsheet software available to you (e.g., Microsoft Excel, Google Sheets); and the [token balance](../overview/web-interface.md#balance) of the signed-in user is decreased based on the current conversion rate active in the network (see [Current conversion rate](../overview/tokenomics.md#current-conversion-rate)).

::: info

For more information on fraud event data, including fraud identifiers, fraud types, and other relevant concepts, see [Fraud events](../overview/fraud-events.md) and [Contributions](../overview/contributions.md).

:::

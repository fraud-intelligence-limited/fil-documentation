# Downloading Fraud Data

## Access the Download Menu

From the main menu, select the "Download" option to access the download menu.

## Select Fraud Type
![image](https://user-images.githubusercontent.com/107814152/233859868-9918566c-9e86-401b-bf9f-61fe049a4f46.png)

Select the appropriate fraud type from the available options, or select "All" to download all fraud types.

## Choose Originating Country
![image](https://user-images.githubusercontent.com/107814152/233859878-f5f28848-6473-4b78-8386-2db88b773d19.png)

Select the originating country from which you require fraud data, or select "All" to download data from all countries.

## Select Date Range
![image](https://user-images.githubusercontent.com/107814152/233859887-3ca196a4-3243-4154-a0dc-86589031192b.png)

Select a date range for which you require data. You can choose a specific start and end date or select from pre-defined date ranges. If you would like to select all data, check the "Ignore Dates" checkbox.

## Click Download Fraud Data
![image](https://user-images.githubusercontent.com/107814152/233859960-b43c9fd7-fc1d-481b-a3cf-78c747dd7a9c.png)

Click on the "Download Fraud Data" button. This will retrieve data from the ledger related to your selection options and present your data in CSV format.

## Note:

Freemium users will require tokens from their previous contributions to download data. Tokens can be earned by contributing fraud data to the ledger.

# Review Downloaded Data
![image](https://user-images.githubusercontent.com/107814152/233859994-0ebb2ae4-e98e-4131-8bda-44a738bed834.png)

Users can review their downloaded data in the CSV file format, which can be opened using spreadsheet software like Microsoft Excel or Google Sheets.

# Understanding Fraud Contribution Data

The downloaded file will include the following fields of data:

ID: The unique identifier for the transaction on the ledger.

Fraud Type: The type of fraud associated with the contribution.

Origination: The two-digit ISO country code for the country of origin of the fraud.

Destination: The two-digit ISO country code for the destination of the fraud.

Expiry Date: The date on which the fraud data will expire and no longer be considered valid.

Confidence Index: The fraud likelihood confidence score for the contribution, based on the number of times the fraud identifier has been added to the ledger and the risk factor of the originating country.

Status: The type of contribution, "Add" represents a fraud identifier being added to the ledger, "Flag" represents an already added fraud identifier being flagged as non-fraudulent.

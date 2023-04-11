# Fraud events

> **Fraud event** — an occurrence that is suspected or confirmed to be fraudulent.

FIB peers can submit data related to these fraud events—[contributions](Contributions.md)—to help identify and prevent future fraudulent activities. By sharing information and collaborating with other participants in the network, contributors can help create a more secure and trustworthy ecosystem that is resistant to fraud and other types of malicious activities.

## Fraud model

Every fraud event that is submitted and stored on the blockchain adheres to the following model:

| Data | Description |
| --- | --- |
| Fraud Identifier | The main identifier of the fraud event. <br> Could be one of the following: <br> 1. A range of **phone numbers** (or a single one) compliant with the E.164 international standard and containing a valid National Destination Code. <br> 2. A range of **IP addresses** (or a single one). <br> 3. A unique **IMEI identifier** of a device. |
| Fraud Type | The type of the fraud event. <br> Could be one of the following: <br> 1. **Wangiri fraud**. <br> 2. **International revenue share fraud** (**IRSF**). <br> 3. **Stolen device fraud**. <br> 4. **IP fraud**. <br> 5. **SMS A2P fraud**. |
| Event Origination | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| Event Destination | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| Event Status | The status of the event at the time of observing. <br> Could be one of the following: <br> 1. **Active** — the event is stored on the blockchain and has not yet expired. <br> 2. **Expired** — the event is stored on the blockchain, but is no longer relevant. <br> 3. **Flagged** — the event is stored on the blockchain and is flagged by one of the peers. |
| Event Expiry Date | The exact time and date until which the event is considered relevant. |
| Event Timestamp | The exact time and date of when the event was submitted. |
| Confidence Index | The predicted fraud likelihood score in the range from 1 to 100. |
| Consortium Identity Key | The unique key of the peer that contributed the data. |

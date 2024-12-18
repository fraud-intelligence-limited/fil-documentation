# Fraud events

> **Fraud event** — an occurrence that is suspected or confirmed to be fraudulent.

FIB peers and users can submit data related to these fraud events—[contributions](contributions.md)—to help identify and prevent future fraudulent activities. By sharing information and collaborating with other participants in the network, contributors can help create a more secure and trustworthy ecosystem that is resistant to fraud and other types of malicious activities.

## Types of fraud events

Any given fraud event can be of one of the following types:

- `Wangiri` — type of fraud that is mostly referred to as “missed call scam”; these are usually detected by FMS that uploads the details of a fraud event, e.g., MSISDN and country codes of the involved parties.
- `IRSF` — type of fraud that generates revenue and traffic by inflating the volume of international traffic to a particular destination; these are usually detected from unusual call patterns.
- `StolenDevice` — any fraud that involves a stolen device; these are usually reported either by customers or law enforcement.
- `IPFraud` — any fraud that involves a specific IP address; these are usually detected by means of behavioral analysis, geolocation checks, and overall action velocity of any given IP address.
- `SMSA2P` — type of fraud that utilizes the rerouting of SMS through SIM boxes, disguising them as legitimate messages; these are regularly spotted manually by operators monitoring traffic patterns, contents and sending rates of any given phone number.
- `Flash Calling` — a type of fraud that exploits missed call notifications from unknown numbers to verify users or trigger callbacks, often bypassing traditional verification methods and monitoring through traffic analysis and call patterns.
- `Scam` — a type of fraud that deceives users through social engineering tactics, such as phishing calls, messages, or emails, often using phone numbers, email addresses, or URLs to steal sensitive information or money, typically identified by analyzing unusual transaction patterns and user reports.

## Fraud event data model

Every fraud event that is submitted and stored on the blockchain adheres to the following model:

| Data | Description |
| --- | --- |
| Fraud Identifier | The main identifier of the fraud event. <br> Could be one of the following: <ol><li>A range of **phone numbers** (or a single one) compliant with the E.164 international standard and containing a valid National Destination Code.</li><li>A range of **IP addresses** (or a single one).</li><li>A unique **IMEI identifier** of a device. </li></ol> |
| Fraud Type | The [type of the fraud event](#types-of-fraud-events). <br> Could be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
| Event Origination | The two-letter code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| Event Destination | The two-letter code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| Event Contributor | The unique Domain ID of the peer that contributed the data. |
| Event Status | The status of the event at the time of observing. <br> Could be one of the following: <ol><li>**Active** — the event is stored on the blockchain and has not yet expired.</li><li>**Expired** — the event is stored on the blockchain, but is no longer relevant.</li><li>**Flagged** — the event is stored on the blockchain and is flagged by one of the peers.</li></ol> |
| Event Expiry Date | The exact time and date until which the event is considered relevant. |
| Event Timestamp | The exact time and date of when the event was submitted. |
| Event Flag Timestamp | The exact time and date of when a contribution has been flagged. Only stored if a contribution has been flagged at the time of observing. |
| Event Flagger | The unique ID of the peer that flagged the data. Only stored if a contribution has been flagged at the time of observing. |
| Confidence Index | The predicted fraud likelihood score in the range from 1 to 100. |
| Privileged Status | The definition of whether a contribution is privileged. |

::: info

For a more technical outlook on what data related to any given fraud event is stored on the network, see [Contributions: API data structures](contributions.md#api-data-structures).

:::

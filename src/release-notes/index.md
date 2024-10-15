---
sidebar: false
prev: false
next: false
---

# Release Notes

test еуые test

## Version 1.3.1 (YYYY-MM-DD)

### Main Changes

- Added Two-Factor Authentication (2FA) support.

  > Documented here:\
  > [Getting started > Registering an account > Setting 2FA](../getting-started/registering-an-account.md#setting-2fa)

- Added the ability to select the destination countries when downloading fraud data via the FIB Web App.

  > Documented here:\
  > [Tutorials: Web App > Downloading fraud data](../tutorials-web/downloading-fraud-data.md)

- Added the ability to split the reward for uploaded contributions between the contributor and the original source of the fraud event data.

  > Documented here:\
  > [Overview > Tokenomics](../overview/tokenomics.md) — [Reward split](../overview/tokenomics.md#reward-split) subtopic added.

- The expiry time of any given contribution now depends on its fraud type.

  > Documented here:\
  > [Overview > Contributions > Retrieving contributions](../overview/contributions.md#rc2) — `expiryDate` description updated with details.

- Multiple updates to the FIB Web App UI, including:
  - Added shortcuts for convenient timespans (e.g., one week, one month, etc.) when selecting a date or range of dates.
  - Error messages are expanded with details and are more explicit now.
  - When uploading fraud data, it is now possible to easily remove entries from the upload list.
  - When downloading fraud data, the result now contains exhaustive filter values.
  - Various text improvements throughout the UI.

### API Changes

- Updated the `peer-controller`: **Retrieving contributions** operation: the `self-only` parameter removed, functionality moved to the `fetch-mode` parameter; added new `assetDefinitionId` and `sourcePeerId` fields.

  > Documented here:\
  > [API Specification > Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) — the `self-only` parameter removed, the `fetch-mode` parameter updated, `assetDefinitionId` and `sourcePeerId` fields added.\
  > [Overview > Contributions](../overview/contributions.md#api-data-structure) — the [Retrieving contributions](../overview/contributions.md#rc2) table is updated.

- Expired contributions are no longer retrieved when [retrieving contributions by ID](../api-specification/contribution-controller/retrieving-a-contribution-by-ID.md).

- Unified all of the time and date values to adhere to the single format (ISO 8601): `YYYY-MM-DDTHH:MM:SSZ` (`Z` indicates the `UTC+0` time zone).\
  The following operations are affected:
  - [Retrieving peer limit state](../api-specification/peer-controller/retrieving-peer-limit-state.md)
  - [Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md)

### Other Improvements

- Iroha 2 SDK updated to the latest version.

- Improved the efficiency of serialization and deserialization of the HTTP data.

- Optimized the creation of transactions and the execution of smart contracts.

- Expanded the backend logging capabilities for a streamlined approach to potential troubleshooting.

### Bug Fixes

- Fixed a bug that allowed FIB Admin to set a subscription expiration time for [Premium](../overview/tokenomics.md#premium) users in the past.

- Fixed a bug that allowed FIB Admin to set a token reward as a negative value, which resulted in the inability for users to upload any new data.

- Fixed a bug where users that [restored access to their account](../getting-started/registering-an-account.md#restoring-access-to-an-account) experienced various data inconsistencies on their account.

- Fixed a bug that allowed suspended user accounts to perform operations not permitted to them.

- Fixed a bug that prevented the **Purchase has completed** screen from displaying data according to the filters specified by the user when downloading contributions via FIB Web App.

## Version 1.3.0 (2024-06-05)

### Main Changes

- New [FIB Web App](https://app.fraudintelligencelimited.com) user interface.

  > Documented here:\
  > [Web App UI](../overview/web-interface.md)

- Added automatic generation of the user key pairs. These are now generated during user registration and can be accessed from the [Profile](../overview/web-interface.md#profile) screen of the new [Web App](https://app.fraudintelligencelimited.com).

  > Documented here:\
  > [Web App UI](../overview/web-interface.md) — ['Authorization' key pair](../overview/web-interface.md#akp) and ['Blockchain' key pair](../overview/web-interface.md#bkp) subtopics.

- Flagging a contribution uploaded by the same peer no longer provides token rewards.

  > Documented here:\
  > [Tutorials: Web App > Flagging fraud data](../tutorials-web/flagging-fraud-data.md) — Added new **Note** callout.\
  > [Tutorials: API > Flagging fraud data](../tutorials-api/flagging-a-contribution.md) — Added new **Note** callout.

- Contributions with a set confidence index value can be downloaded repeatedly with no extra charge to the user's [token balance](../overview/tokenomics.md#token-balance), even if the value has changed since the first retrieval.

  > Documented here:\
  > [Overview > Tokenomics](../overview/tokenomics.md#confidence-index) — Updated the existing **Note** callout.

- Added support of dial-in codes for international networks (`+882` and `+883`).

### API Changes

- Removed the `premium-provider-controller` and all of its operations/endpoints.

- Removed the `peer-controller`: **Requesting peer details** operation.

- Added the `auth-controller`: **Logging a user out of the system** operation.

  > Documented here:\
  > [API Specification > Logging a user out of the system](../api-specification/auth-controller/logging-a-user-out-of-the-system.md) — new topic.

- Added the `peer-controller`: **Retrieving user details** operation.

  > Documented here:\
  > [API Specification > Retrieving user details](../api-specification/peer-controller/retrieving-user-details.md) — new topic.

- Added the `contribution-controller`: **Retrieving pricing rate** operation.

  > Documented here:\
  > [API Specification > Retrieving pricing rate](../api-specification/contribution-controller/retrieving-pricing-rate.md) — new topic.

- Added the `contribution-controller`: **Retrieving rewards rate** operation.

  > Documented here:\
  > [API Specification > Retrieving rewards rate](../api-specification/contribution-controller/retrieving-rewards-rate.md) — new topic.

- Updated the `contribution-controller`: **Retrieving contributions** operation so that its API responses contain new data.

  > Documented here:\
  > [API Specification > Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) — `newWithConfidenceIndex`, `balanceLeft`, `contributionsNotReturned`, `contributionsNotReturnedCost`, `timestamp`, `flagTimestamp` fields added to, and `premium` field removed from the **Output/response structure**

### Other Improvements

- Transitioned the FIB platform to the latest stable version of Iroha 2.

- Transferred access management of the stored contributions fully to the blockchain level of the system.

- Unified terminology across all API requests and responses.

- Added a check for the uniqueness of the phone number entered during user registration.

- Optimized the data structures of all internal components, including the blockchain level.

### Bug Fixes

- Fixed a bug with blockchain nodes not reporting connectivity issues.

- Fixed a bug with the request body validation process errors containing non-human-readable messages.

- Fixed a bug that allowed users to flag irrelevant or nonexistent contributions.

## Version 1.2.0 (2023-12-14)

### Main Changes

- When submitting a contribution or a flag, the API response now displays the reward for the said submission in tokens.

  > Documented here:\
  > [API Specification > Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) — `confidence-score` added to **Parameters** and **Output/response structure** updated.

- When retrieving contributions, the API response now displays additional information.

  > Documented here:\
  > [Overview > Contributions](../overview/contributions.md#api-requests-data-structure) — **API requests data structure** updated with `flagger`, `self`, `old`, `new` and `creditsSpent` fields.\
  > [API Specification > Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) — **Output/response structure** updated.

- Contributions on the blockchain now have a `flagger` value that displays the ID of a peer that flagged the contribution if it has been flagged.

  > Documented here:\
  > [Overview > Contributions](../overview/contributions.md#api-data-structure) — **Flagging contributions** and **API requests data structure** updated.

- Added functionality related to the confidence index, a value between 1 and 100 that represents how confident the system is that a contributed fraud event is legitimate.

  > Documented here:\
  > [Overview > Tokenomics](../overview/tokenomics.md#confidence-index) — **Confidence Index** subtopic added.\
  > [API Specification > Retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) — `confidence-score` added to **Parameters** and **Output/response structure** updated.

### Other Improvements

- Performed an audit of the interservice communication safety, fixed known security-related vulnerabilities, updated the implemented third-party dependencies.

- Indexed data on the network, enhancing the overall performance of the search engine that retrieves stored contributions.

- Refactored and optimized the code structure of the query engine that can retrieve all data of any specific type.

### Bug Fixes

- Fixed a bug where leftover data with peer details remained on the network after a peer had been deleted; this caused a new peer account to be corrupted in case it was registered again with the same credentials, as well as potential issues with other peer data getting corrupted.

- Fixed a bug that allowed users to find out the subscription type of any other peer.

- Fixed a bug with call processing timeouts being inconsistent.

## Version 1.1.0 (2023-04-27)

Initial public version released with the functionality documented in our [Guide](../index.md).

## Version 1.0.0 (2022-12-12)

Internal version not released to public.

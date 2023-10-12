---
sidebar: false
prev: false
next: false
---

# Release Notes

## Version 1.2 (YYYY-MM-DD)

### Main Changes

- When submitting a contribution or a flag, the API response now displays the reward for the said submission in tokens.

  > Documented here:\
  [API Specification > Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md) — `confidence-score` added to **Parameters** and **Output/response structure** updated.

- When retrieving top contributions, the API response now displays additional information.

  > Documented here:\
  [Overview > Contributions](../overview/contributions.md#api-requests-data-structure) — **API requests data structure** updated with `flagger`, `self`, `old`, `new` and `creditsSpent` fields.\
  [API Specification > Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md) — **Output/response structure** updated.

- Contributions on the blockchain now have a `flagger` value that displays the ID of a peer that flagged the contribution if it has been flagged.

  > Documented here:\
  [Overview > Contributions](../overview/contributions.md#api-requests-data-structure) — **Flagging contributions** and **API requests data structure** updated.

- Added functionality related to the confidence index, a value between 1 and 100 that represents how confident the system is that a contributed fraud event is legitimate.

  > Documented here:\
  [Overview > Tokenomics](../overview/tokenomics.md#confidence-index) — **Confidence Index** subtopic added.\
  [API Specification > Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md) — `confidence-score` added to **Parameters** and **Output/response structure** updated.

### Other Improvements

- Performed an audit of the interservice communication safety, fixed known security-related vulnerabilities, updated the implemented third-party dependencies.

- Indexed data on the network, enhancing the overall performance of the search engine that retrieves stored contributions.

- Refactored and optimized the code structure of the query engine that can retrieve all data of any specific type.

### Bug Fixes

- Fixed a bug where leftover data with peer details remained on the network after a peer had been deleted; this caused a new peer account to be corrupted in case it was registered again with the same credentials, as well as potential issues with other peer data getting corrupted.

- Fixed a bug that allowed users to find out the subscription type of any other peer.

- Fixed a bug with call processing timeouts being inconsistent.

## Version 1.1 (2023-04-27)

Initial public version released with the functionality documented in our [Guide](../index.md).

## Version 1.0 (2022-12-12)

Internal version not released to public.

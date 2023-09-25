---
sidebar: false
prev: false
next: false
---

# Release Notes

## FIB version 1.2 (YYYY-MM-DD)

- When submitting a contribution or a flag, the API response now displays the reward for the said submission in tokens.

  > Documented here:
  - [Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md)<br>`confidence-score` added to **Parameters** and **Output/response structure** updated.

- When retrieving top contributions, the API response now displays additional information.

  > Documented here:
  - [Contributions](../overview/contributions.md#api-requests-data-structure)<br>**API requests data structure** updated with `flagger`, `self`, `old`, `new`, `creditsSpent` fields.
  - [Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md)<br>**Output/response structure** updated.

- Contributions on the blockchain now have a `flagger` value that displays the ID of a peer that flagged the contribution if it has been flagged.

  > Documented here:
  - [Contributions](../overview/contributions.md#api-requests-data-structure)<br>**Flagging contributions** and **API requests data structure** updated.

- Added functionality related to the utilization of the confidence index—the value that defines

  > Documented here:
  - [Tokenomics](../overview/tokenomics.md#confidence-index)<br>**Confidence Index** subtopic added.
  - [Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md)<br>`confidence-score` added to **Parameters** and **Output/response structure** updated.

::: info NOTE

Other minor documentation changes were made to accommodate for changes introduced in `FIB 1.2`.

:::

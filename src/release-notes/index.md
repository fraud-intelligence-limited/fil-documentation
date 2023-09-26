---
sidebar: false
prev: false
next: false
---

# Release Notes

## Version 1.2 (YYYY-MM-DD)

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

- Added functionality related to the confidence index, the value that defines.

  > Documented here:\
  [Overview > Tokenomics](../overview/tokenomics.md#confidence-index) — **Confidence Index** subtopic added.\
  [API Specification > Retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md) — `confidence-score` added to **Parameters** and **Output/response structure** updated.

::: info Note

Other minor documentation changes were made to accommodate for changes introduced in `FIB 1.2`.

:::

## Version 1.1 (YYYY-MM-DD)

Initial public version released with the functionality documented in our [Guide](../index.md).

## Version 1.0 (YYYY-MM-DD)

Internal version not released to public.

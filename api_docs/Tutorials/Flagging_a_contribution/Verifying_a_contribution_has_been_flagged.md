# Verifying a contribution has been flagged

To verify that a contribution has been flagged, perform the following:

Send a `GET` request to the `/api/v1/contribution-management/contribution` endpoint with the `self-only` request parameter set to `true`.

If a contribution has been flagged successfully, it is no longer shown in the list of the peer’s contributions.

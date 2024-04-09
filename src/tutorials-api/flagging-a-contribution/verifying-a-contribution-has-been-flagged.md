# Verifying a contribution has been flagged

To verify that a contribution has been flagged, retrieve the peer's contributions by sending the following request:

> [Retrieving contributions](../../api-specification/contribution-controller/retrieving-contributions.md)

```http
GET /data/api/v1/contribution-management/contribution?self-only=true
```

If a contribution has been flagged successfully, it is no longer shown in the list of the peer’s contributions.

# Verifying a contribution has been flagged

To verify that a contribution has been flagged, retrieve the peer's top contributions by sending the following request:

```http
GET /data/api/v1/contribution-management/contribution
```

If a contribution has been flagged successfully, it is no longer shown in the list of the peer’s contributions.

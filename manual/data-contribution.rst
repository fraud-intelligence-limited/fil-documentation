.. list-table::
   :widths: 20 20 40
   :header-rows: 1

   * - Field
     - Value Type 
     - Description
   * - ``origination``
     - ``string``
     - `ISO 3166-1 alpha-2 country code <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`_ where the fraud was originated
   * - ``destination``
     - ``string``
     - ISO 3166-1 alpha-2 country code where the fraud was detected
   * - ``expiryDate``
     - ``integer($int32)``
     - Positive 32-bit integer value or `NULL`
   * - ``fraudType`` 
     - ``string``
     - The `fraud type`_: ``IPFraud``, ``IRSF``, ``StolenDevice``, ``Wangiri``
   * - ``id``
     - ``string``
     - The `fraud identifier`_: IP address, phone number (E.164) or IMEI.
     
       For phone numbers and IP addresses, you may also submit a range ``rangeStart-rangeEnd``, where the second ID is greater than the first one.


#  X12 Transaction Set

## Overview

## `public interface X12TransactionSet`

Implementations should store the common ST/SE elements as well as the attributes specific to the particular transaction type.

## `String getTransactionSetIdentifierCode()`

The ST01 segment element contains the functional group code, which identifies the X12 transaction type

common X12 transaction types associated with retail are 856 (ASN), 850 (PO), and 812 (invoice).

 * **Returns:** the ST01 segment value

## `String getHeaderControlNumber()`

The ST02 segment element contains the control number. This should match the control number on the corresponding transaction trailer segment.

 * **Returns:** the ST02 segment value

## `Integer getExpectedNumberOfSegments()`

The SE01 segment element contains the number of segments that are in this transaction.

 * **Returns:** the SE01 segment value

## `String getTrailerControlNumber()`

The SE02 segment element contains the control number. This should match the control number on the corresponding transaction header segment.

 * **Returns:** the SE02 segment value

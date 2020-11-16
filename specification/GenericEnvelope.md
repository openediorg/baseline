# X12 Generic Envelope


## Overview 

`public static X12ParserException handleUnexpectedSegment(String expectedSegmentId, String actualSegmentId)`

builds an {@link X12ParserException} w/ consistent message when an unexpected segment is encountered

the caller of the method must throw this exception if that is what is desired

 * **Parameters:**
   * `expectedSegmentId` — 
   * `actualSegmentId` — 
 * **Returns:** the X12ParserException

## `public static boolean isValidEnvelope(List<X12Segment> segmentList, String headerIdentifier, String trailerIdentifier)`

given a set of segment lines it will examine the first and last segments and evaluate whether they match the header and trailer values passed into the method

 * **Returns:** true if envelope matches otherwise false

## `public static boolean verifyTransactionSetType(List<X12Segment> segmentList, String transactionType)`

The segment list should wrapped in valid transaction envelope (ST/SE) with the transaction type (ST01) matching the provided type

 * **Parameters:**
   * `segmentList` — 
   * `transactionType` — 
 * **Returns:** true if type matches otherwise false

## `public static Integer parseVersion(String versionValue)`

return the numeric part of a version number

 * **Parameters:** `versionValue` — 
 * **Returns:** 

## `public static List<X12Loop> findHierarchicalLoops(List<X12Segment> segmentList)`

generic method that takes a given a set of segment lines and it will break them up into separate hierarchical loops using the HL as the break since there is no terminating segment for the loop - only the start of the next loop

this method will only work when the first segment is an HL and when this set of segments has already been extracted from the ST/SE and the parts of the header and trailer of the transaction set

 * **Returns:** list of {@link X12Loop} or empty list if there is a problem

     <p>
 * **Exceptions:** `X12ParserException` — if the first segment is not an HL or if the parent

     that an HL loop has is not found

## `private static List<X12Loop> processLoops(List<X12Segment> segmentList)`

handle the loops and build nested structure as defined by the segment lines

 * **Parameters:** `segmentList` — 
 * **Returns:** list of loops

     <p>
 * **Exceptions:** `an` — {@link X12ParserException} if id is reused an HL segment

## `private static boolean isHierarchalLoopStart(X12Segment segment)`

check the segment for the start of HL

 * **Parameters:** `segment` — 
 * **Returns:** true if HL otherwise false

## `private static void handleParentLoop(X12Loop loop, Map<String, X12Loop> loopMap)`

given a loop, look for the parent loop

 * **Parameters:**
   * `loop` — 
   * `loopMap` — <p>
 * **Exceptions:** `X12ParserException` — if the parent loop is missing

# X12 Segment

> Defines the X12 Segment Class

## Segment

Each line in an X12 document is called a segment Each segment contains one or more elements The first element identifies the type of segment

This class will parse a segment into the individual elements

## `public X12Segment(String segment)`

create the {@link X12Segment} using the default delimiter

 * **Parameters:** `segment` — 
 * **Returns:** {@link X12Segment}

## `public X12Segment(String segment, Character dataElementDelimiter)`

create the {@link X12Segment} using the delimiter provided

 * **Parameters:** `segment` — 
 * **Returns:** {@link X12Segment}
 * **Exceptions:** `PatternSyntaxException` — if the delimiter results in invalid regular expression

## `@Override public String toString()`

returns the original segment value

## `public String getIdentifier()`

extracts the first data element in a segment which is the segment identifier otherwise return an empty String

## `public String getElement(int index)`

retrieve the element at a particular index in the segment

## `private List<String> splitSegmentIntoDataElements(String segment, Character dataElementDelimiter)`

parses the segment into a list of data elements each date element is separated by an asterisk (*)

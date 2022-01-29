# IFTTT-Button-GSheet-Duration

## 1) in ifttt 
add row to spreadsheet action
config the Formatted row
as:
=dtr("{{OccurredAt}}") ||| =IF(ISODD(ROW()), "Started", "Stopped") ||| =IF(ISEVEN(ROW()),(INDIRECT(ADDRESS(ROW(),COLUMN()-2,4)) - (INDIRECT(ADDRESS(ROW()-1,COLUMN()-2,4)))),"")

## 2) in google sheet

add macro 


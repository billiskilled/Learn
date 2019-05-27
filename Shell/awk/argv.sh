#! /bin/bash

printf "wang#1\nlei#2\nchang#3\nying#4\njie#5\n" > temp.txt
awk -F# '
	BEGIN { print "ARGC:"ARGC; for (i in ARGV) {print i, ARGV[i]} }
	{ print $1, $2 }
' temp.txt
rm temp.txt

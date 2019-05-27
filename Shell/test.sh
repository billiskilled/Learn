#!/bin/bash

str='you''are'
echo $str

temp=3
doubleStr="youare${temp}\n"
echo $doubleStr

string="runoob is a great site"
# echo `expr index "$string" io`

echo $*

#val=`expr 2 \* 2`
#echo "两数之和为 : $val"

val=$((3 / 3))
echo "mac $val"

if [[ 10 -lt 100 && 10 -lt 10 ]]
then
	echo "10<100"
else
	echo "!10<100"
fi


num1=100
num2=100
if [ ${num1} -eq ${num2} ]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi

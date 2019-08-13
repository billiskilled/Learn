#! /bin/bash

argNum=$#

if [ $argNum != 1 ]; then
    echo "参数数目错误"
    exit 1
fi

switch=$1

if [ $switch == 'on' ]; then
    defaults write NSGlobalDomain ApplePressAndHoldEnabled -boolean false
elif [ $switch == 'off' ]; then
    defaults write NSGlobalDomain ApplePressAndHoldEnabled -boolean true
else
    echo "参数错误"
    exit 1
fi

exit 0

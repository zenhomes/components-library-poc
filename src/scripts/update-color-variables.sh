#!/usr/bin/env bash

ENUMS_FILE=src/style-variables/color-variables.ts

# create a file if it doesn't exist. otherwise, overwrite
echo "export enum Colors" > $ENUMS_FILE
./node_modules/.bin/scss-to-json ./node_modules/@zenhomes/ui/styles/variables/colors.scss | sed -e 's/"\$/"/' | sed -e 's/:/ =/' | perl -pe 's/-(\w)(?=.*\s=\s)/\U$1/g' >> $ENUMS_FILE
echo "" >> $ENUMS_FILE

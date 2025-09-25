#!/bin/bash

sed -i "3 a\\$1" ../libs/**/package.json
sed -i "3 a\\$1" ../plugins/**/package.json
sed -i "3 a\\$1" ../samples/**/package.json
sed -i "3 a\\$1" ../dbs/**/package.json

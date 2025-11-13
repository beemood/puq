#!/bin/bash

#
# Reset the database, delete all data
#
#

rm -rf prisma/migrations

npx prisma migrate reset --force

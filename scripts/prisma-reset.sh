#!/bin/bash

npx prisma migrate reset --force
rm -rf prisma/migrations

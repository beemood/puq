#!/bin/bash

cd ./dbs/app-db
npx prisma migrate reset 
cd ./dbs/asset-db
npx prisma migrate reset 
cd ./dbs/auth-db
npx prisma migrate reset 
cd ./dbs/contact-db
npx prisma migrate reset 
cd ./dbs/hr-db
npx prisma migrate reset 
cd ./dbs/inventory-db
npx prisma migrate reset 
cd ./dbs/pm-db
npx prisma migrate reset 
## init docker
  docker run --name example-name -e POSTGRES_PASSWORD=pass -p 5432:5432 -d postgres
  npx prisma migrate dev
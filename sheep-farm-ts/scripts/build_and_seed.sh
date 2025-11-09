
#!/usr/bin/env bash
set -e
# Build backend and frontend images (locally), then run seed inside backend container
docker-compose build
docker-compose up -d db
# Wait for db
sleep 5
docker-compose up -d backend
# Run seed (requires ts-node available in container)
docker exec -it $(docker-compose ps -q backend) npm run seed || echo "Seed failed; run manually: docker-compose exec backend npm run seed"

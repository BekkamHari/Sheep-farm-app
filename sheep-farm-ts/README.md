
# Sheep & Goat Farm — TypeScript 3-tier Demo

This repository is a GitHub-ready layout for a Sheep & Goat Farm application:
- Frontend: React (static build served by nginx)
- Backend: Node + Express + TypeScript + Sequelize (Postgres)
- Database: Postgres
- Features added: Users & Roles, feed-schedule engine (cron), Kubernetes manifests
- Docker-ready and includes `docker-compose.yml`

## Quick start (Docker Compose)
1. Create `backend/.env` (see `backend/.env.sample`) or copy sample:
   ```
   cp backend/.env.sample backend/.env
   ```
2. From repo root:
   ```
   docker-compose up --build
   ```
3. Frontend: http://localhost:3000
   Backend: http://localhost:4000

Demo credentials:
- username: admin
- password: farmadmin

## What is included
- `backend/` — TypeScript backend with Users & Roles, Animal, HealthRecord, FeedSchedule, seed script
- `frontend/` — React frontend (same simple UI)
- `k8s/` — Kubernetes manifests for deployments/services and a PVC
- `docker-compose.yml` — local development
- `scripts/` — helper scripts to build and seed


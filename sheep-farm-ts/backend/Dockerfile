
FROM node:20-alpine

WORKDIR /usr/src/app
COPY package.json package-lock.json* tsconfig.json ./
RUN npm ci --only=production || npm install --production=false
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "dist/index.js"]

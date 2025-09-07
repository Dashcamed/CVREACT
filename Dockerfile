FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

FROM busybox:1.30 AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist

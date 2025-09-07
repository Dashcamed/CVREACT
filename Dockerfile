FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./

# instalamos con devDependencies
RUN npm ci --include=dev

COPY . .

RUN npm run build

FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

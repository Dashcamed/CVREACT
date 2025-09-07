# ===========================
# Etapa de build
# ===========================
FROM node:20-slim AS builder
WORKDIR /app

# Copiamos package.json y lockfile primero (mejor cacheo)
COPY package*.json ./

# Instalamos dependencias (solo producción para más liviano)
RUN npm ci

# Copiamos el resto del código
COPY . .

# Compilamos la app con Vite
RUN npm run build

# ===========================
# Etapa de producción
# ===========================
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Borramos archivos por defecto de nginx
RUN rm -rf ./*

# Copiamos los archivos de build al contenedor final
COPY --from=builder /app/dist .

# Copiamos un nginx.conf optimizado para SPA (React Router / Vite)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

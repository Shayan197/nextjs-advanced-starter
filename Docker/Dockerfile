# Docker/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Dependencies copy karo
COPY package.json package-lock.json ./
RUN npm ci

# Source copy karo
COPY . .

# Build karo
RUN npm run build

# Port expose karo
EXPOSE 3000

# Start karo
CMD ["npm", "start"]

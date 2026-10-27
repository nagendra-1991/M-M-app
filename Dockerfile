
# Stage 1: Dependencies
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev


# Stage 2: Production image
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy dependencies from the first stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application files
COPY package.json ./
COPY server.js ./
COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]


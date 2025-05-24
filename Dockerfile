# Build stage
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json .npmrc ./

# Install dependencies with retry mechanism
RUN apk add --no-cache python3 make g++ && \
    for i in {1..3}; do npm install --production=false && break || sleep 15; done

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Set environment variable for Vite
ENV VITE_HOST=0.0.0.0

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and built assets
COPY package*.json .npmrc ./
COPY --from=builder /app/dist ./dist

# Install production dependencies only
RUN for i in {1..3}; do npm run install:prod && break || sleep 15; done

# Expose port
EXPOSE 4173

# Start the application
CMD ["npm", "start"]

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:4173 || exit 1

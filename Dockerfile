FROM node:latest
ARG DATABASE_URL

# Set the working directory
WORKDIR /app

# use pnpm
# Copy package.json and package-lock.json \
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile
# Copy the rest of the application code
COPY . .

# Generate Prisma client (DATABASE_URL will be provided at runtime)
RUN DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public" \
    pnpm dlx prisma generate

# Build the application
RUN DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public" \
    pnpm build

# Expose the port the app runs on
EXPOSE 3000
# Set environment variables
ENV NODE_ENV=production
# Start the application
CMD ["pnpm", "start"]

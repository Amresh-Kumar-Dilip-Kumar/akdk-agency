FROM node:latest

# Set the working directory
WORKDIR /app

# use pnpm
# Copy package.json and package-lock.json \
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile
# Copy the rest of the application code
COPY . .
# Generate Prisma client
RUN pnpm dlx prisma generate

ENV DATABASE_URL="postgresql://akdk-landing:akdk-landing-nk-1234@72.61.170.224:5433/akdk-landing-db"
# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000
# Set environment variables
ENV NODE_ENV=production
# Start the application
CMD ["pnpm", "start"]

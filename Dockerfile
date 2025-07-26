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

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]

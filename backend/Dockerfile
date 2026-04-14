FROM node:18-bullseye

WORKDIR /app

# Install build tools (VERY IMPORTANT)
RUN apt-get update && apt-get install -y python3 make g++

COPY package*.json ./

# Force rebuild sqlite3 from source
RUN npm install sqlite3 --build-from-source

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
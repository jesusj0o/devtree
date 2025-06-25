# Usa una imagen node ligera con Alpine
FROM node:18-alpine

WORKDIR /app

# Copia package.json y package-lock.json para cachear npm install
COPY package*.json ./

RUN npm install

# Copia el código fuente (se montará el volumen en docker-compose)
COPY . .

# Expone puerto
EXPOSE 4000

# Comando default para desarrollo
CMD ["npm", "run", "dev"]

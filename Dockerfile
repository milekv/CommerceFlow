# Pobranie obrazu Node.js jako podstawy
FROM node:18

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie pliku package.json oraz package-lock.json
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie pozostałych plików
COPY . .

# Uruchomienie aplikacji
CMD ["npm", "start"]

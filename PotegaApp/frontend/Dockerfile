FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /app

# Instalacja zależności
COPY frontend/package*.json ./
RUN npm install

# Skopiowanie kodu aplikacji
COPY frontend/ .

# Budowanie aplikacji
#RUN npm run build
EXPOSE 3000
# Uruchamianie serwera
#CMD ["sh", "-c", "npm install && npm start"]

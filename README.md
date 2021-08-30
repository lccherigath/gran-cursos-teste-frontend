# Projeto Frontend - Gran Cursos Online

## Execução com Docker

```sh
docker-compose up -d
```

## Execução sem Docker (Debian e derivados)

```sh
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g json-server yarn

# Backend
cd server/
json-server -p 3001 -w db.json --no-cors

#Frontend
cd react-app/
yarn install
yarn start
```
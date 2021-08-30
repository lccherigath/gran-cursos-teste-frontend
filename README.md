## Execução com Docker

```sh
docker-compose up -d
```
Acessar o frontend em [`localhost:8080`](http://localhost:8080) e o backend em [`localhost:3001`](http://localhost:3001)

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
Acessar o frontend em [`localhost:3000`](http://localhost:3000) e o backend em [`localhost:3001`](http://localhost:3001)

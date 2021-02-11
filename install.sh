#!/bin/bash

curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

apt-key list

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

sudo apt install -y mongodb-org

sudo systemctl start mongod.service

sudo systemctl status mongod

sudo systemctl enable mongod

mongo --eval 'db.runCommand({ connectionStatus: 1 })'

sudo systemctl start mongod

sudo systemctl enable mongod

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node

sudo apt update -y
sudo apt install git -y

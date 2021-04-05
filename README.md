# wolves interview task

To get started clone the repository

```
git clone https://github.com/Grassper/wolves.git
```
install the dependencies using yarn

```
yarn setup

```

make sure to setup .env file in root folder and client directory root folder

create .env file in root folder and paste below code in that

```
DATABASE_URL=mongodb://localhost/photogallery
JWT_KEY=NytWolvesInterview
PORT=5000

```
create .env file in client directory root folder and paste below code in that

```
REACT_APP_BASE_URL=http://localhost:5000

```
make sure mongodb is installed in your pc 

after everything setup correctly run

```
yarn dev

```
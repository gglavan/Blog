# Simple Blog on React
### Getting started:

Clone / Download repo -> Open the folder in terminal -> Install the server dependencies: 
```
npm install
```
Now install the client dependencies:
```
cd client
npm install
```
Make sure to have mongodb installed and set the connection to your database in `server.js`:  
```
mongoose.connect("mongodb://localhost/yourDatabaseName");
```
To run the app, open the project's root folder in terminal (where the `server.js` lies) and type:  
```
npm run dev
```
Enjoy!

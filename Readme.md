 to run the project --> npm start

to run test script --> npm run test

## Technologies used: MySql, sequelize, nodejs, expressjs

 Database connection parameters can be found in database.js

 note : i could not authenticate my account with debit card so i used some dummy data to simulate api behaviour

## this api will work on only for the following payload :

{
"text": "This is a sample test.",
"sourceLanguage": "english",
"targetLanguage": "Japanese"
}

## in the payload "targetLanguage" can take one of the following values:

[ "Arabic", "Dutch", "French", "German", "Italian", "Japanese", "Russian", "Spanish" ]

 endpoint: http://localhost:3000/translate
 method: post

## api behaviour

the server firsts looks for the translated text in cache
if found returns the result
else calls the api
sends the result to the client
saves all the available translations texts for future use

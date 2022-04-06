import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './controllers/register.js'
import handleSignIn from './controllers/signin.js';
import handleProfile from './controllers/profile.js';
import handleImage from './controllers/image.js';

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'felixyamano',
        password: '',
        database: 'smart-brain'
    }
});

db.select('*').from('users').then(data => {
    console.log(data);
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

/* app.get('/hello', (req, res) => { res.send('Hello World!') })
app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })  */

const database = {
    users: [
        {
            id: '134',
            name: 'sarah',
            email: 'cookies',
            password: 'tomato',
            entry: 0,
            joined: new Date()
        },
        {
            id: '13131334',
            name: 'sally',
            email: 'oreo',
            password: 'cookies',
            entrry: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => { handleSignIn(req, res, db, bcrypt) });

app.get('/profile/:id', (req, res) => { handleProfile(req, res, db) });

app.put('/image', (req, res) => {handleImage(req,res,db) });

/* var date = new Date();
var components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];
 */
/* var id = components.join(""); */

app.post('/register', (req, res) => { handleRegister(req, res, db, bcrypt) })
/* app.post('/imageurl', (req,res) => { handleApi(req,res)})
 */

// Load hash from your password DB.
/* bcrypt.compare("bacon", hash, function (err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function (err, res) {
    // res = false
});
 */

app.listen(4000, () => {
    console.log('app')
})

/*
/signin -> post = success/fail
/register -> post = user
/profile/:userId -> GET = user
/image -> PUT -> user

*/

/* bcrypt.hash(password, null, null, function (err, hash) {
       console.log(hash);
       // Store hash in your password DB.
   }); */
/* database.users.push({
    id: id,
    name: name,
    email: email,
    password: password,
    entires: 0,
    joined: new Date()
}) */
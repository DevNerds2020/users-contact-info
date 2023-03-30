const express = require('express');
const { MongoClient } = require('mongodb');
const uri = require('./utils');

const app = express();
const port = 3000;


const addCorsHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
};

app.get('/users', async (req, res) => {
  const client = new MongoClient(uri);

  addCorsHeaders(req, res);

  try {
    await client.connect();

    const users = await client.db('mainDB').collection('users').find().toArray();
    console.log("%c Line:15 🥤 users", "color:#3f7cff", users); 

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/users/:username', async (req, res) => {
    console.log("%c Line:27 🌽 req", "color:#6ec1c2", req.params);
    const client = new MongoClient(uri);

    addCorsHeaders(req, res);

    try {
        await client.connect();
        const user = await client.db('mainDB').collection('users').findOne({ username: req.params.username });
        console.log("%c Line:33 🥥 user", "color:#f5ce50", user);
        
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
    }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

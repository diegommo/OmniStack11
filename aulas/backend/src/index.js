const express = require('express');
const app = express();
const cors = require('cors');
const projeto = require('./Calculadora')

app.use(express.json());
app.use(cors());

app.get('/projeto', projeto.index);

app.listen(3333);
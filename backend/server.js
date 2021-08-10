const express = require('express');
const app = express();
const routers = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded())
app.use(require('morgan')('dev'))

app.use('/auth', routers.authRoute);
app.use('/proctectedRoute', routers.protectedRoute)

app.listen(4000, () => console.log(`Connection to PORT ${ 4000 }`));
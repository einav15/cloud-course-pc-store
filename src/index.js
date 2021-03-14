const express = require('express')
const cors = require('cors')


const port = process.env.PORT;
const sequelize = require("./db/sequelize");
const ComputerRouter = require('./routers/ComputerRouter')

const app = express();
app.use(express.json())
app.use(cors())
app.use(ComputerRouter)

sequelize.sync()
  .then(() => app.listen(port, () => {
    console.log(`Server started on port ` + port);
  })).catch(e => console.log(e))

const express =  require("express")
const app =  express()
const CORS = require("cors")

app.use(CORS())
app.use(express.json())

app.get("/" , (req,res) => {
  res.send("This is updated for the second time")
})

app.listen(3000, () => {
  console.log("server listening on port 3000")
})

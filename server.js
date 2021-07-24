require ('dotenv').config();
const express = requre('express');
const path = requre('path');

const app = express();
app.use(express.static(path.resolve(__dirname + '/React-UI/build')));

app.get('/heartbeat', (req, res) => {
    res.json({
      is: "working"  
     })
})

app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`)
});
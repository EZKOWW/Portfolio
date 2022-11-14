var express = require("express");
var path = require("path");
const PORT = process.env.PORT || 5000;

// Start app
const app = express();
app.use(express.static('public'));

// Respond to basic user requests
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
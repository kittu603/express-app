import express from 'express';

const app = express();
const PORT = 3000;
let name = "Krishna"

app.listen(PORT, () =>

    console.log(`Your server is running at port ${PORT}`),


);
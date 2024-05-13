import express from 'express';
import { VALUE } from '@repo/common/config'

const app = express();

app.get('/', (req, res) => {
    console.log("Yo fam we inside get backend route")
    res.json({
        message: "hello world"
    })
});

app.listen(3005, () => {
    console.log(VALUE);
    console.log("Yo fam we inside backend port 3005");  
});
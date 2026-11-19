import express from 'express';
import { main, Product } from './database.js';
const app = express();
const port = 3000;

app.use(express.json())

app.post('/prodcuto', async (req, res) => {
    try {
        // Paso 1 - req.body
        // Paso 2 - 
        // Paso 3  
        const newProduct = new Product(req.body)
        await newProduct.save()
        // Paso 4 
        res.status(201).json({msg:"New prodcut registred"})

    } catch (error) {
        console.log(error);
    }  
})

main().catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
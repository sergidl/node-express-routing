import dotenv from 'dotenv';
import app from './app.js';



dotenv.config();
const port=process.env.PORT;
const host=process.env.HOST;



app.listen(port,()=>console.log(`Server http://${host}:${port}`))

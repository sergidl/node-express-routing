import express from 'express';
import moviesRouter from './routers/moviesRouter.js'
import actorsRouter from './routers/actorsRouter.js'


const app=express();

app.use(express.json());

app.use('/movies',moviesRouter);
app.use('/actors', actorsRouter);


export default app

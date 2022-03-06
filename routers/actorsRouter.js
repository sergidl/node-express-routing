import Router from "express";

const router = Router();

router.use((req, res, next) =>{
    console.log('actorsRouter.js');
    next();
});

router.route('/:id')
    .get((req, res) => { res.send(`Estoy en metodo GET id:${req.params.id} de /actors`) })
    .delete((req, res) => { res.send(`Estoy en metodo DELETE id:${req.params.id} de /actors`) });

router.post('/add',(req, res) => { res.send("Estoy (ADD) añadiendo actors") });


export default router;
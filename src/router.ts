import {Router} from 'express';

const router = Router(); 

//Routing 
router.get('/', (request, response) => {
    response.send("hi there btch")
});
router.get('/about', (request, response) => {
    response.send("about us")
});
router.get('/blog', (request, response) => {
    response.send("blog")
});


export default router;
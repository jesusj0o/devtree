import {Router} from 'express';
import User from './models/User';

const router = Router(); 

//Routing 
router.post('/auth/register', async (request, response) => {
    const user = new User(request.body);
    await user.save();
});



export default router;
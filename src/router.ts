import {Router} from 'express';
import { createAccount } from './handlers';

const router = Router(); 

//Create user account route
router.post('/auth/register', createAccount);



export default router;
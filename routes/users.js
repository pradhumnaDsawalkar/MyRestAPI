import express from 'express';
import {homePage,createUser,findUser,deleteUser,updateUser} from '../controllers/users.js'

const router=express.Router();



//All routes starting from '/user'
router.get('/',homePage);

router.post('/',createUser);

router.get('/:id',findUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);




export default router;

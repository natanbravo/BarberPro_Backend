import { Router, Request, Response } from 'express'
import { AuthUserController } from './controllers/user/AuthUserController';

import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

// router.get('/teste',( req: Request, res: Response) =>{

//     return res.json({OK: true})
// })


// ROTAS USER 

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', new DetailUserController().handle)

export {router};
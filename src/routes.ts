import { Router, Request, Response } from 'express'

const router =Router();

router.get('/teste',( req: Request, res: Response) =>{

    return res.json({OK: true})
})

export {router};
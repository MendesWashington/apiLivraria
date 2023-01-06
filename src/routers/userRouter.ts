import { Router } from "express"

export const userRouter = Router()


userRouter.get('/findalluser', (req, res) => {
    
    return res.status(200).json({message: 'DataBase connected.'})
})

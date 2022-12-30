import { Router } from "express"

export const userRouter = Router()

userRouter.post('/', (req, res) => {
    const { name, lastname, cpf } = req.body

    return res.status(201).json({message: 'User save with success.'})
})


userRouter.get('/findalluser', (req, res) => {
    const listUsers = req.body

    return res.status(200).json(listUsers)
})

userRouter.get('/find/:id', (req, res) => {
    const { id } = req.params

    const listUserId = '' /* userRepository.listUserId(id) */

    /* if (!listUserId) {
        return res.status(404).json({message: User not fund.})
    } */

    return res.status(200).json(listUserId)
})

userRouter.put('/edit/:id', (req, res) => {

})


userRouter.delete('/delete/:id', (req, res) => {
    
})
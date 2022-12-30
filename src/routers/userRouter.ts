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
    const { id } = req.params

    const userId = '' /* userRepository.listUserId(id) */

    /* if (!listUserId) {
        return res.status(404).json({message: User not fund.})
    } */ 

    return res.status(200).json({message: 'return user edited.'})
})


userRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    const indexUser = '' /* obj.indexOf(var => var.id === id) */

    const removeUser = '' /* obj.splice(indexUser, 1) */

    return res.status(200).json({message: 'User deleted with success.'})
})
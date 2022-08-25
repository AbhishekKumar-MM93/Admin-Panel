import express from 'express'
import upload from '../Config/multer.js';
import {createUser, deleteUser, getAllUser, getUser, updateUser,} from '../controllers/userControllers.js'
const userRoutes = express.Router();

userRoutes.post('/',upload.single('image'), createUser),
    userRoutes.get('/', getAllUser),
    userRoutes.get('/:id', getUser),
    userRoutes.put('/:id',upload.single('image'), updateUser),
    userRoutes.delete('/:id', deleteUser)


export default userRoutes;

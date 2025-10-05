



import express from 'express'
import { createDesignController, getAllDesignsController, getDesignByIdController, updateDesignController } from './design.controller.js'

const  route = express.Router()

route.post('/create', createDesignController)


//get all design category 
route.get('/', getAllDesignsController)

//details
route.get('/:id',getDesignByIdController)


//update 
route.patch('/:id',updateDesignController)
export const DesginRoute = route


import mongoose from 'mongoose';
import type { IDesign } from './design.interface.js';
import { Design } from './design.model.js';

export const createDesignService = async (data:IDesign) => {

    console.log("Crate DesginSevice",data)
    const design = new Design(data);
    return await design.save();
};



export const getAllDesignsService = async () => {
    return await Design.find()
};

export const getDesignByIdService = async (id: string) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid design ID');
    }
    const design = await Design.findById(id)
    if (!design) {
        throw new Error('Design not found');
    }
    return design;
};

export const updateDesignService = async (id: string, data: IDesign) => {


    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid design ID');
    }
    
    const updatedDesign = await Design.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    if (!updatedDesign) {
        throw new Error('Design not found');
    }
    return updatedDesign;
};

// export const deleteDesignService = async (id: string) => {
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         throw new Error('Invalid design ID');
//     }
//     const deletedDesign = await Design.findByIdAndDelete(id);
//     if (!deletedDesign) {
//         throw new Error('Design not found');
//     }
//     return deletedDesign;
// };

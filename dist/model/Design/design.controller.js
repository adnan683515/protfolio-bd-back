import { createDesignService, getAllDesignsService, getDesignByIdService, updateDesignService } from './design.service.js';
import mongoose from 'mongoose';
export const createDesignController = async (req, res) => {
    try {
        const { category } = req?.body;
        if (!mongoose.isValidObjectId(category)) {
            return res.status(409).json({ message: 'Object id is not valid' });
        }
        const design = await createDesignService(req.body);
        res.status(201).json(design);
    }
    catch (error) {
        res.status(400).json({ message: error.message || 'Failed to create design' });
    }
};
export const getAllDesignsController = async (req, res) => {
    try {
        const designs = await getAllDesignsService();
        res.json(designs);
    }
    catch (error) {
        res.status(500).json({ message: error.message || 'Failed to fetch designs' });
    }
};
export const getDesignByIdController = async (req, res) => {
    try {
        const design = await getDesignByIdService(req.params.id);
        res.json(design);
    }
    catch (error) {
        res.status(404).json({ message: error.message || 'Design not found' });
    }
};
export const updateDesignController = async (req, res) => {
    try {
        const updatedDesign = await updateDesignService(req.params.id, req.body);
        res.json(updatedDesign);
    }
    catch (error) {
        res.status(400).json({ message: error.message || 'Failed to update design' });
    }
};
// export const deleteDesignController = async (req: Request, res: Response) => {
//     try {
//         await deleteDesignService(req.params.id);
//         res.json({ message: 'Design deleted successfully' });
//     } catch (error: any) {
//         res.status(404).json({ message: error.message || 'Failed to delete design' });
//     }
// };
//# sourceMappingURL=design.controller.js.map
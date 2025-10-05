import mongoose from 'mongoose';
import type { IDesign } from './design.interface.js';
export declare const createDesignService: (data: IDesign) => Promise<mongoose.Document<unknown, {}, IDesign, {}, {}> & IDesign & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const getAllDesignsService: () => Promise<(mongoose.Document<unknown, {}, IDesign, {}, {}> & IDesign & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare const getDesignByIdService: (id: string) => Promise<mongoose.Document<unknown, {}, IDesign, {}, {}> & IDesign & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const updateDesignService: (id: string, data: IDesign) => Promise<mongoose.Document<unknown, {}, IDesign, {}, {}> & IDesign & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=design.service.d.ts.map
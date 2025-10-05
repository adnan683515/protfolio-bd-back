import { Types } from 'mongoose';
export interface IDesign {
    title: string;
    category: Types.ObjectId;
    description: string;
    previewImageUrl: string;
    designerName: string;
    usedTools: string[];
    effectsUsed: string[];
    price: number;
    process: string;
    complexityLevel: 'Basic' | 'Intermediate' | 'Advanced';
    tags: string[];
    status: 'Active' | 'Draft' | 'Archived';
    likesCount: number;
    downloadsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=design.interface.d.ts.map
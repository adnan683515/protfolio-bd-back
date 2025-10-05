import { model, Schema } from "mongoose";
const DesginSchema = new Schema({
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true },
    description: { type: String, required: true },
    previewImageUrl: { type: String, required: true },
    designerName: { type: String, required: true },
    usedTools: { type: [String], required: true },
    effectsUsed: { type: [String], required: true },
    price: { type: Number, required: true },
    process: { type: String, required: true },
    complexityLevel: { type: String, enum: ['Basic', 'Intermediate', 'Advanced'], required: true },
    tags: { type: [String], required: true },
    status: { type: String, required: true, enum: ['Active', 'Draft', 'Archived'] },
    likesCount: { type: Number, default: 0 },
    downloadsCount: { type: Number, default: 0 },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});
export const Design = model('designs', DesginSchema);
//# sourceMappingURL=design.model.js.map
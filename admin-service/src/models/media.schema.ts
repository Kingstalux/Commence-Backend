import { Schema, model, Document, Types } from 'mongoose';

export interface IMedia extends Document {
  product_id: Types.ObjectId;
  url: string;
  alt_text: string;
  position: number;
}

const MediaSchema = new Schema<IMedia>({
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  url: { type: String, required: true },
  alt_text: { type: String },
  position: { type: Number, default: 0 },
});

export default model<IMedia>('Media', MediaSchema);

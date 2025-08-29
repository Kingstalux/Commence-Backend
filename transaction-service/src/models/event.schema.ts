import { Schema, model, Document } from 'mongoose';

export interface IEvent extends Document {
  aggregate: string;
  aggregate_id: string;
  type: string;
  payload: any;
  created_at: Date;
}

const EventSchema = new Schema<IEvent>({
  aggregate: { type: String, required: true },
  aggregate_id: { type: String, required: true },
  type: { type: String, required: true },
  payload: { type: Schema.Types.Mixed },
  created_at: { type: Date, default: Date.now },
});

export default model<IEvent>('Event', EventSchema);

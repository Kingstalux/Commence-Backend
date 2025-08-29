import { Schema, model, Document, Types } from 'mongoose';

export interface ISession extends Document {
  user_id: Types.ObjectId;
  refresh_token_hash: string;
  expires_at: Date;
  created_at: Date;
}

const SessionSchema = new Schema<ISession>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refresh_token_hash: { type: String, required: true },
  expires_at: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
});

export default model<ISession>('Session', SessionSchema);

import { Schema, model } from 'mongoose';
import UserModel, { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = model<IUser, UserModel>('User', userSchema);
export default User;

import mongoose, { Schema } from 'mongoose';

export type User = {
  id: string;
  username: string;
  password: string;
};

export type UserDocument = User & mongoose.Document;

const UserSchema = new Schema<UserDocument>({
  id: String,
  username: String,
  password: String
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);

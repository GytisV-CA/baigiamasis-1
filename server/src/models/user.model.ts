import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,

      validate: {
        validator: (v: string) => v.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i),
        message: () => `must be valid email address`,
      },
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = model('user', userSchema);

export default User;

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
  {
    timestamps: true,
    statics: {
      defaultFieldsArray() {
        return ['firstName', 'lastName', 'email', 'age'];
      },
    },
    query: {
      defaultFieldsQuery() {
        return this.select(this.defaultFieldsArray());
      },
    },
    //GV: the desired effect of this all is to present the built-in id getter instead of _id
    id: true,
    toObject: {
      getters: true,
      transform(doc, ret, options) {
        delete ret._id;
        return ret;
      },
    },
    toJSON: {
      getters: true,
      transform(doc, ret, options) {
        delete ret._id;
        return ret;
      },
    },
  }
);

const UserModel = model('user', userSchema);

export default UserModel;

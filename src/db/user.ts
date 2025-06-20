import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true,
            minlength: 6
        }
    }
)

export const UserModel = mongoose.model("User", userSchema);

export const getUsers = () => UserModel.find();

export const getUserByUsername = (username: string) =>UserModel.findOne({ username });

export const createUser = (values: Record<string, any>) => new UserModel(values)
                            .save().then((user) => user.toJSON());

export const updateUser = (id: string, values: Record<string, any>) =>
                            UserModel.findByIdAndUpdate(id, values);

import mongoose, { Schema } from "mongoose";

//un schema nos ayuda a agregar ciertas reglas que quieremos aplicar a los registros
//se define el schema y despues se relaciona con su modelo 

export interface IUser { 
    handle: string
    name: string
    email: string 
    password: string
}


const userSchema = new Schema({
     handle: { 
        type: String, 
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    }, 
    name: { 
        type: String, 
        require: true,
        trim: true
    }, 
    email: {
        type: String, 
        require: true,
        trim: true,
        unique: true,
        lowecase: true
    }, 
    password: {
        type: String, 
        require: true,
        trim: true
    }
});

const User = mongoose.model<IUser>('User', userSchema); 
export default User;
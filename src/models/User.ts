import mongoose, { Schema } from "mongoose";

//un schema nos ayuda a agregar ciertas reglas que quieremos aplicar a los registros
//se define el schema y despues se relaciona con su modelo 

export interface IUser { 
    name: string, 
    email: string, 
    password: string
}


const userSchema = new Schema({
    name: { 
        type: String, 
        require: true,
        trim: true
    }, 
    email: {
        type: String, 
        require: true,
        trim: true,
        unique: true
    }, 
    password: {
        type: String, 
        require: true,
        trim: true
    }
});
//coment




const User = mongoose.model<IUser>('User', userSchema); 
export default User;
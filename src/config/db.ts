import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(colors.blue.bold("DB sucessfully connected:"), connection.host, connection.port);
        
    } catch (error) {
        console.log(colors.bgRed.bold(error.message));
        process.exit(1);
        
    }
}
import mongoose from 'mongoose'

export const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_CONNECTION_URL}`)
        console.log('mongoDb connect sucessfully');
        
    } catch (error) {
        console.log('Connection failed...', error);
        
    }
}

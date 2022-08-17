import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://kamal:kamal123456@cluster0.5uthcv4.mongodb.net/graphqldb?retryWrites=true&w=majority"
export const JWT_SECRET ="fjsdfldsl;fLLLLDSAKLSDSdsdsfksdkflsd;fsdfsdfsdlfsdfdsffdsdffs";

export const DB_CONFIG = ()=>{
    mongoose.connect(MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    
    mongoose.connection.on("connected",()=>{
        console.log("connected to mongodb")
    })
    
    mongoose.connection.on("error",(err)=>{
        console.log("error connecting",err)
    })
}
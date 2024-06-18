// import mongoose from 'mongoose'
// import {DB_Name} from '../constants';

// const connectDB = async ()=>{
//     try{
//         const connectionInstance = await mongoose.connect
//         ('${process.env.MONGODB_URI}/$ { DB_NAME }')
// console.log('\n MongoDB connected !! DB HOST: $ {connectionInstance.connection.host}');
//     } catch(error){
//         console.log('MONGODB connection FAILED',error);
//         process.exit(1)
//     }
//  }
// export default connectDB;

import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDB = async () => {
    try {
        // Using backticks for the connection string and proper interpolation
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_Name}`);
        
        // Using backticks for the log message and proper interpolation
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection FAILED', error);
        process.exit(1);
    }
};

export default connectDB;

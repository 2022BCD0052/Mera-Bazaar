import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

const cached: MongooseConnection = (globalThis as any).mongoose || { conn: null, promise: null };

const connectToDatabase = async (): Promise<Mongoose> => {
    // If already connected, return cached connection
    if (cached.conn) {
        return cached.conn;
    }

    // Check if the MongoDB URI is present
    if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

    // Start connecting if not connected already
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "bazaatcart",
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectToDatabase;

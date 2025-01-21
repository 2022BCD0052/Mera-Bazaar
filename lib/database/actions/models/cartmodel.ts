import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: "Product"
            },
            name: {
                type: String,
                required: true
            },
            vendor: { // corrected typo from 'ventor' to 'vendor'
                type: String,
            },
            image: {
                type: String,
                required: true
            },
            size: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true, // making qty required
            },
            color: {
                colorName: String, // renamed for clarity
                colorImage: String, // renamed for clarity
            },
            price: {
                type: Number,
                required: true
            },
        }
    ],
    cartTotal: {
        type: Number,
        // required: true, // you might want to make this required
    },
    totalAfterDiscount: {
        type: Number,
        // required: true, // you might want to make this required
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true, // ensuring user is required
    },
}, { timestamps: true });

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;

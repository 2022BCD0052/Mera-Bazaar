import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
    coupon : {
        type : String,
        required : false,
        unique : true,
        trim : true,
        lowercase : true,
        minLenght : 4,
        maxLenght : 12
    },
    ventor :{
        type : Object
    },

    startDate :{
        type : Date,
        required : true
    },
    endDate :{
        type : Date,
        required : true
    },
    discount :{
        type : Number,
        required : true
    },
},
{
    timestamps: true
})

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);

export default Coupon;
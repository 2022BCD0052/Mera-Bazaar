import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: [
        {
            type: String,
            public_id : String,
            required: true
        }
,
       
    ], slug :{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },
        ventor :{
            type: Object,
        }
},
{
    timestamps: true
}
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
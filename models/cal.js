import mongoose from "mongoose";

const calSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    group: {
        type: String,
        required: true,
        trim: true
    },
    extrapoints:{
        type: String,
        trim: true
    }
},
    {
        timestamps: true,
    }
);

export const Cal = mongoose.model("Cal", calSchema);
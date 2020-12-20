const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema(
    {
        name: {type: String},
        email: { type: String, required: [true, "Enter  email address"],
            unique: [true, "This account is taken"] },
        currentBalance: { type :  Number, default :0 }
    }
    ,
    { timestamps: true }
);


const User = mongoose.model("user", userSchema);

module.exports = User;


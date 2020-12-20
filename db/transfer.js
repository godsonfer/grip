const mongoose = require("mongoose");
const schema = mongoose.Schema;

const transfer = schema(
    {
        balance: {type: String},
        receiverId: { type: schema.Types.ObjectId, ref: 'user'},
        senderId: { type :  String }
    }
    ,
    { timestamps: true }
);

const Transfer = mongoose.model("transfer", transfer);

module.exports = Transfer;

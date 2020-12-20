const User = require ('./../db/users')
const transferModel = require ('./../db/transfer')

class  Queries {

    /*
    * get all users
     */
    getAllUsers = () =>{
        return  User.find ({}).exec ()
    }
    /*
    * confirm user
     */
    findUserBuyId = (id) =>{
        return  User.findOne({'_id' :  id}).exec ()
    }

    /*Records
     */
    records = (amount,  id) =>{
        new transferModel({
            balance :  amount,
            receiverId :  id,
            senderId :  '001',
        }).save()
    }
//    queries all records
    allRecords =  (id) =>{
       return transferModel.find({'receiverId' : id}).exec ()
    }
}

module.exports = new Queries ()

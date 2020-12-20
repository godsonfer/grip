const Queries =  require ('./../queries/queries')
class Controller {
    /* GET home page. */

    homeP = async (req, res, next) =>{
        const user = await Queries.getAllUsers();
        const users = user.length ? user : null
        res.render('index',
            {
            users
            })
    }

    detailsP = async (req, res, next) =>{
        const id =  req.params.id ;
        const user =  await Queries.findUserBuyId(id);
        const records = await  Queries.allRecords(id)
        console.log(records)
        res.render ('transfer', {user, records})
    }

    transferMoney = async(req, res, next) =>{
        const id = req.params.id;
        const user =  await Queries.findUserBuyId(id)
        const amount =  parseFloat(req.body.amount);

        //record the amount;
        if (amount <1) {
            res.redirect(`/${id}`)
        }else {
            await Queries.records(amount,  id);
            //update user balance;
            user.currentBalance += amount;
            user.save();
            //records to display
            res.redirect ('/')
        }
    }
}

module.exports =  new Controller();

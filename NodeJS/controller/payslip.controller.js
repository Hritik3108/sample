import paySlipModel from '../model/payslip.model.js'

export function createSlip(req, res) {
    console.log('create')

    const {profile,payrun,payrunPeriod,payruntype,status,salary,netSalary} = req.body;
    const newSlip = new paySlipModel(
        {profile,payrun,payrunPeriod,payruntype,status,salary,netSalary}
    )
    newSlip.save().then(data=>{
        if(!data){
            res.status(403).send("Something went wrong.Action forbidden.");
        }
        res.send(data);
    }).catch(err=> res.status(500).json({message: err.message}))
}

export async function getSlip(req, res) {
    paySlipModel.find().then(data=>{
      if(!data){
        res.status(400).send({message:"Something went wrong"})
      }
      res.send(data)
    }).catch(function(error){res.send(error)});
}
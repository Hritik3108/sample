import userModel from '../model/users.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export function register(req,res){
    // console.log("register request initiated");
    const {firstName,lastName,email,password} = req.body;
    // console.log(firstName)
    const newUser = new userModel({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password,10),
    })

    userModel.findOne({email}).then(data=>{
        if(data){
            return res.status(400).send({message:"user already exists!"})
        }else{
            newUser.save().then(data=>{
                let token = jwt.sign({id: data._id},"jwtlock",{expiresIn:"1h"});
                // console.log(data);
                data.password=undefined;
                res.status(200).json({message:data,accessToken:token})
            })
        }
    }).catch(error => res.status(500).json({message: error.message}));
}

export function login(req,res){
    // console.log('login init')
    const {email,password}= req.body;

    userModel.findOne({email}).then(data=>{
        if(!data){
            return res.status(404).json({message:"Invalid Email"});
        }

        let isValidPassword = bcrypt.compareSync(password, data.password);

        if(!isValidPassword){
            res.status(403).send({message:"Invalid Password"});
        }

        let token = jwt.sign({id: data._id},"jwtlock",{expiresIn:"1h"});

        res.send({
            user: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            },
            accessToken: token
        })
    })
}
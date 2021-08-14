const StudentService = require('../service/service')

async function add(req,res){
    const {name,password,loginId}=req.body;
    const result = await StudentService.add({name,password,loginId});
    res.send({msg:result});
}

async function checkUser(req,res){
    const {loginId,password} = req.body;
    const result = await StudentService.checkUser(loginId,password);
    res.send({msg:result})
}


module.exports = {add,checkUser}
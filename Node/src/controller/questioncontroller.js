const Questionservice = require('../service/Questionservice')

async function add(req,res){
    const {created_by_user_id,question} = req.body;
    const result = await Questionservice.add({created_by_user_id,question});
    res.send({msg:result});
}

async function update(req,res){
    const {answer_by_user_id,answer, question_id} = req.body;
    const result = await Questionservice.update({answer_by_user_id,answer, question_id});
    res.send({msg:result});
}
async function find(req,res){
    const result = await Questionservice.find();
    res.send({msg:result});
}

async function findid(req,res){
    const {question} = req.body;
    const result = await Questionservice.find({question});
    res.send({msg:result});
}

module.exports = {add, update,find,findid}
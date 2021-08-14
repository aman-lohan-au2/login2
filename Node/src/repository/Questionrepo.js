const mongo = require('mongodb')
const {studentQuestionDB} = require('../database/db')

async function add({created_by_user_id,question}){
    const db = await studentQuestionDB();
    const Question = db.collection("QuestionAnswer");
    
        try {
            const Ques = await Question.find({created_by_user_id,question}).toArray();
            if(Ques.length){
                return "Already Question"
            }
            await Question.insertOne({created_by_user_id,question});
            return "Question added"
        }
        catch (err) {
            console.log(err);
            return "Error"
        }
    }


async function update({question_id, answer_by_user_id,answer}){
    const db = await studentQuestionDB();
    const Question = db.collection("QuestionAnswer");
    {
        try {
            await Question.updateOne({_id: new mongo.ObjectId(question_id)}, {$set: {answer_by_user_id,answer}})
            return "Answer added"
        }
        catch (err) {
            console.log(err);
            return "Error"
        }
    }
}


async function find(){
    const db = await studentQuestionDB();
    const Question = db.collection("QuestionAnswer");
    try{
        const result = await Question.find({}).sort({_id: -1}).toArray();
        return result;
    }
    catch (err){
        return 'Empty'
    }
}

module.exports = {add, update,find}
import React,{useEffect, useState} from 'react';
import {getQuestion,askQuestion,submitAnswer} from '../api/index';

function Home(){
    const [userId, serUserId] = useState(null);
    const [data,setdata] = useState([])


    useEffect(()=>{
        const id =localStorage.getItem("userId");
        serUserId(id)
        console.log(id, 44)
    },[userId])

    useEffect(() => {
        async function getdata() {
            const res = await getQuestion();
            // console.log(res);
            setdata(res.msg);
        }
        getdata()
    }, []);



  const handleSubmit = async(e) => {
    e.preventDefault();
      const id = userId;
      const Question = document.getElementById('inputquestion').value;
      const some =  await askQuestion(id,Question)
      if(some.msg === "Question added") {
        window.location.reload();
      }
  }

  const handleClick = async(e, questionId) => {
    const answer = document.getElementById(questionId).value;
    const res = await submitAnswer(questionId, userId, answer)
    if(res.msg === "Answer added") {
        window.location.reload();
    }
  }

    return(
        <div>
        <h1>{userId}</h1>
        <form onSubmit={handleSubmit} className="form-horizontal">
        <input type="text" id="inputquestion" placeholder="Enter your Question"/>
        <button class= "btn btn-success" href="/" type="submit">Add Question</button> 
        </form>
        <ul>
            {data.map(ele => {
                if(ele.answer) {
                    return (            
                        <div>
                        <li>Question:{ele.question}</li>
                        <li>Answer:{ele.answer} 
                        <input type="text" id={ele._id} style={{visibility:"hidden"}}/>   
                        <button class= "btn btn-transparent" style={{visibility:"hidden"}} onClick={e => handleClick(e, ele._id)}>Add</button></li>
                        </div>)
                }
                return (            
                    <div>
                    <li>Question:{ele.question}</li>
                    <li>Answer:{ele.answer} 
                    <input type="text" id={ele._id}/>   
                    <button class= "btn btn-transparent" onClick={e => handleClick(e, ele._id)}>Add</button></li>
                    </div>
                )
            }
            )   }
        </ul>
        </div>
    );
}



export default Home
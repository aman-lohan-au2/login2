import React from 'react';

function Answer() {
    return(
        <form  className="form-horizontal">
        <input type="text" id="inputquestion" placeholder="Enter your Question"/>
        <button class= "btn btn-success" href="/" type="submit">Submit Answer</button> 
        </form>
    );
}

export default Answer
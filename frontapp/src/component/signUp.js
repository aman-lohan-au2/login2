import React from 'react';
import {saveStudent} from '../api/index'


function Signup() {

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const name = document.getElementById('inputUser').value
        const password = document.getElementById('inputPassword').value
        const loginId = document.getElementById('inputEmail').value
        const res = await saveStudent(name,password,loginId)
        try {
            if(res.msg.name === name) {
                alert('User created Successfully');
                window.location.href='/'
            }
        } catch (err) {
            alert('Ouch something Broken, please retry');
        }
    }
    
    return(
        <div className="span6">
        <div className="area">
            <form onSubmit={handleSubmit} className="form-horizontal">
                         <div className="heading">
                             <h4 className="form-heading">Sign Up</h4>
                          </div>  
                <div className="control-group">
                    <label className="control-label" for=
                    "inputEmail">Email</label>
    
                    <div className="controls">
                        <input id="inputEmail" placeholder=
                        "E.g. ashwinh@cybage.com" type="text"/>
                    </div>
                </div>
    
                <div className="control-group">
                    <label className="control-label" for=
                    "inputUser">Username</label>
    
                    <div className="controls">
                        <input id="inputUser" placeholder=
                        "E.g. ashwinhegde" type="text"/>
                    </div>
                </div>
    
                <div className="control-group">
                    <label className="control-label" for=
                    "inputPassword">Password</label>
    
                    <div className="controls">
                        <input id="inputPassword" placeholder=
                        "Min. 8 Characters" type="password"/>
                    </div>
                </div>
        
                <div class="control-group">
                            <div class="controls">
                                 <button class=
                                "btn btn-success" href="/" type="submit">Sign
                                Up</button> 
                            </div>
                        </div>
            </form>
        </div>
    </div>
    );
}

export default Signup
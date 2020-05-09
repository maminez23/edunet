import React from 'react';
export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:null,
            first :null,
            last : null,
            email : null,
            password : null,
            photo : null
        }
    }
    // collect values from inputs
    handleInput(event){
        let target = event.target.name;
        let value = event.target.value;
        this.state[target]=value;
    }

    handlSubmit(event){
        event.preventDefault();
        let user = this.state;
        console.log(user)
        fetch("http://localhost:8080/auth/signup",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res=>{
            console.log('done');
            window.location.href = 'http://localhost:3000/teacherlog'
        })
        .catch(err=>{
            alert('user exist');
        })
    }

    render(){
        return(
            <div>
            <form>
                  <div className='form-group'>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='First name' name='first' onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Last name' name='last'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='email' placeholder='Email' name='email'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='password' placeholder='Password' name='password'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Picture' name='photo'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6'>
                              <div className='form-check'>
                                  <label htmlFor='role'>Role</label>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md'>
                                  <div className='form-check'>
                                      <input className='form-check-input' type='radio' name='role' value='teacher' onChange={this.handleInput.bind(this)}/>
                                      <label className = 'form-check-label' htmlFor='role'>Teacher</label>
                                  </div>
                              </div>
                              <div className='col-md'>
                                  <div className='form-check'>
                                      <input className='form-check-input' type='radio' name='role' value='student'onChange={this.handleInput.bind(this)}/>
                                      <label className = 'form-check-label' htmlFor='role'>Student</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                            <button type="submit" className="btn btn-primary" onClick={this.handlSubmit.bind(this)}>SignUp</button>
                          </div>
                      </div>
                  </div>
            </form>
        </div> 
        );
    }
}
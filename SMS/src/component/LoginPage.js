import React from "react";
import { toast } from "react-toastify";
import './LoginPage.css';
import StudentPortalService from "./StudentPortalService";

class LoginPage extends React.Component
{
    constructor(props) 
    {
        super(props);
        console.log("In login page constructor");
        this.state={
            login_id:"",
            username:"",
            password:"",
            role:"",
            selectedOption:null,
            data:"",
            responseMessage:""
        }

    }    
    handleOptionChange = (event) => {
        this.setState({
          selectedOption: event.target.value,
        });
      };
      validateUser=(event)=>
      {
        event.preventDefault();
        let loginDetail={username:this.state.username,password:this.state.password,role:this.state.selectedOption}
        if(this.state.username==='')
        {
            alert("Username should not be Blank !!!");
           
            return;
        }
        else if(this.state.password==='')
        {
            alert("Password should not be Blank !!!");
            return;
        }
        else if(this.state.selectedOption===null)
        {
            alert("Select Checkbox !!!");
            return;
        }
        const encodedUsername = encodeURIComponent(this.state.username);
        const encodedPassword = encodeURIComponent(this.state.password);
        console.log("login detail info"+loginDetail)
        StudentPortalService.validateStudent(encodedUsername,encodedPassword).then((result)=>
        {
            console.log("result data"+(result.data));
            this.state.data=result.data;
            this.state.responseMessage=result.data.message;
            let studobj=result.data.data[0].login_id;
            this.state.login_id=studobj;
            //this.setState({login_id:studobj.login_id});
            // this.setState({data:result.data});
            // this.setState({responseMessage:result.data.message });
            console.log(this.state.data);
            console.log(this.state.responseMessage);
            console.log(this.state);

            //if successfull go to student's home page else keep
            //on login page

            //Displaying 'home' url for student 
            //and storing it in localstorage
            if(this.state.responseMessage==="success"&&this.state.selectedOption==="student")
            {
                console.log("result if msg"+(this.state.responseMessage));
               
                sessionStorage.setItem('username',this.state.username);
                sessionStorage.setItem('login_id',this.state.login_id);
                // localStorage.setItem('username',JSON.stringify(this.state.username));
                // localStorage.setItem('password',JSON.stringify(this.state.password));
                this.props.history.push("/home")
            }
            else
            {
                console.log("result else msg "+this.state.responseMessage);
                window.alert('Invalid Username or Password');
                window.location.reload();
                //this.props.history.push("/login");
            }
                
        })
      }
    render()
    {
        return(
        <div>
            <div class="container">
	            <div class="d-flex justify-content-center h-100">
		            <div class="card">
			            <div class="card-header">
                            <h1>CDAC Student Portal</h1>
				             <h3>Login as </h3>
			            </div>
                        <div class="card-role">
                        <input type="radio" id="student" name="role" value="student"  checked={this.state.selectedOption === "student"}
            onChange={this.handleOptionChange}></input>
                        <span>Student</span>
                        <input type="radio" id="faculty" name="role" value="faculty" checked={this.state.selectedOption === "faculty"}
            onChange={this.handleOptionChange}></input>
                        <span>Faculty</span>
                        <input type="radio" id="staff" name="role" value="staff" checked={this.state.selectedOption ==="staff"}
            onChange={this.handleOptionChange}></input>
                        <span>Staff</span>
                        {/* this is to check the value of radio box selected item */}
                        {/* <span>Selected option: {this.state.selectedOption}</span> */}
                        </div>
			        <div class="card-body">
				        <form>
					        <div class="input-group form-group">
						        <div class="input-group-prepend">
							    <span class="input-group-text"><i class="fas fa-user"></i></span>
						        </div>
						        <input type="text" class="form-control" placeholder="username" required  
                                value={this.state.username} onChange={(event)=>this.setState({username:event.target.value})} />
                                 {/* {this.state.username==='' ?<span style={{color:"yellow" }}>* required </span>:null } */}
					        </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                    <input type="password" class="form-control" placeholder="password" required 
                                    value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
                                    {/* {this.state.password==='' ?<span style={{color:"yellow" }}>* required </span>:null } */}
                            </div>
                            {/* to check the entered value of username and password
                            <span>Selected username: {this.state.username}</span><br/>
                            <span>Selected password: {this.state.password}</span> */}
					        <div class="row align-items-center remember">
						        <input type="checkbox"/>Remember Me
					        </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn float-right login_btn"
                                onClick={this.validateUser}/>
                            </div>
				        </form>
			        </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-center links">
                                    Forgot your password?<a href="www.google.com">Click Here</a>
                                </div>
                            </div>
		            </div>
	            </div>
            </div>
        </div>)
    }
}
export default LoginPage;
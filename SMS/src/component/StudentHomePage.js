import React from "react";
import './StudentHomePage.css';
import StudentInfo from "./StudentInfo";
import StudentMark from "./StudentMark";
class StudentHomePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            student_id:"",
            username:"",
            student_name:"",
            student_phone:"",
            student_gender:null,
            student_date_of_birth:"",
            student_admission_date:"",
            student_year_of_passing:"",
            student_course_id:"",
            login_id:""
        }
    }
    
    render()
    {
        this.state.username=sessionStorage.getItem('username');
        this.state.login_id=sessionStorage.getItem("login_id");
        const backgroundImageUrl = require('./studenthomepage.jpg'); // Adjust the path

    const containerStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
        
        return(
            <div className="student-container" style={containerStyle}>
                <h1>Student Home Page</h1>
                {/* <h1>{this.state.username}</h1>
                <h1>{this.state.login_id}</h1> */}
                <div className="grid-container" >
                    <div class="leftcolumn" style={{width:'50%'}} >
                        <StudentInfo></StudentInfo>
                    </div>
                </div>
                <div className="grid-container">
                    <div  class="leftcolumn" style={{width:'50%'}}>
                    <StudentMark></StudentMark>
                    </div>
                    
                </div>
                <div className="grid-container">
                    <div  class="leftcolumn" style={{width:'50%'}}>
                    <StudentMark></StudentMark>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
export default StudentHomePage;
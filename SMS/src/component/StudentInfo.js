import React from "react";
class StudentInfo extends React.Component
{
    render()
    {
        return(
            <div className="student-info">
            <h2>Student Information</h2>
            <div className="info">
              <div className="label">Name:</div>
              <div className="value">John Doe</div>
            </div>
            <div className="info">
              <div className="label">Roll Number:</div>
              <div className="value">12345</div>
            </div>
            <div className="info">
              <div className="label">Course:</div>
              <div className="value">Computer Science</div>
            </div>
            {/* Add more info blocks here */}
          </div>
            )
    }
}
export default StudentInfo;
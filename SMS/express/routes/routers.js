//import libraries
const express=require("express")
const router=express.Router();

const connection=require("../db/dbconnect")


// router.get("/home",(req,resp)=>{
//     connection.query("select * from student",(err,data,fields)=>{
//         if(!err){
//             resp.send(data);
//         }

//     })

// })

// router.get("/home/:eid",(req,resp)=>{
//     connection.query("select * from student where student=?",[req.params.eid],(err,data,fields)=>{
//         if(!err){
//             resp.send(data);
//         }

//     })

// })

// router.post("/home",(req,resp)=>{
//     connection.query("insert into student values(?,?,?)",[req.body.empid,req.body.ename,req.body.sal],(err,data)=>{
//         resp.send("{mesg:data added successfully");

//     })

// })

// router.put("/home/:eid",(req,resp)=>{
//     connection.query("update student set ename=?,sal=? where empid=?",[req.body.ename,req.body.sal,parseInt(req.body.empid)],(err,data)=>{
//         resp.json({ message: "Data updated successfully", data: data });

//     })

// })

// router.delete("/student/:eid",(req,resp)=>{
//     connection.query("delete from employee where empid=?",[req.params.eid],(err,data)=>{
//         resp.send("{mesg:data deleted successfully");

//     })

// })

router.get("/login/:username/:password",(req,resp)=>{
    console.log("username "+req.params.username);
    console.log("password "+req.params.password);
       connection.query('SELECT * FROM student WHERE email = ? AND password = ?',[req.params.username,req.params.password],
       (err,data)=>{

        if (err) 
        {
            console.error('Error validating user:', err);
            const message= 'Error validating user';
            resp.send({ data,message});
        } 
        else if (data.length === 0) 
        {
            const message='Invalid credentials'
            resp.send({ data, message });
        } 
        else 
        {
            const message="success";
            resp.status(200).send({ data, message });
            
        }
            
        
         })
 });

 router.get("/home/:stdid",(req,resp)=>{
        console.log("username "+req.params.stdid);
        connection.query("SELECT si.student_id, si.name,s.email, si.phone_no,si.gender,si.date_of_birth,si.admission_date,si.course_id FROM studentinfo si JOIN student s ON si.student_id = s.login_id WHERE s.login_id = ?",[req.params.stdid],(err,data,fields)=>{
            if(!err){
                resp.send(data);
            }
    
        })
    
    })
    router.get("/home/marks/:stdid",(req,resp)=>{
        console.log("username/marks "+req.params.stdid);
        connection.query("SELECT sm.subject_name, sm.marks FROM student_mark sm JOIN studentinfo si ON sm.student_id = si.student_id JOIN student l ON si.student_id = l.login_id WHERE l.login_id = ?",[req.params.stdid],(err,data,fields)=>{
            if(!err){
                resp.send(data);
            }
    
        })
    
    })

module.exports=router;
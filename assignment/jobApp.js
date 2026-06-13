S//server.js
const express=
require('express');
const app=express();
const PORT=3000;
//middleware
app.use(express.json());

//post Route (create a job application)
app.post("/jobs", (req, res)=>{
    const { company,role,dataApplied, status}=req.body;

    const newjob = {
        id: jobs.length = 1,company,role, dataApplied,status
    };

    jobs.push(newjob);

    res.status(201).json({
        message: "job application created",
        data: newjob
    });
});
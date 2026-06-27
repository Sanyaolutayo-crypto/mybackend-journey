const job = require("../models/jpbModel");



//counting all jobs
const totaljobs=await
job.aggregate([{
    $group:{
        _id: null,
        totalJobs: { $sum: 1 }
    }
}
]);

//grouping jobs by status
const statusStats = await
job.aggregate([{
    $group: {
        _id:"$status",
        count:{ $sum: 1 }
}
}
]);


//Caculating average salary
const averageSalary = await
job.aggregate([{
    $group: {
        _id: null,
        averageSalary: {$avg:"$salary"}
    }
}

]);

//finding highest and lowest salary
const salaryStats = await
job.aggregate([
    {
     $group:{
        _id: null,
        highestSalary:{ $max:"$salary"},
        lowestSaary: {$min:"$salary"}
     }   
    }
]);


//Monthly applications 
const monthlyApplication=
 job.aggregate([
    {
        $group:{
            _id: {
                year: { $year:"$dateApplied"},
                month: {$month:"$dateApplied"}
            },
            total: {$sum:1}
        }
    },
    {
        $sort:{
            "-id.year": 1,
            "_id.month": 1
        }
    }
 ]);


 //Return al analytics
 const getAnalytics = async
 (req,res)=> {
    const statusStats = await
    job.aggregate([
        {
            $group:{
                _id: "$status",
                count: {$sum: 1}
            }
        }
    ]);
    const salaryStats=await
    job.aggregate([
        {
            $group:{
                _id: null,
                averageSalary:{$avg:"$salary"},
                highestSalary:{$max:"$saary"};
                lowestSaary: { $min:"$salary"}
            }
        }
    ]);

    res.status(200).json({
        statusStats,
        salaryStats
    });
 };
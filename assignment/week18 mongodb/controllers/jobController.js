//complete controllers (complex query)
//Reading query parameters
const getjobs = async (requestAnimationFrame,res) =>{
    const{
        company,status,search,sort,
        page = 1,
        limit = 10,
    } = requ.query;
};


let filter = {}

//adding filter

if (company) {
    filter.copany = company;
}

if (status){
    filter.staus = status;
}


//implementing search
if (search){
    filter.$or =[
        {company: { $regex:search,$options: "i"}},
        {role: {$regex: search,$option: "i" }}
    ];

}

//creating a query

let query= job.find(filter);

//adding sorting
//default sorting
query =
query.sort("-createdAt");
//allow users to choose
if (sort){
    query = query.sort(sort);
}

//implementing pagination
//convert page and limit to numbers
const pageNumber =
Number(page);
const pageSize = Number(limit);

const skip = (pageNumberr - 1)* pageSize;

//execute the query
const jobs = await query;

//count total number of pages or documents
const totaljobs = awaitjob.countDocuments(tilter);

const totalPage = 
Math.ceil(totaljobs/pageSize);

//returning the response
res.status(200).json({
    totaljobs,
    totalpages,
    jobs,
});



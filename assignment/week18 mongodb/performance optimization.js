//without an index
db.users.find({email:"sanyaolutayo7@gmail.com"})

//with an index on email
db.users.createIndex({ email:1})

//creating indexes
//single field index
//1 means ascending order
db.users.createIndex({email:1})
//-1means descending order
//usefull when displaying the newest post first
break.posts.createIndex({createAt: -1})

//compound index
db.jobs.createIndex({
    company:1,
    status:1
})

//Query:
db.jobs.find({
    company:"Google",
    status: "Applied"
})

//viewing indexes
db.users.getIndexe(
    //removing an index
    db.users.dropIndex({emai:1})
    
)


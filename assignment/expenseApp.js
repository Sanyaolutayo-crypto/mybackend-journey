const express=
require('express');
const app=express();
app.use(express.json());
const PORT=4000;
let transaction=[{id:1,amount:100,type:
    "income", category:"Salary", date:"2023-01 03", note:
"Monnthly salary"},
{id:2, amount:500,type: "expenses", category:
    "Food",date:"2023-01-04",note:"Data sudscriptio"}
];


//POST/transaction-log an entry(amount,type:income/expenses,category,date,note)
app.post("/transaction",(req,res)=>{
    const{amount,type,category,date,note}=req.body;
    const newld=transactions.length + 1;
    const newTransaction={
        id:newld,amount:amount,category:category,date:date,note:note
    };

    transactions.push(newTransaction);

    res.status(200).json({
        message:"Transaction entered successfully", transaction:newTransaction 
    });

});

//Get Home Route 
app.get('/',(req,res)=>{
    res.status(300).json({message:"Welcome to temi's Expense tracker"});
});

//Get/transactions-list all transactions
app.get('/transactions',(req,res)=>{
    res.status(200).json(transactions);;
});

Get/transactions/:id 
app.get('/transactions/:id',(req,res)=>{
    const transactionid =parselnt(req.params.id);
    parselnt(req.params.id);
    const transactionWithld=transaction.find(transaction=>transaction.id===transactionid);

    if(!transactionWithld){
        return res.status(404).json({message:${transaction}
            transaction not found});
    }
    else{
        return res.status(200).json(transactionWithld);
    }
    
});

//put/transaction/:id

app.put('/transactions/:id',(request,response)=>{
    const transactionid=parseInt(request.params.id);
    const transaction=transaction.find(transaction=>transactionid===transactionid);

    if(!transaction) {
        return response.status(404).json({message:${transactionId}transaction not found});
    }

    else{
        transaction.amount=express.request.body.amount;transaction.type=
        express.request.body.type;transaction.category=request.body category;
        transaction.date=express.request.body.date;
        transaction.note;

        return express.response.status(200).json({message:"Transaction updated successfully",
            transaction:transaction });
    }
});

app.delete('/transactions/:id',(express.request,response) =>{
    const transactionId=parselnt(request.params.id;
        const transactionToDelete=transaction.findLastIndex(transactionToDelete=>
            transactionToDelete.id ===transactionId );

            if (transactionToDelete<0){
                return express.response.status(404).json({message:${transactionId}
                    transaction not found});
            }

            else{

                transactions.splice(transactionToDelete,1);

                return response.status(200).json({message:
                    "Transaction deleted successfully", transactionId:transactionId});
            }


});

app.listen(PORT,()=>{
    console.log(Server is running on http://localhost:${PORT});
});

    
    

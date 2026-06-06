<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>my website</title>
</head>
<body>
    <h1>hello world</h1>

    <script>
        //student dataset    
        // dataset(array of object)
        const students = [
            {name: "john", score: 85, age: 20},
            { name: "Mary",  score: 58, age : 19} ,
            { name: "David",  score: 72, age : 21} ,
            { name: "Sarah",  score: 40, age : 18} ,
            { name: "Daniel",  score: 95, age : 22} 
            ] ;
            //filter() - Select Students Who Pass 
            //the purpose is to select some data from the dataset.
            const passedStudents = students. filter(student => student .score >=50);
            console.log(passedStudents);
            //map()- Extract Student Names
            //Creating a new array containing only students names.
            // the purpose is to transform data
            const studentNames = students.map(students = studen.name);
            console.log(studentname);
            //reduce()- calculate total scores
            // the purpose is to combine all values into one result.
            const totalScore = students.reduce((sum, student)=>{
                return sum + student.score;
            }, 0);
            console.log(totalScore);

           // sort()- sort Students by score
           //the purpose is to arrange data.
           // (i.e Students sorted from highest score to the lowest.)
            const sortedStudents = student.sort((a, b,)=> b.score- a.score);
              console.log(sortedStudents);
              //some ()- check if any student failed
              // the purpose is to check if at least one condition is true.
              const hasFailed = students. some(student =>student.score<50);
              console.log(hasFailed);
              //every()- Check if all Sudents passed
              //The purpose is to check if all items meet a conditin
              const allPassed = students. every(student => student.score >=50 ) ;
              console.log(alPassed);


    </script>
</body>
</html>
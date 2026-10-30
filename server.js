const express=require('express')
const app=express();
app.use(express.json());
 let students=[{id:1,name:"ram"},{id:2,name:"rahul"}];

//GET
app.get('/students',(req,res)=>{
    res.send(students)
});
//post
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("student added");
})
//patch

app.patch('/students/:id', (req, res) => {

    let id = Number(req.params.id);

    let student = students.find(s => s.id === id);

    if (student) {
        student.name = req.body.name;
        res.send("Student Updated");
    } 
    else {
        res.send("Student Not Found");
    }

});

//delete
app.delete('/students/:id',(req,res)=>{
let id=Number(req.params.id)
students = students.filter(s => s.id !== id);
res.send("Student Deleted");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
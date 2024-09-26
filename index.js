import express from 'express';
import bodyParser from 'body-parser';  //allow incoming post request body
import userRoutes from './routes/users.js';

const app=express();   //calling of express
const PORT=5000;


app.use(bodyParser.json());  //body parser middleware
app.use('/user',userRoutes);


app.get('/',(req,res)=>{
  console.log("hello");
  res.send("This is homePage");
})


app.listen(PORT,()=>{console.log(`Server running on port :http://localhost:${PORT}`)});

import { v4 as uuidv4 } from 'uuid';

let users=[]


const homePage=(req,res)=>{
    res.send(users);
};


const createUser=(req,res)=>{
    const user=req.body;
    const userId=uuidv4();

    const userWithId={...user,Id:userId};

    users.push(userWithId);

    res.send(`Successfully added user ${user.firstName}`);
};

const findUser=(req,res)=>{
    const { id }=req.params;
    const foundUser=users.find((user) => user.Id===id);
    res.send(foundUser);
};

const deleteUser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.Id!==id);
    res.send(`User with the id ${id} deleted successfully`);
};

const updateUser=(req,res)=>{
    const {id}=req.params;
    const userToBeUpdated=users.find((user)=>user.Id===id);
    const {firstName,lastName,age}=req.body;
    if(firstName) userToBeUpdated.firstName=firstName;
    if(lastName)userToBeUpdated.lastName=lastName;
    if(age)userToBeUpdated.age=age;
};

export {homePage,createUser,findUser,deleteUser,updateUser};
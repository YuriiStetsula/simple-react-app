import React from "react";
import "./add-user.css"
class AddUser extends React.Component {

   createUser(e){
    e.preventDefault()
    if (this.userName.value){
        const user = {
            name : this.userName.value,
            id: new Date().getTime()
        }
        this.props.addUser(user)
        this.userName.value = ""
    }else{
        console.log("Type something")
    }

   }
   
    render(){
       return(
        <div className="add-user">
             <input ref={(input)=>this.userName = input} type="text" placeholder="user"/>
             <button onClick={(e)=>{this.createUser(e)}}>+</button>
        </div>
    )
   } 
}

export default AddUser
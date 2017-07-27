import React from "react"
import "./main-component.css"
import AdddUser from "./AddUser"
import UserList from "./UserList"

class User extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    addUser(user){
        let arr = this.state.users.concat([])
        arr.push(user)
        this.setState({
            users: arr
        })
     }

     deleteUser(id){
         let arr = this.state.users.concat([])
         let index = null

         arr.find((el,ind)=>{
            if( Number(el.id) === Number(id) ){
                index = ind
                return true
            }else return false
         })

         arr.splice(index,1)
         
         this.setState({
             users: arr 
         })
         
     }
    
     shouldComponentUpdate(nextProps,nextState){
        if(nextState.users.length != this.state.users.length){
            return true
        }else return false
     }

    render(){
        return(
            <div className="main-component">
              <AdddUser addUser = {this.addUser}></AdddUser>
              <UserList users={this.state.users} delete={this.deleteUser}></UserList>
            </div>
        )
    }
}

export default User
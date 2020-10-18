import React from "react";

class List extends React.Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }

  getName(username){
    this.setState({
      username
    })
  }

  getPassword(passwoed){
    this.setState({
      passwoed
    })
  }

  //登录功能
  loginFn(){
    localStorage.setItem('name',this.state.username)
    localStorage.setItem('token','123456')
    // this.props.history.replace({
    //   pathname:'/users',
    //   search:'?id='+ this.state.username
    // })
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <h2>登录页</h2>
        用户：
        <input
          type='text'
          onChange={(ev)=>{
            this.getName(ev.target.value)
          }}
        >
        </input>
        <br></br>
        密码：
        <input
          type='text'
          onChange={(ev)=>{
            this.getPassword(ev.target.value)
          }}
        >
        </input>
        <br></br>
        <button onClick={this.loginFn.bind(this)}>登录</button>
      </div>        
    )
  }
}

export default List;

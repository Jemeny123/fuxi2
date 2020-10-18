import React from "react";
// import localParam from '../../untils/localParam'

class Userpage extends React.Component {
  logout(){
    //退出功能
    // localStorage.removeItem('name')
    localStorage.removeItem('token')
    this.props.history.push('./login')
  }
  render() {
    console.log(this.props,123);
    // console.log(this.props.location.search,222);
    // let str = this.props.location.search;
    // let { id } = localParam(str).search;
    let name = localStorage.getItem('name')
    return (
      <div>
        <h2>个人中心</h2>
        <p>{name},你好</p>
        <br></br>
        <button onClick={this.logout.bind(this)}>退出</button>
      </div>
    )
  }
}

export default Userpage;

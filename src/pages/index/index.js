import React from "react";
//6.到组件内，接收store的数据
import { connect } from "react-redux";

class Indexpage extends React.Component {
  // constructor(props){
  //   super()
  //   this.state = {
  //     //8.在react组件内部，调用redux里面的数据。
  //     //组件局部内的数据。类似vue的data
  //     // num:props.state.counter.count
  //   }
  //   console.log(props,999);
  // }
  render() {
    // console.log(this.props,888);
    return (
      <React.Fragment>
        <h2>首页内容</h2>
        {/* <p>数量：{this.state.num}</p> */}
        <button>-</button>
        <button>+</button>
      </React.Fragment>
    )
  }
}

export default Indexpage
// export default connect((state) => {
//   return {
//     state: state
//   }
// })(Indexpage);

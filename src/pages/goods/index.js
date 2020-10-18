import React from "react";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      navlist: [
        {
          tid: 1,
          title: "水果分类",
          data: [
            {
              gid: 1,
              name: "西瓜",
            },
            {
              gid: 2,
              name: "哈密瓜",
            },
          ],
        },
        {
          tid: 2,
          title: "海鲜分类",
          data: [
            {
              gid: 1,
              name: "皮皮虾",
            },
            {
              gid: 2,
              name: "小龙虾",
            },
          ],
        },
      ],
    };
  }

  pushpage(index){
    console.log(this.props,999);
    this.props.history.replace({
      pathname:'/goods/type',
      search:'?id=1&title=西瓜' + index,
      // query:{
      //   id:1,
      //   title:'西瓜'
      // }
    })
  }
  pushpage2(index){
    console.log(this.props,999);
    this.props.history.replace({
      pathname:'/goods/type',
      search:'?id=1&title=海鲜' + index,
      // query:{
      //   id:1,
      //   title:'西瓜'
      // }
    })
  }
  // pushpage3(index){
  //   console.log(this.props,999);
  //   this.props.history.replace({
  //     pathname:'/goods/type',
  //     search:'?itemlist=' + JSON.stringify(index)
  //   })
  // }

  render() {
    return (
      <div>
        <h1>二级菜单：商品内容</h1>
        <button onClick={this.props.history.goBack.bind(this)}>后退</button>
        <ul>
          <li onClick={this.pushpage.bind(this,1)}>水果</li>
          <li onClick={this.pushpage2.bind(this,2)}>海鲜</li>
          {/* {this.state.navlist.map((item)=>{
            return(
              <li key={item.tid} onClick={this.pushpage2.bind(this,item)}>
                {item.title}
              </li>
            )
          })} */}
        </ul>
      </div>
    )
  }
}

export default News;

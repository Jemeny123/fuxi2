import React from "react";
import locaParam from '../../untils/localParam'

class goodsDetail extends React.Component {
  render() {
    console.log(this.props,123);
    let str = this.props.location.search
    let {id,title} = locaParam(str).search
    //获取二级列表的数据
    // console.log(str,111);
    // let {itemlist} = locaParam(str).search
    // console.log(itemlist);
    // let arr = {}
    // if (itemlist) {
    //   arr = JSON.parse(itemlist)
    // }
    // console.log(arr);

    return (
      <div>
        <h2>三级菜单：商品详情</h2>
        <button 
          onClick={()=>{
            this.props.history.replace({
              pathname:'/goods'
            })
          }}
        >
          后退
        </button>
        <p>
          商品：{id}-{decodeURIComponent(title)}
        </p>
        {/* {arr.data.map((item)=>{
          return(
            <p key={item.gid}>
              商品：{item.gid}-{decodeURIComponent(item.name)}
            </p>
          )
        })} */}
      </div>
    )
  }
}

export default goodsDetail;

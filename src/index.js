import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//1.安装redux和react-redux插件
//2.引入redux和react-redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//3.准备数据state和方法 action
let defaultstate = {count:10}//公共的数据
function counterReducer(state = defaultstate,action){
  console.log(action,111);
}

//4.把数据和方法放到redux的仓库里面:存入仓库
// let store = createStore(
//   //redux的模块化，类似vuex里面的modules
//   combineReducers({
//     counter: counterReducer,
//   })
// );

ReactDOM.render(
  <React.StrictMode>
    {/* 5.把仓库的数据和方法注入到react组件里面，我们就可以去到组件里面接收数据了。 */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

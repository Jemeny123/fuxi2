import React ,{lazy,Suspense}from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AuthRoute from '../permission'
// import Indexpage from '../pages/index'
// import Newspage from '../pages/news'
// import Goodspage from '../pages/goods'
// import GoodsDetail from '../pages/goods/detail'

//路由懒加载的实现：异步载入资源
// const NavBar = lazy(() => import('../components/NavBar'))
const Indexpage = lazy(() => import('../pages/index'))
const Newspage = lazy(() => import('../pages/news'))
const Goodspage = lazy(() => import('../pages/goods'))
const GoodsDetail = lazy(() => import('../pages/goods/detail'))
const LoginPage = lazy(() => import('../pages/login'))
const UsersPage = lazy(() => import('../pages/users'))

class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          {/* 导航条 */}
          <NavBar></NavBar>
          <React.Fragment>
            <Suspense fallback={<div>loading</div>}>
              <Route path='/home' component={Indexpage}></Route>
              <Route
                path='/'
                exact
                render={() => <Redirect to='/home'></Redirect>}
              ></Route>
              <Route path='/news' component={Newspage}></Route>
              <Route path='/goods' component={Goodspage}></Route>
              <Route path='/goods/type' component={GoodsDetail}></Route>
              {/* 登录路由 */}
              <Route path='/login' component={LoginPage}></Route>
              {/* 个人中心 */}
              <AuthRoute path='/users' component={UsersPage}></AuthRoute>
            </Suspense>
          </React.Fragment>
        </Router>
      </React.Fragment>
    )
  }
}

export default RouterComponent
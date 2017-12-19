
// 关于路由的组件
import React,{Component} from 'react'
// 使用 ES6 的转译器，如 babel
import { Router, Route, Link, IndexRoute, browserHistory , hashHistory} from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Movie from '../components/Movie'
import AboutMe from '../components/AboutMe'
import MovieList from '../components/MovieList'


export default class Routers extends Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home}/>
                    <Route path="movie" component={Movie}>
                        <IndexRoute component={MovieList}/>
                        <Route path="/movielist/:movieType" component={MovieList}/>
                    </Route>
                    <Route path="aboutme" component={AboutMe}/>
                </Route>
            </Router>
        )
    }
}
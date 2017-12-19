import React,{Component} from 'react'

import {Link} from 'react-router'
import '../styles/root.css'
import '../styles/app.css'

export default class App extends Component {
    render () {
        return (
            <div className="app_container">
                <div className="app_top">
                    <Link to="/home">首页</Link>
                    <Link to="/movie">电影列表</Link>
                    <Link to="/aboutme">联系我们</Link>
                </div>
                <div className="app_middle">
                    {this.props.children}
                </div>
                <div className="app_bottom">
                    @老梅所有
                </div>
            </div>
        )
    }
}
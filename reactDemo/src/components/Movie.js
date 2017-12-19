import React,{Component} from 'react'

import {Link} from 'react-router'

import '../styles/moive.css'

export default class Movie extends Component {
    render () {
        return (
            <div className="movie_container">
                <div className="movie_left">
                    <Link to="/movielist/in_theaters">即将上映</Link>
                    <Link to="/movielist/coming_soon">正在热映</Link>
                    <Link to="/movielist/top250">top250</Link>
                </div>
                <div className="movie_right">
                    <div className="movie_top">
                        <input type="text"/>
                        <button>搜索</button>
                    </div>
                    <div className="movie_bottom">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
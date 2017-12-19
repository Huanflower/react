import React,{Component} from 'react'

import {browserHistory} from 'react-router'

export default class Home extends Component {

    // static contextTypes = {
    //     router:React.PropTypes.object
    // }

    // componentDidMount () {
    //     // 3秒延迟
    //     const _this = this
    //     setTimeout(function () {
                // 页面跳转
    //         // browserHistory.push('/aboutme')
    //         _this.context.router.push('/aboutme')
    //     },3000)
    // }

    render () {
        return (
            <div>
                Home
            </div>
        )
    }
}
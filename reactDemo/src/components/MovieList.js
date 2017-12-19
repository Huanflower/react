import React,{Component} from 'react'

import '../styles/movielist.css'
import { setTimeout } from 'timers';
import MovieService from '../service/MovieService'


export default class MovieList extends Component {

    constructor (props) {
        super (props)
        this.state = {
            isLoading:true,
            movieListData:[],
            message:{
                movieType:'in_theaters',
                start:0,
                count:10
            }
        }
    }

    componentDidMount () {
        // 本地写死的电影类型
        this.fetch(this.state.message.movieType)
    }

    componentWillReceiveProps (nextProps) {
        // console.log(nextProps)
       console.log(nextProps.params.movieType)
       // top250
        this.fetch(nextProps.params.movieType)
    }

    // 自定义一个请求的方法
    fetch (movieType) {

        // this.state.message.movieType = movieType

        // 深拷贝一个对象出来 
        // 深拷贝是拷贝对象实体
        // 浅拷贝是拷贝指针
        var newMessage = Object.assign({},this.state.message)

        newMessage.movieType = movieType
    
        var messageStr = JSON.stringify(newMessage)    

       // 进行请求的方法
       const promise = MovieService.getMovieListData(messageStr)
       const _this = this
       promise.then(
           function (data) {
                // 成功的回调
                _this.setState({
                    movieListData:data.subjects,
                    isLoading:false
                })
           },
           function (err) {
            // 失败的回调
                console.log('movielist页面请求出错')
           }
       )
    }

    // 监听div区域的滑动
    componentDidUpdate () {
        this.refs.scrollViewDiv.onscroll = function (e) {
            // console.log(e)
            if (e.target.scrollHeight == e.target.scrollTop + e.target.offsetHeight) {
                console.log('到底啦')
            }
        }
    }



    rendering=(item)=>{
        return (
            <div key={item.id} className="movielist_item">
                <div className="imgPic">
                   <img src="../images/07.jpg" alt=""/>
                </div>
                <div>
                    <h3>{item.title}</h3>
                    <span>{item.year}</span>
                </div>
            </div>
        )
    }


    renderFunc=()=>{
        return (
            <div ref="scrollViewDiv" className="movielist_container">
               {this.state.movieListData.map(this.rendering)}
            </div>
        )
    }


    render () {

        if (this.state.isLoading) {
            // 如果进到这里,代表第一次进入这个组件,所以我们添加一个蒙版层
            return (
                <div>
                    正在请求网络,请稍等....
                </div>
            )
        }
        return this.renderFunc()
    }
}
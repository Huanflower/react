// document.getElementById('app').innerHTML = "hello react"


// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// import Hello from './Hello'

// let obj = {}
// obj.x="abc"
// obj.y="123"

// import Life from './Life'
// import ClickEvent from './ClickEvent'
// import FindDom from './FindDom.js'
// import Combination from './Combination.jsx'
// import PropsCheck from './PropsCheck'
// import Contxt from './Contxt'
import Routers from './Routers'

ReactDOM.render(
    <div>
    
       <Routers></Routers>

    </div>,
    document.getElementById('app')
)

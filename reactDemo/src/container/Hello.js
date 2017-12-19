
import React, {Component} from 'react'

import './hello.css'
import './hello.scss'



const element = <h1>Hello, world!</h1>;




export default class Hello extends Component {

    render() {
        return (
            <div>
                <h1>hello  欢迎 react</h1>

                <element></element>
            </div>
        )
    }
}

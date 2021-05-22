import React, { Component } from 'react'
import "../styles/header.css"


export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>click the caret to filter by first name or use the search box to narrow your results.
                </p>
            </div>
        )
    }
}

export default Header

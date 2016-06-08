'use strict'

import React from 'react'

import trim from 'trim-character'

import { Link } from 'react-router'

export default class Layout extends React.Component {

    render() {

        // react-router params
        let pathSp = trim(this.props.location.pathname, '/').split('/')
        let currentPath = pathSp.pop()
        let params = this.props.params

        return (
            <div>
                <div className="app-sidebar">
                    {
                        this.props.routes[0].childRoutes.map((route, i)=> {
                            let {path} = route
                            if (path) {
                                return <div key={i}>
                                    <Link to={path}>
                                        {path}
                                    </Link>
                                </div>
                            }
                        })
                    }
                </div>
                <div className="app-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }

}
/**
 * react router
 * history无刷
 */

'use strict'

import React from 'react'

// --------- react
import { Route, Router, Redirect, IndexRoute, IndexRedirect, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

// --------- module
import Layout from './Layout'
import A from './A'
import B from './B'

// custorm history
const browserHistory = useRouterHistory(createHistory)({
    basename: '/page'
})

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="a"/>
            <Route path="a" component={A}/>
            <Route path="b" component={B}/>
        </Route>
        <Route path="*" component={A}/>
    </Router>
)
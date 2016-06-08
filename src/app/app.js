'use strict'

import { render } from 'react-dom'
import routes from './router'

import 'style/app.less'

render(routes, document.getElementById('app'))
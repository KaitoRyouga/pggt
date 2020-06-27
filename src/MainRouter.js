import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'

const MainRouter = () => {
    return (<div>
      <Switch>
        <Route exact path="/" component={App}/>
      </Switch>
    </div>)
}

export default MainRouter
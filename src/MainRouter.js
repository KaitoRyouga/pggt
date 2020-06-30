import React from 'react'
import {Route, Switch} from 'react-router-dom'
import home from './components/home'

const MainRouter = () => {
    return (<div>
      <Switch>
        <Route exact path="/" component={home}/>
      </Switch>
    </div>)
}

export default MainRouter

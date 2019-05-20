import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import RGB from './RGB'
import CustomerList from './customers/List'
import InvoiceList from './invoices/List'
import CreateCustomer from './customers/Create'

export function Home({ authenticated }) {
  if (!authenticated) {
    return <Redirect to={{ pathname: '/login' }} />
  }

  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/" component={RGB} />
        <Route path="/customers/new" component={CreateCustomer} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/invoices" component={InvoiceList} />
        <Route children={({ staticContext }) => {
          if (staticContext) {
            staticContext.status = 404
          }

          return <h1>Sorry, can't find that!</h1>
        }}/>
      </Switch>
    </div>
  )
}

export default connect(
  state => ({
    authenticated: !!state.session.user
  })
)(Home)

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function tabulate(name, fetch) {
  return Table => {
    class Tabulated extends Component {
      componentDidMount() {
        const { stale, fetch } = this.props

        if (stale) {
          fetch()
        }
      }

      componentWillReceiveProps(nextProps) {
        const { stale, fetch } = nextProps

        if (stale) {
          fetch()
        }
      }

      render() {
        return <Table results={this.props.results} />
      }
    }

    function select(state) {
      return state[name]
    }

    function actionSelect(dispatch, ownProps) {
      return {
        fetch: () => dispatch(fetch(ownProps.page, ownProps.pageSize))
      }
    }

    return connect(select)(connect(
      undefined,
      actionSelect
    )(Tabulated))
  }
}


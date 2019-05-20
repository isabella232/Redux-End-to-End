import api from '../api'
import actions from '../shared/pagination/actions'

const { resultsUpdated } = actions('invoices')

export function list(page = 1, pageSize = 15) {
  return dispatch => api.invoices.list(page, pageSize).then(resp =>
    dispatch(resultsUpdated(resp.data))
  )
}

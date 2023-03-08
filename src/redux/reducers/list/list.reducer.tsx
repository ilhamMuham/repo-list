import { GET_DETAIL } from '../../actions'
const initialState = {
    dataDetail: [],
}

const listReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
  case GET_DETAIL: {
    return {
      ...state,
      dataDetail : action.payload,
      dataCount : action.payload.length
    }}
  default: {
    return state
  }
  }
}

export default listReducer

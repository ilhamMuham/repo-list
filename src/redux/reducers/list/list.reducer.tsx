import { GET_LIST } from '../../actions'
const initialState = {
    dataList: [],
}

const listReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
  case GET_LIST: {
    return {
      ...state,
      dataList : action.payload,
      dataCount : action.payload.length
    }}
  default: {
    return state
  }
  }
}

export default listReducer

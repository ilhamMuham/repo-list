import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Detail = () => {
    const { dataDetail } = useSelector((state: any) => state.listReducer)
    console.log('dataDetail : ',dataDetail)
    return (
        <div>
            
        </div>
    )
}

export default Detail
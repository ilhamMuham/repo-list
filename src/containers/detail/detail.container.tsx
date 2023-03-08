import React from 'react'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

const Detail = () => {
    const { dataDetail } = useSelector((state: any) => state.listReducer)
    return (
        <div style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            width: 'max-content',
            height: '120%',
            padding : '10px',
            margin: '20px'
        }}>
            <div>Full Name : {dataDetail?.full_name}</div>
            <div>owner : {dataDetail.owner?.login}</div>
            <div>visibility : {dataDetail?.visibility}</div>
            <div>Size : {dataDetail?.size}</div>
            <div>URL : <Link href={dataDetail.clone_url ? dataDetail.clone_url : '/home'}>{dataDetail?.clone_url}</Link></div>
            
            
        </div>
    )
}

export default Detail
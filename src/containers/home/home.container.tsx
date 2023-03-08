import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { GET_LIST } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import {
    HomeAPI
} from '../../api'

const Home = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState<any[]>([])
    const { dataList } = useSelector((state: any) => state.listReducer)

    console.log('dataList : ',dataList)

    const alert = async () => {
      
      const { value : username } = await Swal.fire({
        title: 'Enter your github username',
        input: 'text',
        inputLabel: 'Your github username',
        inputValue: '',
        showCancelButton: true,
      })
      try {
          const data = await HomeAPI.GetRepo(username)
          if (data.response && data.response.status == 404) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'username not found',
            })
            setData([])
          } else {
            await dispatch({
                type: GET_LIST,
                payload: data
            })
            setData(data)
          }
      } catch (err) {
        return err
      }
    }
    useEffect(()=> {
        alert()
    },[])

    return (
        <div>

            {
                data.map((e,i)=> {
                    return (
                        <div key={i}>{e.full_name}</div>
                    )
                })
            }
            
        </div>
    )
}
export default Home
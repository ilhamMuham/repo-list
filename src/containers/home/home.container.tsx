import Link from 'next/link';
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { GET_DETAIL } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import {
    HomeAPI
} from '../../api'

const Home = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState<any[]>([])

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
            setData(data)
          }
      } catch (err) {
        return err
      }
    }
    
    const clickDetail = async(e : any) => {
         await dispatch({
            type: GET_DETAIL,
            payload: e
        })
    }

    useEffect(()=> {
        alert()
    },[])

    return (
        <div>
            {
                data.map((e,i)=> {
                    return (
                        <div key={i} style={{
                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                            width: '30%',
                            height: '120%',
                            padding : '10px',
                            margin: '20px'
                        }}>
                            <Link href="/detail" style={{ cursor: 'pointer'}} onClick={()=>clickDetail(e)} key={i}>{e.name}</Link>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default Home
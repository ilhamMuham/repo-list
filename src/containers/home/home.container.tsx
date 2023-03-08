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
    const [login, setLogin] = useState<boolean>(false)
    const [logout, setLogout] = useState<boolean>(false)

    const alert = async () => {
        setLogin(false)
        setLogout(false)
      
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
            setLogin(true)
          } else {
            setData(data)
            setLogout(true)
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
            {login && <button onClick={alert}>Log In</button>}
            {logout && <button onClick={ async ()=> {
                await dispatch({
                    type: GET_DETAIL,
                    payload: []
                })
                setData([])
                alert()
            }}>Log Out</button>}
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
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import {
    HomeAPI
} from '../../api'

const Home = () => {
    const [data, setData] = useState<any[]>([])

    const alert = async () => {
      
      const { value : username } = await Swal.fire({
        title: 'Enter your github username',
        input: 'text',
        inputLabel: 'Your github username',
        inputValue: '',
        showCancelButton: true,
      })
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
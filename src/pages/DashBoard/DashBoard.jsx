import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import DashCard from './DashCard';

const DashBoard = () => {    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

      const sendData = () => {
        console.log('clicek');
        try {
          axios.post('http://localhost:3000/api/notes',{title, description})
        .then(res => {
          console.log('data gonderildi');
        })
        } catch (error) {
          console.log(error);
        }
      }
      const [data, setData] = useState([]);

      const getData = () => {
          axios.get('https://664b267fa300e8795d44672e.mockapi.io/basket')
          .then((res) => {
              setData(res.data)
          })
      }
  
      useEffect(() => {
          getData()
      }, [])
  
      const removeItem = (id) => {
          axios.delete(`https://664b267fa300e8795d44672e.mockapi.io/basket/${id}`)
          setTimeout(() => {
              getData()
          }, 400);
      }


  return (
    <div style={{width:'100%', display:'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column', gap:"27px"}}>
    
       <input
         id="title"
         onChange={(e) => setTitle(e.target.value)}
         value={title}
       />
       <input
         id="desciption"
         onChange={(e) => setDescription(e.target.value)}
         value={description}
       />
      <button onClick={sendData} style={{width:'20%' , height:'25px' , fontSize:'13px' , backgroundColor:'black', color:'white', borderRadius:'10px', border:'none'}}>Submit</button>
      {
        data&&data.map(item => <DashCard item={item} remove={() => removeItem(item.id)} />)
      }
  </div>
  )
}

export default DashBoard












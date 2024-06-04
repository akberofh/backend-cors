import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BasketCard from '../../components/Cardes/BasketCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';

const Basket = () => {

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
    <div style={{width:'100%', display:'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column', gap:"20px"}}>
    <Header/>
    <div style={{width:'80%' , display:'flex' , alignItems:'center' , justifyContent:'space-between', flexWrap:'wrap'}}>
      {data && data.map(item => <BasketCard item={item} remove={() => removeItem(item.id)}/>)}
    </div>
    <Footer/>
  </div>
  )
}

export default Basket

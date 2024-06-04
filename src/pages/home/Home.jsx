import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Cardes/ProductCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header'
import Seconetwo from '../../components/Seconetwo/Seconetwo';
import Sectionfive from '../../components/Sectionfive/Sectionfive';
import Sectionone from '../../components/Sectionone/Sectionone';
import Sectionthree from '../../components/Sectionthree/Sectionthree';

const Home = () => {
      

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://dummyjson.com/products')
        .then((res) => {
            setData(res.data.products)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const goBasket = (product) => {
        axios.post('https://664b267fa300e8795d44672e.mockapi.io/basket', product)
    }


    const goWishlist = async (product) => {
       await axios.get('https://664b267fa300e8795d44672e.mockapi.io/wishlist')
        .then((res) => {
            const wish = res.data
            const prover = wish.find(item => item.id === product.id)
            if (prover) {
                alert('artiq movcuddur!!!')
            }else(
                axios.post('https://664b267fa300e8795d44672e.mockapi.io/wishlist', product)
            )
        })
    }


  return (
    <div style={{width:'100%', display:'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column', gap:"20px"}}>
      <Header/>
      <Sectionone/>
      <Seconetwo/>
      <Sectionthree/>
      <div style={{width:'80%' , display:'flex' , alignItems:'center' , justifyContent:'space-between', flexWrap:'wrap'}}>
        {data && data.map(item => <ProductCard item={item} goBasket={() => goBasket(item)} goWishlist={() => goWishlist(item)}/>)}
      </div>
      <Sectionfive/>
      <Footer/>
    </div>
  )
}

export default Home

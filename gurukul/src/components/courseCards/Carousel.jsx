import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import axios from "axios"


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const [cardsData,setCardsData] = useState([]);

  const getData=async()=>{
    try {
      let response = await axios.get("http://localhost:8000/api/course/getdata")
      if(response.status===200){
        setCardsData(response.data);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  

  // const cardsData = [
  //   { id:1, price: "349", currency: "USD", videoId: "FH59Huk2n0M?si=s2CIRw7ZZfoRQtoN", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
  //   { id:2, price: "249", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
  //   { id:3, price: "149", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
  //   { id:4, price: "99", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" }
  // ];

  return (
    <Slider {...settings}>
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </Slider>
  );
};

export default Carousel;

// import './Home.css'
import appartments from "@/data/appartmentsData";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import likedwishlist from "../../public/Images/likedwishlist.svg"
import { useRouter } from "next/router";  
export default function Home() {
  const [restaurants, setRestaurants] = useState(appartments);
  const router = useRouter();
  const handleNavigate = (id) => {
    router.push(`/appartments/${id}`);
  };
  const toggleWishlist = (id,event) => {
    event.stopPropagation(); 
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id
          ? { ...restaurant, whislist: !restaurant.whislist } // Toggle wishlist value
          : restaurant
      )
    );
  };

  const getRatingImage = (rating) => {
    if (rating < 3) {
      return "/Images/redstar.png"; 
    } else if (rating >= 3 && rating < 5) {
      return "/Images/orangestar.png"; 
    } else {
      return "/Images/greenstar.png"; 
    }
  };

  const getRating = (rating) => {
    if (rating < 3) {
      return 'red-text'; 
    } else if (rating >= 3 && rating < 5) {
      return "orange-text"; 
    } else {
      return "green-text"; 
    }
  };

  return (
    <>
      <div className="page-Layout">
        <div className="items-conatiner">
          {restaurants?.map((item, index) => (
            <div key={index} className="card-conatiner">
              <div className="card-image" onClick={()=>handleNavigate(item.id)}>
                {item?.image?.length > 1 ? (
                  <Swiper
                    spaceBetween={10} 
                    slidesPerView={1} 
                    loop={false} 
                    pagination={{ clickable: true }}
                    grabCursor={true}
                  >
                    {item.image.map((image, imageIndex) => (
                      <SwiperSlide key={imageIndex}>
                        <img
                          src={image?.url}
                          alt={`Image ${imageIndex}`}
                          className="card-image"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={item?.image?.[0]?.url}
                    alt="Single Image"
                    className="card-image"
                  />
                )}
                <div className="mostliked-text">
                  <span>Most Liked</span>
                </div>
                <div className="whishlist-heart" onClick={(event) => toggleWishlist(item.id,event)}>
                  {item?.whislist ? (
                    <Image src={likedwishlist} width={20} height={20} />
                  ) : (
                    <Image src={require("../../public/Images/wishlist_heart.png")} width={20} height={20} />
                  )}
                </div>
              </div>
              <div className="card-rating-view">
                <div className="viewconatiner">
                  <Image src={require("../../public/Images/Show.png")} width={9} height={9} />
                  <span>{item?.views}</span>
                </div>
                <div className="ratingconatiner">
                  <img
                    src={getRatingImage(item.rating)} // Get the correct star image
                    alt="Rating"
                    width={9}
                    height={9}
                  />
                  <span className={`rating-text ${getRating(item.rating)}`}>{item.rating}</span>
                </div>
              </div>
              <div className="card-name">
                <span>{item.name}</span>
              </div>
              <div className="card-date">
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

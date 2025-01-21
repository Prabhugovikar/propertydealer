import { useRouter } from "next/router";  
import appartments from "@/data/appartmentsData";
// import './appartmentDetail.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
const AppartmentDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const appartmentdetail = appartments.find((item) => item.id === parseInt(id));

    if (!appartmentdetail) {
        return <div>Restaurant not found</div>;
    }

    return (
        <div className="center-wrapper">
            <div className="appartmentdetail-conatiner">
                <div className="card-imageconatiner2">
                    {appartmentdetail?.image?.length > 1 ? (
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={false}
                            pagination={{ clickable: true }}
                            grabCursor={true}
                        >
                            {appartmentdetail.image.map((image, imageIndex) => (
                                <SwiperSlide key={imageIndex}>
                                    <img
                                        src={image?.url}
                                        alt={`Image ${imageIndex}`}
                                        className="card-image2"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <img
                            src={appartmentdetail?.image?.[0]?.url}
                            alt="Single Image"
                            className="card-image2"
                        />
                    )}
                    <div className="mostliked-text-detail">
                        <span>Most Liked</span>
                    </div>
                </div>
                <div className="appartmentdetail-body">
                    <div className="appartmentdetail-body-left">
                        <span>{appartmentdetail.name}</span>
                        <div className="appartmentdetail-location">
                            <Image src={require("../../../public/Images/locationIcon.png")} width={13} height={16} />
                            <span>{appartmentdetail.location}</span>
                        </div>
                    </div>
                    <div className="appartmentdetail-body-right">
                        <span>{appartmentdetail.Amount}</span>
                        <span>EMI Avaialabe</span>
                    </div>
                </div>

                <div className="appartmentdetail-location-section">
                    <span>Location</span>
                </div>

                <div className="appartmentdetail-location-conatiner">
                    <div className="appartmentdetail-location-left">
                        <Image src={require("../../../public/Images/locationMark.png")} width={53} height={50} />
                        <span>{appartmentdetail.fulladdress}</span>
                    </div>
                </div>

                <div className="appartmentdetail-map">
                    <Image src={require("../../../public/Images/map.png")} width={350} height={250} />
                    <span>View on Map</span>
                </div>

                <div className="appartmentdetail-footer">
                    <div className="appartmentdetail-fotterbutton">
                        <span>2 Hospital</span>
                    </div>
                    <div className="appartmentdetail-fotterbutton">
                        <span>4 Gas stations</span>
                    </div>
                    <div className="appartmentdetail-fotterbutton">
                        <span>2 Schools</span>
                    </div>
                </div>

                <div className="Property-Ammenties">
                    <span>Property Amenities</span>
                </div>

                <div className="house-appartment">
                    <div className="button">
                        House
                    </div>
                    <div className="button2">
                        Apartment
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AppartmentDetail;

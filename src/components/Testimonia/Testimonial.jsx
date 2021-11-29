import React from "react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageSlider from "./ImageSlider";
const Testimonial = () => {
  // let settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   cssEase: "linear",
  // };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='container-fluid main '>
    <ImageSlider/>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1589697547048-962940abc062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="rr"
              />
            </div>
            <ul className="social-icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
              </li>
            </ul>
            <div className="details">
              <h2>
                madhusmita <span className="job-title">frontend developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="rr"
              />
            </div>
            <ul className="social-icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
              </li>
            </ul>
            <div className="details">
              <h2>
                madhusmita <span className="job-title">frontend developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1613852526836-ca1cacebaf6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="rr"
              />
            </div>
            <ul className="social-icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
              </li>
            </ul>
            <div className="details">
              <h2>
                madhusmita <span className="job-title">frontend developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1604822064782-86b012c1a8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="rr"
              />
            </div>
            <ul className="social-icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
              </li>
            </ul>
            <div className="details">
              <h2>
                madhusmita <span className="job-title">frontend developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
};
//...is called spread operater .
export default Testimonial;

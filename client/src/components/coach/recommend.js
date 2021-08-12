import React, { Fragment, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recommend.css";
import Slider from "react-slick";
import EmptyPage from "../page_empty/EmptyPage";


function Recommend() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
      <Fragment>
    <EmptyPage />
    <div className="recommend">
        
    <div className="container_recommend">
      <h6 className="text-muted">Coach Suggestions</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card2">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
                <div className="card-body">
                  <h5 className="card_title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                  Relationship Coach 
                  </small>
                  <br />
                  <a className="topage" href="https://www.adamkaufmantherapy.com/">
                    <button className="btn btn-sm follow btn-primary">
                    About me
                    </button>
                      </a>
                    
                      <button style={{color:"red"}}className="btn btn-sm follow btn-primary">
                    Choose me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>

    <div className="container_recommend">
      <h6 className="text-muted">Stylist Suggestions</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card2">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
                <div className="card-body">
                  <h5 className="card_title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                    Professional Stylist
                  </small>
                  <br />
                  <a className="topage" href="https://www.qthestylist.com/?utm_source=SFist&utm_medium=list&utm_campaign=tracker">
                    <button className="btn btn-sm follow btn-primary">
                    About me
                    </button>
                      </a>
                    
                      <button style={{color:"red"}}className="btn btn-sm follow btn-primary">
                    Choose me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>

    <div className="container_recommend">
      <h6 className="text-muted">Photographer Suggestions</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card2">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
                <div className="card-body">
                  <h5 className="card_title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                    Portrait&nbsp;Photographer
                  </small>
                  <br />
                  

                  <a className="topage" href="https://www.agirlandacameraphotography.com/">
                    <button className="btn btn-sm follow btn-primary">
                    About me
                    </button>
                      </a>
                    
                      <button style={{color:"red"}}className="btn btn-sm follow btn-primary">
                    Choose me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>

    
    </div>
    </Fragment>
  );
}

export default Recommend;
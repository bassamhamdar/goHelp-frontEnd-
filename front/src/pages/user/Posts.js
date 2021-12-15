import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import slide1 from "../../image/icons/cause-slider-1.jpg";
import slide2 from "../../image/icons/cause-slider-2.jpg";
import photo from "../../image/ex.jpg";
import "./slider.css";
export const Posts = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={slide1} alt="img" onDragStart={handleDragStart} />,
    <img src={slide2} alt="img" onDragStart={handleDragStart} />,
  ];
  return (
    <div>
      <div
        className="slider"
        style={{ height: "400px", marginTop: "4rem 2rem" }}
      >
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls={true}
          autoPlay={true}
          autoPlayInterval={2000}
          animationType={"fadeout"}
          disableDotsControls={true}
          autoHeight="true"
        />
      </div>
      <div className="main-wrapper">
        <section className="blog-list px-3 py-5 p-md-5">
          <div className="container">
            <div className="item mb-5">
              <div className="media">
                <img
                  className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={photo}
                  alt="ma"
                  //   style={{ float: "left" }}
                />

                <div className="media-body">
                  <h3 className="title mb-1">
                    <a href="blog-post.html">
                      Why Every Developer Should Have A Blog
                    </a>
                  </h3>
                  <div className="meta mb-1">
                    <span className="date">Published 2 days ago</span>
                    <span className="time">5 min read</span>
                    <span className="comment">
                      <a href="#">8 comments</a>
                    </span>
                  </div>
                  <div className="intro">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className="more-link" href="blog-post.html">
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className="item mb-5">
              <div className="media">
                <div>
                  <img
                    className="mr-3 img-fluid post-thumb d-none d-md-flex"
                    src={photo}
                    alt="pic"
                    style={{ float: "left" }}
                  />
                </div>

                <div className="media-body">
                  <h3 className="title mb-1">
                    <a href="blog-post.html">
                      A Guide to Becoming a Full-Stack Developer
                    </a>
                  </h3>
                  <div className="meta mb-1">
                    <span className="date">Published 3 months ago</span>
                    <span className="time">3 min read</span>
                    <span className="comment">
                      <a href="#">26 comments</a>
                    </span>
                  </div>
                  <div className="intro">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className="more-link" href="blog-post.html">
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

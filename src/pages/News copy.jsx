import React from "react";
import CardProps from "../ReUse/CardProps";
import breakingNews from "../json/breakingNews.json";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";

function News() {

  return (
    <>
      <div id="breaking-news"></div>
      {/* <h1 className="NewsUpdateTitle">News Update from Palawan</h1> */}
      <div className=" contaier-fluid">
        <img className="img-fluid" src="https://t4.ftcdn.net/jpg/02/65/26/83/360_F_265268314_LmykO3vrtzmh3TQbBdnxj9vUczqqJXCU.jpg" alt="resort villas" />
      </div>
      <div className="main-news">
        <div className="forbackground">
          <div className="container">
            <div class="row">
              {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids === 4).map((newsUpdate) => (
                <div class="col-md-8 p-1">
                  <div className="effect-news">
                    <img className="main-pict img-fluid" src={newsUpdate.thumbnailUrl} alt="resort villas" />
                    <div className="mt-2 p-2">
                      <h2>{newsUpdate.title}</h2>
                      <p>{newsUpdate.date}</p>
                      <h6 className="p-2">>{newsUpdate.content}<a className="text-decoration-underline text-primary" href={"https://www.travelbubble.elnidoresorts.com/"}  rel="noopener">see more, </a></h6>
                    </div>
                  </div>
                </div>
              ))}

              {/* Small news */}
              <div class="col-md-4">
                <div class="row">
                  <div className="mb-2 p-0">
                    {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids === 1).map((newsUpdate) => (
                      <div className="sideNews pb-1 mb-3">
                        <img className="img-fluid three-cards m-0" src={newsUpdate.thumbnailUrl}  alt="resort villas" />                       
                        <h5 className="m-2">{newsUpdate.title}</h5>
                        <p className="m-2">{newsUpdate.date}</p>
                        <p className="mb-2"><a className="text-decoration-underline text-primary" href={newsUpdate.link}  rel="noopener"> see more,</a></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container-xxl py-3">
          
            {/* Breaking news */}
            <div class="row">
              <h3>Breaking News</h3>
              {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids === 2).map((newsUpdate) => (
                <CardProps
                  column="effect-news col-md-6 p-1 m-3"
                  title={newsUpdate.title}
                  date={newsUpdate.date}
                  scr={newsUpdate.thumbnailUrl}
                  body={newsUpdate.content}
                  href={newsUpdate.link}
                />
              ))}<br />
            </div>
          </div>
        </div>
        <div className="container-fluid">
            {/* Recent news */}
        <div className="container-xxl">
          <div class="row p-2">
            <h3>Recent News</h3>
            {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids === 3).map((newsUpdate) => (
              <CardProps
                column="effect-news col-sm-6 p-2 pb-2"
                title={newsUpdate.title}
                date={newsUpdate.date}
                scr={newsUpdate.thumbnailUrl}
                body={newsUpdate.content}
                href={newsUpdate.link}
              />
            ))}
              <br /><br />
          </div>
        </div>
        </div>
      </div>
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}


export default News;

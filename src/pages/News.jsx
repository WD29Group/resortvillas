import React from "react";
import CardProps from "../ReUse/CardProps";
import breakingNews from "./NewsAndUpdates/breakingNews.json";

function News() {

  return (
    <>
      {/* main news */}
      <div className=" contaier-fluid">
        <img className="img-fluid" src="https://t4.ftcdn.net/jpg/02/65/26/83/360_F_265268314_LmykO3vrtzmh3TQbBdnxj9vUczqqJXCU.jpg" alt="" />
      </div>
      <div className="main-news mt-5">
        <div className="forbackground pt-5" id="breaking-news">
          <div className="container-xxl">
            <div class="row">
              {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids == 4).map((newsUpdate) => (
                <div class="col-md-8 mb-3 shadow-lg  bg-white  bg-opacity-50 p-0">
                  <div className="effect-news">
                    <img className="main-pict img-fluid" src={newsUpdate.thumbnailUrl} alt="" />
                    <div className="mt-2 p-2">
                      <h2>{newsUpdate.title}</h2>
                      <p>{newsUpdate.date}</p>
                      <h6>{newsUpdate.content}<a className="text-decoration-underline text-primary" href={"https://www.travelbubble.elnidoresorts.com/"} target="_blank">see more, </a></h6>
                    </div>
                  </div>
                </div>
              ))}

              {/* Small news */}
              <div class="col-md-4">
                <div class="row">
                  <div className="mx-2 p-0">
                    {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids == 1).map((newsUpdate) => (
                      <div className="sideNews bg-white  bg-opacity-50  shadow-lg pb-1 mb-3">
                        <img className="img-fluid three-cards m-0" src={newsUpdate.thumbnailUrl} />                       
                        <h5 className="m-2">{newsUpdate.title}</h5>
                        <p className="m-2">{newsUpdate.date}</p>
                        <p className="m-2"><a className="text-decoration-underline text-primary" href={newsUpdate.link} target="_blank"> see more,</a></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="breaking-news">
          <div className="container-xxl py-3">
          
            {/* Breaking news */}
            <div class="row">
              <h3>Breaking News</h3>
              {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids == 2).map((newsUpdate) => (
                <CardProps
                  column="effect-news col-md-6 p-0"
                  title={newsUpdate.title}
                  date={newsUpdate.date}
                  scr={newsUpdate.thumbnailUrl}
                  body={newsUpdate.content}
                  href={newsUpdate.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container-fluid" id="breaking-news">
            {/* Recent news */}
        <div className="container-xxl">
          <div class="row p-2">
            <h3>Recent News</h3>
            {breakingNews.newsUpdates.filter(newsUpdates => newsUpdates.ids == 3).map((newsUpdate) => (
              <CardProps
                column="effect-news  col-lg-4  p-0 pb-1"
                title={newsUpdate.title}
                date={newsUpdate.date}
                scr={newsUpdate.thumbnailUrl}
                body={newsUpdate.content}
                href={newsUpdate.link}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}


export default News;

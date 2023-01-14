import breakingNews from "./NewsAndUpdates/breakingNews.json";


function Services() {
  return (
    <>
     <div className="container-xxl">
        <div className="row">
          {breakingNews.newsUpdates.filter(newsUpdates=>newsUpdates.ids==1).map((newsUpdate) => (
            <div className="col-12 col-md-6 mb-5">
              <div className="recent-news">
                <div className="card">
                  <img src={newsUpdate.thumbnailUrl} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{newsUpdate.title}</h5>
                    <p className="card-text">{newsUpdate.content}</p>
                    <p className="card-text">{newsUpdate.date}</p>
                    <p>
                      Read more{" "}
                      <a
                        className="card-text text-decoration-underline text-primary"
                        href={newsUpdate.link}
                        target="_blank"
                      >
                        see more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container-xxl">
        <div className="row">
          {breakingNews.newsUpdates.map((newsUpdate) => (
            <div className="col-6 col-md-3 mb-5">
              <div className="recent-news">
                <div className="card">
                  <img src={newsUpdate.thumbnailUrl} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{newsUpdate.title}</h5>
                    <p className="card-text">{newsUpdate.content}</p>
                    <p className="card-text">{newsUpdate.date}</p>
                    <p>
                      Read more{" "}
                      <a
                        className="card-text text-decoration-underline text-primary"
                        href={newsUpdate.link}
                        target="_blank"
                      >
                        see more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="container-xxl">
        
      </div>
      </div>
    </>
  );
}

export default Services;

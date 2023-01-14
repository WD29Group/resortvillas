
function CardProps(props) {
  return (
    <>
    
        <div className={props.column}>
          <div className="m-1 p-0  bg-white  bg-opacity-50 shadow-lg" style={{ height: '33rem' }}>
            <img className="recent-cards img-fluid" src={props.scr} alt="" />
            <div className="p-2">
              <h5 className="mt-1 ">{props.title}</h5>
              <p className="col-md-12 disabled">{props.date}</p>
              <p className="col-md-12">{props.body}</p>
              <p className="col-md-12">Read more<a className="text-decoration-underline text-primary " href={props.href} target="_blank">Click me</a></p>
            </div>
          </div>
        </div>
   
    </>
  );
}
export default CardProps;
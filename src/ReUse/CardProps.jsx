
function CardProps(props) {
  return (
    <>
    
        <div className={props.column}>
          <div className="m-1 p-0  bg-white  bg-opacity-50 shadow-lg" style={{ height: '28rem' }}>
            <img className="recent-cards img-fluid" src={props.scr} alt="" />
            <div className="p-2">
              <h5 className="mt-1 m-0 ">{props.title}</h5>
              <p className="col-md-12 m-0">{props.date}</p>
              <p className="col-md-12">{props.body} <a className="text-decoration-underline text-primary " href={props.href} target="_blank">see more,</a></p> 
            </div>
          </div>
        </div>
   
    </>
  );
}
export default CardProps;
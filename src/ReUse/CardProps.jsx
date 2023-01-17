
function CardProps(props) {
  return (
    <>
    
        <div className={props.column}>
          <div className="m-2 p-1 shadow-lg" >
            <img className="img-fluid" src={props.scr} alt="resortvillas" />
            <div className="p-2">
              <h5 className="mt-1 m-0 ">{props.title}</h5>
              <p className="col-md-12 m-0">{props.date}</p>
              <p className="col-md-12">{props.body} <a className=" text-primary " href={props.href}  rel="noopener">see more,</a></p> 
            </div>
          </div>
        </div>
   
    </>
  );
}
export default CardProps;
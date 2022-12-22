import React from 'react'
import { Link } from 'react-router-dom'

function GuestReviews(props) {
    return (
        <>
         <li className="guest__item">
            <Link className="guest__item__link" to={props.app}> 
                <figure className="guest__item__pic-wrap" data-category={props.label}>
                    <img className="guest__item__img" src={props.src} alt="Travel"/>
                </figure>
                <div className="guest__item__info">
                   <h5 className="guest__item__text">{props.text}</h5>
                </div>
            </Link>
         </li>
        </>
    );
}

export default GuestReviews;
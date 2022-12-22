import CardItems from './CardItems.jsx';
import './Cards.css';

function Cards() {
  return(
    <div className='cards'>
      <h1>Special Offers & Packages</h1>
      <h2 className="wow fadeInUp" data-wow-delay=".5s">What we offer</h2>
      <article>
					<p>For a taste of luxury, a relaxing getaway in Resort Villas is always something to ponder and look
						forward to. Experience the height of comfort and leisure with our exclusive offers.</p>
				</article>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems 
            img src="/img/1.jpg"
            text="EXPLORE THE HIDDEN REJUVENATING SPA"
            label='Book Now'
            path='Services'
            />
            <CardItems 
            Link to="img/2.png"
            text="LA PRIMA EXCLUSIVE GETAWAY"
            label='Book Now'
            path='Services'
            />
            <CardItems 
            src="img/3.png"
            text="PRENUPTIAL PHOTO SHOOT PACKAGE"
            label='Book Now'
            path='Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
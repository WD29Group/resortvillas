import CardItems from '../CardItems.jsx';

function Cards() {
  return(
    <div className='cards'>
      <h1>Special Offers & Packages</h1>
      <h2 className="wow fadeInUp" data-wow-delay=".5s">What we offer</h2>
      <article>
					<p>For a taste of luxury, a relaxing getaway in Acuatico is always something to ponder and look
						forward to. Experience the height of comfort and leisure with our exclusive offers.</p>
				</article>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import CardItem from './CardItem';

function Cards() {
  return(
    <div className='cards'>
      <h1>Special Offers & Packages</h1>
      <h2 class="wow fadeInUp" data-wow-delay=".5s">What we offer</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
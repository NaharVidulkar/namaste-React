const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, locality, cft, rating, cuisine, image } = resData.info;

  const cuisineNames = cuisine ? cuisine.map((c) => c.name).join(", ") : "N/A";

  return (
    <div className="res_card">
      <div className="res_logo">
        <img className="res_logo" src={image?.url} alt={name} />
      </div>
      <div className="res_contents">
        <h2 className="res_name">{name}</h2>

        <p className="res_address">
          <strong>Address: </strong>
          {locality?.name}
        </p>

        <p className="res_price">
          <strong>Price: </strong>
          {cft?.text}
        </p>

        <p className="res_rating">
          <strong>Rating: </strong>
          {rating?.aggregate_rating} ⭐ / 5 ⭐
        </p>

        <p className="res_cuisines">
          <strong>Cuisines: </strong>
          {cuisineNames}
        </p>

        <div className="res_button_container">
          <button className="buy_button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;

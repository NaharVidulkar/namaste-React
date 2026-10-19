const SpecialRestrauntCard = (props) => {
  return (
    <div className="res_card">
      <img className="res_logo" src={props.image} />

      <h2 className="res_name">{props.name}</h2>

      <p className="res_address">
        <strong>Address : </strong>
        {props.address}
        <br />
      </p>
      <p className="res_price">
        <strong>Kimat : </strong>
        {props.price}
      </p>
      <p className="res_rating">
        <strong>Rating : </strong>
        {props.rating} ⭐ / 5 ⭐
      </p>
      <div className="res_button_container">
        <button className="buy_button">Add to cart</button>
      </div>
    </div>
  );
};

export default SpecialRestrauntCard;

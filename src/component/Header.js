const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Restaurant app logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIbtd87lstVEBM9ab2znL3XKzH2Q_E95kkdfeGuvZGg&s=10"
        />
        <h2>Ziwwgy</h2>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

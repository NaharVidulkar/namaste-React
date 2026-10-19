import ResList from "../utils/mockData";
import Search_bar from "./SearchBar";
import RestaurantCard from "./RestraurantCard";
import SpecialRestrauntCard from "./SpecialRestaurants";

const Body = () => {
  const restaurants = ResList.sections?.SECTION_SEARCH_RESULT || [];

  return (
    <div>
      <div className="search_bar_container">
        <Search_bar />
      </div>
      <div className="restraunt_card_container">
        <h1 className="section_heading">Specials in the locality</h1>
        <div className="special_cards">
          <SpecialRestrauntCard
            name="Latikesh ke chips"
            address="YCCE Campus, anytime anywhere"
            rating="4.9"
            price="free"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5gUntNmIh9dZlOpH0R2svdfdffAW4OnRskJA2IRZ-w&s=10"
          />
          <SpecialRestrauntCard
            name="Sanchit ke Pohe"
            address="Infront of YCCE, Wanadongri, Nagpur"
            rating="4.9"
            price="30rs"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IhikOrz3vXZa0KgwrQ7yk7aP0ASkNFHkKrI-XrXCJQ&s=10"
          />
          <SpecialRestrauntCard
            name="Dhiraj's Ganne ka Juice"
            address="Bansi Nagar jake Dhiraj ko puchoo, Nagpur"
            rating="4.9"
            price="10rs"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2VlJvOP0jtEvmFSXRPSs2pSrSo9jkmtdafv1x6d7hg&s=10"
          />
          <SpecialRestrauntCard
            name="Bhavik's Modak"
            address="Exclusively available at ycce during Ganesh Caturthi"
            rating="4.9"
            price="free"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3yD5EDJHkYpvQM-u3C4QBSovUJCLCXAu-gYSoSTcXw&s=10"
          />
          <SpecialRestrauntCard
            name="Bilal ke veg Biryani"
            address="YCCE Campus, Exclusive jab Bilal bhai laye..."
            rating="4.9"
            price="free"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkPydaltTriPwoWXJFVKXdunfm98TVbWMWNbTjCClQ&s=10"
          />
          <SpecialRestrauntCard
            name="Jetha ji ke Jalebi Fafde"
            address="Gada House, flat no.420, Gokuldham soceity"
            rating="Jetha jii se pucho"
            price="Aukat ke bahar.."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa13Bt3uDUBSQ4wzqXjstmnMTPdGWWAQza6wweH0ZSA&s=10"
          />
        </div>
        <h1 className="section_heading">Restaurants in the locality</h1>

        <div className="restraunt_card">
          {restaurants.map((item) => (
            <RestaurantCard key={item.info.resId} resData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

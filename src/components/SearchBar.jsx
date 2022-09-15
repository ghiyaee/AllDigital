import "../style/searchbar.scss";
const SearchBar = () => {
  return (
    <>
      <div className="searchbar">
        <div className="form">
          <form action="">
            <input
              type="text"
              className="input-search"
              placeholder="Searchbar"
            />
          </form>
        </div>
        <div className="sign-buy">
          <a href="#">Sign Up / Login</a>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

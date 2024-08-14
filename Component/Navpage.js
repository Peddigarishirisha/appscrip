const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-row">
        {/* Flower logo */}
        <div>
          <img src="/logo.png" alt="Flower Logo" className="logo" />
        </div>

        {/* Logo text */}
        <div>
          <h1 className="logo-text">Logo</h1>
        </div>

        {/* Icons */}
        <div className="icons">
          <img src="/search-normal.png" alt="Search Icon" className="icon" />
          <img src="/heart.png" alt="Heart Icon" className="icon" />
          <img src="/shopping-bag.png" alt="Shopping Icon" className="icon" />
          <img src="/profile.png" alt="Profile Icon" className="icon" />
          <h6>ENG</h6>
        </div>
      </div>

      {/* Navigation links */}
      <div className="bottom-row">
        <a href="#" className="nav-link">SHOP</a>
        <a href="#" className="nav-link">SKILLS</a>
        <a href="#" className="nav-link">STORIES</a>
        <a href="#" className="nav-link">ABOUT</a>
        <a href="#" className="nav-link">CONTACT US</a>
      </div>

     
    </nav>
  );
};

export default Navbar;


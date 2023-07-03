import logo from "../../assets/p.logo.png";


const Header = () => {
  return (
    <header className="py-5 w-25">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img width="100" height="100" src={logo} alt="" />
          </a>
          <button className="btn btn-sm text-black me-5">Hire Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

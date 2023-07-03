import logo from "../../assets/logoport.png";


const Header = () => {
  return (
    <header className="py-5 w-25">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <img width="100" height="100" src={logo} alt="" />
          <a href="https://www.linkedin.com/in/joyee-chakraborty-8b5b50229">
          <button className="btn text-white me-5">Hire Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

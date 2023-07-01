import logo from '../../assets/p.logo.png';
import pic from '../../assets/port.2.jpg'


const Header = () => {
    return (
        <header className="py-8 w-20">
          <div className='container mx-auto'>
            <div>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
                <button className='btn btn-sm'>
                    Work with me
                </button>
            </div>
        </div>  
        </header>
    );
};

export default Header;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoDIVINE from '../assets/logoDIVINE.png'
import ShopCart from '../assets/ShopCart.png'
import ProfileTwo from '../assets/ProfileTwo.png'
import Cookies from 'js-cookie';
import swal from 'sweetalert';


export const Navbar = (props) => {
  // const LoggedIn = useUser();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenProfile, setOpenProfile] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserIn, setIsUserIn] = useState(false);

  function signOut() {
    props.setUserLogin(false);
    Cookies.remove('token');
  }

  useEffect(() => {
    const token = Cookies.get('token');
    if(token==undefined){
      console.log("");
    }
    else{
      props.setUserLogin(true);
    }

  }, [props.userLogin]);

  const handleLoginClick = () => {
    console.log("smiokmiscmklkls");
  };
  // const handleCloseSuccessModal = () => {
  //   setShowSuccessModal(false);
  // };

  const handleCart = () => {
   if (!props.userLogin) {               
    swal("You're not signed in!")
     }  
    };

const loginNav = props.userLogin ? (
<div className="relative" >
        <button
          type="button"
          className="flex mr-3 text-sm bg-transparent rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => {
            setOpenProfile(!isOpenProfile);
          }}
        >
          <span className="sr-only">Open user menu</span>
            <img
                className="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt=""
            />
        </button>
        <div
          className={`absolute top-7 right-7 z-50 ${
            isOpenProfile ? "" : "hidden"
          } w-[16rem] my-4 text-base list-none bg-[#5C5C4220] white divide-y divide-[#5C5C4250] rounded-[1rem] shadow dark:bg-gray-700 dark:divide-gray-600`}
          id="user-dropdown"
        >
          <div className="px-4 py-3" >
            <span className="block text-semibold text-[#5C5C42] dark:text-white">
              name
            </span>
            <span className="block text-sm  text-[#5C5C42] truncate dark:text-gray-400">
              email
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-[#5C5C42] hover:bg-[#5C5C4250] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#5C5C42] hover:bg-[#5C5C4250] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white whitespace-nowrap"
                onClick={signOut}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    
  ) : (
    <>
    <div className=" flex flex-row gap-2">
    
    <button type="button" onClick={handleCart} aria-expanded={isUserIn} className='mt-0'><img src={ShopCart} className={`mt-2 w-6 h-6 justify-self-end hover:scale-150`} alt="Shop Cart" /></button>
    <button
      type="button"
      onClick={handleLoginClick}
      className="text-white bg-[#5C5C42] hover:bg-[#FEFAF0] hover:text-[#5C5C42] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      SIGN UP/IN
    </button>
    
</div>


    </>
  )


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-[#FEFAF0] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logoDIVINE} className="w-[12rem] self-center  whitespace-nowrap dark:text-white" alt="Logo" />

        <div className="flex md:order-2">


          {/* burger list */}
          <button
            type="button"
            onClick={handleMenuToggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          className={`justify-between w-full md:flex md:justify-slef-end md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
            }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#FEFAF0] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to='/' class="block py-2 pl-3 pr-4 text-white bg-[#5C5C42] rounded md:bg-transparent md:text-[#5C5C42] md:p-0 md:dark:text-blue-500" aria-current="page">HOME</Link>
            </li>
            <li>
              <Link to='/shopall' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SHOP ALL</Link>
            </li>
            <li>
              <Link to='/aboutus' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</Link>
            </li>
            <li>
              <Link to='/contactus' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT US</Link>
            </li>
            <li className='md:order-last'>

            </li>
            <div className='absolute right-10'>
              {/* <Link to="/shoppingcart">
                            <img src={ShopCart} className="absolute top-2 right-32 w-6 h-6 justify-self-end hover:scale-150" alt="Shop Cart" />
                        </Link>
                        <Link to="/profile">
                            <img src={ProfileTwo} className="absolute top-1 right-52 w-8 h-8 justify-self-end hover:scale-150" alt="Profile" />
                        </Link> */}
              {/* <Link to="/signup">

                <button
                        type="button"
                        // onClick={handleLoginClick}
                        className="text-white bg-[#5C5C42] hover:bg-[#FEFAF0] hover:text-[#5C5C42] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        SIGN UP/IN
                        </button>
                        </Link> */}
              {/* <div className=" flex flex-row gap-4">
                        <Link to="/shoppingcart">
                            <img src={ShopCart} className="absolute top-1 right-12 w-6 h-6 justify-self-end hover:scale-150" alt="Shop Cart" />
                        </Link>
                        <Link to="/">
                            <img src={ProfileTwo} className="w-8 h-8 justify-self-end hover:scale-150" alt="Profile" />
                        </Link>
                        </div> */}





            {/* const loginCart = props.userLogin ? ( */}
              <div className=" flex flex-row gap-4">
                {/* <Link to="/shoppingcart">
                  <button type="button" onClick={handleMenuToggle} ><img src={ShopCart} className="mt-2 w-6 h-6 justify-self-end hover:scale-150" alt="Shop Cart" /></button>
                </Link> */}
                <Link to="/signup"> {loginNav}</Link>
              </div>
              {/* ) : (

                ) */}

            </div>
          </ul>
        </div>
      </div>
    </nav>


  );
}


// MODAL 


{/* <div className={`fixed inset-0 flex items-center justify-center z-50 `}>
<div className="absolute inset-0 bg-black opacity-50"></div>
<div className="relative bg-white rounded-lg shadow p-4 dark:bg-gray-800">
  <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your not logged in</h2>
  <p className="text-gray-700 dark:text-gray-300">Please Sign in to access cart</p>

  <Link to='/signin' >
  <button
    className="text-primary-600 hover:underline dark:text-primary-500 mt-4"
  >
    Sign In
  </button>
  </Link>
  </div> */}
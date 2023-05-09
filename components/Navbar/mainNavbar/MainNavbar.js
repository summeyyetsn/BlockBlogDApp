import React, { useState, useRef, useEffect } from 'react';
import styles from './MainNavbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBookmarksOutline, IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';


const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: 'Profile', icon: <AiOutlineUser className="profile-menu-icons" /> },
    { name: 'Library', icon: <IoBookmarksOutline className="profile-menu-icons" /> },
    { name: 'Stories', icon: <HiOutlineDocumentText className="profile-menu-icons" /> },
    { name: 'Settings', icon: <IoSettingsOutline className="profile-menu-icons" /> },
  ];

  const menuRef = useRef();
  const imgRef = useRef();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = (name) => {
    console.log(`Clicked on ${name} menu item`);
    setOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const currentScrollPos = window.pageYOffset;
      const navbarHeight = navbarRef.current.offsetHeight;
      const navbarOpacity = parseFloat(window.getComputedStyle(navbarRef.current).getPropertyValue('opacity'));

      if (prevScrollPos > currentScrollPos) {
        if (currentScrollPos > navbarHeight && navbarOpacity === 0) {
          navbarRef.current.style.opacity = '1';
        }
      } else {
        if (currentScrollPos > navbarHeight && navbarOpacity === 1) {
          navbarRef.current.style.opacity = '0';
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

   return (
    <nav>
        <div className={styles["header-div"]} ref={navbarRef}>
            <div className={styles['header-left']}>

            
          <Link href="/">
            <img src='/images/logoBlack.png' alt='logo' className={styles['logo-img']} />
          </Link>  
            <div className={styles['header-search']}>
                <IoSearchOutline className={styles['search-icon']}/>
                <input type='text' placeholder='Search Post' className={styles['search-box']}></input>
            </div>
            </div>
        

            <div className={styles["header-right"]}>
              <div className={styles["dib"]}>
                <Link href="Writing" className='my-link'>
                  <div className={styles['write-side']}>
                    <div className={styles['write-icon']}></div>
                    <span className={styles['write-icon-text']}>Write</span>
                  </div>
                </Link>
              </div>
                <div className={styles["dib div-notification"]}>
                    <a href="" className={styles["href-design"]}>
                      <div className={styles['notification-icon']}></div>
                    </a>
                </div>

                {/* <div className={styles["profil-img-side"]}>
                  <div className={styles["profil-button"]}></div>
                  <RiArrowDropDownLine className={styles['profile-arrow-down']}/>
               </div>     */}

                <div className={styles['profile-dropdown-menu-container']}>
                  <div className={styles["profile-dropdown-menu"]}>
                    <div ref={imgRef} className={styles["profile-image"]} onClick={handleClick}></div>
                    {open && (
                      <ul className={styles["profile-menu-text-container"]} ref={menuRef}>
                        {menuItems.map((item) => (
                          <li className={styles['profile-menu-text']} key={item.name} onClick={() => handleMenuClick(item.name)}>
                            {item.icon}
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>


            </div>
        </div>
    </nav>
  )
}

export default MainNavbar

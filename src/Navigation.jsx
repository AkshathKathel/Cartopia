import './Navigation.css'
import transportation from './assets/transportation.png'
import { Link, Outlet } from 'react-router-dom';
import { Faqs } from './Home';
import { useEffect } from 'react';

function Navigation(){
    useEffect(() => {
        const scrollToFAQ = () => {
          const faqSection = document.getElementById('faq');
          if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
          }
        };
    
        const faqLink = document.getElementById('faq-link');
        if (faqLink) {
          faqLink.addEventListener('click', scrollToFAQ);
        }
    

        return () => {
          if (faqLink) {
            faqLink.removeEventListener('click', scrollToFAQ);
          }
        };
      }, []);
    return(
        <>
        <nav>
            <div className="brand">
                <img src={transportation} alt=""/>
                <p style={{ margin: 0 }}>Cartopia</p>
            </div>
            <ul id="navbar">
                <li>
                    <Link  to="/">Home</Link>
                </li>
                <li>
                    <Link  to="about">About</Link>
                </li>
                <li>
                    <Link  to="services">Services</Link>
                </li>
                <li>
                    <Link  to="booking">Booking</Link>
                </li>
                <li>
                    {/* <Link to="#faq">FAQs</Link> */}
                    <a id="faq-link" href="#faq">FAQs</a>
                </li>
            </ul>
            <div className="profile">
                <a href="#">Sign-in</a>
                <button>Sign-out</button>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}

export default Navigation
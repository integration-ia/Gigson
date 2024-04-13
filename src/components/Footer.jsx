import './Footer.css'
import logoImg from '../assets/solutions.png'


const Footer = () => {
  return (
    <footer className='footer'>
        <nav className="footer-nav-container">
            <ul className="footer-nav-links">
                <li><a href="">ABOUT US</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">CASES</a></li>   
                <li><a href="">EN / ES</a></li>
            </ul>            
        </nav>
        <div className='footer-div'>
            <img className='logo-footer' src={logoImg}/>

            <svg className='mobile-icon' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6493 29.6887L26.9042 10.2882L3.0549 34L0 30.7662L23.8493 7.05488L4.43488 3.42941L7.68698 0L29.8609 4.01718L34 26.2593L30.6493 29.6887Z" fill="#3C3C3B"/>
            </svg>

        </div>        
    </footer>
  )
}

export default Footer
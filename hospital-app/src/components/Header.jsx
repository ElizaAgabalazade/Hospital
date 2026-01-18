import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import { MdLogin, MdLanguage } from 'react-icons/md';
import Logo from '../assets/img/Logo.png'; 
import CallCenterImg from '../assets/img/Call Center.png';
import FacebookIcon from '../assets/img/facebook_icon.png';
import './Header.css';
const Header = () => {

  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [isCentersOpen, setIsCentersOpen] = React.useState(false);
  return (
    <header id="top">
      {/* Header Top */}
      <div className="header_top">
        <div className="header_top_left">
          {/* Şəkillər yerinə ikon istifadə etmək daha yaxşıdır, amma şəkildirsə src-ni düzəltməlisən */}
          <FaFacebookF className="facebook_icon" style={{ cursor: 'pointer', marginRight: '10px' }} />
          <FaInstagram style={{ cursor: 'pointer' }} />
        </div>

        <div className="header_top_right">
          <div className="div_sign_in">
            <MdLogin className="sign_in" />
            <Link to="/login">Daxil olun</Link>
          </div>
          <div className="class_of_languageselect">
            <MdLanguage />
            <select id="languageSelect">
              <option value="az">AZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header_bottom">
        <div className="header_bottom_left">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="header_bottom_middle">
          <nav>
            <ul>
           {/* HAQQIMIZDA - Əsas tetikleyici */}
            <li 
              className="dropdown_parent"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => {
                setIsAboutOpen(false);
                setIsCentersOpen(false); // Haqqımızda-dan çıxanda hamısı bağlansın
              }}
            >
              <Link to="/about">Haqqımızda</Link>

              {/* Yalnız Haqqımızda üzərinə gələndə açılan birinci div */}
              {isAboutOpen && (
                <div className="toggle_part_1">
                  <ul>
                    <li><Link to="#">Tariximiz</Link></li>
                    <li><Link to="#">Missiya və məqsəd</Link></li>
                    <li><Link to="#">Keyfiyyət siyasəti</Link></li>
                    <li><Link to="#">Keyfiyyətə nəzarət</Link></li>
                    <li><Link to="#">Sertifikatlar</Link></li>
                    <li><Link to="#">Beynəlxalq əməkdaşlıq</Link></li>
                    
                    {/* MƏRKƏZLƏRİMİZ - İkinci tetikleyici */}
                    <li 
                      className="nested_parent"
                      onMouseEnter={() => setIsCentersOpen(true)}
                      onMouseLeave={() => setIsCentersOpen(false)}
                    >
                      <Link to="#">Mərkəzlərimiz »</Link>

                      {/* Yalnız Mərkəzlərimiz üzərinə gələndə açılan ikinci div */}
                      {isCentersOpen && (
                        <div className="togglePart_1_hidden">
                          <ul>
                            <li><Link to="#">Başgicəllənmə Mərkəzi</Link></li>
                            <li><Link to="#">Estetik və Plastik Cərrahiyyə Mərkəzi</Link></li>
                            <li><Link to="#">Səs Mərkəzi</Link></li>
                            <li><Link to="#">Üz və Çənə Cərrahiyyə Mərkəzi</Link></li>
                            <li><Link to="#">Astma və Ağciyər Mərkəzi</Link></li>
                            <li><Link to="#">Yuxu Mərkəzi</Link></li>
                            <li><Link to="#">Koxlear implantasiya</Link></li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* HƏKİMLƏRİMİZ - Doctor.jsx-ə gedən link */}
                    <li><Link to="/doctor">Həkimlərimiz</Link></li>
                    <li><Link to="#">Məmnunluq anketi</Link></li>
                  </ul>
                </div>
              )}
            </li>

            <li><Link to="/services">Xidmətlər</Link></li>
            <li><Link to="/hearing">Referans Eşitmə</Link></li>
            <li><Link to="/news">Xəbərlər</Link></li>
            <li><Link to="/contact">Əlaqə</Link></li>
          </ul>
        </nav>
      </div>

        <div className="header_bottom_right">
          <div className="search_box">
            <input type="text" placeholder="Axtarış..." className="search-input" />
            <FaSearch />
          </div>
          <div className="call_center">
            <img src={CallCenterImg} alt="Call Center" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
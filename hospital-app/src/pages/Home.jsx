import React, { useState, useRef } from 'react';
import './Home.css';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

// Şəkil importları
import bgSection1 from '../assets/img/bg_section_1.png';
import ButtonImg from '../assets/img/Button.png';
import section2Img from '../assets/img/section2.PNG';
import doctor1 from '../assets/img/doctor1.png';
import doctor2 from '../assets/img/doctor2.png';
import doctor3 from '../assets/img/doctor3.png';
import info1 from '../assets/img/information_1.PNG';
import info2 from '../assets/img/information2.PNG';
import info3 from '../assets/img/information3.PNG';
import info4 from '../assets/img/information4.PNG';
import section5Pic from '../assets/img/section_5_pincture.png';
import pasiyentImg from '../assets/img/Pasiyent.png';
import group12Icon from '../assets/img/Group 12.png';

const Home = () => {
    // --- KARUSEL MƏNTİQİ ---

    // Section 3 (Həkimlər)
    const carousel3Ref = useRef(null);
    const [scrollPos3, setScrollPos3] = useState(0);

    // Section 4 (Məlumatlar)
    const carousel4Ref = useRef(null);
    const [index4, setIndex4] = useState(0);

    const GAP = 20; // Şəkillər və kartlar arasındakı məsafə

    // Həkimlər sürüşdürmə
    const slideRight3 = () => {
        const carousel = carousel3Ref.current;
        const imgWidth = carousel.querySelector("img").offsetWidth + GAP;
        const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
        if (scrollPos3 < maxScroll) {
            setScrollPos3(prev => Math.min(prev + imgWidth, maxScroll));
        }
    };

    const slideLeft3 = () => {
        const carousel = carousel3Ref.current;
        const imgWidth = carousel.querySelector("img").offsetWidth + GAP;
        if (scrollPos3 > 0) {
            setScrollPos3(prev => Math.max(prev - imgWidth, 0));
        }
    };

    // Məlumatlar sürüşdürmə (İndex əsaslı)
    const slideRight4 = () => {
        const items = carousel4Ref.current.querySelectorAll(".section_4_item");
        if (index4 < items.length - 3) { // Ekranda 3 ədəd görünürsə
            setIndex4(prev => prev + 1);
        }
    };

    const slideLeft4 = () => {
        if (index4 > 0) {
            setIndex4(prev => prev - 1);
        }
    };

    // Dinamik en hesablama
    const getItemWidth4 = () => {
        if (carousel4Ref.current) {
            const item = carousel4Ref.current.querySelector(".section_4_item");
            return item ? item.offsetWidth + GAP : 0;
        }
        return 0;
    };

    return (
        <div className="home-container">
            <div className="home-wrapper">

                {/* Section 1 */}
                <div
                    className="section_1"
                    style={{
                        backgroundImage: `url(${bgSection1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <h2>İxtisaslaşmış Tibbi Xidmətin Tək Ünvanı!</h2>
                    <a href="#" className="button_png">
                        <img src={ButtonImg} alt="Button" />
                    </a>
                </div>

                {/* Section 2 */}
                <div className="section_2">
                    <img src={section2Img} alt="Section 2 Banner" />
                </div>

                {/* SECTION 3 - HƏKİMLƏR */}
                <div className="section_3">
                    <div className="section_3_top">
                        <h2>Həkimlər</h2>
                        <button onClick={slideLeft3} className="carousel-btn left"><FaArrowLeft /></button>
                        <button onClick={slideRight3} className="carousel-btn right"><FaArrowRight /></button>
                    </div>

                    <div className="carousel-wrapper" style={{ overflow: 'hidden' }}>
                        <div
                            className="carousel"
                            ref={carousel3Ref}
                            style={{
                                display: 'flex',
                                transition: 'transform 0.5s ease-in-out',
                                transform: `translateX(-${scrollPos3}px)`
                            }}
                        >
                            <img src={doctor1} alt="Həkim 1" />
                            <img src={doctor2} alt="Həkim 2" />
                            <img src={doctor3} alt="Həkim 3" />
                            <img src={doctor1} alt="Həkim 1 təkrar" />
                            <img src={doctor2} alt="Həkim 2 təkrar" />
                            <img src={doctor3} alt="Həkim 3 təkrar" />
                        </div>
                    </div>
                </div>

                {/* SECTION 4 - FAYDALI MƏLUMATLAR */}
                <div className="section_4">
                    <div className="section_4_top">
                        <h2>Faydalı Məlumatlar</h2>
                        <button onClick={slideLeft4} className="left1"><FaArrowLeft /></button>
                        <button onClick={slideRight4} className="right1"><FaArrowRight /></button>
                    </div>

                    <div className="section_4_carousel_wrapper" style={{ overflow: 'hidden' }}>
                        <div
                            className="section_4_carousel"
                            ref={carousel4Ref}
                            style={{
                                display: 'flex',
                                transition: 'transform 0.5s ease-in-out',
                                transform: `translateX(-${index4 * getItemWidth4()}px)`
                            }}
                        >
                            <div className="section_4_item">
                                <img src={info1} alt="Məlumat 1" />
                                <h3>28 mart 2025</h3>
                                <p>Qulaq xəstəlikləri</p>
                            </div>
                            <div className="section_4_item">
                                <img src={info2} alt="Məlumat 2" />
                                <h3>24 iyun 2025</h3>
                                <p>Ətraflı Burun xəstəlikləri</p>
                            </div>
                            <div className="section_4_item">
                                <img src={info3} alt="Məlumat 3" />
                                <h3>1 avqust 2025</h3>
                                <p>Baş-Boyun cərrahiyyəsi</p>
                            </div>
                            <div className="section_4_item">
                                <img src={info2} alt="Məlumat təkrar" />
                                <h3>1 avqust 2025</h3>
                                <p>Baş-Boyun cərrahiyyəsi</p>
                            </div>
                            <div className="section_4_item">
                                <img src={info4} alt="Məlumat 4" />
                                <h3>28 mart 2025</h3>
                                <p>Lor əməliyyatı zamanı anesteziya</p>
                            </div>
                            <div className="section_4_item">
                                <img src={info2} alt="Məlumat təkrar" />
                                <h3>1 avqust 2025</h3>
                                <p>Qulaq xəstəlikləri</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5 & 6 Qalan hissələr eyni qalır */}
                <div className="section_5">
                    <div className="section_5_left">
                        <h3>Nəyə görə Lor Hospital?</h3>
                        <p>Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın eləcə də Qafqazın ilk və yeganə ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəzidir. Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun Mərkəzi olmağımızın vermiş olduğu məsuliyyət ilə poliklinika, laboratoriya,funksional diaqnostika müayinələrindən sonra pasiyentlərimizə daha dəqiq diaqnoz qoyularaq lazımi müalicələr aparılır. Qüsursuz xidmət anlayışını əsas tutaraq Avropa standartlarına uyğun müasir müalicə və diaqnostika üsulları ilə xidmətlərimizin yüksək keyfiyyətini təmin edirik.  Endoskopik,mikroskopik və lazer texnologiyalarının istifadəsi dəqiq diaqnostikaya,hətta ən çətin əməliyyatlar zamanı minimal travmaya,bərpa dövrünü qısatlmağa 
                         və qısa müddətdə normal gündəlik həyata qayıtmağa imkan yaradır..</p>
                    </div>
                    <div className="section_5_right">
                        <img src={section5Pic} alt="Lor Hospital Haqqında" />
                    </div>
                </div>

                <div className="section_6">
                    <h3>Pasiyent məmnunluğu</h3>
                    <div className="section_6_cards">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="section_6_1">
                                <img src={pasiyentImg} alt="Pasiyent" />
                                <img src={group12Icon} alt="" className="icon" />
                                <h4>Aysel Bağışlı</h4>
                                <div className="stars">
                                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                </div>
                                <p className="comment">5 ilə yaxındır müraciət etdiyimiz...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
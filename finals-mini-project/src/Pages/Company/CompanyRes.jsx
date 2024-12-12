import { useLocation,Link } from "react-router-dom"
import React,{ useEffect } from "react"
import { FaPhone, FaFacebookF,FaInstagram,FaStar, FaDiscord,FaTelegramPlane,FaWhatsapp,FaBriefcase, FaGraduationCap,FaLightbulb,FaKeyboard, FaBuilding, FaCat, FaCamera, FaMountain,FaTshirt, FaGamepad, FaPhotoVideo, FaCarSide, FaPuzzlePiece, FaChessKnight, FaTools, FaLeaf, FaMap,FaHouseUser  } from "react-icons/fa";
import { FaLocationDot,FaXTwitter } from "react-icons/fa6";
import { IoMdMail,IoMdFlower } from "react-icons/io";
import $ from 'jquery'
import './Resume.css'
const iconMap = {
    "<FaKeyboard />": FaKeyboard,
    "<FaBuilding />": FaBuilding,
    "<FaCat />": FaCat,
    "<FaCamera />": FaCamera,
    "<FaMountain />": FaMountain,
    "<FaTshirt />": FaTshirt,
    "<FaGamepad />": FaGamepad,
    "<FaPhotoVideo />": FaPhotoVideo,
    "<FaCarSide />": FaCarSide,
    "<FaPuzzlePiece />": FaPuzzlePiece,
    "<FaChessKnight />": FaChessKnight,
    "<FaTools />": FaTools,
    "<FaLeaf />": FaLeaf,
    "<FaMap />": FaMap,
  };
export const CompanyRes = () => {
    const location = useLocation()
    const profile = location.state.resume
    console.log(location.state);
    useEffect(() => {
        $('.skills-prog li').find('.skills-bar').each(function (i) {
          const $bar = $(this).find('.bar');
          setTimeout(() => {
            const percent = $(this).parent().data('percent');
            $bar.animate({
              width: `${percent}%`,
            }, {
              duration: 1000,
              easing: 'linear',
              complete: () => {
                $bar.css('transition-duration', '.5s');
              },
            });
          }, i * 150);
        });
    
        $('.skills-soft li').find('svg').each(function (i) {
          const circle = $(this).children('.cbar');
          const r = circle.attr('r');
          const c = Math.PI * (r * 2);
          const percent = $(this).parent().data('percent');
          const cbar = ((100 - percent) / 100) * c;
    
          circle.css({
            'stroke-dashoffset': c,
            'stroke-dasharray': c,
          });
    
          setTimeout(() => {
            circle.animate({
              strokeDashoffset: cbar,
            }, {
              duration: 1000,
              easing: 'linear',
              complete: () => {
                circle.css('transition-duration', '.3s');
              },
            });
    
            $(this)
              .siblings('small')
              .prop('Counter', 0)
              .animate({
                Counter: percent,
              }, {
                duration: 1000,
                step: function (now) {
                  $(this).text(`${Math.ceil(now)}%`);
                },
              });
          }, i * 150);
        });
      }, []);
    
      return (
        <div className="resume">
          <div className="base">
            <div className="profile">
              <div className="photo">
                <img src={profile.img} alt="Profile" />
              </div>
              <div className="info">
                <h4 className="name">{profile.name}</h4>
                <small className="job">{profile.job}</small>
              </div>
            </div>
            <div className="about">
              <h3>About me</h3>
              <p>
                {profile.summary}
              </p>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <div className="call">
                <div className="pseudolink">
                <i><FaPhone /></i>
                <span >{profile.phone}</span>
                </div>
              </div>
              <div className="address">
               <div className="pseudolink">
                <i><FaLocationDot /></i>
                <span>{profile.address}</span>
               </div>
              </div>
              <div className="email">
                <div className="pseudolink">
                <i><IoMdMail /></i>
                <span>{profile.email}</span>
                </div>
              </div>
              <div className="website">
              <Link to='/'>
                <i><FaHouseUser /></i>
                <span>keystaxx.com</span>
                </Link>
              </div>
            </div>
            <div className="follow">
              <h3>Socials</h3>
              <div className="box">
                <a href="https://www.facebook.com/" target="_blank" >
                  <i ><FaFacebookF className="brand"/></i>
                </a >
                <a href="https://www.instagram.com/" target="_blank">
                  <i><FaInstagram className="brand" /></i>
                </a>
                <a href="https://x.com/home" target="_blank">
                  <i><FaXTwitter  className="brand"/></i>
                </a>
                <a href="https://discord.com/"  target="_blank">
                  <i><FaDiscord className="brand"/></i>
                </a>
                <a href="https://web.telegram.org/"  target="_blank">
                  <i><FaTelegramPlane className="brand"/></i>
                </a>
                <a href="https://www.whatsapp.com/"  target="_blank">
                  <i><FaWhatsapp className="brand"/></i>
                </a>
              </div>
            </div>
          </div>
          <div className="func">
            <div className="work">
                <h3>
                    <i><FaBriefcase /></i> Work Experience
                </h3>
                <ul>
                    {profile.exp.map(({ work, duration, workplace }, index) => (
                        <li key={index}>
                            <span>{work} - {workplace}</span>
                            <small>{duration}</small>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="edu">
                <h3>
                    <i><FaGraduationCap /></i> Education
                </h3>
                <ul>
                    {profile.educ.map(({ school, duration, field }, index) => (
                        <li key={index}>
                            <span>{school}</span>
                            <small>{duration} - {field}</small>
                        </li>
                ))}
                </ul>
            </div>
            <div className="skills-prog">
                <h3>
                    <i><FaLightbulb /></i> Technical Skills
                </h3>
                <ul>
                    {profile['technical-skills'].map(({ skill, percentage }, index) => (
                        <li key={index} data-percent={percentage}>
                            <span>{skill}</span>
                            <div className="skills-bar">
                                <div className="bar" style={{ width: `${percentage}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills-soft">
                <h3>
                    <i><IoMdFlower /></i> Non-Technical Skills
                </h3>
                <ul>
                {profile['non-technical-skills'].map(({ skill, percentage }, index) => (
                    <li key={index} data-percent={percentage}>
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" />
                            <circle
                            className="cbar"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                                strokeDasharray: `${(percentage / 100) * 282} 282`,
                                strokeDashoffset: 0,
                            }}
                            />
                        </svg>
                        <span>{skill}</span>
                        <small>{percentage}%</small>
                    </li>
                ))}
                </ul>
            </div>
            <div className="interests">
            <h3>
                <i><FaStar /></i> Interests
            </h3>
            

            <div className="interests-items">
            {profile.interests.map(({ icon, label }) => (
                <div key={label} className={label.toLowerCase()}>
                <i>{React.createElement(iconMap[icon])}</i>
                <span>{label}</span>
                </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      );
    
}

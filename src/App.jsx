import './App.css';
import { FaUserAlt, FaRegHeart, FaCoins, FaPhone } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import header_logo from "../src/assets/images/header_logo.svg"
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosClose, IoMdLaptop } from "react-icons/io";
import { TbAirConditioningDisabled } from "react-icons/tb"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiWashingMachine, GiSewingMachine } from "react-icons/gi";
import { MdOutlinePedalBike } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaBullseye } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react"
import data2 from "./region.json"
import { GoGlobe } from "react-icons/go";
// import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import data from "./data.json";
import data3 from "./til.json"


function App() {
  const [menu, setMenu] = useState(false);


  const [region, setRegion] = useState("Toshkent viloyati");
  const [language, setLanguage] = useState("Uz");


  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };



  const [isModalOpen2, setIsModalOpen2] = useState(false);


  const openModal2 = () => {
    setIsModalOpen2(true);
  };


  const closeModal2 = () => {
    setIsModalOpen2(false);
  };


  const handleOutsideClick2 = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal2();
    }
  };

  const [catalog, setCatalog] = useState(false);


  function trueFunc() {
    setCatalog(true);
  }
  function falseFunc() {
    setCatalog(false);
  }

  const [catIndex, setCatIndex] = useState(0);


  return (

    <div className="barcha">


      <div className="header_nav">
        <div className="region">
          <CiLocationOn className='lokal' />
          <div className="box">
            <p className="fox">{region}</p>
            <div className="row">
              {
                data2.map((e, i) => (
                  <p className="str" onClick={() => setRegion(e.regionName)}>{e.regionName}</p>
                ))
              }
            </div>
          </div>
        </div>
        <p className="nav_text">Bizning do'konlarimiz</p>
        <p className="nav_text">
          Yuridik shaxslar uchun</p>
        <p className="nav_text">To'lov usullari</p>
        <div className="nav_left_content">
          <div className="nav_aloqa">
            <p className="aloqa_t">Aloqa markazi :</p>
            <p className="aloqa_num"><a href="tel:">+99871 209 99 44</a></p>
          </div>
          <div className="languages">
            <GoGlobe className='global' />
            <div className="lan">
              <p className="fox">{language}</p>
              <div className="row">
                {
                  data3.map((e, i) => (
                    <p className="str" onClick={() => setLanguage(e.languageName)}>{e.languageName}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='rang'>
        <div className="container">


          <header className="header">
            <img src={header_logo} alt="" className="logo" />




            {catalog === true ? (
              <button className='header_btn' onClick={() => falseFunc()}>
                <IoClose />
                Каталог
              </button>
            ) : (
              <button className='header_btn' onClick={() => trueFunc()}>
                <i class="fa-solid fa-bars "></i>
                Каталог</button>
            )}

            {catalog === true ? (
              <div className="catalog">
                <div className="catalog_content1">
                  <div className="catalog_content2">
                    {data.map((e, index) => (

                      <div className="katalog_rasm">
                        <img src={e.img} alt="" className='e' />
                        <p className='katalog_title'

                          style={
                            catIndex === index
                              ? { backgroundColor: "rgba(251, 193, 0, .2)" }
                              : null
                          }
                          onMouseMove={() => setCatIndex(index)}
                        >
                          {e.title}
                        </p>
                      </div>

                    ))}
                  </div>
                  {data.map((e, i) =>
                    catIndex === i ? (
                      <div className='text_group'>
                        {e.textGroup.map((c, index) => (

                          <div className='katalog_div'>
                            <div>
                              <p className='katalog_yozuv'>{c.title}</p>
                              <p className='katalog_yozuv2'>{c.text}</p>
                            </div>
                          </div>

                        ))}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}



            {/* <div className="katalog_shadov">
              <IoIosClose className='katalog_close' onClick={() => yopFunc()} />
              <div className="sidebar2">



                <div className="menu_group">
                  <div className="sot">
                    <IoPhonePortraitOutline className='menu_logo' />
                    <p className="mene_pech">Smartfonlar</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <IoMdLaptop className='menu_logo' />
                    <p className="mene_pech">Noutbooklar</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <i class="fa-solid fa-tv"></i>
                    <p className="mene_pech">Televezorlar</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <TbAirConditioningDisabled className='menu_logo' />
                    <p className="mene_pech">Konditsoner</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <GiWashingMachine className='menu_logo' />
                    <p className="mene_pech">Kir yuvish mashinasi</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <GiSewingMachine className='menu_logo' />
                    <p className="mene_pech">Tikuv mashinasi</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <CgSmartHomeRefrigerator className='menu_logo' />
                    <p className="mene_pech">Muzlatgich</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="menu_group">
                  <div className="sot">
                    <MdOutlinePedalBike className='menu_logo' />
                    <p className="mene_pech">Velosopedlar</p>
                  </div>
                  <IoIosArrowForward />
                </div>

                <div className="menu_group">
                  <div className="sot">
                    <FaCoins className='menu_logo' />
                    <p className="mene_pech">Aksiyalar</p>
                  </div>
                  <IoIosArrowForward />
                </div>

                <div className="menu_group">
                  <div className="sot">
                    <FaPhone className='menu_logo' />
                    <p className="mene_pech">+998 71 209 99 44</p>
                  </div>
                  <IoIosArrowForward />
                </div>

              </div>
            </div> */}





            <input type="text" required placeholder=' Qidirish' className='header_input' />
            <div onClick={openModal} className='header_title'>
              <FaUserAlt className='icon' />
              <p className="header_text">Кириш</p>
            </div>
            {isModalOpen && (
              <div className="modal" onClick={handleOutsideClick}>
                <div className="modal-content">
                  <span className="close2" onClick={closeModal}>&times;</span>
                  <p className='kirish_text'>Kirish yoki ro'yxatdan o'tish.</p>
                  <form>
                    <input type="text" className="kirish_input" placeholder='998' required />
                    <button className="kirish_btn">Kodni olish</button>
                  </form>
                  <p className="kirish_text2">Login orqali kirish</p>
                </div>
              </div>
            )}
            <div className="header_title">
              <FaRegHeart className='icon' />
              <p className="header_text">Севимлилар</p>
            </div>
            <div className="header_title" onClick={openModal2}>
              <CiShoppingCart className='icon' />
              <p className="header_text">Саватча</p>
            </div>
            {isModalOpen2 && (
              <div className="modal" onClick={handleOutsideClick2}>
                <div className="modal-content2">
                  <span className="close2" onClick={closeModal2}>&times;</span>

                  <p className='savat_text'>Savatcha</p>
                  <div className="savat_guruh">
                    <MdOutlineShoppingCart className='savat_shop' />
                    <p className="savat_text2">Savatchada xozirda
                      <br />
                      hech nima yo'q</p>
                    <button className="savat_btn">Xarid qilish</button>
                  </div>
                </div>
              </div>
            )}

            <div className="box">
              <HiOutlineMenu className='menu' onClick={() => setMenu(true)} />

              {menu === true ? (



                <div className="guruh">

                  <div className="owerflow" onClick={() => setMenu(FaBullseye)}>

                  </div>

                  <div className="sidebar">
                    <IoIosClose className='close' onClick={() => setMenu(false)} />
                    <div className="menu_card">

                      <FaUserAlt className='menu_icon' />
                      <p className="menu_text">Кириш</p>
                      <div className="hr"></div>
                      <p className="menu_text">Ro'yxatdan o'tish </p>
                    </div>
                    <div className="btnlar">
                      <button className="menu_btn">Do'konlar</button>
                      <button className="menu_btn">Taqqoslash</button>
                      <button className="menu_btn">Bo'yurtma xolati</button>
                    </div>
                    <div className="menu_group">
                      <IoPhonePortraitOutline className='menu_logo' />
                      <p className="mene_pech">Smartfonlar</p>
                    </div>
                    <div className="menu_group">
                      <IoMdLaptop className='menu_logo' />
                      <p className="mene_pech">Noutbooklar</p>
                    </div>
                    <div className="menu_group">
                      <i class="fa-solid fa-tv"></i>
                      <p className="mene_pech">Televezorlar</p>
                    </div>
                    <div className="menu_group">
                      <TbAirConditioningDisabled className='menu_logo' />
                      <p className="mene_pech">Konditsoner</p>
                    </div>
                    <div className="menu_group">
                      <GiWashingMachine className='menu_logo' />
                      <p className="mene_pech">Kir yuvish mashinasi</p>
                    </div>
                    <div className="menu_group">
                      <GiSewingMachine className='menu_logo' />
                      <p className="mene_pech">Tikuv mashinasi</p>
                    </div>
                    <div className="menu_group">
                      <CgSmartHomeRefrigerator className='menu_logo' />
                      <p className="mene_pech">Muzlatgich</p>
                    </div>
                    <div className="menu_group">
                      <MdOutlinePedalBike className='menu_logo' />
                      <p className="mene_pech">Velosopedlar</p>
                    </div>

                    <div className="menu_group">
                      <FaCoins className='menu_logo' />
                      <p className="mene_pech">Aksiyalar</p>
                    </div>

                    <div className="menu_group">
                      <FaPhone className='menu_logo' />
                      <p className="mene_pech">+998 71 209 99 44</p>
                    </div>

                  </div>
                </div>
              ) : null}
            </div>
          </header>
          <div className="takliflar">
            <p className="taklif_text"> <i class="fa-solid fa-fire"></i> Aкциялар</p>
            <p className="taklif_text"><i class="fa-solid fa-bolt"></i>1+1</p>
            <p className="taklif_text">Ҳаво совутгичлар</p>
            <p className="taklif_text">Иситгичлар</p>
            <p className="taklif_text">Смартфонлар</p>
            <p className="taklif_text">Музлатгичлар</p>
            <p className="taklif_text">Чангютгичлар</p>
            <p className="taklif_text">Ноутбуклар</p>
            <p className="taklif_text1">Телевизорлар</p>
            <p className="taklif_text1">Барча категориялар</p>
          </div>

        </div>
      </div>
    </div>


  );
}

export default App;

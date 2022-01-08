import React,{useState} from 'react'

import NavBar from "./components/header/NavBar";
import Cta from "./components/CTA/Cta"
import SpecialOffer from "./components/specialSection/Special"
import AdPlace from "./components/firstAdPlace/AdPlace";
import RecommendHome from "./components/minSliders/RecommendHome";
import CategoriesInfo from "./components/CategoriesInfo/Categories";
import Footer from "./components/Footer/footer";

import footerIcons from './footerIcons.json'
import minDatas from './minDatas.json'
import firstSlideImagesData from './firstSlideData.json'
import firstAdImageLinks from './firstAdImageLinks.json'
import secondAdImageLinks from './secondAdImageLinks.json'
import categoriesData from './categoriesData.json'

import './style.css'


//sliders was changed in CTA styles
//need to use api for setting emails

const App = () => {
    const firstTheme = '#EF394E';
    const secondTheme = '#6BB927';
    const newClassSO = "newClassSo"
    const [registeredEmails,setRegisteredEmails] = useState([
        "arashft.am@gmail.com"
    ])

    const regNewEmail=(data)=> {
        setRegisteredEmails(prevEmails => [...prevEmails,data])
    }






    return (
        <div className="appContainer">
            <NavBar />
            <main className="" >
                <Cta />

                <SpecialOffer theme={firstTheme} slideData={firstSlideImagesData} />

                <AdPlace links={firstAdImageLinks} topMargin={"40px"} />

                <SpecialOffer isFirst={true} newClass={newClassSO} theme={secondTheme} slideData={firstSlideImagesData} />
                
                <section className="section-container">
                    <RecommendHome categoryHeader={"فرآورده‌های منجمد و یخچالی"} categoryHeaderAsYourSearched={true}
                    minDatas={minDatas} slideData={ firstSlideImagesData}  isSingleCart={true} isSeeAllBtn={false} />

                    <CategoriesInfo ctgData={categoriesData} />

                    <RecommendHome categoryHeader={"لپتاپ"} categoryHeaderAsYourSearched={true}
                    minDatas={minDatas} slideData={ firstSlideImagesData}  isSingleCart={true} isReverse={true} isSeeAllBtn={false} />

                    <AdPlace links={firstAdImageLinks} topMargin={"40px"} />

                    <RecommendHome categoryHeader={"عینک"} categoryHeaderAsYourSearched={true} minDatas={minDatas}
                    slideData={firstAdImageLinks}  />

                    <RecommendHome categoryHeader={"کفش مردانه ورزشی"} categoryHeaderAsYourSearched={true} minDatas={minDatas}
                    slideData={firstAdImageLinks}  />

                    <AdPlace links={secondAdImageLinks} topMargin={"40px"} />

                    <RecommendHome categoryHeader={"محصولات پربازدید اخیر"} minDatas={minDatas}
                    slideData={firstAdImageLinks}  />

                    <RecommendHome categoryHeader={"منتخب جدیدترین کالاها"} minDatas={minDatas}
                    slideData={firstAdImageLinks}  />

                    <RecommendHome categoryHeader={"محصولات پرفروش اخیر"} minDatas={minDatas}
                    slideData={firstAdImageLinks}  />
                </section>

            <Footer iconsData={footerIcons} onAdd={regNewEmail} />
        
        </main>
    </div>);
}

export default App;

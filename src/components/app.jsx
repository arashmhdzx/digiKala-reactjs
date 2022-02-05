import React from 'react'

import NavBar from "./header/NavBar";
import Cta from "./CTA/Cta"
import SpecialOffer from "./specialSection/Special"
import AdPlace from "./firstAdPlace/AdPlace";
import RecommendHome from "./minSliders/RecommendHome";
import CategoriesInfo from "./CategoriesInfo/Categories";
import Footer from "./Footer/footer";

import footerIcons from '../data/footerIcons.json'
import minDatas from '../data/minDatas.json'
import firstSlideImagesData from '../data/firstSlideData.json'
import firstAdImageLinks from '../data/firstAdImageLinks.json'
import secondAdImageLinks from '../data/secondAdImageLinks.json'
import categoriesData from '../data/categoriesData.json'



import './style.css'

// rgba(74,74,74,.43)

//sliders was changed in CTA styles
//need to use api for setting emails

const ProfileDropdown = (toggle) => {
    return (
        <div></div>
    )
}


const App = () => {

    const firstTheme = '#EF394E';
    const secondTheme = '#6BB927';
    const newClassSO = "newClassSo"


    return (
        <div className="appContainer">
            <NavBar />
            <ProfileDropdown toggle={true/* profileToggle */} />
            <main className="" >
                <Cta />

                <SpecialOffer theme={firstTheme} slideData={firstSlideImagesData} />

                <AdPlace links={firstAdImageLinks} />

                <SpecialOffer isFirst={true} newClass={newClassSO} theme={secondTheme} slideData={firstSlideImagesData} />

                <section className="section-container">
                    <RecommendHome categoryHeader={"فرآورده‌های منجمد و یخچالی"} categoryHeaderAsYourSearched={true}
                        minDatas={minDatas} slideData={firstSlideImagesData} isSingleCart={true} isSeeAllBtn={false} />

                    <CategoriesInfo ctgData={categoriesData} />

                    <RecommendHome categoryHeader={"لپتاپ"} categoryHeaderAsYourSearched={true}
                        minDatas={minDatas} slideData={firstSlideImagesData} isSingleCart={true} isReverse={true} isSeeAllBtn={false} />

                    <AdPlace links={firstAdImageLinks} />

                    <RecommendHome categoryHeader={"عینک"} categoryHeaderAsYourSearched={true} minDatas={minDatas}
                        slideData={firstAdImageLinks} />

                    <RecommendHome categoryHeader={"کفش مردانه ورزشی"} categoryHeaderAsYourSearched={true} minDatas={minDatas}
                        slideData={firstAdImageLinks} />

                    <AdPlace links={secondAdImageLinks}  />

                    <RecommendHome categoryHeader={"محصولات پربازدید اخیر"} minDatas={minDatas}
                        slideData={firstAdImageLinks} />

                    <RecommendHome categoryHeader={"منتخب جدیدترین کالاها"} minDatas={minDatas}
                        slideData={firstAdImageLinks} />

                    <RecommendHome categoryHeader={"محصولات پرفروش اخیر"} minDatas={minDatas}
                        slideData={firstAdImageLinks} />
                </section>

                <Footer iconsData={footerIcons} />

            </main>
        </div>

    );
}

export default App;

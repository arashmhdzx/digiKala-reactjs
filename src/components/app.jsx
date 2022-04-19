import React, { useState,useEffect } from 'react'

import NavBar from "./header/NavBar";
import Cta from "./CTA/Cta"
import SpecialOffer from "./specialSection/Special"
import AdPlace from "./firstAdPlace/AdPlace";
import RecommendHome from "./minSliders/RecommendHome";
import CategoriesInfo from "./CategoriesInfo/Categories";
import Footer from "./Footer/footer";

import footerIcons from '../data/footerIcons.json'
// import minDatas from '../data/minDatas.json'
import firstSlideImagesData from '../data/firstSlideData.json'
import firstAdImageLinks from '../data/firstAdImageLinks.json'
import secondAdImageLinks from '../data/secondAdImageLinks.json'
import categoriesData from '../data/categoriesData.json'

import { getSlideProduct ,getSortedProducts } from '../api/productionApi';

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

    const [firstData, setFirstData] = useState([])
    const [secondData, setSecondData] = useState([])
    const [thirdData, setThirdData] = useState([])
    const [fourthData, setFourthData] = useState([])
    const [mostSeenData, setMostSeenData] = useState([])
    const [mostSoldData, setMostSoldData] = useState([])


    React.useEffect(() => {
        getSlideProduct("laptop").then(
            res => setFirstData(res.slice(0,13))
        )
        getSlideProduct("phone").then(
            res => setSecondData(res.slice(0,13))
        )
        getSlideProduct("tv").then(
            res => setThirdData(res.slice(0,13))
        )
        getSlideProduct("smart_watch").then(
            res => setFourthData(res.slice(0,13))
        )
        getSortedProducts("seen").then(
            res => setMostSeenData(res.slice(0,13))
        )
        getSortedProducts("sold").then(
            res => setMostSoldData(res.slice(0,13))
        )
    }, [])
    

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
                    <RecommendHome categoryHeader={"لپتاپ"} recentSearchTitle={true} data={firstData} />

                    <CategoriesInfo ctgData={categoriesData} />

                    <RecommendHome categoryHeader={"گوشی موبایل"} recentSearchTitle={true} data={secondData} />

                    <AdPlace links={firstAdImageLinks} />

                    <RecommendHome categoryHeader={"تلویزیون"} recentSearchTitle={true} data={thirdData} />

                    <RecommendHome categoryHeader={"مچ بند و ساعت هوشمند"} recentSearchTitle={true} data={fourthData} />

                    <AdPlace links={secondAdImageLinks} />



                    <RecommendHome categoryHeader={"محصولات پربازدید اخیر"} data={mostSeenData}/>

                    {/* <RecommendHome categoryHeader={"منتخب جدیدترین کالاها"} minDatas={minDatas}/> */}

                    <RecommendHome categoryHeader={"محصولات پرفروش اخیر"} data={mostSoldData}/>
                </section>

                <Footer iconsData={footerIcons} />

            </main>
        </div>

    );
}

export default App;

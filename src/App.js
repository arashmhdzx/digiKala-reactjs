import NavBar from "./components/header/NavBar";
import Cta from "./components/CTA/Cta"
import SpecialOffer from "./components/specialSection/Special"
import AdPlace from "./components/firstAdPlace/AdPlace";
import RecommendHome from "./components/minSliders/RecommendHome";

import './style.css'

const App = () => {
  const firstTheme = '#EF394E';
  const secondTheme = '#6BB927';
  const newClassSO = "newClassSo"

  const minDatas = [
    {
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4b756b6ad14e30a9ff6a33905a90e525c77cdeec_1605613686.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"10",
      oldPrize:"35,000",
      newPrize:"32,000",
      isOffer:false
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4079550.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"25",
      oldPrize:"40,000",
      newPrize:"30,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3699800.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"30",
      oldPrize:"50,000",
      newPrize:"35,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3496898.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"20",
      oldPrize:"40,000",
      newPrize:"32,000",
      isOffer:false
    },
    {
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4b756b6ad14e30a9ff6a33905a90e525c77cdeec_1605613686.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"10",
      oldPrize:"35,000",
      newPrize:"32,000",
      isOffer:false
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4079550.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"25",
      oldPrize:"40,000",
      newPrize:"30,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3699800.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"30",
      oldPrize:"50,000",
      newPrize:"35,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3496898.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"20",
      oldPrize:"40,000",
      newPrize:"32,000",
      isOffer:false
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4b756b6ad14e30a9ff6a33905a90e525c77cdeec_1605613686.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"10",
      oldPrize:"35,000",
      newPrize:"32,000",
      isOffer:false
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/4079550.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"25",
      oldPrize:"40,000",
      newPrize:"30,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3699800.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"30",
      oldPrize:"50,000",
      newPrize:"35,000",
      isOffer:true
    },{
      link:"/fcg",
      imageLink:"https://dkstatics-public.digikala.com/digikala-products/3496898.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discription:"همبرگر گوشت 90% ب.آ مقدار 400 گرم",
      percent:"20",
      oldPrize:"40,000",
      newPrize:"32,000",
      isOffer:false
    }
  ]
 
  const firstSlideImagesData = [
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/57502abbe2575e2a3b61eb51c485578030f69279_1628065995.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"کتاب دایووفسکی",
      imageDiscription:"کتاب شیاطین جن زده اثر دایووفسکی",
      cashGift:true,
      cashPrize:"1,500",
      offerPercent:"50",
      oldPrize:"100,000",
      newPrize:"50,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/1ea58ff1cbb561b190380942a7cde22072537ae6_1624107223.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/83d8fae9376a4d7e39a71f9d88dc944051527d0d_1627290601.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/2039025.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/5f1827f0a7cff9b787cac23b1e0a5f3bfa6e67d2_1627800941.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/03630ec2a90691040241dd05046ca1d43d2c19a8_1627455956.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/2163884.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/0f5de37c18c304fab657381cbfc5337f253d76c9_1612159564.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/369236.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/4959682.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/4441133.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    },
    {
      imageSrc:"https://dkstatics-public.digikala.com/digikala-products/1c0f9bce2e937403ad1e3bc7affe95bec760e819_1629028891.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      imageAlt:"xyz",
      imageDiscription:"xyz",
      cashGift:true,
      cashPrize:"3,500",
      offerPercent:"35",
      oldPrize:"100,000",
      newPrize:"65,000",
      cartLink:"/product/dkp-2388909/کتاب-شیاطین-جن-زدگان-اثر-فیودور-داستایفسکی-انتشارات-نیلوفر"
    }
  ]

  const firstAdImageLinks = [
    {
      links:"https://www.digikala.com/product-list/plp_9025943/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%D9%87%D9%88%D9%85+%D9%BE%D9%84%D8%A7%D8%B3&promo_position=home_top&promo_creative=80212&bCode=80212",
      imageSrc:"https://dkstatics-public.digikala.com/digikala-adservice-banners/6eba15746090e603d0b296e13a857e995286588b_1629899585.jpg?x-oss-process=image/quality,q_80",
      alt:"پارتنرشیپ - پرسیل"
    },
    {
      links:"https://www.digikala.com/product-list/plp_9025943/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%D9%87%D9%88%D9%85+%D9%BE%D9%84%D8%A7%D8%B3&promo_position=home_top&promo_creative=80212&bCode=80212",
      imageSrc:"https://dkstatics-public.digikala.com/digikala-adservice-banners/4dd9049df412b548053a07d94fb0e655b3b8be98_1630137902.jpg?x-oss-process=image/quality,q_80",
      alt:"پارتنرشیپ - گلرنگ"
      
    },
    {
      links:"https://www.digikala.com/product-list/plp_9025943/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%D9%87%D9%88%D9%85+%D9%BE%D9%84%D8%A7%D8%B3&promo_position=home_top&promo_creative=80212&bCode=80212",
      imageSrc:"https://dkstatics-public.digikala.com/digikala-adservice-banners/90add4d10ace971480509f9d51ed8008adb846db_1629891603.jpg?x-oss-process=image/quality,q_80 ",
      alt:"پارتنرشیپ - هوم پلاس"
    },
    {
      links:"https://www.digikala.com/product-list/plp_9025943/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE+-+%D9%87%D9%88%D9%85+%D9%BE%D9%84%D8%A7%D8%B3&promo_position=home_top&promo_creative=80212&bCode=80212",
      imageSrc:"https://dkstatics-public.digikala.com/digikala-adservice-banners/ce4b1bc943df8440dfebd7a21798f6fc0ff4b1e2_1629786845.jpg?x-oss-process=image/quality,q_80",
      alt:"یک پذیرایی ساده"
    }

  ]

  return (
    <div className="appContainer">
      <NavBar />
      <Cta />
      <SpecialOffer theme={firstTheme} slideData={firstSlideImagesData} />
      <AdPlace links={firstAdImageLinks} />
      <SpecialOffer isFirst={true} newClass={newClassSO} theme={secondTheme} slideData={firstSlideImagesData} />
      <RecommendHome categoryHeader={"فرآورده‌های منجمد و یخچالی"} categoryHeaderSearched={true}
      minDatas={minDatas} slideData={ firstSlideImagesData} />

    </div>
  );
}

export default App;

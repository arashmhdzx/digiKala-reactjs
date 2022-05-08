import React, { useState, useEffect } from 'react'

import NavBar from '../../components/header/NavBar'
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch'

import { getAllresult } from '../../api/productionApi'
import { EngTofaNum, NumberWithCommas } from '../../utils/numberTools'



import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { BiSortDown } from 'react-icons/bi'
import { ReactComponent as Star } from '../../icons/star.svg'
import { ReactComponent as Toman } from '../../icons/Toman.svg'

import './style.css'
import { Navigate, useParams } from 'react-router-dom'

const SearchPage = () => {
    var { userSearch } = useParams();
    const [data, setData] = useState([])

    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const [dropdown4, setDropdown4] = useState(false)
    const [dropdown5, setDropdown5] = useState(false)

    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    console.log(userSearch);
    useEffect(() => {
        getAllresult(userSearch).then(
            res => setData(res.slice(0, 13))
        )
    }, [])

    // console.log(data);

    return (
        <div className='flex-col'>
            <NavBar />
            <div className='flex p-nb  f-stretch'>
                <div className='flex w-full pt-24 px-24'>
                    <section className='search-sb-container'>
                        <div className='search-sb'>
                            <div className='filter-header'>فیلترها</div>
                            <div className="filters">
                                <div onClick={() => setDropdown(prev => !prev)} className='filters-items border-b pointer'>
                                    دسته بندی
                                    {dropdown ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <div onClick={() => setDropdown2(prev => !prev)} className='filters-items border-b pointer'>
                                    برند
                                    {dropdown2 ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <div onClick={() => setDropdown3(prev => !prev)} className='filters-items border-b pointer'>
                                    خدمات دیجی پلاس
                                    {dropdown3 ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <div className='filters-items border-b'>
                                    ارسال فروشنده
                                    <ToggleSwitch onChange={state => setToggle(state)} />
                                </div>
                                <div onClick={() => setDropdown4(prev => !prev)} className='filters-items border-b pointer'>
                                    محدوده قیمت
                                    {dropdown4 ? <BsChevronUp /> : <BsChevronDown />}
                                </div>
                                <div className='filters-items border-b'>
                                    فقط کالاهای موجود
                                    <ToggleSwitch onChange={state => setToggle2(state)} />
                                </div>
                                <div className='filters-items border-b'>
                                    فقط کالاهای موجود در انبار<br /> دیجی‌کالا
                                    <ToggleSwitch onChange={state => setToggle3(state)} />
                                </div>
                                <div onClick={() => setDropdown5(prev => !prev)} className='filters-items border-b pointer'>
                                    نوع فروشنده
                                    {dropdown5 ? <BsChevronUp /> : <BsChevronDown />}
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='search-results-container w-full'>
                        <div className='flex ju-bet pb-20 pr-26 '>
                            <div className='sort-option flex ju-bet ' style={{width:"40%"}}>
                                <div className='flex ai-center'>
                                    <BiSortDown/>
                                    <div className='font-500' style={{paddingRight:"5px",fontWeight:"600"}}>مرتب سازی:</div>
                                </div>
                                <div className='font-500 pointer'>مرتبط ترین</div>
                                <div className='font-500 pointer'>پربازدید ترین</div>
                                <div className='font-500 pointer'>پرفروش ترین</div>
                                <div className='font-500 pointer'>گران ترین</div>
                                <div className='font-500 pointer'>ارزان ترین</div>
                            </div>
                            <div className='font-500'>{EngTofaNum(data?.length) + " "}کالا</div>
                        </div>
                        <div className='results pr-26'>
                            {
                                data?.map(data => (
                                    <a key={data?.id} href={`/products/dkp-${data?.id}`} className='border-t border-r p-result-cart flex pointer flex-col'>
                                        {console.log(data.oldPrice)}
                                        <div className='flex ju-center'>
                                            <img width={"240px"} height={"240px"} src={data?.mainImage} alt="" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='results-title'>{data?.title}</div>
                                            <div className='flex ju-bet'>
                                                <div className='font-500'>ارسال فروشنده</div>
                                                <div className='font-500 flex ai-center'>
                                                    <div className='font-num'>{EngTofaNum(4.5)}</div>
                                                    <Star id='star-icon' />
                                                </div>
                                            </div>
                                            <div className={`flex ju-bet ${!data?.discount && "ju-end"} pt-24`}>
                                                {data?.discount && <div className='font-num flex ju-center discount-bg ai-center'>{EngTofaNum(data?.discount + "%")}</div>}
                                                <div className='font-num flex' style={{ fontSize: "18px" }}>
                                                    {EngTofaNum(NumberWithCommas(data?.price))}
                                                    <div id='star-icon'><Toman fill='#424750' /></div>
                                                </div>
                                            </div>
                                            <div className='flex flex-end line-through font-500 ml-24' style={{ height: "22px" }}>{EngTofaNum(NumberWithCommas(data?.oldPrice ?? ""))}</div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
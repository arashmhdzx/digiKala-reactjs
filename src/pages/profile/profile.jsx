import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from '../products/icons/leftArrow.svg';
import { ReactComponent as Toman } from '../products/icons/toman.svg';
import { ReactComponent as Edit } from './Edit.svg';
import engTofaNum from '../../utils/engTofaNum';
import Navbar from '../../components/header/NavBar';
import { LogOut } from '../../hooks/useJWT'

import './style.css'
const Profile = () => {
    const [userData, setUserData] = useState(null)
    const [activeTab, setActiveTab] = useState(0)
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user")))
        console.log(JSON.parse(localStorage.getItem("user")))
        
    }, [])
    var phoneNumber = userData?.phoneNumber

    return <div className='flex border-box'>
        <Navbar />
        <div className='flex width-full jc-center' style={{ padding: "129px 0 0" }}>
            <div className='flex jc-center width-full' style={{ padding: "30px 0" }}>
                <div className='flex width-full jc-center'>
                    <div className='border width-300'>
                        <div className='flex-col p-20' >
                            <div className='flex'>
                                <img style={{ marginLeft: "16px" }} width="48px" height="48px" src="https://api.digikala.com/static/files/fd4840b2.svg" alt="user profile" />
                                <div className='flex width-full jc-sb'>
                                    <div className='flex-col'>
                                        <h4>{ userData?.fName + " " + userData?.lName}</h4>
                                        <p className='body-1 second-color-100'>{engTofaNum("0" +parseInt(userData?.phoneNumber))} </p>
                                    </div>
                                    <div className='flex ai-center'><Edit /></div>
                                </div>
                            </div>
                            <div className="flex-col py-12 mr-30">
                                <div className='flex jc-sb'>
                                    <p className='font-w350'>کیف پول</p>
                                    <span>
                                        -
                                        <Toman />
                                    </span>
                                </div>
                                <span className='flex ai-center body-1 link-color'>
                                    فعالسازی
                                    <LeftArrow fill='#19bfd3' />
                                </span>
                            </div>
                            <div className="flex-col py-12 mr-30">
                                <div className='flex jc-sb'>
                                    <p className='font-w350'>دیجی کلاب</p>
                                    <span className='body-1'>
                                        {engTofaNum("55")}
                                        امتیاز
                                    </span>
                                </div>
                                <span className='flex ai-center body-1 link-color'>
                                    مشاهده جوایز
                                    <LeftArrow fill='#19bfd3' />
                                </span>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div onClick={() => setActiveTab(0)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 0 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 0 && 'activeTabText'} color-text-primary`} >خلاصه فعالیت ها</h4>
                                </div>

                            </div>
                            <div onClick={() => setActiveTab(1)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 1 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 1 && 'activeTabText'} color-text-primary`} >سفارش ها</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(2)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 2 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 2 && 'activeTabText'} color-text-primary`} >لیست های من</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(3)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 3 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 3 && 'activeTabText'} color-text-primary`} >دیدگاه ها</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(4)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 4 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 4 && 'activeTabText'} color-text-primary`} >آدرس ها</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(5)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 5 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 5 && 'activeTabText'} color-text-primary`} >کارت های هدیه</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(6)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 6 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 6 && 'activeTabText'} color-text-primary`} >پیغام ها</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(7)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 7 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 7 && 'activeTabText'} color-text-primary`} >یازدیدهای اخیر</h4>
                                </div>
                            </div>
                            <div onClick={() => setActiveTab(8)} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 8 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 8 && 'activeTabText'} color-text-primary`} >اطلاعات حساب کاربری</h4>
                                </div>
                            </div>
                            <div onClick={() => { setActiveTab(9); LogOut(); }} className='flex py-12 border-top pointer'>
                                <div className={`activeTab ${activeTab === 9 && 'activeTabColor'}`}></div>
                                <div className='flex px-20'>
                                    <div className='flex ml-16'>
                                        <Toman />
                                    </div>
                                    <h4 className={`font-w500 ${activeTab === 9 && 'activeTabText'} color-text-primary`}>خروج</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="width-900 border mr-20"></div>
                </div>
            </div>
        </div>
    </div>;
};

export default Profile;

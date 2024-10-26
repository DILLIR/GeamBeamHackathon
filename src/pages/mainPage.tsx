import { Stack, Typography } from "@mui/material";
import fd from '../assets/gymlogo.png'
import tovar from '../assets/tovar.png'
import gymex from '../assets/gymex.png'
import banner from '../assets/banner.jpg'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import forth from '../assets/forth.png'
import fifth from '../assets/fifth.png'
import six from '../assets/six.png'
import seven from '../assets/seven.png'
import eight from '../assets/eight.png'
import { useNavigate } from "react-router-dom";

export function MainPage() {
    const navigate = useNavigate();
    return (
        <Stack>
            <div className="bg-white flex-col justify-center items-start inline-flex">
                <div className="w-[100%] bg-white flex-col justify-center items-center inline-flex">
                    <div className="w-[100%] bg-black flex-col justify-start items-end flex">
                        <div className=" justify-end items-start inline-flex">
                            <div className=" flex-col justify-start items-start inline-flex">
                                <div className="px-40 py-4 justify-start items-end gap-1 inline-flex">
                                    <div className="text-white text-sm font-bold font-['Open Sans'] uppercase leading-[21px]">EN</div>
                                    <div className="w-4 h-4 pl-[4.37px] pr-[4.76px] pt-[0.40px] pb-[0.68px] origin-top-left -rotate-90 justify-center items-center flex" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" h-[145px] flex-col justify-start items-center flex">
                        <div className=" h-[145px] pt-2.5 flex-col justify-between items-center flex">
                            <div className="w-[940px] pr-[0.01px] justify-start items-center gap-[0.70px] inline-flex">
                                <div className="justify-start items-start flex">
                                    <img className="w-[247.51px] h-[70px] relative" src={fd} />
                                </div>
                                <div className="grow shrink basis-0 pl-20 pr-10 flex-col justify-center items-start inline-flex">
                                    <div className="self-stretch pt-1 pb-0.5 justify-center items-start inline-flex">
                                        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                                            <div className="self-stretch justify-center items-start inline-flex">
                                                <div className="grow shrink basis-0 h-7 px-3.5 py-[4.50px] bg-white border-2 border-black flex-col justify-end items-start inline-flex">
                                                    <div className="self-stretch h-[19px] flex-col justify-start items-start flex">
                                                        <div className="self-stretch text-gray-400 text-sm font-normal font-['Open Sans']">Search entire store here...</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-end items-center flex">
                                    <div className="justify-start items-center flex">
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <div className="self-stretch justify-center items-center inline-flex">
                                                <div className="w-10 h-6 pl-2  justify-start items-center flex">
                                                    <img src={tovar} style={{ scale: "2" }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <div className="h-12 pl-2  py-3 justify-start items-center inline-flex">
                                                <div className="justify-start items-start flex">
                                                    <div className="w-8 h-6 pr-[0.33px] py-[0.51px] justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[940px] pt-3 justify-center items-start inline-flex">
                                <div className="justify-start items-center gap-[30px] flex">
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="justify-start items-start inline-flex">
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7">Sports Nutrition</div>
                                        </div>
                                    </div>
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="justify-start items-start inline-flex">
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7">Healthy Foods</div>
                                        </div>
                                    </div>
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="justify-start items-start inline-flex">
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7">Sportswear</div>
                                        </div>
                                    </div>
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="justify-start items-start inline-flex">
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7">Workout Accessories</div>
                                        </div>
                                    </div>
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="justify-start items-start inline-flex">
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7">Blog</div>
                                        </div>
                                    </div>
                                    <div className="w-[0px] h-[20px] origin-top-left  border border-[#d6d6d6]"></div>
                                    <div className="h-[53px] pt-[11.25px] pb-[13.75px] flex-col justify-start items-start inline-flex">
                                        <div className="cursor-pointer justify-start items-center gap-1.5 inline-flex">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.4482 0.25H5.55182L0 5.8018V12.6982L5.55182 18.25H12.4482L18 12.6982V5.8018L12.4482 0.25ZM6.50602 12.7849L2.94941 9.22831L6.50602 5.67169C7.8506 4.32711 10.0627 4.32711 11.4072 5.67169L14.9639 9.22831L11.4072 12.7849C10.0627 14.1295 7.89398 14.1295 6.50602 12.7849Z" fill="#FF4100" />
                                            </svg>
                                            <div className="text-black text-[17px] font-bold font-['Open Sans'] uppercase leading-7" onClick={() => {
                                                navigate('/chat');
                                            }}>GYMBEX</div> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-[442px] flex-col justify-start items-start inline-flex">
                    <div className="w-[100%] h-[442px]  flex-col justify-start items-center flex">
                        <div className="h-[441.60px] flex-col justify-center items-start flex">
                            <div className="w-[100%] relative grow shrink basis-0 flex-col justify-start items-start flex">
                                <img className="h-[441.60px] relative" src={banner} />
                                <div className="absolute bottom-[10px] w-[1425px] px-[594.33px] pt-[8.50px] justify-start items-start gap-[9.60px] inline-flex">
                                    <div className="w-[15px] h-[15px] bg-[#ff4100] rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                    <div className="w-[15px] h-[15px] bg-white rounded-[10px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-[1623.70px] px-[242.50px] flex-col justify-start items-center inline-flex">
                    <div className="h-[1623.70px] pb-20 flex-col justify-start items-start flex">
                        <div className="w-[100%] h-[109px] py-6 flex-col justify-start items-start flex">
                            <div className="w-[100%] justify-center items-start inline-flex">
                                <div className="w-[235px] self-stretch justify-start items-start flex">
                                    <div className="w-[43px] h-[35px] pr-2 flex-col justify-start items-start inline-flex">
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.3587 2.12821C24.8339 1.97669 23.2945 2.16293 21.8499 2.67371C20.4052 3.18448 19.0908 4.00723 18.0002 5.08347C16.9194 3.99654 15.608 3.16658 14.163 2.65503C12.7181 2.14347 11.1766 1.96343 9.65266 2.12821C7.29304 2.40574 5.10012 3.48461 3.44031 5.18456C1.78049 6.88452 0.754323 9.10259 0.533252 11.4682C0.397867 13.1408 0.677251 14.821 1.34664 16.3598C2.01602 17.8986 3.05473 19.2485 4.37068 20.2898L16.0263 32.1219C16.2738 32.3813 16.5716 32.5874 16.9016 32.7277C17.2315 32.868 17.5865 32.9396 17.945 32.9379C18.6361 32.9362 19.2999 32.6676 19.7976 32.1881L31.5856 20.4001C32.8993 19.3546 33.9391 18.0052 34.6153 16.4684C35.2915 14.9316 35.5838 13.2534 35.4671 11.5784C35.2625 9.1977 34.2459 6.95959 32.5877 5.23912C30.9294 3.51865 28.7303 2.42034 26.3587 2.12821ZM29.0273 17.2133L18.0002 28.2404L7.14951 17.3897L6.97308 17.2133C5.99698 16.4583 5.26944 15.4283 4.8843 14.256C4.49916 13.0836 4.47409 11.8228 4.8123 10.6361C5.15052 9.44935 5.83651 8.39118 6.78182 7.59802C7.72712 6.80487 8.88837 6.31311 10.1158 6.18618C10.3474 6.18618 10.5789 6.13105 10.8105 6.13105C11.8008 6.11949 12.7789 6.35064 13.6593 6.80428C14.5397 7.25793 15.2956 7.92028 15.8609 8.73344C16.1119 9.08676 16.4421 9.37647 16.825 9.57943C17.2079 9.78239 17.633 9.89296 18.0663 9.90232C18.5017 9.90393 18.9308 9.7981 19.3155 9.59421C19.7002 9.39032 20.0287 9.09466 20.2718 8.73344C21.0038 7.68597 22.0419 6.89044 23.2436 6.45581C24.4454 6.02118 25.7521 5.9687 26.9849 6.30556C28.2176 6.64242 29.3161 7.35216 30.1298 8.33754C30.9436 9.32293 31.4328 10.5358 31.5304 11.81C31.5645 12.8436 31.3558 13.8708 30.9211 14.8092C30.4864 15.7475 29.8378 16.5709 29.0273 17.2133Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch h-[19px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[15px] font-bold font-['Open Sans'] leading-[18.75px]">6M+</div>
                                        </div>
                                        <div className="self-stretch h-[22px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[13px] font-normal font-['Open Sans'] leading-[21.13px]">satisfied customers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[235px] self-stretch justify-start items-start flex">
                                    <div className="w-[43px] h-[35px] pr-2 flex-col justify-start items-start inline-flex">
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.53763 7.75C4.53384 9.59098 4.91051 11.4129 5.64401 13.1014C6.37751 14.79 7.45201 16.3088 8.80013 17.5625C7.4649 18.8263 6.399 20.3471 5.6665 22.0333C4.934 23.7196 4.55001 25.5366 4.53763 27.375V35H31.4626V27.3125C31.4657 25.4716 31.0886 23.65 30.3552 21.9615C29.6217 20.2731 28.5476 18.7542 27.2001 17.5C28.5365 16.2371 29.6032 14.7165 30.3358 13.03C31.0683 11.3436 31.4517 9.52618 31.4626 7.6875V0H4.53763V7.75ZM9.05013 27.3125C9.04791 25.7194 9.47218 24.1547 10.2789 22.7809C11.0856 21.4071 12.2453 20.2743 13.6376 19.5L17.1876 17.5L13.6376 15.5C12.2453 14.7257 11.0856 13.5929 10.2789 12.2191C9.47218 10.8453 9.04791 9.28063 9.05013 7.6875V4.525H26.9376V7.6875C26.9425 9.28117 26.5193 10.8469 25.7124 12.2212C24.9054 13.5954 23.7442 14.7278 22.3501 15.5L18.8001 17.5L22.2876 19.5C23.6817 20.2722 24.8429 21.4046 25.6499 22.7788C26.4568 24.1531 26.88 25.7188 26.8751 27.3125V30.475H8.98763V27.3125H9.05013Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch h-[19px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[15px] font-bold font-['Open Sans'] leading-[18.75px]">&lt;24 hours</div>
                                        </div>
                                        <div className="self-stretch h-[22px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[13px] font-normal font-['Open Sans'] leading-[21.13px]">fast delivery</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[235px] self-stretch justify-start items-start flex">
                                    <div className="w-[43px] h-[35px] pr-2 flex-col justify-start items-start inline-flex">
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9939 0.181641L0.5 8.68943V26.3105L17.9939 34.8183L35.4939 26.3105V8.68943L17.9939 0.181641ZM4.82959 13.4066L15.8322 18.4265V28.9507L4.82959 23.5977V13.4066ZM31.1644 23.5977L20.1799 28.9507V15.6289L7.74221 9.97922L17.9939 4.99565L31.1644 11.3962V23.5977Z" fill="black" />
                                            <path d="M23.2077 14.2362V20.9395L27.507 17.936V11.4749L21.1852 8.59259L16.4741 11.2388L23.2077 14.2362Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch h-[19px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[15px] font-bold font-['Open Sans'] leading-[18.75px]">Free shipping</div>
                                        </div>
                                        <div className="self-stretch h-[22px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[13px] font-normal font-['Open Sans'] leading-[21.13px]">on orders over €300.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[235px] self-stretch justify-start items-start flex">
                                    <div className="w-[43px] h-[35px] pr-2 flex-col justify-start items-start inline-flex">
                                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.375 7.02501C26.7817 5.25708 25.648 3.72019 24.134 2.63135C22.6201 1.5425 20.8023 0.956726 18.9375 0.956726C17.0727 0.956726 15.2549 1.5425 13.741 2.63135C12.227 3.72019 11.0933 5.25708 10.5 7.02501H5.3125L1.625 36H36.25L32.5625 7.02501H27.375ZM18.9375 5.33751C19.6121 5.32631 20.2799 5.47308 20.8877 5.76609C21.4954 6.05911 22.0262 6.49024 22.4375 7.02501H15.4375C15.8534 6.49528 16.3851 6.06778 16.9918 5.77527C17.5984 5.48277 18.264 5.33303 18.9375 5.33751ZM6.625 31.5875L9.1875 11.4H28.75L31.3125 31.5875H6.625Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch h-[19px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[15px] font-bold font-['Open Sans'] leading-[18.75px]">5000+ products</div>
                                        </div>
                                        <div className="self-stretch h-[43px] flex-col justify-start items-start flex">
                                            <div className="text-black text-[13px] font-normal font-['Open Sans'] leading-[21.13px]">the biggest assortment in<br />stock</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] h-[222px] pb-4 flex-col justify-start items-start flex">
                            <div className="w-[100%] h-[206px] pt-3 flex-col justify-start items-center gap-3 flex">
                                <div>
                                    <div className="text-black text-[15px] pb-3 font-bold font-['Open Sans'] leading-none">Discover tried and tested products to help you reach your goals. You want to:</div>
                                    <div className="w-[950px] h-[166px] relative">
                                        <div className="w-[237.50px] h-[83px] p-1 left-0 top-0  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={first} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Lose weight</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[237.50px] top-0  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={second} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Build muscle mass</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[475px] top-0  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={third} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Promote<br />regeneration</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[712.50px] top-0  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={forth} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Improve<br />performance</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-0 top-[83px]  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={fifth} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Snack in a healthy<br />way</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[237.50px] top-[83px]  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={six} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Start exercising at<br />home</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[475px] top-[83px]  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={seven} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Boost immunity</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[237.50px] h-[83px] p-1 left-[712.50px] top-[83px]  flex-col justify-center items-start inline-flex">
                                            <div className="self-stretch h-[75px] bg-[#e9e9e9] flex-col justify-center items-center flex">
                                                <div className="w-[229.50px] grow shrink basis-0 justify-between items-center inline-flex">
                                                    <img className="w-[75px] h-[75px] relative" src={eight} />
                                                    <div className="grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Sportswear</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[720px] py-5 flex-col justify-start items-start flex">
                            <div className="h-[680px] relative">
                                <div className="w-[220px] h-[330px] left-0 top-0 ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">100% Whey Gold Standard -<br />Optimum Nutrition</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">92 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(807)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€17.95</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[240px] top-0 ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">Peanut Butter - GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">94 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(1454)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€2.50</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[480px] top-0 ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">Vitality Complex - GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(476)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€7.95</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[720px] top-0 ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">MOXY Power+ Energy Drink 330<br />ml - GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">86 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(170)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.20</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-0 top-[350px] ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">Vitamin C 1000 mg - GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(273)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€2.60</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[240px] top-[350px] ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">MOXY Daily+ 330 ml -<br />GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(37)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.20</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[480px] top-[350px] ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">Colla Pink - BeastPink</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">87 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(708)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-5 left-0 top-[303px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€11.95</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[220px] h-[330px] left-[720px] top-[350px] ">
                                    <div className="w-[220px] h-10 left-0 top-[223px]  flex-col justify-start items-start inline-flex">
                                        <div className="text-black text-sm font-bold font-['Open Sans'] leading-tight">Protein Chips - GymBeam</div>
                                    </div>
                                    <div className="left-[-7px] top-[275px]  justify-start items-start inline-flex">
                                        <div className="self-stretch justify-start items-start flex">
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-col justify-center items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="w-6 h-6 px-[5.13px] py-[5.44px] justify-center items-center inline-flex" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch py-1 justify-start items-center flex">
                                            <div className="flex-col justify-start items-start inline-flex">
                                                <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">94 %</div>
                                            </div>
                                            <div className="pl-1 flex-col justify-start items-start inline-flex">
                                                <div className="flex-col justify-start items-start flex">
                                                    <div className="text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(119)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[220px] h-3.5 left-0 top-[303px]  justify-start items-start gap-1 inline-flex">
                                        <div className="text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                        <div className="text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.60</div>
                                    </div>
                                    <div className="w-[220px] h-[215px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <img className="h-[215px] relative" src="https://via.placeholder.com/220x215" />
                                        <div className="w-[220px] h-[215px] flex-col justify-center items-start flex">
                                            <div className="h-[215px] pl-[177px] pt-[172px] justify-end items-center inline-flex">
                                                <div className="w-[43px] self-stretch justify-end items-start inline-flex">
                                                    <img className="w-[43px] h-[43px] relative" src="https://via.placeholder.com/43x43" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                            <div className="self-stretch px-1.5 justify-center items-center inline-flex">
                                                <div className="w-8 h-8 pr-[0.33px] py-[4.51px] justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[492.70px] pb-7 flex-col justify-start items-start flex">
                            <div className="self-stretch h-[464.70px] pt-6 flex-col justify-start items-center gap-2 flex">
                                <div className="self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="self-stretch text-black text-xl font-semibold font-['Open Sans'] uppercase leading-tight">Blog</div>
                                </div>
                                <div className="h-[412.70px] flex-col justify-start items-start flex">
                                    <div className="w-[37.59px] h-8 pl-[0.13px] pr-[0.31px] pt-[9.92px] pb-[9.88px] justify-center items-center inline-flex" />
                                    <div className="w-[37.59px] h-8 pl-[0.13px] pr-[0.31px] pt-[9.92px] pb-[9.88px] justify-center items-center inline-flex" />
                                    <div className="self-stretch h-[412.70px]  flex-col justify-start items-center flex">
                                        <div className="w-[7406px] pl-[966px]  justify-start items-start inline-flex">
                                            <div className="w-[322px] self-stretch p-3 flex-col justify-start items-start inline-flex">
                                                <div className="self-stretch h-[347.70px] flex-col justify-start items-start gap-4 flex">
                                                    <img className="h-[155.70px] relative" src="https://via.placeholder.com/298x156" />
                                                    <div className="self-stretch h-44 flex-col justify-start items-start gap-2.5 flex">
                                                        <div className="self-stretch h-10 flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-[15.20px] font-bold font-['Open Sans'] leading-tight">Fitness Recipe: Pasta with Chickpeas<br />and Parmesan</div>
                                                        </div>
                                                        <div className="self-stretch h-[126px] flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-sm font-normal font-['Open Sans'] leading-[21px]">Wondering how to prepare a balanced lunch<br />without meat? Today, we opted for a<br />combination of pasta, chickpeas, and<br />Parmesan. Adding some leafy greens,<br />seasoning to taste, and a delicious lunch is<br />ready.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[322px] self-stretch p-3 flex-col justify-start items-start inline-flex">
                                                <div className="self-stretch h-[285.70px] flex-col justify-start items-start gap-4 flex">
                                                    <img className="h-[155.70px] relative" src="https://via.placeholder.com/298x156" />
                                                    <div className="self-stretch h-[114px] flex-col justify-start items-start gap-2.5 flex">
                                                        <div className="self-stretch h-5 flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-[15.20px] font-bold font-['Open Sans'] leading-tight">Fitness Recipe: Savoury Onion Biscuits</div>
                                                        </div>
                                                        <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-sm font-normal font-['Open Sans'] leading-[21px]">Cookies don't have to be sweet. Today, we've<br />prepared their savoury version with onion,<br />perfect for a snack or evening nibble in front<br />of the TV.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[322px] self-stretch p-3 flex-col justify-start items-start inline-flex">
                                                <div className="self-stretch h-[388.70px] flex-col justify-start items-start gap-4 flex">
                                                    <img className="h-[155.70px] relative" src="https://via.placeholder.com/298x156" />
                                                    <div className="self-stretch h-[217px] flex-col justify-start items-start gap-2.5 flex">
                                                        <div className="self-stretch h-[60px] flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-[15.20px] font-bold font-['Open Sans'] leading-tight">Chlorella: How Does It Help with<br />Detoxifying the Body and Promoting<br />Health?</div>
                                                        </div>
                                                        <div className="self-stretch h-[147px] flex-col justify-start items-start flex">
                                                            <div className="self-stretch text-black text-sm font-normal font-['Open Sans'] leading-[21px]">Chlorella is rightfully considered a superfood.<br />It boasts a high content of vitamins, bioactive<br />substances, as well as high-quality protein. It<br />is mainly used to support the body's natural<br />detoxification processes. What other health<br />benefits it has and how to take it will be<br />revealed in this article.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[443px] bg-black flex-col justify-start items-center inline-flex">
                    <div className="h-[335px] pt-5 pb-4 flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch justify-center items-center inline-flex">
                            <div className="grow shrink basis-0 h-[31px] pl-[184.05px] pr-[184.04px] justify-center items-start flex">
                                <div className="w-[186.61px] pr-[9.61px] justify-start items-center flex">
                                    <div className="self-stretch flex-col justify-start items-end inline-flex">
                                        <div className="self-stretch h-4 flex-col justify-start items-end flex">
                                            <div className="text-right text-white text-sm font-bold font-['Open Sans'] leading-none">A delivery of good energy</div>
                                        </div>
                                        <div className="text-right text-white text-sm font-bold font-['Open Sans'] leading-none">to your email?</div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-[0px] flex">
                                    <div className="grow shrink basis-0 self-stretch pr-2 flex-col justify-center items-start inline-flex">
                                        <div className="self-stretch h-[31px] flex-col justify-start items-start flex">
                                            <div className="self-stretch h-[30px] px-3 py-[5.50px] bg-white justify-center items-start inline-flex">
                                                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                                    <div className="self-stretch text-gray-400 text-sm font-normal font-['Open Sans']">Enter your email address ...</div>
                                                </div>
                                            </div>
                                            <div className="h-[27px] pb-[5px] flex-col justify-start items-start flex">
                                                <div className="self-stretch bg-white justify-start items-start inline-flex">
                                                    <div className="w-[22px] h-[22px] p-[2.49px] justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-[16.23px] pr-[16.24px] py-[5px] bg-[#ff4100] flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch justify-center items-center inline-flex">
                                            <div className="text-center text-white text-sm font-bold font-['Open Sans'] uppercase leading-[21px]">SEND</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-center items-start inline-flex">
                            <div className="w-[223.80px] self-stretch flex-col justify-start items-start inline-flex">
                                <div className="self-stretch h-[238px] flex-col justify-start items-start gap-2.5 flex">
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Contacts</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Business terms and conditions</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Privacy policy</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Refund and Return Policies</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Review Verification</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Join Our Team</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Wholesale</div>
                                    </div>
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Frequently asked questions</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[223.81px] self-stretch flex-col justify-start items-start inline-flex">
                                <div className="self-stretch h-[77.70px] flex-col justify-start items-start gap-3.5 flex">
                                    <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Follow us:</div>
                                    </div>
                                    <div className="self-stretch justify-start items-start inline-flex">
                                        <div className="self-stretch pr-[7.70px] pb-[7.70px] flex-col justify-center items-start inline-flex">
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="self-stretch justify-start items-start inline-flex">
                                                    <div className="w-[35px] h-[35px] p-[5px] bg-white rounded-full justify-center items-center flex">
                                                        <div className="w-[25px] h-[25px] pl-[6.68px] pr-[6.26px] pb-[1.79px] justify-center items-center flex" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch pr-[7.70px] pb-[7.70px] flex-col justify-center items-start inline-flex">
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="self-stretch justify-start items-start inline-flex">
                                                    <div className="w-[35px] h-[35px] p-[5px] bg-white rounded-full justify-center items-center flex">
                                                        <div className="w-[25px] h-[25px] pl-[1.79px] pr-[1.78px] py-[1.79px] justify-center items-center flex" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch pr-[7.70px] pb-[7.70px] flex-col justify-center items-start inline-flex">
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="self-stretch justify-start items-start inline-flex">
                                                    <div className="w-[35px] h-[35px] p-[5px] bg-white rounded-full justify-center items-center flex">
                                                        <div className="w-[25px] h-[25px] px-[2.16px] justify-center items-center flex" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch pr-[7.70px] pb-[7.70px] flex-col justify-center items-start inline-flex">
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="self-stretch justify-start items-start inline-flex">
                                                    <div className="w-[35px] h-[35px] p-[5px] bg-white rounded-full justify-center items-center flex">
                                                        <div className="w-[25px] h-[25px] pl-[3.29px] pr-[3.55px] py-[2.08px] justify-center items-center flex" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[268.57px] self-stretch flex-col justify-start items-start inline-flex">
                                <div className="h-[82px] relative">
                                    <div className="h-[21px] left-0 top-0  flex-col justify-start items-start inline-flex">
                                        <div className="text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Quality approved:</div>
                                    </div>
                                    <div className="w-12 left-0 top-[35px]  bg-white justify-start items-start inline-flex">
                                        <div className="w-12 h-8 justify-center items-center flex">
                                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                                <div className="w-12 h-[33.70px] relative">
                                                    <div className="w-[31.90px] h-[27.55px] left-[8.20px] top-[3.12px] ">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-12 left-[61.64px] top-[35px]  bg-white justify-start items-start inline-flex">
                                        <div className="w-12 h-8 flex-col justify-center items-center inline-flex">
                                            <div className="h-8 pl-px pr-[5.19px] pt-[1.29px] pb-[3.11px] justify-start items-center inline-flex">
                                                <div className="w-[49.34px] h-[27.60px] relative">
                                                    <div className="w-[49.34px] h-[18.96px] left-0 top-0 ">
                                                    </div>
                                                    <div className="w-[27.87px] h-[23px] left-[7.30px] top-[4.60px] ">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-12 left-[123.28px] top-[35px]  bg-white justify-start items-start inline-flex">
                                        <div className="w-12 h-8 justify-center items-center flex">
                                            <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                                <div className="w-[48.94px] h-[34.61px] relative">
                                                    <div className="w-[30.65px] h-[3.92px] left-[17.69px] top-[9.31px] ">
                                                    </div>
                                                    <div className="w-[27.20px] h-[5.88px] left-[19.93px] top-[15px] ">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-12 left-[184.92px] top-[35px]  bg-white justify-start items-start inline-flex">
                                        <div className="w-12 h-8 flex-col justify-center items-center inline-flex">
                                            <div className="w-12 h-[32.16px] relative">
                                                <div className="w-[30.23px] h-[21.18px] left-[8.25px] top-[6.34px] ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[223.81px] self-stretch flex-col justify-start items-start inline-flex">
                                <div className="self-stretch h-[231px] flex-col justify-start items-start flex">
                                    <div className="text-white text-sm font-normal font-['Open Sans'] leading-[21px]">Contact Information:</div>
                                    <div className="self-stretch h-[63px] flex-col justify-start items-start flex">
                                        <div className="self-stretch text-white text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam GmbH<br />Unter den Linden 21,<br />10117 Berlin, Germany</div>
                                    </div>
                                    <div className="self-stretch h-[70px] pt-[30.75px] pb-[20.25px] flex-col justify-start items-start flex">
                                        <div className="w-[130.98px] pr-[0.01px] justify-center items-end inline-flex">
                                            <div className="w-[115.36px] h-[21px] text-white text-sm font-normal font-['Open Sans'] leading-[21px]">+49 30 41736909 </div>
                                            <img className="w-4 h-4 relative" src="https://via.placeholder.com/16x16" />
                                        </div>
                                    </div>
                                    <div className="self-stretch h-14 pt-[16.75px] pb-[20.25px] flex-col justify-start items-start flex">
                                        <div className="w-[134.62px] pr-[0.01px] justify-center items-end inline-flex">
                                            <div className="w-[119px] h-[21px] text-white text-sm font-normal font-['Open Sans'] leading-[21px]">+49 308 3794 400 </div>
                                            <img className="w-4 h-4 relative" src="https://via.placeholder.com/16x16" />
                                        </div>
                                    </div>
                                    <div className="text-white text-sm font-normal font-['Open Sans'] leading-[21px]">info@gymbeam.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[58px] relative bg-white">
                        <div className="w-[88.25px] h-[21px] left-[12.58px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.de</div>
                        <div className="w-[8.07px] h-[21px] left-[108.48px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[88.17px] h-[21px] left-[124.18px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.ba</div>
                        <div className="w-[8.07px] h-[21px] left-[220.01px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[87.99px] h-[21px] left-[235.70px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.bg</div>
                        <div className="w-[8.07px] h-[21px] left-[331.35px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[85.08px] h-[21px] left-[347.05px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.cz</div>
                        <div className="w-[8.07px] h-[21px] left-[439.80px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[85.13px] h-[21px] left-[455.49px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.gr</div>
                        <div className="w-[8.07px] h-[21px] left-[548.30px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[86.12px] h-[21px] left-[563.99px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.hr</div>
                        <div className="w-[8.07px] h-[21px] left-[657.78px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[88.99px] h-[21px] left-[673.48px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.hu</div>
                        <div className="w-[8.07px] h-[21px] left-[770.13px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[83.91px] h-[21px] left-[785.82px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.pl</div>
                        <div className="w-[8.07px] h-[21px] left-[877.40px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[85.96px] h-[21px] left-[893.09px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.ro</div>
                        <div className="w-[8.07px] h-[21px] left-[986.72px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[84.21px] h-[21px] left-[1002.41px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.rs</div>
                        <div className="w-[8.07px] h-[21px] left-[1094.29px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[82.02px] h-[21px] left-[1109.98px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.si</div>
                        <div className="w-[8.07px] h-[21px] left-[1199.67px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[85.84px] h-[21px] left-[1215.37px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.sk</div>
                        <div className="w-[8.07px] h-[21px] left-[1308.88px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[88.18px] h-[21px] left-[1324.57px] top-[8px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.ua</div>
                        <div className="w-[8.07px] h-[21px] left-[607.02px] top-[29px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[80.33px] h-[21px] left-[622.71px] top-[29px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.it</div>
                        <div className="w-[8.07px] h-[21px] left-[710.72px] top-[29px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">|</div>
                        <div className="w-[99.92px] h-[21px] left-[726.41px] top-[29px]  text-center text-black text-sm font-normal font-['Open Sans'] leading-[21px]">GymBeam.com</div>
                    </div>
                    <div className="self-stretch h-[50px] px-[631.23px] py-[14.50px] justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 text-white text-sm font-normal font-['Open Sans'] leading-[21px]">© 2014 - 2024 GymBeam</div>
                    </div>
                </div>
            </div>
        </Stack>
    );

    return (
        <div className="Body w-96 h-96 relative bg-white flex-col justify-start items-start inline-flex">
            <div className="Background w-96 h-40 pt-2.5 bg-white flex-col justify-start items-start inline-flex">
                <div className="Margin w-96 grow shrink basis-0 px-12 flex-col justify-start items-center flex">
                    <div className="Container self-stretch grow shrink basis-0 pt-2.5 flex-col justify-between items-center flex">
                        <div className="Container self-stretch pr-px justify-between items-center inline-flex">
                            <div className="Container justify-start items-start flex">
                                <img className="LinkStoreLogoImage w-60 h-16 relative" src="https://via.placeholder.com/248x70" />
                            </div>
                            <div className="Margin grow shrink basis-0 px-20 flex-col justify-start items-start inline-flex">
                                <div className="Container self-stretch pt-1 pb-0.5 justify-center items-start inline-flex">
                                    <div className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                                        <div className="Container self-stretch justify-center items-start inline-flex">
                                            <div className="Combobox grow shrink basis-0 h-7 px-3.5 py-1 bg-white border-2 border-black flex-col justify-start items-start inline-flex">
                                                <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                                    <div className="SearchEntireStoreHere self-stretch text-gray-400 text-sm font-normal font-['Open Sans']">Search entire store here...</div>
                                                </div>
                                            </div>
                                            <div className="ButtonReset w-7 h-6 px-1 py-0.5 bg-black justify-center items-center flex">
                                                <div className="Svg w-5 h-5 py-0.5 justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Container justify-end items-center flex">
                                <div className="Container justify-start items-center flex">
                                    <div className="Container flex-col justify-start items-start inline-flex">
                                        <div className="Container self-stretch justify-center items-center inline-flex">
                                            <div className="LinkCart w-10 h-6 pl-2 pr-px justify-start items-center flex">
                                                <div className="Svg w-6 h-6 px-0.5 justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container flex-col justify-start items-start inline-flex">
                                        <div className="LinkCart h-12 pl-2 pr-px py-3 justify-start items-center inline-flex">
                                            <div className="Container justify-start items-start flex">
                                                <div className="Svg w-8 h-6 pr-px py-px justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Container self-stretch pt-3 justify-center items-start inline-flex">
                            <div className="NavList justify-start items-center gap-7 flex">
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-start inline-flex">
                                        <div className="SportsNutrition text-black text-base font-bold font-['Open Sans'] uppercase leading-7">Sports Nutrition</div>
                                    </div>
                                </div>
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-start inline-flex">
                                        <div className="HealthyFoods text-black text-base font-bold font-['Open Sans'] uppercase leading-7">Healthy Foods</div>
                                    </div>
                                </div>
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-start inline-flex">
                                        <div className="Sportswear text-black text-base font-bold font-['Open Sans'] uppercase leading-7">Sportswear</div>
                                    </div>
                                </div>
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-start inline-flex">
                                        <div className="WorkoutAccessories text-black text-base font-bold font-['Open Sans'] uppercase leading-7">Workout Accessories</div>
                                    </div>
                                </div>
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-start inline-flex">
                                        <div className="Blog text-black text-base font-bold font-['Open Sans'] uppercase leading-7">Blog</div>
                                    </div>
                                </div>
                                <div className="Line1 w-4 h-px origin-top-left rotate-90 border border-[#d6d6d6]"></div>
                                <div className="Item h-14 pt-3 pb-3.5 flex-col justify-start items-start inline-flex">
                                    <div className="Link justify-start items-center gap-1.5 inline-flex">
                                        <div className="LogoGymex w-4 h-4 justify-center items-center flex" />
                                        <div className="Gymex text-black text-base font-bold font-['Open Sans'] uppercase leading-7">GYMEX</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Container h-96 flex-col justify-start items-start inline-flex">
                <div className="Container self-stretch h-96 pl-96 flex-col justify-start items-center flex">
                    <div className="Container h-96 px-96 flex-col justify-center items-start flex">
                        <div className="Container w-96 grow shrink basis-0 flex-col justify-start items-start flex">
                            <img className="LinkImage h-96 relative" src="https://via.placeholder.com/1425x442" />
                        </div>
                    </div>
                </div>
                <div className="List w-96 px-96 pt-2 justify-start items-start gap-2.5 inline-flex">
                    <div className="ItemButton w-3.5 h-3.5 bg-[#ff4100] rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                    <div className="ItemButton w-3.5 h-3.5 bg-white rounded-lg" />
                </div>
            </div>
            <div className="Container h-96 px-60 flex-col justify-start items-center inline-flex">
                <div className="Container h-96 pb-20 flex-col justify-start items-start flex">
                    <div className="ListMargin self-stretch h-28 py-6 flex-col justify-start items-start flex">
                        <div className="List self-stretch justify-center items-start inline-flex">
                            <div className="Item w-60 self-stretch justify-start items-start flex">
                                <div className="SvgMargin w-11 h-9 pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Svg w-9 h-9 py-0.5 justify-center items-center inline-flex" />
                                </div>
                                <div className="Container self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="Strong6m text-black text-base font-bold font-['Open Sans'] leading-tight">6M+</div>
                                    </div>
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="SatisfiedCustomers text-black text-xs font-normal font-['Open Sans'] leading-snug">satisfied customers</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Item w-60 self-stretch justify-start items-start flex">
                                <div className="SvgMargin w-11 h-9 pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Svg w-9 h-9 px-1 justify-center items-center inline-flex" />
                                </div>
                                <div className="Container self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="Strong24Hours text-black text-base font-bold font-['Open Sans'] leading-tight">24 hours</div>
                                    </div>
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="FastDelivery text-black text-xs font-normal font-['Open Sans'] leading-snug">fast delivery</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Item w-60 self-stretch justify-start items-start flex">
                                <div className="SvgMargin w-11 h-9 pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Svg w-9 h-9 relative" />
                                </div>
                                <div className="Container self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="StrongFreeShipping text-black text-base font-bold font-['Open Sans'] leading-tight">Free shipping</div>
                                    </div>
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="OnOrdersOver30000 text-black text-xs font-normal font-['Open Sans'] leading-snug">on orders over €300.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Item w-60 self-stretch justify-start items-start flex">
                                <div className="SvgMargin w-11 h-9 pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Svg w-9 h-9 justify-center items-center inline-flex" />
                                </div>
                                <div className="Container self-stretch pr-2 flex-col justify-start items-start inline-flex">
                                    <div className="Container self-stretch h-5 flex-col justify-start items-start flex">
                                        <div className="Strong5000Products text-black text-base font-bold font-['Open Sans'] leading-tight">5000+ products</div>
                                    </div>
                                    <div className="Container self-stretch h-11 flex-col justify-start items-start flex">
                                        <div className="TheBiggestAssortmentInStock text-black text-xs font-normal font-['Open Sans'] leading-snug">the biggest assortment in<br />stock</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Margin self-stretch h-56 pb-4 flex-col justify-start items-start flex">
                        <div className="Background self-stretch h-52 pt-3 bg-white flex-col justify-start items-center gap-3 flex">
                            <div className="Heading3 self-stretch h-4 flex-col justify-start items-start flex">
                                <div className="DiscoverTriedAndTestedProductsToHelpYouReachYourGoalsYouWantTo self-stretch text-black text-base font-bold font-['Open Sans'] leading-none">Discover tried and tested products to help you reach your goals. You want to:</div>
                            </div>
                            <div className="List w-96 h-40 relative">
                                <div className="ItemMargin w-60 h-20 p-1 left-0 top-0 absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkLoseWeight w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="LoseWeight self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Lose weight</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[237.50px] top-0 absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkBuildMuscleMass w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="BuildMuscleMass self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Build muscle mass</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[475px] top-0 absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkPromoteRegeneration w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="PromoteRegeneration self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Promote<br />regeneration</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[712.50px] top-0 absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkImprovePerformance w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="ImprovePerformance self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Improve<br />performance</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-0 top-[83px] absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkSnackInAHealthyWay w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="SnackInAHealthyWay self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Snack in a healthy<br />way</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[237.50px] top-[83px] absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkStartExercisingAtHome w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="StartExercisingAtHome self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Start exercising at<br />home</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[475px] top-[83px] absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkBoostImmunity w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="BoostImmunity self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Boost immunity</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ItemMargin w-60 h-20 p-1 left-[712.50px] top-[83px] absolute flex-col justify-center items-start inline-flex">
                                    <div className="Item self-stretch h-20 bg-[#e9e9e9] flex-col justify-center items-center flex">
                                        <div className="LinkSportswear w-56 grow shrink basis-0 justify-between items-center inline-flex">
                                            <img className="Image w-20 h-20 relative" src="https://via.placeholder.com/75x75" />
                                            <div className="Container grow shrink basis-0 pl-2 pr-1 flex-col justify-start items-start inline-flex">
                                                <div className="Sportswear self-stretch text-[#666666] text-xs font-bold font-['Open Sans'] uppercase leading-none">Sportswear</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Margin self-stretch h-96 py-5 flex-col justify-start items-start flex">
                        <div className="Container h-96 relative">
                            <div className="LinkLinkToThe100WheyGoldStandardOptimumNutrition w-56 h-80 left-0 top-0 absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="WheyGoldStandardOptimumNutrition text-black text-sm font-bold font-['Open Sans'] leading-tight">100% Whey Gold Standard -<br />Optimum Nutrition</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">92 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="807 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(807)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="1795 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€17.95</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToThePeanutButterGymbeam w-56 h-80 left-[240px] top-0 absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="PeanutButterGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">Peanut Butter - GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">94 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="1454 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(1454)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="250 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€2.50</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheVitalityComplexGymbeam w-56 h-80 left-[480px] top-0 absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="VitalityComplexGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">Vitality Complex - GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="476 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(476)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="795 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€7.95</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheMoxyPowerEnergyDrink330MlGymbeam w-56 h-80 left-[720px] top-0 absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="MoxyPowerEnergyDrink330MlGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">MOXY Power+ Energy Drink 330<br />ml - GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">86 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="170 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(170)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="120 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.20</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheVitaminC1000MgGymbeam w-56 h-80 left-0 top-[350px] absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="VitaminC1000MgGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">Vitamin C 1000 mg - GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="273 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(273)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="260 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€2.60</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheMoxyDaily330MlGymbeam w-56 h-80 left-[240px] top-[350px] absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="MoxyDaily330MlGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">MOXY Daily+ 330 ml -<br />GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">93 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="37 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(37)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="120 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.20</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheCollaPinkBeastpink w-56 h-80 left-[480px] top-[350px] absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="CollaPinkBeastpink text-black text-sm font-bold font-['Open Sans'] leading-tight">Colla Pink - BeastPink</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">87 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="708 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(708)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Container w-56 h-5 left-0 top-[303px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="1195 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€11.95</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="LinkLinkToTheProteinChipsGymbeam w-56 h-80 left-[720px] top-[350px] absolute">
                                <div className="Container w-56 h-10 left-0 top-[223px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="ProteinChipsGymbeam text-black text-sm font-bold font-['Open Sans'] leading-tight">Protein Chips - GymBeam</div>
                                </div>
                                <div className="Container left-[-7px] top-[275px] absolute justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-start items-start flex">
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                        <div className="Margin self-stretch flex-col justify-center items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="Svg w-6 h-6 px-1.5 py-1.5 justify-center items-center inline-flex" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Container self-stretch py-1 justify-start items-center flex">
                                        <div className="Container flex-col justify-start items-start inline-flex">
                                            <div className=" text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">94 %</div>
                                        </div>
                                        <div className="Margin pl-1 flex-col justify-start items-start inline-flex">
                                            <div className="Container flex-col justify-start items-start flex">
                                                <div className="119 text-[#959595] text-xs font-bold font-['Open Sans'] leading-none">(119)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph w-56 h-3.5 left-0 top-[303px] absolute justify-start items-start gap-1 inline-flex">
                                    <div className="From text-[#ff4100] text-sm font-normal font-['Open Sans'] leading-tight">From</div>
                                    <div className="160 text-[#ff4100] text-sm font-bold font-['Open Sans'] leading-tight">€1.60</div>
                                </div>
                                <div className="Container w-56 h-52 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <img className="Image h-52 relative" src="https://via.placeholder.com/220x215" />
                                    <div className="Container w-56 h-52 flex-col justify-center items-start flex">
                                        <div className="Container h-52 pl-44 pt-44 justify-end items-center inline-flex">
                                            <div className="Container w-11 self-stretch justify-end items-start inline-flex">
                                                <img className="VeganLabelPng w-11 h-11 relative" src="https://via.placeholder.com/43x43" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonAddToCart w-11 h-11 py-1.5 bg-black/40 flex-col justify-start items-start flex">
                                        <div className="Container self-stretch px-1.5 justify-center items-center inline-flex">
                                            <div className="Svg w-8 h-8 pr-px py-1 justify-center items-center flex" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Margin self-stretch h-96 pb-7 flex-col justify-start items-start flex">
                        <div className="Container self-stretch h-96 pt-6 flex-col justify-start items-center gap-2 flex">
                            <div className="Heading2 self-stretch h-5 flex-col justify-start items-start flex">
                                <div className="LinkBlog self-stretch text-black text-xl font-semibold font-['Open Sans'] uppercase leading-tight">Blog</div>
                            </div>
                            <div className="Container h-96 flex-col justify-start items-start flex">
                                <div className="Svg w-9 h-8 px-px py-2.5 justify-center items-center inline-flex" />
                                <div className="Svg w-9 h-8 px-px py-2.5 justify-center items-center inline-flex" />
                                <div className="Container self-stretch h-96 pl-96 flex-col justify-start items-center flex">
                                    <div className="Container w-96 px-96 justify-start items-start inline-flex">
                                        <div className="Container w-80 self-stretch p-3 flex-col justify-start items-start inline-flex">
                                            <div className="LinkFitnessRecipePastaWithChickpeasAndParmesan self-stretch h-80 flex-col justify-start items-start gap-4 flex">
                                                <img className="Image h-40 relative" src="https://via.placeholder.com/298x156" />
                                                <div className="Container self-stretch h-44 flex-col justify-start items-start gap-2.5 flex">
                                                    <div className="Heading3 self-stretch h-10 flex-col justify-start items-start flex">
                                                        <div className="FitnessRecipePastaWithChickpeasAndParmesan self-stretch text-black text-base font-bold font-['Open Sans'] leading-tight">Fitness Recipe: Pasta with Chickpeas<br />and Parmesan</div>
                                                    </div>
                                                    <div className="Container self-stretch h-32 flex-col justify-start items-start flex">
                                                        <div className="WonderingHowToPrepareABalancedLunchWithoutMeatTodayWeOptedForACombinationOfPastaChickpeasAndParmesanAddingSomeLeafyGreensSeasoningToTasteAndADeliciousLunchIsReady self-stretch text-black text-sm font-normal font-['Open Sans'] leading-tight">Wondering how to prepare a balanced lunch<br />without meat? Today, we opted for a<br />combination of pasta, chickpeas, and<br />Parmesan. Adding some leafy greens,<br />seasoning to taste, and a delicious lunch is<br />ready.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Container w-80 self-stretch p-3 flex-col justify-start items-start inline-flex">
                                            <div className="LinkFitnessRecipeSavouryOnionBiscuits self-stretch h-72 flex-col justify-start items-start gap-4 flex">
                                                <img className="Image h-40 relative" src="https://via.placeholder.com/298x156" />
                                                <div className="Container self-stretch h-28 flex-col justify-start items-start gap-2.5 flex">
                                                    <div className="Heading3 self-stretch h-5 flex-col justify-start items-start flex">
                                                        <div className="FitnessRecipeSavouryOnionBiscuits self-stretch text-black text-base font-bold font-['Open Sans'] leading-tight">Fitness Recipe: Savoury Onion Biscuits</div>
                                                    </div>
                                                    <div className="Container self-stretch h-20 flex-col justify-start items-start flex">
                                                        <div className="CookiesDonTHaveToBeSweetTodayWeVePreparedTheirSavouryVersionWithOnionPerfectForASnackOrEveningNibbleInFrontOfTheTv self-stretch text-black text-sm font-normal font-['Open Sans'] leading-tight">Cookies don't have to be sweet. Today, we've<br />prepared their savoury version with onion,<br />perfect for a snack or evening nibble in front<br />of the TV.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Container w-80 self-stretch p-3 flex-col justify-start items-start inline-flex">
                                            <div className="LinkChlorellaHowDoesItHelpWithDetoxifyingTheBodyAndPromotingHealth self-stretch h-96 flex-col justify-start items-start gap-4 flex">
                                                <img className="Image h-40 relative" src="https://via.placeholder.com/298x156" />
                                                <div className="Container self-stretch h-56 flex-col justify-start items-start gap-2.5 flex">
                                                    <div className="Heading3 self-stretch h-14 flex-col justify-start items-start flex">
                                                        <div className="ChlorellaHowDoesItHelpWithDetoxifyingTheBodyAndPromotingHealth self-stretch text-black text-base font-bold font-['Open Sans'] leading-tight">Chlorella: How Does It Help with<br />Detoxifying the Body and Promoting<br />Health?</div>
                                                    </div>
                                                    <div className="Container self-stretch h-36 flex-col justify-start items-start flex">
                                                        <div className="ChlorellaIsRightfullyConsideredASuperfoodItBoastsAHighContentOfVitaminsBioactiveSubstancesAsWellAsHighQualityProteinItIsMainlyUsedToSupportTheBodySNaturalDetoxificationProcessesWhatOtherHealthBenefitsItHasAndHowToTakeItWillBeRevealedInThisArticle self-stretch text-black text-sm font-normal font-['Open Sans'] leading-tight">Chlorella is rightfully considered a superfood.<br />It boasts a high content of vitamins, bioactive<br />substances, as well as high-quality protein. It<br />is mainly used to support the body's natural<br />detoxification processes. What other health<br />benefits it has and how to take it will be<br />revealed in this article.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer h-96 bg-black flex-col justify-start items-center inline-flex">
                <div className="Container h-80 pt-5 pb-4 flex-col justify-start items-start gap-5 flex">
                    <div className="Form self-stretch justify-center items-center inline-flex">
                        <div className="Container grow shrink basis-0 h-8 px-48 justify-center items-start flex">
                            <div className="LabelMargin w-48 pr-2.5 justify-start items-center flex">
                                <div className="Label self-stretch flex-col justify-start items-end inline-flex">
                                    <div className="Container self-stretch h-4 flex-col justify-start items-end flex">
                                        <div className="ADeliveryOfGoodEnergy text-right text-white text-sm font-bold font-['Open Sans'] leading-none">A delivery of good energy</div>
                                    </div>
                                    <div className="ToYourEmail text-right text-white text-sm font-bold font-['Open Sans'] leading-none">to your email?</div>
                                </div>
                            </div>
                            <div className="Container self-stretch justify-start items-start gap-px flex">
                                <div className="Margin grow shrink basis-0 self-stretch pr-2 flex-col justify-center items-start inline-flex">
                                    <div className="Container self-stretch h-8 flex-col justify-start items-start flex">
                                        <div className="Input self-stretch h-7 px-3 py-1.5 bg-white justify-center items-start inline-flex">
                                            <div className="Container grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                                <div className="EnterYourEmailAddress self-stretch text-gray-400 text-sm font-normal font-['Open Sans']">Enter your email address ...</div>
                                            </div>
                                        </div>
                                        <div className="Container h-7 pb-1 flex-col justify-start items-start flex">
                                            <div className="Background self-stretch bg-white justify-start items-start inline-flex">
                                                <div className="Svg w-5 h-5 p-0.5 justify-center items-center flex" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Button px-4 py-1 bg-[#ff4100] flex-col justify-start items-start inline-flex">
                                    <div className="Container self-stretch justify-center items-center inline-flex">
                                        <div className="Send text-center text-white text-sm font-bold font-['Open Sans'] uppercase leading-tight">SEND</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Container self-stretch justify-center items-start inline-flex">
                        <div className="Container w-56 self-stretch flex-col justify-start items-start inline-flex">
                            <div className="List self-stretch h-60 flex-col justify-start items-start gap-2.5 flex">
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkContacts self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Contacts</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkBusinessTermsAndConditions self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Business terms and conditions</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkPrivacyPolicy self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Privacy policy</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkRefundAndReturnPolicies self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Refund and Return Policies</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkReviewVerification self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Review Verification</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkJoinOurTeam self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Join Our Team</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkWholesale self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Wholesale</div>
                                </div>
                                <div className="Item self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="LinkFrequentlyAskedQuestions self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Frequently asked questions</div>
                                </div>
                            </div>
                        </div>
                        <div className="Container w-56 self-stretch flex-col justify-start items-start inline-flex">
                            <div className="Container self-stretch h-20 flex-col justify-start items-start gap-3.5 flex">
                                <div className="Heading4 self-stretch h-5 flex-col justify-start items-start flex">
                                    <div className="FollowUs self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">Follow us:</div>
                                </div>
                                <div className="List self-stretch justify-start items-start inline-flex">
                                    <div className="ItemMargin self-stretch pr-2 pb-2 flex-col justify-center items-start inline-flex">
                                        <div className="Item flex-col justify-start items-start flex">
                                            <div className="Link self-stretch justify-start items-start inline-flex">
                                                <div className="Background w-9 h-9 p-1 bg-white rounded-full justify-center items-center flex">
                                                    <div className="Svg w-6 h-6 px-1.5 pb-0.5 justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ItemMargin self-stretch pr-2 pb-2 flex-col justify-center items-start inline-flex">
                                        <div className="Item flex-col justify-start items-start flex">
                                            <div className="Link self-stretch justify-start items-start inline-flex">
                                                <div className="Background w-9 h-9 p-1 bg-white rounded-full justify-center items-center flex">
                                                    <div className="Svg w-6 h-6 px-0.5 py-0.5 justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ItemMargin self-stretch pr-2 pb-2 flex-col justify-center items-start inline-flex">
                                        <div className="Item flex-col justify-start items-start flex">
                                            <div className="Link self-stretch justify-start items-start inline-flex">
                                                <div className="Background w-9 h-9 p-1 bg-white rounded-full justify-center items-center flex">
                                                    <div className="Svg w-6 h-6 px-0.5 justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ItemMargin self-stretch pr-2 pb-2 flex-col justify-center items-start inline-flex">
                                        <div className="Item flex-col justify-start items-start flex">
                                            <div className="Link self-stretch justify-start items-start inline-flex">
                                                <div className="Background w-9 h-9 p-1 bg-white rounded-full justify-center items-center flex">
                                                    <div className="Svg w-6 h-6 px-1 py-0.5 justify-center items-center flex" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Container w-64 self-stretch flex-col justify-start items-start inline-flex">
                            <div className="Container h-20 relative">
                                <div className="Heading4 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div className="QualityApproved text-white text-sm font-normal font-['Open Sans'] leading-tight">Quality approved:</div>
                                </div>
                                <div className="ImageBackground w-12 left-0 top-[35px] absolute bg-white justify-start items-start inline-flex">
                                    <div className="ImageFill w-12 h-8 justify-center items-center flex">
                                        <div className="Image grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                            <div className="Group w-12 h-8 relative">
                                                <div className="G3880 w-8 h-7 left-[8.20px] top-[3.12px] absolute">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ImageBackground w-12 left-[61.64px] top-[35px] absolute bg-white justify-start items-start inline-flex">
                                    <div className="ImageFill w-12 h-8 flex-col justify-center items-center inline-flex">
                                        <div className="Image h-8 pl-px pr-1.5 pt-px pb-1 justify-start items-center inline-flex">
                                            <div className="Group w-12 h-7 relative">
                                                <div className="G1843 w-12 h-5 left-0 top-0 absolute">
                                                </div>
                                                <div className="G1854 w-7 h-6 left-[7.30px] top-[4.60px] absolute">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ImageBackground w-12 left-[123.28px] top-[35px] absolute bg-white justify-start items-start inline-flex">
                                    <div className="ImageFill w-12 h-8 justify-center items-center flex">
                                        <div className="Image grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                            <div className="G1613 w-12 h-9 relative">
                                                <div className="Text1625 w-8 h-1 left-[17.69px] top-[9.31px] absolute">
                                                </div>
                                                <div className="Text16250 w-7 h-1.5 left-[19.93px] top-[15px] absolute">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ImageBackground w-12 left-[184.92px] top-[35px] absolute bg-white justify-start items-start inline-flex">
                                    <div className="ImageFill w-12 h-8 flex-col justify-center items-center inline-flex">
                                        <div className="Image w-12 h-8 relative">
                                            <div className="G2913 w-8 h-5 left-[8.25px] top-[6.34px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Container w-56 self-stretch flex-col justify-start items-start inline-flex">
                            <div className="Heading4 self-stretch h-56 flex-col justify-start items-start flex">
                                <div className="ContactInformation text-white text-sm font-normal font-['Open Sans'] leading-tight">Contact Information:</div>
                                <div className="Container self-stretch h-16 flex-col justify-start items-start flex">
                                    <div className="GymbeamGmbhUnterDenLinden2110117BerlinGermany self-stretch text-white text-sm font-normal font-['Open Sans'] leading-tight">GymBeam GmbH<br />Unter den Linden 21,<br />10117 Berlin, Germany</div>
                                </div>
                                <div className="Container self-stretch h-16 pt-8 pb-5 flex-col justify-start items-start flex">
                                    <div className="Link w-32 pr-px justify-center items-end inline-flex">
                                        <div className="493041736909 w-28 h-5 text-white text-sm font-normal font-['Open Sans'] leading-tight">+49 30 41736909 </div>
                                        <img className="F1ec1f1e72xPng w-4 h-4 relative" src="https://via.placeholder.com/16x16" />
                                    </div>
                                </div>
                                <div className="Container self-stretch h-14 pt-4 pb-5 flex-col justify-start items-start flex">
                                    <div className="Link w-32 pr-px justify-center items-end inline-flex">
                                        <div className="493083794400 w-28 h-5 text-white text-sm font-normal font-['Open Sans'] leading-tight">+49 308 3794 400 </div>
                                        <img className="F1e91f1ea2xPng w-4 h-4 relative" src="https://via.placeholder.com/16x16" />
                                    </div>
                                </div>
                                <div className="LinkInfoGymbeamCom text-white text-sm font-normal font-['Open Sans'] leading-tight">info@gymbeam.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ParagraphBackground h-14 relative bg-white">
                    <div className="LinkGymbeamDeGymbeamDe w-24 h-5 left-[12.58px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.de</div>
                    <div className=" w-2 h-5 left-[108.48px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamBaGymbeamBa w-24 h-5 left-[124.18px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.ba</div>
                    <div className=" w-2 h-5 left-[220.01px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamBgGymbeamBg w-20 h-5 left-[235.70px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.bg</div>
                    <div className=" w-2 h-5 left-[331.35px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamCzGymbeamCz w-20 h-5 left-[347.05px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.cz</div>
                    <div className=" w-2 h-5 left-[439.80px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamGrGymbeamGr w-20 h-5 left-[455.49px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.gr</div>
                    <div className=" w-2 h-5 left-[548.30px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamHrGymbeamHr w-20 h-5 left-[563.99px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.hr</div>
                    <div className=" w-2 h-5 left-[657.78px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamHuGymbeamHu w-24 h-5 left-[673.48px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.hu</div>
                    <div className=" w-2 h-5 left-[770.13px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamPlGymbeamPl w-20 h-5 left-[785.82px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.pl</div>
                    <div className=" w-2 h-5 left-[877.40px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamRoGymbeamRo w-20 h-5 left-[893.09px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.ro</div>
                    <div className=" w-2 h-5 left-[986.72px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamRsGymbeamRs w-20 h-5 left-[1002.41px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.rs</div>
                    <div className=" w-2 h-5 left-[1094.29px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamSiGymbeamSi w-20 h-5 left-[1109.98px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.si</div>
                    <div className=" w-2 h-5 left-[1199.67px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamSkGymbeamSk w-20 h-5 left-[1215.37px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.sk</div>
                    <div className=" w-2 h-5 left-[1308.88px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamUaGymbeamUa w-24 h-5 left-[1324.57px] top-[8px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.ua</div>
                    <div className=" w-2 h-5 left-[607.02px] top-[29px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamItGymbeamIt w-20 h-5 left-[622.71px] top-[29px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.it</div>
                    <div className=" w-2 h-5 left-[710.72px] top-[29px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">|</div>
                    <div className="LinkGymbeamComGymbeamCom w-24 h-5 left-[726.41px] top-[29px] absolute text-center text-black text-sm font-normal font-['Open Sans'] leading-tight">GymBeam.com</div>
                </div>
                <div className="Container self-stretch h-12 px-96 py-3.5 justify-center items-center inline-flex">
                    <div className="20142024Gymbeam grow shrink basis-0 text-white text-sm font-normal font-['Open Sans'] leading-tight">© 2014 - 2024 GymBeam</div>
                </div>
            </div>
        </div>
    );
}

import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6"; 

const Navigation = () => {

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);                 // useState

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown></FaAngleDown></span>                 //
                            </Button>

                            <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`} >
                                <ul>
                                    <li><Link to='/'><Button>MEN <FaAngleRight className='ml-auto'/> </Button></Link>
                                        <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to='/'><Button>WOMEN <FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to='/'><Button>BEAUTY</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>WATCHES</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>KIDS</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>GIFT</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>MEN</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>WOMEN</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>BEAUTY</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>WATCHES</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>KIDS</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                    <li><Link to='/'><Button>GIFT</Button></Link>
                                    {/* <div className='submenu'>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                            <Link to='/'><Button>Clothing</Button></Link>
                                            <Link to='/'><Button>Footwear</Button></Link>
                                            <Link to='/'><Button>Watches</Button></Link>
                                        </div> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to='/'><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to='/'><Button>MEN</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to='/'><Button>WOMEN</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to='/'><Button>BEAUTY</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to='/'><Button>WATCHES</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to='/'><Button>KIDS</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>GIFT</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>BLOG</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>CONTACT</Button></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )

}

export default Navigation;

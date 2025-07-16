import React, { useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { useContext } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props}></Slide>;                /*for slide animation of dialog (location)*/
});

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);                     /*for modal*/
    const [selectedTab, setselectedTab] = useState(null);                       /*for selected tab*/

    const [countryList, setCountryList] = useState([]);                        /*for country list*/

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setselectedTab(index);
        setIsOpenModal(false);
        context.setselectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList);
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        } else {
            setCountryList(context.countryList);
        }




    }

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{context.selectedCountry !== "" ? 
                    context.selectedCountry.length > 10 ? context.selectedCountry?.substr(0,10) +'...' : 
                    context.selectedCountry : 'Select Location'}</span>
                </div>
                <span className="ml-auto"><FaAngleDown></FaAngleDown></span>
            </Button>


            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModal(false)}><MdClose></MdClose></Button>

                <div className='headerSearch w-100' >
                    <input type='text' placeholder='Search your area...' onChange={filterList}></input>
                    <Button><IoIosSearch></IoIosSearch></Button>
                </div >

                <ul className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                    className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }

                </ul>






            </Dialog>




        </>
    )

}

export default CountryDropdown;
import Button from '@mui/material/Button';
import { IoIosSearch } from 'react-icons/io';
// import { IoIosSearch } from 'react-icons/io';



const SearchBox = () => {                                   // SearchBox

    return (
        <div className='headerSearch ml-3 mr-3' >
            <input type='text' placeholder='Search For Products...'></input>
            <Button><IoIosSearch></IoIosSearch></Button>
        </div >
    )

}

export default SearchBox;
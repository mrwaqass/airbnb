import React, {useState} from 'react'
import {
    SearchIcon,
    ExpandMoreIcon,
    LanguageIcon,
    DateRangeIcon,
} from '../GetIcons'
import {Avatar, IconButton, Tooltip, Search, Button} from '../GetComponents'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    return (
        <div className='header'>
            <div className='headerLeft'>
                <Link to='/'>
                    <img
                        className='headerLogo'
                        src='images/airbnbLogo.png'
                        alt='airbnb logo'
                    />
                </Link>
            </div>
            <div className='headerCenter'>
                <div className='headerInputContainer'>
                    {isDatePickerOpen && (
                        <div className='datePickerConatiner'>
                            <Search setIsDatePickerOpen={setIsDatePickerOpen} />
                        </div>
                    )}
                    <input type='text' placeholder='Start your search' />
                    <SearchIcon className='colorPrimary' />
                </div>
                <div className='headerDatePickerContainer'>
                    <Tooltip
                        title={
                            <p className='tooltip'>
                                {isDatePickerOpen
                                    ? 'Hide Dates'
                                    : 'Search Dates'}
                            </p>
                        }
                        aria-label='select-dates'
                    >
                        <DateRangeIcon
                            className='iconCustom'
                            onClick={() =>
                                setIsDatePickerOpen(!isDatePickerOpen)
                            }
                        />
                    </Tooltip>
                </div>
            </div>
            <div className='headerRight'>
                <Link to='/becomehost'>
                    <Button className='btn btnPrimaryOutlined'>
                        Become a host
                    </Button>
                </Link>
                {/* <button className='btn btnPrimary'>
                    Become a host
                </button> */}
                <LanguageIcon />
                <ExpandMoreIcon />
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>
        </div>
    )
}

export default Header

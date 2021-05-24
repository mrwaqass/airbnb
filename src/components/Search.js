import React, {useState} from 'react'
import './Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import {People} from '../GetIcons'
import {Button} from '@material-ui/core'

import {useHistory} from 'react-router-dom'

// Data Picker Component
function Search({setIsDatePickerOpen}) {
    const history = useHistory()
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }
    const handleSelect = ranges => {
        console.log(ranges)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const handleSearchBtn = () => {
        history.push('/search')
        setIsDatePickerOpen(false)
    }

    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h3 className='MT1 MB2 searchHeading'>
                <People />
                <span className='ML05'>Number of guests</span>
            </h3>
            <div className='searchInputArea'>
                <input
                    type='number'
                    name='guests'
                    id='guests'
                    min={0}
                    defaultValue={2}
                />
                <Button className='btn btnPrimary' onClick={handleSearchBtn}>
                    Search Airbnb
                </Button>
            </div>
        </div>
    )
}

export default Search

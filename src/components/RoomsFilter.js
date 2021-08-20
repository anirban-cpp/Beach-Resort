import React,{ useContext } from 'react';
import { RoomContext } from '../Context/context';
import Title from '../components/Title';

// get all unique room types

const getUnique = (items,value) => {
    return[...new Set(items.map(item => item[value]))];
}

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get Unique attributes
    let types = getUnique(rooms,'type');
    let guests = getUnique(rooms,'capacity');

    // add all in this array
    types=['all',...types];

    // map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    guests = guests.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='Search rooms'/>
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select 
                        name="type"
                        id="type" 
                        value={type} 
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*end of select type*/}

                {/*guests*/}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select 
                        name="capacity"
                        id="capacity" 
                        value={capacity} 
                        className="form-control"
                        onChange={handleChange}
                    >
                        {guests}
                    </select>
                </div>
                {/*end of guests filter*/}

                {/*price*/}
                <div className='form-group'>
                    <label htmlFor='price'>Room Price ₹{price}</label>
                    <input 
                        type='range'
                        name="price" 
                        min={minPrice} 
                        max={maxPrice} 
                        id="price" 
                        value={price} 
                        onChange={handleChange} 
                        className="form-control"
                    />
                </div>
                {/*end of price filter*/}

                {/*Size*/}
                <div className='form-group'>
                    <label htmlFor='size'>Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                            value={minSize} onChange={handleChange}
                            className="size-input"
                        />
                        <input type="number" name="maxSize" id="size"
                            value={maxSize} onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/*end of Size filter*/}

                {/* extras */}
                <div className='form-group'>
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                            onChange={handleChange}
                            checked={breakfast}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                            onChange={handleChange}
                            checked={pets}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras filter */}
            </form>
        </section>
    )
}

export default RoomsFilter

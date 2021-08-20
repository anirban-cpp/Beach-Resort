import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
//import { RoomConsumer } from '../Context/context'
import { withRoomConsumer } from '../Context/context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context

    if(loading){
        return <Loading/>
    }

    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    );    
}

export default withRoomConsumer(RoomContainer);

/*function RoomContainer() {
    return (
        <RoomConsumer>
        {
            (value) => {
                
            const {loading, sortedRooms, rooms} = value

            if(loading){
                return <Loading/>
            }

            return (
                <div>
                    Rooms Container
                    <RoomsFilter rooms={rooms}/>
                    <RoomsList rooms={sortedRooms}/>
                </div>
            );
        }}
        </RoomConsumer>
    )
}

export default RoomContainer*/

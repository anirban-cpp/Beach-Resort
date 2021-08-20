import React, { Component } from 'react';

import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../Context/context';
import { Link } from 'react-router-dom';
import StyledHero from '../styled-components/StyledHero';

export default class SingleRoom extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            route: this.props.match.params.route,
            defaultBcg  // meaning defaultBcg: this.defaultBcg
        };
    }

    static contextType = RoomContext;

//    componentDidMount(){

//    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.route);
        if(!room) {
            return(
                <div className='error'>
                    <h3>This room does not exist...</h3>
                    <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
                </div>
            )
        }
        else {
            const { name,description,capacity,size,price,extras,breakfast,pets,images } = room;
            const [BcgImg,...otherimages] = images;
            return (
                <>
                    <StyledHero image={BcgImg || this.state.defaultBcg}>
                        <Banner title={`${name} room`}>
                            <Link to='/rooms' className='btn-primary'>
                                back to rooms
                            </Link>
                        </Banner>
                    </StyledHero>
                    <section className='single-room'>
                        <div className='single-room-images'>
                            {
                                otherimages.map((item,index) => (
                                    <img key={index} src={item} alt={name}/>
                                ))
                            }
                        </div>
                        <div className='single-room-info'>
                            <article className='desc'>
                                <h3>details</h3>
                                <p>{description}</p>
                            </article>
                            <article className='info'>
                                <h3>info</h3>
                                <h6>price: ₹{price}</h6>
                                <h6>size: {size} sq ft</h6>
                                <h6>max capacity: { capacity > 1 ? `${capacity} people`:`${capacity} person` }</h6>
                                <h6>pets: { pets ? "pets allowed":"No pets allowed" }</h6>
                                <h6>breakfast: { breakfast && "Complimentary breakfast included" }</h6>
                            </article>
                        </div>
                        <section className='room-extras'>
                            <h6>extras</h6>
                            <ul className='extras'>
                                {
                                    extras.map((item,index) => (
                                        <li key={index}>- {item}</li>
                                    ))
                                }
                            </ul>
                        </section>
                    </section>
                </>
            )
        }
    }
}

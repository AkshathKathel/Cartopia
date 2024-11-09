import './Booking.css'
import creta from './assets/creta.jpeg'
import crysta from './assets/crysta.jpeg'
import avatar from './assets/avatar.png'
import luggage from './assets/luggage.png'
import setting from './assets/setting.png'
import freezing from './assets/freezing.png'
import wishlist from './assets/wishlist.png'
import history from './assets/history.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function EnterInfo(){
    return(
        <div className="booking">
                    <div>
                        <div className='summary'>
                            <p>Pickup date</p>
                            <p>qwerty</p>
                            <p>Drop date</p>
                            <p>qwerty</p>
                            <p>Location</p>
                            <p>qwerty</p>
                        </div>
                        <div className='buttonsdiv'>
                            <button className='sort'>Search</button>
                            <button className='mod'>Modify</button>
                        </div>
                    </div>
                    <div>
                        <div className='wishlist_sec'>
                            <div>
                                <img src={wishlist} alt="" />
                                <p>Wishlist</p>
                            </div>
                            <div>
                                <img src={history} alt="" />
                                <p>Previously chosen</p>
                            </div>
                        </div>
                        <div className='sortby'>
                            <div>
                                <p>sort by</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div>
                            <label for="carBrand">Car Brand</label>
                            <input type="text" id="carBrand"/>
                        </div>
                        <div>
                            <label for="location">Pick up location</label>
                            <input type="text" id="location"/>
                        </div>
                        <div>
                            <label for="pickup">Pick up date</label>
                            <input type="text" id="pickup"/>
                        </div>
                        <div>
                            <label for="dropoff">Drop off date</label>
                            <input type="text" id="dropoff"/>
                        </div>
                        <div>
                            <button>Search</button>
                        </div>
                    </div> */}
                </div>
    );
}

function One(props){
    const [checked,setChecked] = useState(
        new Array(props.data.length).fill(false)
    )

    console.log(checked);

    function handleChange(position){
        const finalArray = checked.map((item,index)=> position===index?!item:item)
        // console.log(position);
        setChecked(finalArray);
    }
    const cartypelist = props.data.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox" 
                    name={props.var} 
                    value={car} 
                    id=""
                    onChange={()=>{handleChange(index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })
    return(<div className="car type">
                <button type="button" className="collapsible">{props.name}</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {cartypelist}
                    </ul>
                </div>
            </div>);
}
function Filter(){

    const cartype = ["Economy","Compact","Midsize","Standard","Full size","Minivan","SUV","Van"];
    const passengerNo = ["1 to 2 Passengers", "3 to 5 Passengers", "6 or more"];
    const bagNo = ["1 to 2 bags","3 to 4 bags","5 or more"];
    const mode = ["Automatic","Manual"];
    const reviews = ["Excellent", "Good", "Average"];

    const[checked,setChecked] = useState(
        new Array(
            new Array(cartype.length).fill(false),
            new Array(passengerNo.length).fill(false),
            new Array(bagNo.length).fill(false),
            new Array(mode.length).fill(false),
            new Array(reviews.length).fill(false)
        )
    )
    console.log(checked);
    console.log(checked[0]);
    function handleChange(list_number,position){
        console.log(list_number,"....",position);
        console.log(checked[list_number]);
        const updatelist = checked[list_number].map((item,index)=> position===index?!item:item)

        const finalArray = checked.map((arr,i)=>list_number === i?updatelist:arr);
        setChecked(finalArray)
    }
    const cartypelist = cartype.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox" 
                    id=""
                    onChange={()=>{handleChange(0,index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })

    const PassengerNoList = passengerNo.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox"  
                    id=""
                    onChange={()=>{handleChange(1,index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })

    const bagNoList = bagNo.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox"  
                    id=""
                    onChange={()=>{handleChange(2,index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })

    const modeList = mode.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox"  
                    id=""
                    onChange={()=>{handleChange(3,index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })

    const reviewList= reviews.map((car,index)=>{
        return (<li key={car}>
            <div>
            <div>
                <input 
                    type="checkbox"  
                    id=""
                    onChange={()=>{handleChange(4,index)}}
                />
            </div>
                <p>{car}</p>
                <p>23</p>
            </div>
        </li>);
    })
    return(
        <div className="filter_sec">
                <p id="filter">Filter</p>

                <div className="car type">
                <button type="button" className="collapsible">Car Type</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {cartypelist}
                    </ul>
                </div>
                </div>

                <div className="car type">
                <button type="button" className="collapsible">No of Passengers</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {PassengerNoList}
                    </ul>
                </div>
                </div>

                <div className="car type">
                <button type="button" className="collapsible">No of Bags</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {bagNoList}
                    </ul>
                </div>
                </div>

                <div className="car type">
                <button type="button" className="collapsible">Transmission</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {modeList}
                    </ul>
                </div>
                </div>
                
                <div className="car type">
                <button type="button" className="collapsible">Reviews</button>
                <div className="content">
                    <ul style={{padding: 0}}>
                        {reviewList}
                    </ul>
                </div>
                </div>
            </div> 
    );
}
function CarCard(props){
    return(
        <div className="car_card">

                    <div className="carimage">
                        <img src={props.imgsrc} alt=""/>
                    </div>

                    <div className="description">
                        <div>
                            <p>{props.name}</p> <span id="car_type_span">SUV</span>
                        </div>
                        <div>
                            <div>
                                <img src={avatar} alt=""/>
                                5
                            </div>
                            <div>
                                <img src={luggage} alt=""/>
                                1
                            </div>
                            <div>
                                <img src={setting} alt=""/>
                                Auto
                            </div>
                            <div>
                                <img src={freezing} alt=""/>
                                A/C
                            </div>
                        </div>
                        <div>
                            <ul style={{padding: 0}}>
                                <li>Free cancellation</li>
                                <li>Price guarantee</li>
                            </ul>
                            <ul>
                                <li>Instantly Confirmed</li>
                                <li>Third party liability</li>
                            </ul>
                        </div>
                        <div>
                            <span id="rating">4.7</span>
                            <p>Excellent</p>
                        </div>
                    </div>

                    <div className="price">
                        <div></div>
                        <div><button><Link to="confirmation">Book Now</Link></button></div>
                    </div>
                </div>
    );
}
function CarListing(){
    return(
        <div className="catalogue">
            <EnterInfo/>
                <CarCard 
                    name={"Hyundai Creta"} 
                    imgsrc = {creta}
                />
                <CarCard 
                    name={"Innova Crysta "} 
                    imgsrc = {crysta}
                />
        </div>
    );
}
function Booking(){

    return(
        <div className='outerbody'>
            <div className='mainbody'>
                <Filter/>
                <CarListing/>
            </div>
        </div>
    )
}


export default Booking;
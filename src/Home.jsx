import deal from './assets/deal.png'
import flexibility from './assets/flexibility.png'
import transparency from './assets/transparency.png'
import maps from './assets/maps.png'
import place from './assets/place.png'
import car from './assets/car.png'
import calendar from './assets/calendar.png'
import './Home.css'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

         
function Features(){
    return(
        <div className="features">
                <p style={{ textAlign: 'center', fontSize: '40px' }}>What we offer</p>
                <div>
                    <div className="feature_card">
                        <img className="feature_img" src={deal} alt=""/>
                        <p><strong>Search for the best car deals</strong>
                            Compare deals from car hire and rental companies in 70,000+ locations</p>
                    </div>
                    <div className="feature_card">
                        <img className="feature_img" src={flexibility} alt=""/>
                        <p><b>Book with flexibility</b>
                            Use our filter to find car offers with free cancellation, unlimited mileage and other useful features.</p>
                    </div>
                    <div className="feature_card">
                        <img className="feature_img" src={transparency} alt=""/>
                        <p><b>Price transparency</b>
                            See the total cost up front so there are no surprises.</p>
                    </div>
                    <div className="feature_card">
                        <img className="feature_img" src={maps} alt=""/>
                        <p><b>Use our map view to explore</b>
                            Find the best car rental locations using the map, or find offers from local car agencies.</p>
                    </div>
                </div>
            </div>
    );
}
function Rentform(){
    return(
    <div id="rentform">
            <div id="one">
                
                <div>
                    <p>location</p>
                    <div className="date"><img src={place} alt=""/>
                        <input type="search" name="" id="" placeholder="location" style={{width: 120}}/>
                    </div>
                </div>

                <div>
                    <p>car type</p>
                    <div className="date">
                        <img src={car} alt=""/>
                        <select name="" id="" placeholder="select ">
                            <option value="Sedan">Sedan</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="SUV">SUV</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="two">
                <div>
                    <p>pickup</p>
                    <div className="date">
                        <img src={calendar} alt=""/>
                        <input type="date" name="" id=""/>
                    </div>
                </div>
                <div>
                    <p>return</p>
                    <div className="date">
                        <img src={calendar} alt=""/>
                        <input type="date" name="" id=""/>
                    </div>
                </div>
                <div>
                    <button id="submit"><Link to="booking">Book Now</Link></button>
                </div>
            </div>
        </div>
    );
}
function QandA(){
    const ques = ["How old do I need to be to rent a car?", 
                  "What documents do I need to rent a car?",
                  "Is insurance included in the rental price?",
                  "What is the fuel policy, and how are tolls and traffic violations handled?"
                ];
    const ans = ["To rent a car, you typically need to be at least 21 years old. However, age requirements may vary by rental company, and additional fees might apply for renters under 25. It's essential to check the specific age policy of the rental agency you choose.",
                  "To rent a car, you'll need a valid driver's license, a major credit card in your name, and an additional form of identification, such as a passport. Make sure to bring these documents with you when picking up your rental vehicle.",
                  "Basic insurance coverage is typically included in the rental price, but it may have limitations. Consider purchasing additional coverage for comprehensive protection, especially if you want to reduce your liability in case of an accident. Review the insurance options available at the time of booking.",
                  "Rental cars usually come with a full tank of gas and should be returned with a full tank. Some companies offer a pre-purchase fuel option. Regarding tolls and traffic violations, renters are generally responsible for these during the rental period. The rental company may charge these fees to your credit card, so it's important to be aware of the policies in place."
                ];
    function openAnswer(index){
        const add = `.answer${index}`
        const ele = document.querySelector(add);
        ele.classList.toggle('expanded')
    }

    const faq = ques.map((q,i)=>{
        return(
            <div>
                <div onClick={()=> openAnswer(i)} className={`question${i}`}>
                    {q}
                </div>
                <div className={`answer${i}`}>
                    {ans[i]}
                </div>
            </div>
        )
    })
    return faq
}
export function Faqs(){

    return(
        <>
        <div id='faq_sec'>
            <p style={{ textAlign: 'center', fontSize: '40px' }}>What we offer</p>
            <div id='faq'>
                <QandA/>
            </div>
        </div>
        </>
    );
}
function Footer(){
    return(
        <div className='footer'>
            <div>
                <ul>
                    <li>about</li>
                    <li>career</li>
                    <li>mobile</li>
                    <li>blog</li>
                    <li>how we work</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help/FAQs</li>
                    <li>press</li>
                    <li>affiliates</li>
                    <li>Hotel owners</li>
                    <li>Partners</li>
                    <li>Advertise with us</li>
                </ul>
            </div>
            <div>
                <h2>Contact us here</h2>
                <ul>
                    <li><a href="#" class="fa fa-facebook"></a> </li>
                    <li><a href="#" class="fa fa-instagram"></a> </li>
                    <li><a href="#" class="fa fa-twitter"></a> </li>
                    <li><a href="#" class="fa fa-snapchat-ghost"></a> </li>
                </ul>
            </div>
        </div>
    )
}
export function Home(){
    return(
        <>
        <section className="adv">
            <div className="points">
                <h1>ACCOMPANY YOUR JOURNEY WITH COMFORT</h1>
                <p>car rent services for various terrains and guaranteed quality</p>
                <div id="buttons">
                    <button className="learn">Learn More</button>
                    <button className="video">Play Video</button>
                </div>
            </div>
            <div className="image">
                {/* <img className="car" src={car_png} alt=""/> */}
            </div>
        </section>
        <Features/>
        <Rentform/>
        <Faqs/>
        <Footer/>
        </>
    );
}
// export default Home;
import './Confirmation.css'

function Confirmation(){
    return(
    <div className="full_page">
        <div className="details">
            <div className="car_details"></div>
            <div className="user_details">
                <form action="" id='final'>
                    <div id="input_one">
                        <div>
                            <label for="firstname">First Name</label>
                            <label for="secondname">Second Name</label>
                            <label for="driverage">Driver age</label>
                        </div>
                        <div>
                            <input type="text" id="firstname" placeholder="Enter First Name"/>
                            <input type="text" id="secondname"  placeholder="Enter Second Name"/>
                            <input type="text" id="driverage" placeholder="Age"/>
                        </div>
                    </div>
                    <div id="input_two">
                        <div>
                            <label for="emailid">Email</label>
                            <label for="mobile">Mobile No</label>
                        </div>
                        <div>
                            <input type="text" id="emailid" placeholder="Enter Email"/>
                            <input type="text" id="mobile" placeholder="Enter Mobile no"/>
                        </div>
                    </div>
                    <div id="input_three">
                        <div>
                            <label for="flight">Flight Number</label>
                        </div>
                        <div>
                            <input type="text" id="flight" placeholder="Enter Flight Number"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <div className="payment">
            <div id="search_summary">
                <div>
                    <h2>Pickup</h2>
                    <p>March 11 2023 10:00 Ahmedabad</p>
                </div>
                <div>
                    <h2>Dropoff</h2>
                    <p>March 12 2023 10:00 Ahmedabad</p>
                </div>
                <button id="modify">modify search</button>
            </div>
            <div id="payment_summary">
                <h2>Price Summary</h2>
                <div id="firstSection">
                    <div>
                        <p>Car rental fee</p>
                        <p>550</p>
                    </div>
                    <p>taxes include airport tax(pickup in airport),Customer facilities,Tourism tax</p>
                    <div>
                        <p>Discount</p>
                        <p>-50</p>
                    </div>
                </div>
                <hr/>
                <div id="secondSection">
                    <div>
                        <p>Total amount</p>
                        <p>500</p>
                    </div>
                    <button id='toPayment'>Book now</button>
                    <label for="tandc">I understand</label>
                    <input type="checkbox" name="" id="tandc"/>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Confirmation
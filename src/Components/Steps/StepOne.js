import React, { Component } from 'react';
import ScreenSelector from '../ScreenSelector/ScreenSelector'
import './style.css'

const arr = ["https://cdn.pttrns.com/591/7530_f.jpg","https://cdn.pttrns.com/591/7525_f.jpg","https://cdn.pttrns.com/501/6842_f.jpg","https://cdn.pttrns.com/557/6737_f.jpg","https://cdn.pttrns.com/86/7071_f.jpg"]
export default class StepOne extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="justify-content-sm-center row" style={{background:'#f5f5f5', padding:'5rem 0'}}>
                    <div className="col col-sm-8">
                        <h2>Pick 5 of your Favorite Options</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="justify-content-sm-center row">
                        {arr.map((i)=>(
                            <div className="col col-md-2">
                                <div className="screenShotImageContainer">
                                    <ScreenSelector imageUrl={i} />
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="justify-content-sm-center row">
                        <div className="col text-center">
                            <button onClick={this.props.changeView} className="btn btn-primary">Next Step <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
</button>
                        </div>
                        
                    </div>
                </div>


            </div>
        )
    }
}
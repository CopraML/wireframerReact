import React, { Component } from 'react';
import ScreenSelector from '../ScreenSelector/ScreenSelector'
import { Card, CardImg, CardImgOverlay,CardBody,CardTitle,CardText } from 'reactstrap';
import './style.css'

const Categories = [{
    name:'Social Network',
    image:'http://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    relatedApps:'Facebook, Twitter'
}, {
    name:'Travel Listing App',
    image:'https://appinstitute.com/wp-content/uploads/2014/12/Make-The-Most-Of-Your-Trip-With-These-Travel-Apps.png',
    description:'Sed do eiusmod tempor incididunt',
    relatedApps:'Airbnb, Expedia'
}, {
    name:'Job Listing App',
    image:'http://blog.gettinghired.com/Portals/2/SunBlogNuke/162/Exciting%20job.jpg',
    description:'Consectetur adipiscing elit, sed do ',
    relatedApps:'Angel.co, Naukri'

}]

export default class StepOne extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="justify-content-sm-center row" style={{background:'#f5f5f5', padding:'5rem 0'}}>
                    <div className="col col-sm-8">
                        <h2>Select Category for your app</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="justify-content-sm-center row">
                        {Categories.map((category)=>(
                            <div className="col col-md-3 text-left">
                                <Card className="category-card" onClick={this.props.changeView}>
                                    <CardImg top width="100%" style={{height:'140px'}} src={category.image} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{category.name}</CardTitle>
                                    <CardText>{category.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                        
                    </div>
                </div>



            </div>
        )
    }
}
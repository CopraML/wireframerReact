import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import './ScreenSelectorStyle.css'
   
export default class ScreenSelector extends Component {
    state = {
        selected: false
    }
    render() {
        let classnames = "ScreenSelectorCard"
        if(this.state.selected)
            classnames = "ScreenSelectorCard ScreenSelected"
        return(
        <div >
            <Card onClick={()=> this.setState({selected:true})} className="ScreenSelectorCard" inverse>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=480" alt="Card image cap" />
                {this.state.selected ? <CardImgOverlay>
                    <h1>Hello</h1>
                </CardImgOverlay> : null }
            </Card>
        </div>
        )
    }
}
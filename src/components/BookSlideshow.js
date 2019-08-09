import React, {Component} from 'react';
import Slideshow from "./Slideshow";
import back from "../img/back.png";
import cover from "../img/cover_small.png";
import manReading from "../img/man_reading.png";

const items = [
    {
        src: back,
        altText: '',
        caption: '',
    },
    {
        src: manReading,
        altText: '',
        caption: '',
    },
    {
        src: cover,
        altText: '',
        caption: '',
    }
];

class BookSlideshow extends Component {
    render() {
        return (
            <Slideshow items={items} hasOverlay={false}/>
        )
    }
}

export default BookSlideshow;
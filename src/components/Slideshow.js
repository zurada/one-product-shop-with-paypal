import React, {Component} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';
import "./Slideshow.css";

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
        this.hasGradient = props.hasGradient;
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = this.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    className="align-items-center justify-content-center text-center"
                >
                        <img src={item.src} alt={item.altText}  className={this.hasGradient && "img-fading"}/>
                    <div className="carousel-caption center-text-block">
                        <h1>{item.caption}</h1>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                className="slideshow wow fadeInUp"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}


export default Slideshow;

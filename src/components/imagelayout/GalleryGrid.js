import React, { Component } from 'react'
import styled from 'styled-components'


const GalleryGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);
    grid-gap: 1.5rem;
    padding: 1.5rem;
    .gallery__image{
        width: 100%;
        height: 100%;
        /* object fit to make picture fit within assigned grid cells */
        object-fit: cover;
        /* set to display block to eliminate weird white space after. */
        display: block;
    }
    .gallery__item{
        &--1{
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
        }
        &--2{
            grid-row: 1 / span 3;
            grid-column: 3 / span 3;
        }
        &--3{
            grid-row: 1/ span 2;
            grid-column: 6 / span 1;
        }
        &--4{
            grid-row: 1 / span 2;
            grid-column: 7 / span 2;
        }
        &--5{
            grid-row: 3 / span 3;
            grid-column: 1 / span 2;
        }
        &--6{
            grid-row: 4 / span 2;
            grid-column: 3 / span 2;
        }
        &--7{
            grid-row: 4 / span 1;
            grid-column: 5 / span 1;
        }
        &--8{
            grid-row: 3 / span 2;
            grid-column: 6 / span 2;
        }
        &--9{
            grid-row: 3 / span 3;
            grid-column: 8 / span 1;
        }
        &--10{
            grid-row: 6 / span 2;
            grid-column: 1 / span 1;
        }
        &--11{
            grid-row: 6 / span 2;
            grid-column: 2 / span 2;
        }
        &--12{
            grid-row: 6 / span 2;
            grid-column: 4 / span 1;
        }
        &--13{
            grid-row: 5 / span 3;
            grid-column: 5 / span 3;
        }
        &--14{
            grid-row: 6 / span 2;
            grid-column: 8 / span 1;
        }
        
    }
`

export class GalleryGrid extends Component {
    render() {
        return (
            <GalleryGridWrapper>
                <figure className="gallery__item gallery__item--1"><img src="img/gal-1.jpeg" alt="House-1" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--2"><img src="img/gal-2.jpeg" alt="House-2" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--3"><img src="img/gal-3.jpeg" alt="House-3" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--4"><img src="img/gal-4.jpeg" alt="House-4" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--5"><img src="img/gal-5.jpeg" alt="House-5" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--6"><img src="img/gal-6.jpeg" alt="House-6" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--7"><img src="img/gal-7.jpeg" alt="House-7" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--8"><img src="img/gal-8.jpeg" alt="House-8" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--9"><img src="img/gal-9.jpeg" alt="House-9" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--10"><img src="img/gal-10.jpeg" alt="House-10" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--11"><img src="img/gal-11.jpeg" alt="House-11" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--12"><img src="img/gal-12.jpeg" alt="House-12" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--13"><img src="img/gal-13.jpeg" alt="House-13" className="gallery__image"/></figure>
                <figure className="gallery__item gallery__item--14"><img src="img/gal-14.jpeg" alt="House-14" className="gallery__image"/></figure>

            </GalleryGridWrapper>
        )
    }
}

export default GalleryGrid
'use client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export const Carousel = () => {

    return (
        <main>
            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
            </main>
            )

}
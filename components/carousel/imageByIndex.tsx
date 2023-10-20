'use client'
import image1 from './images/slide-1.jpeg'
import image2 from './images/slide-2.jpeg'
import { StaticImageData } from "next/image"
export const images: StaticImageData[] = [image1, image2]

const imageByIndex = (index: number): StaticImageData => images[index % images.length]
console.log(imageByIndex)
export default imageByIndex

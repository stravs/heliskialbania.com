import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

import Header from '../components/header'
import SectionExpiriance from '../components/section-expiriance'
import SectionSafety from '../components/section-safety'
import SectionPackages from '../components/section-packages'


const IndexPage = ({ data }) => (
  
  // console.log(data)
  <div>
    <Header headerImage={data.headerImage} /> 
    <SectionExpiriance expirianceImage={data.expirianceImage}/>

    <div className="container text-center py-2 py-lg-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <blockquote className="blockquote text-right">
            <p className="mb-0">"Heli skiing in Albania is a really unique experience, with some breathtaking views of a wild, rugged mountain range that few have had the chance to ski in. From the rolling alpine bowls, to the steep chutes, there’s something to offer for skiers of any type. The deep coastal snowpack resembles what you might find in BC or along the west coast of the US, creating pillows and spines not usually seen in most of Europe."</p>
            <footer className="blockquote-footer"><a href="https://www.instagram.com/nickmcnutt/" target="_blank">Nick Mcnutt</a></footer>
          </blockquote>
        </div>
      </div>
    </div>
    <SectionSafety safetyImage={data.safetyImage} />
    <SectionPackages packagesImage={data.bookingImage} />

  </div>

)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {  
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    expirianceImage: imageSharp(id: { regex: "/expiriance/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    safetyImage: imageSharp(id: { regex: "/safety/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    bookingImage: imageSharp(id: { regex: "/book/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }  
  }
`
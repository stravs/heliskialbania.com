import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import SectionRight from '../components/section-right'
import Package from '../components/package'
import TitleImg from '../components/title-img'
import ContactForm from '../components/contact-form'

const ContactUsPage = ({data}) => (	
	<div className="contact">
	  <div 
	    className="container-fluid"
	    style={{
	      marginLeft: 0,
	      marginRight: 0
	    }}
	    >
	    <TitleImg sectionImage={data.aboutImage} title="Contact us" text="We will be happy to answer all your questions." />
	    <ContactForm />

    </div>
  </div>
	
)

export default ContactUsPage


export const query = graphql`
  query ContactUsPageQuery {  
    aboutImage: imageSharp(id: { regex: "/contact-us/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }  
  }
`


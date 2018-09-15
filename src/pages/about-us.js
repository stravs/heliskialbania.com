import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import SectionRight from '../components/section-right'
import Package from '../components/package'
import TitleImg from '../components/title-img'
import Guide from '../components/guide'

const AboutUsPage = ({data}) => (	
	<div className="packages">
	  <div 
	    className="container-fluid"
	    style={{
	      marginLeft: 0,
	      marginRight: 0
	    }}
	    >
	    <TitleImg sectionImage={data.aboutImage} title="About us" text="Heliski Albania is a team of professionals in love with the mountains and everything connected to them. Coming from different backgrounds and places we have a shared passion:  Exploring new locations and bringing people to the undiscovered and wild mountains to do their (and our) favourite sport.
We strongly believe the Nature is our biggest asset, respecting and preserving it is the only way for us to enjoy its gifts also in the future.  For us working with small groups, including the local community with their traditions and great food is the only right way to bring tourism to these unspoiled parts of the world.
" />
      
      {/*<Guide guideImage={data.aboutImage} name="Rok Zalokar" title="lead guide at Heliski Albania" text="Rok is an IMFGA mountain guide and instructor for future guides. He is a well respected heliski guide with years of experience working in Europe and Alaska both guiding and educating.
He is a member of Pieps pro team, a part of the job that gives him inside knowledge in avalanche education and getting in touch with latest state of the art safety equipment. He has been educating individuals as well as professionals such as mountain rescue teams and military about avalanche safety and rescue procedures for the past 5 years.
He grew up in Slovenia with magnificent Julian Alps as his backyard. At age 13 he was climbing big walls, skiing steeps at 15, and started with expeditions to the Himalayas at 17. 
He put up a new route on an unclimbed 7070m high Janak mountain in the Himalaya
and completed several climbing expeditions in Peru, Kyrgyzstan, Patagonia Tibet, Nepal, and India.
Skiing (especially Heliskiing) and exploring new places is his passion. Working in Albanian mountains, one of the last unexplored places in Europe is a great opportunity to combine what he loves most.
" />*/}
    </div>
  </div>
	
)

export default AboutUsPage


export const query = graphql`
  query AboutUsPageQuery {  
    aboutImage: imageSharp(id: { regex: "/about-us/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    rokImage: imageSharp(id: { regex: "/rok/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }  
  }
`


import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import SectionRight from '../components/section-right'
import Package from '../components/package'
import Tiles from '../components/tiles'

const PackagesPage = ({data}) => (
	<div className="packages">
	  <div
	    className="container-fluid"
	    style={{
	      marginLeft: 0,
	      marginRight: 0
	    }}
	    >
	    <SectionRight altText="People having fun on pick up zone" sectionImage={data.hobsImage} 
      title="What do I get for packages based on rotor time?" 
      text="We strongly believe this is the most honest way for our clients when buying heliskiing packages. With the proximity of 6-10 minute rotor time to our prime terrain from our base in Valbona there will be minimum time spent for refuel and ferry flights from one zone to another. Four hours of rotor time, with the terrain that we fly, is roughly translated into 25-30 runs per group with runs from 400-1600 vertical meters. 
"/>
{/*      <div className="container text-center py-2 py-lg-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <blockquote className="blockquote text-center">
              <h6 className="mb-0">Dates 2019 | Week 1: 6.-23. February | Week 2: 23.February - 2.March | Week 3:   2.- 9.March | Week 4:   9.-16. March</h6>
              <p className="mb-0"></p>
              <p className="mb-0">Week 2:   23.February - 2.March</p>
              <p className="mb-0">Week 3:   2.- 9.March</p>
              <p className="mb-0">Week 4:   9.-16. March</p>
            </blockquote>
          </div>
        </div>
      </div>*/}
      <Tiles altText="Our pilot Detlef waiting for next run" tilesImage={data.datesImage} addClass="">
        <h1>Dates 2024</h1>
        <h5>Week 1:   18.- 24. February</h5>
        <h5>Week 2:   25. February - 2. March</h5>




      </Tiles>
      <SectionRight
				altText="Nice powder turn"
				sectionImage={data.weekPackageImage}
				title="One week heliskiing"
				description="This is a classic heliskiing package based on 4 hours of fly time. Why don’t we sell vertical meters? When buying rotor time we guarantee you to have the best possible experience and terrain. We will fly to the areas with the best snow and conditions and also to the terrain that suits you group best.  You will share your seat in a group of 4 skiers and  a guide. We warmly encourage you to book your seats together in a group of 4 buddies that are at the same level of skiing and therefore have the best possible experience. There will be maximum 3 groups per helicopter on the snow at the same time. Normally there is no waiting time for any of the groups with this set up. Are you more than 4 in your group ? Than consider booking Private Heliski Albania package for best possible experience and have the entire operation for yourself!"
				heli="1 helicopter - small group of 4 skiers 1 guide - 3 groups max per 1 helicopter - 4 hours of rotor time per 1 group of 4 skiers"
				includes="The package includes 6 nights with full board accommodation, 4 hours of rotor time, 5 possible days of skiing, IFMGA mountain guides"
				price="8 950€ per person"
				priceSecond="Extra hour of rotor time - 3 500€ per group"
			/>

			<Section altText="Nice turn with a scenic background" sectionImage=
      {data.privateImage} title="Private Heliski Albania"
      description="Having the whole operation and 1500 square km of
      mountains for you and your friends. We guarantee you will have the best
      possible experience. In this package you will have 8
      hours of fly time in a helicopter with up to max. 8
      people in the group. Come with your buddies and have the entire
      Albanian Prokletije mountains for yourself. Program is based on
      fly time, so we can choose to ski the best terrain that suits
      your group and find the best snow available at the time of your
      stay." 
      heli="1 helicopter only for your group - entire
      operation only for your group - up to 8 people in a group - 8
      hours of rotor time" 
      includes="The package includes 6
      nights with full board accommodation, 8 hours of rotor time,
      5 possible days of skiing, IFMGA mountain guides" 
      price="Price for 8 people, 8 hours 95 000€ per group"
      priceThird="Extra (hour) of rotor time - 3 500€ per group" 
      />
    </div>
  </div>

)

export default PackagesPage


export const query = graphql`
  query PackagesPageQuery {
    hobsImage: imageSharp(id: { regex: "/hobs-hours/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    weekPackageImage: imageSharp(id: { regex: "/week-package/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    privateImage: imageSharp(id: { regex: "/private/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    guidesTraningImage: imageSharp(id: { regex: "/guides-training/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    heliImage: imageSharp(id: { regex: "/helicopter/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    datesImage: imageSharp(id: { regex: "/dates/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

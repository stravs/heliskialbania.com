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
	    <SectionRight sectionImage={data.hobsImage} title="What do I get for packages based on (hobbs) flying time?" text="Flying time is measured by the Hobbs meter- an instrument on board of the helicopter. The Hobbs meter begins to count flying time when the pilot pulls up the collective. Raising the collective causes the helicopter to climb – at this point the Hobbs meter starts tracking your flying time. Hobbs meter does not record time while helicopter is being on the ground with collective down- at pick up or landing zone, while refuelling…  We strongly believe this is the most honest way for our clients when buying heliskiing packages.
 With the proximity of 6-10 minute flying time to our prime terrain from our base in Valbona there will be minimum time spent for refuel and ferry flights from one zone to another.  Four hours of flying time, with the terrain that we fly, is roughly translated into 25-30 runs per group with runs from 400-1600 vertical meters. 
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
      <Tiles tilesImage={data.datesImage} addClass="">
        <h1>Dates 2020</h1>
        <h5>Week 1:   15.- 22. February</h5>
        <h5>Week 2:   22.- 29. February</h5>
        <h5>Week 3:   29. February - 7. March</h5>
        <h5>Week 4:   7.- 14. March</h5>



      </Tiles>
      <SectionRight sectionImage={data.weekPackageImage} title="One week heliskiing" description="This is a classic heliskiing package based on 4 (hobbs) hours of fly time. Why don’t we sell vertical meters? When buying flying time we guarantee you to have the best possible experience and terrain. We will fly to the areas with the best snow and conditions and also to the terrain that suits you group best.  You will share your seat in a group of 4 skiers and  a guide. We warmly encourage you to book your seats together in a group of 4 buddies that are at the same level of skiing and therefore have the best possible experience. There will be maximum 3 groups per helicopter on the snow at the same time. Normally there is no waiting time for any of the groups with this set up. Are you more than 4 in your group ? Than consider booking Private Heliski Albania package for best possible experience and have the entire operation for yourself!
" heli="1 helicopter –small group of 4 skiers 1 guide—3 groups max per 1 helicopter—4 (hobbs) hours of flying time per 1 group of 4 skiers
" includes="The package includes 7 nights with full board accommodation, 4(hobbs) hours of flying time,  6 days of skiing, IFMGA mountain guides" price="6350€ per person" priceSecond="Extra hour of flying time- 2260€ per group" />
      <Section sectionImage={data.privateImage} title="Private Heliski Albania" description="Having the whole operation and 1500 square km of mountains for yourself. We guarantee you will have the best possible experience. In this package you will have 8-12 (hobbs) hours of fly time in a helicopter with up to max. 12 people in the group. Come with your buddies and have the entire Albanian Prokletije mountains for yourself. Program is based on fly time, so we can choose to ski the best terrain  that suits you group and find the best snow available at the time of you stay.
" heli="1 helicopter only for your group— entire operation only for your group--up to 12 people in a group- up to 12(hobbs) hours of flying time
" includes="The package includes 7 nights with full board accommodation, 8 to 12 hours of flying time,  6 possible days of skiing, IFMGA mountain guides" price="Price up to 8 people, 8 (hobs)  hours 48 650€" priceSecond="Price up to 12 people, 12 (hobs) hours 71 350€" priceThird="Extra (hour) of flying time- 2260€" />      
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


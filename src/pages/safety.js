import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import SectionRight from '../components/section-right'

const SafetyPage = ({data}) => (	
	<div className="expiriance">
	  <div 
	    className="container-fluid"
	    style={{
	      marginLeft: 0,
	      marginRight: 0
	    }}
	    >
	    <Section sectionImage={data.safetyImage} title="Our guides" text="All our guides are fully qualified IFMGA guides with special training for heliskiing.
Our lead guide Rok Zalokar has an extensive  experience from guiding heliskiing in Europe as well as Alaska. Combining best of the two worlds we created strict protocols for the whole operation: helicopter flying, guest safety training, guiding, communications and snow safety. Rok is an IFMGA instructor, specialized in snow safety and skiing, educating  guides, mountain rescue members and working as one of the Pieps Pro team members.  Our snow safety director Enrico Karletto Mosetti is avalanche forecaster for Julia Venezia Friuli, that has a similar/specific snowpack to Albanian mountains. All our guides have years of experience in  guiding, climbing and skiing in this part of the world. This means they spent numerous hours in terrain and snowpack similar to Albanian Alps.  Our team is highly professional, passionate and in constant pursuit of reaching new goals and establishing highest standards in the industry.
"/>
			<SectionRight sectionImage={data.snowSafetyImage} title="Safety equipment" text="Working closely with Pieps company, we will equipe each of our client with state of the art safety equipment. Beacon, shovel, probe and safety airbag free of charge." titleSecond="Snow and safety" textSecond="Our protocol includes two daily meeting (morning and evening); on morning meeting snow safety director briefs all the staff with daily monitored snow and weather observations and based on that, we plan our daily operations. Observations from all of our guides are discussed at the end of the day on evening guides meeting. We log all observations and keep tracking snowpack  throughout the season. All our runs will be logged from our dispatcher on site to keep tracking all our groups on the snow. In case of emergency we will have exact location with protocols developed for different scenarios. 
Building safety network on the snow with strict protocols for communications, flying and guiding, we can offer one of the best operations in Europe.
In case of emergency, our guests can be flown straight to the hospital. With 6 min flight we can land at hospital in Bajram Curi or 45 min flight in Tirana. 
"/>
			<Section sectionImage={data.guestsTrainingImage} title="Guests safety training" text="On the evening of arrival and next day in the morning every guest will have avalanche safety course, lecture and briefing about guiding protocols, communications and helicopter flying. This is our investment in building strong team with our guests, improving safety in every aspect of the operation. Every group will be equipped with 2 VHF radios."/>
			<SectionRight sectionImage={data.guidesTraningImage} title="Staff training" text="Before the start of the operation all our staff has an extensive training to familiarize with the area, getting data about the conditions and snowpack and just to simply tune in before the first guests arrival. During the training days we perform different rescue scenarios; heli assisted, rope access rescue, toboggan assisted rescue…"/>
			<Section sectionImage={data.heliImage} title="Helicopter and pilot" text="Our machine is a working horse, a B2 helicopter. This is a standard in modern heliskiing operations. A powerful, agile and trusty helicopter. We operate under strict European aviation standards for maintenance and inspections. Our pilot is the only one in the industry that flew before in Albanian alps and works closely in our team building safety network together with guides, dispatcher, clients under strict protocols. Pilot also attends pre season training program to familiarize with all the details and to perform all procedures as well as rescue with all of our team. This is a small operation but running under strict protocols and safety standards. We are aware that any activity in the mountains involves risks, therefore we will do our best that safety is our priority."/>
    </div>
  </div>
	
)

export default SafetyPage


export const query = graphql`
  query SafetyPageQuery {  
    safetyImage: imageSharp(id: { regex: "/safety1/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    snowSafetyImage: imageSharp(id: { regex: "/snow-safety/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    guestsTrainingImage: imageSharp(id: { regex: "/guests-training/" }) {
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
  }
`


import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import SectionRight from '../components/section-right'
import Package from '../components/package'
import TitleImg from '../components/title-img'
import Tiles from '../components/tiles'

const AboutUsPage = ({data}) => (	
	<div className="packages">
	  <div 
	    className="container-fluid"
	    style={{
	      marginLeft: 0,
	      marginRight: 0
	    }}
	    >
	    {/*<TitleImg sectionImage={data.aboutImage} title="About us" text="Heliski Albania is a team of professionals in love with the mountains and everything connected to them. Coming from different backgrounds and places we have a shared passion:  Exploring new locations and bringing people to the undiscovered and wild mountains to do their (and our) favourite sport.
We strongly believe the Nature is our biggest asset, respecting and preserving it is the only way for us to enjoy its gifts also in the future.  For us working with small groups, including the local community with their traditions and great food is the only right way to bring tourism to these unspoiled parts of the world.
" />*/}

      <Tiles tilesImage={data.aboutImage} altText="">
        <h1>About us</h1>
        <p>Heliski Albania is a team of professionals in love with the mountains and everything connected to them. Coming from different backgrounds and places we have a shared passion: Exploring new locations and bringing people to the undiscovered and wild mountains to do their (and our) favourite sport. We strongly believe the Nature is our biggest asset, respecting and preserving it is the only way for us to enjoy its gifts also in the future. For us working with small groups, including the local community with their traditions and great food is the only right way to bring tourism to these unspoiled parts of the world.</p>
      </Tiles>
      <h1 className="text-center m-3">Our team</h1>

      <Tiles tilesImage={data.rokImage} addClass="order-lg-last">
        <h1>Rok Zalokar</h1>
        <h3>Lead guide, Co-founder</h3>
        <p>Rok is an IMFGA mountain guide and instructor for future guides. He is a well respected heliski guide with years of experience working in Europe and Alaska both guiding and educating.
He is a member of Pieps pro team, a part of the job that gives him inside knowledge in avalanche education and getting in touch with latest state of the art safety equipment. He has been educating individuals as well as professionals such as mountain rescue teams and military about avalanche safety and rescue procedures for the past 5 years.
He grew up in Slovenia with magnificent Julian Alps as his backyard. At age 13 he was climbing big walls, skiing steeps at 15, and started with expeditions to the Himalayas at 17. 
He put up a new route on an unclimbed 7070m high Janak mountain in the Himalaya
and completed several climbing expeditions in Peru, Kyrgyzstan, Patagonia Tibet, Nepal, and India.
Skiing (especially Heliskiing) and exploring new places is his passion. Working in Albanian mountains, one of the last unexplored places in Europe is a great opportunity to combine what he loves most.</p>
      </Tiles>

      <Tiles tilesImage={data.moseImage} addClass="">
        <h1>Enrico Karletto Mosetti</h1>
        <h3>Snow safety director and guide</h3>
        <p>Enrico is for sure one of the best steep skiers of this time. In 2017 he became the youngest IFMGA guide in Friuli Venezia Giulia area, where for the past few years he has also been working as an avalanche forecaster.<br/>He skied lots of steep classic lines around Julian Alps and the Dolomites. He has been on several ski trip/expedition, skied from 6000 meters peaks in the Cordillera Blanca (2015), attempted Laila peak in Karakorum (2016), skied in the Svaneti range on Caucasus (2017), same season in New Zeland winning the first edition of the Skiolet d’or for the first descent of Caroline face on Aoraki/mount Cook, last spring again in Peru in Cordillera Vilcanota.
He is a trusted guide with lots of experience and knowledge on snow safety with a great eye for finding amazing lines.</p>
      </Tiles>
      <Tiles tilesImage={data.lukaImage} addClass="order-lg-last">
        <h1>Luka Stražar</h1>
        <h3>Guide</h3>
        <p>Luka is one of the worlds best alpinists and loves to change ice axes for skis. In the last decade he gradually build up his level of mountaineering and also became one of the elite IFMGA mountain guides. His experience from expeditions and climbing big walls all around the world are a big factor when it comes to delicate decision making.
For his first ever expedition together with his partner they received Piolet d’Or award. This season they were  very successful in Pakistan climbing Latok 1, one of the most wanted mountains in the latest years amongst climbing community. This are just a few of his many expeditions to the highest ranges on the planet. <br/>
It is always hard to describe with words a person like Luka. For us, he is truly a reliable and trusted guide. Every link in private operations has to be strong and for sure Luka makes our team much stronger. He is a very passionate skier and will be more than happy to guide first descents in Albanian Alps.

</p>
      </Tiles>
      <Tiles tilesImage={data.vivaImage} addClass="">
        <h1>Viva helicopters</h1>
        <p>With more than 25 years of experience, headquartered in Neuhausen, Germany, AeroHeli is a mother company of VIVA Helicopters, the first commercial helicopter operator in Albania.</p>
        <p>VIVA’s pilots, maintenance technicians and support personnel are all committed to safety and service excellence.</p>
      </Tiles>
      <Tiles tilesImage={data.petraImage} addClass="order-lg-last">
        <h1>Petra Brajnik</h1>
        <h3>Co-founder, Office manager</h3>
        <p>Born in the heart of the Julian Alps she grew up with the love for the mountains and nature. Skiing, snowboarding, climbing and later BASE jumping in Slovenian mountains progressed in exploring the hidden jewels all over the world. Being fortunate enough to see different countries and conditions people live in made her more responsible to her surroundings. She worked with several NGOs on different projects, organized cultural, art and sport events in her local community and around the globe, worked as a snowboard instructor , been a part of different sport events and film productions as an athlete as well as a part of the safety management team.
She always felt a strong connection to the Balkans,  wished she could introduce this beautiful part of the world to the people around the globe. Finally this moment has arrived! </p>
      </Tiles>
      <Tiles tilesImage={data.sebbImage} addClass="">
        <h1>Sebastian Fleiss</h1>
        <h3>Co-founder</h3>
        <p>Sebastian is an adventurer with endless drive. A unique outdoorsy person with contagious positive energy. In his youth he discovered two of his biggest passions; Sea and Snow. He was a member of Croatian alpine ski racing team, eventually fell in love with snowboarding, competing in big air and border cross competitions.</p>
        <p>He is the owner of Lynx freeride doing an awesome job with a cat skiing operation at mt. Gjeravica region, the highest mountain in Kosovo!
Sebastian has been working as a location scout, handled the logistics and worked as coordinator for some of the biggest production companies in the world. He brought TGR to Valbona and he is the one to blame that Heliski Albania was born. An explorer and a visionary, a true Balkan region lover!</p>
      </Tiles>
      <Tiles tilesImage={data.stravsImage} addClass="order-lg-last">
        <h1>Anže Štravs</h1>
        <h3>Runner, dispatcher</h3>
        <p>Born and raised in the Julian Alps, Slovenia, Anže was always connected with mountains and nature. After years of training on skis and ski jumping he switched to snowboarding and skateboarding. He likes to fly low, float around on his board - winter or summer. Anže is our strong asset, a jack of all trades, working on web design and social media. 
<br/> 
During the season Anže will work as a dispatcher. His  experience from the mountains, avalanche safety and freeride will play a big role in building our safety network; every day throughout  the season. 
</p>
      </Tiles>

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
    moseImage: imageSharp(id: { regex: "/Mose/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    lukaImage: imageSharp(id: { regex: "/luka/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    vivaImage: imageSharp(id: { regex: "/helicopter/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    petraImage: imageSharp(id: { regex: "/petra/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }
    sebbImage: imageSharp(id: { regex: "/sebb/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    stravsImage: imageSharp(id: { regex: "/stravs/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    }  
  }
`


import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

import ImgGallery from '../components/img-gallery'
import Youtube from '../components/youtube'


const LocationPage = ({ data }) => (
  
  <div className="expiriance">
    <div 
      className="container-fluid"
      style={{
        marginLeft: 0,
        marginRight: 0
      }}
      >
      <div className="row row-eq-height no-gutters">
        <div className="col-lg-6">
          <Img
            alt="Happy people on top of a mountain"              
            sizes={data.snowImage.sizes}
            className="square"
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%", 
              zindex: -1,
              objectPosition: "center left"
            }}
          />
        </div>
        <div className="col-lg-6 pt-5 pb-5 p-lg-5 my-auto">
          <h1>Maritime snow pack and one of the snowiest places in Europe</h1>
          <p>Located roughly  85 km from Mediterranean sea the snow pack resembles that of Alaska. The Prokletije is overall the wettest area of Europe. In the village of Boga, precipitation is 3,033 millimetres. At higher elevations snow is found most of the time even in the summer. In the winter some villages in  Albanian part of Prokletije are completely cut off from the rest of the world for months due to the very heavy snow.</p>  
        </div>
      </div>
{/*      <div 
        className="row row-eq-height no-gutters gallery"
        >
        <ImgGallery terrainImage={data.terrainImage1}/>
        <ImgGallery terrainImage={data.terrainImage2}/>
        <ImgGallery terrainImage={data.terrainImage3}/>
      </div>*/}


      <div className="row row-eq-height no-gutters mt-xs-4">
        <div className="col-lg-6 my-auto order-lg-last">
          <Img
            alt="Helicopter drop off on top of a mountain in Albanian Alps"              
            sizes={data.terrainImage4.sizes}
            className="square"
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%",
              zindex: -1,
              objectposition: "center right"
            }}
          />
        </div>
        <div className="col-lg-6 pt-5 pb-5 p-lg-5 my-auto">
          <h1>Untouched and unskied terrain</h1>
          <p>Our terrain  spreads over 1500 square kilometers, with 9 different zones. The Prokletije area is a subrange of the 1,000 km long Dinaric Alps. The Prokletije are a typical high mountain range with a pronounced steep topography and glacial features. Maximum relief differences of 1800 meters are found in the Valbona- our base, Grbaja and Ropojani and Cijevna Valley. Overhanging walls and ridges forming pointed peaks are typical of the western and central Prokletije. The eastern mountains are less rugged with lower relief. Most of the area was modified by glacial activity with karstic areas in the western parts. Rugged karstic terrain works favourable for anchoring snow but presents specific dangers. Our guides are very familiar with this kind of terrain as it is found also at their home mountain range - The Julian Alps.</p>
        </div>
      </div>

      <div 
        className="row row-eq-height no-gutters gallery"
        >
        <Youtube src="https://www.youtube.com/embed/zUFF_6RfI9Y"/>
        <Youtube src="https://www.youtube.com/embed/WyPTrq9uiu4"/>
      </div>   


      <div className="row row-eq-height no-gutters">
        <div className="col-lg-6">
          <Img
            alt="A lot of snow in Prokletije mountain range"              
            sizes={data.glacierImage.sizes}
            className="square"
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%",
              zindex: -1,
              objectposition: "center right"
            }}
          />
        </div>
        <div className="col-lg-6 pt-5 pb-5 p-lg-5 my-auto">
          <h1>Europe's  southernmost glaciers</h1>
          <p>Today on the shady northern slopes of the Prokletije, there are at least five active glaciers that  formed during the late Holocene period, and some inactive glaciers between 1,980 and 2,420 meters high.The valleys of Ropojani, Grbaja and Valbona were carved by miles of glaciers during the last Ice Age.
A recent report from geographers  details the discovery of four previously unknown glaciers in the Albanian part of the Prokletije range at 1980–2100 m high, found in the area close to Maja e Jezerces- our closest operating area above Valbona valley. The glaciers, the largest of which is currently the size of six football pitches, vary in size every year according to the amount of winter snowfall and temperatures during the following summer.The presence of these glaciers, the southernmost in Europe, at altitudes well below the regional snow line highlights the importance of local controls on glacier development. </p>
        </div>
      </div>
      <div className="row row-eq-height no-gutters">
        <div className="col-lg-6 order-lg-last">
          <Img
            alt="Prokletije mountain range"              
            sizes={data.wildlifeImage.sizes}
            className="square"
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%",
              zindex: -1,
              
              objectposition: "center right"
            }}
          />
        </div>
        <div className="col-lg-6 pt-5 pb-5 p-lg-5 my-auto">
          <h1>How to get there</h1>
          <h5>Where to fly?</h5>
          <p>There are three options where to fly:</p>
          <ul>
            <li>
              <p><strong>Pristina, Kosovo</strong> – 180 km and about 3 h drive from airport to Valbona valley. Have in mind border crossing between Kosovo and Albania.</p>
            </li>
            <li>
              <p><strong>Skopje, Macedonia</strong> –  225 km - about 4 h drive from the airport to Valbona valley. You will cross the borders between Macedonia, Kosovo and Albania.</p>
            </li>
            <li>
              <p><strong>Tirana, Albania</strong> –  300 km and about 4.30 h drive from airport to Valbona valley. Have in mind border crossing between Albania and Kosovo.</p>
            </li>
          </ul> 
          <h5>Transfers from and back to the airport</h5>
          <p>Best option is to get a taxi at the airport. We can organize a transfer for you with some of our trusted taxi drivers.
We do not recommend taking a rental car because you don't really need to use your car at any time of your stay. It is for sure a more expensive option then taking a taxi.
Prices vary between 150€ - 250€ per transfer depending on where you fly to and what kind of car you choose.</p>
        </div>
      </div>
      {/*<div className="row row-eq-height">
        <div className="col-lg-6 p-5 my-auto">
          <h1>Wild life</h1>
          <p>Large mammal species that have long been extinct in other regions are found here, such as the Eurasian brown bear, grey wolf, red fox, European wildcat, roe deer, fallow deer, red deer, wild boar and European otter.
The highly endangered Balkan lynx, a subspecies of the Eurasian lynx, is mainly found in the Thethi National Park where about roughly 20-50 individuals still roam, though poaching is still a large threat. Therefore our operation will work closely with National park service, Albanian government and local NGO to monitor wildlife and establish quiet zones- no fly zones. We believe that our presence will hold poachers back at their activity and help to develop long term sustainable operation.  Chamois are found throughout the high altitudes. About 720 chamois live between the borders of Kosovo and Montenegro alone. There is speculation that the mouflon roamed the Prokletije until World War I, when it disappeared.
Bird species include the golden eagle, snake eagle, honey buzzard, peregrine falcon, capercaillie, rock partridge, scops owl, Eurasian eagle owl and the snow finch.
The rivers are home to a growing number of marble trout. Among the amphibians are the alpine salamander (southernmost habitat),fire salamander, yellow-bellied toad and fire bellied toad . The rich herpetofauna include the fence lizard, green lizard, Greek tortoise and snakes such as the true vipers, including the poisonous horned viper and adder.
So far 140 species of butterflies have been found, which makes Prokletije the richest area in Europe for butterflies. The Prokletije have one endemic species of lizard, the Prokletije rock lizard or Dinarolacerta montenegrina, named after the range.</p>
        </div>
        <div className="col-lg-6">
          <Img
            alt="Logo Heliski Albania"              
            sizes={data.headerImage.sizes}
            className="square"
            style={{
              
              left: 0,
              top: 0,
              minHeight: "20rem",
              width: "100%",
              height: "100% !important",
              zindex: -1,
              objectposition: "center right"
            }}
          />
        </div>
      </div>*/}

    </div>
    
    
    
    
    
    
  </div>


)



// https://www.youtube.com/watch?time_continue=29&v=zUFF_6RfI9Y




// https://www.youtube.com/watch?v=WyPTrq9uiu4


// Nick Mcnutt 
// Heli skiing in Albania is a really unique experience, with some breathtaking views of a wild, rugged mountain range that few have had the chance to ski in. From the rolling alpine bowls, to the steep chutes, there’s something to offer for skiers of any type. The deep coastal snowpack resembles what you might find in BC or along the west coast of the US, creating pillows and spines not usually seen in most of Europe. 








 


export default LocationPage

export const query = graphql`
  query ExpiriancePageQuery {  
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    snowImage: imageSharp(id: { regex: "/snow/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    terrainImage1: imageSharp(id: { regex: "/terrain1/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    terrainImage2: imageSharp(id: { regex: "/terrain2/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    terrainImage3: imageSharp(id: { regex: "/terrain3/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    terrainImage4: imageSharp(id: { regex: "/terrain4/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    glacierImage: imageSharp(id: { regex: "/glacier/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
    wildlifeImage: imageSharp(id: { regex: "/wildlife/" }) {
      sizes(maxWidth: 1280 ) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import NavbarMain from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Heliski Albania is a heliski operation based in Valbona valley in Prokletije mountain range. Run by a team of highly qualified IFMGA mountain guides it offers exclusive access to one of the last unskied terrains in Europe. Maritime snowpack, wild mountains and great atmosphere combined with strict safety protocols are a guarantee for an unforgettable week-long experience on skies or snowboards. ' },
        { name: 'keywords', content: 'heliski, ' },
      ]}
    />
   
    <NavbarMain logoImage={data.logoImage} /> 
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    logoImage: imageSharp(id: { regex: "/logo/" }) {
      resolutions(width: 100, height: 100) {
        ...GatsbyImageSharpResolutions_noBase64
      }
    }   
  }
`


// export const pageQuery = graphql`
//   query LogoImageQuery {
//     logoImage: imageSharp(id: { regex: "/logo/" }) {
//       resolutions(width: 75, height: 75) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//   }
// `

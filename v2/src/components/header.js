import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
  <nav style={{ display: 'flex', flex: 1 }}>
    {
      menuLinks.map(link =>
        <li 
          key={link.name} 
          style={{ 
            'listStyleType': 'none',
            'padding': 10 
          }}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      )
    }
  </nav>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

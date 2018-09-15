module.exports = {
  siteMetadata: {
    title: 'Heliski Albania',
    description: 'jedi govna',
    keywords: 'spizid, se, enkrats'
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  	  resolve: `gatsby-source-filesystem`,
  	  options: {
  	    name: `img`,
  	    path: `${__dirname}/src/img/`
  	  }
  	},	
  	`gatsby-transformer-sharp`,
  	`gatsby-plugin-sharp`
  ],
}

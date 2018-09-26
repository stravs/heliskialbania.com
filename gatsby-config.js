module.exports = {
  siteMetadata: {
    title: 'Heliski Albania',
    siteUrl: `https://www.heliskialbania.com`,
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
  	{
  	  resolve: `gatsby-plugin-google-analytics`,
  	  options: {
  	    trackingId: "UA-126287810-1",
  	    // Puts tracking script in the head instead of the body
  	    head: false,
  	    // Setting this parameter is optional
  	    anonymize: true,
  	    // Setting this parameter is also optional
  	    respectDNT: true,
  	  },
  	},	
  	`gatsby-transformer-sharp`,
  	`gatsby-plugin-sharp`,
  ],
}

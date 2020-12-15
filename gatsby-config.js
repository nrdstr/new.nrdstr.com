module.exports = {
  siteMetadata: {
    title: `Nrdstr Design Services`,
    description: `We offer modern graphic design and website design, SEO, website maintenance, social media design services and more. Contact us today to discuss your next web, creative, or marketing project.`,
    author: `nrdstr_`,
    siteUrl: `https://www.nrdstr.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M3DTC95",
        includeInDevelopment: false
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `39861700812`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,700,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5fb437631535bf152a56ff85",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `nrdstr.disqus.com`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio-images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `nrdstr`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#151515`,
        display: `minimal-ui`,
        icon: `src/images/n-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Specify the URL of the WordPress source
        baseUrl: `draftery.co`,
        protocol: `https`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // Specify which URL structures to fetch
        includedRoutes: [
          '**/posts',
          '**/tags',
          '**/categories',
          '**/pages',
          '**/media',
          '**/users'
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}





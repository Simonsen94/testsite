module.exports = {
  plugins: [
    'gatsby-plugin-google-tagmanager',
    'gatsby-plugin-google-gtag',
    'gatsby-theme-codebushi',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W7RHKK5",
  
        includeInDevelopment: false,
      },
    },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
            "UA-208583749-1", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT-PZ6DN94",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
    },  
  },
  ]
}
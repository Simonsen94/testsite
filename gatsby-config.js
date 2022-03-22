module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N4X7V93",
  
        includeInDevelopment: false,
      }
    },
    'gatsby-theme-codebushi',
      {
        resolve: `gatsby-theme-codebushi`,
        options: {
          tailwindConfig: `tailwind.config.js`
      },  
    },
  ],
}
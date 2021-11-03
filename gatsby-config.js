module.exports = {
  plugins: [
    'gatsby-plugin-anti-flicker',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W7RHKK5",
  
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
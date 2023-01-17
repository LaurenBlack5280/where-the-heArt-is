describe('Home Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

//   A user… is welcomed by the “Home” page with a featured art piece, and pieces that were previously featured.
// A user… can click on an art piece to add it to their gallery
// A user… can view “My Gallery” page with their collection of favorites
beforeEach(() => {
  cy.visit('http://localhost:3000');
  cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=10&fields=id,title,image_id,artist_title,description', { 
    "data": [
      {
      "_score": 1540.1252,
      "artist_title": "Georges Seurat",
      "id": 27992,
      "image_id": "2d484387-2509-5e8e-2c43-22f9981972eb",
      "title": "A Sunday on La Grande Jatte — 1884"}
    ],
    "config": {
      "iiif_url": "https://www.artic.edu/iiif/2",
      "website_url": "http://www.artic.edu"
  }
}).wait(1000)
});

it('should welcome a user on the “Home” page with a featured art piece, and pieces that are in the public domain.', () => {
  cy.contains('where the heArt is')
  cy.get('.hero-image').should('be.visible')
  cy.get('img.art-image').should('be.visible')
})

it('should allow a user to love an art piece to their gallery', () => {
  cy.get('button').first().click()
  cy.get('label').contains('❤️')
  cy.get('[href="/gallery"]').click()
  cy.get('h3').contains('The Bedroom')
})


})
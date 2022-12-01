const login = () => {
  cy.visit("http://localhost:3000/");
  // locate on screen and click on the login button
  cy.get("div").contains("Login").click();
  // locate the email input field and type in the email
  cy.get('input[name="email"]').type("italo@email.com");
  // locate the password input field and type in the password
  cy.get('input[name="password"]').type("123456");
  // locate the login button and click on it
  cy.get("button").contains("Login").click();
};

describe("Test NFT functions", () => {
  it("test create a NFT Collection", () => {
    login();
    // locate on screen and click on the create collection button
    cy.get("div").contains("Criar Coleção de NFT").click();
    // locate the collection name input field and type in the name
    cy.get('input[name="name"]').type("Teste");
    // locate the collection description input field and type in the description
    cy.get('textarea[name="description"]').type("Teste");
    //cy.get('input[name="description"]').type("Teste");
    // locate the create collection button and click on it
    cy.get("button").contains("Criar").click();
    // check if the collection was created
    cy.get("div").contains("Coleção criada com sucesso!").should("exist");
  });
});

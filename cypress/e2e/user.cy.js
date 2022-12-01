describe("Test User functions", () => {
  it("test invalid login", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Login").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the login button and click on it
    cy.get("button").contains("Login").click();
    // check if the user is logged in
    cy.get("div").contains("Erro ao fazer login").should("exist");
  });

  it("test register new user", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Cadastrar").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the name input field and type in the name
    cy.get('input[name="name"]').type("Italo");
    // locate the register button and click on it
    cy.get("button").contains("Cadastrar").click();
    // check if the oops message is displayed
    cy.get("div").contains("Usuário criado com sucesso!").should("exist");
  });

  it("test valid login", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Login").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the login button and click on it
    cy.get("button").contains("Login").click();
    // check if the user is logged in
    cy.get("div").contains("Sair").should("exist");
  });

  it("test logout", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Login").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the login button and click on it
    cy.get("button").contains("Login").click();
    // locate on screen and click on the logout button
    cy.get("div").contains("Sair").click();
    // check if the user is logged in
    cy.get("div").contains("Login").should("exist");
  });

  it("test add cash", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Login").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the login button and click on it
    cy.get("button").contains("Login").click();
    // locate on screen and click on the add cash button
    cy.get("div").contains("Adicionar").click();
    // locate the cash input field and type in the value
    cy.get('input[name="cash"]').type("100");
    // locate the add cash button and click on it
    cy.get("button").contains("Adicionar").click();
    // check if the user received the cash
    cy.get("div").contains("100").should("exist");
  });

  it("test login and refresh", () => {
    cy.visit("http://localhost:3000/");
    // locate on screen and click on the login button
    cy.get("div").contains("Login").click();
    // locate the email input field and type in the email
    cy.get('input[name="email"]').type("italo@email.com");
    // locate the password input field and type in the password
    cy.get('input[name="password"]').type("123456");
    // locate the login button and click on it
    cy.get("button").contains("Login").click();
    // refresh the page
    cy.reload();
    // check if the user is logged in
    cy.get("div").contains("Italo").should("exist");
  });
});

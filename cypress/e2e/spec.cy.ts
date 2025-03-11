describe("Header Test", () => {
    it("Change the theme and the language?", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("ES").click();
        cy.contains("Tema");

        cy.contains("EN").click();
        cy.contains("theme");
    });

    it("Should switch themes", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("Light").click();
        cy.contains("Dark");

        cy.contains("Dark").click();
        cy.contains("Light");
    });
});

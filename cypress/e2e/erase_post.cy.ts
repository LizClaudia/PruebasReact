describe("Erasing a post", () => {
    it("Erase a post?", () => {
        cy.visit("http://localhost:3000/");
        cy.contains("Delete").click();
    });
});

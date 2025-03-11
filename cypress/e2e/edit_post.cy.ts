describe("Editing a post", () => {
    it("Edits a post?", () => {
        cy.visit("http://localhost:3000/");
        cy.contains("Edit").click();
        cy.url().should("include", "/edit_post");
        cy.get('input[name="title"]').clear();
        cy.get('input[name="title"]').type("Post Editado");
        cy.get('input[id="postTitle"]').should("have.value", "Post Editado");

        cy.get('textarea[name="body"]').clear();
        cy.get('textarea[name="body"]').type("Post Editado desde Cypress :)");
        cy.get('textarea[id="postDesc"]').should(
            "have.value",
            "Post Editado desde Cypress :)"
        );
        cy.contains("Save").click();
    });
});

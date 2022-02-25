describe("search a discount created", () => {
  it("successfully loads", () => {
    cy.visit("/administracao");
  });

  it("search discount created", () => {
    cy.get("input").type("Renault");
  });
});

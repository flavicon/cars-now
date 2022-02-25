describe("create new discount", () => {
  it("successfully loads", () => {
    cy.visit("/administracao");
  });

  it("open modal and create new discount", () => {
    cy.get("button").contains("Adicionar oferta").click();
    cy.get("[id=marca]").type("Renault").blur();
    cy.get("[id=modelo]").type("Logan").blur();
    cy.get("[id=cor]").type("Branco").blur();
    cy.get("[id=km]").type(0).blur();
    cy.get("[id=placa]").type("PMK-1276").blur();
    cy.get("[id=cidade]").type("Fortaleza").blur();
    cy.get("[id=preco]").type(5000).blur();
    cy.get("[id=ano]").click();
    cy.get("td").contains("2020").click();
    cy.get("[id=foto]")
      .type(
        "https://photo-cdn2.icons8.com/4ZEfDEZ2djuIfN3KovdofDJWTml_s6u693uEtMOYTso/rs:fit:1429:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTIyL2EzMzBl/MGE4LTdhMjktNDAy/YS04YjQ4LWMxMTgx/MTJjNmRlNS5qcGc.jpg"
      )
      .blur();
    cy.get("[id=fotoAdicional]")
      .type(
        "https://photo-cdn2.icons8.com/GtA53dx43etCys6dalQ33vKRqX21dB4IHfSlIKUdMME/rs:fit:1429:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDU1LzU0ZDY2/OTI1LTFkOGUtNDVj/NC1iMzZhLWJlNmY3/YmZhN2IxMC5qcGc.jpg"
      )
      .blur();
    cy.get("button").contains("OK").click();
  });
});

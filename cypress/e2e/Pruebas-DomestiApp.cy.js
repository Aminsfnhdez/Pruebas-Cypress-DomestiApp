import "cypress-file-upload";
describe("Pruebas DomestiApp", () => {
  beforeEach(() => {
    // cy.visit("https://domestiapp.vercel.app/profiles");
    cy.visit("http://localhost:4200/profiles");
  });
  it("validar Inicio Página", () => {
    cy.get("body").should("be.visible");
  });
  it("Validar Barra de Navegación", () => {
    cy.get(".navbar").should("be.visible");
  });
  it("Validar Pie de Página", () => {
    cy.get(".site-footer").should("be.visible");
  });
  it("Validar Vista Empleados", () => {
    cy.get("app-profiles > .container").should("be.visible");
    cy.get(
      ":nth-child(1) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.get(".swal2-popup").should("be.visible");
  });
  it("Solicitar Servicio Denegada Sesión Necesaria", () => {
    cy.get("app-profiles > .container").should("be.visible");
    cy.get(
      ":nth-child(1) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").contains("Necesitas iniciar sesión");
  });
  it("Validar Vista Empleadores", () => {
    cy.get(":nth-child(1) > :nth-child(2) > .nav-link").should("be.visible");
    cy.get(":nth-child(1) > :nth-child(2) > .nav-link").click();
    cy.get(
      ":nth-child(1) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.get(".swal2-popup").should("be.visible");
  });
  it("Solicitar Empleo Denegada Sesión Necesaria", () => {
    cy.get(":nth-child(1) > :nth-child(2) > .nav-link").click();
    cy.get(
      ":nth-child(1) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").contains("Usted debe estar conectado");
  });
  it("Validar Iniciar Sesión", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#pwd").type("Prueba123");
    cy.get(".btn").click();
  });
  it("Validar Solicitud de Servicio", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("henry.cavill@gmail.com");
    cy.get("#pwd").type("Henry123+");
    cy.get(".btn").click();
    cy.wait(3000);
    cy.get(
      ":nth-child(8) > .article-wrapper > .article-body > .read-more"
    ).scrollIntoView();
    cy.wait(4000);
    cy.get(
      ":nth-child(10) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.get(".swal2-confirm").click();
    cy.get("#swal2-title").contains("Solicitud enviada");
    cy.wait(4000);
    cy.get(".swal2-confirm").click();
  });
  it("Validar Solicitar Empleo", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#pwd").type("Prueba123");
    cy.get(".btn").click();
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(2) > .nav-link').click();
    cy.wait(5000);
    cy.get(
      ":nth-child(8) > .article-wrapper > .article-body > .read-more"
    ).scrollIntoView();
    cy.get(
      ":nth-child(10) > .article-wrapper > .article-body > .read-more"
    ).click();
    cy.wait(2000);
    cy.get(".swal2-confirm").click();
    cy.get("#swal2-title").contains("Tu solicitud ha sido enviada");
    cy.wait(4000);
    cy.get(".swal2-confirm").click();
  });
  it("Validar Editar Cuenta", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#pwd").type("Prueba123");
    cy.get(".btn").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > #navbarDropdownMenuLink").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item"
    ).click();
    cy.wait(3000);
    cy.get(":nth-child(1) > #floatingInput").clear();
    cy.wait(2000);
    cy.get(":nth-child(1) > #floatingInput").type("pruebita");
    cy.get(":nth-child(1) > #floatingInput").should("have.value", "pruebita");
    cy.get(".btn").click();
    cy.wait(3000);
  });
  it("Validar Cerrar Sesion", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#pwd").type("Prueba123");
    cy.get(".btn").click();
    cy.get(":nth-child(2) > #navbarDropdownMenuLink").click();
    cy.get(":nth-child(2) > .dropdown-item").click();
  });
  it("Validar Vista Campos Formulario Registro Empleado", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").should("be.visible");
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").click();
    cy.get(".options > :nth-child(1) > label").click();
    cy.get("#photo").should("be.visible");
    cy.get(":nth-child(1) > #floatingInput").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get(".col-8 > .row > :nth-child(2) > .form-floating > #pwd").should(
      "be.visible"
    );
    cy.get(".col-8 > :nth-child(3) > #floatingInput").should("be.visible");
    cy.get("#cc").should("be.visible");
    cy.get(
      ".text-center > :nth-child(2) > :nth-child(2) > .form-floating > #pwd"
    ).should("be.visible");
    cy.get(":nth-child(4) > #floatingTextarea").should("be.visible");
    cy.get(":nth-child(6) > #floatingTextarea").should("be.visible");
    cy.get(":nth-child(8) > #floatingTextarea").should("be.visible");
    cy.get(".btn").should("be.visible");
  });
  it("Validar Vista Campos Formulario Registro Empleador", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").should("be.visible");
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").click();
    cy.get(":nth-child(2) > label").click();
    cy.get("#photo").should("be.visible");
    cy.get(":nth-child(2) > #floatingInput").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get(":nth-child(3) > :nth-child(2) > .form-floating > #pwd").should(
      "be.visible"
    );
    cy.get(":nth-child(4) > #floatingInput").should("be.visible");
    cy.get("#cc").should("be.visible");
    cy.get(":nth-child(5) > :nth-child(2) > .form-floating > #pwd").should(
      "be.visible"
    );
    cy.get(":nth-child(6) > #floatingInput").should("be.visible");
    cy.get("#floatingTextarea").should("be.visible");
    cy.get(".btn").should("be.visible");
  });
  it("Validar Subir Foto Empleado", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").should("be.visible");
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").click();
    cy.wait(2000);
    cy.get(".options > :nth-child(1) > label").click();
    cy.get("#photo").attachFile("PruebaEmpleado.jpg");
    // cy.get('#photo').click() ../fixtures/
    // cy.upload_file("../fixtures/PruebaEmpleado.jpg", "image/jpg", "#photo");
    // cy.get("#photo").click();
  });
  it("Validar Subir Foto Empleador", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").should("be.visible");
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > label").click();
    // cy.get('#photo').click() ../fixtures/
    cy.upload_file("../fixtures/PruebaEmpleador.jpg", "image/jpg", "#photo");
    cy.get("#photo").click();
  });
  it("Validadar Notificaciones", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .nav-link").click();
    cy.get("#email").type("prueba@gmail.com");
    cy.get("#pwd").type("Prueba123");
    cy.get(".btn").click();
    cy.get(":nth-child(1) > #navbarDropdownMenuLink").should("be.visible");
    cy.get(":nth-child(1) > #navbarDropdownMenuLink").click();
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > .dropdown-menu > :nth-child(1) > .dropdown-item"
    ).should("be.visible");
  });
  it("Validar Políticas de Privacidad", () => {
    cy.wait(2000);
    cy.get(":nth-child(3) > h6").scrollIntoView();
    cy.get(".footer-links > :nth-child(4) > a").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > strong").contains("POLÍTICA DE PRIVACIDAD");
  });
  it("Validar Manual de Uso", () => {
    cy.wait(2000);
    cy.get(":nth-child(3) > .nav-link").should("be.visible");
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get('[src="../../../assets/images/Manual-0001.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0002.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0003.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0004.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0005.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0006.jpg"]').should(
      "be.visible"
    );
    cy.get('[src="../../../assets/images/Manual-0007.jpg"]').should(
      "be.visible"
    );
  });
  it("Validar Enlaces Rápidos", () => {
    cy.wait(3000);
    cy.get(":nth-child(3) > h6").scrollIntoView();
    cy.get(":nth-child(3) > .footer-links > :nth-child(1) > a").should(
      "be.visible"
    );
    cy.get(":nth-child(3) > .footer-links > :nth-child(2) > a").should(
      "be.visible"
    );
    cy.get(".footer-links > :nth-child(3) > a").should("be.visible");
    cy.get(".footer-links > :nth-child(4) > a").should("be.visible");
    cy.get(":nth-child(5) > a").should("be.visible");
  });
});

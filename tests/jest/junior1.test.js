const fs = require("fs");
const path = require("path");

const starterPath = path.join(__dirname, "..", "..", "junior1", "index.html");
const resolvedPath = path.join(__dirname, "..", "..", "junior1", "resolved.html");
const readmePath = path.join(__dirname, "..", "..", "junior1", "README.md");

describe("Junior 1 - actividad de login con Tailwind", () => {
  const starterHtml = fs.readFileSync(starterPath, "utf8");
  const resolvedHtml = fs.readFileSync(resolvedPath, "utf8");
  const readme = fs.readFileSync(readmePath, "utf8");

  test("la base de practica carga Tailwind por CDN y contiene TODOs", () => {
    expect(starterHtml).toContain("https://cdn.tailwindcss.com");
    expect(starterHtml).toContain("Base para practicar");
    expect(starterHtml).toContain("TODO: centrar esta tarjeta usando utilidades de Tailwind");
  });

  test("la base incluye el formulario con logo, usuario, contrasena y boton", () => {
    expect(starterHtml).toContain('src="./logo.svg"');
    expect(starterHtml).toContain('for="username"');
    expect(starterHtml).toContain('for="password"');
    expect(starterHtml).toMatch(/>\s*Ingresar\s*</);
  });

  test("la version resuelta usa una tarjeta centrada con rounded y labels alineados", () => {
    expect(resolvedHtml).toContain("min-h-[calc(100vh-4rem)] items-center justify-center");
    expect(resolvedHtml).toContain("rounded-[2rem]");
    expect(resolvedHtml).toContain("sm:grid-cols-[130px,1fr]");
    expect(resolvedHtml).toContain('id="login-form"');
  });

  test("la version resuelta agrega JavaScript para manejar el submit", () => {
    expect(resolvedHtml).toContain('form.addEventListener("submit"');
    expect(resolvedHtml).toContain('id="login-message"');
    expect(resolvedHtml).toContain("Bienvenido ${username}");
  });

  test("el README explica el ejercicio y como correr las pruebas", () => {
    expect(readme).toContain("# Junior 1 - Login con Tailwind");
    expect(readme).toContain("resolved.html");
    expect(readme).toContain("npm test");
  });
});

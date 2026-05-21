const { test, expect } = require("@playwright/test");

test.describe("Junior 1 - login con Tailwind", () => {
  test("la pagina base explica la actividad", async ({ page }) => {
    await page.goto("/junior1/index.html");

    await expect(page.getByText("Actividad junior 1")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Maqueta un login con Tailwind CSS" })).toBeVisible();
    await expect(page.getByText("Base para practicar")).toBeVisible();
  });

  test("resolved.html muestra el login completo", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    await expect(page.getByRole("heading", { name: "Iniciar sesion" })).toBeVisible();
    await expect(page.getByLabel("Usuario")).toBeVisible();
    await expect(page.getByLabel("Contrasena")).toBeVisible();
    await expect(page.getByRole("button", { name: "Ingresar" })).toBeVisible();
    await expect(page.getByAltText("Logo de YurtzCamp")).toBeVisible();

    const firstFieldRow = page.locator("form > div").nth(1);
    await expect(firstFieldRow).toHaveClass(/sm:grid-cols-\[130px,1fr\]/);
  });

  test("resolved.html responde al submit con un mensaje de bienvenida", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    await page.getByLabel("Usuario").fill("Carlos");
    await page.getByLabel("Contrasena").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();

    await expect(page.getByRole("status")).toContainText("Bienvenido Carlos");
  });
});

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByPlaceholder("What needs to be done?").click();
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("second thing to do");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("third thing to do");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page
    .locator("li")
    .filter({ hasText: "second thing to do" })
    .getByLabel("Toggle Todo")
    .check();
  await page.getByPlaceholder("What needs to be done?").click();
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("fourth thing to do");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await expect(page.getByTestId("todo-title")).toHaveCount(3);
  await page.getByRole("link", { name: "Active" }).click();
  await expect(page.getByTestId("todo-title")).toHaveCount(2);
  await page.getByRole("link", { name: "Completed" }).click();
  await expect(page.getByTestId("todo-title")).toHaveCount(1);
  await page.getByRole("link", { name: "All" }).click();
  await expect(page.getByTestId("todo-title")).toHaveCount(3);
});

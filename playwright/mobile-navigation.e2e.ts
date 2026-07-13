import { expect, test } from "@playwright/test";

test("given: a visitor on mobile, should: open the navigation menu", async ({
  page,
}) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const menuButton = page.getByRole("button", {
    name: "Toggle navigation menu",
  });
  await expect(menuButton).toBeVisible();
  expect(pageErrors).toEqual([]);

  await menuButton.click();

  const menu = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("link", { name: "Blog" })).toBeVisible();

  await menu.getByRole("button", { name: "Close" }).click();

  await expect(menu).toBeHidden();
  expect(pageErrors).toEqual([]);
});

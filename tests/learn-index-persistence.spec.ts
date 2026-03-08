import { test, expect } from '@playwright/test';

test('Learn page resumes card index after tab switch', async ({ page }) => {
  await page.goto('/gojuon/');

  // Navigate to Learn via bottom nav
  await page.getByRole('button', { name: '學習' }).click();

  // Wait for the Learn page to load and show first card
  await expect(page.locator('[data-testid="card-kana"]').first()).toBeVisible();
  const firstCard = await page.locator('[data-testid="card-kana"]').first().textContent();

  // Flip the card to reveal the back (enables answer buttons)
  await page.getByRole('button', { name: /Flash card for/ }).click();

  // Mark as correct to advance to next card
  await page.getByRole('button', { name: /覚えた/ }).click();

  // Wait for the counter to show card 2
  await expect(page.getByText(/2 \//)).toBeVisible();

  // Get the second card
  const secondCard = await page.locator('[data-testid="card-kana"]').first().textContent();
  expect(secondCard).not.toBe(firstCard);

  // Switch to Progress tab
  await page.getByRole('button', { name: '進度' }).click();

  // Switch back to Learn
  await page.getByRole('button', { name: '學習' }).click();

  // Wait for Learn page to be visible
  await expect(page.locator('[data-testid="card-kana"]').first()).toBeVisible();

  // Should resume at the second card, not the first
  const resumedCard = await page.locator('[data-testid="card-kana"]').first().textContent();
  expect(resumedCard).toBe(secondCard);
});

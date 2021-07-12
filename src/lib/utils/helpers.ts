function isHexColor(hex: string): boolean {
  return /^#[0-9A-F]{3,6}$/i.test(hex);
}

function showErrorMessage(text: string): void {
  console.error(`[StarRating library]: ${text}`);
}

export { isHexColor, showErrorMessage };

/** Detect hero/inline pairs that repeat the same job photo on one page. */

const DUPLICATE_GROUPS = [
  ["install-barrhaven.png", "gallery-barrhaven-grey.png", "home-barrhaven.png"],
  ["install-kanata.png", "home-kanata.png"],
  ["install-orleans-double.png", "home-orleans-double.png"],
  ["install-ottawa-grey.png", "home-ottawa-grey.png"],
];

function fileName(src) {
  return String(src).split("/").pop();
}

export function isDuplicateImagePair(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  const A = fileName(a);
  const B = fileName(b);
  return DUPLICATE_GROUPS.some((g) => g.includes(A) && g.includes(B));
}

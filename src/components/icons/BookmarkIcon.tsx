// Decorative icon: the text or aria-label next to it carries the meaning
function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M6 3h12v18l-6-4-6 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 10l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default BookmarkIcon;

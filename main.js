const cell = document.querySelector(".cell");

cell.addEventListener("click", () => {
  cell.innerHTML = svgCross();
});

function svgCross() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 26.4583 26.4583" version="1.1" id="svg8-cross-P1">
  <g filter="url(#drop-shadow-filter)">
    <g class="animate__left-dot" fill="url(#a-crossLeftDot-P1)">
      <circle cx="6.4855" cy="19.9915" r="1.3368"></circle>
    </g>
    <g class="animate__right-dot" fill="url(#a-crossRightDot-P1)">
      <circle r="1.3368" cy="19.9915" cx="19.9756"></circle>
    </g>
  </g>
  <g fill="none" stroke-width="2.6458" stroke-linecap="round" filter="url(#drop-shadow-filter)">
    <g stroke="url(#c-cross-P1)" transform="translate(0 -.0191)">
      <path d="M 6.4855595,6.4855597 19.972772,19.972772" class="animate__right-line"></path>
    </g>
    <g stroke="url(#d-cross-P1)" transform="translate(0 -.0191)">
      <path d="M 19.972772,6.4855597 6.4855597,19.972772" class="animate__left-line"></path>
    </g>
  </g>
</svg>
`;
}

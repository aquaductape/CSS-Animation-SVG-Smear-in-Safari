const svgDefs = `
<svg xmlns="http://www.w3.org/2000/svg" class="defs-collection" height="0" width="0" viewBox="0 0 32 32">
    <defs>
    <filter id="drop-shadow-filter" height="100" width="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="1" flood-color="rgba(0, 0, 0, 0.35)" result="flood"></feFlood>
      <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"></feComposite>
      <feGaussianBlur in="composite1" result="blur"></feGaussianBlur>
      <feOffset dy="1.8" result="offset"></feOffset>
      <feComposite in="SourceGraphic" in2="offset" result="composite2"></feComposite>
    </filter>
    <filter id="drop-shadow-filter-slash" height="100" width="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="1" flood-color="rgba(0, 0, 0, 0.35)" result="flood"></feFlood>
      <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"></feComposite>
      <feGaussianBlur in="composite1" result="blur"></feGaussianBlur>
      <feOffset dy="0.7" result="offset"></feOffset>
      <feComposite in="SourceGraphic" in2="offset" result="composite2"></feComposite>
    </filter>    

    
  <linearGradient id="b-cross-P1">
    <stop class="color-primary-cross-P1" offset="0" stop-color="#0cf"></stop>
    <stop class="color-secondary-cross-P1" offset="1" stop-color="#5fd"></stop>
  </linearGradient>
  <linearGradient id="a-cross-P1">
    <stop class="color-secondary-cross-P1" offset="0" stop-color="#5fd"></stop>
    <stop class="color-primary-cross-P1" offset="1" stop-color="#0cf"></stop>
  </linearGradient>
  <linearGradient gradientUnits="userSpaceOnUse" y2="19.9728" x2="6.4856" y1="13.2292" x1="13.2292" id="d-cross-P1" xlink:href="#a-cross-P1"></linearGradient>
  <linearGradient gradientUnits="userSpaceOnUse" y2="22.7431" x2="21.9646" y1="11.6221" x1="11.6221" id="c-cross-P1" xlink:href="#b-cross-P1"></linearGradient><linearGradient id="a-circle-P1">
    <stop offset="0" class="color-primary-circle-P1" stop-color="#0cf"></stop>
    <stop offset="1" class="color-secondary-circle-P1" stop-color="#5fd"></stop>
  </linearGradient>
  <linearGradient xlink:href="#a-circle-P1" id="b-circle-P1" x1="53.5009" y1="-2.4148" x2="53.5009" y2="13.775" gradientUnits="userSpaceOnUse"></linearGradient>
    <linearGradient id="a-triangle-P1">
      <stop class="color-primary-triangle-P1" offset="0" stop-color="#0cf"></stop>
      <stop class="color-secondary-triangle-P1" offset="1" stop-color="#5fd"></stop>
    </linearGradient>
    <linearGradient y2="22.7431" x2="21.9646" y1="11.6221" x1="11.6221" gradientTransform="rotate(135 12.262 17.1198)" gradientUnits="userSpaceOnUse" id="b-triangle-P1" xlink:href="#a-triangle-P1"></linearGradient>
    <linearGradient y2="2.5327" x2="14.1158" y1="17.7946" x1="17.659" gradientTransform="rotate(-105 11.2177 15.5445)" gradientUnits="userSpaceOnUse" id="c-triangle-P1" xlink:href="#a-triangle-P1"></linearGradient>
    <linearGradient y2="5.1297" x2="6.2886" y1="16.1127" x1="17.2162" gradientTransform="rotate(15 18.6084 26.6946)" gradientUnits="userSpaceOnUse" id="d-triangle-P1" xlink:href="#a-triangle-P1"></linearGradient>

    <linearGradient id="e-heart-P1">
      <stop class="color-primary-heart-P1" offset="0" stop-color="#0cf"></stop>
      <stop class="color-secondary-heart-P1" offset="1" stop-color="#5fd" stop-opacity=".9843"></stop>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="20.5725" x2="15.9935" y1="4.2042" x1="12.8753" id="f-heart-P1" xlink:href="#e-heart-P1"></linearGradient><linearGradient id="a-crossLeftDot-P1">
      <stop class="color-primary-crossLeftDot-P1" stop-color="#0cf"></stop>
    </linearGradient><linearGradient id="a-crossRightDot-P1">
    <stop class="color-secondary-crossRightDot-P1" stop-color="#5fd"></stop>
  </linearGradient>
  <linearGradient id="b-cross-P2">
    <stop class="color-primary-cross-P2" offset="0" stop-color="#ff0051"></stop>
    <stop class="color-secondary-cross-P2" offset="1" stop-color="#ffc300"></stop>
  </linearGradient>
  <linearGradient id="a-cross-P2">
    <stop class="color-secondary-cross-P2" offset="0" stop-color="#ffc300"></stop>
    <stop class="color-primary-cross-P2" offset="1" stop-color="#ff0051"></stop>
  </linearGradient>
  <linearGradient gradientUnits="userSpaceOnUse" y2="19.9728" x2="6.4856" y1="13.2292" x1="13.2292" id="d-cross-P2" xlink:href="#a-cross-P2"></linearGradient>
  <linearGradient gradientUnits="userSpaceOnUse" y2="22.7431" x2="21.9646" y1="11.6221" x1="11.6221" id="c-cross-P2" xlink:href="#b-cross-P2"></linearGradient><linearGradient id="a-circle-P2">
    <stop offset="0" class="color-primary-circle-P2" stop-color="#ff0051"></stop>
    <stop offset="1" class="color-secondary-circle-P2" stop-color="#ffc300"></stop>
  </linearGradient>
  <linearGradient xlink:href="#a-circle-P2" id="b-circle-P2" x1="53.5009" y1="-2.4148" x2="53.5009" y2="13.775" gradientUnits="userSpaceOnUse"></linearGradient>
    <linearGradient id="a-triangle-P2">
      <stop class="color-primary-triangle-P2" offset="0" stop-color="#ff0051"></stop>
      <stop class="color-secondary-triangle-P2" offset="1" stop-color="#ffc300"></stop>
    </linearGradient>
    <linearGradient y2="22.7431" x2="21.9646" y1="11.6221" x1="11.6221" gradientTransform="rotate(135 12.262 17.1198)" gradientUnits="userSpaceOnUse" id="b-triangle-P2" xlink:href="#a-triangle-P2"></linearGradient>
    <linearGradient y2="2.5327" x2="14.1158" y1="17.7946" x1="17.659" gradientTransform="rotate(-105 11.2177 15.5445)" gradientUnits="userSpaceOnUse" id="c-triangle-P2" xlink:href="#a-triangle-P2"></linearGradient>
    <linearGradient y2="5.1297" x2="6.2886" y1="16.1127" x1="17.2162" gradientTransform="rotate(15 18.6084 26.6946)" gradientUnits="userSpaceOnUse" id="d-triangle-P2" xlink:href="#a-triangle-P2"></linearGradient>

    <linearGradient id="e-heart-P2">
      <stop class="color-primary-heart-P2" offset="0" stop-color="#ff0051"></stop>
      <stop class="color-secondary-heart-P2" offset="1" stop-color="#ffc300" stop-opacity=".9843"></stop>
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" y2="20.5725" x2="15.9935" y1="4.2042" x1="12.8753" id="f-heart-P2" xlink:href="#e-heart-P2"></linearGradient><linearGradient id="a-crossLeftDot-P2">
      <stop class="color-primary-crossLeftDot-P2" stop-color="#ff0051"></stop>
    </linearGradient><linearGradient id="a-crossRightDot-P2">
    <stop class="color-secondary-crossRightDot-P2" stop-color="#ffc300"></stop>
  </linearGradient></defs></svg>
`;

const svgCross = `
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

const cell = document.querySelector(".cell");
const svgDefsEl = document.querySelector(".svg-defs");

svgDefsEl.innerHTML = svgDefs;

cell.addEventListener("click", () => {
  cell.innerHTML = svgCross;
});

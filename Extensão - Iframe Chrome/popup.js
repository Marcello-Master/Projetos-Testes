/*// Script for popup functionality
document.addEventListener('DOMContentLoaded', function () {
  // Set the height of the iframe to 300px (adjust as needed)
  document.getElementById('myIframe').style.height = '300px';
});
*/// Script for popup functionality
document.addEventListener('DOMContentLoaded', function () {
  // Set the height of the iframe to fit the available space (adjust as needed)
  const iframeHeight = window.innerHeight - 20; // Subtract padding and margins
  document.getElementById('myIframe').style.height = `${iframeHeight}px`;
});
// Feather icons are used on some pages
// Replace() replaces [data-feather] elements with icons
import featherIcons from "feather-icons"
featherIcons.replace()

// Mazer internal JS. Include this in your project to get
// the sidebar running.
import "./mazer" 
const current = window.location.pathname.split('/').pop();
document.querySelectorAll('.sidebar-item a').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.parentElement.classList.add('active');
  }
});
// import './placement.js'

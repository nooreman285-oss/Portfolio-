export function Footer({ name }) {
  return `<p class="footer">&copy; ${new Date().getFullYear()} ${name}. Built with HTML, CSS and JavaScript.</p>`;
}

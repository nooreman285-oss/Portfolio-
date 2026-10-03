export function Hero({ name, role, tagline }) {
  return `
    <p class="hero__eyebrow">Hello, I'm</p>
    <h1>${name}<br><span>${role}</span></h1>
    <p class="muted">${tagline}</p>
    <div class="hero__actions">
      <a href="#projects" class="btn btn--primary">View Projects</a>
      <a href="#contact" class="btn btn--ghost">Contact Me</a>
    </div>`;
}

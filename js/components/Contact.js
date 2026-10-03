export function Contact({ email, github, linkedin }) {
  return `
  <div class="contact">
    <h2>Let's Work Together</h2>
    <p class="muted">Open to internships and freelance opportunities.</p>
    <div class="hero__actions">
      <a href="mailto:${email}" class="btn btn--primary">Email Me</a>
      <a href="${github}" class="btn btn--ghost" target="_blank" rel="noopener">GitHub</a>
      <a href="${linkedin}" class="btn btn--ghost" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>`;
}

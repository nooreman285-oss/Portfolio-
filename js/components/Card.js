export function SkillCard({ title, desc }) {
  return `<article class="card"><h3>${title}</h3><p class="muted">${desc}</p></article>`;
}
export function ProjectCard({ title, desc, live, repo }) {
  return `
  <article class="card">
    <span class="tag">Project</span>
    <h3>${title}</h3>
    <p class="muted">${desc}</p>
    <div class="hero__actions">
      <a href="${live}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">Live</a>
      ${repo ? `<a href="${repo}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener">Code</a>` : ''}
    </div>
  </article>`;
}

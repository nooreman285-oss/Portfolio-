import { profile, skills, projects } from './data.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { SkillCard, ProjectCard } from './components/Card.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const render = (id, html) => (document.getElementById(id).innerHTML = html);

render('navbar', Navbar(profile));
render('hero', Hero(profile));
render('skills', `<h2>Skills</h2><div class="grid">${skills.map(SkillCard).join('')}</div>`);
render('projects', `<h2>Projects</h2><div class="grid">${projects.map(ProjectCard).join('')}</div>`);
render('contact', Contact(profile));
render('footer', Footer(profile));

const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', () => links.classList.remove('open'));

const content = document.getElementById('content');

const pages = {
  home: `
    <h1>Welcome to My Portfolio</h1>
    <p>Hello! I'm <strong>Pich Brak</strong>, a passionate web developer in Cambodia. Explore my work and experience!</p>
  `,
  about: `
    <h2>Profile</h2>
    <ul>
      <li><strong>Full Name:</strong> Pich Brak</li>
      <li><strong>Place of Birth:</strong> Kompong Spue</li>
      <li><strong>Date of Birth:</strong> April 12, 2004</li>
      <li><strong>Sex:</strong> Female</li>
      <li><strong>Nationality:</strong> Khmer</li>
      <li><strong>Status:</strong> Single</li>
      <li><strong>Address:</strong> P 511, Phum Tropeang Chhuk (Borey Sorla), Street 371, Phnom Penh</li>
    </ul>
  `,
  projects: `
    <h2>Projects</h2>
    <h3>Web Design Project (Online Shop)</h3>
    <ul>
      <li>Developed with HTML, CSS, SASS</li>
      <li>Collaborated on GitHub</li>
    </ul>
    <h3>Video Downloader & Editor (Python)</h3>
    <ul>
      <li>Built with tkinter UI</li>
      <li>Git collaboration</li>
    </ul>
    <h3>JavaScript Online Store</h3>
    <ul>
      <li>Search, filter, cart features</li>
      <li>Responsive layout</li>
    </ul>
    <h3>Coffee Shop POS System</h3>
    <ul>
      <li>Backend with PHP/MySQL</li>
      <li>QA Manager & integration</li>
    </ul>
  `,
  skills: `
    <h2>Skills</h2>
    <h3>Soft Skills</h3>
    <ul>
      <li>Teamwork</li>
      <li>Time & Task Management</li>
      <li>Problem Solving</li>
      <li>Respectful & Honest</li>
    </ul>
    <h3>Hard Skills</h3>
    <ul>
      <li>HTML, CSS, SASS, Bootstrap</li>
      <li>JavaScript, PHP, MySQL, Node.js</li>
      <li>Git, GitHub, Figma, Jira</li>
      <li>OOP, MVC, Algorithms</li>
    </ul>
    <h3>Languages</h3>
    <ul>
      <li>Khmer: Native</li>
      <li>English: Intermediate</li>
    </ul>
  `,
  contact: `
    <h2>Contact</h2>
    <p><strong>Phone:</strong> 096 743 3572</p>
    <p><strong>Email:</strong> pich.brak@student.passerellesnumeriques.org</p>
    <h3>References</h3>
    <p>Mr. Yon Yen – PNC IT Trainer | 086 750 534 | yonyen99@gmail.com</p>
    <p>Ms. Hou Lavy – PNC Trainer | 012 723 877 | lavy.hou@passerellesnumeriques.org</p>
  `
};

function loadPage(page = 'home') {
  content.innerHTML = pages[page];
}

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    loadPage(page);
  });
});

// Load default page
loadPage('home');

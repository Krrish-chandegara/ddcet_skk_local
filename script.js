/* =============================================
   StudyWithK - Main JavaScript
   ============================================= */

// =============================================
// DATA STORE — Edit these objects to add/remove
// subjects, chapters, semesters, and materials
// =============================================

/** DDCET Notes Data **/
const ddcetData = {
  subjects: [
    {
      id: "maths",
      name: "Mathematics",
      icon: "📐",
      color: "icon-blue",
      tag: "Core",
      chapters: 6,
      pdfs: 24,
      chapters_list: [
        {
          id: "ch1",
          name: "Chapter 1: Algebra & Matrices",
          materials: {
            "Handwritten Notes": [
              { title: "Unit 1 - Matrices Basics", size: "4.2 MB", pages: 18 },
              { title: "Unit 2 - Determinants", size: "3.1 MB", pages: 14 },
              { title: "Unit 3 - Linear Equations", size: "2.8 MB", pages: 12 }
            ],
            "Video Lectures": [
              { title: "Introduction to Matrices (45 min)", size: "YouTube", pages: null },
              { title: "Determinants Explained (38 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [
              { title: "Practice Set A - 2023", size: "1.4 MB", pages: 8 },
              { title: "Practice Set B - 2022", size: "1.2 MB", pages: 6 }
            ],
            "PYQs": [
              { title: "DDCET 2023 - Algebra Section", size: "980 KB", pages: 5 },
              { title: "DDCET 2022 - Full Paper", size: "2.2 MB", pages: 12 },
              { title: "DDCET 2021 - Full Paper", size: "2.1 MB", pages: 12 }
            ]
          }
        },
        {
          id: "ch2",
          name: "Chapter 2: Calculus",
          materials: {
            "Handwritten Notes": [
              { title: "Differentiation Rules", size: "3.8 MB", pages: 16 },
              { title: "Integration Techniques", size: "4.1 MB", pages: 18 }
            ],
            "Video Lectures": [
              { title: "Limits & Continuity (52 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [
              { title: "Calculus Practice Paper", size: "1.1 MB", pages: 7 }
            ],
            "PYQs": [
              { title: "DDCET 2023 - Calculus", size: "860 KB", pages: 4 }
            ]
          }
        },
        {
          id: "ch3",
          name: "Chapter 3: Trigonometry",
          materials: {
            "Handwritten Notes": [
              { title: "Trig Identities Sheet", size: "1.9 MB", pages: 8 },
              { title: "Inverse Trigonometry", size: "2.3 MB", pages: 10 }
            ],
            "Video Lectures": [
              { title: "Trigonometry Full Revision (60 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [],
            "PYQs": [
              { title: "DDCET 2022 - Trig Questions", size: "740 KB", pages: 4 }
            ]
          }
        }
      ]
    },
    {
      id: "physics",
      name: "Physics",
      icon: "⚛️",
      color: "icon-purple",
      tag: "Core",
      chapters: 5,
      pdfs: 18,
      chapters_list: [
        {
          id: "ph1",
          name: "Chapter 1: Mechanics",
          materials: {
            "Handwritten Notes": [
              { title: "Newton's Laws Notes", size: "3.5 MB", pages: 15 },
              { title: "Kinematics Formulas", size: "2.0 MB", pages: 9 }
            ],
            "Video Lectures": [
              { title: "Mechanics Overview (55 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [
              { title: "Mechanics Practice Set", size: "1.3 MB", pages: 7 }
            ],
            "PYQs": [
              { title: "DDCET 2023 - Physics Full", size: "2.0 MB", pages: 10 }
            ]
          }
        },
        {
          id: "ph2",
          name: "Chapter 2: Electricity & Magnetism",
          materials: {
            "Handwritten Notes": [
              { title: "Ohm's Law & Circuits", size: "2.8 MB", pages: 12 },
              { title: "Magnetism Notes", size: "3.1 MB", pages: 14 }
            ],
            "Video Lectures": [
              { title: "Electricity Basics (42 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [],
            "PYQs": [
              { title: "EM Questions 2022", size: "880 KB", pages: 5 }
            ]
          }
        }
      ]
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "🧪",
      color: "icon-green",
      tag: "Core",
      chapters: 4,
      pdfs: 14,
      chapters_list: [
        {
          id: "chem1",
          name: "Chapter 1: Organic Chemistry",
          materials: {
            "Handwritten Notes": [
              { title: "Functional Groups Notes", size: "4.0 MB", pages: 17 },
              { title: "Reaction Mechanisms", size: "3.4 MB", pages: 15 }
            ],
            "Video Lectures": [
              { title: "Organic Chemistry Crash Course (70 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [
              { title: "Organic Reactions Practice", size: "1.5 MB", pages: 8 }
            ],
            "PYQs": [
              { title: "DDCET 2023 - Chemistry", size: "1.8 MB", pages: 9 }
            ]
          }
        }
      ]
    },
    {
      id: "english",
      name: "English",
      icon: "📝",
      color: "icon-pink",
      tag: "Language",
      chapters: 3,
      pdfs: 10,
      chapters_list: [
        {
          id: "eng1",
          name: "Chapter 1: Grammar & Vocabulary",
          materials: {
            "Handwritten Notes": [
              { title: "Grammar Rules Summary", size: "2.1 MB", pages: 10 },
              { title: "Word List - 500 Important Words", size: "1.8 MB", pages: 8 }
            ],
            "Video Lectures": [
              { title: "Grammar Quick Revision (30 min)", size: "YouTube", pages: null }
            ],
            "Paper PDFs": [
              { title: "English Practice Paper 1", size: "900 KB", pages: 5 }
            ],
            "PYQs": [
              { title: "DDCET 2023 - English Section", size: "750 KB", pages: 4 }
            ]
          }
        }
      ]
    },
    {
      id: "gk",
      name: "General Knowledge",
      icon: "🌍",
      color: "icon-orange",
      tag: "Aptitude",
      chapters: 3,
      pdfs: 12,
      chapters_list: [
        {
          id: "gk1",
          name: "Chapter 1: Current Affairs",
          materials: {
            "Handwritten Notes": [
              { title: "Monthly Current Affairs - 2023", size: "3.2 MB", pages: 14 }
            ],
            "Video Lectures": [],
            "Paper PDFs": [
              { title: "GK Practice MCQ Set", size: "1.0 MB", pages: 6 }
            ],
            "PYQs": [
              { title: "DDCET GK Questions 2023", size: "680 KB", pages: 4 }
            ]
          }
        }
      ]
    }
  ]
};

/** Degree Notes Data **/
const degreeData = {
  semesters: [
    {
      id: "sem3",
      name: "Semester 3",
      icon: "📘",
      subjects: [
        {
          id: "s3-ds",
          name: "Data Structures",
          icon: "🌳",
          color: "icon-teal",
          materials: {
            "Handwritten Notes": [
              { title: "Arrays & Linked Lists", size: "4.5 MB", pages: 20 },
              { title: "Trees & Graphs", size: "5.0 MB", pages: 22 },
              { title: "Sorting & Searching", size: "3.8 MB", pages: 17 }
            ],
            "PYQs": [
              { title: "DS GTU Paper 2023", size: "2.0 MB", pages: 10 },
              { title: "DS GTU Paper 2022", size: "1.9 MB", pages: 10 }
            ],
            "Soft Copy Notes": [
              { title: "DS Reference Book - Cormen Summary", size: "8.2 MB", pages: 40 },
              { title: "Slides - All Units", size: "6.4 MB", pages: 35 }
            ],
            "Video Lectures": [
              { title: "Full DS Playlist by KrishnaKumar Sir", size: "YouTube", pages: null },
              { title: "Graph Algorithms (90 min)", size: "YouTube", pages: null }
            ]
          }
        },
        {
          id: "s3-oop",
          name: "Object Oriented Programming (Java)",
          icon: "☕",
          color: "icon-orange",
          materials: {
            "Handwritten Notes": [
              { title: "OOP Concepts - Class & Object", size: "3.6 MB", pages: 16 },
              { title: "Inheritance & Polymorphism", size: "4.0 MB", pages: 18 },
              { title: "Exception Handling", size: "2.5 MB", pages: 11 },
              { title: "Collections Framework", size: "3.1 MB", pages: 14 }
            ],
            "PYQs": [
              { title: "Java GTU Paper 2023", size: "1.8 MB", pages: 9 },
              { title: "Java GTU Paper 2022", size: "1.7 MB", pages: 9 }
            ],
            "Soft Copy Notes": [
              { title: "Java Complete Reference - Summary", size: "9.1 MB", pages: 45 }
            ],
            "Video Lectures": [
              { title: "Java OOP by Telusko (Full)", size: "YouTube", pages: null }
            ]
          }
        },
        {
          id: "s3-dco",
          name: "Digital & Computer Organization",
          icon: "💻",
          color: "icon-purple",
          materials: {
            "Handwritten Notes": [
              { title: "Number Systems & Boolean Algebra", size: "3.2 MB", pages: 15 },
              { title: "Morris Mano - Basic Computer", size: "4.8 MB", pages: 22 },
              { title: "CPU Scheduling Notes", size: "2.9 MB", pages: 13 }
            ],
            "PYQs": [
              { title: "DCO GTU Paper 2023", size: "1.6 MB", pages: 8 }
            ],
            "Soft Copy Notes": [
              { title: "Morris Mano Chapter Summaries", size: "5.5 MB", pages: 28 }
            ],
            "Video Lectures": [
              { title: "Boolean Algebra & Logic Gates (50 min)", size: "YouTube", pages: null }
            ]
          }
        }
      ]
    },
    {
      id: "sem4",
      name: "Semester 4",
      icon: "📗",
      subjects: [
        {
          id: "s4-os",
          name: "Operating Systems",
          icon: "⚙️",
          color: "icon-blue",
          materials: {
            "Handwritten Notes": [
              { title: "Process & Thread Management", size: "4.1 MB", pages: 19 },
              { title: "CPU Scheduling Algorithms", size: "3.7 MB", pages: 17 },
              { title: "Memory Management & Paging", size: "4.4 MB", pages: 20 },
              { title: "File Systems & I/O", size: "3.0 MB", pages: 14 }
            ],
            "PYQs": [
              { title: "OS GTU Paper 2023", size: "2.1 MB", pages: 10 },
              { title: "OS GTU Paper 2022", size: "2.0 MB", pages: 10 },
              { title: "OS GTU Paper 2021", size: "1.9 MB", pages: 10 }
            ],
            "Soft Copy Notes": [
              { title: "Silberschatz OS Concepts Summary", size: "10.2 MB", pages: 50 },
              { title: "OS Lecture Slides - All Units", size: "7.8 MB", pages: 42 }
            ],
            "Video Lectures": [
              { title: "OS Complete Course by Gate Smashers", size: "YouTube", pages: null },
              { title: "Deadlock & Synchronization (75 min)", size: "YouTube", pages: null }
            ]
          }
        },
        {
          id: "s4-dbms",
          name: "Database Management Systems",
          icon: "🗄️",
          color: "icon-green",
          materials: {
            "Handwritten Notes": [
              { title: "ER Diagram & Relational Model", size: "3.5 MB", pages: 16 },
              { title: "SQL Queries & Joins", size: "3.9 MB", pages: 18 },
              { title: "Normalization (1NF to BCNF)", size: "2.8 MB", pages: 13 }
            ],
            "PYQs": [
              { title: "DBMS GTU Paper 2023", size: "1.9 MB", pages: 10 },
              { title: "DBMS GTU Paper 2022", size: "1.8 MB", pages: 10 }
            ],
            "Soft Copy Notes": [
              { title: "DBMS Reference Notes", size: "6.8 MB", pages: 34 }
            ],
            "Video Lectures": [
              { title: "SQL Full Tutorial (2 hours)", size: "YouTube", pages: null },
              { title: "Normalization Made Easy (45 min)", size: "YouTube", pages: null }
            ]
          }
        },
        {
          id: "s4-env",
          name: "Environmental Science",
          icon: "🌿",
          color: "icon-green",
          materials: {
            "Handwritten Notes": [
              { title: "Ecosystem & Biodiversity", size: "2.6 MB", pages: 12 },
              { title: "Climate Change & Sustainability", size: "2.9 MB", pages: 13 },
              { title: "Renewable Energy Sources", size: "3.1 MB", pages: 14 }
            ],
            "PYQs": [
              { title: "EVS GTU Paper 2023", size: "1.4 MB", pages: 7 }
            ],
            "Soft Copy Notes": [
              { title: "EVS Complete Guide", size: "4.2 MB", pages: 22 }
            ],
            "Video Lectures": [
              { title: "Sustainability Concepts (40 min)", size: "YouTube", pages: null }
            ]
          }
        }
      ]
    },
    {
      id: "sem5",
      name: "Semester 5",
      icon: "📙",
      subjects: [
        {
          id: "s5-cn",
          name: "Computer Networks",
          icon: "🌐",
          color: "icon-teal",
          materials: {
            "Handwritten Notes": [
              { title: "OSI Model & TCP/IP Stack", size: "4.0 MB", pages: 18 },
              { title: "Routing Protocols", size: "3.6 MB", pages: 16 }
            ],
            "PYQs": [
              { title: "CN GTU Paper 2023", size: "1.9 MB", pages: 9 }
            ],
            "Soft Copy Notes": [
              { title: "Forouzan Networking Summary", size: "8.5 MB", pages: 42 }
            ],
            "Video Lectures": [
              { title: "Computer Networks Full Course", size: "YouTube", pages: null }
            ]
          }
        },
        {
          id: "s5-toc",
          name: "Theory of Computation",
          icon: "🔬",
          color: "icon-purple",
          materials: {
            "Handwritten Notes": [
              { title: "Automata & Finite State Machines", size: "3.8 MB", pages: 17 },
              { title: "Context-Free Grammars", size: "3.2 MB", pages: 15 },
              { title: "Turing Machines", size: "2.9 MB", pages: 13 }
            ],
            "PYQs": [
              { title: "TOC GTU Paper 2023", size: "1.7 MB", pages: 8 }
            ],
            "Soft Copy Notes": [
              { title: "Sipser TOC Notes", size: "7.0 MB", pages: 36 }
            ],
            "Video Lectures": [
              { title: "TOC Lectures by Shai Simonson", size: "YouTube", pages: null }
            ]
          }
        }
      ]
    }
  ]
};

// =============================================
// UTILITY FUNCTIONS
// =============================================

/** Show a toast notification */
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/** Get material icon based on type */
function getMaterialIcon(type) {
  const icons = {
    "Handwritten Notes": { icon: "fa-pen-nib", bg: "icon-orange", label: "PDF" },
    "Video Lectures":    { icon: "fa-play-circle", bg: "icon-purple", label: "Video" },
    "Paper PDFs":        { icon: "fa-file-pdf", bg: "icon-blue", label: "PDF" },
    "PYQs":              { icon: "fa-history", bg: "icon-pink", label: "PYQ" },
    "Soft Copy Notes":   { icon: "fa-file-alt", bg: "icon-teal", label: "Notes" }
  };
  return icons[type] || { icon: "fa-file", bg: "icon-blue", label: "File" };
}

// =============================================
// DARK MODE
// =============================================

function initDarkMode() {
  const toggles = document.querySelectorAll('.dark-toggle');
  const saved = localStorage.getItem('swk-dark');
  if (saved === 'true') {
    document.body.classList.add('dark');
    updateToggleIcons(true);
  }

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('swk-dark', isDark);
      updateToggleIcons(isDark);
    });
  });
}

function updateToggleIcons(isDark) {
  document.querySelectorAll('.dark-toggle i').forEach(i => {
    i.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// =============================================
// NAVBAR
// =============================================

function initNavbar() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger
  const ham = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Search
  const searchInput = document.querySelector('.nav-search input');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') showToast('Search coming soon!');
    });
  }
}

// =============================================
// HOME PAGE — Hero Cards & Subjects
// =============================================

function initHomePage() {
  renderHomeSubjects();
}

function renderHomeSubjects() {
  const grid = document.getElementById('subjects-grid');
  if (!grid) return;

  // Show a mix of DDCET and Degree subjects
  const cards = [
    ...ddcetData.subjects.slice(0, 3).map(s => ({
      ...s, type: 'DDCET', href: 'ddcet.html'
    })),
    ...degreeData.semesters[1].subjects.slice(0, 3).map(s => ({
      ...s, type: 'Degree - Sem 4', href: 'degree.html'
    }))
  ];

  grid.innerHTML = cards.map(s => `
    <div class="subject-card" onclick="window.location='${s.href}'">
      <div class="subject-card-top">
        <div class="subject-emoji ${s.color}">${s.icon}</div>
        <div>
          <h3>${s.name}</h3>
          <span class="tag">${s.type}</span>
        </div>
      </div>
      <div class="subject-meta">
        <span><i class="fas fa-book-open"></i> ${s.chapters || s.chapters_list?.length || '?'} Chapters</span>
        <span><i class="fas fa-file-pdf"></i> ${s.pdfs || 'Multiple'} PDFs</span>
      </div>
      <div class="subject-card-footer">
        <span style="font-size:0.8rem;color:var(--text-muted)">Tap to explore</span>
        <div class="arrow"><i class="fas fa-arrow-right"></i></div>
      </div>
    </div>
  `).join('');
}

// =============================================
// DDCET EXPLORER
// =============================================

function initDDCET() {
  renderDDCETSidebar();
  renderDDCETCards(null); // Show subjects by default
}

let ddcetState = { subject: null, chapter: null };

function renderDDCETSidebar() {
  const tree = document.getElementById('ddcet-tree');
  if (!tree) return;

  tree.innerHTML = ddcetData.subjects.map(sub => `
    <div class="tree-item">
      <div class="tree-label" onclick="ddcetSelectSubject('${sub.id}', this)">
        <i class="fas fa-chevron-right tree-icon"></i>
        <i class="fas fa-folder folder-icon"></i>
        <span>${sub.icon} ${sub.name}</span>
      </div>
      <div class="tree-children" id="tree-${sub.id}">
        ${sub.chapters_list.map(ch => `
          <div class="tree-item">
            <div class="tree-label" onclick="ddcetSelectChapter('${sub.id}', '${ch.id}', this)">
              <i class="fas fa-folder-open folder-icon" style="font-size:0.8rem"></i>
              <span>${ch.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function ddcetSelectSubject(subId, el) {
  // Toggle tree
  const treeChildren = document.getElementById(`tree-${subId}`);
  const isOpen = treeChildren.classList.toggle('open');
  el.classList.toggle('open', isOpen);

  // Update state
  ddcetState = { subject: subId, chapter: null };
  renderDDCETCards(subId);
  updateDDCETBreadcrumb();

  // Active state
  document.querySelectorAll('#ddcet-tree .tree-label').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function ddcetSelectChapter(subId, chId, el) {
  ddcetState = { subject: subId, chapter: chId };
  renderDDCETMaterials(subId, chId);
  updateDDCETBreadcrumb();

  document.querySelectorAll('#ddcet-tree .tree-label').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function renderDDCETCards(subId) {
  const main = document.getElementById('ddcet-main');
  if (!main) return;

  if (!subId) {
    // Show all subjects
    main.innerHTML = `
      <div class="explorer-breadcrumb">
        <span class="bc-item" onclick="renderDDCETCards(null)"><i class="fas fa-home"></i> DDCET Notes</span>
      </div>
      <div class="explorer-cards">
        ${ddcetData.subjects.map(sub => `
          <div class="explorer-card" onclick="ddcetClickCard('${sub.id}')">
            <div class="ec-icon ${sub.color}">${sub.icon}</div>
            <h4>${sub.name}</h4>
            <p>${sub.chapters_list.length} Chapters · ${sub.pdfs} PDFs</p>
            <span class="ec-type">${sub.tag}</span>
          </div>
        `).join('')}
      </div>`;
    return;
  }

  const sub = ddcetData.subjects.find(s => s.id === subId);
  if (!sub) return;

  main.innerHTML = `
    <div class="explorer-breadcrumb">
      <span class="bc-item" onclick="renderDDCETCards(null)"><i class="fas fa-home"></i> DDCET Notes</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item current">${sub.name}</span>
    </div>
    <div class="explorer-cards">
      ${sub.chapters_list.map(ch => `
        <div class="explorer-card" onclick="ddcetSelectChapterDirect('${sub.id}', '${ch.id}')">
          <div class="ec-icon icon-orange"><i class="fas fa-folder-open"></i></div>
          <h4>${ch.name}</h4>
          <p>${Object.keys(ch.materials).length} material types</p>
          <span class="ec-type">Chapter</span>
        </div>
      `).join('')}
    </div>`;
}

function ddcetClickCard(subId) {
  ddcetState.subject = subId;
  ddcetState.chapter = null;
  renderDDCETCards(subId);

  // Open tree
  const treeEl = document.querySelector(`[onclick*="ddcetSelectSubject('${subId}'"]`);
  const treeChildren = document.getElementById(`tree-${subId}`);
  if (treeChildren) treeChildren.classList.add('open');
  if (treeEl) { treeEl.classList.add('open'); treeEl.classList.add('active'); }
}

function ddcetSelectChapterDirect(subId, chId) {
  ddcetState = { subject: subId, chapter: chId };
  renderDDCETMaterials(subId, chId);
}

function renderDDCETMaterials(subId, chId) {
  const sub = ddcetData.subjects.find(s => s.id === subId);
  const ch = sub?.chapters_list.find(c => c.id === chId);
  if (!sub || !ch) return;

  const main = document.getElementById('ddcet-main');
  let materialsHTML = '';

  Object.entries(ch.materials).forEach(([type, items]) => {
    if (items.length === 0) return;
    const mi = getMaterialIcon(type);
    materialsHTML += `
      <div class="materials-section-title"><i class="fas ${mi.icon}" style="color:var(--primary);margin-right:6px"></i>${type}</div>
      <div class="materials-list">
        ${items.map(item => `
          <div class="material-item" onclick="showToast('Opening: ${item.title}')">
            <div class="mi-icon ${mi.bg}"><i class="fas ${mi.icon}"></i></div>
            <div class="mi-info">
              <h4>${item.title}</h4>
              <p>${item.size}${item.pages ? ' · ' + item.pages + ' pages' : ''}</p>
            </div>
            <div class="mi-action"><i class="fas ${item.size === 'YouTube' ? 'fa-external-link-alt' : 'fa-download'}"></i></div>
          </div>
        `).join('')}
      </div>`;
  });

  main.innerHTML = `
    <div class="explorer-breadcrumb">
      <span class="bc-item" onclick="renderDDCETCards(null)"><i class="fas fa-home"></i> DDCET Notes</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item" onclick="renderDDCETCards('${subId}')">${sub.name}</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item current">${ch.name}</span>
    </div>
    ${materialsHTML || '<p style="color:var(--text-muted);padding:20px">No materials added yet.</p>'}`;
}

function updateDDCETBreadcrumb() {}

// =============================================
// DEGREE EXPLORER
// =============================================

function initDegree() {
  renderDegreeSidebar();
  renderDegreeCards(null);
}

let degreeState = { sem: null, subject: null };

function renderDegreeSidebar() {
  const tree = document.getElementById('degree-tree');
  if (!tree) return;

  tree.innerHTML = degreeData.semesters.map(sem => `
    <div class="tree-item">
      <div class="tree-label" onclick="degreeSelectSem('${sem.id}', this)">
        <i class="fas fa-chevron-right tree-icon"></i>
        <i class="fas fa-folder folder-icon"></i>
        <span>${sem.icon} ${sem.name}</span>
      </div>
      <div class="tree-children" id="tree-${sem.id}">
        ${sem.subjects.map(sub => `
          <div class="tree-item">
            <div class="tree-label" onclick="degreeSelectSubject('${sem.id}', '${sub.id}', this)">
              <i class="fas fa-book file-icon" style="font-size:0.8rem"></i>
              <span>${sub.icon} ${sub.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function degreeSelectSem(semId, el) {
  const treeChildren = document.getElementById(`tree-${semId}`);
  const isOpen = treeChildren.classList.toggle('open');
  el.classList.toggle('open', isOpen);

  degreeState = { sem: semId, subject: null };
  renderDegreeCards(semId);

  document.querySelectorAll('#degree-tree .tree-label').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function degreeSelectSubject(semId, subId, el) {
  degreeState = { sem: semId, subject: subId };
  renderDegreeMaterials(semId, subId);

  document.querySelectorAll('#degree-tree .tree-label').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function renderDegreeCards(semId) {
  const main = document.getElementById('degree-main');
  if (!main) return;

  if (!semId) {
    main.innerHTML = `
      <div class="explorer-breadcrumb">
        <span class="bc-item"><i class="fas fa-home"></i> Degree Notes</span>
      </div>
      <div class="explorer-cards">
        ${degreeData.semesters.map(sem => `
          <div class="explorer-card" onclick="degreeClickCard('${sem.id}')">
            <div class="ec-icon icon-blue" style="font-size:1.6rem">${sem.icon}</div>
            <h4>${sem.name}</h4>
            <p>${sem.subjects.length} Subjects</p>
            <span class="ec-type">Semester</span>
          </div>
        `).join('')}
      </div>`;
    return;
  }

  const sem = degreeData.semesters.find(s => s.id === semId);
  if (!sem) return;

  main.innerHTML = `
    <div class="explorer-breadcrumb">
      <span class="bc-item" onclick="renderDegreeCards(null)"><i class="fas fa-home"></i> Degree Notes</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item current">${sem.name}</span>
    </div>
    <div class="explorer-cards">
      ${sem.subjects.map(sub => `
        <div class="explorer-card" onclick="degreeSelectSubjectDirect('${sem.id}', '${sub.id}')">
          <div class="ec-icon ${sub.color}">${sub.icon}</div>
          <h4>${sub.name}</h4>
          <p>${Object.keys(sub.materials).length} material types</p>
          <span class="ec-type">Subject</span>
        </div>
      `).join('')}
    </div>`;
}

function degreeClickCard(semId) {
  degreeState.sem = semId;
  degreeState.subject = null;
  renderDegreeCards(semId);

  const treeChildren = document.getElementById(`tree-${semId}`);
  if (treeChildren) treeChildren.classList.add('open');
}

function degreeSelectSubjectDirect(semId, subId) {
  degreeState = { sem: semId, subject: subId };
  renderDegreeMaterials(semId, subId);
}

function renderDegreeMaterials(semId, subId) {
  const sem = degreeData.semesters.find(s => s.id === semId);
  const sub = sem?.subjects.find(s => s.id === subId);
  if (!sem || !sub) return;

  const main = document.getElementById('degree-main');
  let materialsHTML = '';

  Object.entries(sub.materials).forEach(([type, items]) => {
    if (items.length === 0) return;
    const mi = getMaterialIcon(type);
    materialsHTML += `
      <div class="materials-section-title"><i class="fas ${mi.icon}" style="color:var(--primary);margin-right:6px"></i>${type}</div>
      <div class="materials-list">
        ${items.map(item => `
          <div class="material-item" onclick="showToast('Opening: ${item.title}')">
            <div class="mi-icon ${mi.bg}"><i class="fas ${mi.icon}"></i></div>
            <div class="mi-info">
              <h4>${item.title}</h4>
              <p>${item.size}${item.pages ? ' · ' + item.pages + ' pages' : ''}</p>
            </div>
            <div class="mi-action"><i class="fas ${item.size === 'YouTube' ? 'fa-external-link-alt' : 'fa-download'}"></i></div>
          </div>
        `).join('')}
      </div>`;
  });

  main.innerHTML = `
    <div class="explorer-breadcrumb">
      <span class="bc-item" onclick="renderDegreeCards(null)"><i class="fas fa-home"></i> Degree Notes</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item" onclick="renderDegreeCards('${semId}')">${sem.name}</span>
      <i class="fas fa-chevron-right"></i>
      <span class="bc-item current">${sub.name}</span>
    </div>
    ${materialsHTML || '<p style="color:var(--text-muted);padding:20px">No materials added yet.</p>'}`;
}

// =============================================
// CONTACT FORM
// =============================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We\'ll get back to you soon 🎉');
    form.reset();
  });
}

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNavbar();
  initHomePage();
  initDDCET();
  initDegree();
  initContactForm();
});

const POSTS = [
  {
    slug: "welcome.html",
    title: "Introduction",
    excerpt: "More about me and my interest in ethical and safe AI",
    kind: "opinion",
    date: "2026-04-20",
    readTime: 4
  },
  // {
  //   slug: "draft-research.html",
  //   title: "Research draft",
  //   excerpt: "Draft",
  //   kind: "research",
  //   date: "2026-04-23",
  //   readTime: 0
  // },
];

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
}

function sorted() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

function renderList(posts, mount) {
  if (!mount) return;
  if (posts.length === 0) {
    mount.innerHTML = `<li style="color: var(--faint); font-style: italic;">Nothing here yet.</li>`;
    return;
  }
  mount.innerHTML = posts.map(p => `
    <li>
      <h3><a href="posts/${p.slug}">${p.title}</a></h3>
      <p class="excerpt">${p.excerpt}</p>
      <div class="meta">
        <span class="tag">${p.kind}</span>
        <span>${fmtDate(p.date)} · ${p.readTime} min</span>
      </div>
    </li>
  `).join("");
}

function renderHome() {
  const mount = document.getElementById("home-list");
  if (!mount) return;
  renderList(sorted().slice(0, 5), mount);
}

let filter = "all";

function renderArchive() {
  const mount = document.getElementById("archive-list");
  if (!mount) return;
  const all = sorted();
  const filtered = filter === "all" ? all : all.filter(p => p.kind === filter);
  renderList(filtered, mount);
  const count = document.getElementById("count");
  if (count) count.textContent = `${filtered.length} of ${all.length}`;
}

function initFilters() {
  const bar = document.getElementById("filters");
  if (!bar) return;
  bar.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-f]");
    if (!b) return;
    filter = b.dataset.f;
    bar.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
    renderArchive();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderArchive();
  initFilters();
});

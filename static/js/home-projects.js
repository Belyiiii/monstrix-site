(() => {
  const catalog = document.querySelector('[data-project-catalog]');
  if (!catalog) return;

  const search = catalog.querySelector('[data-project-search]');
  const clear = catalog.querySelector('[data-project-clear]');
  const count = catalog.querySelector('[data-project-count]');
  const empty = catalog.querySelector('[data-project-empty]');
  const filters = [...catalog.querySelectorAll('[data-project-filter]')];
  const projects = [...catalog.querySelectorAll('[data-project]')];
  let activeStatus = 'all';

  const normalize = (value) => value.trim().toLocaleLowerCase('ru-RU');

  const render = () => {
    const query = normalize(search.value);
    let visible = 0;

    projects.forEach((project) => {
      const matchesText = normalize(project.dataset.search || '').includes(query);
      const matchesStatus = activeStatus === 'all' || project.dataset.status === activeStatus;
      const show = matchesText && matchesStatus;
      project.hidden = !show;
      if (show) visible += 1;
    });

    clear.hidden = query.length === 0;
    empty.hidden = visible !== 0;
    count.textContent = visible === projects.length
      ? `${projects.length} проектов`
      : `${visible} из ${projects.length}`;
  };

  search.addEventListener('input', render);
  clear.addEventListener('click', () => {
    search.value = '';
    search.focus();
    render();
  });

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      activeStatus = filter.dataset.projectFilter;
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === filter)));
      render();
    });
  });

  projects.forEach((project) => {
    project.addEventListener('toggle', () => {
      if (!project.open) return;
      projects.forEach((item) => {
        if (item !== project) item.open = false;
      });
    });
  });
})();

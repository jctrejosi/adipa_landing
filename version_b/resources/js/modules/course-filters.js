export function initCourseFilters() {
    const filtersEl = document.querySelector('[data-filters-component]');
    const courseListEl = document.querySelector('[data-course-list-component]');
    if (!filtersEl || !courseListEl) return;

    // ----- Datos iniciales -----
    let allCourses = JSON.parse(courseListEl.querySelector('[data-courses-json]').value);
    const sortOptions = JSON.parse(courseListEl.querySelector('[data-sort-options]').value);

    // Estado compartido
    let state = {
        ranking: '*',
        filters: {},
        search: '',
        sort: '*'
    };

    // Elementos DOM
    const coursesContainer = courseListEl.querySelector('[data-courses-container]');
    const searchInput = courseListEl.querySelector('[data-search-input]');
    const searchClear = courseListEl.querySelector('[data-search-clear]');
    const sortTrigger = courseListEl.querySelector('[data-sort-toggle]');
    const sortDropdown = courseListEl.querySelector('[data-sort-dropdown]');
    const sortLabelSpan = courseListEl.querySelector('[data-sort-label]');

    // Funciones helpers (normalización, parseo de fechas/precios)
    function normalizeText(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    function parsePrice(priceStr) {
        if (!priceStr) return 0;
        const num = parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
        return isNaN(num) ? 0 : num;
    }
    function parseDate(dateStr) {
        if (!dateStr) return new Date(0);
        const parts = dateStr.split('/');
        if (parts.length === 3) return new Date(parts[2], parts[1]-1, parts[0]);
        return new Date(dateStr);
    }
    function formatPrice(price) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(price);
    }

    // ----- Lógica de filtrado y ordenamiento -----
    function filterAndSortCourses() {
        let filtered = [...allCourses];

        // Filtro por ranking (simulamos, en realidad ranking podría ser una propiedad del curso)
        if (state.ranking !== '*') {
            filtered = filtered.filter(c => c.ranking === state.ranking);
        }

        // Filtros por grupos (ej. categoría, modalidad, etc.)
        for (const [group, values] of Object.entries(state.filters)) {
            if (values.length === 0) continue;
            filtered = filtered.filter(course => {
                const courseValue = course[group.toLowerCase()]; // depende de cómo guardes los datos
                return values.includes(courseValue);
            });
        }

        // Búsqueda textual
        const searchTerm = normalizeText(state.search);
        if (searchTerm) {
            filtered = filtered.filter(course => {
                const text = normalizeText([course.title, course.teacher, course.category, course.description].filter(Boolean).join(' '));
                return text.includes(searchTerm);
            });
        }

        // Ordenamiento
        if (state.sort !== '*') {
            if (state.sort === 'price-asc') {
                filtered.sort((a,b) => parsePrice(a.discountedPrice ?? a.price) - parsePrice(b.discountedPrice ?? b.price));
            } else if (state.sort === 'price-desc') {
                filtered.sort((a,b) => parsePrice(b.discountedPrice ?? b.price) - parsePrice(a.discountedPrice ?? a.price));
            } else if (state.sort === 'prox-asc') {
                filtered.sort((a,b) => parseDate(a.startDate) - parseDate(b.startDate));
            } else if (state.sort === 'prox-desc') {
                filtered.sort((a,b) => parseDate(b.startDate) - parseDate(a.startDate));
            }
        }

        renderCourses(filtered);
    }

    // Renderizado de tarjetas
    function renderCourses(courses) {
        const template = document.getElementById('course-card-template');
        if (!template) return;

        if (courses.length === 0) {
            coursesContainer.innerHTML = `<div class="course-list__empty">${courseListEl.getAttribute('data-no-results-text') || 'No se encontraron cursos.'}</div>`;
            return;
        }

        coursesContainer.innerHTML = '';
        courses.forEach(course => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.course-card');

            // Imagen
            const img = card.querySelector('.course-card__image');
            if (course.imageUrl) img.src = course.imageUrl;
            img.alt = course.title;

            // Título
            card.querySelector('.course-card__title').textContent = course.title;

            // Profesor
            const teacherSpan = card.querySelector('.course-card__teacher span');
            if (course.teacher) teacherSpan.textContent = course.teacher;
            else card.querySelector('.course-card__teacher').style.display = 'none';

            // Fecha y estado
            const startLabelSpan = card.querySelector('.course-card__start-label');
            startLabelSpan.textContent = courseListEl.getAttribute('data-start-label') || 'Inicio :';
            const startDateSpan = card.querySelector('.course-card__start-date');
            startDateSpan.textContent = course.startDate || '';
            if (course.isInProgress) {
                const inProgSpan = card.querySelector('.course-card__in-progress');
                inProgSpan.textContent = courseListEl.getAttribute('data-in-progress-label') || '• En progreso';
                inProgSpan.style.display = 'inline';
            }

            // Precios
            const price = course.discountedPrice ?? course.price;
            const originalPrice = course.originalPrice;
            const discount = course.discount;
            const priceDiv = card.querySelector('.course-card__price');
            priceDiv.textContent = formatPrice(price);
            if (discount) {
                const discountDiv = card.querySelector('.course-card__discount');
                discountDiv.textContent = `-${discount}%`;
                discountDiv.style.display = 'inline-block';
            }
            if (originalPrice) {
                const originalDiv = card.querySelector('.course-card__original-price');
                originalDiv.textContent = formatPrice(originalPrice);
                originalDiv.style.display = 'block';
            }

            // Badge "En vivo"
            if (course.isLive) {
                const liveBadge = card.querySelector('.course-card__live-badge');
                liveBadge.querySelector('.course-card__live-text').textContent = courseListEl.getAttribute('data-live-label') || 'En vivo';
                liveBadge.style.display = 'flex';
            }

            // Rating
            if (course.rating) {
                const ratingDiv = card.querySelector('.course-card__rating');
                ratingDiv.querySelector('.course-card__rating-value').textContent = course.rating;
                ratingDiv.style.display = 'flex';
            }

            // Botones (eventos)
            const detailBtn = card.querySelector('.course-card__detail-btn');
            detailBtn.textContent = courseListEl.getAttribute('data-detail-button-label') || 'Ver detalle +';
            detailBtn.addEventListener('click', () => {
                window.location.href = `/curso/${course.id}`;
            });
            const cartBtn = card.querySelector('.course-card__cart-btn');
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Agregar al carrito', course.id);
            });

            coursesContainer.appendChild(clone);
        });
    }

    // ----- Sincronización de filtros (eventos) -----
    function updateFiltersUI() {
        // Actualizar radio buttons de ranking
        document.querySelectorAll('[data-ranking-value]').forEach(el => {
            const radio = el.querySelector('input[type="radio"]');
            const value = el.getAttribute('data-ranking-value');
            if (value === state.ranking) {
                radio.checked = true;
                el.classList.add('active');
            } else {
                radio.checked = false;
                el.classList.remove('active');
            }
        });

        // Actualizar checkboxes
        document.querySelectorAll('.filters__checkbox input').forEach(cb => {
            const group = cb.getAttribute('data-group');
            const val = cb.value;
            cb.checked = state.filters[group]?.includes(val) || false;
        });

        // Renderizar chips activos
        const chipsContainer = document.querySelectorAll('[data-filters-active-chips]');
        chipsContainer.forEach(container => {
            container.innerHTML = '';
            for (const [group, values] of Object.entries(state.filters)) {
                values.forEach(val => {
                    const chip = document.createElement('div');
                    chip.className = 'filters__chip';
                    chip.innerHTML = `${val} <span class="filters__chip-remove" data-group="${group}" data-value="${val}">×</span>`;
                    chip.querySelector('.filters__chip-remove').addEventListener('click', (e) => {
                        e.stopPropagation();
                        removeFilter(group, val);
                    });
                    container.appendChild(chip);
                });
            }
        });

        // Actualizar label del ranking en móvil
        const rankingLabelSpan = document.querySelector('[data-filters-rankings-label]');
        if (rankingLabelSpan) {
            const selectedRankingObj = [...document.querySelectorAll('[data-ranking-value]')].find(el => el.getAttribute('data-ranking-value') === state.ranking);
            rankingLabelSpan.textContent = selectedRankingObj ? selectedRankingObj.querySelector('.filters__ranking-label').textContent : 'Rankings';
        }
    }

    function setRanking(value) {
        state.ranking = value;
        updateFiltersUI();
        filterAndSortCourses();
        // Emitir evento para que el padre pueda hacer algo
        document.dispatchEvent(new CustomEvent('filters-change', { detail: { ranking: state.ranking, filters: state.filters } }));
    }

    function toggleFilter(group, value, isChecked) {
        const current = state.filters[group] || [];
        let updated;
        if (isChecked) {
            updated = [...current, value];
        } else {
            updated = current.filter(v => v !== value);
        }
        if (updated.length === 0) {
            delete state.filters[group];
        } else {
            state.filters[group] = updated;
        }
        updateFiltersUI();
        filterAndSortCourses();
        document.dispatchEvent(new CustomEvent('filters-change', { detail: { ranking: state.ranking, filters: state.filters } }));
    }

    function removeFilter(group, value) {
        const current = state.filters[group] || [];
        const updated = current.filter(v => v !== value);
        if (updated.length === 0) {
            delete state.filters[group];
        } else {
            state.filters[group] = updated;
        }
        // Actualizar checkbox correspondiente
        const checkbox = document.querySelector(`.filters__checkbox input[data-group="${group}"][value="${value}"]`);
        if (checkbox) checkbox.checked = false;
        updateFiltersUI();
        filterAndSortCourses();
        document.dispatchEvent(new CustomEvent('filters-change', { detail: { ranking: state.ranking, filters: state.filters } }));
    }

    function clearAllFilters() {
        state.ranking = '*';
        state.filters = {};
        updateFiltersUI();
        filterAndSortCourses();
        document.dispatchEvent(new CustomEvent('filters-change', { detail: { ranking: state.ranking, filters: state.filters } }));
    }

    // ----- Eventos de los filtros -----
    document.querySelectorAll('[data-ranking-value]').forEach(el => {
        el.addEventListener('click', () => {
            const value = el.getAttribute('data-ranking-value');
            setRanking(value);
            // Cerrar dropdowns móviles si están abiertos
            document.querySelectorAll('[data-filters-rankings-panel], [data-filters-filters-panel]').forEach(panel => {
                panel.style.display = 'none';
            });
        });
    });

    document.querySelectorAll('.filters__checkbox input').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const group = cb.getAttribute('data-group');
            const value = cb.value;
            toggleFilter(group, value, cb.checked);
        });
    });

    document.querySelectorAll('[data-filters-clear-all]').forEach(btn => {
        btn.addEventListener('click', clearAllFilters);
    });

    // Acordeones de grupos (desktop y mobile)
    document.querySelectorAll('[data-group-toggle]').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const groupDiv = toggle.closest('.filters__group');
            const optionsDiv = groupDiv.querySelector('.filters__group-options');
            const arrowSpan = toggle.querySelector('.filters__group-arrow');
            if (optionsDiv.style.display === 'none') {
                optionsDiv.style.display = 'flex';
                arrowSpan.innerHTML = '▲';
            } else {
                optionsDiv.style.display = 'none';
                arrowSpan.innerHTML = '▼';
            }
        });
    });

    // Dropdowns móviles
    const rankingsToggle = document.querySelector('[data-filters-rankings-toggle]');
    const rankingsPanel = document.querySelector('[data-filters-rankings-panel]');
    const filtersToggle = document.querySelector('[data-filters-filters-toggle]');
    const filtersPanel = document.querySelector('[data-filters-filters-panel]');
    if (rankingsToggle && rankingsPanel) {
        rankingsToggle.addEventListener('click', () => {
            const isVisible = rankingsPanel.style.display === 'block';
            rankingsPanel.style.display = isVisible ? 'none' : 'block';
            if (filtersPanel) filtersPanel.style.display = 'none';
        });
    }
    if (filtersToggle && filtersPanel) {
        filtersToggle.addEventListener('click', () => {
            const isVisible = filtersPanel.style.display === 'block';
            filtersPanel.style.display = isVisible ? 'none' : 'block';
            if (rankingsPanel) rankingsPanel.style.display = 'none';
        });
    }

    // ----- Lógica del CourseList (búsqueda y orden) -----
    function setSearch(value) {
        state.search = value;
        if (searchInput) searchInput.value = value;
        if (searchClear) searchClear.style.display = value ? 'flex' : 'none';
        filterAndSortCourses();
        // Emitir evento para el padre (opcional)
        document.dispatchEvent(new CustomEvent('search-change', { detail: { search: value } }));
    }

    function setSort(value) {
        state.sort = value;
        const selectedOpt = sortOptions.find(opt => opt.value === value);
        if (sortLabelSpan) sortLabelSpan.textContent = selectedOpt ? selectedOpt.label : courseListEl.getAttribute('data-all-label') || 'Todos';
        if (sortDropdown) sortDropdown.style.display = 'none';
        filterAndSortCourses();
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => setSearch(e.target.value));
    }
    if (searchClear) {
        searchClear.addEventListener('click', () => setSearch(''));
    }
    if (sortTrigger && sortDropdown) {
        sortTrigger.addEventListener('click', () => {
            const isVisible = sortDropdown.style.display === 'block';
            sortDropdown.style.display = isVisible ? 'none' : 'block';
        });
        document.querySelectorAll('[data-sort-value]').forEach(opt => {
            opt.addEventListener('click', () => {
                const value = opt.getAttribute('data-sort-value');
                setSort(value);
            });
        });
        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!sortTrigger.contains(e.target) && !sortDropdown.contains(e.target)) {
                sortDropdown.style.display = 'none';
            }
        });
    }

    // Inicializar estado desde atributos (si los hay)
    const initialSort = courseListEl.querySelector('[data-sort-value]')?.value || '*';
    setSort(initialSort);
    setSearch('');
    // Forzar render inicial
    filterAndSortCourses();
}
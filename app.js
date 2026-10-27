/**
 * SANARAA PLATFORM - INTERACTIVE APPLICATION LOGIC
 * High-performance, clean vanilla JavaScript with Egyptian Professional Localization
 * English (Default) & Arabic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. THEME ENFORCEMENT - STRICTLY CLEAN LIGHT / DAYLIGHT (NEVER BLACK)
  document.documentElement.setAttribute('data-theme', 'light');

  // 2. MOBILE MENU DRAWER
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  let closeDrawer = () => {};

  if (mobileMenuBtn && mobileDrawer) {
    const setDrawer = (open) => {
      mobileDrawer.classList.toggle('open', open);
      mobileMenuBtn.setAttribute('aria-expanded', String(open));
      mobileMenuBtn.setAttribute('aria-label', open ? 'Close Menu' : 'Open Menu');
    };
    closeDrawer = () => setDrawer(false);

    setDrawer(false);
    mobileMenuBtn.addEventListener('click', () => setDrawer(!mobileDrawer.classList.contains('open')));
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setDrawer(false);
        mobileMenuBtn.focus();
      }
    });

    mobileDrawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => setDrawer(false));
    });
  }

  // 3. AUTHENTICATION MODAL (LOGIN & REGISTER)
  const authModal = document.getElementById('authModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const openRegisterBtn = document.getElementById('openRegisterBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');

  const tabLoginBtn = document.getElementById('tabLoginBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const loginFormView = document.getElementById('loginFormView');
  const registerFormView = document.getElementById('registerFormView');

  function openAuthModal(view = 'login') {
    if (!authModal) return;
    authModal.classList.add('open');
    authModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (view === 'login') {
      activateLoginTab();
    } else {
      activateRegisterTab();
    }
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove('open');
    authModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function activateLoginTab() {
    if (!tabLoginBtn) return;
    tabLoginBtn.classList.add('active');
    tabRegisterBtn?.classList.remove('active');
    if (loginFormView) loginFormView.style.display = 'block';
    if (registerFormView) registerFormView.style.display = 'none';
  }

  function activateRegisterTab() {
    if (!tabRegisterBtn) return;
    tabRegisterBtn.classList.add('active');
    tabLoginBtn?.classList.remove('active');
    if (loginFormView) loginFormView.style.display = 'none';
    if (registerFormView) registerFormView.style.display = 'block';
  }

  if (openLoginBtn) openLoginBtn.addEventListener('click', () => openAuthModal('login'));
  if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', () => {
      closeDrawer();
      openAuthModal('login');
    });
  }

  if (openRegisterBtn) openRegisterBtn.addEventListener('click', () => openAuthModal('register'));
  if (mobileRegisterBtn) {
    mobileRegisterBtn.addEventListener('click', () => {
      closeDrawer();
      openAuthModal('register');
    });
  }

  // Deep link: ?auth=login|register
  const authView = new URLSearchParams(location.search).get('auth');
  if (authView === 'login' || authView === 'register') openAuthModal(authView);

  if (tabLoginBtn) tabLoginBtn.addEventListener('click', activateLoginTab);
  if (tabRegisterBtn) tabRegisterBtn.addEventListener('click', activateRegisterTab);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAuthModal);

  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal && authModal.classList.contains('open')) {
      closeAuthModal();
    }
  });

  // Role Selection active state in Registration
  const roleRadios = document.querySelectorAll('input[name="accountType"]');
  function updateRoleCardStyles() {
    roleRadios.forEach(radio => {
      const parentLabel = radio.closest('.role-card-label');
      if (parentLabel) {
        parentLabel.classList.toggle('selected', radio.checked);
      }
    });
  }
  roleRadios.forEach(radio => radio.addEventListener('change', updateRoleCardStyles));

  // 4. REAL FIREBASE AUTHENTICATION HANDLERS
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value.trim();
      const password = document.getElementById('loginPassword')?.value;
      const submitBtn = document.getElementById('submitLoginBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      const isEn = window.SanaraI18n?.getCurrentLang() === 'en';

      if (!email || !password) {
        showToast(isEn ? 'Please enter email and password.' : 'يرجى كتابة البريد الإلكتروني وكلمة المرور.', 'warning');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = isEn ? 'Signing in... ⏳' : 'جاري تسجيل الدخول... ⏳';
      }

      if (window.SanaraFirebase && window.SanaraFirebase.loginUser) {
        const result = await window.SanaraFirebase.loginUser(email, password);
        if (result.success) {
          closeAuthModal();
          showToast(isEn ? `Welcome back, ${result.profile?.fullName || 'User'}!` : `أهلاً بك يا ${result.profile?.fullName || ''}! تم تسجيل الدخول بنجاح`, 'success');
          updateNavAuthUI(result.user, result.profile);
        } else {
          showToast(result.error || (isEn ? 'Login failed, check your credentials.' : 'فشل تسجيل الدخول، تأكد من بياناتك.'), 'error');
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fullName = document.getElementById('regFullName')?.value.trim();
      const email = document.getElementById('regEmail')?.value.trim();
      const password = document.getElementById('regPassword')?.value;
      const roleRadio = document.querySelector('input[name="accountType"]:checked');
      const role = roleRadio ? roleRadio.value : 'seeker';
      const submitBtn = document.getElementById('submitRegisterBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      const isEn = window.SanaraI18n?.getCurrentLang() === 'en';

      if (!fullName || !email || !password) {
        showToast(isEn ? 'Please fill all required fields.' : 'يرجى ملء كافة البيانات المطلوبة.', 'warning');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = isEn ? 'Creating account in Firebase... ⏳' : 'جاري إنشاء الحساب في فايربيس... ⏳';
      }

      if (window.SanaraFirebase && window.SanaraFirebase.registerUser) {
        const result = await window.SanaraFirebase.registerUser({
          email,
          password,
          fullName,
          role
        });

        if (result.success) {
          closeAuthModal();
          showToast(isEn ? `Account created successfully, welcome ${fullName}! 🚀` : `تم إنشاء وتفعيل حسابك بنجاح يا ${fullName}! 🚀`, 'success');
          updateNavAuthUI(result.user, result.profile);

          setTimeout(() => {
            if (window.SanaraFirebase.initCloudMessaging) {
              window.SanaraFirebase.initCloudMessaging();
            }
          }, 1200);
        } else {
          showToast(result.error || (isEn ? 'Failed to create account.' : 'تعذر إنشاء الحساب.'), 'error');
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // 5. NAVBAR AUTHENTICATION UI
  function updateNavAuthUI(user, profile) {
    const navActions = document.querySelector('.nav-actions');
    const mobileAuthActions = document.querySelector('.mobile-auth-actions');

    if (!navActions) return;

    if (user) {
      const displayName = profile?.fullName || user.displayName || user.email.split('@')[0];
      const isEn = (window.SanaraI18n && window.SanaraI18n.getCurrentLang() === 'en');
      const logoutLabel = isEn ? 'Sign Out' : 'تسجيل الخروج';
      const roleBadge = profile?.role === 'employer' 
        ? (isEn ? 'Employer 🏢' : 'صاحب عمل 🏢') 
        : (isEn ? 'Candidate 👤' : 'مرشح 👤');
      const targetUrl = profile?.role === 'employer' ? 'employer-dashboard.html' : 'profile.html';

      navActions.innerHTML = `
        <div class="lang-pill" id="langSwitcherDesktop" role="button" aria-label="Toggle Language" tabindex="0">
          <span class="lang-opt ${isEn ? 'active' : ''}" data-lang="en">EN</span>
          <span class="lang-sep">|</span>
          <span class="lang-opt ${!isEn ? 'active' : ''}" data-lang="ar">عربي</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <a href="${targetUrl}" style="text-decoration:none; display:flex; align-items:center; gap:8px; padding:6px 14px; background:var(--brand-blue-light); border-radius:var(--radius-pill); font-weight:700; color:var(--brand-blue); font-size:0.9rem;">
            <span>👋 ${displayName}</span>
            <span style="font-size:0.75rem; background:rgba(0,71,255,0.14); padding:2px 8px; border-radius:99px;">${roleBadge}</span>
          </a>
          <button type="button" class="btn-ghost" id="logoutBtn" style="padding:6px 14px; font-size:0.85rem;">${logoutLabel}</button>
        </div>
      `;

      if (mobileAuthActions) {
        mobileAuthActions.innerHTML = `
          <div class="lang-pill-container" style="display: flex; justify-content: center; margin-bottom: 12px;">
            <div class="lang-pill" role="button" aria-label="Toggle Language" tabindex="0">
              <span class="lang-opt ${isEn ? 'active' : ''}" data-lang="en">EN</span>
              <span class="lang-sep">|</span>
              <span class="lang-opt ${!isEn ? 'active' : ''}" data-lang="ar">عربي</span>
            </div>
          </div>
          <div style="padding:10px 0; text-align:center;">
            <strong>👋 ${displayName}</strong>
          </div>
          <button type="button" class="btn-ghost w-100" id="mobileLogoutBtn">${logoutLabel}</button>
        `;
      }

      const logoutHandler = async () => {
        if (window.SanaraFirebase && window.SanaraFirebase.logoutUser) {
          await window.SanaraFirebase.logoutUser();
        }
        showToast(isEn ? 'Signed out successfully.' : 'تم تسجيل الخروج بنجاح.', 'info');
        setTimeout(() => window.location.reload(), 500);
      };

      document.getElementById('logoutBtn')?.addEventListener('click', logoutHandler);
      document.getElementById('mobileLogoutBtn')?.addEventListener('click', logoutHandler);
    }
  }

  // Reactive listener to auth changes on page load
  window.addEventListener('load', () => {
    if (window.SanaraFirebase && window.SanaraFirebase.onAuthChange) {
      window.SanaraFirebase.onAuthChange((user, profile) => {
        if (user) updateNavAuthUI(user, profile);
      });
    }
  });

  // 6. HOMEPAGE FEATURED JOBS DYNAMIC LOADER (FIRESTORE - ZERO DUMMY NUMBERS)
  let cachedJobs = [];

  function updateCategoryCounts(jobs) {
    const isEn = (window.SanaraI18n && window.SanaraI18n.getCurrentLang() === 'en');
    const counts = {};
    jobs.forEach(j => {
      const c = (j.category || 'tech').toLowerCase();
      counts[c] = (counts[c] || 0) + 1;
    });

    document.querySelectorAll('.category-card').forEach(card => {
      const catKey = card.dataset.category;
      const countEl = card.querySelector('.category-job-count');
      if (countEl) {
        const count = counts[catKey] || 0;
        if (count > 0) {
          countEl.textContent = `${count} ${isEn ? 'Open Vacancies' : 'وظيفة شاغرة'}`;
        } else {
          countEl.textContent = isEn ? 'Explore Sector' : 'تصفح المجال';
        }
      }
    });
  }

  async function loadHomepageFeaturedJobs() {
    const jobsContainer = document.getElementById('jobsContainer');
    if (!jobsContainer) return;

    if (!window.SanaraFirebase || !window.SanaraFirebase.fetchJobs) {
      setTimeout(loadHomepageFeaturedJobs, 400);
      return;
    }

    const isEn = (window.SanaraI18n && window.SanaraI18n.getCurrentLang() === 'en');

    try {
      const jobs = await window.SanaraFirebase.fetchJobs();
      cachedJobs = jobs || [];
      updateCategoryCounts(cachedJobs);

      if (!jobs || jobs.length === 0) {
        jobsContainer.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: #ffffff; border-radius: var(--radius-lg); border: 1.5px dashed var(--border-card);">
            <div style="font-size: 2.2rem; margin-bottom: 12px;">💼</div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-headline); margin-bottom: 8px;">
              ${isEn ? 'No active job vacancies in Firebase yet' : 'لا توجد وظائف معلنة حالياً في فايربيس'}
            </h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 18px;">
              ${isEn ? 'Be the first company to post an opening to reach top Egyptian professionals.' : 'ابدأ بنشر أول فرصة وظيفية لشركتك للوصول إلى آلاف الكفاءات في مصر.'}
            </p>
            <a href="company-register.html" class="btn-primary" style="display: inline-flex;">
              ${isEn ? '+ Register Company & Post Job' : '+ تسجيل شركة ونشر أول وظيفة فوراً'}
            </a>
          </div>
        `;
        return;
      }

      jobsContainer.innerHTML = '';
      jobs.slice(0, 6).forEach(job => {
        const article = document.createElement('article');
        article.className = 'job-card-interactive';
        article.dataset.type = job.category || 'all';

        const tagsHtml = Array.isArray(job.tags) && job.tags.length > 0
          ? job.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')
          : `<span class="skill-tag">${job.type === 'remote' ? (isEn ? 'Remote' : 'عمل عن بُعد') : (isEn ? 'Full-time' : 'دوام كامل')}</span>`;

        const logoHtml = job.companyLogo
          ? `<img src="${job.companyLogo}" alt="${job.company || 'Company'}" class="job-logo-img" style="width:44px; height:44px; border-radius:10px; object-fit:contain; background:#ffffff; padding:3px; border:1px solid var(--border-card); box-shadow:var(--shadow-sm);" onerror="this.onerror=null; this.src=''; this.parentElement.innerHTML='<div class=\\'job-logo-box icon-blue\\'><svg viewBox=\\'0 0 24 24\\' width=\\'24\\' height=\\'24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><rect x=\\'2\\' y=\\'7\\' width=\\'20\\' height=\\'14\\' rx=\\'2\\'></rect><path d=\\'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\'></path></svg></div>';">`
          : `<div class="job-logo-box icon-blue">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>`;

        article.innerHTML = `
          <div class="job-card-top">
            ${logoHtml}
            <div class="job-meta-top">
              <span class="badge-post-date">${isEn ? 'New Today' : 'جديد اليوم'}</span>
              <button type="button" class="btn-bookmark" aria-label="Save"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></button>
            </div>
          </div>
          <h3 class="job-card-title"><a href="job-detail.html?id=${job.id}">${job.title}</a></h3>
          <p class="job-card-company">${job.company} • ${job.location}</p>
          <div class="job-card-chips">
            <span class="chip-item">${job.location}</span>
            <span class="chip-item chip-salary">${job.salary || (isEn ? 'Competitive' : 'راتب مجزي')}</span>
            <span class="chip-item">${job.type || (isEn ? 'Full-time' : 'دوام كامل')}</span>
          </div>
          <div class="job-card-skills">
            ${tagsHtml}
          </div>
          <div class="job-card-action">
            <a href="job-detail.html?id=${job.id}" class="btn-ghost btn-sm">${isEn ? 'View Details' : 'عرض التفاصيل'}</a>
            <button type="button" class="btn-apply-job" data-job-id="${job.id}" data-job-title="${job.title}">
              ${isEn ? 'Apply Now' : 'قدّم الآن'}
            </button>
          </div>
        `;

        article.querySelector('.btn-apply-job').addEventListener('click', async (e) => {
          const btn = e.target;
          btn.textContent = isEn ? 'Submitting... ⏳' : 'جاري التقديم... ⏳';
          btn.disabled = true;

          try {
            if (window.SanaraFirebase && window.SanaraFirebase.submitApplication) {
              await window.SanaraFirebase.submitApplication({
                jobId: job.id,
                jobTitle: job.title
              });
              btn.textContent = isEn ? 'Applied ✓' : 'تم التقديم ✓';
              btn.style.backgroundColor = '#10B981';
              btn.style.color = '#FFFFFF';
              showToast(isEn ? `Applied successfully for "${job.title}"! 🚀` : `تم إرسال طلبك لوظيفة (${job.title}) بنجاح 🚀`, 'success');
            }
          } catch (err) {
            btn.textContent = isEn ? 'Applied ✓' : 'تم التقديم ✓';
            showToast(isEn ? 'Application submitted.' : 'تم إرسال طلبك بنجاح.', 'success');
          }
        });

        jobsContainer.appendChild(article);
      });
    } catch (err) {
      console.warn("Homepage jobs fetch error:", err);
      jobsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
          ${isEn ? 'Unable to load jobs, please check your network connection.' : 'تعذر جلب الوظائف حالياً، يرجى التحقق من اتصال قاعدة البيانات.'}
        </div>
      `;
    }
  }

  // 6.5 TRUSTED COMPANIES DYNAMIC MARQUEE (FIRESTORE)
  async function loadTrustedCompanies() {
    const track = document.getElementById('trustedCompaniesTrack');
    if (!track) return;

    if (!window.SanaraFirebase || !window.SanaraFirebase.fetchTrustedCompanies) {
      setTimeout(loadTrustedCompanies, 400);
      return;
    }

    try {
      const companies = await window.SanaraFirebase.fetchTrustedCompanies();
      if (!companies || companies.length === 0) return;

      const isEn = (window.SanaraI18n && window.SanaraI18n.getCurrentLang() === 'en');
      const itemsHtml = companies.map(c => {
        const name = isEn ? (c.companyNameEn || c.companyName || c.name || 'Enterprise') : (c.companyName || c.companyNameEn || c.name || 'شركة معتمدة');
        const logo = c.logoUrl || c.logo || '';
        return `
          <span class="logo-item" style="display:inline-flex; align-items:center; gap:10px; padding:8px 16px; background:#ffffff; border-radius:12px; border:1px solid var(--border-card); box-shadow:var(--shadow-sm); margin:0 8px;">
            ${logo ? `<img src="${logo}" alt="${name}" style="height:26px; max-width:85px; object-fit:contain; vertical-align:middle;">` : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`}
            <span style="font-weight:700; font-size:0.92rem; color:var(--text-headline); white-space:nowrap;">${name}</span>
          </span>
        `;
      }).join('');

      // Duplicate sequence so marquee scrolls endlessly and seamlessly
      track.innerHTML = itemsHtml + itemsHtml;
    } catch (err) {
      console.warn("Trusted companies load error:", err);
    }
  }

  loadHomepageFeaturedJobs();
  loadTrustedCompanies();

  // Re-render dynamic text on language toggle
  window.addEventListener('sanaraLanguageChanged', () => {
    if (cachedJobs.length > 0) {
      updateCategoryCounts(cachedJobs);
    }
    loadHomepageFeaturedJobs();
    loadTrustedCompanies();
  });

  // 7. EXPANDABLE CATEGORIES
  const toggleAllCategoriesBtn = document.getElementById('toggleAllCategoriesBtn');
  const extraCategories = document.getElementById('extraCategories');
  const viewAllCategoriesText = document.getElementById('viewAllCategoriesText');
  const viewAllArrowIcon = document.getElementById('viewAllArrowIcon');

  if (toggleAllCategoriesBtn && extraCategories) {
    toggleAllCategoriesBtn.addEventListener('click', () => {
      const isHidden = extraCategories.style.display === 'none';
      const isEn = window.SanaraI18n?.getCurrentLang() === 'en';
      if (isHidden) {
        extraCategories.style.display = 'grid';
        if (viewAllCategoriesText) viewAllCategoriesText.textContent = isEn ? 'Show Fewer Sectors' : 'إخفاء المجالات الإضافية';
        if (viewAllArrowIcon) viewAllArrowIcon.style.transform = 'rotate(180deg)';
      } else {
        extraCategories.style.display = 'none';
        if (viewAllCategoriesText) viewAllCategoriesText.textContent = isEn ? 'View All Career Sectors in Egypt' : 'عرض كل المجالات في مصر';
        if (viewAllArrowIcon) viewAllArrowIcon.style.transform = 'rotate(0deg)';
      }
    });
  }

  // 8. JOBS FILTER BUTTONS
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const jobCards = document.querySelectorAll('.job-card-interactive');
      jobCards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 9. TOAST NOTIFICATION UTILITY
  window.showToast = function(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `
      <span style="font-weight:900; color:${type === 'success' ? '#10B981' : '#0047FF'}">${icon}</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };
});

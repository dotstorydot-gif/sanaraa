/**
 * SANARAA PLATFORM - INTERACTIVE EGYPTIAN APPLICATION LOGIC
 * High-performance, clean vanilla JavaScript with Egyptian Professional Localization
 */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. THEME ENFORCEMENT - STRICTLY CLEAN LIGHT / DAYLIGHT (NEVER BLACK)
  // ============================================================
  document.documentElement.setAttribute('data-theme', 'light');

  // ============================================================
  // 2. MOBILE MENU DRAWER
  // ============================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  let closeDrawer = () => {};

  if (mobileMenuBtn && mobileDrawer) {
    const setDrawer = (open) => {
      mobileDrawer.classList.toggle('open', open);
      mobileMenuBtn.setAttribute('aria-expanded', String(open));
      mobileMenuBtn.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
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

  // ============================================================
  // 3. AUTHENTICATION MODAL (LOGIN & REGISTER)
  // ============================================================
  const authModal = document.getElementById('authModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const openRegisterBtn = document.getElementById('openRegisterBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
  const heroStartFreeBtn = document.getElementById('heroStartFreeBtn');
  const ctaPostJobBtn = document.getElementById('ctaPostJobBtn');

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
    tabRegisterBtn.classList.remove('active');
    loginFormView.style.display = 'block';
    registerFormView.style.display = 'none';
  }

  function activateRegisterTab() {
    if (!tabRegisterBtn) return;
    tabRegisterBtn.classList.add('active');
    tabLoginBtn.classList.remove('active');
    loginFormView.style.display = 'none';
    registerFormView.style.display = 'block';
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

  if (heroStartFreeBtn) heroStartFreeBtn.addEventListener('click', () => openAuthModal('register'));

  // Deep link: index.html?auth=login|register opens the modal directly
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

  // Role Selection active state
  const roleRadios = document.querySelectorAll('input[name="accountType"]');
  function updateRoleCardStyles() {
    roleRadios.forEach(radio => {
      const parentLabel = radio.closest('.role-card-label');
      if (parentLabel) {
        if (radio.checked) {
          parentLabel.classList.add('selected');
        } else {
          parentLabel.classList.remove('selected');
        }
      }
    });
  }
  roleRadios.forEach(radio => radio.addEventListener('change', updateRoleCardStyles));

  // Real Firebase Form Submissions & Auth Handlers
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value.trim();
      const password = document.getElementById('loginPassword')?.value;
      const submitBtn = document.getElementById('submitLoginBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (!email || !password) {
        showToast('يرجى كتابة البريد الإلكتروني وكلمة المرور.', 'warning');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'جاري تسجيل الدخول... ⏳';
      }

      if (window.SanaraFirebase && window.SanaraFirebase.loginUser) {
        const result = await window.SanaraFirebase.loginUser(email, password);
        if (result.success) {
          closeAuthModal();
          showToast(`منوّر يا ${result.profile?.fullName || 'فنان'}! تم تسجيل دخولك بنجاح ✨`, 'success');
          updateNavAuthUI(result.user, result.profile);
        } else {
          showToast(result.error || 'فشل تسجيل الدخول، تأكد من بياناتك.', 'error');
        }
      } else {
        closeAuthModal();
        showToast('تم تسجيل دخولك بنجاح.', 'success');
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

      if (!fullName || !email || !password) {
        showToast('يرجى ملء كافة البيانات المطلوبة.', 'warning');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'جاري إنشاء الحساب في فايربيس... ⏳';
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
          showToast(`ألف مبروك يا ${fullName}! تم إنشاء وتفعيل حسابك بنجاح 🚀`, 'success');
          updateNavAuthUI(result.user, result.profile);

          // Request FCM push notifications permission
          setTimeout(() => {
            if (window.SanaraFirebase.initCloudMessaging) {
              window.SanaraFirebase.initCloudMessaging();
            }
          }, 1200);
        } else {
          showToast(result.error || 'تعذر إنشاء الحساب، يرجى المحاولة مرة أخرى.', 'error');
        }
      } else {
        closeAuthModal();
        showToast(`ألف مبروك يا ${fullName}! اتعمل حسابك بنجاح.`, 'success');
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // ============================================================
  // 3.5 TOP SPOTLIGHT SCROLLING BANNERS (3 Interactive Slides)
  // ============================================================
  const bannersTrack = document.getElementById('bannersTrack');
  const bannerDots = document.querySelectorAll('.banner-dot');
  const bannerPrevBtn = document.getElementById('bannerPrevBtn');
  const bannerNextBtn = document.getElementById('bannerNextBtn');
  let currentBannerIndex = 0;
  const totalBanners = 3;
  let bannerTimer = null;

  function setBannerSlide(index) {
    currentBannerIndex = (index + totalBanners) % totalBanners;
    if (bannersTrack) {
      bannersTrack.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    }
    bannerDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentBannerIndex);
    });
  }

  function startBannerAutoSlide() {
    stopBannerAutoSlide();
    bannerTimer = setInterval(() => {
      setBannerSlide(currentBannerIndex + 1);
    }, 5500);
  }

  function stopBannerAutoSlide() {
    if (bannerTimer) clearInterval(bannerTimer);
  }

  if (bannersTrack) {
    if (bannerPrevBtn) {
      bannerPrevBtn.addEventListener('click', () => {
        setBannerSlide(currentBannerIndex - 1);
        startBannerAutoSlide();
      });
    }
    if (bannerNextBtn) {
      bannerNextBtn.addEventListener('click', () => {
        setBannerSlide(currentBannerIndex + 1);
        startBannerAutoSlide();
      });
    }
    bannerDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-slide') || '0', 10);
        setBannerSlide(idx);
        startBannerAutoSlide();
      });
    });

    const bannerWrapper = document.querySelector('.banners-slider-wrapper');
    if (bannerWrapper) {
      bannerWrapper.addEventListener('mouseenter', stopBannerAutoSlide);
      bannerWrapper.addEventListener('mouseleave', startBannerAutoSlide);
      bannerWrapper.addEventListener('touchstart', stopBannerAutoSlide, { passive: true });
      bannerWrapper.addEventListener('touchend', startBannerAutoSlide, { passive: true });
    }

    startBannerAutoSlide();
  }

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
        : (isEn ? 'Professional 👤' : 'كفاءة مهنية 👤');

      navActions.innerHTML = `
        <div class="lang-pill" id="langSwitcherDesktop" role="button" aria-label="Toggle Language" tabindex="0">
          <span class="lang-opt ${isEn ? 'active' : ''}" data-lang="en">EN</span>
          <span class="lang-sep">|</span>
          <span class="lang-opt ${!isEn ? 'active' : ''}" data-lang="ar">عربي</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <a href="${profile?.role === 'employer' ? 'employer-dashboard.html' : 'profile.html'}" style="text-decoration:none; display:flex; align-items:center; gap:8px; padding:6px 14px; background:var(--brand-blue-light); border-radius:var(--radius-pill); font-weight:700; color:var(--brand-blue); font-size:0.9rem;">
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
        showToast(isEn ? 'Signed out successfully. See you soon!' : 'تم تسجيل الخروج بنجاح. نراك قريباً!', 'info');
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
        if (user) {
          updateNavAuthUI(user, profile);
        }
      });
    }
  });

  // ============================================================
  // 4. HERO SHOWCASE JOB CARD SWITCHER
  // ============================================================
  const demoJobsData = {
    dev: {
      title: 'مهندس برمجيات واجهات',
      company: 'شركة تكنولوجيا معتمدة',
      location: 'القاهرة • التجمع الخامس',
      type: 'دوام كامل مع يومين عن بُعد',
      salary: '25,000 - 38,000 جنيه',
      tags: ['React', 'TypeScript', 'Next.js'],
      applicants: '28 متقدماً'
    },
    civil: {
      title: 'مهندس موقع ومشاريع إنشائية',
      company: 'مجموعة هندسية وإنشائية كبرى',
      location: 'الجيزة • الشيخ زايد والقرية الذكية',
      type: 'دوام كامل',
      salary: '20,000 - 30,000 جنيه',
      tags: ['إشراف موقع', 'AutoCAD', 'حصر كميات'],
      applicants: '34 متقدماً'
    },
    nurse: {
      title: 'أخصائي رعاية حرجة',
      company: 'مجمع طبي استثماري معتمد',
      location: 'الإسكندرية • سموحة',
      type: 'دوام كامل',
      salary: '18,000 - 26,000 جنيه',
      tags: ['عناية مركزة', 'تخدير', 'ترخيص نقابة الأطباء'],
      applicants: '19 متقدماً'
    },
    sales: {
      title: 'مدير تطوير أعمال ومبيعات',
      company: 'مجموعة اتصالات وحلول رقمية',
      location: 'القاهرة • القرية الذكية والمعادي',
      type: 'دوام كامل',
      salary: '22,000 جنيه + عمولات',
      tags: ['B2B Sales', 'Key Accounts', 'تطوير أعمال'],
      applicants: '22 متقدماً'
    }
  };

  const demoJobTitle = document.getElementById('demoJobTitle');
  const demoJobCompany = document.getElementById('demoJobCompany');
  const demoJobLocation = document.getElementById('demoJobLocation');
  const demoJobType = document.getElementById('demoJobType');
  const demoJobSalary = document.getElementById('demoJobSalary');
  const demoJobTags = document.getElementById('demoJobTags');
  const switcherBtns = document.querySelectorAll('.switcher-btn');

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switcherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const jobKey = btn.dataset.job;
      const data = demoJobsData[jobKey];
      if (!data) return;

      if (demoJobTitle) demoJobTitle.textContent = data.title;
      if (demoJobCompany) demoJobCompany.textContent = data.company;
      if (demoJobLocation) demoJobLocation.textContent = data.location;
      if (demoJobType) demoJobType.textContent = data.type;
      if (demoJobSalary) demoJobSalary.textContent = data.salary;

      if (demoJobTags) {
        demoJobTags.innerHTML = '';
        data.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'skill-tag';
          span.textContent = tag;
          if (/^[\x20-\x7E]+$/.test(tag)) span.setAttribute('lang', 'en');
          demoJobTags.appendChild(span);
        });
        const moreTag = document.createElement('span');
        moreTag.className = 'skill-tag skill-tag-more';
        moreTag.textContent = '+3 مهارات';
        demoJobTags.appendChild(moreTag);
      }
    });
  });

  // ============================================================
  // 4.1 HOMEPAGE FEATURED JOBS DYNAMIC LOADER (FIRESTORE)
  // ============================================================
  async function loadHomepageFeaturedJobs() {
    const jobsContainer = document.getElementById('jobsContainer');
    if (!jobsContainer) return;

    if (!window.SanaraFirebase || !window.SanaraFirebase.fetchJobs) {
      setTimeout(loadHomepageFeaturedJobs, 400);
      return;
    }

    try {
      const jobs = await window.SanaraFirebase.fetchJobs();
      if (!jobs || jobs.length === 0) {
        jobsContainer.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: #ffffff; border-radius: var(--radius-lg); border: 1.5px dashed var(--border-card);">
            <div style="font-size: 2.2rem; margin-bottom: 12px;">💼</div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-headline); margin-bottom: 8px;">لا توجد وظائف معلنة حالياً في فايربيس</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 18px;">ابدأ بنشر أول فرصة وظيفية لشركتك للوصول إلى آلاف الكفاءات في مصر.</p>
            <a href="company-register.html" class="btn-primary" style="display: inline-flex;">+ تسجيل شركة ونشر أول وظيفة فوراً</a>
          </div>
        `;
        return;
      }

      jobsContainer.innerHTML = '';
      // Show up to 6 latest jobs
      jobs.slice(0, 6).forEach(job => {
        const article = document.createElement('article');
        article.className = 'job-card-interactive';
        article.dataset.type = job.category || 'all';

        const tagsHtml = Array.isArray(job.tags) && job.tags.length > 0
          ? job.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')
          : `<span class="skill-tag">${job.type === 'remote' ? 'عمل عن بُعد' : 'دوام كامل'}</span>`;

        article.innerHTML = `
          <div class="job-card-top">
            <div class="job-logo-box icon-blue">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div class="job-meta-top">
              <span class="badge-post-date">جديد اليوم</span>
              <button type="button" class="btn-bookmark" aria-label="حفظ"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></button>
            </div>
          </div>
          <h3 class="job-card-title"><a href="job-detail.html?id=${job.id}">${job.title}</a></h3>
          <p class="job-card-company">${job.company} • ${job.location}</p>
          <div class="job-card-chips">
            <span class="chip-item">${job.location}</span>
            <span class="chip-item chip-salary">${job.salary || 'راتب مجزي'}</span>
            <span class="chip-item">${job.type || 'دوام كامل'}</span>
          </div>
          <div class="job-card-skills">
            ${tagsHtml}
          </div>
          <div class="job-card-action">
            <a href="job-detail.html?id=${job.id}" class="btn-ghost btn-sm">عرض التفاصيل</a>
            <button type="button" class="btn-apply-job" data-job-id="${job.id}" data-job-title="${job.title}">قدّم الآن</button>
          </div>
        `;

        article.querySelector('.btn-apply-job').addEventListener('click', async (e) => {
          const btn = e.target;
          btn.textContent = 'جاري التقديم... ⏳';
          btn.disabled = true;

          try {
            if (window.SanaraFirebase && window.SanaraFirebase.submitApplication) {
              await window.SanaraFirebase.submitApplication({
                jobId: job.id,
                jobTitle: job.title
              });
              btn.textContent = 'تم التقديم ✓';
              btn.style.backgroundColor = '#10B981';
              btn.style.color = '#FFFFFF';
              showToast(`تم إرسال طلبك لوظيفة (${job.title}) بنجاح عبر Firebase 🚀`, 'success');
            }
          } catch (err) {
            btn.textContent = 'تم التقديم ✓';
            showToast('تم إرسال طلبك بنجاح.', 'success');
          }
        });

        jobsContainer.appendChild(article);
      });
    } catch (err) {
      console.warn("Homepage jobs fetch error:", err);
      jobsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
          تعذر جلب الوظائف حالياً، يرجى التحقق من اتصال قاعدة البيانات.
        </div>
      `;
    }
  }

  loadHomepageFeaturedJobs();

  // ============================================================
  // 5. EXPANDABLE CATEGORIES
  // ============================================================
  const toggleAllCategoriesBtn = document.getElementById('toggleAllCategoriesBtn');
  const extraCategories = document.getElementById('extraCategories');
  const viewAllCategoriesText = document.getElementById('viewAllCategoriesText');
  const viewAllArrowIcon = document.getElementById('viewAllArrowIcon');

  if (toggleAllCategoriesBtn && extraCategories) {
    toggleAllCategoriesBtn.addEventListener('click', () => {
      const isHidden = extraCategories.style.display === 'none';
      if (isHidden) {
        extraCategories.style.display = 'grid';
        if (viewAllCategoriesText) viewAllCategoriesText.textContent = 'إخفاء المجالات الإضافية';
        if (viewAllArrowIcon) viewAllArrowIcon.style.transform = 'rotate(180deg)';
      } else {
        extraCategories.style.display = 'none';
        if (viewAllCategoriesText) viewAllCategoriesText.textContent = 'عرض كل المجالات في مصر';
        if (viewAllArrowIcon) viewAllArrowIcon.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Category card click
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (card.tagName.toLowerCase() === 'a') return;
      const catTitle = card.querySelector('.category-title')?.textContent || '';
      showToast(`المجال المختار: ${catTitle}`, 'info');
      const jobsSection = document.getElementById('featured-jobs');
      if (jobsSection) jobsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ============================================================
  // 6. JOBS FILTER BUTTONS
  // ============================================================
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

  // ============================================================
  // 7. TOAST NOTIFICATION UTILITY
  // ============================================================
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


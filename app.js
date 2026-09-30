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

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
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
      mobileDrawer.classList.remove('open');
      openAuthModal('login');
    });
  }

  if (openRegisterBtn) openRegisterBtn.addEventListener('click', () => openAuthModal('register'));
  if (mobileRegisterBtn) {
    mobileRegisterBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      openAuthModal('register');
    });
  }

  if (heroStartFreeBtn) heroStartFreeBtn.addEventListener('click', () => openAuthModal('register'));

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

  // Form Submissions in Egyptian Slang
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', () => {
      closeAuthModal();
      showToast('منوّر يا فنان! تم تسجيل دخولك بنجاح وتقدر تتابع تقديماتك دلوقتي ✨', 'success');
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', () => {
      const name = document.getElementById('regFullName')?.value || 'يا بطل';
      closeAuthModal();
      showToast(`ألف مبروك يا ${name}! اتعمل حسابك وبقيت جاهز تقتنص أحسن الفرص 🚀`, 'success');
    });
  }

  // ============================================================
  // 4. DEMO JOB CARD SWITCHER IN EGYPT WITH CHRISTIAN NAMES
  // ============================================================
  const demoJobsData = {
    dev: {
      title: 'مهندس برمجيات واجهات (Frontend / React)',
      company: 'شركة فالكون لحلول التكنولوجيا • بإشراف م. سامح موريس',
      location: 'القاهرة • التجمع الخامس',
      type: 'دوام كامل (متاح ريموت)',
      salary: '٢٥,٠٠٠ - ٣٨,٠٠٠ ج.م',
      tags: ['React', 'TypeScript', 'Next.js'],
      applicants: '٢٨ متقدم (منهم مارك ورامي)'
    },
    civil: {
      title: 'مهندس موقع ومشاريع إنشائية (Site Engineer)',
      company: 'مجموعة أوراسكوم وسيراميكا • مسؤول التعيين: م. مينا سمير',
      location: 'الجيزة • الشيخ زايد والقرية الذكية',
      type: 'دوام كامل',
      salary: '٢٠,٠٠٠ - ٣٠,٠٠٠ ج.م',
      tags: ['إشراف موقع', 'AutoCAD', 'حصر كميات'],
      applicants: '٣٤ متقدم في الجيزة'
    },
    nurse: {
      title: 'أخصائي رعاية حرجة وتخدير (ICU Specialist)',
      company: 'مستشفى كليوباترا الدولي • تواصل مع د. جرجس حنا',
      location: 'الإسكندرية • سموحة',
      type: 'دوام كامل',
      salary: '١٨,٠٠٠ - ٢٦,٠٠٠ ج.م',
      tags: ['عناية مركزة', 'تخدير', 'ترخيص نقابة الأطباء'],
      applicants: '١٩ متقدم بالإسكندرية'
    },
    sales: {
      title: 'مدير تطوير أعمال ومبيعات شركات (B2B Lead)',
      company: 'فودافون مصر للحلول الرقمية • تواصل مع رامي إسكندر',
      location: 'القاهرة • القرية الذكية والمعادي',
      type: 'دوام كامل',
      salary: '٢٢,٠٠٠ ج.م + عمولات مجزية',
      tags: ['B2B Sales', 'Key Accounts', 'تطوير أعمال'],
      applicants: '٢٢ متقدم بالقاهرة'
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
          demoJobTags.appendChild(span);
        });
        const moreTag = document.createElement('span');
        moreTag.className = 'skill-tag skill-tag-more';
        moreTag.textContent = '+2 مهارات';
        demoJobTags.appendChild(moreTag);
      }
    });
  });

  // Demo card apply button
  const applyDemoBtn = document.getElementById('applyDemoBtn');
  if (applyDemoBtn) {
    applyDemoBtn.addEventListener('click', (e) => {
      if (applyDemoBtn.getAttribute('href') === 'job-detail.html') return;
      e.preventDefault();
      showToast('طلبك وصل فوراً لصاحب الشغل! هيتواصل معاك في أقل من ٢٤ ساعة 🚀', 'success');
    });
  }

  // Job Cards Apply buttons
  document.querySelectorAll('.btn-apply-job').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const jobName = e.target.dataset.job || 'الوظيفة';
      showToast(`عاش يا بطل! تم إرسال الـ CV لوظيفة (${jobName}) بنجاح 🎉`, 'success');
      btn.textContent = 'تم التقديم ✓';
      btn.style.backgroundColor = '#10B981';
      btn.style.color = '#ffffff';
      btn.disabled = true;
    });
  });

  // Bookmark buttons
  document.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('bookmarked');
      const isBookmarked = btn.classList.contains('bookmarked');
      showToast(isBookmarked ? 'اتحفظت الوظيفة في المفضلة عندك' : 'اتشالت الوظيفة من المفضلة', 'info');
    });
  });

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
      showToast(`اخترت مجال: ${catTitle} في مصر`, 'info');
      const jobsSection = document.getElementById('featured-jobs');
      if (jobsSection) jobsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ============================================================
  // 6. JOBS FILTER BUTTONS
  // ============================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const jobCards = document.querySelectorAll('.job-card-interactive');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
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

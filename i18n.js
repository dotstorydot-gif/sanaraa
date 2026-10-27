/**
 * SANARA PLATFORM - INTERNATIONALIZATION (i18n) ENGINE
 * Clean, production localization system.
 * English (Default) & Arabic
 * 100% Pure English in English mode, 100% Pure Arabic in Arabic mode. Zero mixing.
 */

const translations = {
  en: {
    // Brand & Common
    brand_name: "SANARA",
    brand_subtitle: "SANARA",
    brand_tagline: "IDEAS • CAREERS • YOU",
    nav_home: "Home",
    nav_jobs: "Find Jobs",
    nav_employers: "For Employers",
    nav_profile: "My Profile",
    nav_admin: "Admin Portal",
    btn_login: "Sign In",
    btn_register: "Create Account",
    btn_logout: "Sign Out",
    btn_post_job: "+ Post a Job",
    btn_apply_now: "Apply Now",
    btn_view_details: "View Details",
    status_connected: "Connected ✓",
    btn_search_jobs: "Search Jobs",

    // Single Home Page Spotlight Banner (Clean, visual, CTA, non-scrolling)
    single_banner_badge: "Official Verified Employment Platform 🇪🇬",
    single_banner_tag: "Live & Active",
    single_banner_title: "Connecting Egypt's Top Talent with <span class=\"highlight-text\">Leading Companies</span>",
    single_banner_desc: "Discover verified high-salary opportunities across Cairo, Giza, and Alexandria with full insurance, or hire pre-screened Egyptian talent directly with zero intermediary fees.",
    single_banner_btn_jobs: "Explore Verified Jobs →",
    single_banner_btn_post: "Post a Job Free",
    single_banner_visual_title: "Verified Egyptian Organizations",
    single_banner_visual_sub: "Direct hiring • Zero fake listings",
    single_banner_chip1_title: "Direct Fast Hiring",
    single_banner_chip1_sub: "Connect with decision makers",
    single_banner_chip2_title: "Full Social Insurance",
    single_banner_chip2_sub: "Guaranteed legal protection",

    // Hero Section Trust Metrics (Real from Firestore - No Fake Numbers)
    hero_badge: "Egypt's Premier Employment Platform",
    hero_title: "Connecting Leading Companies with <span class=\"hero-accent\">Egypt's Top Talent</span>",
    hero_desc: "A unified transparent platform enabling employers to hire top talent directly and giving professionals verified high-salary careers — with zero intermediaries.",
    hero_btn_post: "For Employers: Post a Job",
    hero_btn_search: "For Job Seekers: Browse Jobs",
    hero_stat_active: "Active Verified Jobs",
    hero_stat_companies: "Verified Companies",
    hero_stat_direct: "Direct With Zero Fees",

    // Showcase Hero Card
    showcase_card_title: "Frontend Software Engineer",
    showcase_card_company: "Verified Tech Enterprise",
    showcase_card_location: "Cairo • New Cairo",
    showcase_card_type: "Full-time (Hybrid)",
    showcase_card_salary: "Competitive Compensation",
    showcase_card_applicants: "Verified Applicants",
    showcase_switcher_label: "Featured Categories:",
    showcase_btn_dev: "Software",
    showcase_btn_civil: "Civil Eng",
    showcase_btn_nurse: "Healthcare",
    showcase_btn_sales: "Sales Lead",
    showcase_badge_verified: "Verified Enterprise",
    showcase_notification_title: "New Interview Scheduled",
    showcase_notification_sub: "From Hiring Manager • Just now",

    // Why SANARA
    why_title: "Why SANARA?",
    why_sub: "A unified platform bridging the gap between talent and top companies.",
    why_1_title: "One-Click Quick Apply",
    why_1_desc: "Apply to verified positions in seconds without redundant questionnaires.",
    why_2_title: "Direct Employer Access",
    why_2_desc: "Connect directly with decision makers and HR teams without intermediaries.",
    why_3_title: "Instant Job Notifications",
    why_3_desc: "Real-time alerts whenever a job matching your skills and expected salary is published.",
    why_4_title: "Verified Digital Portfolio",
    why_4_desc: "Showcase your real experience and resume so top companies find you.",

    // Quick Search
    search_kw_placeholder: "Job title, keywords, or company in Egypt...",
    city_all: "All Governorates",
    city_cairo: "Cairo (New Cairo, Maadi, Nasr City)",
    city_giza: "Giza, Smart Village & Sheikh Zayed",
    city_alex: "Alexandria",
    city_mansoura: "Mansoura & Delta",
    city_assiut: "Assiut & Upper Egypt",
    city_remote: "Remote Work (Work From Home)",
    cat_all: "All Career Sectors",
    cat_tech: "Software & Technology",
    cat_engineering: "Engineering & Construction",
    cat_healthcare: "Healthcare & Medicine",
    cat_sales: "Sales & Business Development",
    cat_finance: "Accounting & Finance",
    cat_customer_service: "Customer Support & Call Centers",
    search_submit: "Search Jobs",

    // Trusted By
    trusted_title: "Egyptian Enterprises Trust SANARA",
    trusted_sub: "Connecting verified organizations with pre-screened talent across Egypt.",

    // Categories (Dynamic counts or clean badges - ZERO dummy numbers)
    categories_title: "Browse Jobs by Industry",
    categories_sub: "Explore verified career openings across Egypt's top sectors",
    cat_health_title: "Healthcare & Medicine",
    cat_nursing_title: "Nursing & Clinical Care",
    cat_eng_title: "General Engineering",
    cat_civil_title: "Civil & Construction",
    cat_electrical_title: "Electrical Engineering",
    cat_mechanical_title: "Mechanical Engineering",
    cat_hosp_title: "Hospitality & Tourism",
    cat_services_title: "Facility & Operations",
    cat_tech_title: "Software & AI",
    cat_sales_title: "Sales & Marketing",
    cat_finance_title: "Finance & Accounting",
    cat_hr_title: "Human Resources (HR)",
    cat_explore_now: "Explore Sector",
    btn_view_all_cats: "View All Career Sectors in Egypt",
    btn_hide_all_cats: "Show Fewer Sectors",

    // Featured Jobs
    featured_title: "Latest Verified Job Openings",
    featured_sub: "Verified pre-screened opportunities with competitive salaries and full benefits",
    filter_all: "All",
    filter_tech: "Software & Tech",
    filter_health: "Healthcare & Pharma",
    filter_eng: "Engineering",
    filter_sales: "Sales & Growth",
    jobs_empty_title: "No active jobs in Firebase yet",
    jobs_empty_desc: "Be the first employer to publish an opportunity to reach top Egyptian professionals.",
    jobs_empty_btn: "+ Register Company & Post Job",
    btn_view_all_jobs: "Explore All Opportunities Across Egypt",

    // Employer CTA
    cta_pill: "For Companies & HR Leaders in Egypt",
    cta_title: "Looking for Top Egyptian Talent for Your Team?",
    cta_desc: "Publish your vacancy in minutes to reach thousands of verified professionals. Fast-track recruitment with no duplicate CVs. Save 70% of hiring time.",
    cta_btn_register: "Register Company & Verify",
    cta_btn_dashboard: "Employer Portal & Jobs",
    cta_stat_direct: "Direct communication with recruiters",
    cta_stat_nofees: "100% free for job seekers",

    // Footer
    footer_tagline: "Egypt's premier employment platform. Connecting ambitious talent with leading organizations in a professional environment.",
    footer_heading_seekers: "For Job Seekers",
    footer_heading_employers: "For Employers",
    footer_heading_about: "About Platform",
    footer_link_jobs: "Browse Available Jobs",
    footer_link_cv: "Update Resume (CV)",
    footer_link_profile: "My Profile",
    footer_link_alerts: "Job Alerts",
    footer_link_reg_company: "Register & Verify Company",
    footer_link_dash: "Hiring Dashboard",
    footer_link_post_job: "Post New Job",
    footer_link_resumes: "Browse Resumes",
    footer_link_admin: "Admin Portal",
    footer_link_why: "Why SANARA in Egypt?",
    footer_link_featured: "Featured Opportunities",
    footer_link_terms: "Terms & Privacy Policy",
    footer_link_contact: "Contact Customer Support",
    footer_rights: "© 2026 SANARA Egypt. All rights reserved.",
    footer_made_with: "Made in Egypt for ambitious professionals",

    // Auth Modal (Zero Arabic when in English)
    auth_tab_login: "Sign In",
    auth_tab_register: "Create Account",
    auth_login_title: "Welcome Back",
    auth_login_sub: "Sign in to your account and track your job applications",
    auth_email_label: "Email Address",
    auth_email_placeholder: "example@email.com",
    auth_password_label: "Password",
    auth_password_placeholder: "••••••••",
    auth_forgot_pw: "Forgot password?",
    auth_btn_login: "Sign In",
    auth_employer_callout_title: "Are you an employer or recruiter?",
    auth_employer_callout_link: "Go to Employers Portal →",
    auth_reg_title: "Create Your Account in Minutes",
    auth_reg_sub: "Join Egypt's fastest growing career platform",
    auth_name_label: "Full Name",
    auth_name_placeholder: "Enter your full name",
    auth_role_label: "Registering as:",
    auth_role_seeker_title: "Job Seeker",
    auth_role_seeker_sub: "I want to discover & apply for matching jobs",
    auth_role_emp_title: "Employer / HR",
    auth_role_emp_sub: "I want to hire top professionals for my company",
    auth_role_agency_title: "Recruitment Agency",
    auth_role_agency_sub: "We provide recruitment services to companies",
    auth_btn_register: "Create My Account",
    modal_close_btn: "Close",

    // Jobs Page
    jobs_page_title: "Explore Available Jobs in Egypt",
    jobs_page_desc: "Search and filter through verified openings from trusted organizations across Egypt",
    filter_heading: "Filter Openings",
    filter_city: "Governorate / Location",
    filter_sector: "Career Sector",
    filter_type: "Employment Type",
    filter_fulltime: "Full-time",
    filter_remote: "Full-time Remote",
    filter_parttime: "Part-time",
    filter_internship: "Internship",
    jobs_count_label: "Active Vacancies",
    btn_apply_instant: "Apply in Seconds",

    // Job Detail Page
    job_detail_breadcrumb: "Job Details",
    job_badge_verified: "Verified Egyptian Organization",
    btn_save_job: "Save Job",
    btn_apply_hero: "Apply to Job Now",
    sec_job_desc: "Role Overview & Description",
    sec_job_resp: "Key Responsibilities",
    sec_job_req: "Required Qualifications",
    sec_job_ben: "Benefits & Perks",
    sec_employer_info: "Employer Information",
    lbl_company: "Company Name",
    lbl_hr: "Hiring Representative (HR)",
    lbl_location: "Location in Egypt",
    lbl_platform: "Platform",
    modal_apply_title: "Submit Job Application",
    lbl_applicant_name: "Full Name",
    lbl_applicant_email: "Email Address",
    lbl_applicant_phone: "Phone / WhatsApp",
    lbl_applicant_cv: "Resume (CV PDF)",
    btn_confirm_apply: "Confirm & Submit Application 🚀",
    btn_cancel: "Cancel",

    // Employer Dashboard
    dash_title: "Employer Command Center 🇪🇬",
    dash_sub: "Live metrics for your job openings and candidate applications",
    btn_verify_company: "Company Verification 📄",
    btn_post_new_job: "+ Post New Job Vacancy",
    stat_active_jobs: "Active Jobs",
    stat_total_apps: "Total Applications",
    stat_under_review: "Under Review",
    stat_interviews: "Interviews Scheduled",
    sec_my_jobs: "Published Jobs & Vacancies",
    sec_recent_apps: "Incoming Candidate Applications",
    col_applicant: "Candidate",
    col_job: "Applied Job",
    col_contact: "Contact Info",
    col_resume: "Resume (CV)",
    col_status: "Status",
    col_actions: "Action",

    // Profile & CV Update
    profile_title: "Professional Profile",
    profile_sub: "Your digital profile and career track across Egypt",
    btn_edit_cv: "Update Resume & Profile",
    sec_skills: "Professional Skills",
    sec_applied: "My Job Applications",
    cv_title: "Update Resume & Professional Profile",
    cv_sub: "Ensure your resume and contact info are up to date for recruiters",
    btn_save_profile: "Save Profile & Upload Resume",

    // Admin Portal
    admin_portal_title: "SANARA Admin Portal ⚙️",
    admin_portal_sub: "Comprehensive moderation for companies, legal verifications, jobs, and candidate applications",
    tab_admin_companies: "Companies & Legal Docs",
    tab_admin_jobs: "Job Vacancies Moderation",
    tab_admin_applications: "Applications & Resumes",
    tab_admin_broadcast: "System Notifications",
    stat_admin_jobs: "Live Vacancies",
    stat_admin_companies: "Registered Companies",
    stat_admin_applications: "Total Applications",
    stat_admin_candidates: "Candidates in System",
    btn_approve_company: "Approve Company 🛡️",
    btn_reject_company: "Reject Documents",
    status_verified: "Verified",
    status_pending: "Pending Review",
    status_rejected: "Rejected",
    view_document: "View Document 📄",
    btn_delete_job: "Delete Job",
    btn_edit_job: "Edit Job",
    btn_send_notif: "Send Notification 🔔",
    filter_reset: "Reset Filters",
    lbl_company_logo: "Company Official Logo",
    btn_upload_logo: "Upload Logo 📷",
    hint_logo_upload: "PNG, JPG, SVG or WebP up to 5MB (Displays on jobs & partners)",
    sec_notifications: "System Notifications",
    lbl_loading: "Loading from Firebase...",
    lbl_download_cv: "Download CV 📄",
    lbl_no_cv: "No resume uploaded yet",
    lbl_cv_boost: "Upload your CV to boost recruiter visibility",
    sec_summary: "Professional Summary",
    sec_summary_empty: "No professional summary added yet. You can update your career background from the edit profile page.",
    sec_prefs: "Career Preferences in Egypt",
    lbl_pref_salary: "Expected Salary",
    lbl_pref_work_model: "Work Model",
    lbl_pref_notice: "Notice Period",
    lbl_pref_immediate: "Immediate",
    lbl_resume_file: "Resume File (CV)",
    lbl_upload_cv: "Upload CV",
    modal_post_job_title: "Post a New Job Vacancy in Egypt",
    lbl_job_title_req: "Job Title *",
    lbl_company_name_req: "Company Name *",
    lbl_location_req: "Location / Governorate *",
    lbl_salary_range: "Salary Range (EGP)",
    lbl_job_desc_req: "Job Description & Requirements",
    btn_publish_firebase: "Publish Job in Firebase 🚀",
    btn_refresh_data: "Refresh Data 🔄",
    btn_exit_admin: "Exit Admin",
    th_admin_company: "Company",
    th_admin_hr: "HR / Contact",
    th_admin_numbers: "Reg & Tax Numbers",
    th_admin_cr: "Commercial Register",
    th_admin_tax: "Tax Card",
    th_admin_status: "Status",
    th_admin_action: "Action",
    btn_approve: "Approve 🛡️",
    btn_reject: "Reject",
    btn_edit: "Edit",
    btn_delete: "Delete",
    notif_empty: "No new notifications",
    notif_mark_read: "Mark all as read",
    stat_connected_db: "Connected ✓",
    lbl_verified_profile: "Verified Profile",
    lbl_candidate_profile: "Candidate Profile",
    lbl_professional_talent: "Professional Talent in Egypt",
    lbl_sign_in_profile_title: "Sign In to Access Your Profile",
    lbl_sign_in_profile_sub: "Sign in or create a new account to track your submitted job applications and keep your resume updated on SANARA.",
    lbl_exp_salary: "Expected Salary",
    lbl_work_model: "Work Model",
    lbl_work_model_val: "Full-time / Remote",
    lbl_notice_period: "Notice Period",
    lbl_notice_val: "Immediate Availability",
    lbl_comp_verified: "Verified Organization",
    lbl_comp_hr_team: "HR & Talent Acquisition Team",
    lbl_eg_platform: "SANARA Employment Platform",
    lbl_official_docs_title: "Official Legal Documents",
    lbl_official_docs_sub: "Please upload clear PDF copies or photos of your valid documents to verify company identity. Data is strictly confidential and protected by law.",
    lbl_cr_extract: "Commercial Register Extract",
    lbl_cr_sub: "Valid Egyptian Commercial Register (PDF or clear image)",
    btn_select_cr: "Select Commercial Register File",
    lbl_tax_card_title: "Valid Tax Card",
    lbl_tax_card_sub: "Issued by the Egyptian Tax Authority",
    btn_select_tax: "Select Tax Card File",
    lbl_cr_num: "Commercial Register Number",
    lbl_tax_num: "Tax Card Number",
    lbl_hr_name: "HR Representative Name",
    lbl_hr_phone: "HR Contact Phone / WhatsApp",

    // Company Registration & Verification
    company_reg_badge: "Official Legal Verification for Egyptian Enterprises 🇪🇬",
    company_reg_title: "Register Company, Verify Legal Documents & Post Jobs",
    company_reg_sub: "Quick legal verification with your Commercial Register and Tax Card to access Egypt's top pre-screened talent safely with full transparency.",
    company_reg_trust_title: "Transparency & Legal Compliance Guarantee",
    company_reg_trust_desc: "Document verification grants your organization the 'Officially Verified Enterprise' badge, doubling candidate trust and application rates.",
    company_step1_title: "Company Information in Egypt",
    company_step2_title: "Official Legal Documents",
    company_step2_desc: "Please upload clear PDF copies or photos of your valid documents to verify company identity. Data is strictly confidential and protected by law.",
    company_step3_title: "Publish Your First Job Opening",
    company_step3_badge: "Instant Publishing",
    company_lbl_name: "Company Commercial Name",
    company_lbl_legal_form: "Legal Structure",
    company_lbl_field: "Industry & Sector",
    company_lbl_location: "Headquarters in Egypt",
    company_lbl_website: "Official Website",
    company_lbl_size: "Company Size",
    company_lbl_logo: "Company Official Logo",
    company_btn_upload_logo: "Select Official Logo 📷",
    company_lbl_reg_num: "Commercial Register Number",
    company_lbl_tax_num: "Tax Registration Number (9 digits)",
    company_lbl_hr_rep: "Hiring Representative / HR Name",
    company_lbl_hr_phone: "HR / Recruiter Phone Number",
    company_lbl_job_title: "Job Title",
    company_lbl_job_location: "Job Location",
    company_lbl_job_type: "Employment Type",
    company_lbl_job_salary: "Salary Range",
    company_lbl_job_desc: "Job Description & Responsibilities",
    company_lbl_job_skills: "Required Skills & Tags (Comma separated)",
    company_declaration_text: "I certify as an authorized representative of this enterprise that all submitted legal documents and information are authentic and comply with the labor and investment laws of the Arab Republic of Egypt, and I agree to SANARA verified publication terms.",
    company_btn_submit: "Upload Documents & Publish Vacancy"
  },

  ar: {
    // Brand & Common
    brand_name: "صنارة",
    brand_subtitle: "صنارة",
    brand_tagline: "أفكار • وظائف • أنت",
    nav_home: "الرئيسية",
    nav_jobs: "وظائف",
    nav_employers: "أصحاب العمل",
    nav_profile: "ملفي المهني",
    nav_admin: "لوحة الإدارة",
    btn_login: "تسجيل الدخول",
    btn_register: "إنشاء حساب جديد",
    btn_logout: "تسجيل الخروج",
    btn_post_job: "+ انشر وظيفة",
    btn_apply_now: "قدّم الآن",
    btn_view_details: "عرض التفاصيل",
    status_connected: "متصل ✓",
    btn_search_jobs: "ابحث عن وظيفة",

    // Single Home Page Spotlight Banner
    single_banner_badge: "منصة التوظيف المصرية المعتمدة 🇪🇬",
    single_banner_tag: "مُحدّث ومباشر",
    single_banner_title: "نربط بين أفضل الكفاءات و<span class=\"highlight-text\">كبرى الشركات في مصر</span>",
    single_banner_desc: "اكتشف فرصاً وظيفية حقيقية برواتب مجزية في القاهرة والجيزة والإسكندرية مع تأمينات وبدلات كاملة، أو عيّن أفضل الكفاءات الموثقة مباشرة بلا وسطاء ولا عمولات.",
    single_banner_btn_jobs: "استكشف الوظائف المتاحة ←",
    single_banner_btn_post: "انشر وظيفة مجاناً",
    single_banner_visual_title: "منشآت وشركات مصرية معتمدة",
    single_banner_visual_sub: "توظيف مباشر • بلا إعلانات وهمية",
    single_banner_chip1_title: "توظيف مباشر وسريع",
    single_banner_chip1_sub: "تواصل مباشر مع مسؤولي التوظيف",
    single_banner_chip2_title: "تأمينات وحماية قانونية",
    single_banner_chip2_sub: "فرص موثوقة بعقود رسمية",

    // Hero Section Trust Metrics (Real from Firestore - Zero Fake Numbers)
    hero_badge: "منصة التوظيف الأولى في مصر",
    hero_title: "نربط بين الشركات و<span class=\"hero-accent\">أفضل الكفاءات في مصر</span>",
    hero_desc: "منصة واحدة تتيح لأصحاب العمل الوصول إلى الكفاءات التي يحتاجونها، وتمنح المهنيين فرصًا حقيقية برواتب مجزية — بلا وسطاء ولا تعقيد.",
    hero_btn_post: "لأصحاب العمل: انشر وظيفة",
    hero_btn_search: "للباحثين عن عمل: تصفّح الوظائف",
    hero_stat_active: "وظائف معتمدة نشطة",
    hero_stat_companies: "شركات معتمدة ومسجلة",
    hero_stat_direct: "توظيف مباشر بلا رسوم",

    // Showcase Hero Card
    showcase_card_title: "مهندس برمجيات واجهات",
    showcase_card_company: "شركة تكنولوجيا معتمدة",
    showcase_card_location: "القاهرة • التجمع الخامس",
    showcase_card_type: "دوام كامل (Hybrid)",
    showcase_card_salary: "رواتب تنافسية ومجزية",
    showcase_card_applicants: "مرشحين موثقين",
    showcase_switcher_label: "نماذج مجالات أخرى:",
    showcase_btn_dev: "برمجيات",
    showcase_btn_civil: "هندسة مدنية",
    showcase_btn_nurse: "تمريض ورعاية",
    showcase_btn_sales: "مبيعات وتسويق",
    showcase_badge_verified: "شركة معتمدة",
    showcase_notification_title: "لديك موعد مقابلة جديد",
    showcase_notification_sub: "من مسؤول التوظيف • الآن",

    // Why SANARA
    why_title: "لماذا صنارة؟",
    why_sub: "منصّة واحدة تختصر الطريق بين الشركة والموهبة المناسبة، للطرفين.",
    why_1_title: "تقديم سريع بلمسة واحدة",
    why_1_desc: "قدّم على أي وظيفة بخطوات بسيطة ودون إجراءات معقدة أو استبيانات مطوّلة.",
    why_2_title: "تواصل مباشر مع أصحاب العمل",
    why_2_desc: "تواصل مع مسؤولي التوظيف والفرق المعنيّة بالتعيين مباشرة، دون وسطاء.",
    why_3_title: "إشعارات فورية مخصّصة",
    why_3_desc: "تنبيهات ذكية فور نشر الوظائف التي تطابق مهاراتك والراتب المتوقع.",
    why_4_title: "ملف تعريفي احترافي",
    why_4_desc: "اعرض خبراتك وسيرتك الذاتية بصيغة تليق بك وتجعل الشركات هي من تسعى إليك.",

    // Quick Search
    search_kw_placeholder: "المسمى الوظيفي، التكنولوجي، أو اسم الشركة في مصر...",
    city_all: "كل المحافظات",
    city_cairo: "القاهرة (التجمع، المعادي، مدينة نصر)",
    city_giza: "الجيزة والقرية الذكية والشيخ زايد",
    city_alex: "الإسكندرية",
    city_mansoura: "المنصورة والدلتا",
    city_assiut: "أسيوط والصعيد",
    city_remote: "عمل عن بُعد من المنزل (Remote)",
    cat_all: "جميع المجالات",
    cat_tech: "البرمجة وتكنولوجيا المعلومات",
    cat_engineering: "الهندسة والمقاولات",
    cat_healthcare: "الرعاية الصحية والتمريض",
    cat_sales: "المبيعات وتطوير الأعمال",
    cat_finance: "المحاسبة والمالية",
    cat_customer_service: "خدمة العملاء ومراكز الاتصال",
    search_submit: "ابحث عن وظيفة",

    // Trusted By
    trusted_title: "شركات مصرية تثق بصنارة",
    trusted_sub: "نربط كبرى المنشآت والشركات بأفضل الكفاءات والكوادر في مصر.",

    // Categories
    categories_title: "تصفح الوظائف حسب المجال",
    categories_sub: "اكتشف أفضل الفرص والوظائف المتاحة الآن في مجالك بأعلى الرواتب في مصر",
    cat_health_title: "الرعاية الصحية والطب",
    cat_nursing_title: "التمريض والعناية",
    cat_eng_title: "الهندسة العامة",
    cat_civil_title: "الهندسة المدنية والإنشاءات",
    cat_electrical_title: "الهندسة الكهربائية",
    cat_mechanical_title: "الهندسة الميكانيكية",
    cat_hosp_title: "السياحة والفنادق والضيافة",
    cat_services_title: "الخدمات وإدارة المنشآت",
    cat_tech_title: "البرمجة والذكاء الاصطناعي",
    cat_sales_title: "المبيعات والتسويق",
    cat_finance_title: "المحاسبة والمالية",
    cat_hr_title: "الموارد البشرية (HR)",
    cat_explore_now: "تصفح المجال",
    btn_view_all_cats: "عرض كل المجالات في مصر",
    btn_hide_all_cats: "إخفاء المجالات الإضافية",

    // Featured Jobs
    featured_title: "أحدث الوظائف المتاحة",
    featured_sub: "فرص وظيفية موثوقة ومفحوصة مسبقاً برواتب مجزية وتأمينات كاملة",
    filter_all: "الكل",
    filter_tech: "برمجة وتقنية",
    filter_health: "طبي وصيدلة",
    filter_eng: "هندسة",
    filter_sales: "المبيعات والأعمال",
    jobs_empty_title: "لا توجد وظائف معلنة حالياً في فايربيس",
    jobs_empty_desc: "ابدأ بنشر أول فرصة وظيفية لشركتك للوصول إلى آلاف الكفاءات في مصر.",
    jobs_empty_btn: "+ تسجيل شركة ونشر أول وظيفة فوراً",
    btn_view_all_jobs: "استعرض جميع الوظائف المتاحة عبر المنصة",

    // Employer CTA
    cta_pill: "لأصحاب الشركات ومسؤولي الـ HR في مصر",
    cta_title: "هل تبحث عن كفاءات حقيقية لفريقك؟",
    cta_desc: "انشر إعلان وظيفتك في دقائق وصولاً إلى أفضل الكفاءات الموثّقة في مصر، بلا إعلانات مضلّلة ولا سير ذاتية مكرّرة. وفّر 70% من وقت ومجهود التوظيف.",
    cta_btn_register: "تسجيل شركة واعتماد قانوني",
    cta_btn_dashboard: "لوحة أصحاب العمل والوظائف",
    cta_stat_direct: "تواصل مباشر مع مسؤولي التوظيف",
    cta_stat_nofees: "مجاناً 100% للباحثين عن عمل",

    // Footer
    footer_tagline: "منصة التوظيف في مصر. نربط الكفاءات الشابة بأقوى الشركات في بيئة عمل احترافية.",
    footer_heading_seekers: "للباحثين عن عمل",
    footer_heading_employers: "لأصحاب العمل",
    footer_heading_about: "عن المنصة",
    footer_link_jobs: "تصفح الوظائف المتاحة",
    footer_link_cv: "تحديث السيرة الذاتية (CV)",
    footer_link_profile: "الملف المهني",
    footer_link_alerts: "تنبيهات الوظائف الجديدة",
    footer_link_reg_company: "تسجيل شركة واعتماد قانوني",
    footer_link_dash: "لوحة تحكم التوظيف",
    footer_link_post_job: "انشر وظيفة جديدة",
    footer_link_resumes: "تصفّح السير الذاتية",
    footer_link_admin: "لوحة الإدارة",
    footer_link_why: "ليه صنارة في مصر؟",
    footer_link_featured: "فرص العمل المميزة",
    footer_link_terms: "الشروط وسياسة الخصوصية",
    footer_link_contact: "تواصل مع خدمة العملاء",
    footer_rights: "© 2026 منصة صنارة (SANARA). جميع الحقوق محفوظة.",
    footer_made_with: "صُنعت في مصر لخدمة أفضل الكفاءات الشابة",

    // Auth Modal
    auth_tab_login: "تسجيل الدخول",
    auth_tab_register: "حساب جديد",
    auth_login_title: "مرحباً بعودتك",
    auth_login_sub: "أدخل بياناتك لتسجيل الدخول ومتابعة طلباتك",
    auth_email_label: "البريد الإلكتروني",
    auth_email_placeholder: "example@email.com",
    auth_password_label: "كلمة المرور",
    auth_password_placeholder: "••••••••",
    auth_forgot_pw: "نسيت كلمة المرور؟",
    auth_btn_login: "تسجيل الدخول",
    auth_employer_callout_title: "صاحب عمل أو مسؤول توظيف؟",
    auth_employer_callout_link: "انتقل إلى بوابة وتسجيل دخول أصحاب العمل ←",
    auth_reg_title: "إنشاء حساب جديد في دقائق",
    auth_reg_sub: "انضم لأكبر تجمع للمحترفين والشركات في مصر",
    auth_name_label: "اسمك بالكامل",
    auth_name_placeholder: "اكتب اسمك الثلاثي",
    auth_role_label: "أنت مسجل بصفتك إيه؟",
    auth_role_seeker_title: "باحث عن عمل",
    auth_role_seeker_sub: "عاوز أقدم على وظائف تناسب خبرتي",
    auth_role_emp_title: "صاحب عمل أو HR بشركة",
    auth_role_emp_sub: "عاوز أوظف شطار وأعين في فريقي",
    auth_role_agency_title: "شركة توظيف واستشارات",
    auth_role_agency_sub: "نقدّم خدمات التوظيف للشركات",
    auth_btn_register: "يلا نعمل الحساب",
    modal_close_btn: "إغلاق",

    // Jobs Page
    jobs_page_title: "وظائف مصر المتاحة",
    jobs_page_desc: "تصفح وفلتر آلاف الوظائف المفحوصة والمحدثة يومياً في كبرى الشركات المصرية",
    filter_heading: "تصفية الوظائف",
    filter_city: "المحافظة ومقر العمل",
    filter_sector: "مجال العمل",
    filter_type: "طبيعة الدوام",
    filter_fulltime: "دوام كامل (Full-time)",
    filter_remote: "دوام كامل عن بُعد (Remote)",
    filter_parttime: "دوام جزئي (Part-time)",
    filter_internship: "تدريب للطلبة والخريجين (Internship)",
    jobs_count_label: "فرصة وظيفية متاحة",
    btn_apply_instant: "قدّم الآن في ثوانٍ",

    // Job Detail Page
    job_detail_breadcrumb: "تفاصيل الوظيفة",
    job_badge_verified: "شركة معتمدة في مصر",
    btn_save_job: "احفظ الوظيفة",
    btn_apply_hero: "قدّم على الوظيفة الآن في ثوانٍ",
    sec_job_desc: "تفاصيل الوظيفة ونبذة عن الدور",
    sec_job_resp: "المهام والمسؤوليات الأساسية",
    sec_job_req: "الشروط والمؤهلات المطلوبة",
    sec_job_ben: "المزايا والبدلات المقدمة",
    sec_employer_info: "معلومات صاحب العمل والشركة",
    lbl_company: "اسم المنشأة",
    lbl_hr: "مسؤول التوظيف (HR)",
    lbl_location: "المقر في مصر",
    lbl_platform: "منصة التقديم",
    modal_apply_title: "تقديم طلب توظيف",
    lbl_applicant_name: "الاسم بالكامل",
    lbl_applicant_email: "البريد الإلكتروني",
    lbl_applicant_phone: "رقم الهاتف / الواتساب",
    lbl_applicant_cv: "السيرة الذاتية (CV / Resume)",
    btn_confirm_apply: "تأكيد وإرسال الطلب 🚀",
    btn_cancel: "إلغاء",

    // Employer Dashboard
    dash_title: "لوحة تحكم أصحاب العمل والتوظيف 🇪🇬",
    dash_sub: "ملخص حي لإعلانات الوظائف وطلبات المرشحين المسجلة في Firebase",
    btn_verify_company: "توثيق الشركة 📄",
    btn_post_new_job: "+ انشر إعلان وظيفة",
    stat_active_jobs: "الوظائف النشطة",
    stat_total_apps: "إجمالي طلبات التقديم",
    stat_under_review: "قيد المراجعة والفرز",
    stat_interviews: "المقابلات المحددة",
    sec_my_jobs: "الوظائف المعلنة عبر شركتك",
    sec_recent_apps: "طلبات المرشحين الواصلة حديثاً",
    col_applicant: "المرشح",
    col_job: "الوظيفة المتقدم لها",
    col_contact: "بيانات الاتصال",
    col_resume: "السيرة الذاتية (CV)",
    col_status: "الحالة",
    col_actions: "الإجراء",

    // Profile & CV Update
    profile_title: "الملف المهني",
    profile_sub: "بياناتك وسيرتك الذاتية ومتابعة تقديماتك",
    btn_edit_cv: "تعديل الملف المهني والسيرة الذاتية",
    sec_skills: "المهارات المهنية",
    sec_applied: "الوظائف التي قدمت عليها",
    cv_title: "تحديث السيرة الذاتية والملف المهني",
    cv_sub: "احرص على تحديث بياناتك وسيرتك الذاتية ليصلك أفضل عروض العمل",
    btn_save_profile: "حفظ الملف ورفع السيرة الذاتية",

    // Admin Portal
    admin_portal_title: "بوابة إدارة منصة صنارة ⚙️",
    admin_portal_sub: "إدارة شاملة لاعتماد الشركات، فحص المستندات الرسمية، مراجعة الوظائف، وطلبات المرشحين",
    tab_admin_companies: "الشركات والمستندات القانونية",
    tab_admin_jobs: "إدارة ومراقبة الوظائف",
    tab_admin_applications: "طلبات التقديم والسير الذاتية",
    tab_admin_broadcast: "إرسال إشعارات النظام",
    stat_admin_jobs: "الوظائف النشطة",
    stat_admin_companies: "الشركات المسجلة",
    stat_admin_applications: "طلبات التقديم",
    stat_admin_candidates: "المرشحون بالمنصة",
    btn_approve_company: "اعتماد وتوثيق الشركة 🛡️",
    btn_reject_company: "رفض المستندات",
    status_verified: "معتمدة رسمياً",
    status_pending: "قيد المراجعة",
    status_rejected: "مرفوضة",
    view_document: "عرض المستند 📄",
    btn_delete_job: "حذف الوظيفة",
    btn_edit_job: "تعديل الوظيفة",
    btn_send_notif: "إرسال إشعار 🔔",
    filter_reset: "إعادة ضبط التصفية",
    lbl_company_logo: "شعار الشركة الرسمي",
    btn_upload_logo: "رفع شعار الشركة 📷",
    hint_logo_upload: "صيغ PNG أو JPG أو SVG أو WebP حتى 5 ميجابايت (يظهر بالوظائف وشركاء النجاح)",
    sec_notifications: "إشعارات المنصة",
    lbl_loading: "جارٍ التحميل من فايربيس...",
    lbl_download_cv: "تحميل السيرة الذاتية 📄",
    lbl_no_cv: "لم يتم رفع سيرة ذاتية بعد",
    lbl_cv_boost: "ارفع سيرتك الذاتية لزيادة فرص ظهورك لأصحاب الأعمال",
    sec_summary: "الملخص المهني والخبرات",
    sec_summary_empty: "لم تتم إضافة ملخص مهني بعد. يمكنك تحديث بياناتك من صفحة تحديث الملف الشخصي.",
    sec_prefs: "التفضيلات المهنية في مصر",
    lbl_pref_salary: "الراتب المتوقع",
    lbl_pref_work_model: "نمط العمل المفضل",
    lbl_pref_notice: "فترة الإشعار",
    lbl_pref_immediate: "فوري ومتاح للعمل",
    lbl_resume_file: "ملف السيرة الذاتية (CV)",
    lbl_upload_cv: "رفع السيرة الذاتية",
    modal_post_job_title: "نشر فرصة وظيفية جديدة في مصر",
    lbl_job_title_req: "المسمى الوظيفي *",
    lbl_company_name_req: "اسم المنشأة / الشركة *",
    lbl_location_req: "المحافظة / الموقع *",
    lbl_salary_range: "نطاق الراتب (بالجنيه المصري)",
    lbl_job_desc_req: "الوصف الوظيفي والمسؤوليات المطلوبة",
    btn_publish_firebase: "نشر الوظيفة في فايربيس 🚀",
    btn_refresh_data: "تحديث البيانات 🔄",
    btn_exit_admin: "الخروج من لوحة الإدارة",
    th_admin_company: "اسم الشركة",
    th_admin_hr: "مسؤول الموارد البشرية / التواصل",
    th_admin_numbers: "السجل التجاري والبطاقة الضريبية",
    th_admin_cr: "مستخرج السجل التجاري",
    th_admin_tax: "البطاقة الضريبية",
    th_admin_status: "حالة الاعتماد",
    th_admin_action: "الإجراء",
    btn_approve: "اعتماد رسمي 🛡️",
    btn_reject: "رفض الطلب",
    btn_edit: "تعديل",
    btn_delete: "حذف",
    notif_empty: "لا توجد إشعارات جديدة حالياً",
    notif_mark_read: "تحديد الكل كمقروء",
    stat_connected_db: "متصل بنجاح ✓",
    lbl_verified_profile: "ملف موثق",
    lbl_candidate_profile: "الملف المهني للمرشح",
    lbl_professional_talent: "كفاءة مهنية في سوق العمل المصري",
    lbl_sign_in_profile_title: "تسجيل الدخول للوصول إلى ملفك",
    lbl_sign_in_profile_sub: "سجل الدخول أو أنشئ حساباً جديداً لمتابعة طلبات التوظيف وتحديث سيرتك الذاتية في منصة صنارة.",
    lbl_exp_salary: "الراتب المتوقع",
    lbl_work_model: "نمط العمل",
    lbl_work_model_val: "دوام كامل / عن بُعد",
    lbl_notice_period: "فترة الإشعار",
    lbl_notice_val: "جاهزية فورية للعمل",
    lbl_comp_verified: "مؤسسة معتمدة رسمياً",
    lbl_comp_hr_team: "فريق الموارد البشرية واستقطاب الكفاءات",
    lbl_eg_platform: "منصة صنارة للتوظيف في مصر",
    lbl_official_docs_title: "المستندات القانونية الرسمية",
    lbl_official_docs_sub: "يرجى رفع نسخ واضحة بصيغة PDF أو صور لمستنداتكم السارية للتحقق من هوية المنشأة. البيانات سرية ومحمية قانونياً.",
    lbl_cr_extract: "مستخرج السجل التجاري الساري",
    lbl_cr_sub: "سجل تجاري مصري ساري (PDF أو صورة واضحة)",
    btn_select_cr: "اختيار ملف السجل التجاري",
    lbl_tax_card_title: "البطاقة الضريبية السارية",
    lbl_tax_card_sub: "صادرة من مصلحة الضرائب المصرية",
    btn_select_tax: "اختيار ملف البطاقة الضريبية",
    lbl_cr_num: "رقم السجل التجاري",
    lbl_tax_num: "رقم التسجيل الضريبي",
    lbl_hr_name: "اسم مسؤول الموارد البشرية",
    lbl_hr_phone: "هاتف / واتساب التواصل للموارد البشرية",

    // Company Registration & Verification
    company_reg_badge: "التوثيق القانوني الرسمي للشركات والمؤسسات في مصر 🇪🇬",
    company_reg_title: "سجّل شركتك، وثّق أوراقك القانونية وانشر وظائفك فوراً",
    company_reg_sub: "توثيق قانوني سريع بالسجل التجاري والبطاقة الضريبية للوصول لكفاءات مصر بأمان وشفافية كاملة وبلا وسطاء.",
    company_reg_trust_title: "ضمان الشفافية والامتثال القانوني",
    company_reg_trust_desc: "توثيق الأوراق يمنح مؤسستك شارة 'شركة موثقة رسمياً' مما يضاعف ثقة المرشحين ومعدلات التقديم.",
    company_step1_title: "بيانات ومعلومات الشركة في مصر",
    company_step2_title: "الأوراق والمستندات القانونية الرسمية",
    company_step2_desc: "يرجى رفع نسخ واضحة من مستندات الشركة السارية بصيغة PDF أو صور. بياناتك سرية ومحمية بقوة القانون.",
    company_step3_title: "نشر أول فرصة وظيفية شاغرة لشركتك",
    company_step3_badge: "نشر فوري معتمد",
    company_lbl_name: "الاسم التجاري للشركة",
    company_lbl_legal_form: "الشكل القانوني للشركة",
    company_lbl_field: "المجال والقطاع",
    company_lbl_location: "المقر الرئيسي في مصر",
    company_lbl_website: "الموقع الإلكتروني الرسمي",
    company_lbl_size: "حجم الشركة وعدد الموظفين",
    company_lbl_logo: "شعار الشركة الرسمي (اللوجو)",
    company_btn_upload_logo: "اختيار الشعار الرسمي 📷",
    company_lbl_reg_num: "رقم السجل التجاري",
    company_lbl_tax_num: "رقم التسجيل الضريبي (٩ أرقام)",
    company_lbl_hr_rep: "اسم ممثل التوظيف / مسؤول الموارد البشرية",
    company_lbl_hr_phone: "رقم هاتف مسؤول التوظيف / واتساب",
    company_lbl_job_title: "المسمى الوظيفي",
    company_lbl_job_location: "موقع العمل",
    company_lbl_job_type: "نوع العمل",
    company_lbl_job_salary: "نطاق الراتب",
    company_lbl_job_desc: "الوصف الوظيفي والمسؤوليات",
    company_lbl_job_skills: "المهارات المطلوبة (مفصولة بفواصل)",
    company_declaration_text: "أقر بصفتي ممثلاً مفوضاً عن هذه المؤسسة بأن جميع المستندات القانونية والبيانات المرفوعة صحيحة وسارية ومطابقة لقوانين العمل والاستثمار بجمهورية مصر العربية، وأوافق على شروط النشر الموثق على منصة سنارة.",
    company_btn_submit: "رفع المستندات ونشر الوظيفة فوراً"
  }
};

/**
 * Get current language (defaults to 'en')
 */
function getCurrentLang() {
  const saved = localStorage.getItem('sanara_lang');
  if (saved === 'ar' || saved === 'en') return saved;
  return 'en';
}

/**
 * Translate a key
 */
function t(key) {
  const lang = getCurrentLang();
  return (translations[lang] && translations[lang][key]) || 
         (translations.en && translations.en[key]) || 
         key;
}

/**
 * Apply language to document
 */
function applyLanguage(lang) {
  const safeLang = (lang === 'ar' || lang === 'en') ? lang : 'en';
  localStorage.setItem('sanara_lang', safeLang);

  const html = document.documentElement;
  const isRtl = safeLang === 'ar';

  html.lang = safeLang;
  html.dir = isRtl ? 'rtl' : 'ltr';
  if (document.body) {
    document.body.dir = isRtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', safeLang === 'en');
    document.body.classList.toggle('lang-ar', safeLang === 'ar');
  }

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = translations[safeLang]?.[key];
    if (translated) {
      if (translated.includes('<') && translated.includes('>')) {
        el.innerHTML = translated;
      } else {
        el.textContent = translated;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = translations[safeLang]?.[key];
    if (translated) el.placeholder = translated;
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const translated = translations[safeLang]?.[key];
    if (translated) el.setAttribute('aria-label', translated);
  });

  // Update select options with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    const translated = translations[safeLang]?.[key];
    if (translated) opt.textContent = translated;
  });

  // Update language pill state across all instances (desktop & mobile)
  document.querySelectorAll('.lang-pill').forEach(pill => {
    const enOpt = pill.querySelector('[data-lang="en"]');
    const arOpt = pill.querySelector('[data-lang="ar"]');
    if (enOpt && arOpt) {
      enOpt.classList.toggle('active', safeLang === 'en');
      arOpt.classList.toggle('active', safeLang === 'ar');
    }
  });

  // Dispatch custom event for dynamic components (showcases, charts, job loaders)
  window.dispatchEvent(new CustomEvent('sanaraLanguageChanged', { detail: { lang: safeLang } }));
}

/**
 * Toggle language between English and Arabic
 */
function toggleLanguage() {
  const current = getCurrentLang();
  const next = current === 'en' ? 'ar' : 'en';
  applyLanguage(next);
  if (typeof window.showToast === 'function') {
    window.showToast(next === 'en' ? 'Switched to English' : 'تم التحويل إلى اللغة العربية', 'info');
  }
}

// Attach to window
window.SanaraI18n = {
  t,
  getCurrentLang,
  applyLanguage,
  toggleLanguage,
  translations
};

// Global click delegation for language switcher pill anywhere in DOM
document.addEventListener('click', (e) => {
  const opt = e.target.closest('.lang-opt');
  if (opt && opt.dataset.lang) {
    e.preventDefault();
    e.stopPropagation();
    applyLanguage(opt.dataset.lang);
    return;
  }
  const pill = e.target.closest('.lang-pill');
  if (pill) {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguage();
  }
});

// Also support keyboard toggle (Enter or Space) on .lang-pill
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.classList && e.target.classList.contains('lang-pill')) {
    e.preventDefault();
    toggleLanguage();
  }
});

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => applyLanguage(getCurrentLang()));
} else {
  applyLanguage(getCurrentLang());
}

// ============================================================
//  Al Mizan Law Firm — i18n.js
//  Full Arabic ↔ English translation system
//  Usage: data-i18n="key" on any element
//         data-i18n-placeholder="key" on inputs
//         data-i18n-html="key" for innerHTML
// ============================================================

const TRANSLATIONS = {

  // ── Global / Nav ────────────────────────────────────────────
  nav_home:           { en: 'Home',              ar: 'الرئيسية' },
  nav_appointments:   { en: 'Appointments',      ar: 'المواعيد' },
  nav_courses:        { en: 'Courses',           ar: 'الدورات' },
  nav_about:          { en: 'About Us',          ar: 'من نحن' },
  nav_contact:        { en: 'Contact',           ar: 'تواصل معنا' },
  nav_book:           { en: 'Book Now',          ar: 'احجز الآن' },

  // ── Footer ───────────────────────────────────────────────────
  footer_nav:         { en: 'Navigation',        ar: 'التنقل' },
  footer_legal:       { en: 'Legal',             ar: 'قانوني' },
  footer_contact:     { en: 'Contact Us',        ar: 'تواصل معنا' },
  footer_terms:       { en: 'Terms of Service',  ar: 'شروط الخدمة' },
  footer_privacy:     { en: 'Privacy Policy',    ar: 'سياسة الخصوصية' },
  footer_copy:        { en: `© ${new Date().getFullYear()} Al Mizan Law Firm. All rights reserved.`,
                        ar: `© ${new Date().getFullYear()} مكتب الميزان للمحاماة. جميع الحقوق محفوظة.` },

  // ── Breadcrumb ───────────────────────────────────────────────
  bc_home:            { en: 'Home',              ar: 'الرئيسية' },
  bc_appointments:    { en: 'Book Appointment',  ar: 'حجز موعد' },
  bc_courses:         { en: 'Courses',           ar: 'الدورات' },
  bc_checkout:        { en: 'Checkout',          ar: 'الدفع' },
  bc_about:           { en: 'About Us',          ar: 'من نحن' },
  bc_contact:         { en: 'Contact',           ar: 'تواصل معنا' },
  bc_terms:           { en: 'Terms of Service',  ar: 'شروط الخدمة' },
  bc_privacy:         { en: 'Privacy Policy',    ar: 'سياسة الخصوصية' },

  // ── Section Tags ─────────────────────────────────────────────
  tag_expertise:      { en: 'Our Expertise',     ar: 'خبرتنا' },
  tag_why:            { en: 'Why Al Mizan',      ar: 'لماذا الميزان' },
  tag_education:      { en: 'Law Education',     ar: 'التعليم القانوني' },
  tag_mission:        { en: 'Our Mission',       ar: 'رسالتنا' },
  tag_values:         { en: 'Our Values',        ar: 'قيمنا' },
  tag_team:           { en: 'Our Team',          ar: 'فريقنا' },

  // ── Home Hero ────────────────────────────────────────────────
  hero_badge:         { en: 'Established in Cairo, Egypt',    ar: 'تأسس في القاهرة، مصر' },
  hero_title:         { en: 'Al Mizan<br/>Law Firm',         ar: 'مكتب الميزان<br/>للمحاماة' },
  hero_sub:           { en: 'Where justice meets precision. A trusted name in Egyptian law, delivering expert counsel across every field of legal practice.',
                        ar: 'حيث تلتقي العدالة بالدقة. اسم موثوق في القانون المصري، يقدم استشارات قانونية متخصصة في جميع مجالات الممارسة القانونية.' },
  hero_cta1:          { en: 'Book a Consultation',           ar: 'احجز استشارة' },
  hero_cta2:          { en: 'Explore Law Courses',           ar: 'استعرض الدورات' },
  hero_stat1_num:     { en: '15+',                           ar: '+15' },
  hero_stat1_lbl:     { en: 'Years of Practice',            ar: 'سنوات من الخبرة' },
  hero_stat2_num:     { en: '1,200+',                        ar: '+1,200' },
  hero_stat2_lbl:     { en: 'Cases Won',                    ar: 'قضية فائزة' },
  hero_stat3_num:     { en: '500+',                          ar: '+500' },
  hero_stat3_lbl:     { en: 'Satisfied Clients',            ar: 'عميل راضٍ' },
  hero_scroll:        { en: 'Scroll to Explore',            ar: 'مرر للاستكشاف' },

  // ── Services ─────────────────────────────────────────────────
  services_title:     { en: 'Areas of',                     ar: 'مجالات' },
  services_title_sp:  { en: 'Practice',                     ar: 'الممارسة' },
  services_sub:       { en: 'Comprehensive legal solutions tailored to every client\'s unique needs.',
                        ar: 'حلول قانونية شاملة مصممة لتلبية الاحتياجات الفريدة لكل عميل.' },
  svc1_title:         { en: 'Corporate Law',                ar: 'قانون الشركات' },
  svc1_desc:          { en: 'Business formation, mergers & acquisitions, corporate governance, and commercial contracts.',
                        ar: 'تأسيس الأعمال، الاندماج والاستحواذ، حوكمة الشركات، والعقود التجارية.' },
  svc2_title:         { en: 'Civil Litigation',             ar: 'التقاضي المدني' },
  svc2_desc:          { en: 'Skilled representation in civil disputes, contract breaches, and property claims.',
                        ar: 'تمثيل ماهر في النزاعات المدنية وإخلال العقود والمطالبات العقارية.' },
  svc3_title:         { en: 'Family Law',                   ar: 'قانون الأسرة' },
  svc3_desc:          { en: 'Sensitive handling of divorce, custody, inheritance, and family legal matters.',
                        ar: 'التعامل الحساس مع الطلاق والحضانة والميراث وشؤون الأسرة.' },
  svc4_title:         { en: 'Real Estate Law',              ar: 'قانون العقارات' },
  svc4_desc:          { en: 'Property acquisition, title verification, lease agreements, and real estate disputes.',
                        ar: 'الاستحواذ على العقارات، التحقق من الملكية، عقود الإيجار، وفض النزاعات.' },
  svc5_title:         { en: 'Labor & Employment',           ar: 'العمل والتوظيف' },
  svc5_desc:          { en: 'Employment contracts, wrongful termination claims, and workplace rights.',
                        ar: 'عقود العمل، مطالبات الفصل التعسفي، وحقوق مكان العمل.' },
  svc6_title:         { en: 'Criminal Defense',             ar: 'الدفاع الجنائي' },
  svc6_desc:          { en: 'Vigorous defense in criminal proceedings with a commitment to your rights.',
                        ar: 'دفاع قوي في الإجراءات الجنائية مع الالتزام بحماية حقوقك.' },
  consult_now:        { en: 'Consult Now →',               ar: 'استشر الآن ←' },

  // ── Why Us ───────────────────────────────────────────────────
  why_title:          { en: 'A Firm Built on',              ar: 'شركة مبنية على' },
  why_title_sp:       { en: 'Integrity',                    ar: 'النزاهة' },
  why_quote_txt:      { en: '"The balance of justice shall never tip in the wrong direction."',
                        ar: '"لن يميل ميزان العدالة أبداً في الاتجاه الخاطئ."' },
  why1_title:         { en: 'Client-First Philosophy',      ar: 'فلسفة العميل أولاً' },
  why1_desc:          { en: 'Every case receives our full attention and personalized strategy.',
                        ar: 'كل قضية تحظى باهتمامنا الكامل واستراتيجية مخصصة.' },
  why2_title:         { en: 'Seasoned Legal Team',          ar: 'فريق قانوني متمرس' },
  why2_desc:          { en: 'Attorneys with decades of combined courtroom experience.',
                        ar: 'محامون ذوو عقود من الخبرة المشتركة في قاعات المحاكم.' },
  why3_title:         { en: 'Transparent Billing',          ar: 'فواتير شفافة' },
  why3_desc:          { en: 'Clear, honest fee structures — no hidden surprises.',
                        ar: 'هياكل رسوم واضحة وصادقة — لا مفاجآت خفية.' },
  why4_title:         { en: 'Proven Track Record',          ar: 'سجل حافل بالإنجازات' },
  why4_desc:          { en: 'Over 1,200 successfully resolved cases across all practice areas.',
                        ar: 'أكثر من 1,200 قضية محلولة بنجاح عبر جميع مجالات الممارسة.' },
  why_learn:          { en: 'Learn About Us',               ar: 'تعرف علينا' },
  why_testimonial:    { en: 'Al Mizan handled our corporate restructuring with unmatched professionalism. Their attention to detail and legal acumen saved our company.',
                        ar: 'تعامل الميزان مع إعادة هيكلة شركتنا باحترافية لا مثيل لها. اهتمامهم بالتفاصيل وحنكتهم القانونية أنقذت شركتنا.' },
  why_client:         { en: '— Ahmed K., CEO',              ar: '— أحمد ك.، الرئيس التنفيذي' },
  why_badge_lbl:      { en: 'Client Satisfaction',         ar: 'رضا العملاء' },

  // ── Courses CTA ──────────────────────────────────────────────
  courses_cta_title:  { en: 'Advance Your Legal',          ar: 'طور معرفتك' },
  courses_cta_sp:     { en: 'Knowledge',                   ar: 'القانونية' },
  courses_cta_sub:    { en: 'Our expert-led courses cover everything from contract law fundamentals to advanced criminal procedure.',
                        ar: 'تغطي دوراتنا بقيادة خبراء كل شيء من أساسيات قانون العقود إلى الإجراءات الجنائية المتقدمة.' },
  courses_browse:     { en: 'Browse All Courses',          ar: 'استعرض جميع الدورات' },

  // ── Book CTA ─────────────────────────────────────────────────
  book_cta_title:     { en: 'Ready to Protect Your Rights?', ar: 'هل أنت مستعد لحماية حقوقك؟' },
  book_cta_sub:       { en: 'Schedule a confidential consultation with one of our senior attorneys today.',
                        ar: 'حدد موعداً لاستشارة سرية مع أحد كبار محامينا اليوم.' },
  book_cta_btn:       { en: 'Book an Appointment',          ar: 'احجز موعداً' },

  // ── Appointments Page ────────────────────────────────────────
  appt_hero_title:    { en: 'Book a Consultation',          ar: 'احجز استشارة' },
  appt_hero_sub:      { en: 'Select a date and time — your slot is confirmed after our team reviews your request.',
                        ar: 'اختر تاريخاً ووقتاً — يتم تأكيد موعدك بعد مراجعة فريقنا لطلبك.' },
  step1_label:        { en: '01 Select Time',               ar: '01 اختر الوقت' },
  step2_label:        { en: '02 Your Details',              ar: '02 بياناتك' },
  step3_label:        { en: '03 Review & Confirm',          ar: '03 مراجعة وتأكيد' },
  appt_choose_date:   { en: 'Choose a Date',                ar: 'اختر التاريخ' },
  appt_date_lbl:      { en: 'Appointment Date',             ar: 'تاريخ الموعد' },
  appt_slots_title:   { en: 'Available Time Slots',         ar: 'الأوقات المتاحة' },
  appt_no_slots:      { en: 'No available slots for this date. Please select another day.',
                        ar: 'لا توجد أوقات متاحة لهذا التاريخ. الرجاء اختيار يوم آخر.' },
  step1_next:         { en: 'Continue to Details →',        ar: 'متابعة للبيانات ←' },
  appt_info_title:    { en: 'Your Information',             ar: 'معلوماتك' },
  lbl_fullname:       { en: 'Full Name *',                  ar: 'الاسم الكامل *' },
  lbl_phone:          { en: 'Phone Number *',               ar: 'رقم الهاتف *' },
  lbl_email:          { en: 'Email Address *',              ar: 'البريد الإلكتروني *' },
  lbl_service:        { en: 'Legal Service Required *',     ar: 'الخدمة القانونية المطلوبة *' },
  lbl_notes:          { en: 'Brief Description (optional)', ar: 'وصف مختصر (اختياري)' },
  svc_placeholder:    { en: '— Select a service —',         ar: '— اختر خدمة —' },
  svc_opt1:           { en: 'Legal Consultation',           ar: 'استشارة قانونية' },
  svc_opt2:           { en: 'Contract Review',              ar: 'مراجعة عقد' },
  svc_opt3:           { en: 'Corporate Law',                ar: 'قانون الشركات' },
  svc_opt4:           { en: 'Civil Litigation',             ar: 'التقاضي المدني' },
  svc_opt5:           { en: 'Family Law',                   ar: 'قانون الأسرة' },
  svc_opt6:           { en: 'Real Estate Law',              ar: 'قانون العقارات' },
  svc_opt7:           { en: 'Labor & Employment',           ar: 'العمل والتوظيف' },
  svc_opt8:           { en: 'Criminal Defense',             ar: 'الدفاع الجنائي' },
  svc_opt9:           { en: 'Other',                        ar: 'أخرى' },
  step2_back:         { en: '← Back',                      ar: '→ رجوع' },
  step2_next:         { en: 'Review Appointment →',         ar: 'مراجعة الموعد ←' },
  appt_review_title:  { en: 'Review Your Appointment',      ar: 'مراجعة موعدك' },
  appt_review_warn:   { en: '⚠ Your appointment request will be reviewed by our team. You will be contacted once it is <strong>confirmed</strong>. Unconfirmed slots remain open to other clients.',
                        ar: '⚠ سيتم مراجعة طلب موعدك من قِبل فريقنا. سيتم التواصل معك بمجرد <strong>التأكيد</strong>. تبقى المواعيد غير المؤكدة متاحة للعملاء الآخرين.' },
  step3_back:         { en: '← Edit Details',              ar: '→ تعديل البيانات' },
  step3_submit:       { en: '✓ Submit Request',             ar: '✓ إرسال الطلب' },
  sidebar_info:       { en: 'Consultation Info',            ar: 'معلومات الاستشارة' },
  sidebar_duration:   { en: 'Duration',                     ar: 'المدة' },
  sidebar_dur_val:    { en: '45–60 min',                    ar: '45–60 دقيقة' },
  sidebar_type:       { en: 'Type',                         ar: 'النوع' },
  sidebar_type_val:   { en: 'In-person / Phone',            ar: 'حضوري / هاتفي' },
  sidebar_hours:      { en: 'Working Hours',                ar: 'ساعات العمل' },
  sidebar_hours_val:  { en: 'Sun–Thu, 9AM–5PM',            ar: 'الأحد–الخميس، 9ص–5م' },
  sidebar_note:       { en: 'All consultations are <strong>strictly confidential</strong>. Your request is submitted securely and reviewed by our team before confirmation.',
                        ar: 'جميع الاستشارات <strong>سرية تماماً</strong>. يتم تقديم طلبك بشكل آمن ومراجعته من قِبل فريقنا قبل التأكيد.' },
  sidebar_urgent:     { en: 'Need Urgent Help?',            ar: 'هل تحتاج مساعدة عاجلة؟' },
  sidebar_call_desc:  { en: 'Call us directly:',            ar: 'اتصل بنا مباشرة:' },
  call_now:           { en: '📞 Call Now',                  ar: '📞 اتصل الآن' },

  // Review labels
  rvw_date:           { en: 'Date',                         ar: 'التاريخ' },
  rvw_time:           { en: 'Time',                         ar: 'الوقت' },
  rvw_name:           { en: 'Name',                         ar: 'الاسم' },
  rvw_phone:          { en: 'Phone',                        ar: 'الهاتف' },
  rvw_email:          { en: 'Email',                        ar: 'البريد' },
  rvw_service:        { en: 'Service',                      ar: 'الخدمة' },

  // ── Courses Page ─────────────────────────────────────────────
  courses_hero_title: { en: 'Law Courses',                  ar: 'الدورات القانونية' },
  courses_hero_sub:   { en: 'Expert knowledge delivered by Al Mizan\'s practising attorneys.',
                        ar: 'معرفة متخصصة يقدمها محامو الميزان الممارسون.' },
  course_enroll:      { en: 'Enroll Now',                   ar: 'سجل الآن' },
  course_levels:      { en: 'All Levels',                   ar: 'جميع المستويات' },
  courses_empty_msg:  { en: 'No courses available at the moment. Check back soon.',
                        ar: 'لا توجد دورات متاحة في الوقت الحالي. تحقق مرة أخرى قريباً.' },
  all_courses:        { en: 'All Courses',                  ar: 'جميع الدورات' },

  // ── Checkout (Course) ────────────────────────────────────────
  co_hero_title:      { en: 'Course Checkout',              ar: 'الدفع للدورة' },
  co_hero_sub:        { en: 'Complete your enrollment below.',ar: 'أكمل تسجيلك أدناه.' },
  co_details_title:   { en: 'Your Details',                 ar: 'بياناتك' },
  co_notes_lbl:       { en: 'Additional Notes (optional)',  ar: 'ملاحظات إضافية (اختياري)' },
  co_payment_title:   { en: 'Payment Instructions',         ar: 'تعليمات الدفع' },
  co_payment_warn:    { en: 'Please transfer the course fee to the account below, then submit this form. Our team will verify payment and enroll you within 24 hours.',
                        ar: 'الرجاء تحويل رسوم الدورة إلى الحساب أدناه، ثم إرسال هذا النموذج. سيتحقق فريقنا من الدفع وسيسجلك خلال 24 ساعة.' },
  pay_bank:           { en: 'Bank',                         ar: 'البنك' },
  pay_acct_name:      { en: 'Account Name',                 ar: 'اسم الحساب' },
  pay_acct_num:       { en: 'Account Number',               ar: 'رقم الحساب' },
  pay_iban:           { en: 'IBAN',                         ar: 'الآيبان' },
  co_submit:          { en: '✓ Confirm Enrollment',         ar: '✓ تأكيد التسجيل' },
  co_order_title:     { en: 'Order Summary',                ar: 'ملخص الطلب' },
  co_total:           { en: 'Total',                        ar: 'الإجمالي' },
  co_duration:        { en: 'Duration',                     ar: 'المدة' },

  // ── Thank You ────────────────────────────────────────────────
  ty_appt_icon:       { en: '📅',                           ar: '📅' },
  ty_appt_title:      { en: 'Appointment Requested!',       ar: 'تم إرسال طلب الموعد!' },
  ty_appt_sub:        { en: 'Your consultation request has been submitted. We will review it and confirm your appointment by phone or email.',
                        ar: 'تم إرسال طلب استشارتك. سنراجعه ونؤكد موعدك عبر الهاتف أو البريد الإلكتروني.' },
  ty_appt_note:       { en: 'Please note: your slot is not final until confirmed by our team.',
                        ar: 'ملاحظة: موعدك ليس نهائياً حتى يتم تأكيده من قِبل فريقنا.' },
  ty_course_icon:     { en: '🎓',                           ar: '🎓' },
  ty_course_title:    { en: 'Enrollment Submitted!',        ar: 'تم إرسال التسجيل!' },
  ty_course_sub:      { en: 'Thank you for enrolling. Once we verify your payment, you will receive access details within 24 hours.',
                        ar: 'شكراً لتسجيلك. بمجرد التحقق من دفعتك، ستتلقى تفاصيل الوصول خلال 24 ساعة.' },
  ty_course_note:     { en: 'If you have not transferred the course fee yet, please do so using the bank details provided during checkout.',
                        ar: 'إذا لم تقم بتحويل رسوم الدورة بعد، يرجى القيام بذلك باستخدام التفاصيل البنكية المقدمة أثناء الدفع.' },
  ty_status_pending:  { en: '⏳ Pending Review',            ar: '⏳ قيد المراجعة' },
  ty_status_payment:  { en: '⏳ Awaiting Payment Verification', ar: '⏳ في انتظار التحقق من الدفع' },
  ty_back:            { en: '← Back to Home',              ar: '→ العودة للرئيسية' },
  ty_contact:         { en: 'Contact Us',                   ar: 'تواصل معنا' },
  rvw_status:         { en: 'Status',                       ar: 'الحالة' },

  // ── About Page ───────────────────────────────────────────────
  about_hero_title:   { en: 'About Al Mizan',              ar: 'عن الميزان' },
  about_hero_sub:     { en: 'A legacy of justice, built one case at a time.',
                        ar: 'إرث من العدالة، يُبنى قضية تلو الأخرى.' },
  about_title:        { en: 'Justice Is Not a',            ar: 'العدالة ليست' },
  about_title_sp:     { en: 'Luxury',                      ar: 'رفاهية' },
  about_p1:           { en: 'Founded in Cairo, Al Mizan Law Firm was established on one fundamental belief: every individual and business deserves access to skilled, honest, and dedicated legal representation. We have spent over 15 years building a firm where client outcomes are never compromised by shortcuts.',
                        ar: 'تأسس مكتب الميزان للمحاماة في القاهرة على قناعة أساسية واحدة: كل فرد وشركة تستحق الحصول على تمثيل قانوني ماهر وصادق ومتفانٍ. أمضينا أكثر من 15 عاماً في بناء مكتب لا تُساوَم فيه نتائج العملاء على حساب الاختصارات.' },
  about_p2:           { en: 'The name "Al Mizan" — Arabic for "The Scale" — reflects our unwavering commitment to balance, fairness, and the equal application of the law.',
                        ar: 'يعكس اسم "الميزان" — الذي يعني أداة قياس التوازن — التزامنا الراسخ بالتوازن والإنصاف والتطبيق المتساوي للقانون.' },
  about_cta:          { en: 'Schedule a Consultation',     ar: 'حدد موعد استشارة' },
  stat1_lbl:          { en: 'Years of Practice',           ar: 'سنوات الخبرة' },
  stat2_lbl:          { en: 'Cases Won',                   ar: 'قضية فائزة' },
  stat3_lbl:          { en: 'Active Clients',              ar: 'عميل نشط' },
  stat4_lbl:          { en: 'Practice Areas',              ar: 'مجال تخصص' },
  values_title:       { en: 'What We Stand',               ar: 'ما نمثله' },
  values_sp:          { en: 'For',                         ar: '' },
  val1_title:         { en: 'Integrity',                   ar: 'النزاهة' },
  val1_desc:          { en: 'We operate with complete transparency. Our clients always know exactly where their case stands.',
                        ar: 'نعمل بشفافية تامة. يعرف عملاؤنا دائماً أين تقف قضيتهم بالضبط.' },
  val2_title:         { en: 'Precision',                   ar: 'الدقة' },
  val2_desc:          { en: 'Legal battles are won in the details. We invest the time to understand every nuance of each case.',
                        ar: 'المعارك القانونية تُكسب في التفاصيل. نستثمر الوقت لفهم كل دقيقة في كل قضية.' },
  val3_title:         { en: 'Client-First',                ar: 'العميل أولاً' },
  val3_desc:          { en: 'Your goals drive our strategy. We never apply a one-size-fits-all approach.',
                        ar: 'أهدافك تقود استراتيجيتنا. لا نطبق أبداً نهجاً واحداً يناسب الجميع.' },
  val4_title:         { en: 'Respect for Law',             ar: 'احترام القانون' },
  val4_desc:          { en: 'We uphold the dignity of the legal system while vigorously advocating for our clients.',
                        ar: 'نحافظ على كرامة المنظومة القانونية بينما ندافع بقوة عن عملائنا.' },
  team_title:         { en: 'The Attorneys Behind',        ar: 'المحامون خلف' },
  team_sp:            { en: 'Al Mizan',                    ar: 'الميزان' },
  team1_name:         { en: 'Ahmed Al-Mizan',              ar: 'أحمد الميزان' },
  team1_role:         { en: 'Senior Partner · Corporate Law', ar: 'شريك أول · قانون الشركات' },
  team1_bio:          { en: '20+ years in corporate governance and M&A. Former legal advisor to multiple Egyptian public companies.',
                        ar: 'أكثر من 20 عاماً في حوكمة الشركات والاندماج والاستحواذ. مستشار قانوني سابق لعدة شركات مصرية عامة.' },
  team2_name:         { en: 'Nadia Hassan',                ar: 'نادية حسن' },
  team2_role:         { en: 'Partner · Family & Civil Law', ar: 'شريكة · قانون الأسرة والمدني' },
  team2_bio:          { en: 'Specialises in family law and civil litigation. Known for her compassionate yet decisive approach.',
                        ar: 'متخصصة في قانون الأسرة والتقاضي المدني. معروفة بنهجها الرحيم والحاسم في آن واحد.' },
  team3_name:         { en: 'Omar Farouk',                 ar: 'عمر فاروق' },
  team3_role:         { en: 'Associate · Criminal Defense', ar: 'محامٍ مساعد · الدفاع الجنائي' },
  team3_bio:          { en: 'A formidable criminal defense attorney with a record of successfully overturning wrongful convictions.',
                        ar: 'محامٍ دفاعٍ جنائي هائل مع سجل من نجاح إلغاء الأحكام الخاطئة.' },

  // ── Contact Page ─────────────────────────────────────────────
  contact_hero_title: { en: 'Contact Us',                  ar: 'تواصل معنا' },
  contact_hero_sub:   { en: 'We are here to help. Reach out and we will respond promptly.',
                        ar: 'نحن هنا للمساعدة. تواصل معنا وسنرد في أقرب وقت.' },
  contact_form_title: { en: 'Send Us a Message',           ar: 'أرسل لنا رسالة' },
  lbl_subject:        { en: 'Subject *',                   ar: 'الموضوع *' },
  lbl_message:        { en: 'Message *',                   ar: 'الرسالة *' },
  ct_submit:          { en: 'Send Message',                ar: 'إرسال الرسالة' },
  contact_info_title: { en: 'Get In Touch',                ar: 'تواصل معنا' },
  contact_ph_lbl:     { en: 'Phone',                       ar: 'الهاتف' },
  contact_em_lbl:     { en: 'Email',                       ar: 'البريد الإلكتروني' },
  contact_ad_lbl:     { en: 'Address',                     ar: 'العنوان' },
  hours_title:        { en: 'Office Hours',                ar: 'ساعات العمل' },
  hours_row1_lbl:     { en: 'Sunday – Thursday',           ar: 'الأحد – الخميس' },
  hours_row1_val:     { en: '9:00 AM – 5:00 PM',          ar: '9:00 ص – 5:00 م' },
  hours_row2_lbl:     { en: 'Friday – Saturday',           ar: 'الجمعة – السبت' },
  hours_row2_val:     { en: 'Closed',                      ar: 'مغلق' },
  contact_appt_btn:   { en: '📅 Book an Appointment',      ar: '📅 احجز موعداً' },

  // ── Terms Page ───────────────────────────────────────────────
  terms_hero_title:   { en: 'Terms of Service',            ar: 'شروط الخدمة' },
  terms_hero_sub:     { en: 'Please read these terms carefully before using our services.',
                        ar: 'يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.' },

  // ── Privacy Page ─────────────────────────────────────────────
  privacy_hero_title: { en: 'Privacy Policy',              ar: 'سياسة الخصوصية' },
  privacy_hero_sub:   { en: 'How we collect, use, and protect your personal information.',
                        ar: 'كيف نجمع معلوماتك الشخصية ونستخدمها ونحميها.' },

  // ── Generic ──────────────────────────────────────────────────
  ph_name:            { en: 'Ahmed Mohamed',               ar: 'أحمد محمد' },
  ph_phone:           { en: '+20 100 000 0000',            ar: '+20 100 000 0000' },
  ph_email:           { en: 'you@example.com',             ar: 'بريدك@مثال.com' },
  ph_notes:           { en: 'Describe your situation briefly…', ar: 'اشرح وضعك باختصار…' },
  ph_message:         { en: 'Describe your legal matter…', ar: 'اشرح قضيتك القانونية…' },
  ph_subject:         { en: 'How can we help?',            ar: 'كيف يمكننا مساعدتك؟' },
  ph_co_notes:        { en: 'Any questions or special requests…', ar: 'أي أسئلة أو طلبات خاصة…' },
  btn_back_home:      { en: '← Back to Home',             ar: '→ العودة للرئيسية' },
  lang_toggle:        { en: 'عربي',                        ar: 'English' },
};

// ── Language Engine ──────────────────────────────────────────
const I18N = {
  current: localStorage.getItem('almizan_lang') || 'en',

  init() {
    this.apply(this.current);
    this.mountToggle();
  },

  apply(lang) {
    this.current = lang;
    localStorage.setItem('almizan_lang', lang);

    // Direction & font class
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');

    // Translate all marked elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const t   = TRANSLATIONS[key];
      if (t) el.textContent = t[lang] ?? t.en;
    });

    // data-i18n-html (innerHTML, allows <strong> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const t   = TRANSLATIONS[key];
      if (t) el.innerHTML = t[lang] ?? t.en;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const t   = TRANSLATIONS[key];
      if (t) el.placeholder = t[lang] ?? t.en;
    });

    // Update toggle button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      const t = TRANSLATIONS['lang_toggle'];
      toggleBtn.textContent = t ? (t[lang] ?? t.en) : (lang === 'ar' ? 'English' : 'عربي');
    }
  },

  toggle() {
    this.apply(this.current === 'en' ? 'ar' : 'en');
  },

  t(key) {
    const t = TRANSLATIONS[key];
    if (!t) return key;
    return t[this.current] ?? t.en;
  },

  mountToggle() {
    // The toggle button is injected by main.js into the navbar.
    // Here we just bind the click once the DOM is ready.
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => I18N.toggle());
  },
};

// Auto-init after DOM + main.js have run
document.addEventListener('DOMContentLoaded', () => {
  // Slight delay so injectNav() in main.js fires first
  setTimeout(() => I18N.init(), 0);
});

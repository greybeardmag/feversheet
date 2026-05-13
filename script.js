/**
 * CarePoint Health — script.js
 * All translations are inlined as a JS object to avoid fetch() /
 * CSP issues when opened directly as a local file.
 * Supports 14 languages, RTL, localStorage persistence, English fallback.
 */

/* ============================================================
   INLINED TRANSLATIONS  (generated from translations/*.json)
============================================================ */
const ALL_TRANSLATIONS = {
  "en": {
    "siteTitle": "CarePoint Health",
    "navHome": "Home",
    "navAbout": "About",
    "navServices": "Services",
    "navContact": "Contact",
    "heroEyebrow": "Trusted Pediatric Care",
    "heroTitle": "Helping Children Thrive, Every Step of the Way",
    "heroSubtitle": "Expert, compassionate pediatric and emergency care for children of all ages — right in your community.",
    "ctaPrimary": "Book an Appointment",
    "ctaSecondary": "Learn More",
    "statPatients": "Patients Served",
    "statAvailable": "Always Available",
    "trustCPS": "CPS Guidelines",
    "trustSickKids": "SickKids Affiliated",
    "trustBoard": "Board-Certified Physicians",
    "trustLang": "Multilingual Staff",
    "aboutEyebrow": "Who We Are",
    "aboutTitle": "A Team Dedicated to Children's Health",
    "aboutBody": "CarePoint Health is a community-based pediatric clinic staffed by board-certified physicians with subspecialty training in Pediatric Emergency Medicine. We believe every child deserves timely, evidence-based care delivered with warmth and respect — regardless of language, background, or ability to pay.",
    "aboutYears": "Years of Care",
    "aboutPoint1": "Evidence-based treatment protocols",
    "aboutPoint2": "Interpreter services in 14 languages",
    "aboutPoint3": "Family-centred approach to care",
    "servicesEyebrow": "What We Offer",
    "servicesTitle": "Comprehensive Pediatric Services",
    "servicesSubtitle": "From routine well-child visits to urgent emergency care, we have your child covered.",
    "serviceOneTitle": "Well-Child Visits",
    "serviceOneBody": "Regular check-ups, developmental screening, and immunizations to keep your child on track at every stage of growth.",
    "serviceTwoTitle": "Pediatric Emergency Care",
    "serviceTwoBody": "24/7 access to pediatric emergency physicians for fever, injuries, breathing difficulties, and other urgent concerns.",
    "serviceThreeTitle": "Medication Guidance",
    "serviceThreeBody": "Weight-based dosing advice, prescription support, and clear instructions for Tylenol, Advil, and other common medications.",
    "serviceLearnMore": "Learn more →",
    "contactEyebrow": "Get in Touch",
    "contactTitle": "We're Here When You Need Us",
    "contactBody": "Have a question about your child's health? Need to book an appointment or speak with a nurse? Reach out — our multilingual team is ready to help.",
    "contactAddress": "123 Wellness Avenue, Toronto, ON M5V 1A1",
    "formName": "Your Name",
    "formNamePlaceholder": "Jane Smith",
    "formEmail": "Email Address",
    "formEmailPlaceholder": "jane@example.com",
    "formMessage": "Message",
    "formMessagePlaceholder": "How can we help you?",
    "formSubmit": "Send Message",
    "formNote": "We respond within one business day.",
    "footerText": "© 2026 CarePoint Health. All rights reserved. This site is for informational purposes only and does not constitute medical advice.",
    "footerDisclaimer": "Always consult a qualified healthcare professional for medical decisions."
  },
  "es": {
    "siteTitle": "CarePoint Salud",
    "navHome": "Inicio",
    "navAbout": "Nosotros",
    "navServices": "Servicios",
    "navContact": "Contacto",
    "heroEyebrow": "Atención Pediátrica de Confianza",
    "heroTitle": "Ayudando a los Niños a Crecer Sanos, Paso a Paso",
    "heroSubtitle": "Atención pediátrica y de emergencia, experta y compasiva, para niños de todas las edades — en su comunidad.",
    "ctaPrimary": "Reservar una Cita",
    "ctaSecondary": "Saber Más",
    "statPatients": "Pacientes Atendidos",
    "statAvailable": "Siempre Disponible",
    "trustCPS": "Guías de la SCP",
    "trustSickKids": "Afiliado a SickKids",
    "trustBoard": "Médicos Certificados",
    "trustLang": "Personal Multilingüe",
    "aboutEyebrow": "Quiénes Somos",
    "aboutTitle": "Un Equipo Dedicado a la Salud Infantil",
    "aboutBody": "CarePoint Salud es una clínica pediátrica comunitaria atendida por médicos certificados con formación en Medicina de Emergencia Pediátrica. Creemos que todo niño merece atención oportuna y basada en evidencia, con calidez y respeto, sin importar el idioma o el origen.",
    "aboutYears": "Años de Servicio",
    "aboutPoint1": "Protocolos de tratamiento basados en evidencia",
    "aboutPoint2": "Servicios de interpretación en 14 idiomas",
    "aboutPoint3": "Enfoque centrado en la familia",
    "servicesEyebrow": "Lo Que Ofrecemos",
    "servicesTitle": "Servicios Pediátricos Integrales",
    "servicesSubtitle": "Desde visitas de rutina hasta urgencias, tenemos a su hijo cubierto.",
    "serviceOneTitle": "Visitas de Niño Sano",
    "serviceOneBody": "Controles regulares, evaluación del desarrollo e inmunizaciones para mantener a su hijo en el camino correcto.",
    "serviceTwoTitle": "Urgencias Pediátricas",
    "serviceTwoBody": "Acceso 24/7 a médicos de urgencias pediátricas para fiebre, lesiones, dificultades respiratorias y otras emergencias.",
    "serviceThreeTitle": "Orientación sobre Medicamentos",
    "serviceThreeBody": "Asesoramiento de dosis por peso, apoyo con recetas e instrucciones claras para Tylenol, Advil y otros medicamentos comunes.",
    "serviceLearnMore": "Saber más →",
    "contactEyebrow": "Contáctenos",
    "contactTitle": "Estamos Aquí Cuando Nos Necesite",
    "contactBody": "¿Tiene preguntas sobre la salud de su hijo? ¿Necesita una cita o hablar con una enfermera? Escríbanos — nuestro equipo multilingüe está listo para ayudar.",
    "contactAddress": "123 Avenida Bienestar, Toronto, ON M5V 1A1",
    "formName": "Su Nombre",
    "formNamePlaceholder": "María García",
    "formEmail": "Correo Electrónico",
    "formEmailPlaceholder": "maria@ejemplo.com",
    "formMessage": "Mensaje",
    "formMessagePlaceholder": "¿Cómo podemos ayudarle?",
    "formSubmit": "Enviar Mensaje",
    "formNote": "Respondemos dentro de un día hábil.",
    "footerText": "© 2026 CarePoint Salud. Todos los derechos reservados. Este sitio es solo informativo y no constituye consejo médico.",
    "footerDisclaimer": "Consulte siempre a un profesional de la salud calificado para decisiones médicas."
  },
  "fr": {
    "siteTitle": "CarePoint Santé",
    "navHome": "Accueil",
    "navAbout": "À propos",
    "navServices": "Services",
    "navContact": "Contact",
    "heroEyebrow": "Soins Pédiatriques de Confiance",
    "heroTitle": "Accompagner Chaque Enfant vers la Santé et l'Épanouissement",
    "heroSubtitle": "Des soins pédiatriques et d'urgence experts et bienveillants pour les enfants de tous âges — au cœur de votre communauté.",
    "ctaPrimary": "Prendre Rendez-vous",
    "ctaSecondary": "En Savoir Plus",
    "statPatients": "Patients Soignés",
    "statAvailable": "Toujours Disponible",
    "trustCPS": "Directives de la SCP",
    "trustSickKids": "Affilié à SickKids",
    "trustBoard": "Médecins Certifiés",
    "trustLang": "Personnel Multilingue",
    "aboutEyebrow": "Qui Sommes-Nous",
    "aboutTitle": "Une Équipe Dédiée à la Santé des Enfants",
    "aboutBody": "CarePoint Santé est une clinique pédiatrique communautaire dont le personnel comprend des médecins certifiés spécialisés en médecine d'urgence pédiatrique. Nous croyons que chaque enfant mérite des soins rapides, fondés sur des données probantes, prodigués avec chaleur et respect — quelle que soit sa langue ou son origine.",
    "aboutYears": "Années de Soins",
    "aboutPoint1": "Protocoles de traitement fondés sur des données probantes",
    "aboutPoint2": "Services d'interprétation en 14 langues",
    "aboutPoint3": "Approche centrée sur la famille",
    "servicesEyebrow": "Ce Que Nous Offrons",
    "servicesTitle": "Services Pédiatriques Complets",
    "servicesSubtitle": "Des visites de routine aux urgences, nous prenons soin de votre enfant.",
    "serviceOneTitle": "Visites de Santé",
    "serviceOneBody": "Bilans réguliers, dépistage du développement et vaccinations pour accompagner votre enfant à chaque étape de sa croissance.",
    "serviceTwoTitle": "Urgences Pédiatriques",
    "serviceTwoBody": "Accès 24h/24 à des médecins urgentistes pédiatriques pour la fièvre, les blessures, les difficultés respiratoires et autres urgences.",
    "serviceThreeTitle": "Conseils sur les Médicaments",
    "serviceThreeBody": "Dosages adaptés au poids, soutien pour les ordonnances et instructions claires pour le Tylenol, l'Advil et autres médicaments courants.",
    "serviceLearnMore": "En savoir plus →",
    "contactEyebrow": "Nous Contacter",
    "contactTitle": "Nous Sommes Là Quand Vous en Avez Besoin",
    "contactBody": "Une question sur la santé de votre enfant ? Besoin d'un rendez-vous ou d'une infirmière ? Contactez-nous — notre équipe multilingue est prête à vous aider.",
    "contactAddress": "123, avenue Bien-Être, Toronto, ON M5V 1A1",
    "formName": "Votre Nom",
    "formNamePlaceholder": "Marie Dupont",
    "formEmail": "Adresse Email",
    "formEmailPlaceholder": "marie@exemple.com",
    "formMessage": "Message",
    "formMessagePlaceholder": "Comment pouvons-nous vous aider ?",
    "formSubmit": "Envoyer le Message",
    "formNote": "Nous répondons dans un délai d'un jour ouvrable.",
    "footerText": "© 2026 CarePoint Santé. Tous droits réservés. Ce site est uniquement informatif et ne constitue pas un avis médical.",
    "footerDisclaimer": "Consultez toujours un professionnel de santé qualifié pour toute décision médicale."
  },
  "pl": {
    "siteTitle": "CarePoint Zdrowie",
    "navHome": "Strona Główna",
    "navAbout": "O Nas",
    "navServices": "Usługi",
    "navContact": "Kontakt",
    "heroEyebrow": "Zaufana Opieka Pediatryczna",
    "heroTitle": "Wspieramy Zdrowie Dzieci na Każdym Etapie Życia",
    "heroSubtitle": "Profesjonalna i empatyczna opieka pediatryczna i ratunkowa dla dzieci w każdym wieku — w Twojej społeczności.",
    "ctaPrimary": "Umów Wizytę",
    "ctaSecondary": "Dowiedz się Więcej",
    "statPatients": "Pacjentów pod Opieką",
    "statAvailable": "Zawsze Dostępni",
    "trustCPS": "Wytyczne PTD",
    "trustSickKids": "Afiliacja SickKids",
    "trustBoard": "Certyfikowani Lekarze",
    "trustLang": "Wielojęzyczny Personel",
    "aboutEyebrow": "Kim Jesteśmy",
    "aboutTitle": "Zespół Oddany Zdrowiu Dzieci",
    "aboutBody": "CarePoint Zdrowie to przychodnia pediatryczna działająca na rzecz społeczności, prowadzona przez certyfikowanych lekarzy ze specjalizacją w pediatrycznej medycynie ratunkowej. Wierzymy, że każde dziecko zasługuje na szybką, opartą na dowodach opiekę świadczoną z ciepłem i szacunkiem — bez względu na język, pochodzenie czy możliwości finansowe.",
    "aboutYears": "Lat Opieki",
    "aboutPoint1": "Protokoły leczenia oparte na dowodach naukowych",
    "aboutPoint2": "Usługi tłumaczeniowe w 14 językach",
    "aboutPoint3": "Podejście skoncentrowane na rodzinie",
    "servicesEyebrow": "Co Oferujemy",
    "servicesTitle": "Kompleksowe Usługi Pediatryczne",
    "servicesSubtitle": "Od rutynowych wizyt kontrolnych po pilne interwencje ratunkowe — Twoje dziecko jest w dobrych rękach.",
    "serviceOneTitle": "Wizyty Kontrolne",
    "serviceOneBody": "Regularne badania, ocena rozwoju i szczepienia, aby Twoje dziecko rozwijało się prawidłowo na każdym etapie.",
    "serviceTwoTitle": "Pediatryczna Pomoc Ratunkowa",
    "serviceTwoBody": "Całodobowy dostęp do pediatrycznych lekarzy ratunkowych — gorączka, urazy, trudności z oddychaniem i inne nagłe przypadki.",
    "serviceThreeTitle": "Doradztwo w zakresie Leków",
    "serviceThreeBody": "Dawkowanie dostosowane do masy ciała, wsparcie receptowe oraz jasne instrukcje dotyczące Tylenolu, Advilu i innych popularnych leków.",
    "serviceLearnMore": "Dowiedz się więcej →",
    "contactEyebrow": "Skontaktuj się z Nami",
    "contactTitle": "Jesteśmy Tu, Gdy Nas Potrzebujesz",
    "contactBody": "Masz pytanie dotyczące zdrowia dziecka? Chcesz umówić wizytę lub porozmawiać z pielęgniarką? Napisz do nas — nasz wielojęzyczny zespół jest gotowy pomóc.",
    "contactAddress": "ul. Dobrego Zdrowia 123, Toronto, ON M5V 1A1",
    "formName": "Twoje Imię i Nazwisko",
    "formNamePlaceholder": "Anna Kowalska",
    "formEmail": "Adres Email",
    "formEmailPlaceholder": "anna@przyklad.pl",
    "formMessage": "Wiadomość",
    "formMessagePlaceholder": "Jak możemy Ci pomóc?",
    "formSubmit": "Wyślij Wiadomość",
    "formNote": "Odpowiadamy w ciągu jednego dnia roboczego.",
    "footerText": "© 2026 CarePoint Zdrowie. Wszelkie prawa zastrzeżone. Ta strona służy wyłącznie celom informacyjnym i nie stanowi porady medycznej.",
    "footerDisclaimer": "Zawsze konsultuj decyzje medyczne z wykwalifikowanym specjalistą ochrony zdrowia."
  },
  "vi": {
    "siteTitle": "CarePoint Sức Khỏe",
    "navHome": "Trang Chủ",
    "navAbout": "Về Chúng Tôi",
    "navServices": "Dịch Vụ",
    "navContact": "Liên Hệ",
    "heroEyebrow": "Chăm Sóc Nhi Khoa Đáng Tin Cậy",
    "heroTitle": "Đồng Hành Cùng Sự Phát Triển của Trẻ Em ở Mọi Giai Đoạn",
    "heroSubtitle": "Dịch vụ chăm sóc nhi khoa và cấp cứu chuyên nghiệp, tận tâm cho trẻ em mọi lứa tuổi — ngay trong cộng đồng của bạn.",
    "ctaPrimary": "Đặt Lịch Hẹn",
    "ctaSecondary": "Tìm Hiểu Thêm",
    "statPatients": "Bệnh Nhân Được Phục Vụ",
    "statAvailable": "Luôn Sẵn Sàng",
    "trustCPS": "Tiêu Chuẩn CPS",
    "trustSickKids": "Liên Kết SickKids",
    "trustBoard": "Bác Sĩ Được Chứng Nhận",
    "trustLang": "Nhân Viên Đa Ngôn Ngữ",
    "aboutEyebrow": "Chúng Tôi Là Ai",
    "aboutTitle": "Đội Ngũ Tận Tâm Vì Sức Khỏe Trẻ Em",
    "aboutBody": "CarePoint Sức Khỏe là phòng khám nhi khoa cộng đồng với đội ngũ bác sĩ được chứng nhận, có chuyên môn về Y tế Cấp cứu Nhi khoa. Chúng tôi tin rằng mọi trẻ em đều xứng đáng được chăm sóc kịp thời, dựa trên bằng chứng khoa học, với sự ấm áp và tôn trọng — bất kể ngôn ngữ hay hoàn cảnh.",
    "aboutYears": "Năm Phục Vụ",
    "aboutPoint1": "Quy trình điều trị dựa trên bằng chứng khoa học",
    "aboutPoint2": "Dịch vụ phiên dịch bằng 14 ngôn ngữ",
    "aboutPoint3": "Phương pháp tiếp cận lấy gia đình làm trung tâm",
    "servicesEyebrow": "Dịch Vụ Của Chúng Tôi",
    "servicesTitle": "Dịch Vụ Nhi Khoa Toàn Diện",
    "servicesSubtitle": "Từ khám sức khỏe định kỳ đến cấp cứu khẩn cấp — chúng tôi luôn sẵn sàng chăm sóc con bạn.",
    "serviceOneTitle": "Khám Sức Khỏe Định Kỳ",
    "serviceOneBody": "Kiểm tra sức khỏe thường xuyên, đánh giá phát triển và tiêm chủng để con bạn phát triển toàn diện ở mọi giai đoạn.",
    "serviceTwoTitle": "Cấp Cứu Nhi Khoa",
    "serviceTwoBody": "Tiếp cận bác sĩ cấp cứu nhi 24/7 cho các trường hợp sốt, chấn thương, khó thở và các tình huống khẩn cấp khác.",
    "serviceThreeTitle": "Hướng Dẫn Sử Dụng Thuốc",
    "serviceThreeBody": "Tư vấn liều lượng theo cân nặng, hỗ trợ kê đơn và hướng dẫn rõ ràng về Tylenol, Advil và các thuốc thông thường khác.",
    "serviceLearnMore": "Tìm hiểu thêm →",
    "contactEyebrow": "Liên Hệ",
    "contactTitle": "Chúng Tôi Luôn Sẵn Sàng Khi Bạn Cần",
    "contactBody": "Có câu hỏi về sức khỏe của con bạn? Cần đặt lịch hẹn hoặc trao đổi với y tá? Hãy liên hệ với chúng tôi — đội ngũ đa ngôn ngữ của chúng tôi luôn sẵn sàng hỗ trợ.",
    "contactAddress": "123 Đại lộ Sức Khỏe, Toronto, ON M5V 1A1",
    "formName": "Họ và Tên",
    "formNamePlaceholder": "Nguyễn Thị Lan",
    "formEmail": "Địa Chỉ Email",
    "formEmailPlaceholder": "lan@vidu.com",
    "formMessage": "Tin Nhắn",
    "formMessagePlaceholder": "Chúng tôi có thể giúp gì cho bạn?",
    "formSubmit": "Gửi Tin Nhắn",
    "formNote": "Chúng tôi phản hồi trong vòng một ngày làm việc.",
    "footerText": "© 2026 CarePoint Sức Khỏe. Bảo lưu mọi quyền. Trang web này chỉ mang tính thông tin và không phải là lời khuyên y tế.",
    "footerDisclaimer": "Luôn tham khảo ý kiến chuyên gia y tế có trình độ trước khi đưa ra quyết định y tế."
  },
  "ko": {
    "siteTitle": "케어포인트 건강",
    "navHome": "홈",
    "navAbout": "소개",
    "navServices": "서비스",
    "navContact": "연락처",
    "heroEyebrow": "신뢰할 수 있는 소아과 진료",
    "heroTitle": "아이의 건강한 성장, 매 순간 함께합니다",
    "heroSubtitle": "모든 연령의 어린이를 위한 전문적이고 따뜻한 소아과 및 응급 진료 — 우리 지역 사회에서.",
    "ctaPrimary": "예약하기",
    "ctaSecondary": "더 알아보기",
    "statPatients": "진료 환자 수",
    "statAvailable": "언제나 이용 가능",
    "trustCPS": "CPS 가이드라인",
    "trustSickKids": "SickKids 제휴",
    "trustBoard": "전문의 자격증 보유",
    "trustLang": "다국어 직원",
    "aboutEyebrow": "우리 소개",
    "aboutTitle": "어린이 건강을 위해 헌신하는 팀",
    "aboutBody": "케어포인트 건강은 소아 응급 의학 전문 교육을 받은 전문의들로 구성된 지역 사회 소아과 클리닉입니다. 언어, 배경, 재정적 능력에 관계없이 모든 아이가 따뜻하고 존중받는 근거 중심 진료를 받을 자격이 있다고 믿습니다.",
    "aboutYears": "진료 연수",
    "aboutPoint1": "근거 중심 치료 프로토콜",
    "aboutPoint2": "14개 언어 통역 서비스",
    "aboutPoint3": "가족 중심 진료 방식",
    "servicesEyebrow": "제공 서비스",
    "servicesTitle": "종합 소아과 서비스",
    "servicesSubtitle": "정기 검진부터 긴급 응급 처치까지, 아이의 건강을 책임집니다.",
    "serviceOneTitle": "정기 건강 검진",
    "serviceOneBody": "성장 단계별 정기 검진, 발달 검사 및 예방접종으로 아이의 건강한 발달을 지원합니다.",
    "serviceTwoTitle": "소아 응급 진료",
    "serviceTwoBody": "열, 부상, 호흡 곤란 등 긴급 상황에 대비한 24시간 소아 응급 전문의 서비스를 제공합니다.",
    "serviceThreeTitle": "약물 복용 안내",
    "serviceThreeBody": "체중 기반 용량 조언, 처방 지원, 타이레놀, 애드빌 및 기타 일반 의약품에 대한 명확한 복용 지침을 제공합니다.",
    "serviceLearnMore": "더 알아보기 →",
    "contactEyebrow": "문의하기",
    "contactTitle": "필요할 때 언제든지 연락하세요",
    "contactBody": "자녀의 건강에 관한 질문이 있으신가요? 예약이나 간호사 상담이 필요하신가요? 문의해 주세요 — 다국어 팀이 도움을 드릴 준비가 되어 있습니다.",
    "contactAddress": "123 웰니스 대로, 토론토, ON M5V 1A1",
    "formName": "성함",
    "formNamePlaceholder": "홍길동",
    "formEmail": "이메일 주소",
    "formEmailPlaceholder": "hong@example.com",
    "formMessage": "메시지",
    "formMessagePlaceholder": "어떻게 도와드릴까요?",
    "formSubmit": "메시지 보내기",
    "formNote": "영업일 기준 하루 이내에 답변 드립니다.",
    "footerText": "© 2026 케어포인트 건강. 모든 권리 보유. 이 사이트는 정보 제공 목적으로만 제공되며 의학적 조언을 구성하지 않습니다.",
    "footerDisclaimer": "의학적 결정을 위해서는 반드시 자격을 갖춘 의료 전문가와 상담하세요."
  },
  "it": {
    "siteTitle": "CarePoint Salute",
    "navHome": "Home",
    "navAbout": "Chi Siamo",
    "navServices": "Servizi",
    "navContact": "Contatti",
    "heroEyebrow": "Cure Pediatriche di Fiducia",
    "heroTitle": "Accompagnare i Bambini verso il Benessere, Passo dopo Passo",
    "heroSubtitle": "Cure pediatriche e d'emergenza esperte e compassionevoli per bambini di tutte le età — nella tua comunità.",
    "ctaPrimary": "Prenota una Visita",
    "ctaSecondary": "Scopri di Più",
    "statPatients": "Pazienti Assistiti",
    "statAvailable": "Sempre Disponibili",
    "trustCPS": "Linee Guida CPS",
    "trustSickKids": "Affiliato a SickKids",
    "trustBoard": "Medici Certificati",
    "trustLang": "Personale Multilingue",
    "aboutEyebrow": "Chi Siamo",
    "aboutTitle": "Un Team Dedicato alla Salute dei Bambini",
    "aboutBody": "CarePoint Salute è una clinica pediatrica di comunità guidata da medici certificati con formazione specialistica in Medicina d'Emergenza Pediatrica. Crediamo che ogni bambino meriti cure tempestive e basate sull'evidenza, offerte con calore e rispetto — indipendentemente dalla lingua, dall'origine o dalla capacità economica.",
    "aboutYears": "Anni di Cura",
    "aboutPoint1": "Protocolli di trattamento basati sull'evidenza",
    "aboutPoint2": "Servizi di interpretariato in 14 lingue",
    "aboutPoint3": "Approccio centrato sulla famiglia",
    "servicesEyebrow": "Cosa Offriamo",
    "servicesTitle": "Servizi Pediatrici Completi",
    "servicesSubtitle": "Dalle visite di routine alle emergenze urgenti, siamo al fianco del tuo bambino.",
    "serviceOneTitle": "Visite di Controllo",
    "serviceOneBody": "Check-up regolari, screening dello sviluppo e vaccinazioni per tenere il tuo bambino sulla buona strada ad ogni fase della crescita.",
    "serviceTwoTitle": "Pronto Soccorso Pediatrico",
    "serviceTwoBody": "Accesso 24 ore su 24 a medici di emergenza pediatrica per febbre, traumi, difficoltà respiratorie e altre urgenze.",
    "serviceThreeTitle": "Consulenza sui Farmaci",
    "serviceThreeBody": "Dosaggi adattati al peso, supporto per le prescrizioni e istruzioni chiare per Tachipirina, Nurofen e altri farmaci comuni.",
    "serviceLearnMore": "Scopri di più →",
    "contactEyebrow": "Contattaci",
    "contactTitle": "Siamo Qui Quando Hai Bisogno di Noi",
    "contactBody": "Hai domande sulla salute di tuo figlio? Hai bisogno di prenotare una visita o parlare con un infermiere? Scrivici — il nostro team multilingue è pronto ad aiutarti.",
    "contactAddress": "Via del Benessere 123, Toronto, ON M5V 1A1",
    "formName": "Il Tuo Nome",
    "formNamePlaceholder": "Maria Rossi",
    "formEmail": "Indirizzo Email",
    "formEmailPlaceholder": "maria@esempio.it",
    "formMessage": "Messaggio",
    "formMessagePlaceholder": "Come possiamo aiutarti?",
    "formSubmit": "Invia il Messaggio",
    "formNote": "Rispondiamo entro un giorno lavorativo.",
    "footerText": "© 2026 CarePoint Salute. Tutti i diritti riservati. Questo sito è esclusivamente informativo e non costituisce un consiglio medico.",
    "footerDisclaimer": "Consulta sempre un professionista sanitario qualificato per le decisioni mediche."
  },
  "fa": {
    "siteTitle": "کرپوینت سلامت",
    "navHome": "خانه",
    "navAbout": "درباره ما",
    "navServices": "خدمات",
    "navContact": "تماس",
    "heroEyebrow": "مراقبت اطفال مورد اعتماد",
    "heroTitle": "همراه کودکان در هر قدم از مسیر سلامت",
    "heroSubtitle": "مراقبت‌های اطفال و اورژانس تخصصی و دلسوزانه برای کودکان در تمام سنین — در جامعه شما.",
    "ctaPrimary": "رزرو نوبت",
    "ctaSecondary": "بیشتر بدانید",
    "statPatients": "بیمار تحت مراقبت",
    "statAvailable": "همیشه در دسترس",
    "trustCPS": "دستورالعمل‌های CPS",
    "trustSickKids": "وابسته به SickKids",
    "trustBoard": "پزشکان دارای گواهینامه",
    "trustLang": "کارکنان چندزبانه",
    "aboutEyebrow": "ما کی هستیم",
    "aboutTitle": "تیمی متعهد به سلامت کودکان",
    "aboutBody": "کرپوینت سلامت یک کلینیک اطفال اجتماعی است که توسط پزشکان دارای گواهینامه با آموزش تخصصی در طب اورژانس اطفال اداره می‌شود. ما بر این باوریم که هر کودکی شایسته مراقبت به‌موقع و مبتنی بر شواهد، همراه با گرمی و احترام است — صرف‌نظر از زبان، پیشینه یا توانایی مالی.",
    "aboutYears": "سال خدمت",
    "aboutPoint1": "پروتکل‌های درمانی مبتنی بر شواهد",
    "aboutPoint2": "خدمات ترجمه در ۱۴ زبان",
    "aboutPoint3": "رویکرد خانواده‌محور در مراقبت",
    "servicesEyebrow": "خدمات ما",
    "servicesTitle": "خدمات جامع اطفال",
    "servicesSubtitle": "از ویزیت‌های معمول تا مراقبت‌های اضطراری فوری — کودک شما در دستان امن ماست.",
    "serviceOneTitle": "ویزیت‌های کنترل سلامت",
    "serviceOneBody": "معاینات منظم، غربالگری رشد و واکسیناسیون برای اطمینان از سلامت کودک شما در هر مرحله از رشد.",
    "serviceTwoTitle": "اورژانس اطفال",
    "serviceTwoBody": "دسترسی ۲۴ ساعته به پزشکان اورژانس اطفال برای تب، صدمات، مشکلات تنفسی و سایر موارد اضطراری.",
    "serviceThreeTitle": "راهنمایی دارویی",
    "serviceThreeBody": "مشاوره دوز بر اساس وزن، پشتیبانی نسخه و دستورالعمل‌های واضح برای تایلنول، ادویل و سایر داروهای رایج.",
    "serviceLearnMore": "بیشتر بدانید ←",
    "contactEyebrow": "تماس با ما",
    "contactTitle": "هر زمان که نیاز داشتید، اینجاییم",
    "contactBody": "سوالی درباره سلامت کودکتان دارید؟ نیاز به رزرو نوبت یا صحبت با پرستار دارید؟ با ما تماس بگیرید — تیم چندزبانه ما آماده کمک است.",
    "contactAddress": "خیابان بهداشت ۱۲۳، تورنتو، ON M5V 1A1",
    "formName": "نام شما",
    "formNamePlaceholder": "فاطمه احمدی",
    "formEmail": "آدرس ایمیل",
    "formEmailPlaceholder": "fateme@example.com",
    "formMessage": "پیام",
    "formMessagePlaceholder": "چطور می‌توانیم کمک کنیم؟",
    "formSubmit": "ارسال پیام",
    "formNote": "ظرف یک روز کاری پاسخ می‌دهیم.",
    "footerText": "© ۲۰۲۶ کرپوینت سلامت. تمامی حقوق محفوظ است. این سایت صرفاً برای اطلاع‌رسانی است و مشاوره پزشکی نیست.",
    "footerDisclaimer": "برای تصمیمات پزشکی همیشه با یک متخصص بهداشت واجد شرایط مشورت کنید."
  },
  "ar": {
    "siteTitle": "كيربوينت للصحة",
    "navHome": "الرئيسية",
    "navAbout": "من نحن",
    "navServices": "الخدمات",
    "navContact": "تواصل معنا",
    "heroEyebrow": "رعاية طب الأطفال الموثوقة",
    "heroTitle": "نساند نمو أطفالكم في كل خطوة",
    "heroSubtitle": "رعاية طبية متخصصة وحانية لأطفال جميع الأعمار — في قلب مجتمعكم.",
    "ctaPrimary": "احجز موعداً",
    "ctaSecondary": "اعرف أكثر",
    "statPatients": "مريض تحت الرعاية",
    "statAvailable": "متاحون دائماً",
    "trustCPS": "إرشادات CPS",
    "trustSickKids": "شريك SickKids",
    "trustBoard": "أطباء معتمدون",
    "trustLang": "طاقم متعدد اللغات",
    "aboutEyebrow": "من نحن",
    "aboutTitle": "فريق مكرّس لصحة الأطفال",
    "aboutBody": "كيربوينت للصحة عيادة طب أطفال مجتمعية يديرها أطباء معتمدون متخصصون في طب الطوارئ للأطفال. نؤمن بأن كل طفل يستحق رعاية طبية في الوقت المناسب، مبنية على الأدلة العلمية، وتُقدَّم بدفء واحترام — بغض النظر عن اللغة أو الخلفية أو الإمكانات المادية.",
    "aboutYears": "سنوات من الرعاية",
    "aboutPoint1": "بروتوكولات علاجية مبنية على الأدلة",
    "aboutPoint2": "خدمات ترجمة بـ14 لغة",
    "aboutPoint3": "نهج متمحور حول الأسرة",
    "servicesEyebrow": "ما نقدمه",
    "servicesTitle": "خدمات طب الأطفال الشاملة",
    "servicesSubtitle": "من الزيارات الدورية إلى العناية الطارئة — طفلكم في أيدٍ أمينة.",
    "serviceOneTitle": "زيارات الطفل السليم",
    "serviceOneBody": "فحوصات منتظمة وفحص النمو والتطعيمات للحفاظ على صحة طفلكم في كل مرحلة من مراحل نموه.",
    "serviceTwoTitle": "طوارئ الأطفال",
    "serviceTwoBody": "خدمة أطباء طوارئ الأطفال على مدار الساعة للحمى والإصابات وصعوبات التنفس وغيرها من الحالات العاجلة.",
    "serviceThreeTitle": "إرشادات الدواء",
    "serviceThreeBody": "نصائح الجرعات بحسب الوزن، ودعم الوصفات الطبية، وتعليمات واضحة لتايلينول وأدفيل وغيرها من الأدوية الشائعة.",
    "serviceLearnMore": "اعرف أكثر ←",
    "contactEyebrow": "تواصل معنا",
    "contactTitle": "نحن هنا حين تحتاجوننا",
    "contactBody": "لديكم سؤال عن صحة طفلكم؟ تريدون حجز موعد أو التحدث مع ممرضة؟ تواصلوا معنا — فريقنا متعدد اللغات مستعد للمساعدة.",
    "contactAddress": "123 شارع العافية، تورنتو، ON M5V 1A1",
    "formName": "اسمك",
    "formNamePlaceholder": "فاطمة الأحمد",
    "formEmail": "البريد الإلكتروني",
    "formEmailPlaceholder": "fatima@example.com",
    "formMessage": "الرسالة",
    "formMessagePlaceholder": "كيف يمكننا مساعدتك؟",
    "formSubmit": "إرسال الرسالة",
    "formNote": "نرد خلال يوم عمل واحد.",
    "footerText": "© 2026 كيربوينت للصحة. جميع الحقوق محفوظة. هذا الموقع للأغراض المعلوماتية فقط ولا يُعدّ نصيحة طبية.",
    "footerDisclaimer": "استشر دائماً مختصاً في الرعاية الصحية لاتخاذ القرارات الطبية."
  },
  "zh-Hant": {
    "siteTitle": "CarePoint 健康",
    "navHome": "首頁",
    "navAbout": "關於我們",
    "navServices": "服務",
    "navContact": "聯絡我們",
    "heroEyebrow": "值得信賴的兒科護理",
    "heroTitle": "陪伴孩子健康成長，每一步都是我們的承諾",
    "heroSubtitle": "為各年齡段兒童提供專業、充滿愛心的兒科及緊急護理服務——就在您的社區。",
    "ctaPrimary": "預約門診",
    "ctaSecondary": "了解更多",
    "statPatients": "服務患者人數",
    "statAvailable": "全天候服務",
    "trustCPS": "CPS 指引",
    "trustSickKids": "SickKids 聯盟",
    "trustBoard": "認證醫師",
    "trustLang": "多語言員工",
    "aboutEyebrow": "關於我們",
    "aboutTitle": "專注於兒童健康的團隊",
    "aboutBody": "CarePoint 健康是一間社區兒科診所，由具備兒科急症醫學專科培訓的認證醫師駐診。我們相信每個孩子都應獲得及時、以實證為基礎的醫療，並以溫暖和尊重的態度提供服務——無論語言、背景或支付能力。",
    "aboutYears": "年護理經驗",
    "aboutPoint1": "以實證為基礎的治療方案",
    "aboutPoint2": "提供 14 種語言的口譯服務",
    "aboutPoint3": "以家庭為中心的護理方式",
    "servicesEyebrow": "我們的服務",
    "servicesTitle": "全面兒科服務",
    "servicesSubtitle": "從定期健康檢查到緊急急症護理，我們為您的孩子提供全方位保障。",
    "serviceOneTitle": "兒童健康檢查",
    "serviceOneBody": "定期體檢、發育評估及疫苗接種，確保您的孩子在每個成長階段都健康發展。",
    "serviceTwoTitle": "兒科急症服務",
    "serviceTwoBody": "全天候兒科急症醫師服務，處理發燒、受傷、呼吸困難及其他緊急情況。",
    "serviceThreeTitle": "藥物用量指導",
    "serviceThreeBody": "根據體重計算劑量、處方支援，以及泰諾、雅維等常用藥物的清晰用藥指示。",
    "serviceLearnMore": "了解更多 →",
    "contactEyebrow": "聯絡我們",
    "contactTitle": "需要幫助時，我們隨時在您身邊",
    "contactBody": "對孩子的健康有疑問？需要預約門診或與護士交流？請聯絡我們——我們的多語言團隊隨時準備為您提供幫助。",
    "contactAddress": "123 健康大道，多倫多，ON M5V 1A1",
    "formName": "您的姓名",
    "formNamePlaceholder": "陳大文",
    "formEmail": "電郵地址",
    "formEmailPlaceholder": "chan@example.com",
    "formMessage": "信息",
    "formMessagePlaceholder": "我們能為您提供什麼幫助？",
    "formSubmit": "發送信息",
    "formNote": "我們將在一個工作天內回覆。",
    "footerText": "© 2026 CarePoint 健康。版權所有。本網站僅供參考，不構成醫療建議。",
    "footerDisclaimer": "作出醫療決定前，請務必諮詢具備資格的醫療專業人員。"
  },
  "zh-Hans": {
    "siteTitle": "CarePoint 健康",
    "navHome": "首页",
    "navAbout": "关于我们",
    "navServices": "服务",
    "navContact": "联系我们",
    "heroEyebrow": "值得信赖的儿科护理",
    "heroTitle": "陪伴孩子健康成长，每一步都在您身边",
    "heroSubtitle": "为各年龄段儿童提供专业、充满爱心的儿科及急诊服务——就在您的社区。",
    "ctaPrimary": "预约就诊",
    "ctaSecondary": "了解更多",
    "statPatients": "服务患者人数",
    "statAvailable": "全天候服务",
    "trustCPS": "CPS 指南",
    "trustSickKids": "SickKids 联盟",
    "trustBoard": "认证医师",
    "trustLang": "多语言员工",
    "aboutEyebrow": "关于我们",
    "aboutTitle": "专注于儿童健康的专业团队",
    "aboutBody": "CarePoint 健康是一家社区儿科诊所，由具备儿科急诊医学专科培训的认证医师坐诊。我们相信每个孩子都应获得及时、以循证医学为基础的医疗服务，并以温暖和尊重的态度提供——无论语言、背景或支付能力如何。",
    "aboutYears": "年护理经验",
    "aboutPoint1": "以循证医学为基础的治疗方案",
    "aboutPoint2": "提供 14 种语言的口译服务",
    "aboutPoint3": "以家庭为中心的护理方式",
    "servicesEyebrow": "我们的服务",
    "servicesTitle": "全面儿科医疗服务",
    "servicesSubtitle": "从定期健康检查到紧急急诊护理，我们为您的孩子提供全方位保障。",
    "serviceOneTitle": "儿童健康检查",
    "serviceOneBody": "定期体检、发育评估及疫苗接种，确保您的孩子在每个成长阶段都健康发展。",
    "serviceTwoTitle": "儿科急诊服务",
    "serviceTwoBody": "全天候儿科急诊医师服务，处理发烧、受伤、呼吸困难及其他紧急情况。",
    "serviceThreeTitle": "药物用量指导",
    "serviceThreeBody": "根据体重计算剂量、处方支持，以及泰诺、雅维等常用药物的清晰用药说明。",
    "serviceLearnMore": "了解更多 →",
    "contactEyebrow": "联系我们",
    "contactTitle": "需要帮助时，我们随时在您身边",
    "contactBody": "对孩子的健康有疑问？需要预约就诊或与护士沟通？请联系我们——我们的多语言团队随时为您提供帮助。",
    "contactAddress": "健康大道 123 号，多伦多，ON M5V 1A1",
    "formName": "您的姓名",
    "formNamePlaceholder": "王芳",
    "formEmail": "电子邮件地址",
    "formEmailPlaceholder": "wang@example.com",
    "formMessage": "留言",
    "formMessagePlaceholder": "我们能为您提供什么帮助？",
    "formSubmit": "发送消息",
    "formNote": "我们将在一个工作日内回复。",
    "footerText": "© 2026 CarePoint 健康。版权所有。本网站仅供参考，不构成医疗建议。",
    "footerDisclaimer": "作出医疗决定前，请务必咨询具备资质的医疗专业人员。"
  },
  "ta": {
    "siteTitle": "கேர்பாயிண்ட் சுகாதாரம்",
    "navHome": "முகப்பு",
    "navAbout": "எங்களைப் பற்றி",
    "navServices": "சேவைகள்",
    "navContact": "தொடர்பு",
    "heroEyebrow": "நம்பகமான குழந்தை மருத்துவ சேவை",
    "heroTitle": "ஒவ்வொரு அடியிலும் குழந்தைகளின் ஆரோக்கியத்திற்கு உதவுகிறோம்",
    "heroSubtitle": "அனைத்து வயதினருக்கும் நிபுணத்துவமான, அக்கறையான குழந்தை மருத்துவ மற்றும் அவசர சிகிச்சை சேவை — உங்கள் சமூகத்திலேயே.",
    "ctaPrimary": "சந்திப்பு பதிவு செய்யுங்கள்",
    "ctaSecondary": "மேலும் அறிக",
    "statPatients": "சேவை பெற்ற நோயாளிகள்",
    "statAvailable": "எப்போதும் கிடைக்கும்",
    "trustCPS": "CPS வழிகாட்டுதல்கள்",
    "trustSickKids": "SickKids இணைப்பு",
    "trustBoard": "சான்றளிக்கப்பட்ட மருத்துவர்கள்",
    "trustLang": "பல மொழி பேசும் ஊழியர்கள்",
    "aboutEyebrow": "நாங்கள் யார்",
    "aboutTitle": "குழந்தைகளின் ஆரோக்கியத்திற்கு அர்ப்பணிக்கப்பட்ட குழு",
    "aboutBody": "கேர்பாயிண்ட் சுகாதாரம் என்பது குழந்தை அவசர மருத்துவத்தில் சிறப்பு பயிற்சி பெற்ற சான்றளிக்கப்பட்ட மருத்துவர்களால் இயக்கப்படும் சமூக குழந்தை மருத்துவ கிளினிக். மொழி, பின்னணி அல்லது நிதி நிலை எதுவாக இருந்தாலும், ஒவ்வொரு குழந்தையும் சரியான நேரத்தில் ஆதாரம் அடிப்படையிலான சிகிச்சையை அன்போடும் மரியாதையோடும் பெற தகுதியுடையது என்று நாங்கள் நம்புகிறோம்.",
    "aboutYears": "ஆண்டுகள் சேவை",
    "aboutPoint1": "ஆதாரம் அடிப்படையிலான சிகிச்சை நெறிமுறைகள்",
    "aboutPoint2": "14 மொழிகளில் மொழிபெயர்ப்பு சேவைகள்",
    "aboutPoint3": "குடும்பம் மையமாக கொண்ட சிகிச்சை முறை",
    "servicesEyebrow": "நாங்கள் வழங்குவது",
    "servicesTitle": "விரிவான குழந்தை மருத்துவ சேவைகள்",
    "servicesSubtitle": "வழக்கமான ஆரோக்கிய பரிசோதனை முதல் அவசர சிகிச்சை வரை — உங்கள் குழந்தைக்கு நாங்கள் இருக்கிறோம்.",
    "serviceOneTitle": "குழந்தை ஆரோக்கிய பரிசோதனை",
    "serviceOneBody": "வழக்கமான பரிசோதனைகள், வளர்ச்சி மதிப்பீடு மற்றும் தடுப்பூசிகள் — உங்கள் குழந்தையின் வளர்ச்சியை சரியான பாதையில் வைக்க.",
    "serviceTwoTitle": "குழந்தை அவசர சிகிச்சை",
    "serviceTwoBody": "காய்ச்சல், காயங்கள், சுவாசச் சிரமம் மற்றும் பிற அவசர நிலைகளுக்கு 24/7 குழந்தை அவசர மருத்துவர் சேவை.",
    "serviceThreeTitle": "மருந்து வழிகாட்டல்",
    "serviceThreeBody": "எடை அடிப்படையிலான மருந்தளவு ஆலோசனை, மருந்துச் சீட்டு உதவி மற்றும் டைலெனால், அட்வில் மற்றும் பிற பொதுவான மருந்துகளுக்கான தெளிவான வழிமுறைகள்.",
    "serviceLearnMore": "மேலும் அறிக →",
    "contactEyebrow": "தொடர்பு கொள்ளுங்கள்",
    "contactTitle": "தேவைப்படும்போது நாங்கள் இங்கே இருக்கிறோம்",
    "contactBody": "உங்கள் குழந்தையின் ஆரோக்கியம் பற்றி கேள்வி உள்ளதா? சந்திப்பு பதிவு செய்ய அல்லது செவிலியரிடம் பேச வேண்டுமா? எங்களை தொடர்பு கொள்ளுங்கள் — எங்கள் பல மொழி பேசும் குழு உதவ தயாராக உள்ளது.",
    "contactAddress": "123 ஆரோக்கிய வீதி, டொரண்டோ, ON M5V 1A1",
    "formName": "உங்கள் பெயர்",
    "formNamePlaceholder": "லக்ஷ்மி பாலகிருஷ்ணன்",
    "formEmail": "மின்னஞ்சல் முகவரி",
    "formEmailPlaceholder": "lakshmi@example.com",
    "formMessage": "செய்தி",
    "formMessagePlaceholder": "நாங்கள் எவ்வாறு உதவலாம்?",
    "formSubmit": "செய்தி அனுப்புங்கள்",
    "formNote": "ஒரு வேலை நாளுக்குள் பதிலளிப்போம்.",
    "footerText": "© 2026 கேர்பாயிண்ட் சுகாதாரம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன. இந்த தளம் தகவல் நோக்கங்களுக்காக மட்டுமே, மருத்துவ ஆலோசனையை உருவாக்காது.",
    "footerDisclaimer": "மருத்துவ முடிவுகளுக்கு எப்போதும் தகுதியான சுகாதார நிபுணரை அணுகவும்."
  },
  "hi": {
    "siteTitle": "केयरपॉइंट स्वास्थ्य",
    "navHome": "होम",
    "navAbout": "हमारे बारे में",
    "navServices": "सेवाएं",
    "navContact": "संपर्क",
    "heroEyebrow": "विश्वसनीय बाल चिकित्सा देखभाल",
    "heroTitle": "हर कदम पर बच्चों के स्वस्थ विकास में साथी",
    "heroSubtitle": "हर उम्र के बच्चों के लिए विशेषज्ञ और सहानुभूतिपूर्ण बाल चिकित्सा और आपातकालीन देखभाल — आपके समुदाय में।",
    "ctaPrimary": "अपॉइंटमेंट बुक करें",
    "ctaSecondary": "और जानें",
    "statPatients": "सेवा प्रदान किए गए रोगी",
    "statAvailable": "हमेशा उपलब्ध",
    "trustCPS": "CPS दिशानिर्देश",
    "trustSickKids": "SickKids संबद्ध",
    "trustBoard": "बोर्ड-प्रमाणित चिकित्सक",
    "trustLang": "बहुभाषी स्टाफ",
    "aboutEyebrow": "हम कौन हैं",
    "aboutTitle": "बच्चों के स्वास्थ्य के लिए समर्पित टीम",
    "aboutBody": "केयरपॉइंट स्वास्थ्य एक सामुदायिक बाल चिकित्सा क्लिनिक है जिसमें बाल आपातकालीन चिकित्सा में विशेष प्रशिक्षण प्राप्त बोर्ड-प्रमाणित चिकित्सक हैं। हम मानते हैं कि हर बच्चे को समय पर, साक्ष्य-आधारित देखभाल मिलनी चाहिए — भाषा, पृष्ठभूमि या भुगतान क्षमता की परवाह किए बिना।",
    "aboutYears": "वर्षों की देखभाल",
    "aboutPoint1": "साक्ष्य-आधारित उपचार प्रोटोकॉल",
    "aboutPoint2": "14 भाषाओं में दुभाषिया सेवाएं",
    "aboutPoint3": "परिवार-केंद्रित देखभाल दृष्टिकोण",
    "servicesEyebrow": "हम क्या प्रदान करते हैं",
    "servicesTitle": "व्यापक बाल चिकित्सा सेवाएं",
    "servicesSubtitle": "नियमित स्वास्थ्य जांच से लेकर आपातकालीन देखभाल तक — आपके बच्चे की जिम्मेदारी हमारी है।",
    "serviceOneTitle": "बच्चे की स्वास्थ्य जांच",
    "serviceOneBody": "नियमित जांच, विकास स्क्रीनिंग और टीकाकरण — विकास के हर चरण में आपके बच्चे को स्वस्थ रखने के लिए।",
    "serviceTwoTitle": "बाल आपातकालीन देखभाल",
    "serviceTwoBody": "बुखार, चोट, सांस लेने में कठिनाई और अन्य आपातकालीन स्थितियों के लिए 24/7 बाल आपातकालीन चिकित्सकों तक पहुंच।",
    "serviceThreeTitle": "दवा मार्गदर्शन",
    "serviceThreeBody": "वजन-आधारित खुराक सलाह, पर्चे की सहायता, और टाइलेनॉल, एडविल एवं अन्य सामान्य दवाओं के लिए स्पष्ट निर्देश।",
    "serviceLearnMore": "और जानें →",
    "contactEyebrow": "हमसे संपर्क करें",
    "contactTitle": "जब भी जरूरत हो, हम यहां हैं",
    "contactBody": "आपके बच्चे के स्वास्थ्य के बारे में कोई सवाल है? अपॉइंटमेंट बुक करना चाहते हैं या नर्स से बात करनी है? हमसे संपर्क करें — हमारी बहुभाषी टीम मदद के लिए तैयार है।",
    "contactAddress": "123 वेलनेस एवेन्यू, टोरंटो, ON M5V 1A1",
    "formName": "आपका नाम",
    "formNamePlaceholder": "रीता शर्मा",
    "formEmail": "ईमेल पता",
    "formEmailPlaceholder": "rita@example.com",
    "formMessage": "संदेश",
    "formMessagePlaceholder": "हम आपकी कैसे सहायता कर सकते हैं?",
    "formSubmit": "संदेश भेजें",
    "formNote": "हम एक कार्यदिवस के भीतर उत्तर देते हैं।",
    "footerText": "© 2026 केयरपॉइंट स्वास्थ्य। सर्वाधिकार सुरक्षित। यह साइट केवल सूचनात्मक उद्देश्यों के लिए है और चिकित्सा सलाह नहीं है।",
    "footerDisclaimer": "चिकित्सा संबंधी निर्णयों के लिए हमेशा किसी योग्य स्वास्थ्य देखभाल पेशेवर से परामर्श लें।"
  },
  "ur": {
    "siteTitle": "کیئرپوائنٹ صحت",
    "navHome": "ہوم",
    "navAbout": "ہمارے بارے میں",
    "navServices": "خدمات",
    "navContact": "رابطہ",
    "heroEyebrow": "قابل اعتماد بچوں کی طبی دیکھ بھال",
    "heroTitle": "ہر قدم پر بچوں کی صحت اور نشو و نما میں معاون",
    "heroSubtitle": "ہر عمر کے بچوں کے لیے ماہرانہ اور ہمدردانہ بچوں کی طب اور ایمرجنسی سروس — آپ کی کمیونٹی میں۔",
    "ctaPrimary": "اپوائنٹمنٹ بک کریں",
    "ctaSecondary": "مزید جانیں",
    "statPatients": "علاج کیے گئے مریض",
    "statAvailable": "ہمیشہ دستیاب",
    "trustCPS": "CPS رہنمائی",
    "trustSickKids": "SickKids سے وابستہ",
    "trustBoard": "سند یافتہ ڈاکٹر",
    "trustLang": "کثیر لسانی عملہ",
    "aboutEyebrow": "ہم کون ہیں",
    "aboutTitle": "بچوں کی صحت کے لیے سرشار ٹیم",
    "aboutBody": "کیئرپوائنٹ صحت ایک کمیونٹی بنیادی بچوں کی طب کلینک ہے جس میں بچوں کی ایمرجنسی طب میں خصوصی تربیت یافتہ سند یافتہ ڈاکٹر موجود ہیں۔ ہمارا یقین ہے کہ ہر بچے کو بروقت، شواہد پر مبنی دیکھ بھال ملنی چاہیے — زبان، پس منظر یا ادائیگی کی صلاحیت سے قطع نظر۔",
    "aboutYears": "سال خدمت",
    "aboutPoint1": "شواہد پر مبنی علاج کے پروٹوکول",
    "aboutPoint2": "14 زبانوں میں ترجمانی کی خدمات",
    "aboutPoint3": "خاندان پر مرکوز دیکھ بھال کا طریقہ کار",
    "servicesEyebrow": "ہم کیا پیش کرتے ہیں",
    "servicesTitle": "جامع بچوں کی طبی خدمات",
    "servicesSubtitle": "معمول کے طبی معائنے سے لے کر فوری ایمرجنسی کیئر تک — آپ کا بچہ ہمارے پاس محفوظ ہے۔",
    "serviceOneTitle": "بچوں کا صحت معائنہ",
    "serviceOneBody": "باقاعدہ چیک اپ، نشو و نما کی جانچ اور ویکسینیشن — تاکہ آپ کا بچہ ہر مرحلے میں صحت مند رہے۔",
    "serviceTwoTitle": "بچوں کی ایمرجنسی سروس",
    "serviceTwoBody": "بخار، چوٹ، سانس لینے میں تکلیف اور دیگر فوری معاملات کے لیے 24 گھنٹے بچوں کے ایمرجنسی ڈاکٹروں تک رسائی۔",
    "serviceThreeTitle": "ادویات کی رہنمائی",
    "serviceThreeBody": "وزن کی بنیاد پر خوراک کا مشورہ، نسخے کی مدد، اور ٹائلینول، ایڈویل اور دیگر عام ادویات کی واضح ہدایات۔",
    "serviceLearnMore": "مزید جانیں ←",
    "contactEyebrow": "ہم سے رابطہ کریں",
    "contactTitle": "جب بھی ضرورت ہو، ہم یہاں ہیں",
    "contactBody": "آپ کے بچے کی صحت کے بارے میں کوئی سوال ہے؟ اپوائنٹمنٹ بک کرنا یا نرس سے بات کرنا چاہتے ہیں؟ ہم سے رابطہ کریں — ہماری کثیر لسانی ٹیم مدد کے لیے تیار ہے۔",
    "contactAddress": "123 ویلنس ایونیو، ٹورنٹو، ON M5V 1A1",
    "formName": "آپ کا نام",
    "formNamePlaceholder": "آمنہ خان",
    "formEmail": "ای میل پتہ",
    "formEmailPlaceholder": "amna@example.com",
    "formMessage": "پیغام",
    "formMessagePlaceholder": "ہم آپ کی کیسے مدد کر سکتے ہیں؟",
    "formSubmit": "پیغام بھیجیں",
    "formNote": "ہم ایک کاروباری دن کے اندر جواب دیتے ہیں۔",
    "footerText": "© 2026 کیئرپوائنٹ صحت۔ تمام حقوق محفوظ ہیں۔ یہ ویب سائٹ صرف معلوماتی مقاصد کے لیے ہے اور طبی مشورہ نہیں ہے۔",
    "footerDisclaimer": "طبی فیصلوں کے لیے ہمیشہ ایک اہل صحت کی دیکھ بھال کرنے والے پیشہ ور سے مشورہ کریں۔"
  }
};

/* ============================================================
   LANGUAGE CONFIGURATION
   Each entry: code, human-readable label, direction.
   The 'file' field is kept for documentation only — not fetched.
============================================================ */
const LANGUAGES = [
  { code: 'en',      label: 'English',              dir: 'ltr' },
  { code: 'es',      label: 'Español',              dir: 'ltr' },
  { code: 'fr',      label: 'Français',             dir: 'ltr' },
  { code: 'pl',      label: 'Polski',               dir: 'ltr' },
  { code: 'vi',      label: 'Tiếng Việt',           dir: 'ltr' },
  { code: 'ko',      label: '한국어',                dir: 'ltr' },
  { code: 'it',      label: 'Italiano',             dir: 'ltr' },
  { code: 'fa',      label: 'فارسی',                dir: 'rtl' },
  { code: 'ar',      label: 'العربية',              dir: 'rtl' },
  { code: 'zh-Hant', label: '中文（繁體）',          dir: 'ltr' },
  { code: 'zh-Hans', label: '中文（简体）',          dir: 'ltr' },
  { code: 'ta',      label: 'தமிழ்',                dir: 'ltr' },
  { code: 'hi',      label: 'हिन्दी',                dir: 'ltr' },
  { code: 'ur',      label: 'اردو',                 dir: 'rtl' },
];

/* ============================================================
   STATE
============================================================ */
let currentLang    = 'en';
let englishStrings = ALL_TRANSLATIONS['en'] || {};
let currentStrings = englishStrings;

/* ============================================================
   BOOTSTRAP
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  populateLangDropdown();
  setupMobileMenu();
  setupSmoothClose();

  // Restore saved language or default to English
  const saved     = localStorage.getItem('cpLang') || 'en';
  const validCode = LANGUAGES.find(l => l.code === saved) ? saved : 'en';

  document.getElementById('langSelect').value = validCode;
  applyLanguage(validCode);
});

/* ============================================================
   POPULATE DROPDOWN
============================================================ */
function populateLangDropdown() {
  const select = document.getElementById('langSelect');
  select.innerHTML = '';

  LANGUAGES.forEach(({ code, label }) => {
    const option    = document.createElement('option');
    option.value    = code;
    option.textContent = label;
    select.appendChild(option);
  });

  select.addEventListener('change', (e) => applyLanguage(e.target.value));
}

/* ============================================================
   APPLY LANGUAGE  (synchronous — no fetch needed)
============================================================ */
function applyLanguage(code) {
  const langConfig = LANGUAGES.find(l => l.code === code);
  if (!langConfig) {
    console.warn('[i18n] Unknown language code:', code);
    return;
  }

  // Pull strings from inlined object; fall back to English
  const strings = ALL_TRANSLATIONS[code];
  currentStrings = (strings && Object.keys(strings).length > 0)
    ? strings
    : englishStrings;
  currentLang = code;

  // Update <html> attributes
  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', langConfig.dir);

  applyTranslations();

  localStorage.setItem('cpLang', code);
}

/* ============================================================
   APPLY TRANSLATIONS TO DOM
============================================================ */
function applyTranslations() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const text = translate(key);
    if (el.tagName === 'TITLE') {
      document.title = text;
    } else {
      el.textContent = text;
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', translate(key));
  });
}

/* ============================================================
   TRANSLATE  (with English fallback)
============================================================ */
function translate(key) {
  if (currentStrings[key] !== undefined) return currentStrings[key];
  if (englishStrings[key]  !== undefined) return englishStrings[key];
  console.warn('[i18n] Missing key:', key);
  return '[' + key + ']';
}

/* ============================================================
   MOBILE MENU
============================================================ */
function setupMobileMenu() {
  const btn  = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.setAttribute('aria-hidden',  isOpen ? 'false' : 'true');
  });
}

function setupSmoothClose() {
  document.querySelectorAll('.mobile-nav-list .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      const btn  = document.getElementById('mobileMenuBtn');
      if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); }
      if (btn)  { btn.setAttribute('aria-expanded', 'false'); }
    });
  });
}

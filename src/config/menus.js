// Unified translations configuration for English, Marathi, and Hindi

export const LANGUAGE_MENU = `🌐 Choose your language / भाषा निवडा / अपनी भाषा चुनें:

1️⃣ English
2️⃣ Marathi (मराठी)
3️⃣ Hindi (हिंदी)

Reply with 1, 2, or 3.`;

export const TRANSLATIONS = {
    en: {
        thankYouReplies: ['thank you', 'thanks', 'thanku', 'thank u', 'tanks', 'ty'],
        thankYouResponse: `You're welcome! Feel free to type *menu* or *reset* at any time to explore our services. Have a great day! 🚀`,
        fallbackResponse: `Thank you for your message. Vaishnav will reach back to you shortly.

Feel free to type *menu* or *reset* at any time to see our specialized service options.`,
        invalidMenuOption: `⚠️ Invalid choice. Please reply with a number between 1 and 10.`,
        invalidSubOption: `⚠️ Invalid option. Please reply with one of the numbers listed above in the menu.`,
        mainMenu: `👋 Hello! I'm Vaishnav's AI Assistant.

Thank you for contacting LeopardX Technologies & SARVOPrime. 🚀

We specialize in:

1️⃣ Web Development
2️⃣ Mobile App Development
3️⃣ AI Agent Development
4️⃣ Digital Marketing
5️⃣ Portfolio Website
6️⃣ WhatsApp Bot Development
7️⃣ Software Development
8️⃣ UI/UX Design
9️⃣ Existing Project Support
🔟 Contact Vaishnav

Reply with the number of your choice.`,
        services: {
            1: {
                name: 'Web Development',
                emoji: '🌐',
                menuText: `🌐 Web Development

We build:
1️⃣ Business Website
2️⃣ E-Commerce Website
3️⃣ Company Website
4️⃣ School/College ERP
5️⃣ Restaurant Management System
6️⃣ Custom Web Application
7️⃣ SaaS Product
8️⃣ Other

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Business Website', question: `Great!\nPlease provide:\n✅ Business Name\n✅ Business Type\n✅ Do you already have a domain? (Yes/No)` },
                    2: { name: 'E-Commerce Website', question: `Please answer:\n1️⃣ How many products?\n2️⃣ Payment Gateway Required?\n3️⃣ Delivery Available?\n4️⃣ Inventory Management Required?\n\nReply with your answers.` },
                    3: { name: 'Company Website', question: `Please tell us about your Company Name, Industry, and what sections/pages you need on the website:` },
                    4: { name: 'School/College ERP', question: `Please describe the modules required (e.g. Student Management, Fee Management, Exams, Staff Attendance) and size of your institute:` },
                    5: { name: 'Restaurant Management System', question: `Please describe your requirement (e.g. Table Booking, Online Ordering, Billing, KOT system):` },
                    6: { name: 'Custom Web Application', question: `Describe your custom web app idea (features, key users, and workflow):` },
                    7: { name: 'SaaS Product', question: `Tell us about your SaaS idea.\nExample:\n• Hotel Management\n• Pharmacy\n• CRM\n• HRMS\n• Education\n• Healthcare\n\nDescribe your project in a few lines.` },
                    8: { name: 'Other Web Development', question: `Please describe your specific web development requirements:` }
                }
            },
            2: {
                name: 'Mobile App Development',
                emoji: '📱',
                menuText: `📱 Mobile App Development

Choose your app type:
1️⃣ Android App
2️⃣ iPhone App
3️⃣ Cross Platform App
4️⃣ Business App
5️⃣ Food Delivery App
6️⃣ Booking App
7️⃣ Custom App

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Android App', question: `Awesome!\nPlease tell us:\n• Business Name\n• App Category\n• Number of Users\n• Any Reference App? (e.g. Swiggy, Amazon, Instagram, Uber)` },
                    2: { name: 'iPhone App', question: `Awesome!\nPlease tell us:\n• Business Name\n• App Category\n• Reference Apps (if any)` },
                    3: { name: 'Cross Platform App', question: `Please tell us:\n• Target Platforms (both Android and iOS?)\n• Business Name\n• Core Features` },
                    4: { name: 'Business App', question: `Please tell us about your business, the goal of this app, and required features:` },
                    5: { name: 'Food Delivery App', question: `Do you need a single-restaurant delivery app or a multi-vendor app (like Swiggy/Zomato)? Describe your flow:` },
                    6: { name: 'Booking App', question: `What type of booking app is it? (e.g. Salon, Doctor Appointments, Tickets, Hotel booking):` },
                    7: { name: 'Custom App', question: `Please describe your custom mobile app features and target audience:` }
                }
            },
            3: {
                name: 'AI Agent Development',
                emoji: '🤖',
                menuText: `🤖 AI Agent Development

Choose a solution:
1️⃣ Customer Support Bot
2️⃣ WhatsApp AI Bot
3️⃣ Voice AI Agent
4️⃣ AI Sales Agent
5️⃣ AI Appointment Booking
6️⃣ Internal Company AI
7️⃣ AI Automation
8️⃣ Custom AI Solution

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Customer Support Bot', question: `Please tell us: What platform will this bot run on (Web, Discord, Telegram)? What database/documents should it learn from?` },
                    2: { name: 'WhatsApp AI Bot', question: `Perfect!\nPlease answer:\n• Business Name\n• What should the bot do?\n(Examples: Answer FAQs, Take Orders, Book Appointments, Collect Leads, Customer Support)\n\nDescribe your requirement.` },
                    3: { name: 'Voice AI Agent', question: `What language(s) should the voice agent speak? What is the main workflow (e.g. inbound support, outbound cold calling)?` },
                    4: { name: 'AI Sales Agent', question: `Please describe your product/service and how you want the AI to handle sales qualifying or pitch flows:` },
                    5: { name: 'AI Appointment Booking', question: `What scheduling software do you use (Google Calendar, Calendly, custom)? Describe your booking rules:` },
                    6: { name: 'Internal Company AI', question: `Describe the internal data sources (e.g. PDF docs, database, wiki) and who will access it:` },
                    7: { name: 'AI Automation', question: `What manual tasks do you want to automate? Describe the workflow (e.g. email draft generation, auto-reports):` },
                    8: { name: 'Custom AI Solution', question: `Please describe your custom AI requirements:` }
                }
            },
            4: {
                name: 'Digital Marketing',
                emoji: '📈',
                menuText: `📈 Digital Marketing

Choose your service:
1️⃣ Social Media Management
2️⃣ Instagram Marketing
3️⃣ Facebook Marketing
4️⃣ Google Ads
5️⃣ SEO
6️⃣ Branding
7️⃣ Video Editing
8️⃣ Complete Marketing Package

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Social Media Management', question: `Please provide:\n• Business Name\n• Instagram Link\n• Facebook Page\n• Current Followers\n• Goal (e.g., Increase Sales, Increase Followers, Brand Awareness, Lead Generation)` },
                    2: { name: 'Instagram Marketing', question: `Please send your Instagram Handle and describe what you sell or promote:` },
                    3: { name: 'Facebook Marketing', question: `Please send your Facebook Page link and describe your target audience and budget:` },
                    4: { name: 'Google Ads', question: `What products/services are you advertising? What is your monthly ad spend budget?` },
                    5: { name: 'SEO', question: `Please share your website URL and list 3-5 keywords you want to rank for:` },
                    6: { name: 'Branding', question: `Do you need a new logo, color palette, brand guidelines, or a complete brand overhaul? Describe your vision:` },
                    7: { name: 'Video Editing', question: `What type of videos (Reels/Shorts, YouTube, Promotional)? Approximate length and frequency of videos:` },
                    8: { name: 'Complete Marketing Package', question: `Please describe your business, current marketing activities, and overall budget:` }
                }
            },
            5: {
                name: 'Portfolio Website',
                emoji: '💼',
                menuText: `💼 Portfolio Website

Who is it for?
1️⃣ Student
2️⃣ Freelancer
3️⃣ Company
4️⃣ Job Seeker
5️⃣ Photographer
6️⃣ Doctor
7️⃣ Architect
8️⃣ Other

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Student Portfolio', question: `Please send:\n• Your Name\n• College\n• Course\n• Skills\n• Projects\n• Resume (Optional)\n• LinkedIn Profile (Optional)` },
                    2: { name: 'Freelancer Portfolio', question: `Please send your Name, line of work, key skills, and link to your existing work portfolio (if any):` },
                    3: { name: 'Company Portfolio', question: `Please provide your Company Name, industry, list of services, and list of key projects you want to display:` },
                    4: { name: 'Job Seeker Portfolio', question: `Please send your Name, Target Job Role, years of experience, and key achievements:` },
                    5: { name: 'Photographer Portfolio', question: `What genres of photography do you specialize in? Do you need video galleries?` },
                    6: { name: 'Doctor Portfolio', question: `Please provide your Name, specialization, clinic details, and if you need an appointment booking link:` },
                    7: { name: 'Architect Portfolio', question: `Do you want to display 3D models/images? Please describe the sections you need:` },
                    8: { name: 'Other Portfolio', question: `Please describe what kind of portfolio website you need and what details you want to display:` }
                }
            },
            6: {
                name: 'WhatsApp Bot Development',
                emoji: '🤖',
                menuText: `🤖 WhatsApp Bot Development

Choose the type:
1️⃣ Personal WhatsApp Bot
2️⃣ Business WhatsApp Bot
3️⃣ Customer Support Bot
4️⃣ AI WhatsApp Assistant
5️⃣ Order Management Bot
6️⃣ Booking Bot
7️⃣ Lead Generation Bot
8️⃣ Custom Bot

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Personal WhatsApp Bot', question: `Awesome!\nWhat tasks should your personal bot do? (e.g. auto reply, custom greetings, reminders):` },
                    2: { name: 'Business WhatsApp Bot', question: `Please tell us:\n• Business Name\n• Industry\n• Approximate Monthly Messages\n• Features Required (e.g. Auto Reply, Order Tracking, Payments, AI Chat, Appointment Booking, Multi-Agent Support, CRM Integration)\n\nDescribe your requirements.` },
                    3: { name: 'Customer Support Bot', question: `What support channel or system (CRM, Helpdesk) should this bot integrate with? Describe your FAQs:` },
                    4: { name: 'AI WhatsApp Assistant', question: `What AI model should it use (ChatGPT, Claude, custom database)? Describe its persona and prompt instructions:` },
                    5: { name: 'Order Management Bot', question: `What platform runs your shop (Shopify, WooCommerce, custom)? Describe your ordering flow:` },
                    6: { name: 'Booking Bot', question: `Describe your booking services, availability rules, and if payment is required at booking:` },
                    7: { name: 'Lead Generation Bot', question: `What lead details do you need to collect? What CRM or Google Sheet should it save to?` },
                    8: { name: 'Custom Bot', question: `Please describe your custom WhatsApp bot requirements and target features:` }
                }
            },
            7: {
                name: 'Software Development',
                emoji: '💻',
                menuText: `💻 Software Development

Choose your software:
1️⃣ Billing Software
2️⃣ Inventory Management
3️⃣ ERP System
4️⃣ CRM
5️⃣ Hospital Management
6️⃣ School Management
7️⃣ Hotel/Restaurant POS
8️⃣ Custom Software

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Billing Software', question: `Please provide: Business Name, Industry, and what hardware/systems it needs to support (Desktop, POS terminal):` },
                    2: { name: 'Inventory Management', question: `Please provide: Business Name, number of products/SKUs, and if barcode scanning is required:` },
                    3: { name: 'ERP System', question: `Please provide: Business Name, industry, and modules needed (e.g., HR, Finance, Procurement, Sales):` },
                    4: { name: 'CRM', question: `Please provide: Business Name, number of sales reps, and what channels (Email, WhatsApp) it needs to track:` },
                    5: { name: 'Hospital Management', question: `Please provide: Hospital Name, number of beds/departments, and modules (OPD, IPD, Billing, Pharmacy):` },
                    6: { name: 'School Management', question: `Please provide: School Name, number of students, and modules (Admission, Fees, Transport, Report Cards):` },
                    7: { name: 'Hotel/Restaurant POS', question: `Please provide: Restaurant Name, number of tables, and if you need tablet ordering for waitstaff:` },
                    8: { name: 'Custom Software', question: `Please describe: Business Name, Industry, and your custom software specifications:` }
                }
            },
            8: {
                name: 'UI/UX Design',
                emoji: '🎨',
                menuText: `🎨 UI/UX Design

Choose:
1️⃣ Mobile App Design
2️⃣ Website Design
3️⃣ Dashboard Design
4️⃣ Logo Design
5️⃣ Brand Identity
6️⃣ Complete Design Package

Reply with the option number.`,
                subOptions: {
                    1: { name: 'Mobile App Design', question: `What is the mobile app about? How many screens do you estimate? Please share reference designs:` },
                    2: { name: 'Website Design', question: `What is the website about? How many pages? Please share reference websites you like:` },
                    3: { name: 'Dashboard Design', question: `Describe the data/metrics to show, target users, and what platform it will build on (Web, Desktop):` },
                    4: { name: 'Logo Design', question: `Describe your business, brand values, preferred styles (minimalist, bold, vintage), and color preferences:` },
                    5: { name: 'Brand Identity', question: `What brand assets do you need? (e.g., business cards, letterheads, social media templates):` },
                    6: { name: 'Complete Design Package', question: `Please describe: Project Type, company name, target audience, and scope of design work:` }
                }
            },
            9: {
                name: 'Existing Project Support',
                emoji: '🛠',
                menuText: `🛠 Existing Project Support

Need help with:
1️⃣ React
2️⃣ Node.js
3️⃣ Spring Boot
4️⃣ Python
5️⃣ Database
6️⃣ Bug Fixing
7️⃣ Deployment
8️⃣ API Development
9️⃣ Performance Optimization
🔟 Other

Reply with the option number.`,
                subOptions: {
                    1: { name: 'React Support', question: `Please describe your React project issue, features to add, or bugs you are facing:` },
                    2: { name: 'Node.js Support', question: `Please describe your Node.js backend issue, database details, or APIs to build:` },
                    3: { name: 'Spring Boot Support', question: `Please describe your Spring Boot/Java project issue and database environment:` },
                    4: { name: 'Python Support', question: `Please describe your Python/Django/Flask project details and issue:` },
                    5: { name: 'Database Support', question: `What database are you using (MySQL, MongoDB, PostgreSQL)? Describe the scaling or query issues:` },
                    6: { name: 'Bug Fixing', question: `Please describe the bug, how to reproduce it, and your current technology stack:` },
                    7: { name: 'Deployment Support', question: `Where are you deploying (AWS, Vercel, VPS, Heroku)? What build/deployment errors do you get?` },
                    8: { name: 'API Development', question: `Describe the API requirements, endpoints needed, and external systems to integrate with:` },
                    9: { name: 'Performance Optimization', question: `Describe the current performance issues (slow database queries, slow page load, high CPU usage):` },
                    10: { name: 'Other Support', question: `Please describe your technology stack and the support required:` }
                }
            },
            10: {
                name: 'Contact Vaishnav',
                emoji: '📞',
                menuText: `📞 Contact Details

Vaishnav Ghadge
📱 Phone: +91-7218329602
📧 Email: vaishnavghadge99@gmail.com
🌐 Website: https://vaishnav-portfolio-tau.vercel.app/

Business Hours:
Monday - Saturday
10:00 AM - 7:00 PM

Our team will contact you shortly.
Thank you for choosing LeopardX Technologies & SARVOPrime ❤️`,
                subOptions: {
                    default: {
                        name: 'Contact Request',
                        question: `Would you like Vaishnav to call or email you regarding your business requirements? (Yes/No)`
                    }
                }
            }
        },
        leadSteps: [
            { key: 'name', prompt: `Let's gather some quick details so we can get back to you with a quotation.\n\n👤 What is your full name?` },
            { key: 'company', prompt: `🏢 What is your company name? (Type 'None' if not applicable)` },
            { key: 'budget', prompt: `💰 What is your estimated Budget Range for this project? (e.g. ₹20,000–₹50,000, or $500–$1,000)` }
        ],
        confirmationMessage: (service, subService, leadData) => `✅ Thank you! We've received your project details.

📋 Summary:
• Service: ${service.emoji} ${service.name} (${subService.name})
• Name: ${leadData.name}
• Company: ${leadData.company}
• Budget: ${leadData.budget}

Your request has been forwarded to Vaishnav. He will review it and get back to you within 24 hours.

Thank you for choosing LeopardX Technologies & SARVOPrime! 🚀`,
        callbackExitMsg: `Thank you for reaching out to LeopardX Technologies & SARVOPrime. Feel free to type *menu* or *reset* at any time to explore our services. Have a great day! ❤️`
    },
    mr: {
        thankYouReplies: ['धन्यवाद', 'थँक्स', 'थँक्यू', 'थँक यू', 'आभारी आहे', 'thank you', 'thanks'],
        thankYouResponse: `तुमचे स्वागत आहे! आमच्या सेवा पाहण्यासाठी तुम्ही कोणत्याही वेळी *menu* किंवा *reset* लिहू शकता. तुमचा दिवस चांगला जावो! 🚀`,
        fallbackResponse: `तुमच्या संदेशाबद्दल धन्यवाद. वैष्णव लवकरच तुमच्याशी संपर्क साधतील.

आमच्या विशेष सेवांचे पर्याय पाहण्यासाठी कोणत्याही वेळी *menu* किंवा *reset* लिहा.`,
        invalidMenuOption: `⚠️ अयोग्य पर्याय. कृपया १ ते १० दरम्यानचा क्रमांक पाठवा.`,
        invalidSubOption: `⚠️ अयोग्य पर्याय. कृपया वरील मेनूमध्ये दाखवलेल्या क्रमांकांपैकी एक निवडा.`,
        mainMenu: `👋 नमस्कार! मी वैष्णवचा एआय (AI) सहाय्यक आहे.

LeopardX Technologies आणि SARVOPrime शी संपर्क साधल्याबद्दल धन्यवाद. 🚀

आमची वैशिष्ट्ये:

1️⃣ वेब डेव्हलपमेंट (Web Development)
2️⃣ मोबाईल ॲप डेव्हलपमेंट (Mobile App Development)
3️⃣ एआय एजंट डेव्हलपमेंट (AI Agent Development)
4️⃣ डिजिटल मार्केटिंग (Digital Marketing)
5️⃣ पोर्टफोलिओ वेबसाईट (Portfolio Website)
6️⃣ व्हॉट्सॲप बॉट डेव्हलपमेंट (WhatsApp Bot Development)
7️⃣ सॉफ्टवेअर डेव्हलपमेंट (Software Development)
8️⃣ युआय/युएक्स डिझाईन (UI/UX Design)
9️⃣ सध्याच्या प्रकल्पाचे सहाय्य (Existing Project Support)
🔟 वैष्णवशी संपर्क साधा (Contact Vaishnav)

कृपया आपल्या आवडीचा क्रमांक पाठवा.`,
        services: {
            1: {
                name: 'वेब डेव्हलपमेंट',
                emoji: '🌐',
                menuText: `🌐 वेब डेव्हलपमेंट (Web Development)

आम्ही तयार करतो:
1️⃣ बिझनेस वेबसाईट (Business Website)
2️⃣ ई-कॉमर्स वेबसाईट (E-Commerce Website)
3️⃣ कंपनी वेबसाईट (Company Website)
4️⃣ शाळा/कॉलेज ईआरपी (School/College ERP)
5️⃣ रेस्टॉरंट मॅनेजमेंट सिस्टीम (Restaurant Management System)
6️⃣ कस्टमाइज्ड वेब ॲप्लिकेशन (Custom Web Application)
7️⃣ सास प्रॉडक्ट (SaaS Product)
8️⃣ इतर (Other)

कृपया तुमचा पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Business Website', question: `उत्कृष्ट!\nकृपया माहिती द्या:\n✅ व्यवसायाचे नाव (Business Name)\n✅ व्यवसायाचा प्रकार (Business Type)\n✅ तुमच्याकडे आधीच डोमेन आहे का? (हो/नाही)` },
                    2: { name: 'E-Commerce Website', question: `कृपया उत्तर द्या:\n1️⃣ किती उत्पादने आहेत?\n2️⃣ पेमेंट गेटवे आवश्यक आहे का?\n3️⃣ डिलिव्हरी सेवा उपलब्ध आहे का?\n4️⃣ इन्व्हेंटरी मॅनेजमेंट आवश्यक आहे का?\n\nतुमचे उत्तर पाठवा.` },
                    3: { name: 'Company Website', question: `कृपया तुमच्या कंपनीचे नाव, उद्योग आणि वेबसाईटवर कोणत्या पानांची/विभागांची गरज आहे ते सांगा:` },
                    4: { name: 'School/College ERP', question: `कृपया आवश्यक मॉड्यूल्स (उदा. विद्यार्थी व्यवस्थापन, फी व्यवस्थापन, परीक्षा, स्टाफ उपस्थिती) आणि संस्थेचा आकार सांगा:` },
                    5: { name: 'Restaurant Management System', question: `कृपया तुमच्या गरजेबद्दल सांगा (उदा. टेबल बुकिंग, ऑनलाईन ऑर्डर, बिलिंग, KOT सिस्टीम):` },
                    6: { name: 'Custom Web Application', question: `तुमच्या कस्टमाइज्ड वेब ॲपच्या कल्पनेबद्दल सांगा (वैशिष्ट्ये, मुख्य वापरकर्ते आणि कार्यपद्धती):` },
                    7: { name: 'SaaS Product', question: `तुमच्या सास (SaaS) कल्पनेबद्दल सांगा.\nउदाहरण:\n• हॉटेल व्यवस्थापन\n• फार्मसी\n• सीआरएम (CRM)\n• एचआरएमएस (HRMS)\n• शिक्षण\n• आरोग्य\n\nतुमच्या प्रकल्पाचे थोडक्यात वर्णन करा.` },
                    8: { name: 'Other Web Development', question: `कृपया तुमच्या विशिष्ट वेब डेव्हलपमेंटच्या गरजांबद्दल सांगा:` }
                }
            },
            2: {
                name: 'मोबाईल ॲप डेव्हलपमेंट',
                emoji: '📱',
                menuText: `📱 मोबाईल ॲप डेव्हलपमेंट (Mobile App Development)

ॲपचा प्रकार निवडा:
1️⃣ अँड्रॉईड ॲप (Android App)
2️⃣ आयफोन ॲप (iPhone App)
3️⃣ क्रॉस प्लॅटफॉर्म ॲप (Cross Platform App)
4️⃣ बिझनेस ॲप (Business App)
5️⃣ फूड डिलिव्हरी ॲप (Food Delivery App)
6️⃣ बुकिंग ॲप (Booking App)
7️⃣ कस्टमाइज्ड ॲप (Custom App)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Android App', question: `उत्कृष्ट!\nकृपया आम्हाला सांगा:\n• व्यवसायाचे नाव\n• ॲपची श्रेणी (Category)\n• वापरकर्त्यांची अंदाजे संख्या\n• संदर्भासाठी कोणतेही ॲप? (उदा. Swiggy, Amazon, Instagram, Uber)` },
                    2: { name: 'iPhone App', question: `उत्कृष्ट!\nकृपया आम्हाला सांगा:\n• व्यवसायाचे नाव\n• ॲपची श्रेणी\n• संदर्भासाठी ॲप्स (असल्यास)` },
                    3: { name: 'Cross Platform App', question: `कृपया सांगा:\n• लक्ष्यित प्लॅटफॉर्म (Android आणि iOS दोन्ही?)\n• व्यवसायाचे नाव\n• मुख्य वैशिष्ट्ये` },
                    4: { name: 'Business App', question: `कृपया तुमचा व्यवसाय, या ॲपचा मुख्य हेतू आणि आवश्यक वैशिष्ट्यांबद्दल सांगा:` },
                    5: { name: 'Food Delivery App', question: `तुम्हाला एका रेस्टॉरंटसाठी डिलिव्हरी ॲप हवे आहे की मल्टि-व्हेंडर ॲप (Swiggy/Zomato सारखे)? रचना सांगा:` },
                    6: { name: 'Booking App', question: `हे कोणत्या प्रकारचे बुकिंग ॲप आहे? (उदा. सलून, डॉक्टर अपॉइंटमेंट, तिकीट, हॉटेल बुकिंग):` },
                    7: { name: 'Custom App', question: `कृपया तुमच्या कस्टमाइज्ड मोबाईल ॲपची वैशिष्ट्ये आणि लक्ष्यित ग्राहक याबद्दल सांगा:` }
                }
            },
            3: {
                name: 'एआय एजंट डेव्हलपमेंट',
                emoji: '🤖',
                menuText: `🤖 एआय एजंट डेव्हलपमेंट (AI Agent Development)

एक उपाय निवडा:
1️⃣ कस्टमर सपोर्ट बॉट (Customer Support Bot)
2️⃣ व्हॉट्सॲप एआय बॉट (WhatsApp AI Bot)
3️⃣ व्हॉईस एआय एजंट (Voice AI Agent)
4️⃣ एआय सेल्स एजंट (AI Sales Agent)
5️⃣ एआय अपॉइंटमेंट बुकिंग (AI Appointment Booking)
6️⃣ अंतर्गत कंपनी एआय (Internal Company AI)
7️⃣ एआय ऑटोमेशन (AI Automation)
8️⃣ कस्टमाइज्ड एआय सोल्यूशन (Custom AI Solution)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Customer Support Bot', question: `कृपया सांगा: हा बॉट कोणत्या प्लॅटफॉर्मवर चालेल (वेबसाईट, डिस्कॉर्ड, टेलिग्राम)? त्याने कोणत्या डेटाबेसमधून शिकले पाहिजे?` },
                    2: { name: 'WhatsApp AI Bot', question: `उत्कृष्ट!\nकृपया उत्तर द्या:\n• व्यवसायाचे नाव\n• बॉटने काय केले पाहिजे?\n(उदा. प्रश्नांची उत्तरे देणे, ऑर्डर्स घेणे, अपॉइंटमेंट बुक करणे, कस्टमर सपोर्ट)\n\nतुमच्या गरजेबद्दल सांगा.` },
                    3: { name: 'Voice AI Agent', question: `व्हॉईस एजंटने कोणत्या भाषा बोलल्या पाहिजेत? मुख्य कार्य काय आहे (उदा. इनबाउंड सपोर्ट, आऊटबाउंड कॉल्स)?` },
                    4: { name: 'AI Sales Agent', question: `कृपया तुमच्या उत्पादनाबद्दल/सेवेबद्दल सांगा आणि एआयने विक्री कशी हाताळली पाहिजे ते सांगा:` },
                    5: { name: 'AI Appointment Booking', question: `तुम्ही कोणते शेड्युलिंग सॉफ्टवेअर वापरता (Google Calendar, Calendly)? बुकिंगचे नियम सांगा:` },
                    6: { name: 'Internal Company AI', question: `कंपनीच्या अंतर्गत डेटा स्रोतांबद्दल (उदा. पीडीएफ दस्तऐवज, डेटाबेस) सांगा आणि कोण त्याचा वापर करेल ते सांगा:` },
                    7: { name: 'AI Automation', question: `तुम्हाला कोणती कामे स्वयंचलित (automate) करायची आहेत? प्रक्रियेचे वर्णन करा (उदा. ई-मेल जनरेशन, रिपोर्ट्स):` },
                    8: { name: 'Custom AI Solution', question: `कृपया तुमच्या कस्टमाइज्ड एआय (AI) गरजांबद्दल सांगा:` }
                }
            },
            4: {
                name: 'डिजिटल मार्केटिंग',
                emoji: '📈',
                menuText: `📈 डिजिटल मार्केटिंग (Digital Marketing)

तुमची सेवा निवडा:
1️⃣ सोशल मीडिया व्यवस्थापन (Social Media Management)
2️⃣ इंस्टाग्राम मार्केटिंग (Instagram Marketing)
3️⃣ फेसबुक मार्केटिंग (Facebook Marketing)
4️⃣ गुगल ॲड्स (Google Ads)
5️⃣ एसइओ (SEO)
6️⃣ ब्रँडिंग (Branding)
7️⃣ व्हिडिओ एडिटिंग (Video Editing)
8️⃣ संपूर्ण मार्केटिंग पॅकेज (Complete Marketing Package)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Social Media Management', question: `कृपया माहिती द्या:\n• व्यवसायाचे नाव\n• इंस्टाग्राम लिंक\n• फेसबुक पेज\n• सध्याचे फॉलोअर्स\n• उद्दिष्ट (उदा. विक्री वाढवणे, फॉलोअर्स वाढवणे, ब्रँड अवेयरनेस)` },
                    2: { name: 'Instagram Marketing', question: `कृपया तुमचे इंस्टाग्राम हँडल पाठवा आणि तुम्ही काय विकता किंवा प्रसिद्ध करता ते सांगा:` },
                    3: { name: 'Facebook Marketing', question: `कृपया तुमच्या फेसबुक पेजची लिंक पाठवा आणि तुमचे बजेट सांगा:` },
                    4: { name: 'Google Ads', question: `तुम्ही कोणत्या उत्पादनांची/सेवांची जाहिरात करत आहात? जाहिरातींसाठी तुमचे मासिक बजेट किती आहे?` },
                    5: { name: 'SEO', question: `कृपया तुमच्या वेबसाईटची लिंक पाठवा आणि गुगलवर रँक करायचे असलेले ३-५ कीवर्ड सांगा:` },
                    6: { name: 'Branding', question: `तुम्हाला नवीन लोगो, रंगांची थीम, की संपूर्ण ब्रँड बदल हवा आहे? तुमची संकल्पना सांगा:` },
                    7: { name: 'Video Editing', question: `कोणत्या प्रकारचे व्हिडिओ (Reels/Shorts, YouTube, जाहिरात)? व्हिडिओंची लांबी आणि वारंवारता सांगा:` },
                    8: { name: 'Complete Marketing Package', question: `कृपया तुमचा व्यवसाय, सध्याच्या मार्केटिंग क्रियाकलाप आणि एकूण बजेट सांगा:` }
                }
            },
            5: {
                name: 'पोर्टफोलिओ वेबसाईट',
                emoji: '💼',
                menuText: `💼 पोर्टफोलिओ वेबसाईट (Portfolio Website)

हे कोणासाठी आहे?
1️⃣ विद्यार्थी (Student)
2️⃣ फ्रीलान्सर (Freelancer)
3️⃣ कंपनी (Company)
4️⃣ नोकरी शोधणारे (Job Seeker)
5️⃣ फोटोग्राफर (Photographer)
6️⃣ डॉक्टर (Doctor)
7️⃣ आर्किटेक्ट (Architect)
8️⃣ इतर (Other)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Student Portfolio', question: `कृपया पाठवा:\n• तुमचे नाव\n• कॉलेज\n• कोर्स/शाखा\n• कौशल्ये (Skills)\n• प्रोजेक्ट्स\n• रेझ्युमे (ऐच्छिक)\n• लिंक्डइन प्रोफाईल (ऐच्छिक)` },
                    2: { name: 'Freelancer Portfolio', question: `कृपया तुमचे नाव, कामाचे स्वरूप, प्रमुख कौशल्ये आणि कामाचे नमुने पाठवा:` },
                    3: { name: 'Company Portfolio', question: `कृपया तुमच्या कंपनीचे नाव, उद्योग, सेवांची यादी आणि दाखवायचे असलेले प्रमुख प्रकल्प सांगा:` },
                    4: { name: 'Job Seeker Portfolio', question: `कृपया तुमचे नाव, टार्गेट जॉब रोल, अनुभवाची वर्षे आणि प्रमुख यश पाठवा:` },
                    5: { name: 'Photographer Portfolio', question: `तुम्ही कोणत्या प्रकारच्या फोटोग्राफीमध्ये तज्ञ आहात? तुम्हाला व्हिडिओ गॅलरी हवी आहे का?` },
                    6: { name: 'Doctor Portfolio', question: `कृपया तुमचे नाव, स्पेशलायझेशन, क्लिनिकची माहिती आणि अपॉइंटमेंट बुकिंग लिंक हवी असल्यास सांगा:` },
                    7: { name: 'Architect Portfolio', question: `तुम्हाला 3D मॉडेल्स/फोटो दाखवायचे आहेत का? आवश्यक विभागांबद्दल सांगा:` },
                    8: { name: 'Other Portfolio', question: `तुम्हाला कोणत्या प्रकारची पोर्टफोलिओ वेबसाईट हवी आहे आणि काय माहिती दाखवायची आहे ते सांगा:` }
                }
            },
            6: {
                name: 'व्हॉट्सॲप बॉट डेव्हलपमेंट',
                emoji: '🤖',
                menuText: `🤖 व्हॉट्सॲप बॉट डेव्हलपमेंट (WhatsApp Bot Development)

बॉटचा प्रकार निवडा:
1️⃣ वैयक्तिक व्हॉट्सॲप बॉट (Personal WhatsApp Bot)
2️⃣ व्यावसायिक व्हॉट्सॲप बॉट (Business WhatsApp Bot)
3️⃣ कस्टमर सपोर्ट बॉट (Customer Support Bot)
4️⃣ एआय व्हॉट्सॲप सहाय्यक (AI WhatsApp Assistant)
5️⃣ ऑर्डर मॅनेजमेंट बॉट (Order Management Bot)
6️⃣ बुकिंग बॉट (Booking Bot)
7️⃣ लीड जनरेशन बॉट (Lead Generation Bot)
8️⃣ कस्टमाइज्ड बॉट (Custom Bot)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Personal WhatsApp Bot', question: `उत्कृष्ट!\nतुमच्या वैयक्तिक बॉटने काय कामे केली पाहिजेत? (उदा. ऑटो रिप्लाय, सानुकूल शुभेच्छा, आठवण करून देणे):` },
                    2: { name: 'Business WhatsApp Bot', question: `कृपया सांगा:\n• व्यवसायाचे नाव\n• उद्योग क्षेत्र\n• अंदाजे मासिक मेसेजेस\n• आवश्यक वैशिष्ट्ये (उदा. ऑटो रिप्लाय, ऑर्डर ट्रॅकिंग, पेमेंट्स, एआय चॅट, अपॉइंटमेंट बुकिंग, सीआरएम इंटिग्रेशन)\n\nतुमच्या गरजा सांगा.` },
                    3: { name: 'Customer Support Bot', question: `हा बॉट कोणत्या सिस्टीमशी (CRM, Helpdesk) जोडायचा आहे? तुमचे नेहमी विचारले जाणारे प्रश्न सांगा:` },
                    4: { name: 'AI WhatsApp Assistant', question: `याने कोणते एआय मॉडेल वापरावे (ChatGPT, Claude, वैयक्तिक डेटाबेस)? त्याचे नियम सांगा:` },
                    5: { name: 'Order Management Bot', question: `तुमचे दुकान कोणत्या प्लॅटफॉर्मवर आहे (Shopify, WooCommerce)? ऑर्डरची प्रक्रिया सांगा:` },
                    6: { name: 'Booking Bot', question: `तुमच्या बुकिंग सेवा, उपलब्धतेचे नियम आणि पेमेंट आवश्यक आहे का ते सांगा:` },
                    7: { name: 'Lead Generation Bot', question: `तुम्हाला कोणती माहिती गोळा करायची आहे? ती कोणत्या गुगल शीट किंवा CRM मध्ये जतन करायची आहे?` },
                    8: { name: 'Custom Bot', question: `कृपया तुमच्या कस्टमाइज्ड व्हॉट्सॲप बॉटच्या गरजा आणि वैशिष्ट्ये याबद्दल सांगा:` }
                }
            },
            7: {
                name: 'सॉफ्टवेअर डेव्हलपमेंट',
                emoji: '💻',
                menuText: `💻 सॉफ्टवेअर डेव्हलपमेंट (Software Development)

सॉफ्टवेअर निवडा:
1️⃣ बिलिंग सॉफ्टवेअर (Billing Software)
2️⃣ इन्व्हेंटरी मॅनेजमेंट (Inventory Management)
3️⃣ ईआरपी सिस्टीम (ERP System)
4️⃣ सीआरएम (CRM)
5️⃣ हॉस्पिटल मॅनेजमेंट (Hospital Management)
6️⃣ स्कूल मॅनेजमेंट (School Management)
7️⃣ हॉटेल/रेस्टॉरंट पॉस (Hotel/Restaurant POS)
8️⃣ कस्टमाइज्ड सॉफ्टवेअर (Custom Software)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Billing Software', question: `कृपया सांगा: व्यवसायाचे नाव, उद्योग आणि हे कोणत्या सिस्टीमवर चालेल (डेस्कटॉप, पॉस टर्मिनल):` },
                    2: { name: 'Inventory Management', question: `कृपया सांगा: व्यवसायाचे नाव, उत्पादनांची अंदाजे संख्या आणि बारकोड स्कॅनिंग आवश्यक आहे का:` },
                    3: { name: 'ERP System', question: `कृपया सांगा: व्यवसायाचे नाव, उद्योग आणि आवश्यक मॉड्यूल्स (उदा. एचआर, फायनान्स, खरेदी, विक्री):` },
                    4: { name: 'CRM', question: `कृपया सांगा: व्यवसायाचे नाव, सेल्स टीममधील लोकांची संख्या आणि कोणत्या चॅनेल्स ट्रॅक करायचे आहेत:` },
                    5: { name: 'Hospital Management', question: `कृपया सांगा: हॉस्पिटलचे नाव, बेड/विभागांची संख्या आणि आवश्यक मॉड्यूल्स (ओपीडी, आयपीडी, बिलिंग, फार्मसी):` },
                    6: { name: 'School Management', question: `कृपया सांगा: शाळेचे नाव, विद्यार्थ्यांची संख्या आणि मॉड्यूल्स (प्रवेश, फी, वाहतूक, निकालपत्रक):` },
                    7: { name: 'Hotel/Restaurant POS', question: `कृपया सांगा: रेस्टॉरंटचे नाव, टेबलची संख्या आणि वेटरसाठी टॅब्लेट ऑर्डरिंग हवे आहे का:` },
                    8: { name: 'Custom Software', question: `कृपया सांगा: व्यवसायाचे नाव, उद्योग आणि तुमच्या कस्टमाइज्ड सॉफ्टवेअरच्या गरजा:` }
                }
            },
            8: {
                name: 'युआय/युएक्स डिझाईन',
                emoji: '🎨',
                menuText: `🎨 युआय/युएक्स डिझाईन (UI/UX Design)

निवडा:
1️⃣ मोबाईल ॲप डिझाईन (Mobile App Design)
2️⃣ वेबसाईट डिझाईन (Website Design)
3️⃣ डॅशबोर्ड डिझाईन (Dashboard Design)
4️⃣ लोगो डिझाईन (Logo Design)
5️⃣ ब्रँड आयडेंटिटी (Brand Identity)
6️⃣ संपूर्ण डिझाईन पॅकेज (Complete Design Package)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'Mobile App Design', question: `मोबाईल ॲप कशाबद्दल आहे? अंदाजे किती स्क्रीन्स असतील? संदर्भासाठी डिझाईन्स शेअर करा:` },
                    2: { name: 'Website Design', question: `वेसाईट कशाबद्दल आहे? किती पाने असतील? तुम्हाला आवडलेल्या वेबसाईटचे संदर्भ शेअर करा:` },
                    3: { name: 'Dashboard Design', question: `दाखवायचा डेटा, वापरकर्ते आणि हे कोणत्या प्लॅटफॉर्मवर बनणार आहे (वेब, डेस्कटॉप) ते सांगा:` },
                    4: { name: 'Logo Design', question: `व्यवसाय, ब्रँडची मूल्ये, आवडलेली शैली (मिनिमलिस्ट, बोल्ड, क्लासिक) आणि रंगांची आवड सांगा:` },
                    5: { name: 'Brand Identity', question: `तुम्हाला कोणत्या डिझाईन्स हव्या आहेत? (उदा. बिझनेस कार्ड, लेटरहेड, सोशल मीडिया टेम्पलेट्स):` },
                    6: { name: 'Complete Design Package', question: `कृपया सांगा: प्रकल्पाचा प्रकार, कंपनीचे नाव, ग्राहक वर्ग आणि डिझाईनचे एकूण काम:` }
                }
            },
            9: {
                name: 'सध्याच्या प्रकल्पाचे सहाय्य',
                emoji: '🛠',
                menuText: `🛠 सध्याच्या प्रकल्पाचे सहाय्य (Existing Project Support)

यासाठी मदत हवी आहे:
1️⃣ रिएक्ट (React)
2️⃣ नोड.जेएस (Node.js)
3️⃣ स्प्रिंग बूट (Spring Boot)
4️⃣ पायथन (Python)
5️⃣ डेटाबेस (Database)
6️⃣ बग फिक्सिंग (Bug Fixing)
7️⃣ डिप्लॉयमेंट (Deployment)
8️⃣ एपीआय डेव्हलपमेंट (API Development)
9️⃣ परफॉर्मन्स ऑप्टिमायझेशन (Performance Optimization)
🔟 इतर (Other)

कृपया पर्याय क्रमांक पाठवा.`,
                subOptions: {
                    1: { name: 'React Support', question: `कृपया तुमच्या रिएक्ट प्रकल्पातील समस्या, नवीन वैशिष्ट्ये किंवा बग्जबद्दल सांगा:` },
                    2: { name: 'Node.js Support', question: `कृपया तुमच्या नोड.जेएस बॅकएंडची समस्या, डेटाबेसची माहिती किंवा एपीआयबद्दल सांगा:` },
                    3: { name: 'Spring Boot Support', question: `कृपया तुमच्या स्प्रिंग बूट/जावा प्रकल्पातील अडचण आणि डेटाबेस पर्यावरणाबद्दल सांगा:` },
                    4: { name: 'Python Support', question: `कृपया तुमच्या पायथन/जँगो/फ्लास्क प्रकल्पाची माहिती आणि अडचण सांगा:` },
                    5: { name: 'Database Support', question: `तुम्ही कोणता डेटाबेस वापरता (MySQL, MongoDB, PostgreSQL)? क्वेरी किंवा स्केलिंगच्या समस्या सांगा:` },
                    6: { name: 'Bug Fixing', question: `कृपया असलेला बग, तो कसा ओळखायचा आणि सध्या वापरत असलेले तंत्रज्ञान याबद्दल सांगा:` },
                    7: { name: 'Deployment Support', question: `तुम्ही कुठे डिप्लॉय करत आहात (AWS, Vercel, VPS)? कोणती एरर येत आहे ते सांगा:` },
                    8: { name: 'API Development', question: `एपीआयच्या गरजा, आवश्यक एंडपॉइंट्स आणि जोडायच्या असलेल्या इतर सिस्टीम्स सांगा:` },
                    9: { name: 'Performance Optimization', question: `सध्याच्या परफॉर्मन्सच्या समस्या सांगा (हळू चालणारा डेटाबेस, लोड टाईम, जास्त सीपीयू वापर):` },
                    10: { name: 'Other Support', question: `कृपया तुमचे तंत्रज्ञान आणि आवश्यक असलेल्या मदतीबद्दल सांगा:` }
                }
            },
            10: {
                name: 'वैष्णवशी संपर्क साधा',
                emoji: '📞',
                menuText: `📞 संपर्क तपशील

वैष्णव घाडगे
📱 फोन: +91-7218329602
📧 ईमेल: vaishnavghadge99@gmail.com
🌐 वेबसाईट: https://vaishnav-portfolio-tau.vercel.app/

कामकाजाची वेळ:
सोमवार - शनिवार
सकाळी १०:०० ते संध्याकाळी ७:००

आमची टीम लवकरच तुमच्याशी संपर्क साधेल.
LeopardX Technologies आणि SARVOPrime निवडल्याबद्दल धन्यवाद ❤️`,
                subOptions: {
                    default: {
                        name: 'Contact Request',
                        question: `तुम्हाला तुमच्या व्यावसायिक गरजांसाठी वैष्णवने फोन किंवा ईमेल करावा असे वाटते का? (होय/नाही)`
                    }
                }
            }
        },
        leadSteps: [
            { key: 'name', prompt: `आम्ही तुमच्याशी संपर्क साधू शकू यासाठी कृपया काही जुजबी माहिती द्या.\n\n👤 तुमचे पूर्ण नाव काय आहे?` },
            { key: 'company', prompt: `🏢 तुमच्या कंपनीचे नाव काय आहे? (नसल्यास 'None' लिहा)` },
            { key: 'budget', prompt: `💰 या प्रकल्पासाठी तुमचे अंदाजे बजेट किती आहे? (उदा. ₹२०,०००–₹५०,०००)` }
        ],
        confirmationMessage: (service, subService, leadData) => `✅ धन्यवाद! आम्हाला तुमच्या प्रकल्पाची माहिती मिळाली आहे.

📋 सारांश:
• सेवा: ${service.emoji} ${service.name} (${subService.name})
• नाव: ${leadData.name}
• कंपनी: ${leadData.company}
• बजेट: ${leadData.budget}

तुमची विनंती वैष्णवकडे पाठवली आहे. ते २४ तासांच्या आत तुमच्याशी संपर्क साधतील.

LeopardX Technologies आणि SARVOPrime निवडल्याबद्दल धन्यवाद! 🚀`,
        callbackExitMsg: `LeopardX Technologies आणि SARVOPrime शी संपर्क साधल्याबद्दल धन्यवाद. आमच्या सेवा पाहण्यासाठी कोणत्याही वेळी *menu* किंवा *reset* लिहू शकता. तुमचा दिवस चांगला जावो! ❤️`
    },
    hi: {
        thankYouReplies: ['धन्यवाद', 'थैंक्स', 'थैंक्यू', 'थैंक यू', 'शुक्रिया', 'thank you', 'thanks'],
        thankYouResponse: `आपका स्वागत है! हमारी सेवाएं देखने के लिए आप किसी भी समय *menu* या *reset* लिख सकते हैं। आपका दिन शुभ हो! 🚀`,
        fallbackResponse: `आपके संदेश के लिए धन्यवाद। वैष्णव जल्द ही आपसे संपर्क करेंगे।

हमारी विशेष सेवाओं के विकल्प देखने के लिए किसी भी समय *menu* या *reset* लिखें।`,
        invalidMenuOption: `⚠️ अमान्य विकल्प। कृपया १ से १० के बीच की संख्या भेजें।`,
        invalidSubOption: `⚠️ अमान्य विकल्प। कृपया ऊपर मेनू में दी गई संख्याओं में से एक चुनें।`,
        mainMenu: `👋 नमस्कार! मैं वैष्णव का एआई (AI) सहायक हूँ।

LeopardX Technologies और SARVOPrime से संपर्क करने के लिए धन्यवाद। 🚀

हम निम्नलिखित सेवाओं में विशेषज्ञ हैं:

1️⃣ वेब डेवलपमेंट (Web Development)
2️⃣ मोबाइल ऐप डेवलपमेंट (Mobile App Development)
3️⃣ एआई एजेंट डेवलपमेंट (AI Agent Development)
4️⃣ डिजिटल मार्केटिंग (Digital Marketing)
5️⃣ पोर्टफोलियो वेबसाइट (Portfolio Website)
6️⃣ व्हाट्सएप बॉट डेवलपमेंट (WhatsApp Bot Development)
7️⃣ सॉफ्टवेयर डेवलपमेंट (Software Development)
8️⃣ यूआई/यूएक्स डिज़ाइन (UI/UX Design)
9️⃣ मौजूदा प्रोजेक्ट सपोर्ट (Existing Project Support)
🔟 वैष्णव से संपर्क करें (Contact Vaishnav)

कृपया अपनी पसंद का नंबर भेजें।`,
        services: {
            1: {
                name: 'वेब डेवलपमेंट',
                emoji: '🌐',
                menuText: `🌐 वेब डेवलपमेंट (Web Development)

हम बनाते हैं:
1️⃣ बिजनेस वेबसाइट (Business Website)
2️⃣ ई-कॉमर्स वेबसाइट (E-Commerce Website)
3️⃣ कंपनी वेबसाइट (Company Website)
4️⃣ स्कूल/कॉलेज ईआरपी (School/College ERP)
5️⃣ रेस्टोरेंट मैनेजमेंट सिस्टम (Restaurant Management System)
6️⃣ कस्टम वेब एप्लिकेशन (Custom Web Application)
7️⃣ सास प्रोडक्ट (SaaS Product)
8️⃣ अन्य (Other)

कृपया अपना विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Business Website', question: `बहुत बढ़िया!\nकृपया जानकारी दें:\n✅ व्यवसाय का नाम (Business Name)\n✅ व्यवसाय का प्रकार (Business Type)\n✅ क्या आपके पास पहले से डोमेन है? (हाँ/नहीं)` },
                    2: { name: 'E-Commerce Website', question: `कृपया उत्तर दें:\n1️⃣ कितने प्रोडक्ट्स हैं?\n2️⃣ पेमेंट गेटवे आवश्यक है?\n3️⃣ डिलीवरी उपलब्ध है?\n4️⃣ इन्वेंटरी मैनेजमेंट आवश्यक है?\n\nअपना उत्तर भेजें।` },
                    3: { name: 'Company Website', question: `कृपया अपनी कंपनी का नाम, उद्योग और वेबसाइट पर आपको किन सेक्शन्स/पेजों की आवश्यकता है, बताएं:` },
                    4: { name: 'School/College ERP', question: `कृपया आवश्यक मॉड्यूल्स (जैसे छात्र प्रबंधन, शुल्क प्रबंधन, परीक्षा, स्टाफ उपस्थिति) और संस्थान का आकार बताएं:` },
                    5: { name: 'Restaurant Management System', question: `कृपया अपनी आवश्यकता बताएं (जैसे टेबल बुकिंग, ऑनलाइन ऑर्डरिंग, बिलिंग, KOT सिस्टम):` },
                    6: { name: 'Custom Web Application', question: `अपने कस्टम वेब ऐप के विचार के बारे में बताएं (विशेषताएं, मुख्य उपयोगकर्ता और वर्कफ्लो):` },
                    7: { name: 'SaaS Product', question: `अपने सास (SaaS) विचार के बारे में बताएं।\nउदाहरण:\n• होटल प्रबंधन\n• फार्मेसी\n• सीआरएम (CRM)\n• एचआरएमएस (HRMS)\n• शिक्षा\n• स्वास्थ्य सेवा\n\nअपने प्रोजेक्ट का संक्षेप में वर्णन करें।` },
                    8: { name: 'Other Web Development', question: `कृपया अपनी विशिष्ट वेब डेवलपमेंट आवश्यकताओं का वर्णन करें:` }
                }
            },
            2: {
                name: 'मोबाइल ऐप डेवलपमेंट',
                emoji: '📱',
                menuText: `📱 मोबाइल ऐप डेवलपमेंट (Mobile App Development)

ऐप का प्रकार चुनें:
1️⃣ एंड्रॉइड ऐप (Android App)
2️⃣ आईफोन ऐप (iPhone App)
3️⃣ क्रॉस प्लेटफॉर्म ऐप (Cross Platform App)
4️⃣ बिजनेस ऐप (Business App)
5️⃣ फूड डिलीवरी ऐप (Food Delivery App)
6️⃣ बुकिंग ऐप (Booking App)
7️⃣ कस्टम ऐप (Custom App)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Android App', question: `बहुत बढ़िया!\nकृपया हमें बताएं:\n• व्यवसाय का नाम\n• ऐप की श्रेणी (Category)\n• उपयोगकर्ताओं की अनुमानित संख्या\n• संदर्भ के लिए कोई ऐप? (जैसे Swiggy, Amazon, Instagram, Uber)` },
                    2: { name: 'iPhone App', question: `बहुत बढ़िया!\nकृपया हमें बताएं:\n• व्यवसाय का नाम\n• ऐप की श्रेणी\n• संदर्भ ऐप (यदि कोई हो)` },
                    3: { name: 'Cross Platform App', question: `कृपया बताएं:\n• लक्षित प्लेटफॉर्म (Android और iOS दोनों?)\n• व्यवसाय का नाम\n• मुख्य विशेषताएं` },
                    4: { name: 'Business App', question: `कृपया अपने व्यवसाय, इस ऐप के उद्देश्य और आवश्यक विशेषताओं के बारे में बताएं:` },
                    5: { name: 'Food Delivery App', question: `क्या आपको एक रेस्टोरेंट के लिए डिलीवरी ऐप चाहिए या मल्टी-वेंडर ऐप (Swiggy/Zomato जैसा)? विवरण दें:` },
                    6: { name: 'Booking App', question: `यह किस प्रकार का बुकिंग ऐप है? (जैसे सैलून, डॉक्टर अपॉइंटमेंट, टिकट, होटल बुकिंग):` },
                    7: { name: 'Custom App', question: `कृपया अपने कस्टम मोबाइल ऐप की विशेषताओं और लक्षित ग्राहकों के बारे में बताएं:` }
                }
            },
            3: {
                name: 'एआई एजेंट डेवलपमेंट',
                emoji: '🤖',
                menuText: `🤖 एआई एजेंट डेवलपमेंट (AI Agent Development)

एक समाधान चुनें:
1️⃣ कस्टमर सपोर्ट बॉट (Customer Support Bot)
2️⃣ व्हाट्सएप एआई बॉट (WhatsApp AI Bot)
3️⃣ वॉयस एआई एजेंट (Voice AI Agent)
4️⃣ एआई सेल्स एजेंट (AI Sales Agent)
5️⃣ एआई अपॉइंटमेंट बुकिंग (AI Appointment Booking)
6️⃣ आंतरिक कंपनी एआई (Internal Company AI)
7️⃣ एआई ऑटोमेशन (AI Automation)
8️⃣ कस्टम एआई समाधान (Custom AI Solution)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Customer Support Bot', question: `कृपया बताएं: यह बॉट किस प्लेटफॉर्म पर चलेगा (वेब, डिस्कॉर्ड, टेलीग्राम)? इसे किस डेटाबेस/दस्तावेजों से सीखना चाहिए?` },
                    2: { name: 'WhatsApp AI Bot', question: `बहुत बढ़िया!\nकृपया उत्तर दें:\n• व्यवसाय का नाम\n• बॉट को क्या करना चाहिए?\n(जैसे सवालों के जवाब देना, ऑर्डर लेना, अपॉइंटमेंट बुक करना, कस्टमर सपोर्ट)\n\nअपनी आवश्यकता का वर्णन करें।` },
                    3: { name: 'Voice AI Agent', question: `वॉयस एजेंट को कौन सी भाषाएं बोलनी चाहिए? मुख्य काम क्या है (जैसे इनबाउंड सपोर्ट, आउटबाउंड कॉल्स)?` },
                    4: { name: 'AI Sales Agent', question: `कृपया अपने उत्पाद/सेवा के बारे में बताएं और बताएं कि एआई को बिक्री कैसे संभालनी चाहिए:` },
                    5: { name: 'AI Appointment Booking', question: `आप कौन सा शेड्यूलिंग सॉफ़्टवेयर उपयोग करते हैं (Google Calendar, Calendly)? बुकिंग के नियम बताएं:` },
                    6: { name: 'Internal Company AI', question: `कंपनी के आंतरिक डेटा स्रोतों (जैसे पीडीएफ दस्तावेज, डेटाबेस) के बारे में बताएं और कौन इसका उपयोग करेगा:` },
                    7: { name: 'AI Automation', question: `आप किन कामों को स्वचालित (automate) करना चाहते हैं? प्रक्रिया का वर्णन करें (जैसे ईमेल जनरेशन, रिपोर्ट्स):` },
                    8: { name: 'Custom AI Solution', question: `कृपया अपनी कस्टम एआई (AI) आवश्यकताओं के बारे में बताएं:` }
                }
            },
            4: {
                name: 'डिजिटल मार्केटिंग',
                emoji: '📈',
                menuText: `📈 डिजिटल मार्केटिंग (Digital Marketing)

अपनी सेवा चुनें:
1️⃣ सोशल मीडिया प्रबंधन (Social Media Management)
2️⃣ इंस्टाग्राम मार्केटिंग (Instagram Marketing)
3️⃣ फेसबुक मार्केटिंग (Facebook Marketing)
4️⃣ गूगल एड्स (Google Ads)
5️⃣ एसईओ (SEO)
6️⃣ ब्रांडिंग (Branding)
7️⃣ वीडियो एडिटिंग (Video Editing)
8️⃣ संपूर्ण मार्केटिंग पैकेज (Complete Marketing Package)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Social Media Management', question: `कृपया जानकारी दें:\n• व्यवसाय का नाम\n• इंस्टाग्राम लिंक\n• फेसबुक पेज\n• वर्तमान फॉलोअर्स\n• उद्देश्य (जैसे बिक्री बढ़ाना, फॉलोअर्स बढ़ाना, ब्रांड अवेयरनेस)` },
                    2: { name: 'Instagram Marketing', question: `कृपया अपना इंस्टाग्राम हैंडल भेजें और बताएं कि आप क्या बेचते या प्रमोट करते हैं:` },
                    3: { name: 'Facebook Marketing', question: `कृपया अपने फेसबुक पेज का लिंक भेजें और अपने लक्षित ग्राहकों के बारे में बताएं:` },
                    4: { name: 'Google Ads', question: `आप किन उत्पादों/सेवाओं का विज्ञापन कर रहे हैं? विज्ञापनों के लिए आपका मासिक बजट क्या है?` },
                    5: { name: 'SEO', question: `कृपया अपनी वेबसाइट का लिंक भेजें और गूगल पर रैंक करने के लिए ३-५ कीवर्ड बताएं:` },
                    6: { name: 'Branding', question: `क्या आपको एक नया लोगो, कलर पैलेट या पूरी ब्रांड पहचान बदलनी है? अपनी कल्पना बताएं:` },
                    7: { name: 'Video Editing', question: `किस प्रकार के वीडियो (Reels/Shorts, YouTube, जाहिरात)? वीडियो की लंबाई और आवृत्ति बताएं:` },
                    8: { name: 'Complete Marketing Package', question: `कृपया अपने व्यवसाय, वर्तमान मार्केटिंग गतिविधियों और कुल बजट के बारे में बताएं:` }
                }
            },
            5: {
                name: 'पोर्टफोलियो वेबसाइट',
                emoji: '💼',
                menuText: `💼 पोर्टफोलियो वेबसाइट (Portfolio Website)

यह किसके लिए है?
1️⃣ छात्र (Student)
2️⃣ फ्रीलांसर (Freelancer)
3️⃣ कंपनी (Company)
4️⃣ नौकरी चाहने वाले (Job Seeker)
5️⃣ फोटोग्राफर (Photographer)
6️⃣ डॉक्टर (Doctor)
7️⃣ आर्किटेक्ट (Architect)
8️⃣ अन्य (Other)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Student Portfolio', question: `कृपया भेजें:\n• आपका नाम\n• कॉलेज\n• कोर्स/शाखा\n• कौशल (Skills)\n• प्रोजेक्ट्स\n• बायोडाटा/रिज्यूम (वैकल्पिक)\n• लिंक्डइन प्रोफाइल (वैकल्पिक)` },
                    2: { name: 'Freelancer Portfolio', question: `कृपया अपना नाम, काम का क्षेत्र, मुख्य कौशल और पिछले काम के नमूने भेजें:` },
                    3: { name: 'Company Portfolio', question: `कृपया अपनी कंपनी का नाम, उद्योग, सेवाओं की सूची और मुख्य प्रोजेक्ट्स के बारे में बताएं:` },
                    4: { name: 'Job Seeker Portfolio', question: `कृपया अपना नाम, लक्षित जॉब रोल, अनुभव के वर्ष और प्रमुख उपलब्धियां भेजें:` },
                    5: { name: 'Photographer Portfolio', question: `आप किस प्रकार की फोटोग्राफी में विशेषज्ञ हैं? क्या आपको वीडियो गैलरी चाहिए?` },
                    6: { name: 'Doctor Portfolio', question: `कृपया अपना नाम, विशेषज्ञता, क्लिनिक का विवरण और अपॉइंटमेंट बुकिंग लिंक चाहिए तो बताएं:` },
                    7: { name: 'Architect Portfolio', question: `क्या आप 3D मॉडल/तस्वीरें दिखाना चाहते हैं? आवश्यक अनुभागों (sections) के बारे में बताएं:` },
                    8: { name: 'Other Portfolio', question: `कृपया बताएं कि आपको किस प्रकार की पोर्टफोलियो वेबसाइट चाहिए और क्या विवरण दिखाना है:` }
                }
            },
            6: {
                name: 'व्हाट्सएप बॉट डेवलपमेंट',
                emoji: '🤖',
                menuText: `🤖 व्हाट्सएप बॉट डेवलपमेंट (WhatsApp Bot Development)

बॉट का प्रकार चुनें:
1️⃣ व्यक्तिगत व्हाट्सएप बॉट (Personal WhatsApp Bot)
2️⃣ व्यावसायिक व्हाट्सएप बॉट (Business WhatsApp Bot)
3️⃣ कस्टमर सपोर्ट बॉट (Customer Support Bot)
4️⃣ एआई व्हाट्सएप सहायक (AI WhatsApp Assistant)
5️⃣ ऑर्डर मैनेजमेंट बॉट (Order Management Bot)
6️⃣ बुकिंग बॉट (Booking Bot)
7️⃣ लीड जनरेशन बॉट (Lead Generation Bot)
8️⃣ कस्टम बॉट (Custom Bot)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Personal WhatsApp Bot', question: `बहुत बढ़िया!\nआपका व्यक्तिगत बॉट क्या काम करेगा? (जैसे ऑटो रिप्लाई, कस्टम शुभकामनाएं, रिमाइंडर्स):` },
                    2: { name: 'Business WhatsApp Bot', question: `कृपया बताएं:\n• व्यवसाय का नाम\n• उद्योग क्षेत्र\n• अनुमानित मासिक संदेश\n• आवश्यक विशेषताएं (जैसे ऑटो रिप्लाई, ऑर्डर ट्रैकिंग, भुगतान, एआई चैट, अपॉइंटमेंट बुकिंग, सीआरएम एकीकरण)\n\nअपनी आवश्यकताओं का वर्णन करें.` },
                    3: { name: 'Customer Support Bot', question: `यह बॉट किस सिस्टम (CRM, Helpdesk) के साथ एकीकृत होगा? अपने अक्सर पूछे जाने वाले प्रश्न बताएं:` },
                    4: { name: 'AI WhatsApp Assistant', question: `इसे किस एआई मॉडल का उपयोग करना चाहिए (ChatGPT, Claude)? इसके नियम और निर्देश बताएं:` },
                    5: { name: 'Order Management Bot', question: `आपकी दुकान किस प्लेटफॉर्म पर है (Shopify, WooCommerce)? ऑर्डर की प्रक्रिया बताएं:` },
                    6: { name: 'Booking Bot', question: `अपनी बुकिंग सेवाओं, उपलब्धता के नियमों और बुकिंग के समय भुगतान की आवश्यकता बताएं:` },
                    7: { name: 'Lead Generation Bot', question: `आपको कौन से विवरण एकत्र करने हैं? इसे किस गूगल शीट या CRM में सहेजना है?` },
                    8: { name: 'Custom Bot', question: `कृपया अपने कस्टम व्हाट्सएप बॉट की आवश्यकताओं और विशेषताओं के बारे में बताएं:` }
                }
            },
            7: {
                name: 'सॉफ्टवेयर डेवलपमेंट',
                emoji: '💻',
                menuText: `💻 सॉफ्टवेयर डेवलपमेंट (Software Development)

सॉफ्टवेयर चुनें:
1️⃣ बिलिंग सॉफ्टवेयर (Billing Software)
2️⃣ इन्वेंटरी मैनेजमेंट (Inventory Management)
3️⃣ ईआरपी सिस्टम (ERP System)
4️⃣ सीआरएम (CRM)
5️⃣ अस्पताल प्रबंधन (Hospital Management)
6️⃣ स्कूल प्रबंधन (School Management)
7️⃣ होटल/रेस्टोरेंट पीओएस (Hotel/Restaurant POS)
8️⃣ कस्टम सॉफ्टवेयर (Custom Software)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Billing Software', question: `कृपया बताएं: व्यवसाय का नाम, उद्योग और यह किस सिस्टम पर चलेगा (डेस्कटॉप, पीओएस टर्मिनल):` },
                    2: { name: 'Inventory Management', question: `कृपया बताएं: व्यवसाय का नाम, उत्पादों की अनुमानित संख्या और क्या बारकोड स्कैनिंग आवश्यक है:` },
                    3: { name: 'ERP System', question: `कृपया बताएं: व्यवसाय का नाम, उद्योग और आवश्यक मॉड्यूल (जैसे एचआर, फाइनेंस, खरीद, बिक्री):` },
                    4: { name: 'CRM', question: `कृपया बताएं: व्यवसाय का नाम, सेल्स टीम के लोगों की संख्या और कौन से चैनल ट्रैक करने हैं:` },
                    5: { name: 'Hospital Management', question: `कृपया बताएं: अस्पताल का नाम, बेड/विभागों की संख्या और आवश्यक मॉड्यूल (ओपीडी, आईपीडी, बिलिंग, फार्मेसी):` },
                    6: { name: 'School Management', question: `कृपया बताएं: स्कूल का नाम, छात्रों की संख्या और मॉड्यूल (प्रवेश, शुल्क, परिवहन, रिपोर्ट कार्ड):` },
                    7: { name: 'Hotel/Restaurant POS', question: `कृपया बताएं: रेस्टोरेंट का नाम, टेबल की संख्या और क्या वेटर के लिए टैबलेट ऑर्डरिंग चाहिए:` },
                    8: { name: 'Custom Software', question: `कृपया बताएं: व्यवसाय का नाम, उद्योग और आपके कस्टम सॉफ़्टवेयर की आवश्यकताएं:` }
                }
            },
            8: {
                name: 'यूआई/यूएक्स डिज़ाइन',
                emoji: '🎨',
                menuText: `🎨 यूआई/यूएक्स डिज़ाइन (UI/UX Design)

चुनें:
1️⃣ मोबाइल ऐप डिज़ाइन (Mobile App Design)
2️⃣ वेबसाइट डिज़ाइन (Website Design)
3️⃣ डैशबोर्ड डिज़ाइन (Dashboard Design)
4️⃣ लोगो डिज़ाइन (Logo Design)
5️⃣ ब्रांड पहचान (Brand Identity)
6️⃣ संपूर्ण डिज़ाइन पैकेज (Complete Design Package)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'Mobile App Design', question: `मोबाइल ऐप किस बारे में है? अनुमानित रूप से कितनी स्क्रीन होंगी? संदर्भ डिज़ाइन साझा करें:` },
                    2: { name: 'Website Design', question: `वेबसाइट किस बारे में है? कितने पेज होंगे? आपको पसंद आने वाली वेबसाइटों के संदर्भ साझा करें:` },
                    3: { name: 'Dashboard Design', question: `दिखाने वाला डेटा, उपयोगकर्ता और यह किस प्लेटफॉर्म पर बनेगा (वेब, डेस्कटॉप) बताएं:` },
                    4: { name: 'Logo Design', question: `व्यवसाय, ब्रांड के मूल्य, पसंद की शैली (मिनिमलिस्ट, बोल्ड, क्लासिक) और रंगों की पसंद बताएं:` },
                    5: { name: 'Brand Identity', question: `आपको कौन से डिज़ाइन चाहिए? (जैसे बिजनेस कार्ड, लेटरहेड, सोशल मीडिया टेम्प्लेट):` },
                    6: { name: 'Complete Design Package', question: `कृपया बताएं: प्रोजेक्ट का प्रकार, कंपनी का नाम, लक्षित ग्राहक और डिज़ाइन का कुल दायरा:` }
                }
            },
            9: {
                name: 'मौजूदा प्रोजेक्ट सपोर्ट',
                emoji: '🛠',
                menuText: `🛠 मौजूदा प्रोजेक्ट सपोर्ट (Existing Project Support)

मदद की आवश्यकता है:
1️⃣ रिएक्ट (React)
2️⃣ नोड.जेएस (Node.js)
3️⃣ स्प्रिंग बूट (Spring Boot)
4️⃣ पायथन (Python)
5️⃣ डेटाबेस (Database)
6️⃣ बग फिक्सिंग (Bug Fixing)
7️⃣ परिनियोजन/डेवलपमेंट (Deployment)
8️⃣ एपीआई डेवलपमेंट (API Development)
9️⃣ प्रदर्शन अनुकूलन (Performance Optimization)
🔟 अन्य (Other)

कृपया विकल्प नंबर भेजें।`,
                subOptions: {
                    1: { name: 'React Support', question: `कृपया अपने रिएक्ट प्रोजेक्ट की समस्या, नई विशेषताएं या कीड़े (bugs) बताएं:` },
                    2: { name: 'Node.js Support', question: `कृपया अपने नोड.जेएस बैकएंड की समस्या, डेटाबेस विवरण या एपीआई के बारे में बताएं:` },
                    3: { name: 'Spring Boot Support', question: `कृपया अपने स्प्रिंग बूट/जावा प्रोजेक्ट की समस्या और डेटाबेस वातावरण के बारे में बताएं:` },
                    4: { name: 'Python Support', question: `कृपया अपने पायथन/जैंगो/फ्लास्क प्रोजेक्ट का विवरण और समस्या बताएं:` },
                    5: { name: 'Database Support', question: `आप किस डेटाबेस का उपयोग कर रहे हैं (MySQL, MongoDB, PostgreSQL)? क्वेरी या स्केलिंग की समस्याएं बताएं:` },
                    6: { name: 'Bug Fixing', question: `कृपया बग, उसे दोहराने का तरीका और वर्तमान तकनीक (stack) के बारे में बताएं:` },
                    7: { name: 'Deployment Support', question: `आप कहाँ डिप्लॉय कर रहे हैं (AWS, Vercel, VPS)? आपको क्या त्रुटि (error) मिल रही है?` },
                    8: { name: 'API Development', question: `एपीआई की आवश्यकताएं, आवश्यक एंडपॉइंट्स और एकीकृत करने वाली अन्य प्रणालियां बताएं:` },
                    9: { name: 'Performance Optimization', question: `प्रदर्शन संबंधी समस्याएं बताएं (धीमा डेटाबेस, लोड टाइम, अधिक सीपीयू उपयोग):` },
                    10: { name: 'Other Support', question: `कृपया अपनी तकनीक और आवश्यक सहायता के बारे में बताएं:` }
                }
            },
            10: {
                name: 'वैष्णव से संपर्क करें',
                emoji: '📞',
                menuText: `📞 संपर्क विवरण

वैष्णव घाडगे
📱 फोन: +91-7218329602
📧 ईमेल: vaishnavghadge99@gmail.com
🌐 वेबसाइट: https://vaishnav-portfolio-tau.vercel.app/

कार्य समय:
सोमवार - शनिवार
सुबह १०:०० से शाम ७:००

हमारी टीम जल्द ही आपसे संपर्क करेगी।
LeopardX Technologies और SARVOPrime चुनने के लिए धन्यवाद ❤️`,
                subOptions: {
                    default: {
                        name: 'Contact Request',
                        question: `क्या आप चाहते हैं कि वैष्णव आपकी व्यावसायिक आवश्यकताओं के संबंध में आपको फोन या ईमेल करें? (हाँ/नहीं)`
                    }
                }
            }
        },
        leadSteps: [
            { key: 'name', prompt: `आइए कुछ त्वरित विवरण एकत्र करें ताकि हम आपसे संपर्क कर सकें।\n\n👤 आपका पूरा नाम क्या है?` },
            { key: 'company', prompt: `🏢 आपकी कंपनी का नाम क्या है? (यदि लागू न हो तो 'None' लिखें)` },
            { key: 'budget', prompt: `💰 इस प्रोजेक्ट के लिए आपका अनुमानित बजट कितना है? (जैसे ₹२०,०००–₹५०,०००)` }
        ],
        confirmationMessage: (service, subService, leadData) => `✅ धन्यवाद! हमें आपके प्रोजेक्ट का विवरण मिल गया है।

📋 सारांश:
• सेवा: ${service.emoji} ${service.name} (${subService.name})
• नाम: ${leadData.name}
• कंपनी: ${leadData.company}
• बजट: ${leadData.budget}

आपका अनुरोध वैष्णव के पास भेज दिया गया है। वे २४ घंटे के भीतर आपसे संपर्क करेंगे।

LeopardX Technologies और SARVOPrime चुनने के लिए धन्यवाद! 🚀`,
        callbackExitMsg: `LeopardX Technologies और SARVOPrime से संपर्क करने के लिए धन्यवाद। हमारी सेवाएं देखने के लिए किसी भी समय *menu* या *reset* लिख सकते हैं। आपका दिन शुभ हो! ❤️`
    }
};

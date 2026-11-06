import sgImgS1 from '/public/images/service-single/web/img-1.jpg'
import sgImgS2 from '/public/images/service-single/web/img-2.jpg'
import sgImgS3 from '/public/images/service-single/web/img-3.jpg'

import brImgS1 from '/public/images/service-single/app/img-1.jpg'
import brImgS2 from '/public/images/service-single/app/img-2.jpg'
import brImgS3 from '/public/images/service-single/app/img-3.jpg'

import uxImgS1 from '/public/images/service-single/brand/img-1.jpg'
import uxImgS2 from '/public/images/service-single/brand/img-2.jpg'
import uxImgS3 from '/public/images/service-single/brand/img-3.jpg'

import dvImgS1 from '/public/images/service-single/market/img-1.jpg'
import dvImgS2 from '/public/images/service-single/market/img-2.jpg'
import dvImgS3 from '/public/images/service-single/market/img-3.jpg'

export const serviceDetailData = {
    'Website Development': {
        id: '1',
        title: 'Website Development',
        subheadline: 'Modern websites that turn visitors into customers.',
        description1: 'Your website is often the first impression people have of your business. I build professional, responsive websites that communicate your value, showcase your work, and make it easy for potential customers to take the next step.',
        description2: 'From business landing pages to multi-page corporate websites, I focus on clean design, smooth navigation, fast loading, and a consistent experience across mobile, tablet, and desktop.',
        defaultImg: sgImgS1,
        img1: sgImgS2,
        img2: sgImgS3,
        capabilitiesIntro: 'I build websites around your business goals, audience, and content. Every section has a purpose, whether it is explaining your services, presenting your projects, building credibility, or encouraging visitors to contact you.',
        deliverables: [
            'Custom website layouts that match your brand and business goals.',
            'Responsive pages that work smoothly across screen sizes.',
            'Interactive sections, enquiry forms, and WhatsApp contact integration.',
            'SEO-friendly page structure, metadata, and clean URLs.',
            'Performance optimization, accessibility improvements, and maintainable code.'
        ],
        approach: 'I start by understanding your business, your audience, and what you want the website to achieve. Then I plan the page structure, develop the design into a working website, and refine the experience based on feedback. The goal is not simply to make a website look good, but to make it useful, clear, and easy for your customers to navigate.',
        workProcess: [
            '1. Understand: Discuss your business, audience, requirements, and goals.',
            '2. Plan: Organize the pages, content, visual direction, and key actions.',
            '3. Develop: Build the responsive website and integrate required functionality.',
            '4. Test & Launch: Check responsiveness, forms, performance, and essential SEO before deployment.'
        ],
        relatedServices: [
            {
                title: 'Web Application Development',
                icon: 'flaticon-smartphone',
                description: 'From interactive dashboards to custom business applications tailored to your workflows.'
            },
            {
                title: 'CMS & WordPress Development',
                icon: 'flaticon-palette',
                description: 'Easy-to-manage websites and CMS solutions that let you update pages with ease.'
            },
            {
                title: 'Technical SEO & Website Performance',
                icon: 'flaticon-bar-chart',
                description: 'Clean URLs, fast page loading, and structured metadata for search visibility.'
            }
        ],
        contactTitle: "Have a website project in mind? Let's discuss.",
        contactSubtitle: "Tell me about your business, your goals, and the website you want to build. I'll help you understand the right approach and the next steps."
    },

    'Web Application Development': {
        id: '2',
        title: 'Web Application Development',
        subheadline: 'Turn complex workflows into simple, useful applications.',
        description1: 'When spreadsheets, manual processes, or disconnected tools make work difficult, a custom web application can bring everything together. I develop interactive applications that help businesses manage information, simplify tasks, and work more efficiently.',
        description2: "From admin dashboards and user portals to data-driven platforms, I build practical solutions with clear interfaces, reliable backend functionality, and secure data handling appropriate to the project's needs.",
        defaultImg: brImgS1,
        img1: brImgS2,
        img2: brImgS3,
        capabilitiesIntro: 'I develop the frontend, backend integrations, and data workflows needed to turn an idea into a working application. The technology and architecture depend on the features, scale, and requirements of your project.',
        deliverables: [
            'Interactive dashboards, admin panels, and user portals.',
            'User registration, login, and role-based access where required.',
            'Database integration and structured data management.',
            'REST API integration for communication between services.',
            'Search, filters, forms, reports, and workflow automation features.'
        ],
        approach: 'Before writing code, I focus on understanding how the application will be used. Who needs access? What tasks should they complete? What information must be stored? Answering these questions helps shape an application that feels straightforward to use while supporting the actual business process behind it.',
        workProcess: [
            '1. Discover: Identify the users, business problem, and essential features.',
            '2. Design: Map the user journey, screens, data structure, and permissions.',
            '3. Build: Develop the interface, application logic, database connections, and integrations.',
            '4. Validate: Test important workflows, access rules, error handling, and responsive behaviour before release.'
        ],
        relatedServices: [
            {
                title: 'SaaS & Custom Software',
                icon: 'flaticon-bar-chart',
                description: 'Turning ideas into functional web products, from MVPs to custom features.'
            },
            {
                title: 'CMS & WordPress Development',
                icon: 'flaticon-palette',
                description: 'Manage your website pages and business content without depending on a developer.'
            },
            {
                title: 'API & Backend Integration',
                icon: 'flaticon-coding',
                description: 'Robust server architecture and reliable communication between services.'
            }
        ],
        contactTitle: "Need an application built around your workflow? Let's talk.",
        contactSubtitle: "Share the process you want to improve or the application idea you have in mind. We can identify the essential features and build from a clear, practical starting point."
    },

    'CMS & WordPress Development': {
        id: '3',
        title: 'CMS & WordPress Development',
        subheadline: 'Manage your website without depending on a developer for every update.',
        description1: 'Your business changes, and your website should be able to change with it. I build WordPress websites and custom content management solutions that help you update pages, publish content, manage projects, and keep your online presence current.',
        description2: 'Whether you need a company website or a custom admin panel, I focus on making everyday content management simple while keeping the public website professional, responsive, and easy to maintain.',
        defaultImg: uxImgS1,
        img1: uxImgS2,
        img2: uxImgS3,
        capabilitiesIntro: 'A CMS gives your team control over website content through an administrative interface instead of requiring changes directly in the code. I can help you choose and implement an approach that matches how your business operates.',
        deliverables: [
            'WordPress website development, theme customization, and plugin integration.',
            'Custom CMS dashboards for managing pages, projects, and other content.',
            'Add, edit, delete, and publish workflows based on your requirements.',
            'Admin access controls and content management permissions.',
            'Responsive website layouts, SEO-friendly structures, and maintainable content workflows.'
        ],
        approach: 'I begin by identifying what your team needs to manage and how frequently that content changes. Then I structure the CMS around those tasks, keeping the editing experience understandable and avoiding unnecessary complexity. The result should make routine updates easier while preserving the consistency of your website.',
        workProcess: [
            '1. Understand: Identify the content, users, and updates your team needs to manage.',
            '2. Structure: Plan content types, fields, permissions, and admin screens.',
            '3. Implement: Develop the website and CMS, including the required database operations.',
            '4. Test & Handover: Validate content updates and permissions, then explain how to use the system.'
        ],
        relatedServices: [
            {
                title: 'Website Development',
                icon: 'flaticon-vector',
                description: 'Modern, responsive websites that showcase your business and convert visitors.'
            },
            {
                title: 'Web Application Development',
                icon: 'flaticon-smartphone',
                description: 'Custom business applications and dashboards tailored to your workflows.'
            },
            {
                title: 'Technical SEO & Website Performance',
                icon: 'flaticon-bar-chart',
                description: 'Speed optimization, structured data, and search engine friendly architecture.'
            }
        ],
        contactTitle: "Want more control over your website? Let's discuss.",
        contactSubtitle: "Tell me what you currently update manually and what you want to manage yourself. I'll help you plan a website and content management setup that fits your workflow."
    },

    'SaaS & Custom Software': {
        id: '4',
        title: 'SaaS & Custom Software Development',
        subheadline: 'From your first idea to a working digital product.',
        description1: 'Have an idea for a software product, subscription platform, or business tool? I help turn that idea into a practical application with the features your users actually need. We can start with the core functionality and build a solid foundation for future improvements.',
        description2: 'From MVPs and admin panels to user management, database integration, and custom workflows, I focus on building software that solves a real problem without making the product unnecessarily complicated.',
        defaultImg: dvImgS1,
        img1: dvImgS2,
        img2: dvImgS3,
        capabilitiesIntro: 'A successful software product needs more than a polished interface. It needs clearly defined features, sensible data handling, and workflows that make sense to its users. I help translate your requirements into a working product using appropriate frontend and backend technologies.',
        deliverables: [
            'MVP development to validate an idea with essential features.',
            'SaaS dashboards, admin panels, and user-facing interfaces.',
            'Authentication, user roles, and permission-based functionality.',
            'Database design, API integrations, and business workflow implementation.',
            'Modular application architecture that supports future enhancements.'
        ],
        approach: 'Building everything at once can waste time and budget. I prefer to identify the most important problem first, define the minimum features needed to solve it, and develop those features in manageable stages. This gives you something concrete to review early and helps guide future development based on actual requirements.',
        workProcess: [
            '1. Define: Understand the problem, target users, core features, and priorities.',
            '2. Plan: Map the user journey, technical structure, data requirements, and development stages.',
            '3. Develop: Build the interface, backend functionality, integrations, and essential workflows.',
            '4. Test & Improve: Validate the main use cases, resolve issues, and prepare the product for deployment.'
        ],
        relatedServices: [
            {
                title: 'Web Application Development',
                icon: 'flaticon-smartphone',
                description: 'Interactive portals, custom tools, and automated business workflows.'
            },
            {
                title: 'API & Backend Integration',
                icon: 'flaticon-coding',
                description: 'Secure, reliable APIs connecting databases and third-party services.'
            },
            {
                title: 'CMS & WordPress Development',
                icon: 'flaticon-palette',
                description: 'Flexible content platforms that empower your team to publish updates easily.'
            }
        ],
        contactTitle: "Have a software idea you'd like to bring to life?",
        contactSubtitle: "You don't need every feature figured out before starting. Tell me the problem you want to solve, and we can work through the requirements and identify a sensible first version."
    },

    'E-commerce Development': {
        id: '5',
        title: 'E-commerce Website Development',
        subheadline: 'Create an online shopping experience customers can trust.',
        description1: 'An online store should make it easy for customers to discover products, understand their options, and complete a purchase. I build user-friendly e-commerce websites that organize your products clearly and provide a smooth shopping experience across devices.',
        description2: 'From product catalogues and search filters to shopping carts, checkout integrations, and order workflows, I develop features around your business model and the way your customers prefer to shop.',
        defaultImg: sgImgS1,
        img1: sgImgS2,
        img2: sgImgS3,
        capabilitiesIntro: 'Every store has different needs, whether you sell a small collection of products or manage a larger catalogue. I focus on creating a clear buying journey and connecting the required product, customer, and order functionality.',
        deliverables: [
            'Custom online storefronts with responsive product pages.',
            'Product catalogues, categories, search, and filtering.',
            'Shopping cart and checkout workflows.',
            'Payment gateway, shipping, and third-party API integration where required.',
            'Admin features for managing products, orders, and related store information.'
        ],
        approach: 'I start by understanding your products, customers, order process, and business requirements. From there, I plan the shopping journey, implement the necessary features, and test the important steps from browsing products to completing an order. The aim is to make shopping straightforward for customers and store management practical for you.',
        workProcess: [
            '1. Discover: Understand your products, customers, catalogue, and sales workflow.',
            '2. Plan: Define store structure, product details, checkout requirements, and integrations.',
            '3. Build: Develop the storefront, shopping functionality, and required administration features.',
            '4. Test & Launch: Check product browsing, cart behaviour, checkout integrations, mobile usability, and essential SEO.'
        ],
        relatedServices: [
            {
                title: 'Website Development',
                icon: 'flaticon-vector',
                description: 'High-converting business websites that strengthen your brand online.'
            },
            {
                title: 'Web Application Development',
                icon: 'flaticon-smartphone',
                description: 'Custom inventory, order management, and operations dashboards.'
            },
            {
                title: 'CMS & WordPress Development',
                icon: 'flaticon-palette',
                description: 'Content-driven commerce and WooCommerce solutions customized for your brand.'
            }
        ],
        contactTitle: "Ready to take your business online?",
        contactSubtitle: "Tell me what you sell, who your customers are, and how you want your store to work. Together, we can define the right features for your online business."
    }
};

export function getServiceDetail(titleOrId) {
    if (!titleOrId) return serviceDetailData['Website Development'];
    if (serviceDetailData[titleOrId]) return serviceDetailData[titleOrId];
    
    const key = String(titleOrId).trim();

    // Direct ID mapping
    if (key === '1') return serviceDetailData['Website Development'];
    if (key === '2') return serviceDetailData['Web Application Development'];
    if (key === '3') return serviceDetailData['CMS & WordPress Development'];
    if (key === '4') return serviceDetailData['SaaS & Custom Software'];
    if (key === '5') return serviceDetailData['E-commerce Development'];

    // Slug mapping
    if (key === 'website-development') return serviceDetailData['Website Development'];
    if (key === 'web-application-development') return serviceDetailData['Web Application Development'];
    if (key === 'cms-wordpress-development') return serviceDetailData['CMS & WordPress Development'];
    if (key === 'saas-custom-software') return serviceDetailData['SaaS & Custom Software'];
    if (key === 'e-commerce-development') return serviceDetailData['E-commerce Development'];

    // Legacy template title mapping
    if (key === 'Brand Identity') return serviceDetailData['CMS & WordPress Development'];
    if (key === 'Market Analysis') return serviceDetailData['SaaS & Custom Software'];
    if (key === 'Mobile App Design') return serviceDetailData['Web Application Development'];
    if (key === 'Website Design') return serviceDetailData['Website Development'];
    
    // Fuzzy match by key keywords
    const lower = key.toLowerCase();
    if (lower.includes('e-commerce') || lower.includes('ecommerce')) return serviceDetailData['E-commerce Development'];
    if (lower.includes('saas') || lower.includes('software')) return serviceDetailData['SaaS & Custom Software'];
    if (lower.includes('cms') || lower.includes('wordpress')) return serviceDetailData['CMS & WordPress Development'];
    if (lower.includes('application') || lower.includes('app')) return serviceDetailData['Web Application Development'];
    if (lower.includes('brand')) return serviceDetailData['CMS & WordPress Development'];
    if (lower.includes('market')) return serviceDetailData['SaaS & Custom Software'];
    if (lower.includes('web') || lower.includes('site')) return serviceDetailData['Website Development'];

    return serviceDetailData['Website Development'];
}

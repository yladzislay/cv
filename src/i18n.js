// Файл с переводами для интернационализации

const messages = {
  ru: {
    'page-title': 'Резюме | Developer-Researcher',
    'theme-toggle-label': 'Переключить темную тему',
    'language-toggle-label': 'Переключить язык',
    'hero-title': 'Developer-Researcher',
    'hero-badge': 'Разработчик-Исследователь',
    'hero-description': 'Создаю системы с нуля, погружаюсь в предметные области и исследую передовые технологии',
    'hero-trait-1': 'Full-Stack',
    'hero-trait-2': 'Исследователь',
    'hero-trait-3': 'Строитель',
    'hero-trait-4': 'Быстро обучаюсь',
    'hero-download': 'Скачать PDF',
    'hero-download-aria': 'Скачать резюме в PDF',
    'hero-contact': 'Связаться',
    'hero-contact-aria': 'Связаться со мной по email',
    'about-title': 'Обо мне',
    'about-text': 'Full-Stack разработчик с исследовательским подходом. Более 6 лет опыта в backend/web системах, глубокое участие в проектах по дронам, образовательным платформам и автоматизации на базе ИИ. Уверенно проектирую системы с нуля, анализирую предметные области и применяю современные подходы (AI/LLM, телеметрия, оптимизация).',
    'about': {
      'title': 'Обо мне',
      'subtitle': 'Разработчик-исследователь с богатым опытом построения систем с нуля',
      'description': 'Full-Stack разработчик с исследовательским подходом и более чем 6-летним опытом в backend/web системах. Глубоко вовлечен в проекты по дронам, образовательным платформам и автоматизации на базе ИИ. Уверенно проектирую системы с нуля, анализирую предметные области и применяю современные подходы в разработке, включая AI/LLM интеграции, телеметрию и оптимизацию производительности.',
      'image': '/profile-image.jpg',
      'imageAlt': 'Фотография разработчика-исследователя',
      'cvLink': '/resume.pdf',
      'contactLink': '#contact',
      'downloadCV': 'Скачать резюме',
      'contact': 'Связаться',
      'stats': [
        { 'value': '6+', 'label': 'лет опыта' },
        { 'value': '12+', 'label': 'проектов' }
      ],
      'keyPoints': {
        'education': {
          'title': 'Образование',
          'description': 'Высшее техническое образование с постоянным самообучением и повышением квалификации'
        },
        'experience': {
          'title': 'Опыт',
          'description': 'Разнообразный опыт от стартапов до корпоративных проектов с фокусом на исследования'
        },
        'skills': {
          'title': 'Навыки',
          'description': 'Full-stack разработка с глубоким пониманием систем и алгоритмов'
        },
        'passion': {
          'title': 'Увлечения',
          'description': 'Увлечён ИИ, автономными системами и технологиями для людей'
        }
      },
      'personalInfo': {
        'location': {
          'label': 'Местоположение',
          'value': 'Дистанционно / Европа'
        },
        'phone': {
          'label': 'Телефон',
          'value': '+1 (234) 567-8900'
        },
        'email': {
          'label': 'Email',
          'value': 'contact@example.com'
        },
        'website': {
          'label': 'Веб-сайт',
          'value': 'developer-researcher.com'
        }
      }
    },
    'experience-title': 'Опыт работы',
    'exp-aorion-date': 'Сен 2019 – Авг 2022',
    'exp-aorion-desc': 'Создал MVP платформы для дронов с нуля. 3D-визуализация полетов, архитектура бэкенда, развертывание.',
    'exp-dronehub-date': 'Дек 2022 – Май 2023',
    'exp-dronehub-desc': 'ROS2 companion computer для дронов. Бэкенд-разработчик с фокусом на R&D.',
    'exp-smiletech-date': 'Май 2024 – Янв 2025',
    'exp-smiletech-desc': 'Система автоматизации образования с LLM и оптимизацией.',
    'exp-ithouse-date': '2-месячный проект',
    'exp-ithouse-desc': 'Система управления пациентами. Провел бизнес-анализ и выбор технологий.',
    'exp-team-size': 'Размер команды:',
    'exp-tech': 'Технологии:',
    'exp-prev-aria': 'Предыдущий опыт',
    'exp-next-aria': 'Следующий опыт',
    'lab-title': 'R&D и Лаборатория обучения',
    'lab-item-1': 'LLM (DeepSeek, OpenAI, Gemini)',
    'lab-item-2': 'Ассистенты на графах знаний',
    'lab-item-3': 'Пайплайны для эмбеддингов',
    'lab-item-4': 'LangChain и оркестрация',
    'lab-item-5': 'Kubernetes (изучаю)',
    'skills-title': 'Навыки и Технологии',
    'skills-level-expert': 'Эксперт',
    'skills-level-proficient': 'Опытный',
    'skills-level-intermediate': 'Средний',
    'skills-level-learning': 'Изучаю',
    'skills-languages-title': 'Языки',
    'skills-languages-list': 'C#, Python, JS/TS',
    'skills-frameworks-title': 'Фреймворки',
    'skills-frameworks-list': 'ASP.NET, EF, Vue, Angular, MQTT, ROS2',
    'skills-databases-title': 'Базы данных',
    'skills-databases-list': 'PostgreSQL, MSSQL, MongoDB',
    'skills-infra-title': 'Инфраструктура',
    'skills-infra-list': 'Docker, Git, CI/CD, Linux',
    'skills-ai-title': 'ИИ и Исследования',
    'skills-ai-list': 'LLM пайплайны, дизайн промптов',
    'skills-learning-title': 'Сейчас изучаю',
    'skills-learning-list': 'Kubernetes, LangChain, Событийно-ориентированная арх.',
    'focus-title': 'Интересы и Фокус',
    'focus-ai': 'ИИ',
    'focus-autonomous': 'Автономные системы',
    'focus-infra': 'Умная инфраструктура',
    'focus-rd': 'R&D',
    'focus-humanity': 'Технологии для людей',
    'contact-title': 'Связаться',
    'contact-email': 'Email: ',
    'contact-github': 'GitHub: ',
    'contact-download': 'Скачать PDF резюме',
    'contact-download-aria': 'Скачать резюме в PDF',
    'nav-home': 'Главная',
    'nav-about': 'Обо мне',
    'nav-experience': 'Опыт',
    'nav-lab': 'R&D Лаб',
    'nav-skills': 'Навыки',
    'nav-interests': 'Интересы',
    'nav-contact': 'Контакты',
    'nav-goto-prefix': 'Перейти к разделу',
    'exp-aria-active': 'Текущий слайд:',
    'exp-aria-total': 'из',
    'exp-aria-navigation': 'Используйте стрелки влево и вправо для навигации по слайдам опыта работы',
    header: {
      name: 'Владислав Д.'
    },
    nav: {
      home: 'Главная',
      experience: 'Опыт работы',
      skills: 'Навыки',
      projects: 'Проекты',
      research: 'Исследования'
    },
    footer: {
      madeBy: 'Разработано Владиславом Д.',
      copyright: '© {year} Все права защищены',
      sourceCode: 'Исходный код',
      contact: 'Связаться',
      techStack: 'Технический стек:'
    },
    home: {
      title: 'Full-Stack Разработчик & Исследователь',
      subtitle: 'Создаю эффективные решения с использованием современных технологий',
      cta: 'Узнать больше'
    },
    experience: {
      title: 'Опыт работы',
      years: 'лет',
      months: 'мес.',
      present: 'По настоящее время',
      responsibilities: 'Обязанности:'
    },
    skills: {
      title: 'Навыки',
      languages: 'Языки программирования',
      frameworks: 'Фреймворки и библиотеки',
      databases: 'Базы данных',
      tools: 'Инструменты',
      level: {
        expert: 'Эксперт',
        advanced: 'Продвинутый',
        intermediate: 'Средний',
        beginner: 'Начинающий'
      }
    },
    projects: {
      title: 'Проекты',
      viewProject: 'Посмотреть проект',
      viewCode: 'Исходный код'
    },
    research: {
      title: 'Исследования',
      interests: 'Области интересов',
      publications: 'Публикации',
      conferences: 'Конференции',
      readMore: 'Читать полностью'
    },
    theme: {
      light: 'Светлая тема',
      dark: 'Тёмная тема'
    },
    language: {
      ru: 'Русский',
      en: 'English'
    }
  },
  en: {
    'page-title': 'Resume | Developer-Researcher',
    'theme-toggle-label': 'Toggle dark mode',
    'language-toggle-label': 'Toggle language',
    'hero-title': 'Developer-Researcher',
    'hero-badge': 'Developer-Researcher',
    'hero-description': 'Building systems from scratch, diving into domains, and exploring cutting-edge tech',
    'hero-trait-1': 'Full-Stack',
    'hero-trait-2': 'Research Minded',
    'hero-trait-3': 'Builder',
    'hero-trait-4': 'Fast Learner',
    'hero-download': 'Download PDF',
    'hero-download-aria': 'Download Resume PDF',
    'hero-contact': 'Contact me',
    'hero-contact-aria': 'Contact me via email',
    'about-title': 'About Me',
    'about-text': 'Full-Stack Developer with a research mindset. 6+ years of experience in backend/web systems with deep involvement in drones, education platforms, and AI-driven automation. Comfortable designing systems from scratch, analyzing domains, and applying modern approaches (AI/LLM, telemetry, optimization).',
    'about': {
      'title': 'About Me',
      'subtitle': 'Developer-Researcher with extensive experience building systems from scratch',
      'description': 'Full-Stack Developer with a research mindset and over 6 years of experience in backend/web systems. Deeply involved in projects across drone technology, educational platforms, and AI-driven automation. Comfortable designing systems from scratch, analyzing domains, and applying modern development approaches including AI/LLM integrations, telemetry, and performance optimization.',
      'image': '/profile-image.jpg',
      'imageAlt': 'Developer-Researcher profile photo',
      'cvLink': '/resume.pdf',
      'contactLink': '#contact',
      'downloadCV': 'Download Resume',
      'contact': 'Contact Me',
      'stats': [
        { 'value': '6+', 'label': 'years exp' },
        { 'value': '12+', 'label': 'projects' }
      ],
      'keyPoints': {
        'education': {
          'title': 'Education',
          'description': 'Technical higher education with continuous self-learning and professional development'
        },
        'experience': {
          'title': 'Experience',
          'description': 'Diverse experience from startups to corporate projects with research focus'
        },
        'skills': {
          'title': 'Skills',
          'description': 'Full-stack development with deep systems and algorithm understanding'
        },
        'passion': {
          'title': 'Passion',
          'description': 'Passionate about AI, autonomous systems, and tech-for-humanity'
        }
      },
      'personalInfo': {
        'location': {
          'label': 'Location',
          'value': 'Remote / Europe'
        },
        'phone': {
          'label': 'Phone',
          'value': '+1 (234) 567-8900'
        },
        'email': {
          'label': 'Email',
          'value': 'contact@example.com'
        },
        'website': {
          'label': 'Website',
          'value': 'developer-researcher.com'
        }
      }
    },
    'experience-title': 'Experience',
    'exp-aorion-date': 'Sep 2019 – Aug 2022',
    'exp-aorion-desc': 'Built MVP drone platform from scratch. 3D flight visualization, backend architecture, deployment.',
    'exp-dronehub-date': 'Dec 2022 – May 2023',
    'exp-dronehub-desc': 'ROS2 companion computer for drones. Backend developer with R&D focus.',
    'exp-smiletech-date': 'May 2024 – Jan 2025',
    'exp-smiletech-desc': 'Educational automation system with LLM and optimization.',
    'exp-ithouse-date': '2-month project',
    'exp-ithouse-desc': 'Patient management system. Performed business analysis and tech selection.',
    'exp-team-size': 'Team size:',
    'exp-tech': 'Tech:',
    'exp-prev-aria': 'Previous experience',
    'exp-next-aria': 'Next experience',
    'lab-title': 'R&D & Learning Lab',
    'lab-item-1': 'LLM (DeepSeek, OpenAI, Gemini)',
    'lab-item-2': 'Knowledge graph assistants',
    'lab-item-3': 'Embedding pipelines',
    'lab-item-4': 'LangChain and orchestration',
    'lab-item-5': 'Kubernetes (learning)',
    'skills-title': 'Skills & Tech Stack',
    'skills-level-expert': 'Expert',
    'skills-level-proficient': 'Proficient',
    'skills-level-intermediate': 'Intermediate',
    'skills-level-learning': 'Learning',
    'skills-languages-title': 'Languages',
    'skills-languages-list': 'C#, Python, JS/TS',
    'skills-frameworks-title': 'Frameworks',
    'skills-frameworks-list': 'ASP.NET, EF, Vue, Angular, MQTT, ROS2',
    'skills-databases-title': 'Databases',
    'skills-databases-list': 'PostgreSQL, MSSQL, MongoDB',
    'skills-infra-title': 'Infra',
    'skills-infra-list': 'Docker, Git, CI/CD, Linux',
    'skills-ai-title': 'AI & Research',
    'skills-ai-list': 'LLM pipelines, prompt design',
    'skills-learning-title': 'Currently Learning',
    'skills-learning-list': 'Kubernetes, LangChain, Event-driven arch.',
    'focus-title': 'Interests & Focus',
    'focus-ai': 'AI',
    'focus-autonomous': 'Autonomous Systems',
    'focus-infra': 'Smart Infrastructure',
    'focus-rd': 'R&D',
    'focus-humanity': 'Tech-for-Humanity',
    'contact-title': 'Get in Touch',
    'contact-email': 'Email: ',
    'contact-github': 'GitHub: ',
    'contact-download': 'Download PDF Resume',
    'contact-download-aria': 'Download Resume PDF',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-experience': 'Experience',
    'nav-lab': 'R&D Lab',
    'nav-skills': 'Skills',
    'nav-interests': 'Interests',
    'nav-contact': 'Contact',
    'nav-goto-prefix': 'Go to',
    'exp-aria-active': 'Current slide:',
    'exp-aria-total': 'of',
    'exp-aria-navigation': 'Use left and right arrow keys to navigate experience slides',
    header: {
      name: 'Uladzislau D.'
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      research: 'Research'
    },
    footer: {
      madeBy: 'Made by Uladzislau D.',
      copyright: '© {year} All rights reserved',
      sourceCode: 'Source Code',
      contact: 'Contact',
      techStack: 'Tech Stack:'
    },
    home: {
      title: 'Full-Stack Developer & Researcher',
      subtitle: 'Building effective solutions using modern technologies',
      cta: 'Learn more'
    },
    experience: {
      title: 'Work Experience',
      years: 'years',
      months: 'mos.',
      present: 'Present',
      responsibilities: 'Responsibilities:'
    },
    skills: {
      title: 'Skills',
      languages: 'Programming Languages',
      frameworks: 'Frameworks & Libraries',
      databases: 'Databases',
      tools: 'Tools',
      level: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        beginner: 'Beginner'
      }
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewCode: 'Source Code'
    },
    research: {
      title: 'Research',
      interests: 'Areas of Interest',
      publications: 'Publications',
      conferences: 'Conferences',
      readMore: 'Read more'
    },
    theme: {
      light: 'Light Theme',
      dark: 'Dark Theme'
    },
    language: {
      ru: 'Русский',
      en: 'English'
    }
  }
};

export default messages; 
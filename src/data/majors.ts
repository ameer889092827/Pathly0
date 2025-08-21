export interface LocalizedText {
  en: string;
  ru: string;
}

export interface Task {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  timeline: LocalizedText;
  project?: LocalizedText;
  resources?: {
    global?: string[];
    kazakhstan?: string[];
    competitions?: string[];
  };
}

export interface RoadmapStage {
  id: string;
  grade: number;
  title: LocalizedText;
  description: LocalizedText;
  tasks: Task[];
  duration: string;
}

export interface Course {
  name: string;
  description: LocalizedText;
  provider: string;
  url: string;
  price: string;
}

export interface Competition {
  name: string;
  description: LocalizedText;
  url: string;
  level: "beginner" | "intermediate" | "advanced";
}

export interface Community {
  name: string;
  description: LocalizedText;
  url: string;
  type: string;
}

export interface University {
  name: string;
  location: string;
  programs: string[];
  url: string;
}

export interface Subspecialization {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  roadmap: RoadmapStage[];
  careerPaths: LocalizedText[];
  topUniversities: string[];
  averageSalary: {
    entry: string;
    mid: string;
    senior: string;
  };
  globalResources: {
    courses: Course[];
    competitions: Competition[];
  };
  kazakhstanResources: {
    communities: Community[];
    universities: University[];
  };
}

export interface Major {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  icon: string;
  color: string;
  category: string;
  subspecializations: Subspecialization[];
  demandLevel: "High" | "Medium" | "Low";
  averageSalary: string;
  topUniversities: string[];
  skills: LocalizedText[];
  stats: {
    avgSalary: string;
    jobGrowth: string;
    popularity: string;
  };
}

export const getMajorBySlug = (slug: string): Major | undefined => {
  return majors.find((major) => major.slug === slug);
};

export const majors: Major[] = [
  {
    slug: "computer-science",
    name: { en: "Computer Science", ru: "Информатика" },
    description: {
      en: "Study of algorithms, programming, and computational systems",
      ru: "Изучение алгоритмов, программирования и вычислительных систем",
    },
    overview: {
      en: "Learn to solve problems through programming, develop software applications, and understand computational thinking",
      ru: "Научитесь решать проблемы через программирование, разрабатывать программные приложения и понимать вычислительное мышление",
    },
    icon: "💻",
    color: "from-blue-500 to-purple-600",
    category: "Technology",
    demandLevel: "High",
    averageSalary: "$85,000 - $200,000+",
    topUniversities: ["MIT", "Stanford", "CMU", "UC Berkeley", "KazNU"],
    skills: [
      { en: "Programming", ru: "Программирование" },
      { en: "Algorithms", ru: "Алгоритмы" },
      { en: "Data Structures", ru: "Структуры данных" },
      { en: "System Design", ru: "Проектирование систем" },
    ],
    stats: {
      avgSalary: "$120K",
      jobGrowth: "+15%",
      popularity: "Very High",
    },
    subspecializations: [
      {
        id: "ai-ml",
        name: {
          en: "Artificial Intelligence & Machine Learning",
          ru: "Искусственный интеллект и машинное обучение",
        },
        description: {
          en: "Focus on creating intelligent systems that can learn and adapt",
          ru: "Создание интеллектуальных систем, способных учиться и адаптироваться",
        },
        roadmap: [
          {
            id: "grade7-ai",
            grade: 7,
            title: { en: "Grade 7 - Foundations", ru: "7 класс - Основы" },
            description: {
              en: "Introduction to programming and basic AI concepts",
              ru: "Введение в программирование и основные концепции ИИ",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "python-basics",
                title: {
                  en: "Learn Python Basics",
                  ru: "Изучите основы Python",
                },
                description: {
                  en: "Master variables, loops, functions, and basic programming concepts | Solve 20-30 problems on platforms like Codewars or LeetCode (easy level) | ",
                  ru: "Освойте переменные, циклы, функции и основные концепции программирования | Решите 20-30 задач на платформах Codewars или LeetCode (легкий уровень) | ",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a simple calculator program",
                  ru: "Создайте простую программу-калькулятор",
                },
              },
              {
                id: "teachable-machine",
                title: {
                  en: "Image Classifier with Teachable Machine",
                  ru: "Классификатор изображений с Teachable Machine",
                },
                description: {
                  en: "Build your first AI model using Google's Teachable Machine",
                  ru: "Создайте свою первую модель ИИ с помощью Google Teachable Machine",
                },
                timeline: { en: "2-4 weeks", ru: "2-4 недели" },
                project: {
                  en: "Create a cats vs dogs classifier and write a one-page explanation",
                  ru: "Создайте классификатор кошек и собак и напишите объяснение на одну страницу",
                },
              },
              {
                id: "competitions",
                title: { en: "Competitions", ru: "Соревнования" },
                description: {
                  en: "Participate in coding competitions to gain practical experience",
                  ru: "Участвуйте в соревнованиях по программированию, чтобы получить практический опыт",
                },
                timeline: {
                  en: "Throughout the year",
                  ru: "В течение всего года",
                },
              },
            ],
          },
          {
            id: "grade8-ai",
            grade: 8,
            title: {
              en: "Grade 8 - Intermediate Programming",
              ru: "8 класс - Программирование среднего уровня",
            },
            description: {
              en: "Strengthen programming skills and learn about data",
              ru: "Укрепите навыки программирования и изучите работу с данными",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "python-intermediate",
                title: {
                  en: "Data visualization competition",
                  ru: "Соревнования по визуализации данных",
                },
                description: {
                  en: "Participate in a data visualization competition (e.g., make a chart about a topic of interest using a tool like Matplotlib or Seaborn in Python).",
                  ru: "Примите участие в конкурсе по визуализации данных (например, создайте диаграмму по интересующей вас теме, используя такой инструмент, как Matplotlib или Seaborn на Python).",
                },
                timeline: { en: "Throughout the year", ru: "В течении года" },
              },
              {
                id: "github-setup",
                title: {
                  en: "Set up GitHub Portfolio",
                  ru: "Создайте портфолио на GitHub",
                },
                description: {
                  en: "Learn version control and create your coding portfolio",
                  ru: "Изучите контроль версий и создайте свое портфолио программиста",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
              },
            ],
          },
          {
            id: "grade9-ai",
            grade: 9,
            title: {
              en: "Grade 9 - Data Science Fundamentals",
              ru: "9 класс - Основы Data Science",
            },
            description: {
              en: "Learn data manipulation and basic machine learning",
              ru: "Изучите работу с данными и основы машинного обучения",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "data-libraries",
                title: {
                  en: "Master Data Libraries",
                  ru: "Освойте библиотеки для работы с данными",
                },
                description: {
                  en: "Learn NumPy, Pandas, Matplotlib for data analysis",
                  ru: "Изучите NumPy, Pandas, Matplotlib в совершенстве для анализа данных",
                },
                timeline: { en: "8 weeks", ru: "8 недель" },
              },
              {
                id: "ml-pipeline",
                title: {
                  en: "End-to-End ML Pipeline",
                  ru: "Полный ML конвейер",
                },
                description: {
                  en: "Build complete machine learning project from data collection to deployment",
                  ru: "Создайте полный проект машинного обучения от сбора данных до развертывания",
                },
                timeline: { en: "4-6 months", ru: "4-6 месяцев" },
                project: {
                  en: "School survey analysis with prediction model and dashboard",
                  ru: "Анализ школьного опроса с моделью предсказания и панелью управления",
                },
              },
              {
                id: "ml-pipeline",
                title: {
                  en: "Essay / Presentation",
                  ru: "Эссе / Презентация",
                },
                description: {
                  en: "Write an essay or create a presentation on an AI ethics topic.",
                  ru: "Напишите эссе или создайте презентацию на тему этики ИИ",
                },
                timeline: { en: "3-4 weeks", ru: "3-4 недели" },
              },
            ],
          },
          {
            id: "grade10-ai",
            grade: 10,
            title: {
              en: "Grade 10 - Advanced ML & Neural Networks",
              ru: "10 класс - Продвинутое ML и нейронные сети",
            },
            description: {
              en: "Deep dive into neural networks and advanced algorithms",
              ru: "Глубокое изучение нейронных сетей и продвинутых алгоритмов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "deep-learning",
                title: {
                  en: "Neural Networks with TensorFlow",
                  ru: "Нейронные сети с TensorFlow",
                },
                description: {
                  en: "Build and train neural networks for image and text classification using TensorFlow",
                  ru: "Создавайте и обучайте нейронные сети для классификации изображений и текста используя TensorFlow",
                },
                timeline: { en: "12 weeks", ru: "12 недель" },
                project: {
                  en: "COVID-19 chest X-ray classifier with 90%+ accuracy",
                  ru: "Классификатор рентгена грудной клетки COVID-19 с точностью 90%+",
                },
              },
              {
                id: "research-project",
                title: {
                  en: "Independent Research Project",
                  ru: "Независимый исследовательский проект",
                },
                description: {
                  en: "Conduct original ML research on a problem you care about",
                  ru: "Проведите оригинальное исследование ML по интересующей вас проблеме",
                },
                timeline: { en: "4-6 months", ru: "4-6 месяцев" },
              },
            ],
          },
          {
            id: "grade11-ai",
            grade: 11,
            title: {
              en: "Grade 11 - Specialization & Portfolio",
              ru: "11 класс - Специализация и портфолио",
            },
            description: {
              en: "Choose specialization and build professional portfolio",
              ru: "Выберите специализацию и создайте профессиональное портфолио",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "specialization-choice",
                title: {
                  en: "Choose AI Specialization",
                  ru: "Выберите специализацию в ИИ",
                },
                description: {
                  en: "Focus on Computer Vision, NLP, or Reinforcement Learning | Understand current research trends. Learn to read research papers",
                  ru: "Сосредоточьтесь на компьютерном зрении, NLP или обучении с подкреплением | Научитесь понимать и читать актуальные исследовательские работы",
                },
                timeline: {
                  en: "2 weeks decision + 6 months deep dive",
                  ru: "2 недели на решение + 6 месяцев глубокого изучения",
                },
              },
              {
                id: "capstone-project",
                title: { en: "Capstone AI Project", ru: "Итоговый проект ИИ" },
                description: {
                  en: "Build production-ready AI application",
                  ru: "Создайте готовое к производству приложение ИИ",
                },
                timeline: { en: "6-8 months", ru: "6-8 месяцев" },
                project: {
                  en: "Deploy AI app with 1000+ users or publish research paper",
                  ru: "Разверните приложение ИИ с 1000+ пользователями или опубликуйте исследовательскую статью",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Machine Learning Engineer", ru: "Инженер машинного обучения" },
          { en: "Data Scientist", ru: "Специалист по данным" },
          { en: "AI Researcher", ru: "Исследователь ИИ" },
          {
            en: "Computer Vision Engineer",
            ru: "Инженер компьютерного s�рения",
          },
        ],
        topUniversities: [
          "MIT",
          "Stanford",
          "CMU",
          "UC Berkeley",
          "ETH Zurich",
        ],
        averageSalary: {
          entry: "$120,000",
          mid: "$180,000",
          senior: "$300,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Machine Learning Course by Andrew Ng",
              description: {
                en: "Comprehensive introduction to machine learning algorithms and techniques",
                ru: "Всеобъемлющее введение в алгоритмы и техники машинного обучения",
              },
              provider: "Coursera",
              url: "https://coursera.org/learn/machine-learning",
              price: "Free",
            },
            {
              name: "Deep Learning Specialization",
              description: {
                en: "Master deep learning and neural networks from basics to advanced applications",
                ru: "Освойте глубокое обучение и нейронные сети от основ до продвинутых приложений",
              },
              provider: "Coursera",
              url: "https://coursera.org/specializations/deep-learning",
              price: "$49/month",
            },
            {
              name: "Learn Python – Free Python Courses for Beginners",
              description: {
                en: "Python is a great programming language to learn and you can use it in a variety of areas in software development.",
                ru: "Python - отличный язык программирования для изучения, и вы можете использовать его в самых разных областях разработки программного обеспечения.",
              },
              provider: "FreeCodeCamp.org",
              url: "https://www.freecodecamp.org/news/learn-python-free-python-courses-for-beginners/",
              price: "Free",
            },
            {
              name: "Поколение Python: курс для начинающих",
              description: {
                en: "The course covers the basic data types, constructs, and principles of structured programming in Python. The course includes theory in the form of text notes and over 500 automated-checked problems.",
                ru: "В курсе рассказывается об основных типах данных, конструкциях и принципах структурного программирования языка Python. Курс содержит теорию в формате текстовых конспектов и более 500 задач с автоматизированной проверкой",
              },
              provider: "Stepik",
              url: "https://stepik.org/course/58852/promo?search=7579696353",
              price: "Free with certificate",
            },
            {
              name: "Free Machine Learning Courses",
              description: {
                en: "Learn Machine Learning through our free courses and earn a completion certificate. Start with the basic topics like regression, decision trees, support vector machines, and neural networks. Then, advance to more complex concepts like Big Data, Deep learning, and NLP.",
                ru: "Изучите машинное обучение на наших бесплатных курсах и получите сертификат об окончании. Начните с базовых тем, таких как регрессия, деревья решений, методы опорных векторов и нейронные сети. Затем переходите к более сложным концепциям, таким как Большие данные, глубокое обучение и НЛП.",
              },
              provider: "Great Learning",
              url: "https://www.mygreatlearning.com/machine-learning/free-courses",
              price: "Free with certificate",
            },
            {
              name: "Teachable Machine",
              description: {
                en: "Train a computer to recognize your own images, sounds, & poses.",
                ru: "Научите компьютер распознавать ваши собственные изображения, звуки и позы.",
              },
              provider: "Teachable Machine",
              url: "https://teachablemachine.withgoogle.com/?ref=vc.ru",
              price: "Free",
            },
            {
              name: "Codeforces",
              description: {
                en: "Programming platform",
                ru: "Платформа для программирования",
              },
              provider: "Codeforces",
              url: "https://codeforces.com/;",
              price: "Free",
            },
            {
              name: "Codewars",
              description: {
                en: "Programming platform",
                ru: "Платформа для программирования",
              },
              provider: "Codewars",
              url: "https://www.codewars.com/",
              price: "Free",
            },
            {
              name: "Leetcode",
              description: {
                en: "Programming platform",
                ru: "Платформа для программирования",
              },
              provider: "Leetcode",
              url: "https://leetcode.com/",
              price: "Free",
            },
            {
              name: "ACMP.RU",
              description: {
                en: "Programming platform",
                ru: "Платформа для программирования",
              },
              provider: "ACMP.RU",
              url: "https://acmp.ru/",
              price: "Free",
            },
            {
              name: "Setting on GitHub",
              description: {
                en: "Setting up your GitHub Repository for Open Source Development",
                ru: "Настройка вашего репозитория на GitHub для разработки с открытым исходным кодом",
              },
              provider: "dev.to",
              url: "https://dev.to/zt4ff_1/setting-up-your-github-repository-for-open-source-development-43ce?ysclid=me8vktsnmt459716676",
              price: "Free",
            },
            {
              name: "How to Write an AI/ML/DL Research Paper",
              description: {
                en: "The key to writing a great machine learning research paper",
                ru: "Ключ к написанию отличной исследовательской работы по машинному обучению",
              },
              provider: "Aarafat Islam",
              url: "https://medium.com/tech-spectrum/how-to-write-an-ai-ml-dl-research-paper-d0d33dde34a9",
              price: "Free",
            },
            {
              name: "Streamlit: How to deploy your AI app",
              description: {
                en: "Streamlit is a Python library that is open-source, providing a seamless way to develop and distribute interactive web applications and data visualizations.",
                ru: "Streamlit - это библиотека Python с открытым исходным кодом, предоставляющая простой способ разработки и распространения интерактивных веб-приложений и визуализации данных.",
              },
              provider: "Streamlit",
              url: "https://medium.com/@alfredolhuissier/streamlit-how-to-deploy-your-ai-app-7a516548eb90",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Kaggle Competitions",
              description: {
                en: "Practice ML skills with real-world datasets and problems",
                ru: "Практикуйте навыки ML с реальными наборами данных и проблемами",
              },
              url: "https://kaggle.com/competitions",
              level: "beginner",
            },
            {
              name: "Google AI Challenge",
              description: {
                en: "Annual AI competition with cutting-edge problems",
                ru: "Ежегодное соревнование по ИИ с передовыми проблемами",
              },
              url: "https://ai.google/challenge",
              level: "advanced",
            },
            {
              name: "ML Contests",
              description: {
                en: "Discover machine learning, data science & robotics competitions",
                ru: "Откройте для себя соревнования по машинному обучению, науке о данных и робототехнике",
              },
              url: "https://mlcontests.com/",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Kazakhstan AI Community",
              description: {
                en: "Local community of AI enthusiasts and professionals",
                ru: "Местное сообщество энтузиастов и профессионалов ИИ",
              },
              url: "https://t.me/kazakhstanai",
              type: "Telegram",
            },
            {
              name: "Astana IT Hub",
              description: {
                en: "Technology hub with AI meetups and workshops",
                ru: "Технологический хаб с встречами и воркшопами по ИИ",
              },
              url: "https://astanaithub.kz",
              type: "Hub",
            },
          ],
          universities: [
            {
              name: "Kazakh National University",
              location: "Almaty",
              programs: ["Computer Science", "AI & ML", "Data Science"],
              url: "https://kaznu.kz",
            },
            {
              name: "Astana IT University",
              location: "Astana",
              programs: ["AI Engineering", "Machine Learning", "Robotics"],
              url: "https://astanait.edu.kz",
            },
          ],
        },
      },
      {
        id: "data-science",
        name: { en: "Data Science", ru: "Наука о данных" },
        description: {
          en: "Extract insights and knowledge from structured and unstructured data",
          ru: "Извлечение знаний и инсайтов из структурированных и неструктурированных данных",
        },
        roadmap: [
          {
            id: "grade7-ds",
            grade: 7,
            title: {
              en: "Grade 7 - Math & Programming Foundation",
              ru: "7 класс - Основы математики и программирования",
            },
            description: {
              en: "Build strong foundation in statistics and programming",
              ru: "Создайте прочную основу в статистике и программировании",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "statistics-basics",
                title: {
                  en: "Statistics Fundamentals",
                  ru: "Основы статистики",
                },
                description: {
                  en: "Learn mean, median, mode, probability basics",
                  ru: "Изучите среднее, медиану, моду, основы вероятности",
                },
                timeline: { en: "8 weeks", ru: "8 недель" },
              },
              {
                id: "data-everyday",
                title: {
                  en: "Data in everyday life",
                  ru: "Данные в повседневной жизни",
                },
                description: {
                  en: "Math: Percentages, fractions, basic graphs (bar/pie charts) | Tools: Google Sheets/Excel (free): Sorting, filtering, basic formulas | CODAP (free visual data exploration tool)",
                  ru: "Математика: проценты, дроби, базовые графики (столбчатые / круговые диаграммы) | Инструменты: Google Таблицы /Excel (бесплатно): Сортировка, фильтрация, базовые формулы | CODAP (бесплатный инструмент визуального анализа данных)",
                },
                timeline: { en: "8 weeks", ru: "8 недель" },
                project: {
                  en: "Analyze your class grades or sports stats | Create a survey and visualize results",
                  ru: "Проанализируйте свои оценки в классе или спортивную статистику | Создайте опрос и визуализируйте результаты",
                },
              },
              {
                id: "excel-mastery",
                title: {
                  en: "Excel Data Analysis",
                  ru: "Анализ данных в Excel",
                },
                description: {
                  en: "Master pivot tables, charts, basic statistical functions",
                  ru: "Освойте сводные таблицы, графики, основные статистические функции",
                },
                timeline: { en: "6 weeks", ru: "6 недель" },
                project: {
                  en: "Analyze school grades data and create presentation",
                  ru: "Проанализируйте данные школьных оценок и создайте презентацию",
                },
              },
            ],
          },
          {
            id: "grade8-ds",
            grade: 8,
            title: {
              en: "Grade 8 - Intermediate Data Analysis",
              ru: "8 класс - Продвинутый анализ данных",
            },
            description: {
              en: "Strengthen data analysis skills and learn about data visualization",
              ru: "Укрепите навыки анализа данных и изучите визуализацию данных",
            },
            tasks: [
              {
                id: "data-visualization",
                title: {
                  en: "Automate data tasks with code",
                  ru: "Автоматизируйте задачи обработки данных с помощью кода.",
                },
                description: {
                  en: "Math: Averages, correlations, simple probability | Tools: Python (Jupyter Notebooks via Google Colab) Pandas (data manipulation library)",
                  ru: "Математика: средние значения, корреляции, простая вероятность | Инструменты: Python (записные книжки Jupyter через Google Colab), Pandas (библиотека манипулирования данными)",
                },
                timeline: { en: "8 weeks", ru: "8 недель" },
                project: {
                  en: "Create interactive dashboard for school data | Build a weather data tracker.",
                  ru: "Создайте интерактивную панель управления для школьных данных | Создайте мониторинг данных о погоде",
                },
              },
              {
                id: "datavz",
                title: {
                  en: "Data Collection and Cleaning",
                  ru: "Сбор и очистка данных",
                },
                description: {
                  en: "Learn to collect data from web APIs. Use a free API (like OpenWeatherMap) to fetch data and store it in a CSV file |  Find a messy dataset (e.g., from Kaggle) and clean it by handling missing values, removing duplicates, and correcting data types",
                  ru: "Научитесь собирать данные с помощью веб-API. Используйте бесплатный API (например, OpenWeatherMap) для извлечения данных и сохранения их в CSV-файле | найдите беспорядочный набор данных (например, из Kaggle) и очистите его, обработав пропущенные значения, удалив дубликаты и исправив типы данных",
                },
                timeline: { en: "3-4 weeks", ru: "3-4 недель" },
                project: {
                  en: "Analyze your school's (or anywhere else's) lunch menu or cafeteria sales data (if available) to find popular items and suggest improvements",
                  ru: "Проанализируйте обеденное меню вашей школы (или любого другого заведения) или данные о продажах в кафетерии (если таковые имеются), чтобы найти популярные блюда и предложить улучшения",
                },
              },
            ],
            duration: "Full academic year",
          },
          {
            id: "grade9-ds",
            grade: 9,
            title: {
              en: "Grade 9 - Statistics & Visualization",
              ru: "9 класс - Статистика и визуализация",
            },
            description: {
              en: "Master statistical testing and storytelling with data",
              ru: "Освоите статистическое тестирование и рассказывание историй с использованием данных",
            },
            tasks: [
              {
                id: "data-distr",
                title: {
                  en: "Distributions (normal/binomial)",
                  ru: "Распределения (нормальные/биномиальные)",
                },
                description: {
                  en: "Math: Distributions (normal/binomial), hypothesis testing, confidence intervals | Tools: Matplotlib/Seaborn, Tableau Public   ",
                  ru: "Математика: распределения (нормальные / биномиальные), проверка гипотез, доверительные интервалы | Инструменты: Matplotlib /Seaborn, общедоступная таблица   ",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Investigate COVID-19 data trends",
                  ru: "Изучение тенденций распространения данных о COVID-19",
                },
              },
              {
                id: "dataass",
                title: {
                  en: "Advanced Visualization",
                  ru: "Расширенная визуализация",
                },
                description: {
                  en: "Create a dashboard using Tableau Public that includes at least 3 different types of charts (e.g., scatter plot, box plot, heatmap) and a filter",
                  ru: "Создайте панель мониторинга с помощью Tableau Public, которая включает в себя как минимум 3 различных типа диаграмм (например, точечную диаграмму, прямоугольную диаграмму, тепловую карту) и фильтр",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Analyze the relationship between study time and exam scores using a dataset (you can create one by surveying classmates) and create a regression model",
                  ru: "Проанализируйте взаимосвязь между учебным временем и результатами экзаменов, используя набор данных (вы можете создать его, опросив одноклассников), и создайте регрессионную модель",
                },
              },
              {
                id: "datagtx",
                title: {
                  en: "Data Storytelling | Probability Simulation",
                  ru: "Рассказывание историй о данных | Вероятностное моделирование",
                },
                description: {
                  en: "Choose a topic (e.g., climate change, social media usage) and find a dataset. Write a blog post (on Medium or a free platform) explaining your analysis and including visualizations | Use Python to simulate probability scenarios (e.g., Monty Hall problem, coin flips) and validate the results statistically",
                  ru: "Выберите тему (например, изменение климата, использование социальных сетей) и найдите набор данных. Напишите сообщение в блоге (на Medium или бесплатной платформе), в котором объясните свой анализ и включите визуализацию | Используйте Python для моделирования вероятностных сценариев (например, задача Монти Холла, подбрасывание монеты) и статистической проверки результатов",
                },
                timeline: { en: "1-2 week", ru: "1-2 неделя" },
              },
            ],
            duration: "Full academic year",
          },
          {
            id: "grade10-ds",
            grade: 10,
            title: {
              en: "Grade 10 - Machine Learning for Data Science",
              ru: "10 класс - Машинное обучение для науки о данных",
            },
            description: {
              en: "Apply ML to extract insights",
              ru: "Применяйте ML для извлечения информации",
            },
            tasks: [
              {
                id: "dataklk",
                title: {
                  en: "SQL Practice",
                  ru: "Практика работы с SQL",
                },
                description: {
                  en: "Complete SQL exercises on platforms like SQLZoo or Mode Analytics SQL Tutorial. Learn to join tables and aggregate data",
                  ru: "Выполните упражнения по SQL на таких платформах, как SQLZoo или Mode Analytics SQL Tutorial. Научитесь объединять таблицы и агрегировать данные",
                },
                timeline: { en: "1 weeks", ru: "1 неделя" },
                project: {
                  en: "Predict housing prices (regression) | Analyze social media sentiment (classification)",
                  ru: "Прогнозирование цен на жилье (регрессия) | Анализ настроений в социальных сетях (классификация)",
                },
              },
              {
                id: "dataert",
                title: {
                  en: "Feature Engineering",
                  ru: "Разработка функциональных возможностей",
                },
                description: {
                  en: "Take a dataset and create new features (e.g., from dates: day of week, month; from text: word count). Use feature engineering to improve a model's performance",
                  ru: "Возьмите набор данных и создайте новые функции (например, из дат: день недели, месяц; из текста: количество слов). Используйте разработку функций для улучшения производительности модели",
                },
                timeline: { en: "2 week", ru: "2 недели" },
                project: {
                  en: "Build an end-to-end ML pipeline: from data collection (via API or web scraping) to model deployment (using a simple Flask app or Streamlit)",
                  ru: "Создайте сквозной конвейер ML: от сбора данных (через API или web scrapping) до развертывания модели (с помощью простого приложения Flask или Streamlit)",
                },
              },
              {
                id: "datagtx",
                title: {
                  en: "Model Evaluation",
                  ru: "Оценка модели",
                },
                description: {
                  en: "For a classification problem (e.g., Titanic survival prediction), evaluate models using accuracy, precision, recall, and ROC curves. Tune hyperparameters using grid search",
                  ru: "Для решения задачи классификации (например, для прогнозирования выживаемости Титаника) оцените модели, используя кривые точности, повторения и ROC. Настройте гиперпараметры с помощью поиска по сетке.",
                },
                timeline: { en: "1-2 week", ru: "1-2 неделя" },
              },
            ],
            duration: "Full academic year",
          },
          {
            id: "grade11-ds",
            grade: 11,
            title: {
              en: "Grade 11 - Advanced Analytics & Real-World Applications",
              ru: "11 класс - Продвинутая аналитика и реальные приложения",
            },
            description: {
              en: "Tackle complex problems and build a portfolio",
              ru: "Решайте сложные задачи и создавайте портфолио",
            },
            tasks: [
              {
                id: "datapoi",
                title: {
                  en: "Time Series Analysis",
                  ru: "Анализ временных рядов",
                },
                description: {
                  en: "Use ARIMA or Prophet to predict future values (e.g., stock prices, weather). Evaluate the model and visualize the forecast",
                  ru: "Используйте ARIMA или Prophet для прогнозирования будущих значений (например, цен на акции, погоды). Оцените модель и визуализируйте прогноз",
                },
                timeline: { en: "2-4 weeks", ru: "2-4 неделя" },
                project: {
                  en: "Time-series analysis of stock market data",
                  ru: "Анализ временных рядов данных фондового рынка",
                },
              },
              {
                id: "dataghj",
                title: {
                  en: "Data Pipeline Construction",
                  ru: "Построение конвейера передачи данных",
                },
                description: {
                  en: "Set up a pipeline that collects data daily (e.g., from a news API), stores it in a database (SQLite or MongoDB), and updates a dashboard (using Tableau or Dash)",
                  ru: "Настройте конвейер, который ежедневно собирает данные (например, из новостного API), сохраняет их в базе данных (SQLite или MongoDB) и обновляет панель мониторинга (используя Tableau или Dash).",
                },
                timeline: { en: "1-2 week", ru: "1-2 недели" },
                project: {
                  en: "Build a data pipeline (API → database → dashboard)",
                  ru: "Создайте конвейер передачи данных (API → база данных → панель мониторинга)",
                },
              },
              {
                id: "datavbn",
                title: {
                  en: "Big Data Tools",
                  ru: "Инструменты для обработки больших данных",
                },
                description: {
                  en: "Learn PySpark via Databricks Community Edition. Process a large dataset (e.g., NYC Taxi data) and run basic analyses",
                  ru: "Изучите PySpark с помощью Databricks Community Edition. Обработайте большой набор данных (например, данные о такси в Нью-Йорке) и выполните базовый анализ",
                },
                timeline: { en: "1-2 week", ru: "1-2 неделя" },
              },
              {
                id: "datazxc",
                title: {
                  en: "Portfolio Development",
                  ru: "Подготовка Портфолио",
                },
                description: {
                  en: "Create a personal website (using GitHub Pages) showcasing your projects, including detailed explanations and code. Write a research-style report for one project and publish it on arXiv or a preprint server",
                  ru: "Создайте персональный веб-сайт (используя страницы на GitHub), на котором будут представлены ваши проекты, включая подробные объяснения и код. Напишите отчет в исследовательском стиле для одного проекта и опубликуйте его на arXiv или сервере препринтов.",
                },
                timeline: { en: "1-5 months", ru: "1-5 месяцев" },
              },
            ],
            duration: "Full academic year",
          },
        ],
        careerPaths: [
          { en: "Data Analyst", ru: "Аналитик данных" },
          {
            en: "Business Intelligence Analyst",
            ru: "Аналитик бизнес-аналитики",
          },
          { en: "Data Engineer", ru: "Инженер данных" },
        ],
        topUniversities: ["Harvard", "MIT", "Stanford", "UC Berkeley", "KazNU"],
        averageSalary: {
          entry: "$95,000",
          mid: "$140,000",
          senior: "$200,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Data Science Professional Certificate",
              description: {
                en: "Complete data science program from basics to advanced analytics",
                ru: "Полная программа по науке о данных от основ до продвинутой аналитики",
              },
              provider: "IBM",
              url: "https://coursera.org/professional-certificates/ibm-data-science",
              price: "$39/month",
            },
            {
              name: "StatQuest’s YouTube tutorials",
              description: {
                en: "Learn via StatQuest’s YouTube tutorials",
                ru: "Учитесь с помощью обучающих программ StatQuest на YouTube",
              },
              provider: "StatQuest's",
              url: "https://www.youtube.com/@statquest",
              price: "Free",
            },
            {
              name: "Kaggle’s SQL course",
              description: {
                en: "Complete Kaggle’s SQL course",
                ru: "Пройдите курс SQL от Kaggle",
              },
              provider: "Kaggle",
              url: "https://www.kaggle.com/learn/intro-to-sql",
              price: "Free",
            },
            {
              name: "Data Science: Wrangling",
              description: {
                en: "Learn to process and convert raw data into formats needed for analysis",
                ru: "Научитесь обрабатывать и преобразовывать необработанные данные в форматы, необходимые для анализа",
              },
              provider: "Harvard",
              url: "https://pll.harvard.edu/course/data-science-wrangling?delta=0",
              price: "Free",
            },
            {
              name: "KDnuggets rersources",
              description: {
                en: "Guiding Tech Media",
                ru: "Руководящие технические средства массовой информации",
              },
              provider: "KDnuggets",
              url: "https://www.kdnuggets.com/",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Kaggle Learn",
              description: {
                en: "Free micro-courses in data science fundamentals",
                ru: "Бесплатные микрокурсы по основам науки о данных",
              },
              url: "https://kaggle.com/learn",
              level: "beginner",
            },
            {
              name: "DrivenData competition",
              description: {
                en: "Data science & AI competitions to build a better world",
                ru: "Соревнования по науке о данных и искусственному интеллекту для построения лучшего мира",
              },
              url: "https://www.drivendata.org/",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Data Science Kazakhstan",
              description: {
                en: "Community of data scientists and analysts in Kazakhstan",
                ru: "Сообщество специалистов по данным и аналитиков в Казахстане",
              },
              url: "https://t.me/datascience_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Kazakh National University",
              location: "Almaty",
              programs: [
                "Statistics",
                "Data Analytics",
                "Business Intelligence",
              ],
              url: "https://kaznu.kz",
            },
          ],
        },
      },
      {
        id: "cybersecurity",
        name: { en: "Cybersecurity", ru: "Кибербезопасность" },
        description: {
          en: "Protect digital systems, networks, and data from cyber threats",
          ru: "Защита цифровых систем, сетей и данных от киберугроз",
        },
        roadmap: [
          {
            id: "grade7-cyber",
            grade: 7,
            title: {
              en: "Grade 7 - Digital Literacy & Basic Security",
              ru: "7 класс - Цифровая грамотность и основы безопасности",
            },
            description: {
              en: "Understand digital safety and basic security concepts",
              ru: "Понимание цифровой безопасности и основных концепций безопасности",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "password-security",
                title: {
                  en: "Password Security Fundamentals",
                  ru: "Основы безопасности паролей",
                },
                description: {
                  en: "Learn to create strong passwords and use password managers",
                  ru: "Научитесь создавать надежные пароли и использовать менеджеры паролей",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
              },
              {
                id: "account-protection-basics",
                title: {
                  en: "Account Protection (2FA, recovery)",
                  ru: "Защита аккаунтов (2FA, восстановление)",
                },
                description: {
                  en: "Enable two-factor authentication and set up recovery options",
                  ru: "Включите двухфакторную аутентификацию и настройте параметры восстановления",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
              },
              {
                id: "digital-footprint-etiquette",
                title: {
                  en: "Digital Footprint & Online Etiquette",
                  ru: "Цифровой след и правила общения онлайн",
                },
                description: {
                  en: "Understand what is safe to share online and how to behave responsibly",
                  ru: "Поймите, что безопасно публиковать онлайн, и как вести себя ответственно",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
              },
            ],
          },
          {
            id: "grade8-cyber",
            grade: 8,
            title: {
              en: "Grade 8 - Cyber Hygiene & Internet Safety",
              ru: "8 класс - Кибер-гигиена и безопасность в интернете",
            },
            description: {
              en: "Practice safe computing habits and recognize common online threats",
              ru: "Практика безопасной работы за компьютером и распознавание онлайн-угроз",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "phishing-awareness",
                title: {
                  en: "Phishing Awareness",
                  ru: "Распознавание фишинга",
                },
                description: {
                  en: "Identify phishing emails and messages; verify senders and links",
                  ru: "Распознавайте фишинговые письма и сообщения; проверяйте отправителей и ссылки",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
              },
              {
                id: "device-hardening",
                title: {
                  en: "Device Hardening Basics",
                  ru: "Базовая защита устройств",
                },
                description: {
                  en: "Keep systems updated, use antivirus, configure auto-updates and least privilege",
                  ru: "Обновляйте системы, используйте антивирус, включайте автообновления и принцип наименьших привилегий",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
              {
                id: "privacy-controls",
                title: {
                  en: "Privacy Controls & Safe Browsing",
                  ru: "Настройки конфиденциальности и безопасный серфинг",
                },
                description: {
                  en: "Adjust privacy settings, use tracking protection and secure browsers",
                  ru: "Настройте конфиденциальность, используйте защиту от слежения и безопасные браузеры",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
              },
            ],
          },
          {
            id: "grade9-cyber",
            grade: 9,
            title: {
              en: "Grade 9 - Networking & OS Security Basics",
              ru: "9 класс - Основы сетей и безопасности ОС",
            },
            description: {
              en: "Learn how networks and operating systems work and how to secure them",
              ru: "Изучите, как работают сети и операционные системы и как их защищать",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "networking-basics",
                title: {
                  en: "Networking Basics",
                  ru: "Основы сетей",
                },
                description: {
                  en: "IP, DNS, ports and protocols; observe traffic with beginner-friendly tools",
                  ru: "IP, DNS, порты и протоколы; наблюдение трафика с помощью простых инструментов",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
              {
                id: "os-accounts-permissions",
                title: {
                  en: "OS Accounts and Permissions",
                  ru: "Учетные записи и права в ОС",
                },
                description: {
                  en: "Users, groups, file permissions; secure configuration basics",
                  ru: "Пользователи, группы, права на файлы; основы безопасной конфигурации",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
              },
              {
                id: "https-vpn-basics",
                title: {
                  en: "HTTPS/TLS and VPN Basics",
                  ru: "Основы HTTPS/TLS и VPN",
                },
                description: {
                  en: "Certificates, secure connections, and when to use a VPN",
                  ru: "Сертификаты, защищенные соединения и когда использовать VPN",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
              },
            ],
          },
          {
            id: "grade10-cyber",
            grade: 10,
            title: {
              en: "Grade 10 - Cryptography & Web Security",
              ru: "10 класс - Криптография и веб-безопасность",
            },
            description: {
              en: "Explore fundamental cryptography and common web vulnerabilities",
              ru: "Изучите основы криптографии и распространенные уязвимости веб-приложений",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "crypto-basics",
                title: {
                  en: "Applied Cryptography Basics",
                  ru: "Прикладная криптография: основы",
                },
                description: {
                  en: "Symmetric vs asymmetric crypto, hashing, salting, and key safety",
                  ru: "Симметричная и асимметричная криптография, хеширование, соление и безопасность ключей",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
              {
                id: "owasp-top10-intro",
                title: {
                  en: "OWASP Top 10: Introduction",
                  ru: "Введение в OWASP Top 10",
                },
                description: {
                  en: "Understand XSS, CSRF, injection and basic mitigations",
                  ru: "Поймите XSS, CSRF, инъекции и базовые методы защиты",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
              {
                id: "secure-coding-practices",
                title: {
                  en: "Secure Coding Practices",
                  ru: "Практики безопасной разработки",
                },
                description: {
                  en: "Input validation, authentication, and secure storage patterns",
                  ru: "Валидация ввода, аутентификация и безопасное хранение данных",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
            ],
          },
          {
            id: "grade11-cyber",
            grade: 11,
            title: {
              en: "Grade 11 - Blue vs Red: Defense and Ethical Hacking",
              ru: "11 класс - Синие vs Красные: защита и этичный взлом",
            },
            description: {
              en: "Get hands-on with defensive monitoring and beginner-friendly ethical hacking",
              ru: "Практика мониторинга защиты и этичный взлом для начинающих",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "threat-modeling",
                title: {
                  en: "Threat Modeling",
                  ru: "Моделирование угроз",
                },
                description: {
                  en: "Identify assets, attack surfaces and apply basic STRIDE thinking",
                  ru: "Определите активы, поверхности атак и применяйте базовое мышление STRIDE",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
              },
              {
                id: "soc-analyst-fundamentals",
                title: {
                  en: "SOC Analyst Fundamentals",
                  ru: "Основы работы SOC-аналитика",
                },
                description: {
                  en: "Logs, indicators of compromise and an introduction to SIEM tools",
                  ru: "Журналы, индикаторы компрометации и введение в инструменты SIEM",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
              {
                id: "ethical-hacking-labs",
                title: {
                  en: "Ethical Hacking Labs",
                  ru: "Лабы по этичному хакингу",
                },
                description: {
                  en: "Legal and ethical guidelines; beginner CTF challenges and reconnaissance",
                  ru: "Правовые и этические основы; начальные CTF-задачи и разведка",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Security Analyst", ru: "Аналитик безопасности" },
          { en: "Penetration Tester", ru: "Тестировщик на проникновение" },
          { en: "Security Architect", ru: "Архитектор безопасности" },
        ],
        topUniversities: [
          "Carnegie Mellon",
          "MIT",
          "Stanford",
          "Purdue",
          "KazNU",
        ],
        averageSalary: {
          entry: "$85,000",
          mid: "$130,000",
          senior: "$180,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Cybersecurity Fundamentals",
              description: {
                en: "Learn the basics of cybersecurity and information protection",
                ru: "Изучите основы кибербезопасности и защиты информации",
              },
              provider: "Coursera",
              url: "https://coursera.org/learn/cyber-security-basics",
              price: "Free",
            },
            {
              name: "Google Cybersecurity Professional Certificate",
              description: {
                en: "Job-ready training for entry-level cybersecurity roles",
                ru: "Подготовка к стартовым ролям в кибербезопасности",
              },
              provider: "Coursera",
              url: "https://coursera.org/professional-certificates/google-cybersecurity",
              price: "Free to audit",
            },
            {
              name: "CS50’s Introduction to Cybersecurity",
              description: {
                en: "Hands-on introduction to cybersecurity concepts and practices",
                ru: "Практическое введение в концепции и практики кибербезопасности",
              },
              provider: "edX",
              url: "https://www.edx.org/course/cs50s-introduction-to-cybersecurity",
              price: "Free to audit",
            },
            {
              name: "Introduction to Cyber Security Specialization",
              description: {
                en: "Comprehensive beginner path covering threats, crypto and defenses",
                ru: "Комплексный курс для новичков: угрозы, криптография и защиты",
              },
              provider: "Coursera",
              url: "https://coursera.org/specializations/intro-cyber-security",
              price: "Free to audit",
            },
            {
              name: "IBM Cybersecurity Analyst Professional Certificate",
              description: {
                en: "SOC analyst skills: threat intelligence, SIEM and incident response",
                ru: "Навыки SOC-аналитика: разведка угроз, SIEM и реагирование на инциденты",
              },
              provider: "Coursera",
              url: "https://coursera.org/professional-certificates/ibm-cybersecurity-analyst",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "CyberPatriot",
              description: {
                en: "National youth cyber defense competition",
                ru: "Национальное молодежное соревнование по киберзащите",
              },
              url: "https://cyberpatriot.org",
              level: "intermediate",
            },
            {
              name: "picoCTF",
              description: {
                en: "Beginner-friendly, free cybersecurity CTF by Carnegie Mellon",
                ru: "Бесплатный, дружелюбный к новичкам CTF от Carnegie Mellon",
              },
              url: "https://picoctf.org",
              level: "beginner",
            },
            {
              name: "Google CTF (Beginner’s Quest)",
              description: {
                en: "Intro track of Google CTF designed for newcomers",
                ru: "Вводный трек Google CTF для новичков",
              },
              url: "https://capturetheflag.withgoogle.com",
              level: "beginner",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "InfoSec Kazakhstan",
              description: {
                en: "Information security professionals community",
                ru: "Сообщество профессионалов информационной безопасности",
              },
              url: "https://t.me/infosec_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Kazakh National University",
              location: "Almaty",
              programs: ["Information Security", "Cybersecurity"],
              url: "https://kaznu.kz",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "business-administration",
    name: { en: "Business Administration", ru: "Бизнес-администрирование" },
    description: {
      en: "Learn to manage organizations, people, and business operations effectively",
      ru: "Научитесь эффективно управлять организациями, людьми и бизнес-операциями",
    },
    overview: {
      en: "Master business strategy, leadership, finance, and operations to become an effective business leader",
      ru: "Освойте бизнес-стратегию, лидерство, финансы и операции, чтобы стать эффективным бизнес-лидером",
    },
    icon: "💼",
    color: "from-green-500 to-blue-600",
    category: "Business",
    demandLevel: "High",
    averageSalary: "$60,000 - $150,000+",
    topUniversities: [
      "Harvard Business School",
      "Wharton",
      "Stanford GSB",
      "INSEAD",
      "KIMEP",
    ],
    skills: [
      { en: "Leadership", ru: "Лидерство" },
      { en: "Strategic Planning", ru: "Стратегическое планирование" },
      { en: "Financial Analysis", ru: "Финансовый анализ" },
      { en: "Project Management", ru: "Управление проектами" },
    ],
    stats: {
      avgSalary: "$85K",
      jobGrowth: "+8%",
      popularity: "High",
    },
    subspecializations: [
      {
        id: "finance-business-admin",
        name: {
          en: "Finance for Business Administration",
          ru: "Финансы для бизнес-администрирования",
        },
        description: {
          en: "Apply finance to planning, operating, and scaling businesses",
          ru: "Применение финансов к планированию, управлению и развитию бизнеса",
        },
        roadmap: [
          {
            id: "grade7-finba",
            grade: 7,
            title: {
              en: "Grade 7 - Money & Business Basics",
              ru: "7 класс - Основы денег и бизнеса",
            },
            description: {
              en: "Foundations of personal finance, simple business models, and decisions",
              ru: "Основы личных финансов, простые модели бизнеса и принятие решений",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-budgeting-needs-wants",
                title: {
                  en: "Budgeting: Needs vs. Wants",
                  ru: "Бюджет: нужды и желания",
                },
                description: {
                  en: "Create a monthly budget distinguishing needs from wants; track actuals vs plan",
                  ru: "Создайте месячный бюджет, разделив нужды и желания; отслеживайте план/факт",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a Google Sheets budget with categories, totals, and a variance chart over 3 months",
                  ru: "Создайте бюджет в Google Sheets с категориями, итогами и диаграммой отклонений за 3 месяца",
                },
              },
              {
                id: "g7-simple-business-model",
                title: {
                  en: "Simple Business Model (Lemonade Stand)",
                  ru: "Простая бизнес-модель (лимонадная стойка)",
                },
                description: {
                  en: "Identify costs, price, revenue, and basic profit for a small stand",
                  ru: "Определите издержки, цену, выручку и базовую прибыль маленького киоска",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a one-page plan with cost list, pricing, daily sales projection, and profit estimate",
                  ru: "Подготовьте одностраничный план со списком затрат, ценой, прогнозом продаж и оценкой прибыли",
                },
              },
              {
                id: "g7-percentages-in-decisions",
                title: {
                  en: "Percentages in Everyday Decisions",
                  ru: "Проценты в повседневных решениях",
                },
                description: {
                  en: "Calculate discounts, taxes, and simple interest to compare purchase options",
                  ru: "Рассчитывайте скидки, налоги и простой процент для сравнения вариантов покупки",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a comparison sheet for 5 items showing final price after tax/discount and savings",
                  ru: "Создайте таблицу сравнения для 5 товаров с итоговой ценой после налога/скидки и экономией",
                },
              },
            ],
          },
          {
            id: "grade8-finba",
            grade: 8,
            title: {
              en: "Grade 8 - Bookkeeping & Accounting Basics",
              ru: "8 класс - Бухгалтерия и основы учета",
            },
            description: {
              en: "Track transactions, post to ledgers, and prepare simple statements",
              ru: "Учет операций, ведение книги и подготовка простых отчетов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-double-entry",
                title: {
                  en: "Double-Entry Bookkeeping",
                  ru: "Двойная запись",
                },
                description: {
                  en: "Learn debits/credits, journals, and ledgers by recording simple transactions",
                  ru: "Изучите дебет/кредит, журналы и главную книгу на примере простых операций",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Record 20 lemonade-stand transactions in a journal and post them to T-accounts",
                  ru: "Занесите 20 операций лимонадной стойки в журнал и перенесите их на T-счета",
                },
              },
              {
                id: "g8-financial-statements",
                title: {
                  en: "Build Basic Financial Statements",
                  ru: "Составление базовых отчетов",
                },
                description: {
                  en: "Construct an Income Statement and Balance Sheet from ledgers",
                  ru: "Составьте Отчет о прибылях и убытках и Баланс из главной книги",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a spreadsheet that automatically summarizes ledgers into IS and BS",
                  ru: "Создайте таблицу, автоматически сводящую главную книгу в ОПиУ и Баланс",
                },
              },
              {
                id: "g8-spreadsheet-skills",
                title: {
                  en: "Spreadsheet Skills for Finance",
                  ru: "Навыки электронных таблиц для финансов",
                },
                description: {
                  en: "Use SUMIF, VLOOKUP/XLOOKUP, IF, charts, and basic data validation",
                  ru: "Используйте SUMIF, VLOOKUP/XLOOKUP, IF, диаграммы и базовую проверку данных",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a cash tracker with category dropdowns, monthly summary, and charts",
                  ru: "Создайте трекер денег с выпадающими списками категорий, месячной сводкой и диаграммами",
                },
              },
            ],
          },
          {
            id: "grade9-finba",
            grade: 9,
            title: {
              en: "Grade 9 - Corporate Finance Foundations",
              ru: "9 класс - Основы корпоративных финансов",
            },
            description: {
              en: "Time value of money, cost of capital, and project evaluation",
              ru: "Временная стоимость денег, стоимость капитала и оценка проектов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-tvm",
                title: {
                  en: "Time Value of Money (TVM)",
                  ru: "Временная стоимость денег",
                },
                description: {
                  en: "Compute present/future value and build loan amortization tables",
                  ru: "Рассчитывайте текущую/будущую стоимость и создавайте графики амортизации кредита",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a TVM calculator and amortization schedule with scenario toggles",
                  ru: "Создайте калькулятор TVM и график амортизации с переключателями сценариев",
                },
              },
              {
                id: "g9-risk-return-wacc",
                title: {
                  en: "Risk, Return, and Cost of Capital",
                  ru: "Риск, доходность и стоимость капитала",
                },
                description: {
                  en: "Understand expected return, diversification, and estimate simple WACC",
                  ru: "Поймите ожидаемую доходность, диверсификацию и оцените простой WACC",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Estimate WACC using hypothetic debt/equity and compute a discount rate",
                  ru: "Оцените WACC с гипотетическими долгом/капиталом и рассчитайте ставку дисконтирования",
                },
              },
              {
                id: "g9-capital-budgeting",
                title: {
                  en: "Capital Budgeting (NPV/IRR)",
                  ru: "Инвестбюджет (NPV/IRR)",
                },
                description: {
                  en: "Evaluate projects using Payback, NPV, and IRR in spreadsheets",
                  ru: "Оценивайте проекты с помощью окупаемости, NPV и IRR в таблицах",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Compare two projects and recommend one with a write-up of assumptions and risks",
                  ru: "Сравните два проекта и рекомендуйте один с обоснованием допущений и рисков",
                },
              },
            ],
          },
          {
            id: "grade10-finba",
            grade: 10,
            title: {
              en: "Grade 10 - Managerial Finance & Analytics",
              ru: "10 класс - Управленческие финансы и аналитика",
            },
            description: {
              en: "Budgeting, forecasting, unit economics, KPI dashboards",
              ru: "Бюджетирование, прогнозирование, юнит-экономика, KPI-дашборды",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-forecasting",
                title: {
                  en: "Budgeting and Forecasting",
                  ru: "Бюджетирование и прогнозирование",
                },
                description: {
                  en: "Build a revenue and expense forecast with seasonality and scenarios",
                  ru: "Постройте прогноз выручки и затрат с сезонностью и сценариями",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a 12‑month rolling forecast with best/base/worst cases and summary charts",
                  ru: "Создайте 12‑месячный скользящий прогноз с лучшим/базовым/худшим сценариями и диаграммами",
                },
              },
              {
                id: "g10-unit-economics",
                title: {
                  en: "Unit Economics & Break-even",
                  ru: "Юнит-экономика и точка безубыточности",
                },
                description: {
                  en: "Compute contribution margin and break-even quantity; analyze price sensitivity",
                  ru: "Рассчитайте маржинальный доход и точку безубыточности; проанализируйте чувствительность к цене",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Model unit economics for a product; plot break-even and run price/volume scenarios",
                  ru: "Смоделируйте юнит-экономику продукта; постройте график безубыточности и сценарии цена/объем",
                },
              },
              {
                id: "g10-kpi-dashboard",
                title: {
                  en: "KPI Dashboard",
                  ru: "KPI-дашборд",
                },
                description: {
                  en: "Design and track core business metrics (revenue, margin, CAC, LTV)",
                  ru: "Спроектируйте и отслеживайте ключевые метрики (выручка, маржа, CAC, LTV)",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a Google Sheets dashboard with pivot tables and charts updated from raw data",
                  ru: "Создайте дашборд в Google Sheets с сводными таблицами и диаграммами из сырых данных",
                },
              },
            ],
          },
          {
            id: "grade11-finba",
            grade: 11,
            title: {
              en: "Grade 11 - Strategic Finance & Valuation",
              ru: "11 класс - Стратегические финансы и оценка",
            },
            description: {
              en: "Three-statement modeling, valuation, and investor communication",
              ru: "3-отчетная модель, оценка и коммуникация с инвесторами",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-3statement-model",
                title: {
                  en: "Three-Statement Modeling",
                  ru: "3‑отчетная модель",
                },
                description: {
                  en: "Link Income Statement, Balance Sheet, and Cash Flow with drivers",
                  ru: "Свяжите ОПиУ, Баланс и ДДС через драйверы",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Build a simplified 3‑statement model for a small business with debt schedule",
                  ru: "Постройте упрощенную 3‑отчетную модель малого бизнеса с графиком долга",
                },
              },
              {
                id: "g11-valuation",
                title: {
                  en: "Valuation: DCF & Comparables",
                  ru: "Оценка: DCF и мультипликаторы",
                },
                description: {
                  en: "Estimate enterprise value using DCF and trading comparables",
                  ru: "Оцените стоимость компании через DCF и рыночные мультипликаторы",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Perform a mini‑DCF and simple comps table for a public company; write a 1‑page memo",
                  ru: "Сделайте мини‑DCF и простую таблицу мультипликаторов для публичной компании; 1‑страничная записка",
                },
              },
              {
                id: "g11-investor-reporting",
                title: {
                  en: "Investor Pitch & Reporting",
                  ru: "Питч и отчетность для инвесторов",
                },
                description: {
                  en: "Summarize performance and plan; communicate risks and capital needs",
                  ru: "Суммируйте результаты и план; коммуницируйте риски и потребности в капитале",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a one‑pager and monthly update deck with metrics, runway, and roadmap",
                  ru: "Создайте one‑pager и ежемесячную презентацию с метриками, runway и дорожной картой",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Business Analyst", ru: "Бизнес-аналитик" },
          {
            en: "Corporate Finance Analyst",
            ru: "Аналитик корпоративных финансов",
          },
          { en: "FP&A Analyst", ru: "Аналитик FP&A" },
          { en: "Financial Controller", ru: "Финансовый контролер" },
          {
            en: "CFO (long-term)",
            ru: "Финансовый директор (в долгосрочной перспективе)",
          },
        ],
        topUniversities: [
          "Wharton",
          "Harvard",
          "Chicago Booth",
          "MIT Sloan",
          "London Business School",
          "INSEAD",
        ],
        averageSalary: {
          entry: "$60,000",
          mid: "$100,000",
          senior: "$160,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Introduction to Finance",
              description: {
                en: "Core principles of finance with applications to real businesses",
                ru: "Ключевые принципы финансов с применением к реальному бизнесу",
              },
              provider: "University of Michigan (Coursera)",
              url: "https://www.coursera.org/learn/introduction-finance",
              price: "Free to audit",
            },
            {
              name: "Introduction to Corporate Finance",
              description: {
                en: "Time value of money, risk/return, capital budgeting",
                ru: "Временная стоимость денег, риск/доходность, инвестбюджет",
              },
              provider: "Wharton (Coursera)",
              url: "https://www.coursera.org/learn/wharton-finance",
              price: "Free to audit",
            },
            {
              name: "Financial Accounting Fundamentals",
              description: {
                en: "Read and prepare basic financial statements",
                ru: "Чтение и составление базовой финансовой отчетности",
              },
              provider: "UVA Darden (Coursera)",
              url: "https://www.coursera.org/learn/uva-darden-financial-accounting",
              price: "Free to audit",
            },
            {
              name: "Managerial Accounting Fundamentals",
              description: {
                en: "Costs, budgeting, performance measurement",
                ru: "Издержки, бюджетирование, оценка эффективности",
              },
              provider: "UVA Darden (Coursera)",
              url: "https://www.coursera.org/learn/uva-darden-managerial-accounting",
              price: "Free to audit",
            },
            {
              name: "Business and Financial Modeling",
              description: {
                en: "Spreadsheets, models, forecasting, and decision-making",
                ru: "Таблицы, модели, прогнозирование и принятие решений",
              },
              provider: "Wharton (Coursera)",
              url: "https://www.coursera.org/specializations/wharton-business-financial-modeling",
              price: "Free to audit",
            },
            {
              name: "Finance Theory I (15.401)",
              description: {
                en: "MIT OpenCourseWare finance fundamentals",
                ru: "Основы финансов от MIT OpenCourseWare",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/",
              price: "Free",
            },
            {
              name: "Corporate Financial Accounting (15.514/15.515)",
              description: {
                en: "Accounting concepts used by managers",
                ru: "Бухгалтерские концепции для менеджеров",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu/courses/15-514-financial-and-managerial-accounting-summer-2003/",
              price: "Free",
            },
            {
              name: "Corporate Finance",
              description: {
                en: "Valuation, capital structure, payout policy",
                ru: "Оценка, структура капитала, дивиденды",
              },
              provider: "edX",
              url: "https://www.edx.org/course/corporate-finance",
              price: "Free to audit",
            },
            {
              name: "Accounting Essentials",
              description: {
                en: "Introductory financial accounting on edX",
                ru: "Введение в финансовый учет на edX",
              },
              provider: "edX",
              url: "https://www.edx.org/course/accounting-essentials",
              price: "Free to audit",
            },
            {
              name: "Financial Markets",
              description: {
                en: "How financial markets work and why they matter",
                ru: "Как работают финансовые рынки и почему это важно",
              },
              provider: "Yale (Coursera)",
              url: "https://www.coursera.org/learn/financial-markets-global",
              price: "Free to audit",
            },
            {
              name: "Finance and Capital Markets",
              description: {
                en: "Comprehensive videos on finance fundamentals",
                ru: "Обширные видео‑уроки по основам финансов",
              },
              provider: "Khan Academy",
              url: "https://www.khanacademy.org/economics-finance-domain",
              price: "Free",
            },
            {
              name: "Personal Finance",
              description: {
                en: "Budgeting, saving, investing, and credit",
                ru: "Бюджет, сбережения, инвестиции и кредит",
              },
              provider: "Khan Academy",
              url: "https://www.khanacademy.org/college-careers-more/personal-finance",
              price: "Free",
            },
            {
              name: "BUS202: Principles of Finance",
              description: {
                en: "Foundational theories and tools for finance",
                ru: "Фундаментальные теории и инструменты финансов",
              },
              provider: "Saylor Academy",
              url: "https://learn.saylor.org/course/BUS202",
              price: "Free",
            },
            {
              name: "BUS103: Introduction to Financial Accounting",
              description: {
                en: "Core accounting for business decisions",
                ru: "Основы учета для бизнес-решений",
              },
              provider: "Saylor Academy",
              url: "https://learn.saylor.org/course/BUS103",
              price: "Free",
            },
            {
              name: "Managing My Money",
              description: {
                en: "Practical money skills for life and business",
                ru: "Практические навыки обращения с деньгами для жизни и бизнеса",
              },
              provider: "OpenLearn (The Open University)",
              url: "https://www.open.edu/openlearn/money-business/managing-my-money/content-section-0",
              price: "Free",
            },
            {
              name: "Bookkeeping for Personal and Business Accounting",
              description: {
                en: "Basics of bookkeeping including double-entry",
                ru: "Основы бухгалтерии, включая двойную запись",
              },
              provider: "ACCA (FutureLearn)",
              url: "https://www.futurelearn.com/courses/bookkeeping-for-personal-and-business-accounting",
              price: "Free to join",
            },
            {
              name: "Fundamentals of Quantitative Modeling",
              description: {
                en: "Modeling and spreadsheet skills for business",
                ru: "Моделирование и навыки работы с таблицами для бизнеса",
              },
              provider: "Wharton (Coursera)",
              url: "https://www.coursera.org/learn/wharton-quantitative-modeling",
              price: "Free to audit",
            },
            {
              name: "Excel Skills for Business: Essentials",
              description: {
                en: "Excel basics for business analysis and finance",
                ru: "Основы Excel для бизнес-аналитики и финансов",
              },
              provider: "Macquarie (Coursera)",
              url: "https://www.coursera.org/learn/excel-essentials",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "Wharton Global High School Investment Competition",
              description: {
                en: "Team-based investment strategy competition for students",
                ru: "Командное соревнование по инвестиционным стратегиям для студентов",
              },
              url: "https://globalyouth.wharton.upenn.edu/investment-competition/",
              level: "intermediate",
            },
            {
              name: "SIFMA Stock Market Game",
              description: {
                en: "Simulation game for learning markets and portfolio management",
                ru: "Симуляция рынков и управления портфелем",
              },
              url: "https://www.stockmarketgame.org",
              level: "beginner",
            },
            {
              name: "Fed Challenge",
              description: {
                en: "Economic analysis and policy recommendation competition",
                ru: "Соревнование по экономическому анализу и рекомендациям по политике",
              },
              url: "https://www.newyorkfed.org/education/fed-challenge",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Finance Professionals Kazakhstan",
              description: {
                en: "Community of finance professionals and students",
                ru: "Сообщество финансовых профессионалов и студентов",
              },
              url: "https://t.me/finance_kz",
              type: "Telegram",
            },
            {
              name: "AIFC Community",
              description: {
                en: "Astana International Financial Centre community and events",
                ru: "Сообщество и мероприятия МФЦА",
              },
              url: "https://aifc.kz",
              type: "Hub",
            },
          ],
          universities: [
            {
              name: "KIMEP University",
              location: "Almaty",
              programs: ["Business Administration", "Finance", "Accounting"],
              url: "https://kimep.kz",
            },
            {
              name: "Narxoz University",
              location: "Almaty",
              programs: ["Finance", "Accounting & Audit", "Business Analytics"],
              url: "https://narxoz.edu.kz",
            },
            {
              name: "Nazarbayev University",
              location: "Astana",
              programs: ["Business Administration", "Economics"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
      {
        id: "marketing",
        name: { en: "Marketing", ru: "Маркетинг" },
        description: {
          en: "Create strategies to promote products and services to target audiences",
          ru: "Создавайте стратегии для продвижения продуктов и услуг целевой аудитории",
        },
        roadmap: [
          {
            id: "grade7-marketing",
            grade: 7,
            title: {
              en: "Grade 7 - Consumer Psychology",
              ru: "7 класс - Психология потребителей",
            },
            description: {
              en: "Understand why people buy things and basic marketing concepts",
              ru: "Понимание того, почему люди покупают вещи и основные концепции маркетинга",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "advertising-analysis",
                title: { en: "Advertisement Analysis", ru: "Анализ рекламы" },
                description: {
                  en: "Study successful ads and understand persuasion techniques",
                  ru: "Изучайте успешную рекламу и понимайте техники убеждения",
                },
                timeline: { en: "8 weeks", ru: "8 недель" },
                project: {
                  en: "Create presentation analyzing 10 famous ad campaigns",
                  ru: "Создайте презентацию, анализирующую 10 знаменитых рекламных кампаний",
                },
              },
              {
                id: "g7-customer-persona-basics",
                title: {
                  en: "Customer Persona Basics",
                  ru: "Базовые портреты клиентов",
                },
                description: {
                  en: "Identify target audience segments and their needs, pains, and triggers",
                  ru: "Определите сегменты целевой аудитории и их потребности, боли и триггеры",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build 3 personas with demographics, goals, and buying journey notes",
                  ru: "Создайте 3 персоны с демографией, целями и заметками о пути покупки",
                },
              },
              {
                id: "g7-value-proposition",
                title: {
                  en: "Value Proposition Canvas (Intro)",
                  ru: "Value Proposition Canvas (введение)",
                },
                description: {
                  en: "Map customer jobs, pains, gains and align product features",
                  ru: "Сопоставьте задачи, боли и выгоды клиента с возможностями продукта",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draft a one‑page value proposition for a school store product",
                  ru: "Подготовьте одностраничное value proposition для товара школьного магазина",
                },
              },
            ],
          },
          {
            id: "grade8-marketing",
            grade: 8,
            title: {
              en: "Grade 8 - Branding & Content",
              ru: "8 класс - Брендинг и контент",
            },
            description: {
              en: "Develop brand identity and plan educational, entertaining content",
              ru: "Развивайте айдентику бренда и планируйте обучающий и развлекательный контент",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-brand-identity",
                title: {
                  en: "Brand Identity Starter",
                  ru: "Айдентика бренда: старт",
                },
                description: {
                  en: "Define mission, tone of voice, and simple visual guidelines",
                  ru: "Определите миссию, тон общения и простые визуальные гайдлайны",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a mini brand book (logo draft, colors, typography, examples)",
                  ru: "Создайте мини‑брендбук (эскиз логотипа, цвета, шрифты, примеры)",
                },
              },
              {
                id: "g8-content-calendar",
                title: { en: "Content Calendar", ru: "Контент‑календарь" },
                description: {
                  en: "Plan posts across 2–3 channels with formats and goals",
                  ru: "Планируйте публикации для 2–3 каналов с форматами и целями",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a 6‑week calendar with copy ideas and assets checklist",
                  ru: "Создайте 6‑недельный календарь с идеями текста и чек‑листом материалов",
                },
              },
              {
                id: "g8-social-media-basics",
                title: { en: "Social Media Basics", ru: "Основы SMM" },
                description: {
                  en: "Choose channels, set objectives, and design safe posting rules",
                  ru: "Выберите каналы, поставьте цели и разработайте безопасные правила постинга",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Launch a class club page with 10 posts and engagement tracking",
                  ru: "Запустите страницу классного клуба с 10 постами и отслеживанием вовлеченности",
                },
              },
            ],
          },
          {
            id: "grade9-marketing",
            grade: 9,
            title: {
              en: "Grade 9 - Channels, Funnel & Analytics",
              ru: "9 класс - Каналы, воронка и аналитика",
            },
            description: {
              en: "Map acquisition channels, funnel metrics, and basic analytics",
              ru: "Сопоставьте каналы привлечения, метрики воронки и базовую аналитику",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-funnel-metrics",
                title: {
                  en: "Funnel Metrics (AARRR)",
                  ru: "Метрики воронки (AARRR)",
                },
                description: {
                  en: "Define awareness, acquisition, activation, retention, revenue",
                  ru: "Определите awareness, acquisition, activation, retention, revenue",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Model a funnel in Sheets and report conversion by stage",
                  ru: "Смоделируйте воронку в таблице и рассчитайте конверсии по этапам",
                },
              },
              {
                id: "g9-analytics-ga4-basics",
                title: {
                  en: "Analytics Basics (GA4 demo)",
                  ru: "Основы аналитики (GA4 демо)",
                },
                description: {
                  en: "Events vs sessions, UTMs, and simple reports",
                  ru: "События и сессии, UTM‑метки и простые отчеты",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a sample UTM plan and mock GA4 dashboard screenshots",
                  ru: "Создайте план UTM и макет дашборда GA4 со скриншотами",
                },
              },
              {
                id: "g9-email-marketing",
                title: { en: "Email Marketing 101", ru: "Email‑маркетинг 101" },
                description: {
                  en: "List building, welcome series, compliance and deliverability",
                  ru: "Сбор базы, welcome‑серии, комплаенс и доставляемость",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a 3‑email welcome flow with goals and sample copy",
                  ru: "Спроектируйте 3‑письменный welcome‑флоу с целями и примерами текста",
                },
              },
            ],
          },
          {
            id: "grade10-marketing",
            grade: 10,
            title: {
              en: "Grade 10 - SEO, Ads & CRO",
              ru: "10 класс - SEO, реклама и CRO",
            },
            description: {
              en: "Organic discovery, paid acquisition, and conversion optimization",
              ru: "Органический трафик, платное привлечение и оптимизация конверсии",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-seo-basics",
                title: { en: "SEO Basics", ru: "Основы SEO" },
                description: {
                  en: "Keywords, on‑page, technical basics, and content outlines",
                  ru: "Ключевые слова, он‑пейдж, технические основы и схемы контента",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Publish an SEO brief with keyword map and on‑page checklist",
                  ru: "Подготовьте SEO‑бриф с картой ключей и чек‑листом on‑page",
                },
              },
              {
                id: "g10-paid-ads",
                title: {
                  en: "Paid Ads Fundamentals",
                  ru: "Основы платной рекламы",
                },
                description: {
                  en: "Campaign structure, targeting, creatives, and budgeting",
                  ru: "Структура кампаний, таргетинг, креативы и бюджетирование",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a mock Google Ads plan with SKAGs, ads, and budget split",
                  ru: "Соберите макет плана Google Ads с SKAG, объявлениями и распределением бюджета",
                },
              },
              {
                id: "g10-cro",
                title: {
                  en: "Conversion Rate Optimization",
                  ru: "Оптимизация конверсии (CRO)",
                },
                description: {
                  en: "Hypothesis, A/B test design, and heuristic evaluation",
                  ru: "Гипотезы, дизайн A/B‑тестов и эвристическая оценка",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run a paper A/B test plan on a landing page with expected lift",
                  ru: "Подготовьте план A/B‑теста для лендинга с ожидаемым приростом",
                },
              },
            ],
          },
          {
            id: "grade11-marketing",
            grade: 11,
            title: {
              en: "Grade 11 - Strategy & Capstone Campaign",
              ru: "11 класс - Стратегия и итоговая кампания",
            },
            description: {
              en: "Market research, integrated planning, budgeting and reporting",
              ru: "Маркетинговые исследования, интегрированное планирование, бюджет и отчётность",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-market-research",
                title: {
                  en: "Market Research & Surveys",
                  ru: "Маркетинговые исследования и опросы",
                },
                description: {
                  en: "Primary/secondary research, sampling, surveys and interviews",
                  ru: "Первичные/вторичные исследования, выборка, опросы и интервью",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Run a 50‑response survey; summarize insights and implications",
                  ru: "Проведите опрос на 50 ответов; подготовьте инсайты и выводы",
                },
              },
              {
                id: "g11-integrated-campaign",
                title: {
                  en: "Integrated Campaign Plan",
                  ru: "Интегрированный план кампании",
                },
                description: {
                  en: "Objectives, messaging, channels, timeline, and KPIs",
                  ru: "Цели, сообщения, каналы, таймлайн и KPI",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Produce a campaign deck with media plan and KPI dashboard",
                  ru: "Подготовьте презентацию кампании с медиапланом и дашбордом KPI",
                },
              },
              {
                id: "g11-capstone-reporting",
                title: {
                  en: "Capstone: Execution & Reporting",
                  ru: "Капстоун: запуск и отчётность",
                },
                description: {
                  en: "Launch a small initiative, track results and present learnings",
                  ru: "Запустите небольшую инициативу, отследите результаты и представьте выводы",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver post‑mortem with metrics, ROI estimate, and next steps",
                  ru: "Сделайте пост‑мортем с метриками, оценкой ROI и следующими шагами",
                },
              },
            ],
          },
        ],
        careerPaths: [
          {
            en: "Digital Marketing Manager",
            ru: "Менеджер цифрового маркетинга",
          },
          { en: "Brand Manager", ru: "Бренд-менеджер" },
          { en: "Marketing Analyst", ru: "Маркетинговый аналитик" },
        ],
        topUniversities: [
          "Northwestern Kellogg",
          "Wharton",
          "Stanford",
          "Harvard",
          "KIMEP",
        ],
        averageSalary: {
          entry: "$55,000",
          mid: "$85,000",
          senior: "$140,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Fundamentals of Digital Marketing",
              description: {
                en: "Comprehensive intro to digital marketing with certification",
                ru: "Всеобъемлющее введение в цифровой маркетинг с сертификатом",
              },
              provider: "Google Digital Garage",
              url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
              price: "Free",
            },
            {
              name: "Google Analytics 4 (GA4) Skillshop",
              description: {
                en: "Measure, analyze, and improve web and app performance",
                ru: "Измеряйте, анализируйте и улучшайте показатели сайта и приложений",
              },
              provider: "Google Skillshop",
              url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-analytics",
              price: "Free",
            },
            {
              name: "Google Ads Search Certification",
              description: {
                en: "Search campaign planning and optimization",
                ru: "Планирование и оптимизация поисковых кампаний",
              },
              provider: "Google Skillshop",
              url: "https://skillshop.exceedlms.com/student/path/18069-google-ads-search-certification",
              price: "Free",
            },
            {
              name: "HubSpot Content Marketing Certification",
              description: {
                en: "Content planning, production, and promotion",
                ru: "Планирование, производство и продвижение контента",
              },
              provider: "HubSpot Academy",
              url: "https://academy.hubspot.com/courses/content-marketing",
              price: "Free",
            },
            {
              name: "HubSpot Inbound Marketing",
              description: {
                en: "Inbound methodology for attracting and converting users",
                ru: "Методология inbound для привлечения и конверсии пользователей",
              },
              provider: "HubSpot Academy",
              url: "https://academy.hubspot.com/courses/inbound-marketing",
              price: "Free",
            },
            {
              name: "SEO Fundamentals Course",
              description: {
                en: "Core SEO concepts and tasks for beginners",
                ru: "Базовые концепции и задачи SEO для новичков",
              },
              provider: "Semrush Academy",
              url: "https://www.semrush.com/academy/courses/seo-fundamentals-course-with-greg-gifford",
              price: "Free",
            },
            {
              name: "SEO Training Course",
              description: {
                en: "Practical SEO training by Ahrefs",
                ru: "Практический курс по SEO от Ahrefs",
              },
              provider: "Ahrefs Academy",
              url: "https://ahrefs.com/academy/seo-training-course",
              price: "Free",
            },
            {
              name: "Introduction to Marketing",
              description: {
                en: "Customer centricity, branding, and go-to-market",
                ru: "Клиентоориентированность, брендинг и вывод на рынок",
              },
              provider: "Wharton (edX)",
              url: "https://www.edx.org/course/introduction-to-marketing",
              price: "Free to audit",
            },
            {
              name: "Digital Marketing Specialization (Audit)",
              description: {
                en: "SEO, social media, 3D printing, analytics overview",
                ru: "SEO, соцсети, 3D‑печать, обзор аналитики",
              },
              provider: "UIUC (Coursera)",
              url: "https://www.coursera.org/specializations/digital-marketing",
              price: "Free to audit",
            },
            {
              name: "BUS203: Principles of Marketing",
              description: {
                en: "Foundations of marketing strategy and tactics",
                ru: "Основы маркетинговой стратегии и тактики",
              },
              provider: "Saylor Academy",
              url: "https://learn.saylor.org/course/BUS203",
              price: "Free",
            },
            {
              name: "Social Media Marketing",
              description: {
                en: "Plan and execute social media strategies",
                ru: "Планирование и выполнение SMM‑стратегий",
              },
              provider: "OpenLearn",
              url: "https://www.open.edu/openlearn/money-business/social-media-marketing/content-section-overview",
              price: "Free",
            },
            {
              name: "Meta Digital Marketing Associate (Prep)",
              description: {
                en: "Core concepts for Meta platforms and ads",
                ru: "Основные концепции платформ и рекламы Meta",
              },
              provider: "Meta Blueprint",
              url: "https://www.facebook.com/business/learn/certification/exams/100-101",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Google Online Marketing Challenge",
              description: {
                en: "Real-world digital marketing competition",
                ru: "Реальное соревнование по цифровому маркетингу",
              },
              url: "https://onlinechallenges.withgoogle.com",
              level: "intermediate",
            },
            {
              name: "DECA Marketing Events",
              description: {
                en: "High school competitive events in marketing and business",
                ru: "Школьные соревнования по маркетингу и бизнесу",
              },
              url: "https://www.deca.org/compete/high-school-division",
              level: "beginner",
            },
            {
              name: "L’Oréal Brandstorm",
              description: {
                en: "Global innovation case competition by L’Oréal",
                ru: "Глобальный кейс‑чемпионат по инновациям от L’Oréal",
              },
              url: "https://brandstorm.loreal.com",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Marketing Kazakhstan",
              description: {
                en: "Marketing professionals and enthusiasts community",
                ru: "Сообщество маркетологов и энтузиастов",
              },
              url: "https://t.me/marketing_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "KIMEP University",
              location: "Almaty",
              programs: ["Marketing", "Brand Management", "Digital Marketing"],
              url: "https://kimep.kz",
            },
          ],
        },
      },
      {
        id: "entrepreneurship",
        name: { en: "Entrepreneurship", ru: "Предпринимательство" },
        description: {
          en: "Start and grow your own business ventures",
          ru: "Начните и развивайте собственные бизнес-предприятия",
        },
        roadmap: [
          {
            id: "grade7-entrepreneur",
            grade: 7,
            title: {
              en: "Grade 7 - Business Ideas",
              ru: "7 класс - Бизнес-идеи",
            },
            description: {
              en: "Learn to identify opportunities and generate business ideas",
              ru: "Научитесь выявлять возможности и генерировать бизнес-идеи",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "mini-business",
                title: {
                  en: "Mini Business Project",
                  ru: "Мини бизнес-проект",
                },
                description: {
                  en: "Start a small business (lemonade stand, tutoring, crafts)",
                  ru: "Начните небольшой бизнес (продажа лимонада, репетиторство, рукоделие)",
                },
                timeline: { en: "3 months", ru: "3 месяца" },
                project: {
                  en: "Earn $100+ profit and document the experience",
                  ru: "Заработайте $100+ прибыли и задокументируйте опыт",
                },
              },
              {
                id: "g7-problem-discovery",
                title: {
                  en: "Problem Discovery & Customer Interviews",
                  ru: "Выявление проблем и интервью с клиентами",
                },
                description: {
                  en: "Practice observation and craft non-leading interview questions",
                  ru: "Практикуйте наблюдение и формулируйте не наводящие вопросы для интервью",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Conduct 10 interviews; synthesize top 5 insights",
                  ru: "Проведите 10 интервью; сформулируйте 5 ключевых инсайтов",
                },
              },
              {
                id: "g7-basic-unit-economics",
                title: {
                  en: "Basic Unit Economics",
                  ru: "Базовая юнит-экономика",
                },
                description: {
                  en: "Estimate unit cost, price, and contribution margin",
                  ru: "Оцените себестоимость, цену и маржинальный доход на единицу",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a sheet with cost breakdown and break-even chart",
                  ru: "Создайте таблицу со структурой затрат и графиком безубыточности",
                },
              },
            ],
          },
          {
            id: "grade8-entrepreneur",
            grade: 8,
            title: {
              en: "Grade 8 - Validation & Prototyping",
              ru: "8 класс - Валидация и прототипирование",
            },
            description: {
              en: "Test assumptions quickly with MVPs and simple experiments",
              ru: "Проверяйте гипотезы через MVP и простые эксперименты",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-mvp-landing",
                title: { en: "MVP: Landing Page", ru: "MVP: лендинг" },
                description: {
                  en: "Communicate problem/solution and capture interest (no code ok)",
                  ru: "Сформулируйте проблему/решение и собирайте интерес (без кода допустимо)",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Launch a one‑page site with waitlist; collect 50+ signups or 100 visits",
                  ru: "Запустите одностраничник с листом ожидания; соберите 50+ заявок или 100 визитов",
                },
              },
              {
                id: "g8-experiment-design",
                title: { en: "Experiment Design", ru: "Дизайн эксперимента" },
                description: {
                  en: "Set hypothesis, success metrics, and run A/B or smoke tests",
                  ru: "Определите гипотезу, метрики успеха и проведите A/B или smoke‑тест",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Execute 2 experiments; report results and decision",
                  ru: "Проведите 2 эксперимента; подготовьте отчёт и решение",
                },
              },
              {
                id: "g8-basic-accounting-startup",
                title: {
                  en: "Basic Accounting for Startups",
                  ru: "Базовый учет для стартапов",
                },
                description: {
                  en: "Track cash in/out, simple P&L and runway",
                  ru: "Отслеживайте притоки/оттоки, простой P&L и runway",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a cash ledger and monthly P&L for 6 months",
                  ru: "Создайте денежный журнал и месячный P&L за 6 месяцев",
                },
              },
            ],
          },
          {
            id: "grade9-entrepreneur",
            grade: 9,
            title: {
              en: "Grade 9 - Business Models & Markets",
              ru: "9 класс - Бизнес‑модели и рынки",
            },
            description: {
              en: "Model revenue streams, size markets, and outline go‑to‑market",
              ru: "Моделируйте источники выручки, оценивайте рынок и планируйте GTM",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-bmc",
                title: {
                  en: "Business Model Canvas",
                  ru: "Business Model Canvas",
                },
                description: {
                  en: "Map partners, activities, channels, costs and revenues",
                  ru: "Сопоставьте партнеров, активности, каналы, издержки и доходы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Complete a BMC and annotate top 3 risks",
                  ru: "Заполните BMC и отметьте 3 главных риска",
                },
              },
              {
                id: "g9-market-sizing",
                title: {
                  en: "Market Sizing (TAM/SAM/SOM)",
                  ru: "Оценка рынка (TAM/SAM/SOM)",
                },
                description: {
                  en: "Estimate top‑down and bottom‑up opportunity",
                  ru: "Оцените потенциал сверху‑вниз и снизу‑вверх",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a market model with sources and sensitivity table",
                  ru: "Постройте модель рынка с источниками и таблицей чувствительности",
                },
              },
              {
                id: "g9-go-to-market",
                title: {
                  en: "Go‑to‑Market Outline",
                  ru: "План вывода на рынок",
                },
                description: {
                  en: "Define ICP, channels, messaging and milestones",
                  ru: "Определите ICP, каналы, сообщения и вехи",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create a 90‑day GTM plan with weekly cadence and KPIs",
                  ru: "Создайте 90‑дневный GTM‑план с недельным ритмом и KPI",
                },
              },
            ],
          },
          {
            id: "grade10-entrepreneur",
            grade: 10,
            title: {
              en: "Grade 10 - Product, Growth & Funding",
              ru: "10 класс - Продукт, рост и финансирование",
            },
            description: {
              en: "Iterate product, design growth loops, and explore funding",
              ru: "Итерируйте продукт, разрабатывайте петли роста и изучайте финансирование",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-product-roadmap",
                title: {
                  en: "Product Roadmap & Prioritization",
                  ru: "Дорожная карта продукта и приоритизация",
                },
                description: {
                  en: "Backlog, impact/effort, and release planning",
                  ru: "Бэклог, оценка влияние/усилие и планирование релизов",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a 2‑quarter roadmap with goals and success metrics",
                  ru: "Сформируйте дорожную карту на 2 квартала с целями и метриками",
                },
              },
              {
                id: "g10-growth-loops",
                title: {
                  en: "Growth Loops & Retention",
                  ru: "Петли роста и удержание",
                },
                description: {
                  en: "Identify referral, content, or usage loops and retention levers",
                  ru: "Определите реферальные, контентные или продуктовые петли и рычаги удержания",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a loop diagram and forecast weekly growth",
                  ru: "Спроектируйте диаграмму петли и спрогнозируйте недельный рост",
                },
              },
              {
                id: "g10-funding-basics",
                title: {
                  en: "Funding Basics & Pitch Outline",
                  ru: "Основы финансирования и структура питча",
                },
                description: {
                  en: "Bootstrapping, grants, angels, and crafting a story",
                  ru: "Бутстраппинг, гранты, ангелы и создание истории",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draft a 10‑slide deck and 3‑minute pitch script",
                  ru: "Подготовьте 10‑слайдовую презентацию и 3‑минутный скрипт питча",
                },
              },
            ],
          },
          {
            id: "grade11-entrepreneur",
            grade: 11,
            title: {
              en: "Grade 11 - Startup Finance, Legal & Capstone",
              ru: "11 класс - Финансы стартапа, право и капстоун",
            },
            description: {
              en: "Model startup finances, cover basics of legal, and pitch",
              ru: "Смоделируйте финансы стартапа, охватите основы права и проведите питч",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-3statement-lite",
                title: {
                  en: "3‑Statement Lite for Startups",
                  ru: "Облегчённая 3‑отчётная модель",
                },
                description: {
                  en: "Link revenue drivers to P&L, cash, and key KPIs",
                  ru: "Свяжите драйверы выручки с P&L, денежным потоком и ключевыми KPI",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Build a 12‑month model with runway and hiring plan",
                  ru: "Постройте 12‑месячную модель с runway и планом найма",
                },
              },
              {
                id: "g11-legal-basics",
                title: { en: "Legal Basics", ru: "Правовые основы" },
                description: {
                  en: "Entities, IP basics, contracts, and compliance overview",
                  ru: "Формы юрлиц, основы ИС, договоры и обзор комплаенса",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Prepare a terms outline, simple NDA, and risk register",
                  ru: "Подготовьте схему условий, простой NDA и реестр рисков",
                },
              },
              {
                id: "g11-investor-pitch-capstone",
                title: {
                  en: "Investor Pitch Capstone",
                  ru: "Капстоун: питч инвесторам",
                },
                description: {
                  en: "Synthesize learning into a coherent investor story",
                  ru: "Синтезируйте знания в связный рассказ для инвесторов",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Run a live 5‑minute pitch with Q&A; submit data room checklist",
                  ru: "Проведите 5‑минутный питч с Q&A; сдайте чек‑лист data room",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Startup Founder", ru: "Основатель стартапа" },
          {
            en: "Business Development Manager",
            ru: "Менеджер по развитию бизнеса",
          },
          { en: "Venture Capitalist", ru: "Венчурный капиталист" },
        ],
        topUniversities: ["Stanford", "Harvard", "MIT", "Babson", "KIMEP"],
        averageSalary: {
          entry: "$50,000",
          mid: "$90,000",
          senior: "Unlimited",
        },
        globalResources: {
          courses: [
            {
              name: "Startup School",
              description: {
                en: "Practical startup curriculum, videos, and resources",
                ru: "Практический курс для стартапов, видео и ресурсы",
              },
              provider: "Y Combinator",
              url: "https://www.startupschool.org/",
              price: "Free",
            },
            {
              name: "How to Start a Startup",
              description: {
                en: "Lectures by founders and investors on building startups",
                ru: "Лекции основателей и инвесторов о создании стартапов",
              },
              provider: "Stanford (Archive)",
              url: "https://startupclass.samaltman.com/",
              price: "Free",
            },
            {
              name: "New Enterprises (15.390)",
              description: {
                en: "MIT course on starting technology ventures",
                ru: "Курс MIT о запуске технологических компаний",
              },
              provider: "MIT OpenCourseWare",
              url: "https://ocw.mit.edu/courses/15-390-new-enterprises-fall-2013/",
              price: "Free",
            },
            {
              name: "Entrepreneurship 101: Who is your customer?",
              description: {
                en: "Customer discovery and problem validation",
                ru: "Поиск клиентов и проверка проблем",
              },
              provider: "MITx (edX)",
              url: "https://www.edx.org/course/entrepreneurship-101-who-is-your-customer",
              price: "Free to audit",
            },
            {
              name: "BUS305: Small Business Management",
              description: {
                en: "Plan, finance, operate and grow small businesses",
                ru: "Планирование, финансирование, управление и рост малого бизнеса",
              },
              provider: "Saylor Academy",
              url: "https://learn.saylor.org/course/BUS305",
              price: "Free",
            },
            {
              name: "Entrepreneurship – from ideas to reality",
              description: {
                en: "Turning ideas into viable businesses",
                ru: "Преобразование идей в жизнеспособный бизнес",
              },
              provider: "OpenLearn",
              url: "https://www.open.edu/openlearn/money-business/entrepreneurship-ideas-reality/content-section-overview",
              price: "Free",
            },
            {
              name: "Developing Innovative Ideas for New Companies",
              description: {
                en: "Opportunity identification and business modeling",
                ru: "Определение возможностей и моделирование бизнеса",
              },
              provider: "University of Maryland (Coursera)",
              url: "https://www.coursera.org/learn/innovative-ideas",
              price: "Free to audit",
            },
            {
              name: "How to Build a Startup",
              description: {
                en: "Lean startup, customer development by Steve Blank",
                ru: "Lean startup и customer development от Стива Бланка",
              },
              provider: "Udacity",
              url: "https://www.udacity.com/course/how-to-build-a-startup--ep245",
              price: "Free",
            },
            {
              name: "Technology Entrepreneurship: Lab to Market",
              description: {
                en: "Path from invention to market adoption",
                ru: "Путь от изобретения к рыночному принятию",
              },
              provider: "Harvard (edX)",
              url: "https://www.edx.org/course/technology-entrepreneurship-lab-to-market",
              price: "Free to audit",
            },
            {
              name: "Entrepreneurship in Emerging Economies",
              description: {
                en: "How entrepreneurship addresses complex social problems",
                ru: "Как предпринимательство решает сложные социальные проблемы",
              },
              provider: "Harvard (edX)",
              url: "https://www.edx.org/course/entrepreneurship-in-emerging-economies",
              price: "Free to audit",
            },
            {
              name: "BUS210: Corporate Communication",
              description: {
                en: "Persuasive presentations, memos, and investor comms",
                ru: "Убедительные презентации, записки и коммуникация с инвесторами",
              },
              provider: "Saylor Academy",
              url: "https://learn.saylor.org/course/BUS210",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Global Student Entrepreneur Awards (GSEA)",
              description: {
                en: "Competition for student entrepreneurs worldwide",
                ru: "Соревнование для студентов-предпринимателей по всему миру",
              },
              url: "https://gsea.org",
              level: "advanced",
            },
            {
              name: "Diamond Challenge",
              description: {
                en: "High school entrepreneurship competition by University of Delaware",
                ru: "Школьный конкурс предпринимательства от Университета Делавэра",
              },
              url: "https://diamondchallenge.org",
              level: "beginner",
            },
            {
              name: "Technovation Girls",
              description: {
                en: "Global tech entrepreneurship challenge for girls",
                ru: "Глобальный челлендж технологического предпринимательства для девушек",
              },
              url: "https://technovationchallenge.org",
              level: "intermediate",
            },
            {
              name: "JA Company Program Competitions",
              description: {
                en: "Student company creation and competitions (JA Worldwide)",
                ru: "Создание ученических компаний и соревнования (JA Worldwide)",
              },
              url: "https://www.jaworldwide.org/ja-company-program/",
              level: "beginner",
            },
            {
              name: "Hult Prize",
              description: {
                en: "Global entrepreneurship competition focused on impact",
                ru: "Глобальный конкурс предпринимательства с фокусом на импакт",
              },
              url: "https://www.hultprize.org",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Startup Kazakhstan",
              description: {
                en: "Community of entrepreneurs and startup enthusiasts",
                ru: "Сообщество предпринимателей и энтузиастов стартапов",
              },
              url: "https://t.me/startup_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "KIMEP University",
              location: "Almaty",
              programs: ["Entrepreneurship", "Innovation Management"],
              url: "https://kimep.kz",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "mechanical-engineering",
    name: { en: "Mechanical Engineering", ru: "Машиностроение" },
    description: {
      en: "Design, develop, and manufacture mechanical systems and machines",
      ru: "Проектирование, разработка и производство механических систем и машин",
    },
    overview: {
      en: "Apply physics and materials science to design, analyze, and manufacture mechanical systems",
      ru: "Применяйте физику и материаловедение для проектирования, анализа и производства механических систем",
    },
    icon: "⚙️",
    color: "from-orange-500 to-red-600",
    category: "Engineering",
    demandLevel: "High",
    averageSalary: "$70,000 - $120,000+",
    topUniversities: [
      "MIT",
      "Stanford",
      "UC Berkeley",
      "Georgia Tech",
      "KazATU",
    ],
    skills: [
      { en: "CAD Design", ru: "CAD проектирование" },
      { en: "Thermodynamics", ru: "Термодинамика" },
      { en: "Materials Science", ru: "Материаловедение" },
      { en: "Manufacturing", ru: "Производство" },
    ],
    stats: {
      avgSalary: "$75K",
      jobGrowth: "+7%",
      popularity: "High",
    },
    subspecializations: [
      {
        id: "automotive",
        name: { en: "Automotive Engineering", ru: "Автомобильная инженерия" },
        description: {
          en: "Design and develop vehicles and automotive systems",
          ru: "Проектирование и разработка транспортных средств и автомобильных систем",
        },
        roadmap: [
          {
            id: "grade7-auto",
            grade: 7,
            title: {
              en: "Grade 7 - How Cars Work",
              ru: "7 класс - Как работают автомобили",
            },
            description: {
              en: "Understand basic automotive systems and components",
              ru: "Понимание основных автомобильных систем и компонентов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "car-anatomy",
                title: {
                  en: "Car Systems Study",
                  ru: "Изучение автомобильных систем",
                },
                description: {
                  en: "Learn about engines, transmission, brakes, suspension",
                  ru: "Изучите двигатели, трансмиссию, тормоза, подвеску",
                },
                timeline: { en: "6 weeks", ru: "6 недель" },
                project: {
                  en: "Create detailed diagram of car systems with explanations",
                  ru: "Создайте подробную схему автомобильных систем с объяснениями",
                },
              },
              {
                id: "rc-car-build",
                title: {
                  en: "Build RC Car",
                  ru: "Сборка радиоуправляемой машины",
                },
                description: {
                  en: "Assemble and modify a remote control car",
                  ru: "Соберите и модифицируйте радиоуправляемую машину",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Document modifications and performance improvements",
                  ru: "Задокументируйте модификации и улучшения производительности",
                },
              },
              {
                id: "g7-maintenance-safety",
                title: {
                  en: "Basic Maintenance & Safety",
                  ru: "Базовое обслуживание и безопасность",
                },
                description: {
                  en: "Safe tool use, tire pressure, fluids, and checklist creation",
                  ru: "Безопасное использование инструментов, давление шин, жидкости и чек‑лист",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a monthly maintenance checklist and demo on a bicycle or scooter",
                  ru: "Составьте ежемесячный чек‑лист обслуживания и проведите демо на велосипеде или самокате",
                },
              },
            ],
          },
          {
            id: "grade8-auto",
            grade: 8,
            title: {
              en: "Grade 8 - Systems & Tools",
              ru: "8 класс - Системы и инструменты",
            },
            description: {
              en: "Dive deeper into vehicle subsystems and basic CAD",
              ru: "Углубление в подсистемы автомобиля и базовый CAD",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-engine-model",
                title: {
                  en: "Engine Model & Thermodynamics (Intro)",
                  ru: "Модель двигателя и термодинамика (введение)",
                },
                description: {
                  en: "Cycle basics (intake, compression, power, exhaust) using models",
                  ru: "Основы циклов (впуск, сжатие, рабочий ход, выпуск) на моделях",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a working paper/cardboard 4‑stroke model and annotate the cycle",
                  ru: "Соберите рабочую бумажную/картонную модель 4‑тактного двигателя и отметьте цикл",
                },
              },
              {
                id: "g8-electrical-basics",
                title: {
                  en: "Automotive Electrical Basics",
                  ru: "Основы автоэлектрики",
                },
                description: {
                  en: "Batteries, fuses, series/parallel circuits, multimeter use",
                  ru: "Аккумуляторы, предохранители, последовательные/параллельные цепи, мультиметр",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Wire a small 12V demo board (LED, switch, fuse) and test with a multimeter",
                  ru: "Соберите мини‑стенд 12V (LED, выключатель, предохранитель) и протестируйте мультиметром",
                },
              },
              {
                id: "g8-cad-intro",
                title: {
                  en: "CAD Intro (Fusion 360/FreeCAD)",
                  ru: "Введение в CAD (Fusion 360/FreeCAD)",
                },
                description: {
                  en: "Sketch, constraints, extrude, and simple assemblies",
                  ru: "Эскизы, ограничения, выдавливание и простые сборки",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Model a wheel hub or bracket and 3D‑print or render it",
                  ru: "Смоделируйте ступицу колеса или кронштейн и распечатайте/отрендерьте",
                },
              },
            ],
          },
          {
            id: "grade9-auto",
            grade: 9,
            title: {
              en: "Grade 9 - Mechanics & Dynamics",
              ru: "9 класс - Механика и динамика",
            },
            description: {
              en: "Apply physics to vehicle motion and power transmission",
              ru: "Применение физики к движению автомобиля и передаче мощности",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-vehicle-dynamics",
                title: {
                  en: "Vehicle Dynamics (Forces & Friction)",
                  ru: "Динамика автомобиля (силы и трение)",
                },
                description: {
                  en: "Weight transfer, traction, braking distance estimation",
                  ru: "Перераспределение веса, сцепление, оценка тормозного пути",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Simulate or measure braking distance vs speed and plot results",
                  ru: "Смоделируйте или измерьте тормозной путь vs скорость и постройте графики",
                },
              },
              {
                id: "g9-gear-transmission",
                title: {
                  en: "Gears & Transmission Ratios",
                  ru: "Шестерни и передаточные числа",
                },
                description: {
                  en: "Gear ratio, torque vs speed, simple gearbox model",
                  ru: "Передаточное число, крутящий момент vs скорость, модель коробки передач",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a cardboard or LEGO gearbox and measure output speed/torque",
                  ru: "Соберите коробку передач из картона или LEGO и измерьте выходную скорость/момент",
                },
              },
              {
                id: "g9-suspension-brakes",
                title: {
                  en: "Suspension & Brakes (Intro)",
                  ru: "Подвеска и тормоза (введение)",
                },
                description: {
                  en: "Spring/damper basics, disc vs drum brakes",
                  ru: "Основы пружин/демпферов, дисковые и барабанные тормоза",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a small suspension rig and test stiffness/damping",
                  ru: "Создайте мини‑стенд подвески и измерьте жесткость/демпфирование",
                },
              },
            ],
          },
          {
            id: "grade10-auto",
            grade: 10,
            title: {
              en: "Grade 10 - Electronics, Control & Powertrains",
              ru: "10 класс - Электроника, управление и силовые агрегаты",
            },
            description: {
              en: "Sensors, microcontrollers, CAN basics, ICE vs EV",
              ru: "Датчики, микроконтроллеры, основы CAN, ДВС vs электромобили",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-arduino-telemetry",
                title: { en: "Arduino Telemetry", ru: "Телеметрия на Arduino" },
                description: {
                  en: "Read sensors (temp, RPM via Hall) and log data",
                  ru: "Снимайте показания датчиков (температура, обороты по Холлу) и ведите лог",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build an RC‑car telemetry logger with CSV export",
                  ru: "Соберите логгер телеметрии для RC‑машины с экспортом в CSV",
                },
              },
              {
                id: "g10-can-basics",
                title: { en: "CAN Bus (Intro)", ru: "Шина CAN (введение)" },
                description: {
                  en: "Frames, IDs, sniffing basics with simulators",
                  ru: "Форматы, ID, основы сниффинга с симуляторами",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Decode 3 simulated CAN messages and document signals",
                  ru: "Декодируйте 3 симулированных CAN‑сообщения и задокументируйте сигналы",
                },
              },
              {
                id: "g10-ice-vs-ev",
                title: {
                  en: "ICE vs EV Powertrains",
                  ru: "Силовые агрегаты ДВС vs ЭМ",
                },
                description: {
                  en: "Compare efficiency, torque curves, and energy storage",
                  ru: "Сравните эффективность, кривые момента и хранение энергии",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Model range and energy use for a small EV in city vs highway",
                  ru: "Смоделируйте запас хода и энергопотребление малого ЭМ в городе и на трассе",
                },
              },
            ],
          },
          {
            id: "grade11-auto",
            grade: 11,
            title: {
              en: "Grade 11 - CAD/CAE & Capstone",
              ru: "11 класс - CAD/CAE и капстоун",
            },
            description: {
              en: "Design parts, basic FEA, and an integrated mini‑project",
              ru: "Проектирование деталей, базовый FEA и интегрированный мини‑проект",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-cad-assembly",
                title: {
                  en: "Parametric CAD & Assembly",
                  ru: "Параметрический CAD и сборка",
                },
                description: {
                  en: "Advanced constraints, joints, exploded views",
                  ru: "Продвинутые ограничения, сочленения, разнесённые виды",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Design a steering knuckle or suspension arm assembly",
                  ru: "Спроектируйте кулак рулевого управления или рычаг подвески",
                },
              },
              {
                id: "g11-fea-basics",
                title: { en: "FEA Basics", ru: "Основы FEA" },
                description: {
                  en: "Meshing, boundary conditions, stress/strain visualization",
                  ru: "Сетка, граничные условия, визуализация напряжений/деформаций",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run a simple FEA on the CAD part and report safety factor",
                  ru: "Проведите простой FEA на модели и рассчитайте коэффициент запаса",
                },
              },
              {
                id: "g11-capstone-vehicle-subsystem",
                title: {
                  en: "Capstone: Vehicle Subsystem",
                  ru: "Капстоун: подсистема автомобиля",
                },
                description: {
                  en: "Integrate mechanics, electronics, and documentation",
                  ru: "Интегрируйте механику, электронику и документацию",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Build or simulate an improved RC car subsystem; deliver BOM and test report",
                  ru: "Соберите или смоделируйте улучшенную подсистему RC‑машины; подготовьте ведомость и отчёт",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Automotive Engineer", ru: "Автомобильный инженер" },
          {
            en: "Vehicle Design Engineer",
            ru: "Инженер по проектированию транспортных средств",
          },
          { en: "Motorsport Engineer", ru: "Инженер автоспорта" },
        ],
        topUniversities: [
          "Michigan",
          "Stanford",
          "MIT",
          "Georgia Tech",
          "KazATU",
        ],
        averageSalary: {
          entry: "$75,000",
          mid: "$95,000",
          senior: "$130,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Electric Cars: Introduction",
              description: {
                en: "EV fundamentals, batteries, motors, chargers",
                ru: "Основы электромобилей, батареи, моторы, зарядные устройства",
              },
              provider: "TU Delft (edX)",
              url: "https://www.edx.org/course/electric-cars-introduction",
              price: "Free to audit",
            },
            {
              name: "Introduction to Aerodynamics",
              description: {
                en: "Aerodynamics principles applicable to vehicles",
                ru: "Принципы аэродинамики, применимые к автомобилям",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
            {
              name: "Autodesk Fusion 360 for Beginners",
              description: {
                en: "CAD modeling, assemblies and drawings",
                ru: "CAD‑моделирование, сборки и чертежи",
              },
              provider: "Coursera (Autodesk)",
              url: "https://www.coursera.org/learn/fusion-360",
              price: "Free to audit",
            },
            {
              name: "Introduction to Mechanical Engineering",
              description: {
                en: "Mechanics, materials, energy and design",
                ru: "Механика, материалы, энергия и проектирование",
              },
              provider: "Khan Academy/OpenLearn",
              url: "https://www.open.edu/openlearn/science-maths-technology/introduction-mechanical-engineering/content-section-0",
              price: "Free",
            },
            {
              name: "Control of Mobile Robots",
              description: {
                en: "Control theory basics for mobile systems",
                ru: "Основы теории управления для мобильных систем",
              },
              provider: "Georgia Tech (Coursera)",
              url: "https://www.coursera.org/learn/mobile-robot",
              price: "Free to audit",
            },
            {
              name: "Embedded Systems (Intro)",
              description: {
                en: "Microcontrollers, sensors and C programming",
                ru: "Микроконтроллеры, датчики и программирование на C",
              },
              provider: "UT Austin (edX)",
              url: "https://www.edx.org/learn/embedded-systems",
              price: "Free to audit",
            },
            {
              name: "Vehicle Dynamics (Essentials)",
              description: {
                en: "Kinematics and dynamics of ground vehicles",
                ru: "Кинематика и динамика наземных транспортных средств",
              },
              provider: "Coursera/edX (assorted, audit)",
              url: "https://www.coursera.org/search?query=vehicle%20dynamics",
              price: "Free to audit",
            },
            {
              name: "Automotive Systems (Intro)",
              description: {
                en: "Overview of modern automotive subsystems",
                ru: "Обзор современных автомобильных подсистем",
              },
              provider: "edX",
              url: "https://www.edx.org/learn/automotive-engineering",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Formula SAE",
              description: {
                en: "Design and build a formula‑style race car",
                ru: "Проектирование и постройка гоночного автомобиля",
              },
              url: "https://www.fsaeonline.com/",
              level: "advanced",
            },
            {
              name: "Baja SAE",
              description: {
                en: "Design an off‑road vehicle",
                ru: "Проектирование внедорожного автомобиля",
              },
              url: "https://www.bajasae.net/",
              level: "advanced",
            },
            {
              name: "Shell Eco‑marathon",
              description: {
                en: "Energy‑efficient vehicle competition",
                ru: "Соревнование по энергоэффективным автомобилям",
              },
              url: "https://www.makethefuture.shell/en-gb/shell-eco-marathon",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Automotive Engineers Kazakhstan",
              description: {
                en: "Community of automotive engineering professionals",
                ru: "Сообщество профессионалов автомобильной инженерии",
              },
              url: "https://t.me/auto_eng_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Kazakh Automobile and Technical University",
              location: "Almaty",
              programs: [
                "Automotive Engineering",
                "Mechanical Engineering",
                "Transportation",
              ],
              url: "https://kazatu.kz",
            },
          ],
        },
      },
      {
        id: "aerospace",
        name: { en: "Aerospace Engineering", ru: "Аэрокосмическая инженерия" },
        description: {
          en: "Design aircraft, spacecraft, and related systems",
          ru: "Проектирование самолетов, космических кораблей и связанных систем",
        },
        roadmap: [
          {
            id: "grade7-aero",
            grade: 7,
            title: {
              en: "Grade 7 - Flight Principles",
              ru: "7 класс - Принципы полета",
            },
            description: {
              en: "Learn how aircraft fly and basic aerodynamics",
              ru: "Изучите, как летают самолеты и основы аэродинамики",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "paper-plane-design",
                title: {
                  en: "Paper Airplane Engineering",
                  ru: "Инженерия бумажных самолетиков",
                },
                description: {
                  en: "Design, test, and optimize paper airplane designs",
                  ru: "Проектируйте, тестируйте и оптимизируйте конструкции бумажных самолетиков",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create 5 different designs, document flight performance",
                  ru: "Создайте 5 различных конструкций, задокументируйте летные характеристики",
                },
              },
              {
                id: "g7-glider-build",
                title: {
                  en: "Balsa Glider Build",
                  ru: "Постройка планера из бальзы",
                },
                description: {
                  en: "Wing shape, dihedral, and center of gravity basics",
                  ru: "Форма крыла, угол диэдраля и центр тяжести",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a balsa glider and optimize for max distance",
                  ru: "Постройте бальзовый планер и оптимизируйте дальность полета",
                },
              },
              {
                id: "g7-flight-history-safety",
                title: {
                  en: "Flight Safety & History",
                  ru: "Безопасность полетов и история",
                },
                description: {
                  en: "Key events, pioneers, and safety culture in aviation",
                  ru: "Ключевые события, первопроходцы и культура безопасности в авиации",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Prepare a timeline poster of major aviation milestones",
                  ru: "Подготовьте постер‑хронологию основных вех авиации",
                },
              },
            ],
          },
          {
            id: "grade8-aero",
            grade: 8,
            title: {
              en: "Grade 8 - Aerodynamics & Model Rocketry",
              ru: "8 класс - Аэродинамика и ракетомоделизм",
            },
            description: {
              en: "Explore lift, drag and safe rocketry",
              ru: "Изучите подъемную силу, сопротивление и безопасный ракетомоделизм",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-airfoil-tests",
                title: {
                  en: "Airfoil Experiments",
                  ru: "Эксперименты с профилями крыла",
                },
                description: {
                  en: "Simple wind‑tunnel or fan tests of different airfoils",
                  ru: "Простые испытания разных профилей в «ветровой трубе»/с вентилятором",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Measure lift changes across angle of attack and plot curves",
                  ru: "Измерьте подъемную силу при разных углах атаки и постройте графики",
                },
              },
              {
                id: "g8-model-rocket",
                title: {
                  en: "Model Rocket (Safety‑First)",
                  ru: "Модельная ракета (сначала безопасность)",
                },
                description: {
                  en: "Build and launch a small model rocket under supervision",
                  ru: "Соберите и запустите небольшую модель ракеты под присмотром",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Design a rocket with different fins; log altitude and stability",
                  ru: "Спроектируйте ракету с разными стабилизаторами; зафиксируйте высоту и устойчивость",
                },
              },
              {
                id: "g8-flight-sim",
                title: {
                  en: "Flight Simulation Basics",
                  ru: "Основы авиасимуляции",
                },
                description: {
                  en: "Use a simulator to observe instruments and control inputs",
                  ru: "Используйте симулятор для изучения приборов и управляющих воздействий",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Complete a take‑off/landing profile and reflect on parameters",
                  ru: "Выполните взлет/посадку и опишите наблюдаемые параметры",
                },
              },
            ],
          },
          {
            id: "grade9-aero",
            grade: 9,
            title: {
              en: "Grade 9 - Structures & Propulsion",
              ru: "9 класс - Конструкции и двигатели",
            },
            description: {
              en: "Learn structural testing and intro to propulsion",
              ru: "Изучите испытания конструкций и основы двигателей",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-structure-test",
                title: {
                  en: "Wing Spar Testing",
                  ru: "Испытание лонжерона крыла",
                },
                description: {
                  en: "Materials, load cases, deflection measurement",
                  ru: "Материалы, нагрузки и измерение прогиба",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build balsa spars and test to failure; chart stress vs deflection",
                  ru: "Постройте бальзовые лонжероны и испытайте до разрушения; постройте графики",
                },
              },
              {
                id: "g9-propulsion-intro",
                title: { en: "Propulsion Basics", ru: "Основы двигателей" },
                description: {
                  en: "Propellers vs rockets; thrust, mass flow, ISP concepts",
                  ru: "Винты и ракеты; тяга, массовый расход, удельный импульс",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Measure thrust of electric propellers with a DIY stand",
                  ru: "Измерьте тягу электрических винтов на самодельном стенде",
                },
              },
              {
                id: "g9-orbital-mechanics",
                title: {
                  en: "Orbital Mechanics (Intro)",
                  ru: "Орбитальная механика (введение)",
                },
                description: {
                  en: "Two‑body motion, orbits, delta‑v intuition",
                  ru: "Движение двух тел, орбиты, интуиция по delta‑v",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Simulate circular vs elliptical orbits and compare period",
                  ru: "Смоделируйте круговые и эллиптические орбиты и сравните период",
                },
              },
            ],
          },
          {
            id: "grade10-aero",
            grade: 10,
            title: {
              en: "Grade 10 - Avionics & Control",
              ru: "10 класс - Авионика и управление",
            },
            description: {
              en: "Sensors, flight computers and stability",
              ru: "Датчики, полетные компьютеры и устойчивость",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-imu-sensors",
                title: { en: "IMU & Sensors", ru: "IMU и датчики" },
                description: {
                  en: "Accelerometer, gyro basics and sensor fusion idea",
                  ru: "Основы акселерометра, гироскопа и идея слияния данных",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Log IMU data from Arduino and plot orientation estimates",
                  ru: "Снимите данные IMU с Arduino и постройте ориентацию",
                },
              },
              {
                id: "g10-pid-stability",
                title: {
                  en: "PID Control & Stability",
                  ru: "PID‑управление и устойчивость",
                },
                description: {
                  en: "Feedback, gain tuning, and response",
                  ru: "Обратная связь, настройка усилений и отклик",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a PID for a line following or attitude sim",
                  ru: "Настройте PID для симуляции следования линии или углового положения",
                },
              },
              {
                id: "g10-flight-computer",
                title: {
                  en: "Flight Computer (Intro)",
                  ru: "Полетный компьютер (введение)",
                },
                description: {
                  en: "Inputs, outputs, power, and failsafe basics",
                  ru: "Входы, выходы, питание и основы failsafe",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a block diagram and wiring plan for a simple UAV",
                  ru: "Создайте блок‑схему и план проводки для простого БПЛА",
                },
              },
            ],
          },
          {
            id: "grade11-aero",
            grade: 11,
            title: {
              en: "Grade 11 - CAD/CFD & Mission Design",
              ru: "11 класс - CAD/CFD и проект миссии",
            },
            description: {
              en: "Design wings, run basic CFD, and complete a mission concept",
              ru: "Проектирование крыла, базовый CFD и завершение концепции миссии",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-cad-wing",
                title: { en: "CAD Wing & Airframe", ru: "CAD крыла и планера" },
                description: {
                  en: "Parametric airfoil, wing planform, and fuselage",
                  ru: "Параметрический профиль, план формы крыла и фюзеляж",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Model a wing with airfoil and ribs in CAD",
                  ru: "Смоделируйте крыло с профилем и нервюрами в CAD",
                },
              },
              {
                id: "g11-cfd-intro",
                title: {
                  en: "CFD (Intro) with Free Tools",
                  ru: "CFD (введение) с бесплатными инструментами",
                },
                description: {
                  en: "Meshing basics and pressure/velocity plots",
                  ru: "Основы сетки и визуализация давления/скорости",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run a simple CFD on an airfoil and compare lift vs angle",
                  ru: "Проведите простой CFD на профиле и сравните подъемную силу по углу",
                },
              },
              {
                id: "g11-mission-capstone",
                title: {
                  en: "Capstone: UAV or Rocket Mission",
                  ru: "Капстоун: миссия БПЛА или ракеты",
                },
                description: {
                  en: "Trade study, constraints, and test plan",
                  ru: "Сравнительный анализ, ограничения и план испытаний",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver a mission brief, CAD package, and test/flight log",
                  ru: "Подготовьте описание миссии, CAD‑пакет и журнал испытаний/полета",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Aerospace Engineer", ru: "Аэрокосмический инженер" },
          { en: "Flight Test Engineer", ru: "Инженер летных испытаний" },
          {
            en: "Spacecraft Designer",
            ru: "Конструктор космических аппаратов",
          },
        ],
        topUniversities: [
          "MIT",
          "Stanford",
          "Caltech",
          "Georgia Tech",
          "KazATU",
        ],
        averageSalary: {
          entry: "$80,000",
          mid: "$110,000",
          senior: "$150,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Introduction to Aeronautical Engineering",
              description: {
                en: "Core aircraft design and performance",
                ru: "Базовые принципы проектирования и эффективности самолета",
              },
              provider: "TU Delft (edX)",
              url: "https://www.edx.org/course/introduction-to-aeronautical-engineering",
              price: "Free to audit",
            },
            {
              name: "Flight Vehicle Aerodynamics",
              description: {
                en: "Theory and practice of aerodynamics",
                ru: "Теория и практика аэродинамики",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
            {
              name: "Astrodynamics (Intro)",
              description: {
                en: "Orbits, maneuvers, and mission design basics",
                ru: "Орбиты, манёвры и основы проектирования миссий",
              },
              provider: "Coursera (audit)",
              url: "https://www.coursera.org/search?query=astrodynamics",
              price: "Free to audit",
            },
            {
              name: "Aircraft Structures",
              description: {
                en: "Loads, materials and structural analysis",
                ru: "Нагрузки, материалы и анализ конструкций",
              },
              provider: "OpenLearn/MIT OCW",
              url: "https://www.open.edu/openlearn/science-maths-technology/engineering-structure-and-motion/content-section-0",
              price: "Free",
            },
            {
              name: "Avionics (Intro)",
              description: {
                en: "Sensors, navigation and control",
                ru: "Датчики, навигация и управление",
              },
              provider: "edX/Coursera (audit)",
              url: "https://www.edx.org/learn/avionics",
              price: "Free to audit",
            },
            {
              name: "Rocket Propulsion (Basics)",
              description: {
                en: "Fundamentals of rocket engines and propulsion",
                ru: "Основы ракетных двигателей и тяги",
              },
              provider: "Coursera/edX (audit)",
              url: "https://www.coursera.org/search?query=rocket%20propulsion",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "NASA Student Launch",
              description: {
                en: "Design, build and launch a rocket with scientific payload",
                ru: "Проектирование, постройка и запуск ракеты с полезной нагрузкой",
              },
              url: "https://www.nasa.gov/audience/forstudents/studentlaunch",
              level: "advanced",
            },
            {
              name: "AIAA Design/Build/Fly",
              description: {
                en: "University competition to design and fly a UAV",
                ru: "Университетское соревнование по проектированию и полёту БПЛА",
              },
              url: "https://www.aiaa.org/dbf",
              level: "advanced",
            },
            {
              name: "CanSat Competition",
              description: {
                en: "Design a satellite in the shape of a soda can",
                ru: "Спроектируйте «спутник» в форме банки",
              },
              url: "https://www.cansatcompetition.com/",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Aerospace Kazakhstan",
              description: {
                en: "Community interested in aerospace and aviation",
                ru: "Сообщество интересующихся авиацией и космосом",
              },
              url: "https://t.me/aerospace_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Kazakh Automobile and Technical University",
              location: "Almaty",
              programs: ["Aerospace Engineering", "Aviation Technology"],
              url: "https://kazatu.kz",
            },
          ],
        },
      },
      {
        id: "robotics",
        name: { en: "Robotics Engineering", ru: "Робототехническая инженерия" },
        description: {
          en: "Design and build robots and automated systems",
          ru: "Проектирование и создание роботов и автоматизированных систем",
        },
        roadmap: [
          {
            id: "grade7-robotics",
            grade: 7,
            title: {
              en: "Grade 7 - Basic Robotics",
              ru: "7 класс - Основы робототехники",
            },
            description: {
              en: "Introduction to robotics with simple programmable robots",
              ru: "Введение в робототехнику с простыми программируемыми роботами",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "lego-mindstorms",
                title: {
                  en: "LEGO Mindstorms Projects",
                  ru: "Проекты LEGO Mindstorms",
                },
                description: {
                  en: "Build and program robots using LEGO Mindstorms",
                  ru: "Создавайте и программируйте роботов с помощью LEGO Mindstorms",
                },
                timeline: { en: "12 weeks", ru: "12 недель" },
                project: {
                  en: "Create obstacle-avoiding robot with sensor integration",
                  ru: "Создайте робота, избегающего препятствий, с интеграцией датчиков",
                },
              },
              {
                id: "g7-sensors-basics",
                title: {
                  en: "Sensors & Actuators (Intro)",
                  ru: "Датчики и приводы (введение)",
                },
                description: {
                  en: "Ultrasonic, light sensors, servo motors fundamentals",
                  ru: "Основы ультразвуковых и световых датчиков, сервоприводов",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Program line follow or light-seeking behavior",
                  ru: "Запрограммируйте следование линии или движение на свет",
                },
              },
              {
                id: "g7-block-coding",
                title: {
                  en: "Block Coding Logic",
                  ru: "Блочное программирование",
                },
                description: {
                  en: "Loops, conditionals, variables using Scratch or MakeCode",
                  ru: "Циклы, условия, переменные в Scratch или MakeCode",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a decision flow for robot tasks and demo",
                  ru: "Создайте логическую схему решений для задач робота и продемонстрируйте",
                },
              },
            ],
          },
          {
            id: "grade8-robotics",
            grade: 8,
            title: {
              en: "Grade 8 - Arduino Robotics",
              ru: "8 класс - Робототехника на Arduino",
            },
            description: {
              en: "Electronics, C/C++ basics, and simple mobile robots",
              ru: "Электроника, основы C/C++ и простые мобильные роботы",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-arduino-line-follower",
                title: {
                  en: "Line Follower Robot",
                  ru: "Робот‑следуй за линией",
                },
                description: {
                  en: "IR sensors, motor drivers, PWM control",
                  ru: "ИК‑датчики, драйверы моторов, управление PWM",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build and tune a line follower to complete a track",
                  ru: "Соберите и настройте робота для прохождения трассы по линии",
                },
              },
              {
                id: "g8-obstacle-avoid",
                title: {
                  en: "Obstacle Avoidance",
                  ru: "Избегание препятствий",
                },
                description: {
                  en: "Ultrasonic ranging and reactive control",
                  ru: "Ультразвуковая дальнометрия и реактивное управление",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Implement avoidance behavior and record success rate",
                  ru: "Реализуйте поведение обхода и измерьте процент успешности",
                },
              },
              {
                id: "g8-3d-print-mounts",
                title: { en: "3D Printed Mounts", ru: "3D‑печатные крепления" },
                description: {
                  en: "Design and print sensor brackets and motor mounts",
                  ru: "Спроектируйте и распечатайте кронштейны датчиков и крепления моторов",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create custom brackets and test robustness",
                  ru: "Создайте кастомные кронштейны и протестируйте надежность",
                },
              },
            ],
          },
          {
            id: "grade9-robotics",
            grade: 9,
            title: {
              en: "Grade 9 - Programming & Perception",
              ru: "9 класс - Программирование и восприятие",
            },
            description: {
              en: "Python, computer vision, and simulator practice",
              ru: "Python, компьютерное зрение и практика в симуляторе",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-python-control",
                title: {
                  en: "Python for Robotics",
                  ru: "Python для робототехники",
                },
                description: {
                  en: "Data structures, functions, plotting sensor data",
                  ru: "Структуры данных, функции, визуализация данных датчиков",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Simulate robot motion and plot trajectory vs target",
                  ru: "Смоделируйте движение робота и постройте траекторию vs цель",
                },
              },
              {
                id: "g9-opencv",
                title: {
                  en: "Computer Vision (OpenCV)",
                  ru: "Компьютерное зрение (OpenCV)",
                },
                description: {
                  en: "Thresholding, contours, and basic tracking",
                  ru: "Пороговая обработка, контуры и базовое отслеживание",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Detect and track colored objects from webcam feed",
                  ru: "Обнаруживайте и отслеживайте цветные объекты с веб‑камеры",
                },
              },
              {
                id: "g9-ros2-sim",
                title: {
                  en: "ROS2 Simulator (Intro)",
                  ru: "Симулятор ROS2 (введение)",
                },
                description: {
                  en: "Nodes, topics and running example packages",
                  ru: "Узлы, топики и запуск примерных пакетов",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Control a simulated robot to navigate a simple world",
                  ru: "Управляйте симулированным роботом для навигации в простом мире",
                },
              },
            ],
          },
          {
            id: "grade10-robotics",
            grade: 10,
            title: {
              en: "Grade 10 - Control, Mechatronics & Manipulation",
              ru: "10 класс - Управление, мехатроника и манипуляторы",
            },
            description: {
              en: "PID, kinematics, microcontrollers and arms",
              ru: "PID, кинематика, микроконтроллеры и манипуляторы",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-pid-motors",
                title: { en: "PID for DC Motors", ru: "PID для ДПТ" },
                description: {
                  en: "Speed control and disturbance rejection",
                  ru: "Регулирование скорости и подавление возмущений",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Tune PID to reach setpoints with minimal overshoot",
                  ru: "Настройте PID для достижения заданий с минимальным перерегулированием",
                },
              },
              {
                id: "g10-ik-2dof",
                title: {
                  en: "2‑DOF Arm Kinematics",
                  ru: "Кинематика манипулятора 2‑СО",
                },
                description: {
                  en: "Forward/inverse kinematics for planar arm",
                  ru: "Прямая/обратная кинематика плоского манипулятора",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Simulate pick‑and‑place to targets; verify reachability",
                  ru: "Смоделируйте pick‑and‑place к целям; проверьте достижимость",
                },
              },
              {
                id: "g10-esp32-integration",
                title: { en: "ESP32 Integration", ru: "Интеграция ESP32" },
                description: {
                  en: "Wireless control, sensors, and telemetry",
                  ru: "Беспроводное управление, датчики и телеметрия",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a Wi‑Fi controlled rover with live telemetry",
                  ru: "Соберите Wi‑Fi‑ровер с живой телеметрией",
                },
              },
            ],
          },
          {
            id: "grade11-robotics",
            grade: 11,
            title: {
              en: "Grade 11 - Autonomy & Capstone",
              ru: "11 класс - Автономия и капстоун",
            },
            description: {
              en: "SLAM, path planning, and integrated project",
              ru: "SLAM, планирование пути и интегрированный проект",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-slam-intro",
                title: { en: "SLAM (Intro)", ru: "SLAM (введение)" },
                description: {
                  en: "Mapping and localization concepts in 2D",
                  ru: "Понятия картографирования и локализации в 2D",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Run a 2D SLAM demo in sim; output map and trajectory",
                  ru: "Запустите 2D SLAM в симуляторе; экспортируйте карту и траекторию",
                },
              },
              {
                id: "g11-path-planning",
                title: {
                  en: "Path Planning (A*, RRT intro)",
                  ru: "Планирование пути (введение в A*, RRT)",
                },
                description: {
                  en: "Grid maps and sampling methods basics",
                  ru: "Основы сеточных карт и выборочных методов",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Implement A* on a grid world and benchmark routes",
                  ru: "Реализуйте A* на сеточном мире и сравните маршруты",
                },
              },
              {
                id: "g11-capstone-robot",
                title: {
                  en: "Capstone: Autonomous Robot",
                  ru: "Капстоун: автономный робот",
                },
                description: {
                  en: "Integrate perception, control, and comms",
                  ru: "Интегрируйте восприятие, управление и связь",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver a robot that completes a course; submit repo and demo video",
                  ru: "Создайте робота, проходящего трассу; сдайте репозиторий и демо‑видео",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Robotics Engineer", ru: "Инженер-робототехник" },
          { en: "Automation Engineer", ru: "Инженер по автоматизации" },
          {
            en: "AI Robotics Researcher",
            ru: "Исследователь ИИ в робототехнике",
          },
        ],
        topUniversities: ["MIT", "CMU", "Stanford", "UC Berkeley", "KazNU"],
        averageSalary: {
          entry: "$85,000",
          mid: "$115,000",
          senior: "$160,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Modern Robotics: Mechanics, Planning, and Control",
              description: {
                en: "Comprehensive robotics specialization",
                ru: "Комплексная специализация по робототехнике",
              },
              provider: "Northwestern (Coursera)",
              url: "https://www.coursera.org/specializations/modern-robotics",
              price: "Free to audit",
            },
            {
              name: "Robotics (MicroMasters content - audit)",
              description: {
                en: "Perception, mobility, AI for robotics",
                ru: "Восприятие, мобильность, ИИ для робототехники",
              },
              provider: "Penn (edX)",
              url: "https://www.edx.org/micromasters/pennx-robotics",
              price: "Free to audit",
            },
            {
              name: "Underactuated Robotics",
              description: {
                en: "Advanced dynamics and planning",
                ru: "Продвинутая динамика и планирование",
              },
              provider: "MIT OCW",
              url: "https://underactuated.mit.edu/",
              price: "Free",
            },
            {
              name: "Aerial Robotics",
              description: {
                en: "Quadrotor dynamics and control",
                ru: "Динамика и управление квадрокоптеров",
              },
              provider: "UPenn (Coursera)",
              url: "https://www.coursera.org/learn/robotics-flight",
              price: "Free to audit",
            },
            {
              name: "ROS2 Basics",
              description: {
                en: "Nodes, topics, services, bag files",
                ru: "Узлы, топики, сервисы, bag‑файлы",
              },
              provider: "Open‑source tutorials",
              url: "https://docs.ros.org/en/foxy/Tutorials.html",
              price: "Free",
            },
            {
              name: "Computer Vision with OpenCV",
              description: {
                en: "Image processing and tracking",
                ru: "Обработка изображений и отслеживание",
              },
              provider: "OpenCV/YouTube courses",
              url: "https://opencv.org/courses/",
              price: "Free",
            },
            {
              name: "Control of Mobile Robots",
              description: {
                en: "Control and planning fundamentals",
                ru: "Основы управления и планирования",
              },
              provider: "Georgia Tech (Coursera)",
              url: "https://www.coursera.org/learn/mobile-robot",
              price: "Free to audit",
            },
            {
              name: "Linear Algebra & Calculus (support)",
              description: {
                en: "Math foundations used in robotics",
                ru: "Математические основы, используемые в робототехнике",
              },
              provider: "Khan Academy",
              url: "https://www.khanacademy.org/math/linear-algebra",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "FIRST Robotics Competition",
              description: {
                en: "International high school robotics competition",
                ru: "Международное соревнование по робототехнике для старшеклассников",
              },
              url: "https://www.firstinspires.org/robotics/frc",
              level: "intermediate",
            },
            {
              name: "VEX Robotics Competition",
              description: {
                en: "Design, build, and program robots to compete",
                ru: "Проектирование, сборка и программирование соревновательных роботов",
              },
              url: "https://www.vexrobotics.com/competition",
              level: "beginner",
            },
            {
              name: "RoboCup Junior",
              description: {
                en: "Educational robotics competition for students",
                ru: "Образовательное соревнование по робототехнике для студентов",
              },
              url: "https://junior.robocup.org/",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Robotics Kazakhstan",
              description: {
                en: "Community of robotics enthusiasts and professionals",
                ru: "Сообщество энтузиастов и профессионалов робототехники",
              },
              url: "https://t.me/robotics_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Kazakh National University",
              location: "Almaty",
              programs: ["Robotics", "Automation", "Mechatronics"],
              url: "https://kaznu.kz",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "medicine",
    name: { en: "Medicine", ru: "Медицина" },
    description: {
      en: "Diagnose, treat, and prevent illnesses and injuries",
      ru: "Диагностика, лечение и профилактика болезней и травм",
    },
    overview: {
      en: "Save lives by diagnosing diseases, performing surgeries, and providing comprehensive medical care",
      ru: "Спасайте жизни, диагностируя заболевания, проводя операции и оказывая комплексную медицинскую помощь",
    },
    icon: "⚕️",
    color: "from-red-500 to-pink-600",
    category: "Healthcare",
    demandLevel: "High",
    averageSalary: "$200,000 - $500,000+",
    topUniversities: [
      "Harvard Medical",
      "Johns Hopkins",
      "Stanford",
      "UCSF",
      "KazNMU",
    ],
    skills: [
      { en: "Medical Knowledge", ru: "Медицинские знания" },
      { en: "Diagnosis", ru: "Диагностика" },
      { en: "Patient Care", ru: "Уход за пациентами" },
      { en: "Research", ru: "Исследования" },
    ],
    stats: {
      avgSalary: "$280K",
      jobGrowth: "+18%",
      popularity: "High",
    },
    subspecializations: [
      {
        id: "pediatrics",
        name: { en: "Pediatrics", ru: "Педиатрия" },
        description: {
          en: "Health care for infants, children, and adolescents",
          ru: "Медицинская помощь младенцам, детям и подросткам",
        },
        roadmap: [
          {
            id: "grade7-peds",
            grade: 7,
            title: {
              en: "Grade 7 - Healthy Bodies",
              ru: "7 класс - Здоровое тело",
            },
            description: {
              en: "Basic human biology and everyday child health",
              ru: "Основы биологии человека и повседневное здоровье ребенка",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-body-systems",
                title: {
                  en: "Body Systems Overview",
                  ru: "Обзор систем организма",
                },
                description: {
                  en: "Identify major systems and their functions in children",
                  ru: "Определите основные системы и их функции у детей",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a labeled poster of 7 body systems with child-focused notes",
                  ru: "Создайте плакат 7 систем организма с заметками о детских особенностях",
                },
              },
              {
                id: "g7-hygiene-infection",
                title: {
                  en: "Hygiene & Infection Prevention",
                  ru: "Гигиена и профилактика инфекций",
                },
                description: {
                  en: "Handwashing, respiratory etiquette, and safe habits",
                  ru: "Мытье рук, респираторный этикет и безопасные привычки",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Run a handwashing demo; compare results with ‘glitter germs’ or dye",
                  ru: "Проведите демонстрацию мытья рук; сравните результаты с «блестящими микробами» или красителем",
                },
              },
              {
                id: "g7-nutrition-basics",
                title: { en: "Nutrition Basics", ru: "Основы питания" },
                description: {
                  en: "Macronutrients, hydration, and balanced meals for kids",
                  ru: "Макронутриенты, гидратация и сбалансированное питание для детей",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Keep a 7‑day food diary and design a balanced weekly menu",
                  ru: "Ведите 7‑дневный дневник питания и составьте сбалансированное меню на неделю",
                },
              },
            ],
          },
          {
            id: "grade8-peds",
            grade: 8,
            title: {
              en: "Grade 8 - Growth & Safety",
              ru: "8 класс - Рост и безопасность",
            },
            description: {
              en: "Developmental milestones, vitals, and vaccine basics",
              ru: "Этапы развития, жизненные показатели и основы вакцинации",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-growth-charts",
                title: {
                  en: "Growth Charts & Milestones",
                  ru: "Ростовые графики и этапы",
                },
                description: {
                  en: "Percentiles, height/weight tracking, and developmental checks",
                  ru: "Процентили, отслеживание роста/веса и контроль развития",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build sample growth charts and milestone checklist for ages 0–5",
                  ru: "Создайте образцы графиков роста и чек‑лист этапов 0–5 лет",
                },
              },
              {
                id: "g8-vital-signs-kids",
                title: {
                  en: "Vital Signs & Pediatric Dosing",
                  ru: "Жизненные показатели и дозы у детей",
                },
                description: {
                  en: "Pulse, respiration, temperature, and weight‑based dosing math",
                  ru: "Пульс, дыхание, температура и расчет доз по массе",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Measure vitals for 3 volunteers and compute sample weight‑based doses",
                  ru: "Измерьте показатели у 3 добровольцев и рассчитайте примерные дозы по массе",
                },
              },
              {
                id: "g8-immunization",
                title: {
                  en: "Vaccines & Schedules",
                  ru: "Вакцины и календари",
                },
                description: {
                  en: "Immunity basics and standard pediatric schedules",
                  ru: "Основы иммунитета и стандартные детские календари прививок",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a simple parent guide for a local immunization schedule",
                  ru: "Создайте простой гид для родителей по местному календарю прививок",
                },
              },
            ],
          },
          {
            id: "grade9-peds",
            grade: 9,
            title: {
              en: "Grade 9 - Child Health & Community",
              ru: "9 класс - Здоровье детей и сообщество",
            },
            description: {
              en: "Common pediatric illnesses, communication, and public health",
              ru: "Частые детские болезни, коммуникация и общественное здоровье",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-common-illness",
                title: {
                  en: "Common Illnesses",
                  ru: "Распространенные болезни",
                },
                description: {
                  en: "Colds, asthma, allergies; when to seek care",
                  ru: "Простуды, астма, аллергии; когда обращаться за помощью",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a symptom/decision tree poster for parents",
                  ru: "Создайте постер с деревом симптомов/решений для родителей",
                },
              },
              {
                id: "g9-child-communication",
                title: {
                  en: "Child Communication",
                  ru: "Коммуникация с детьми",
                },
                description: {
                  en: "Age‑appropriate language, empathy, and trust",
                  ru: "Соответствующий возрасту язык, эмпатия и доверие",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Role‑play a clinic visit; record a reflection on techniques used",
                  ru: "Разыграйте визит в клинику; напишите рефлексию о используемых техниках",
                },
              },
              {
                id: "g9-community-project",
                title: {
                  en: "Community Health Project",
                  ru: "Проект общественного здоровья",
                },
                description: {
                  en: "Identify a child health need and plan an intervention",
                  ru: "Определите потребность в детском здоровье и спланируйте интервенцию",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Design a poster/short workshop (nutrition, hygiene, safety)",
                  ru: "Разработайте постер/мини‑семинар (питание, гигиена, безопасность)",
                },
              },
            ],
          },
          {
            id: "grade10-peds",
            grade: 10,
            title: {
              en: "Grade 10 - Clinical Basics",
              ru: "10 класс - Клинические основы",
            },
            description: {
              en: "SOAP notes, first aid/CPR, and lab result basics",
              ru: "SOAP‑заметки, первая помощь/СЛР и основы анализов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-soap-notes",
                title: { en: "SOAP Notes", ru: "SOAP‑заметки" },
                description: {
                  en: "Subjective, Objective, Assessment, Plan structure",
                  ru: "Структура Subjective, Objective, Assessment, Plan",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Write 3 SOAP notes from sample pediatric cases",
                  ru: "Напишите 3 SOAP‑заметки по образцовым детским случаям",
                },
              },
              {
                id: "g10-first-aid-cpr",
                title: {
                  en: "First Aid & CPR (Intro)",
                  ru: "Первая помощь и СЛР (введение)",
                },
                description: {
                  en: "Scene safety, basic life support concepts",
                  ru: "Безопасность места, основы базовой поддержки жизни",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a first aid quick‑reference for school settings",
                  ru: "Создайте краткий справочник по первой помощи для школы",
                },
              },
              {
                id: "g10-labs-basics",
                title: {
                  en: "Lab Tests (Basics)",
                  ru: "Лабораторные тесты (основы)",
                },
                description: {
                  en: "CBC, basic chem panel, and normal pediatric ranges",
                  ru: "ОАК, базовая биохимия и нормальные детские диапазоны",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Interpret three mock lab panels and write a short summary",
                  ru: "Интерпретируйте три макетные панели анализов и напишите краткое резюме",
                },
              },
            ],
          },
          {
            id: "grade11-peds",
            grade: 11,
            title: {
              en: "Grade 11 - Systems & Capstone",
              ru: "11 класс - Системы и капстоун",
            },
            description: {
              en: "Neonatal, adolescent modules and a capstone clinic simulation",
              ru: "Модули по неонатологии и подростковой медицине и итоговая симуляция клиники",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-neonatal",
                title: { en: "Neonatal Basics", ru: "Основы неонатологии" },
                description: {
                  en: "APGAR concept, thermoregulation, early feeding",
                  ru: "Концепция APGAR, терморегуляция, раннее питание",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Develop a newborn care checklist for parents",
                  ru: "Разработайте чек‑лист ухода за новорожденным для родителей",
                },
              },
              {
                id: "g11-adolescent",
                title: { en: "Adolescent Health", ru: "Здоровье подростков" },
                description: {
                  en: "Growth, mental health, substance awareness",
                  ru: "Рост, психическое здоровье, осведомленность о веществах",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create an awareness campaign plan for a teen health topic",
                  ru: "Создайте план кампании осведомленности о теме здоровья подростков",
                },
              },
              {
                id: "g11-clinic-capstone",
                title: {
                  en: "Capstone Clinic Simulation",
                  ru: "Капстоун: симуляция клиники",
                },
                description: {
                  en: "Intake, vitals, basic counseling and referral plan",
                  ru: "Прием, жизненные показатели, базовое консультирование и план направления",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Run a mock pediatric clinic flow; deliver report and checklist",
                  ru: "Проведите макетный прием в педиатрической клинике; сдайте отчет и чек‑лист",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Pediatrician", ru: "Педиатр" },
          { en: "Pediatric Nurse", ru: "Детская медсестра" },
          {
            en: "School Health Specialist",
            ru: "Специалист по школьному здоровью",
          },
        ],
        topUniversities: [
          "Harvard",
          "Johns Hopkins",
          "Stanford",
          "Oxford",
          "Mayo Clinic",
        ],
        averageSalary: {
          entry: "$180,000",
          mid: "$230,000",
          senior: "$300,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Intro to Human Physiology",
              description: {
                en: "Core physiology concepts with clinical links",
                ru: "Ключевые концепции физиологии с клиническими связями",
              },
              provider: "Duke (Coursera)",
              url: "https://www.coursera.org/learn/physiology",
              price: "Free to audit",
            },
            {
              name: "Child Nutrition and Cooking",
              description: {
                en: "Nutrition basics for children and families",
                ru: "Основы питания для детей и семей",
              },
              provider: "Stanford (Coursera)",
              url: "https://www.coursera.org/learn/childnutrition",
              price: "Free to audit",
            },
            {
              name: "Infection Prevention and Control (IPC)",
              description: {
                en: "Basics of preventing infections in care settings",
                ru: "Основы профилактики инфекций в медучреждениях",
              },
              provider: "OpenWHO",
              url: "https://openwho.org",
              price: "Free",
            },
            {
              name: "Medical Terminology",
              description: {
                en: "Foundational clinical vocabulary",
                ru: "Базовая клиническая лексика",
              },
              provider: "Doane/edX",
              url: "https://www.edx.org/course/medical-terminology",
              price: "Free to audit",
            },
            {
              name: "Global Health for Children and Adolescents",
              description: {
                en: "Key child health challenges and interventions",
                ru: "Ключевые проблемы детского здоровья и вмешательства",
              },
              provider: "edX/Coursera (audit)",
              url: "https://www.coursera.org/search?query=child%20health",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "HOSA Competitive Events",
              description: {
                en: "Health science, leadership, emergency preparedness",
                ru: "Медицина, лидерство, готовность к ЧС",
              },
              url: "https://hosa.org/competitions/",
              level: "intermediate",
            },
            {
              name: "Science Olympiad: Anatomy & Physiology",
              description: {
                en: "High school biology/anatomy competition",
                ru: "Соревнование по биологии/анатомии для школьников",
              },
              url: "https://www.soinc.org",
              level: "beginner",
            },
            {
              name: "International Biology Olympiad",
              description: {
                en: "Global biology competition",
                ru: "Мировая олимпиада по биологии",
              },
              url: "https://www.ibo-info.org",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Medical Students Kazakhstan",
              description: {
                en: "Student community for medical education",
                ru: "Студенческое сообщество по медобразованию",
              },
              url: "https://t.me/med_kz_students",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Asfendiyarov Kazakh National Medical University",
              location: "Almaty",
              programs: ["General Medicine", "Pediatrics"],
              url: "https://kaznmu.kz",
            },
            {
              name: "Nazarbayev University School of Medicine",
              location: "Astana",
              programs: ["MD", "Public Health"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
      {
        id: "general-surgery",
        name: { en: "General Surgery", ru: "Общая хирургия" },
        description: {
          en: "Operative care focusing on abdominal, soft tissue and trauma",
          ru: "Оперативная помощь: брюшная полость, мягкие ткани и травма",
        },
        roadmap: [
          {
            id: "grade7-surg",
            grade: 7,
            title: {
              en: "Grade 7 - Anatomy & Safety",
              ru: "7 класс - Анатомия и безопасность",
            },
            description: {
              en: "Human anatomy orientation and basic OR safety ideas",
              ru: "Ориентирование в анатомии и базовые идеи безопасности в операционной",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-anatomy-orientation",
                title: {
                  en: "Anatomy Orientation",
                  ru: "Ориентирование в анатомии",
                },
                description: {
                  en: "Organs and regions: from surface anatomy to cavities",
                  ru: "Органы и области: от поверхностной анатомии к полостям",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draw an abdominal quadrant map with key organs",
                  ru: "Нарисуйте карту абдоминальных квадрантов с ключевыми органами",
                },
              },
              {
                id: "g7-sterile-ideas",
                title: { en: "Clean vs Sterile", ru: "Чистое vs стерильное" },
                description: {
                  en: "Basic asepsis concepts using safe classroom analogies",
                  ru: "Основы асептики с безопасными аналогиями для класса",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Demonstrate ‘sterile field’ rules in a desk simulation",
                  ru: "Продемонстрируйте правила «стерильного поля» в настольной симуляции",
                },
              },
              {
                id: "g7-knot-basics",
                title: {
                  en: "Knot Tying Basics",
                  ru: "Основы завязывания узлов",
                },
                description: {
                  en: "Square knot and instrument tie using string/rope",
                  ru: "Прямой узел и инструментальная вязка с веревкой/нитью",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Record 10 correct square knots and timing",
                  ru: "Запишите 10 правильных прямых узлов и время выполнения",
                },
              },
            ],
          },
          {
            id: "grade8-surg",
            grade: 8,
            title: {
              en: "Grade 8 - Wounds & Tools",
              ru: "8 класс - Раны и инструменты",
            },
            description: {
              en: "Healing phases, dressings, and instrument identification",
              ru: "Фазы заживления, повязки и распознавание инструментов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-instruments",
                title: {
                  en: "Surgical Instruments",
                  ru: "Хирургические инструменты",
                },
                description: {
                  en: "Scalpel, forceps, needle holders (names and uses)",
                  ru: "Скалпель, пинцеты, держатели игл (названия и применение)",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build an instrument flashcard deck with photos/uses",
                  ru: "Создайте набор карточек инструментов с фото/назначением",
                },
              },
              {
                id: "g8-wound-care",
                title: { en: "Wound Care Basics", ru: "Основы ухода за раной" },
                description: {
                  en: "Types of wounds, healing, and dressing selection",
                  ru: "Типы ран, заживление и выбор повязок",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Simulate dressing selection for 5 case vignettes",
                  ru: "Смоделируйте выбор повязок для 5 мини‑случаев",
                },
              },
              {
                id: "g8-suturing-foam",
                title: {
                  en: "Suturing on Foam/Banana",
                  ru: "Шов на пене/банане",
                },
                description: {
                  en: "Safe, nonclinical practice of simple interrupted sutures",
                  ru: "Безопасная, учебная практика простых узловых швов",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Place 20 simple sutures on practice material; log spacing/tension",
                  ru: "Наложите 20 простых швов на учебный материал; зафиксируйте шаг/натяжение",
                },
              },
            ],
          },
          {
            id: "grade9-surg",
            grade: 9,
            title: {
              en: "Grade 9 - Imaging & Laparoscopy",
              ru: "9 класс - Визуализация и лапароскопия",
            },
            description: {
              en: "Reading basic imaging and box‑trainer laparoscopy",
              ru: "Чтение базовой визуализации и лапароскопия на тренажере",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-imaging-intro",
                title: { en: "Imaging Basics", ru: "Основы визуализации" },
                description: {
                  en: "X‑ray, ultrasound, CT concepts and safety",
                  ru: "Рентген, УЗИ, КТ: концепции и безопасность",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Annotate 10 sample images (normal vs abnormal markers)",
                  ru: "Промаркируйте 10 образцов изображений (норма vs патология)",
                },
              },
              {
                id: "g9-periop-care",
                title: {
                  en: "Perioperative Basics",
                  ru: "Основы периоперационного ухода",
                },
                description: {
                  en: "Pre‑op checklists, NPO, and post‑op monitoring ideas",
                  ru: "Предоперационные чек‑листы, NPO и идеи послеоперационного контроля",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a pre‑op checklist and post‑op observation sheet",
                  ru: "Составьте предоперационный чек‑лист и лист наблюдений после операции",
                },
              },
              {
                id: "g9-lap-box",
                title: {
                  en: "Laparoscopy Box Tasks",
                  ru: "Задачи на лап‑боксе",
                },
                description: {
                  en: "Hand‑eye coordination, peg transfer, and loops",
                  ru: "Координация глаз‑рука, перенос колышков и петли",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Complete peg transfer task under time; chart improvement",
                  ru: "Выполните перенос колышков на время; зафиксируйте прогресс",
                },
              },
            ],
          },
          {
            id: "grade10-surg",
            grade: 10,
            title: {
              en: "Grade 10 - Teams & Physiology",
              ru: "10 класс - Команды и физиология",
            },
            description: {
              en: "Anesthesia basics, teamwork, surgical anatomy modules",
              ru: "Основы анестезии, командная работа, модули по хирургической анатомии",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-anesthesia-intro",
                title: {
                  en: "Anesthesia & Monitoring",
                  ru: "Анестезия и мониторинг",
                },
                description: {
                  en: "Airway basics, oxygenation, simple monitoring concepts",
                  ru: "Основы дыхательных путей, оксигенация, базовый мониторинг",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a vitals/monitoring quick guide for mock OR",
                  ru: "Создайте краткий гид по жизненным показателям/мониторингу для макетной ОР",
                },
              },
              {
                id: "g10-surg-anatomy",
                title: {
                  en: "Surgical Anatomy Modules",
                  ru: "Модули хирургической анатомии",
                },
                description: {
                  en: "Abdominal wall, hepatobiliary, GI orientation",
                  ru: "Брюшная стенка, гепатобилиарная зона, ориентация ЖКТ",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Label 3 anatomy sheets and build a 3D paper model",
                  ru: "Промаркируйте 3 анатомических листа и соберите 3D бумажную модель",
                },
              },
              {
                id: "g10-teamwork",
                title: {
                  en: "Teamwork & Checklists",
                  ru: "Командная работа и чек‑листы",
                },
                description: {
                  en: "WHO checklist, roles and brief/debrief concepts",
                  ru: "Чек‑лист ВОЗ, роли и бриф/дебриф",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Run a mock OR briefing with roles and checklist",
                  ru: "Проведите макетный брифинг ОР с ролями и чек‑листом",
                },
              },
            ],
          },
          {
            id: "grade11-surg",
            grade: 11,
            title: {
              en: "Grade 11 - Cases & Capstone",
              ru: "11 класс - Случаи и капстоун",
            },
            description: {
              en: "Case reasoning and a surgical pathway plan",
              ru: "Клиническое мышление и план хирургического маршрута",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-cases",
                title: { en: "Case Studies", ru: "Клинические случаи" },
                description: {
                  en: "Appendicitis, cholecystitis, hernia differentials",
                  ru: "Аппендицит, холецистит, грыжа: дифференциальная диагностика",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Write 3 case write‑ups with differential and plan",
                  ru: "Подготовьте 3 кейса с дифференциалом и планом",
                },
              },
              {
                id: "g11-protocols",
                title: { en: "Safety Protocols", ru: "Протоколы безопасности" },
                description: {
                  en: "Time‑out, counts, specimen labeling best practices",
                  ru: "Time‑out, пересчет, маркировка образцов: лучшие практики",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Design a one‑page ‘safe surgery’ protocol for school sim",
                  ru: "Разработайте одностраничный протокол «безопасной хирургии» для симуляции",
                },
              },
              {
                id: "g11-capstone-path",
                title: {
                  en: "Capstone: Surgical Pathway",
                  ru: "Капстоун: хирургический маршрут",
                },
                description: {
                  en: "From intake to discharge on a sample case",
                  ru: "От приема до выписки на примере случая",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver a full pathway map with checklists and handoffs",
                  ru: "Подготовьте полную карту маршрута с чек‑листами и передачами",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "General Surgeon", ru: "Хирург общего профиля" },
          { en: "Surgical Nurse", ru: "Операционная медсестра" },
          { en: "Surgical Technologist", ru: "Операционный технолог" },
        ],
        topUniversities: [
          "Harvard",
          "Johns Hopkins",
          "Stanford",
          "Mayo Clinic",
          "Oxford",
        ],
        averageSalary: {
          entry: "$300,000",
          mid: "$400,000",
          senior: "$600,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Anatomy Series",
              description: {
                en: "Regional human anatomy foundations",
                ru: "Региональная анатомия человека: основы",
              },
              provider: "Michigan (Coursera)",
              url: "https://www.coursera.org/specializations/anatomy",
              price: "Free to audit",
            },
            {
              name: "Clinical Problem Solving",
              description: {
                en: "Reasoning through cases step by step",
                ru: "Пошаговое клиническое мышление в кейсах",
              },
              provider: "Coursera (audit)",
              url: "https://www.coursera.org",
              price: "Free to audit",
            },
            {
              name: "Basic Infection Prevention and Control",
              description: {
                en: "Surgical site infection prevention basics",
                ru: "Основы профилактики инфекций хирургической области",
              },
              provider: "OpenWHO",
              url: "https://openwho.org",
              price: "Free",
            },
            {
              name: "Introduction to Imaging",
              description: {
                en: "Fundamentals of radiology and safety",
                ru: "Основы радиологии и безопасность",
              },
              provider: "edX/Coursera (audit)",
              url: "https://www.edx.org/learn/radiology",
              price: "Free to audit",
            },
            {
              name: "Systems Physiology",
              description: {
                en: "Cardio‑respiratory, renal, GI physiology",
                ru: "Физиология: кардио‑респираторная, почечная, ЖКТ",
              },
              provider: "MIT OCW/Khan Academy",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "HOSA Competitive Events (Health Professions)",
              description: {
                en: "Events in medical terminology, biomedical debate, etc.",
                ru: "Соревнования по медтерминам, биомеддебатам и др.",
              },
              url: "https://hosa.org/competitions/",
              level: "intermediate",
            },
            {
              name: "MIT Hacking Medicine",
              description: {
                en: "Healthcare hackathons and innovation",
                ru: "Хакатоны и инновации в здравоохранении",
              },
              url: "https://hackingmedicine.mit.edu",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Surgery & Anatomy KZ",
              description: {
                en: "Community learning surgery/anatomy",
                ru: "Сообщество по хирургии/анатомии",
              },
              url: "https://t.me/surgery_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Karaganda Medical University",
              location: "Karaganda",
              programs: ["General Medicine", "Surgery"],
              url: "https://qmu.edu.kz",
            },
            {
              name: "Asfendiyarov Kazakh National Medical University",
              location: "Almaty",
              programs: ["General Medicine", "Surgery"],
              url: "https://kaznmu.kz",
            },
          ],
        },
      },
      {
        id: "internal-medicine",
        name: { en: "Internal Medicine", ru: "Терапия (внутренние болезни)" },
        description: {
          en: "Prevention, diagnosis and treatment of adult diseases",
          ru: "Профилактика, диагностика и лечение заболеваний взрослых",
        },
        roadmap: [
          {
            id: "grade7-im",
            grade: 7,
            title: {
              en: "Grade 7 - Human Health Basics",
              ru: "7 класс - Основы здоровья",
            },
            description: {
              en: "Organ systems, vitals, and health logs",
              ru: "Системы органов, жизненные показатели и журналы здоровья",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-organs-overview",
                title: {
                  en: "Organ Systems Overview",
                  ru: "Обзор систем органов",
                },
                description: {
                  en: "Cardio, respiratory, renal, endocrine, GI overview",
                  ru: "Обзор сердечно‑сосудистой, дыхательной, почечной, эндокринной и ЖКТ систем",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Make a one‑page map of 5 systems and key functions",
                  ru: "Создайте одностраничную карту 5 систем и ключевых функций",
                },
              },
              {
                id: "g7-vitals-log",
                title: {
                  en: "Vital Signs Log",
                  ru: "Журнал жизненных показателей",
                },
                description: {
                  en: "Measure pulse, RR, temperature; track trends",
                  ru: "Измеряйте пульс, ЧДД, температуру; отслеживайте тренды",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Collect 10 measurements and chart weekly averages",
                  ru: "Соберите 10 измерений и постройте недельные средние",
                },
              },
              {
                id: "g7-health-literacy",
                title: { en: "Health Literacy", ru: "Медицинская грамотность" },
                description: {
                  en: "Reading labels, meds safety, and lifestyle basics",
                  ru: "Чтение этикеток, безопасность лекарств и основы образа жизни",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Design a ‘smart choices’ guide for common products",
                  ru: "Создайте гид «умный выбор» для популярных продуктов",
                },
              },
            ],
          },
          {
            id: "grade8-im",
            grade: 8,
            title: {
              en: "Grade 8 - Physiology & Interview",
              ru: "8 класс - Физиология и интервью",
            },
            description: {
              en: "Core physiology and patient interview basics",
              ru: "Базовая физиология и основы опроса пациента",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-physio-core",
                title: {
                  en: "Core Physiology Modules",
                  ru: "Модули по базовой физиологии",
                },
                description: {
                  en: "Cardiac output, gas exchange, filtration/reabsorption",
                  ru: "Сердечный выброс, газообмен, фильтрация/реабсорбция",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Summarize 3 modules with diagrams and formulas",
                  ru: "Суммируйте 3 модуля с диаграммами и формулами",
                },
              },
              {
                id: "g8-clinical-math",
                title: {
                  en: "Clinical Math & Units",
                  ru: "Клиническая математика и единицы",
                },
                description: {
                  en: "mg, mL, % solutions and conversions",
                  ru: "мг, мЛ, % растворы и переводы единиц",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Solve 15 dosage/conversion problems with answer key",
                  ru: "Решите 15 задач по дозировкам/переводам с ответами",
                },
              },
              {
                id: "g8-patient-interview",
                title: {
                  en: "Patient Interview Basics",
                  ru: "Основы опроса пациента",
                },
                description: {
                  en: "Open‑ended questions, empathy, and note‑taking",
                  ru: "Открытые вопросы, эмпатия и ведение записей",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Conduct a mock interview; produce a structured note",
                  ru: "Проведите макетное интервью; подготовьте структурированную запись",
                },
              },
            ],
          },
          {
            id: "grade9-im",
            grade: 9,
            title: {
              en: "Grade 9 - EKG, Labs & Dx",
              ru: "9 класс - ЭКГ, анализы и диагностика",
            },
            description: {
              en: "EKG fundamentals, lab interpretation, and differential diagnosis",
              ru: "Основы ЭКГ, интерпретация анализов и дифференциальная диагностика",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-ekg",
                title: { en: "EKG Fundamentals", ru: "Основы ЭКГ" },
                description: {
                  en: "Waves, intervals, axis, and rhythm strips",
                  ru: "Зубцы, интервалы, ось и ритм‑листы",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Interpret 10 basic rhythm strips and label features",
                  ru: "Интерпретируйте 10 базовых ритм‑лент и промаркируйте признаки",
                },
              },
              {
                id: "g9-labs-intro",
                title: {
                  en: "Lab Interpretation",
                  ru: "Интерпретация анализов",
                },
                description: {
                  en: "CBC, BMP/CMP, and urinalysis orientation",
                  ru: "ОАК, БХ/метаболическая панель и общий анализ мочи",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Write a summary for 3 mock lab panels with probable causes",
                  ru: "Напишите резюме по 3 панелям анализов с вероятными причинами",
                },
              },
              {
                id: "g9-differential",
                title: {
                  en: "Differential Diagnosis Basics",
                  ru: "Основы дифференциальной диагностики",
                },
                description: {
                  en: "Illness scripts and branching logic",
                  ru: "Сценарии болезней и ветвящаяся логика",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a decision tree for chest pain or cough",
                  ru: "Создайте дерево решений для боли в груди или кашля",
                },
              },
            ],
          },
          {
            id: "grade10-im",
            grade: 10,
            title: {
              en: "Grade 10 - Chronic Disease",
              ru: "10 класс - Хронические болезни",
            },
            description: {
              en: "Hypertension, diabetes, and evidence‑based practice",
              ru: "Гипертония, диабет и доказательная практика",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-htn",
                title: { en: "Hypertension Basics", ru: "Основы гипертонии" },
                description: {
                  en: "BP measurement, staging, lifestyle considerations",
                  ru: "Измерение АД, стадии, образ жизни",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run 10 seated BP measurements; chart averages and errors",
                  ru: "Проведите 10 измерений АД сидя; постройте средние и ошибки",
                },
              },
              {
                id: "g10-diabetes",
                title: { en: "Diabetes Basics", ru: "Основы диабета" },
                description: {
                  en: "Glucose regulation, HbA1c, and self‑monitoring concepts",
                  ru: "Регуляция глюкозы, HbA1c и основы самоконтроля",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build an education leaflet on diet/activity for prediabetes",
                  ru: "Создайте листовку об образе жизни при предиабете",
                },
              },
              {
                id: "g10-ebm",
                title: {
                  en: "Evidence‑Based Medicine Basics",
                  ru: "Основы доказательной медицины",
                },
                description: {
                  en: "Study types, bias, sensitivity/specificity",
                  ru: "Типы исследований, смещения, чувствительность/специфичность",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Critique one open‑access clinical study using a checklist",
                  ru: "Проанализируйте одно открытое клиническое исследование по чек‑листу",
                },
              },
            ],
          },
          {
            id: "grade11-im",
            grade: 11,
            title: {
              en: "Grade 11 - Hospital & Capstone",
              ru: "11 класс - Больница и капстоун",
            },
            description: {
              en: "Hospital workflows, quality/safety, capstone case",
              ru: "Рабочие процессы в больнице, качество/безопасность, итоговый кейс",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-hospitalist-flow",
                title: {
                  en: "Hospitalist Workflow",
                  ru: "Рабочий процесс госпитального врача",
                },
                description: {
                  en: "Admission, rounding, discharge summaries",
                  ru: "Госпитализация, обходы, выписные эпикризы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a sample admission H&P and discharge summary",
                  ru: "Создайте образец H&P при поступлении и выписной эпикриз",
                },
              },
              {
                id: "g11-quality-safety",
                title: {
                  en: "Quality & Safety",
                  ru: "Качество и безопасность",
                },
                description: {
                  en: "Hand hygiene, checklists, and error reporting culture",
                  ru: "Гигиена рук, чек‑листы и культура сообщения об ошибках",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a checklist for a mock ward handoff",
                  ru: "Составьте чек‑лист для передачи пациента в отделении",
                },
              },
              {
                id: "g11-capstone-case",
                title: {
                  en: "Capstone Case Presentation",
                  ru: "Капстоун: презентация случая",
                },
                description: {
                  en: "Full assessment and plan for a complex case",
                  ru: "Полная оценка и план для сложного случая",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Present a case deck with differential, tests, and management",
                  ru: "Представьте кейс‑дек с дифференциалом, тестами и ведением",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Internist", ru: "Врач‑терапевт" },
          { en: "Hospitalist", ru: "Госпитальный врач" },
          {
            en: "Cardiology/GI Fellow (later)",
            ru: "Кардиолог/Гастроэнтеролог (позже)",
          },
        ],
        topUniversities: [
          "Harvard",
          "Johns Hopkins",
          "Stanford",
          "Mayo Clinic",
          "Oxford",
        ],
        averageSalary: {
          entry: "$220,000",
          mid: "$280,000",
          senior: "$350,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Clinical Epidemiology",
              description: {
                en: "Evidence and decision‑making in clinical care",
                ru: "Доказательства и принятие решений в клинической практике",
              },
              provider: "Johns Hopkins (Coursera)",
              url: "https://www.coursera.org/specializations/clinical-data-science",
              price: "Free to audit",
            },
            {
              name: "Vital Signs: Understanding What the Body Is Telling Us",
              description: {
                en: "Interpret vital signs and health data",
                ru: "Интерпретация жизненных показателей и данных здоровья",
              },
              provider: "University of Pennsylvania (Coursera)",
              url: "https://www.coursera.org/learn/vital-signs",
              price: "Free to audit",
            },
            {
              name: "Introduction to EKG",
              description: {
                en: "Reading basic electrocardiograms",
                ru: "Чтение базовых ЭКГ",
              },
              provider: "edX/Coursera (audit)",
              url: "https://www.coursera.org/search?query=ekg",
              price: "Free to audit",
            },
            {
              name: "Human Physiology",
              description: {
                en: "Systems physiology essentials",
                ru: "Основы системной физиологии",
              },
              provider: "Duke (Coursera)",
              url: "https://www.coursera.org/learn/physiology",
              price: "Free to audit",
            },
            {
              name: "Nutrition, Health, and Lifestyle",
              description: {
                en: "Lifestyle medicine concepts",
                ru: "Концепции медицины образа жизни",
              },
              provider: "OpenLearn",
              url: "https://www.open.edu/openlearn/ocw/mod/oucontent/view.php?id=87479",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "HOSA: Medical Math, Medical Reading",
              description: {
                en: "HOSA events aligned to internal medicine skills",
                ru: "Соревнования HOSA, связанные с навыками терапевта",
              },
              url: "https://hosa.org/competitions/",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Therapy & IM Kazakhstan",
              description: {
                en: "Community for internal medicine learners",
                ru: "Сообщество изучающих терапию",
              },
              url: "https://t.me/im_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Asfendiyarov Kazakh National Medical University",
              location: "Almaty",
              programs: ["General Medicine", "Internal Medicine"],
              url: "https://kaznmu.kz",
            },
            {
              name: "Karaganda Medical University",
              location: "Karaganda",
              programs: ["General Medicine", "Internal Medicine"],
              url: "https://qmu.edu.kz",
            },
          ],
        },
      },
      {
        id: "obgyn",
        name: { en: "Obstetrics & Gynecology", ru: "Акушерство и гинекология" },
        description: {
          en: "Care for women’s reproductive health, pregnancy and childbirth",
          ru: "Здоровье женщин, беременность и роды",
        },
        roadmap: [
          {
            id: "grade7-obgyn",
            grade: 7,
            title: {
              en: "Grade 7 - Reproductive Basics",
              ru: "7 класс - Основы репродукции",
            },
            description: {
              en: "Reproductive anatomy and puberty health literacy",
              ru: "Репродуктивная анатомия и грамотность о пубертате",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-repro-anatomy",
                title: {
                  en: "Reproductive Anatomy",
                  ru: "Репродуктивная анатомия",
                },
                description: {
                  en: "Identify female/male anatomy respectfully and accurately",
                  ru: "Корректное и уважительное изучение женской/мужской анатомии",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create labeled diagrams and glossary",
                  ru: "Создайте промаркированные схемы и глоссарий",
                },
              },
              {
                id: "g7-puberty-health",
                title: {
                  en: "Puberty & Menstrual Basics",
                  ru: "Пубертат и основы менструаций",
                },
                description: {
                  en: "Cycle overview, hygiene, and common myths",
                  ru: "Обзор цикла, гигиена и распространенные мифы",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Design a myth‑busting educational leaflet",
                  ru: "Создайте листовку, разоблачающую мифы",
                },
              },
              {
                id: "g7-health-respect",
                title: { en: "Health & Respect", ru: "Здоровье и уважение" },
                description: {
                  en: "Boundaries, consent concepts, and safety resources",
                  ru: "Границы, согласие и ресурсы безопасности",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Compile a local resource list for youth health services",
                  ru: "Соберите список местных ресурсов для молодежных служб здоровья",
                },
              },
            ],
          },
          {
            id: "grade8-obgyn",
            grade: 8,
            title: {
              en: "Grade 8 - Prenatal & Wellness",
              ru: "8 класс - Пренатальный уход и здоровье",
            },
            description: {
              en: "Prenatal development and women’s wellness topics",
              ru: "Пренатальное развитие и темы женского здоровья",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-prenatal",
                title: {
                  en: "Prenatal Development",
                  ru: "Пренатальное развитие",
                },
                description: {
                  en: "Trimesters, fetal growth and maternal changes",
                  ru: "Триместры, рост плода и изменения у матери",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a trimester timeline poster with key milestones",
                  ru: "Создайте постер‑хронологию триместров с ключевыми вехами",
                },
              },
              {
                id: "g8-nutrition-prenatal",
                title: {
                  en: "Maternal Nutrition",
                  ru: "Питание при беременности",
                },
                description: {
                  en: "Macros, micronutrients, and safe foods",
                  ru: "Макро/микронутриенты и безопасные продукты",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a 7‑day sample prenatal menu and shopping list",
                  ru: "Составьте 7‑дневное примерное меню и список покупок",
                },
              },
              {
                id: "g8-wellness",
                title: { en: "Women’s Wellness", ru: "Женское здоровье" },
                description: {
                  en: "Exercise, sleep, mental health and preventive care",
                  ru: "Физнагрузка, сон, психическое здоровье и профилактика",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a wellness habit tracker for 4 weeks",
                  ru: "Создайте трекер полезных привычек на 4 недели",
                },
              },
            ],
          },
          {
            id: "grade9-obgyn",
            grade: 9,
            title: {
              en: "Grade 9 - Care & Screening",
              ru: "9 класс - Уход и скрининг",
            },
            description: {
              en: "Prenatal care schedule and screening concepts",
              ru: "График пренатального ухода и концепции скрининга",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-prenatal-schedule",
                title: {
                  en: "Prenatal Care Schedule",
                  ru: "График пренатального ухода",
                },
                description: {
                  en: "Visit timing, common tests, and red flags",
                  ru: "Сроки визитов, распространенные анализы и тревожные признаки",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Produce a simple visit calendar with test reminders",
                  ru: "Составьте простой календарь визитов с напоминаниями о тестах",
                },
              },
              {
                id: "g9-screening",
                title: {
                  en: "Women’s Screening",
                  ru: "Скрининг женского здоровья",
                },
                description: {
                  en: "Pap, HPV, breast awareness; age‑appropriate screening",
                  ru: "Пап‑тест, HPV, осведомленность о груди; скрининг по возрасту",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create an age‑tiered screening guide",
                  ru: "Создайте руководство по скринингу по возрастным группам",
                },
              },
              {
                id: "g9-emergencies-intro",
                title: {
                  en: "Obstetric Emergencies (Intro)",
                  ru: "Акушерские ЧС (введение)",
                },
                description: {
                  en: "Warning signs and rapid response ideas",
                  ru: "Сигналы тревоги и базовые представления о быстром реагировании",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a response flowchart for 3 emergency scenarios",
                  ru: "Составьте блок‑схемы действий для 3 экстренных сценариев",
                },
              },
            ],
          },
          {
            id: "grade10-obgyn",
            grade: 10,
            title: {
              en: "Grade 10 - L&D & Fetal Health",
              ru: "10 класс - Роды и здоровье плода",
            },
            description: {
              en: "Stages of labor, fetal monitoring basics, and procedures",
              ru: "Стадии родов, основы мониторинга плода и процедуры",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-stages-of-labor",
                title: { en: "Stages of Labor", ru: "Стадии родов" },
                description: {
                  en: "Labor progression, pain options, and support roles",
                  ru: "Прогресс родов, варианты обезболивания и роли поддержки",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a birth plan template with preferences",
                  ru: "Создайте шаблон плана родов с предпочтениями",
                },
              },
              {
                id: "g10-fetal-monitoring",
                title: {
                  en: "Fetal Monitoring (Intro)",
                  ru: "Мониторинг плода (введение)",
                },
                description: {
                  en: "FHR concepts and basic tracing patterns",
                  ru: "ЧСС плода и базовые шаблоны кривых",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Annotate 5 sample fetal heart tracings",
                  ru: "Промаркируйте 5 образцов кривых ЧСС плода",
                },
              },
              {
                id: "g10-ob-procedures",
                title: {
                  en: "OB Procedures (Orientation)",
                  ru: "ОБ‑процедуры (ориентация)",
                },
                description: {
                  en: "Ultrasound basics and C‑section orientation",
                  ru: "Основы УЗИ и ориентирование в кесаревом сечении",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Build a simple OB procedure checklist",
                  ru: "Создайте простой чек‑лист ОБ‑процедур",
                },
              },
            ],
          },
          {
            id: "grade11-obgyn",
            grade: 11,
            title: {
              en: "Grade 11 - Women’s Health Capstone",
              ru: "11 класс - Итог по женскому здоровью",
            },
            description: {
              en: "Integrated care plan and education project",
              ru: "Интегрированный план ухода и образовательный проект",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-integrated-care",
                title: {
                  en: "Integrated Care Plan",
                  ru: "Интегрированный план ухода",
                },
                description: {
                  en: "Combine prenatal, screening, and wellness modules",
                  ru: "Объедините модули пренатального ухода, скрининга и здоровья",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Deliver a full plan for a sample patient journey",
                  ru: "Подготовьте полный план для пути примерной пациентки",
                },
              },
              {
                id: "g11-ethics",
                title: {
                  en: "Ethics & Communication",
                  ru: "Этика и коммуникация",
                },
                description: {
                  en: "Consent, confidentiality, and sensitive topics",
                  ru: "Согласие, конфиденциальность и деликатные темы",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Write scripts for 2 sensitive counseling scenarios",
                  ru: "Напишите сценарии консультаций для 2 деликатных ситуаций",
                },
              },
              {
                id: "g11-capstone-education",
                title: {
                  en: "Capstone: Education Campaign",
                  ru: "Капстоун: образовательная кампания",
                },
                description: {
                  en: "Design a women’s health education intervention",
                  ru: "Разработайте образовательную интервенцию по женскому здоровью",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Create materials and present outcomes and feedback",
                  ru: "Создайте материалы и представьте результаты и отзывы",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "OB/GYN Physician", ru: "Врач акушер‑гинеколог" },
          { en: "Midwife", ru: "Акушерка" },
          {
            en: "Women’s Health Nurse Practitioner",
            ru: "Медсестра по женскому здоровью",
          },
        ],
        topUniversities: [
          "Harvard",
          "Johns Hopkins",
          "Stanford",
          "Mayo Clinic",
          "Oxford",
        ],
        averageSalary: {
          entry: "$250,000",
          mid: "$320,000",
          senior: "$400,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Reproductive Health",
              description: {
                en: "Core concepts in reproductive health",
                ru: "Ключевые концепции репродуктивного здоровья",
              },
              provider: "Coursera/edX (audit)",
              url: "https://www.coursera.org/search?query=reproductive%20health",
              price: "Free to audit",
            },
            {
              name: "Maternal Health",
              description: {
                en: "Maternal care and global health issues",
                ru: "Материнская помощь и проблемы глобального здоровья",
              },
              provider: "Harvard edX (audit)",
              url: "https://www.edx.org/learn/global-health",
              price: "Free to audit",
            },
            {
              name: "Ultrasound Basics",
              description: {
                en: "Intro to ultrasound imaging",
                ru: "Введение в ультразвуковую визуализацию",
              },
              provider: "edX/Coursera (audit)",
              url: "https://www.edx.org/learn/ultrasound",
              price: "Free to audit",
            },
            {
              name: "Nutrition During Pregnancy",
              description: {
                en: "Dietary needs during pregnancy",
                ru: "Питательные потребности при беременности",
              },
              provider: "OpenLearn",
              url: "https://www.open.edu/openlearn/",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "HOSA: Health Education, Public Health",
              description: {
                en: "Team education/public health events",
                ru: "Командные образовательные/общественные мероприятия",
              },
              url: "https://hosa.org/competitions/",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Women’s Health KZ",
              description: {
                en: "Community on women’s health topics",
                ru: "Сообщество по темам женского здоровья",
              },
              url: "https://t.me/womens_health_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Asfendiyarov Kazakh National Medical University",
              location: "Almaty",
              programs: ["General Medicine", "OB/GYN"],
              url: "https://kaznmu.kz",
            },
          ],
        },
      },
      {
        id: "psychiatry",
        name: { en: "Psychiatry", ru: "Психиатрия" },
        description: {
          en: "Diagnosis and treatment of mental health disorders",
          ru: "Диагностика и лечение психических расстройств",
        },
        roadmap: [
          {
            id: "grade7-psych",
            grade: 7,
            title: {
              en: "Grade 7 - Mental Health Literacy",
              ru: "7 класс - Психологическая грамотность",
            },
            description: {
              en: "Emotions, stigma reduction, and help‑seeking",
              ru: "Эмоции, снижение стигмы и обращение за помощью",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-emotions",
                title: {
                  en: "Emotions & Brain (Basics)",
                  ru: "Эмоции и мозг (основы)",
                },
                description: {
                  en: "Basic brain regions and emotion regulation ideas",
                  ru: "Базовые области мозга и идеи регуляции эмоций",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a simple ‘feelings wheel’ and coping list",
                  ru: "Создайте «колесо эмоций» и список стратегий совладания",
                },
              },
              {
                id: "g7-stigma",
                title: { en: "Stigma & Support", ru: "Стигма и поддержка" },
                description: {
                  en: "Language matters and peer support basics",
                  ru: "Значимость языка и основы взаимопомощи",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a class pledge for respectful mental health talk",
                  ru: "Составьте классный кодекс уважительного обсуждения психздоровья",
                },
              },
              {
                id: "g7-mindfulness",
                title: { en: "Mindfulness Basics", ru: "Основы осознанности" },
                description: {
                  en: "Breathing, grounding and journaling",
                  ru: "Дыхание, заземление и ведение дневника",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Keep a 14‑day practice journal; reflect on effects",
                  ru: "Ведите дневник практики 14 дней; опишите эффекты",
                },
              },
            ],
          },
          {
            id: "grade8-psych",
            grade: 8,
            title: {
              en: "Grade 8 - Brain & Sleep",
              ru: "8 класс - Мозг и сон",
            },
            description: {
              en: "Neuro basics, sleep hygiene and stress",
              ru: "Основы нейронаук, гигиена сна и стресс",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-neuro-basics",
                title: { en: "Neuro Basics", ru: "Основы нейронаук" },
                description: {
                  en: "Neurons, neurotransmitters and circuits",
                  ru: "Нейроны, нейромедиаторы и цепи",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a poster explaining 4 neurotransmitters and effects",
                  ru: "Сделайте постер о 4 нейромедиаторах и их эффектах",
                },
              },
              {
                id: "g8-sleep",
                title: { en: "Sleep Hygiene", ru: "Гигиена сна" },
                description: {
                  en: "Circadian rhythm, screens, and routines",
                  ru: "Циркадный ритм, экраны и распорядок",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Track sleep for 14 days and propose improvements",
                  ru: "Отслеживайте сон 14 дней и предложите улучшения",
                },
              },
              {
                id: "g8-stress",
                title: { en: "Stress & Coping", ru: "Стресс и совладание" },
                description: {
                  en: "Acute vs chronic stress, healthy coping strategies",
                  ru: "Острый и хронический стресс, здоровые стратегии совладания",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Design a personal stress plan (triggers, tools, supports)",
                  ru: "Разработайте личный план стресса (триггеры, инструменты, поддержка)",
                },
              },
            ],
          },
          {
            id: "grade9-psych",
            grade: 9,
            title: {
              en: "Grade 9 - Assessment Basics",
              ru: "9 класс - Основы оценки",
            },
            description: {
              en: "Interviewing, DSM‑5 orientation, and risk assessment",
              ru: "Интервьюирование, ориентация в DSM‑5 и оценка рисков",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-interviewing",
                title: {
                  en: "Clinical Interviewing",
                  ru: "Клиническое интервьюирование",
                },
                description: {
                  en: "Open questions, empathy, reflection and summary",
                  ru: "Открытые вопросы, эмпатия, рефлексия и резюме",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Role‑play an interview; write a brief mental status exam",
                  ru: "Разыграйте интервью; напишите краткое описание психстатуса",
                },
              },
              {
                id: "g9-dsm5-intro",
                title: {
                  en: "DSM‑5 Orientation",
                  ru: "Ориентирование в DSM‑5",
                },
                description: {
                  en: "Common categories and symptom clusters",
                  ru: "Основные категории и кластеры симптомов",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a concept map for 5 common disorders",
                  ru: "Создайте карту понятий по 5 частым расстройствам",
                },
              },
              {
                id: "g9-risk-assessment",
                title: {
                  en: "Risk Assessment Basics",
                  ru: "Основы оценки риска",
                },
                description: {
                  en: "Safety planning and when to escalate",
                  ru: "Планы безопасности и когда эскалировать",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a sample safety plan for a hypothetical scenario",
                  ru: "Составьте образец плана безопасности для гипотетического сценария",
                },
              },
            ],
          },
          {
            id: "grade10-psych",
            grade: 10,
            title: {
              en: "Grade 10 - Therapies & Meds",
              ru: "10 класс - Терапии и лекарства",
            },
            description: {
              en: "CBT basics, MI, and psychopharmacology overview",
              ru: "Основы КБТ, МИ и обзор психофармакологии",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-cbt",
                title: { en: "CBT Basics", ru: "Основы КБТ" },
                description: {
                  en: "Cognitive distortions and behavior activation",
                  ru: "Когнитивные искажения и поведенческая активация",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a CBT worksheet and apply it to a sample case",
                  ru: "Создайте КБТ‑рабочий лист и примените к примеру",
                },
              },
              {
                id: "g10-mi",
                title: {
                  en: "Motivational Interviewing",
                  ru: "Мотивационное интервьюирование",
                },
                description: {
                  en: "OARS skills and change talk",
                  ru: "Навыки OARS и разговор о переменах",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Write a short MI script for a habit change scenario",
                  ru: "Напишите краткий сценарий МИ для изменения привычки",
                },
              },
              {
                id: "g10-psychopharm",
                title: {
                  en: "Psychopharmacology (Overview)",
                  ru: "Психофармакология (обзор)",
                },
                description: {
                  en: "Classes: SSRIs, SNRIs, antipsychotics (concepts only)",
                  ru: "Классы: СИОЗС, СИОЗН, антипсихотики (только концепции)",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a medication class comparison chart",
                  ru: "Создайте сравнительную таблицу классов препаратов",
                },
              },
            ],
          },
          {
            id: "grade11-psych",
            grade: 11,
            title: {
              en: "Grade 11 - Formulation & Capstone",
              ru: "11 класс - Формулировка и капстоун",
            },
            description: {
              en: "Bio‑psycho‑social formulation and program design",
              ru: "Био‑психо‑социальная формулировка и дизайн программы",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-formulation",
                title: { en: "Case Formulation", ru: "Формулировка случая" },
                description: {
                  en: "Link symptoms, causes, and maintaining factors",
                  ru: "Свяжите симптомы, причины и поддерживающие факторы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Prepare a 1‑page formulation for a composite case",
                  ru: "Подготовьте 1‑страничную формулировку сводного случая",
                },
              },
              {
                id: "g11-ethics-legal",
                title: {
                  en: "Ethics & Legal Basics",
                  ru: "Этика и основы права",
                },
                description: {
                  en: "Confidentiality, consent, and boundaries",
                  ru: "Конфиденциальность, согласие и границы",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft guidelines for confidentiality in a school setting",
                  ru: "Составьте правила конфиденциальности для школы",
                },
              },
              {
                id: "g11-capstone-program",
                title: {
                  en: "Capstone: Mental Health Program",
                  ru: "Капстоун: программа по психздоровью",
                },
                description: {
                  en: "Design a small peer‑support or awareness program",
                  ru: "Разработайте небольшую программу взаимопомощи или осведомленности",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Present program plan, materials and evaluation",
                  ru: "Представьте план программы, материалы и оценку",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Psychiatrist", ru: "Психиатр" },
          { en: "Clinical Psychologist", ru: "Клинический психолог" },
          {
            en: "Mental Health Nurse",
            ru: "Медсестра психиатрического профиля",
          },
        ],
        topUniversities: [
          "Harvard",
          "Stanford",
          "Oxford",
          "Johns Hopkins",
          "Mayo Clinic",
        ],
        averageSalary: {
          entry: "$220,000",
          mid: "$280,000",
          senior: "$350,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Introduction to Psychology",
              description: {
                en: "Core psychology concepts",
                ru: "Ключевые концепции психологии",
              },
              provider: "Yale (Coursera)",
              url: "https://www.coursera.org/learn/psychology",
              price: "Free to audit",
            },
            {
              name: "Managing Your Mental Health",
              description: {
                en: "Evidence‑based strategies for well‑being",
                ru: "Стратегии благополучия на основе доказательств",
              },
              provider: "Coursera/OpenLearn",
              url: "https://www.open.edu/openlearn/",
              price: "Free",
            },
            {
              name: "CBT Approaches",
              description: {
                en: "Cognitive behavioral techniques",
                ru: "Когнитивно‑поведенческие техники",
              },
              provider: "Coursera/edX (audit)",
              url: "https://www.coursera.org/search?query=cbt",
              price: "Free to audit",
            },
            {
              name: "Psychological First Aid",
              description: {
                en: "Supporting others after crises",
                ru: "Поддержка после кризисов",
              },
              provider: "Johns Hopkins (Coursera)",
              url: "https://www.coursera.org/learn/psychological-first-aid",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "HOSA: Behavioral Health",
              description: {
                en: "Behavioral health knowledge event",
                ru: "Соревнование по знаниям в области поведенческого здоровья",
              },
              url: "https://hosa.org/competitions/",
              level: "beginner",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Mental Health KZ",
              description: {
                en: "Community around mental health topics",
                ru: "Сообщество по темам психического здоровья",
              },
              url: "https://t.me/mental_health_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Nazarbayev University School of Medicine",
              location: "Astana",
              programs: ["MD", "Public Health"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "engineering",
    name: { en: "Engineering", ru: "Инженерия" },
    description: {
      en: "Apply science and mathematics to solve real-world problems",
      ru: "Применение науки и математики для решения реальных проблем",
    },
    overview: {
      en: "Design and build solutions to complex problems using science, mathematics, and creativity",
      ru: "Проектируйте и создавайте решения сложных проблем, используя науку, математику и творчество",
    },
    icon: "🔧",
    color: "from-gray-500 to-blue-600",
    category: "Engineering",
    demandLevel: "High",
    averageSalary: "$75,000 - $140,000+",
    topUniversities: ["MIT", "Stanford", "UC Berkeley", "Caltech", "KazATU"],
    skills: [
      { en: "Problem Solving", ru: "Решение проблем" },
      { en: "Mathematics", ru: "Математика" },
      { en: "Design", ru: "Проектирование" },
      { en: "Analysis", ru: "Анализ" },
    ],
    stats: {
      avgSalary: "$90K",
      jobGrowth: "+6%",
      popularity: "High",
    },
    subspecializations: [
      {
        id: "mechanical-engineering",
        name: { en: "Mechanical Engineering", ru: "Машиностроение" },
        description: {
          en: "Design, analyze, and build mechanical systems and products",
          ru: "Проектирование, анализ и создание механических систем и продуктов",
        },
        roadmap: [
          {
            id: "grade7-mech",
            grade: 7,
            title: {
              en: "Grade 7 - Simple Machines & Safety",
              ru: "7 класс - Простые механизмы и безопасность",
            },
            description: {
              en: "Simple machines, measuring, and workshop safety",
              ru: "Простые механизмы, измерения и безопасность в мастерской",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-simple-machines",
                title: { en: "Simple Machines", ru: "Простые механизмы" },
                description: {
                  en: "Levers, pulleys, wheels, inclined planes and mechanical advantage",
                  ru: "Рычаги, блоки, колеса, наклонные плоскости и механическое преимущество",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a lever-pulley demo to lift a weight; calculate MA",
                  ru: "Соберите демонстратор рычага и блока для подъема груза; рассчитайте МП",
                },
              },
              {
                id: "g7-materials-intro",
                title: { en: "Materials (Intro)", ru: "Материалы (введение)" },
                description: {
                  en: "Wood, plastics, metals; strength, stiffness, density concepts",
                  ru: "Дерево, пластики, металлы; основы прочности, жесткости, плотности",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Test 3 materials in bending with weights; compare deflection",
                  ru: "Испытайте 3 материала на изгиб грузами; сравните прогиб",
                },
              },
              {
                id: "g7-measure-draw",
                title: { en: "Measure & Draw", ru: "Измерение и черчение" },
                description: {
                  en: "Rulers, calipers, scale, and basic orthographic sketches",
                  ru: "Линейки, штангенциркуль, масштаб и базовые ортографические эскизы",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a measured drawing of a small object with 3 views",
                  ru: "Сделайте чертеж небольшого предмета с 3 видами",
                },
              },
            ],
          },
          {
            id: "grade8-mech",
            grade: 8,
            title: {
              en: "Grade 8 - Statics, Energy & CAD",
              ru: "8 класс - Статика, энергия и CAD",
            },
            description: {
              en: "Forces, energy, and parametric CAD basics",
              ru: "Силы, энергия и основы параметрического CAD",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-statics",
                title: { en: "Statics (Intro)", ru: "Статика (введение)" },
                description: {
                  en: "Free-body diagrams, equilibrium, and supports",
                  ru: "Диаграммы свободного тела, равновесие и опоры",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a popsicle-bridge; estimate reactions and test to failure",
                  ru: "Постройте мост из палочек; оцените реакции и испытайте до разрушения",
                },
              },
              {
                id: "g8-energy-power",
                title: { en: "Energy & Power", ru: "Энергия и мощность" },
                description: {
                  en: "Potential/kinetic energy, efficiency, and losses",
                  ru: "Потенциальная/кинетическая энергия, КПД и потери",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a rubber-band car; measure distance vs winds",
                  ru: "Соберите резиномоторную машинку; измерьте дальность vs заводов",
                },
              },
              {
                id: "g8-cad-basics",
                title: {
                  en: "CAD Basics (Fusion/FreeCAD)",
                  ru: "Основы CAD (Fusion/FreeCAD)",
                },
                description: {
                  en: "Sketch, constraints, extrude, fillet; assemblies",
                  ru: "Эскизы, ограничения, выдавливание, фаски; сборки",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Model and assemble a gearbox housing with exploded view",
                  ru: "Смоделируйте и соберите корпус редуктора с разнесённым видом",
                },
              },
            ],
          },
          {
            id: "grade9-mech",
            grade: 9,
            title: {
              en: "Grade 9 - Dynamics & Manufacturing",
              ru: "9 класс - Динамика и производство",
            },
            description: {
              en: "Kinematics, 3D printing, and thermal basics",
              ru: "Кинематика, 3D‑печать и основы теплотехники",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-kinematics",
                title: {
                  en: "Kinematics & Dynamics",
                  ru: "Кинематика и динамика",
                },
                description: {
                  en: "Velocity, acceleration and friction experiments",
                  ru: "Скорость, ускорение и эксперименты с трением",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Roll a cart down ramps; plot v(t), a(t); discuss energy loss",
                  ru: "Прокатите тележку по наклонным; постройте v(t), a(t); обсудите потери энергии",
                },
              },
              {
                id: "g9-dfm-3dprint",
                title: {
                  en: "Design for 3D Printing",
                  ru: "Проектирование под 3D‑печать",
                },
                description: {
                  en: "Tolerances, wall thickness, supports, orientations",
                  ru: "Допуски, толщина стенок, поддержки, ориентации",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design and print a snap-fit box; test fit tolerance",
                  ru: "Спроектируйте и распечатайте коробку snap‑fit; проверьте допуск",
                },
              },
              {
                id: "g9-thermal-basics",
                title: { en: "Thermal Basics", ru: "Основы теплотехники" },
                description: {
                  en: "Conduction, convection, radiation and insulation",
                  ru: "Теплопроводность, конвекция, излучение и теплоизоляция",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build an insulated cup; measure cooling curves vs control",
                  ru: "Соберите термостакан; измерьте охлаждение vs контроль",
                },
              },
            ],
          },
          {
            id: "grade10-mech",
            grade: 10,
            title: {
              en: "Grade 10 - Mechanisms, Control & Economics",
              ru: "10 класс - Механизмы, управление и экономика",
            },
            description: {
              en: "Linkages, sensors/microcontrollers, and project planning",
              ru: "Механизмы, датчики/микроконтроллеры и планирование проектов",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-mechanisms",
                title: {
                  en: "Mechanism Design",
                  ru: "Проектирование механизмов",
                },
                description: {
                  en: "Four-bar linkages, cams, gears and motion profiles",
                  ru: "Четырехзвенные, кулачки, шестерни и профили движения",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Design a cam-driven mechanism with desired displacement",
                  ru: "Спроектируйте кулачковый механизм с заданным перемещением",
                },
              },
              {
                id: "g10-sensing-control",
                title: {
                  en: "Sensing & Control (Arduino)",
                  ru: "Датчики и управление (Arduino)",
                },
                description: {
                  en: "Basic feedback with encoders/thermistors",
                  ru: "Базовая обратная связь с энкодерами/термисторами",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build a temperature or speed controller with plots",
                  ru: "Соберите регулятор температуры или скорости с графиками",
                },
              },
              {
                id: "g10-eng-economics",
                title: {
                  en: "Engineering Economics",
                  ru: "Инженерная экономика",
                },
                description: {
                  en: "Costing, BOMs, and simple ROI for a product",
                  ru: "Калькуляция, спецификации и простой ROI продукта",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Prepare a mini‑BOM and cost/price/ROI sheet",
                  ru: "Подготовьте мини‑BOM и таблицу себестоимости/цены/ROI",
                },
              },
            ],
          },
          {
            id: "grade11-mech",
            grade: 11,
            title: {
              en: "Grade 11 - Analysis & Capstone",
              ru: "11 класс - Анализ и капстоун",
            },
            description: {
              en: "Intro FEA, experimental tests, and product subsystem capstone",
              ru: "Введение в FEA, экспериментальные испытания и капстоун подсистемы",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-fea-intro",
                title: { en: "FEA (Intro)", ru: "FEA (введение)" },
                description: {
                  en: "Meshing, boundary conditions, and stress/strain plots",
                  ru: "Сетка, граничные условия и графики напряжений/деформаций",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Analyze a bracket in free FEA tool; report safety factor",
                  ru: "Проанализируйте кронштейн в бесплатном FEA; рассчитайте коэффициент запаса",
                },
              },
              {
                id: "g11-experimental",
                title: {
                  en: "Experimental Methods",
                  ru: "Экспериментальные методы",
                },
                description: {
                  en: "Plan tests, collect data, uncertainty and error",
                  ru: "План испытаний, сбор данных, неопределенность и ошибка",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run a repeatable test and produce a lab report with stats",
                  ru: "Проведите воспроизводимый тест и подготовьте отчет со статистикой",
                },
              },
              {
                id: "g11-capstone-mech",
                title: {
                  en: "Capstone: Product Subsystem",
                  ru: "Капстоун: подсистема продукта",
                },
                description: {
                  en: "Integrate design, analysis, testing and documentation",
                  ru: "Интеграция проектирования, анализа, испытаний и документации",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver CAD, FEA, BOM, test results and a short presentation",
                  ru: "Предоставьте CAD, FEA, спецификацию, результаты тестов и презентацию",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Mechanical Engineer", ru: "Инженер-механик" },
          { en: "Manufacturing Engineer", ru: "Инженер по производству" },
          {
            en: "Product Design Engineer",
            ru: "Инженер по проектированию продукта",
          },
        ],
        topUniversities: [
          "MIT",
          "Stanford",
          "UC Berkeley",
          "Georgia Tech",
          "Cambridge",
        ],
        averageSalary: {
          entry: "$70,000",
          mid: "$100,000",
          senior: "$140,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Statics",
              description: {
                en: "Fundamentals of forces and equilibrium",
                ru: "Основы сил и равновесия",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
            {
              name: "Introduction to Solid Mechanics",
              description: {
                en: "Stress, strain, and deformation",
                ru: "Напряжение, деформация и перемещения",
              },
              provider: "Coursera (audit)",
              url: "https://www.coursera.org/search?query=solid%20mechanics",
              price: "Free to audit",
            },
            {
              name: "Fusion 360 CAD",
              description: {
                en: "Parametric modeling and assemblies",
                ru: "Параметрическое моделирование и сборки",
              },
              provider: "Autodesk/Coursera",
              url: "https://www.coursera.org/learn/fusion-360",
              price: "Free to audit",
            },
            {
              name: "Thermodynamics (Intro)",
              description: {
                en: "Energy, heat and work basics",
                ru: "Основы энергии, тепла и работы",
              },
              provider: "edX (audit)",
              url: "https://www.edx.org/learn/thermodynamics",
              price: "Free to audit",
            },
          ],
          competitions: [
            {
              name: "Science Olympiad: Bridge/Flight",
              description: {
                en: "Hands-on engineering build events",
                ru: "Практические инженерные соревнования",
              },
              url: "https://www.soinc.org",
              level: "beginner",
            },
            {
              name: "ASME E-Fest (concept)",
              description: {
                en: "Student design/build challenges",
                ru: "Студенческие инженерные челленджи",
              },
              url: "https://efests.asme.org",
              level: "intermediate",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Engineering Kazakhstan",
              description: {
                en: "Community for engineering students and pros",
                ru: "Сообщество студентов и специалистов-инженеров",
              },
              url: "https://t.me/engineering_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Satbayev University",
              location: "Almaty",
              programs: ["Mechanical Engineering", "Manufacturing"],
              url: "https://satbayev.university",
            },
            {
              name: "Nazarbayev University",
              location: "Astana",
              programs: ["Mechanical & Aerospace Engineering"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
      {
        id: "electrical-engineering",
        name: { en: "Electrical Engineering", ru: "Электротехника" },
        description: {
          en: "Design circuits, electronics, communications and power systems",
          ru: "Проектирование схем, электроники, систем связи и энергетики",
        },
        roadmap: [
          {
            id: "grade7-ee",
            grade: 7,
            title: {
              en: "Grade 7 - Electricity & Safety",
              ru: "7 класс - Электричество и безопасность",
            },
            description: {
              en: "Basic electricity, components and safe practices",
              ru: "Основы электричества, компоненты и безопасные приемы",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-circuits-intro",
                title: {
                  en: "Circuits: Series/Parallel",
                  ru: "Цепи: последовательные/параллельные",
                },
                description: {
                  en: "Current, voltage and simple measurements",
                  ru: "Ток, напряжение и простые измерения",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Build a battery-LED circuit; add a switch and measure V/I",
                  ru: "Соберите схему батарейка‑LED; добавьте выключатель и измерьте U/I",
                },
              },
              {
                id: "g7-components",
                title: { en: "Components ID", ru: "Распознавание компонентов" },
                description: {
                  en: "Resistors, capacitors, diodes, transistors (roles)",
                  ru: "Резисторы, конденсаторы, диоды, транзисторы (роли)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a component card set with symbols and uses",
                  ru: "Создайте карточки компонентов с символами и применением",
                },
              },
              {
                id: "g7-soldering-safety",
                title: {
                  en: "Soldering & Safety (Intro)",
                  ru: "Пайка и безопасность (введение)",
                },
                description: {
                  en: "Tools, ESD awareness and practice joints (non-live)",
                  ru: "Инструменты, ЭСР и тренировка соединений (без напряжения)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Solder a small practice board; photo QC checklist",
                  ru: "Спаяйте учебную плату; чек‑лист контроля качества",
                },
              },
            ],
          },
          {
            id: "grade8-ee",
            grade: 8,
            title: {
              en: "Grade 8 - Analog Circuits",
              ru: "8 класс - Аналоговые схемы",
            },
            description: {
              en: "Ohm’s law, RC filters and op-amp basics",
              ru: "Закон Ома, RC‑фильтры и основы ОУ",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-ohms-law",
                title: {
                  en: "Ohm’s Law & Dividers",
                  ru: "Закон Ома и делители",
                },
                description: {
                  en: "R-network math and measurements",
                  ru: "Расчеты и измерения резистивных сетей",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a voltage divider for a sensor; validate with multimeter",
                  ru: "Спроектируйте делитель для датчика; проверьте мультиметром",
                },
              },
              {
                id: "g8-rc-filters",
                title: { en: "RC Filters", ru: "RC‑фильтры" },
                description: {
                  en: "Time constant, cutoff, and Bode intuition",
                  ru: "Постоянная времени, срез и интуиция диаграмм Боде",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Build low/high‑pass; measure response vs frequency",
                  ru: "Соберите НЧ/ВЧ‑фильтр; измерьте отклик vs частота",
                },
              },
              {
                id: "g8-opamp",
                title: {
                  en: "Op‑Amp Basics",
                  ru: "Основы операционных усилителей",
                },
                description: {
                  en: "Buffer, inverter, gain and saturation",
                  ru: "Буфер, инвертор, усиление и насыщение",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build an audio preamp on breadboard; plot gain",
                  ru: "Соберите аудио предусилитель на макетке; постройте усиление",
                },
              },
            ],
          },
          {
            id: "grade9-ee",
            grade: 9,
            title: {
              en: "Grade 9 - Digital & Embedded",
              ru: "9 класс - Цифровая и встраиваемая",
            },
            description: {
              en: "Logic, microcontrollers and sensors",
              ru: "Логика, микроконтроллеры и датчики",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-logic-gates",
                title: {
                  en: "Logic Gates & Boolean",
                  ru: "Логические элементы и Булева алгебра",
                },
                description: {
                  en: "Truth tables, simplification and timing idea",
                  ru: "Таблицы истинности, упрощение и идея тайминга",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Build a 2‑bit adder from gates (sim or breadboard)",
                  ru: "Соберите 2‑битный сумматор из логики (симуляция или макетка)",
                },
              },
              {
                id: "g9-mcu-basics",
                title: {
                  en: "Microcontroller Basics",
                  ru: "Основы микроконтроллеров",
                },
                description: {
                  en: "GPIO, PWM, timers; C/C++ or Arduino",
                  ru: "GPIO, PWM, таймеры; C/C++ или Arduino",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Program LED fade and servo positioner with buttons",
                  ru: "Запрограммируйте плавное свечение LED и сервопривод с кнопками",
                },
              },
              {
                id: "g9-sensors-io",
                title: { en: "Sensors & I/O", ru: "Датчики и ввод/вывод" },
                description: {
                  en: "Analog readings, debouncing, simple displays",
                  ru: "Аналоговые чтения, дебаунс и простые дисплеи",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Read temperature/ultrasonic sensor; show value on OLED",
                  ru: "Снимите данные датчика температуры/ультразвука; выведите на OLED",
                },
              },
            ],
          },
          {
            id: "grade10-ee",
            grade: 10,
            title: {
              en: "Grade 10 - Signals, Wireless & Power",
              ru: "10 класс - Сигналы, беспровод и силовая",
            },
            description: {
              en: "Signals/sampling, RF basics and power electronics",
              ru: "Сигналы/дискретизация, основы РФ и силовая электроника",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-signals",
                title: {
                  en: "Signals & Sampling",
                  ru: "Сигналы и дискретизация",
                },
                description: {
                  en: "Sine, noise, aliasing; intro FFT in tools",
                  ru: "Синус, шум, алиасинг; введение в БПФ в инструментах",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Capture audio with MCU and visualize spectrum (PC)",
                  ru: "Запишите звук МК и визуализируйте спектр (ПК)",
                },
              },
              {
                id: "g10-rf-basics",
                title: {
                  en: "Wireless (RF Intro)",
                  ru: "Беспроводная связь (введение)",
                },
                description: {
                  en: "Modulation idea, antennas and RSSI",
                  ru: "Идея модуляции, антенны и RSSI",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Send sensor data via BLE/LoRa; plot signal strength",
                  ru: "Передайте данные датчика по BLE/LoRa; постройте уровень сигнала",
                },
              },
              {
                id: "g10-power-electronics",
                title: {
                  en: "Power Electronics (Intro)",
                  ru: "Силовая электроника (введение)",
                },
                description: {
                  en: "Rectifiers, regulators, buck/boost concepts",
                  ru: "Выпрямители, стабилизаторы, концепции понижающих/повышающих",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Simulate a buck converter; test efficiency vs load",
                  ru: "Смоделируйте понижающий преобразователь; измерьте КПД vs нагрузка",
                },
              },
            ],
          },
          {
            id: "grade11-ee",
            grade: 11,
            title: {
              en: "Grade 11 - PCB, Embedded & Capstone",
              ru: "11 класс - Плата, встраиваемая и капстоун",
            },
            description: {
              en: "PCB CAD, embedded integration and IoT capstone",
              ru: "CAD печатных плат, встраиваемая интеграция и IoT капстоун",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-pcb-cad",
                title: {
                  en: "PCB Design (KiCad)",
                  ru: "Проектирование плат (KiCad)",
                },
                description: {
                  en: "Schematic, footprints, layout and DRC",
                  ru: "Схема, посадочные места, трассировка и DRC",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Design a sensor breakout PCB; generate Gerbers and 3D view",
                  ru: "Спроектируйте плату датчика; создайте Герберы и 3D‑вид",
                },
              },
              {
                id: "g11-embedded-integration",
                title: {
                  en: "Embedded Integration",
                  ru: "Интеграция встраиваемых систем",
                },
                description: {
                  en: "Drivers, protocols (I2C/SPI/UART) and power budgeting",
                  ru: "Драйверы, протоколы (I2C/SPI/UART) и энергобюджет",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Integrate 2 sensors and control output with low power mode",
                  ru: "Интегрируйте 2 датчика и управляйте выходом с низким энергопотреблением",
                },
              },
              {
                id: "g11-capstone-iot",
                title: {
                  en: "Capstone: IoT Device",
                  ru: "Капстоун: IoT‑устройство",
                },
                description: {
                  en: "Design, build, and document a connected device",
                  ru: "Спроектируйте, соберите и задокументируйте подключаемое устройство",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver repo, schematic/PCB, firmware and demo video",
                  ru: "Предоставьте репозиторий, схему/плату, прошивку и демо‑видео",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Electrical Engineer", ru: "Инженер-электрик" },
          {
            en: "Embedded Systems Engineer",
            ru: "Инженер встраиваемых систем",
          },
          { en: "RF/Communications Engineer", ru: "Инженер по радиосвязи" },
        ],
        topUniversities: [
          "MIT",
          "ETH Zurich",
          "Stanford",
          "Georgia Tech",
          "Cambridge",
        ],
        averageSalary: {
          entry: "$80,000",
          mid: "$115,000",
          senior: "$160,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Circuits and Electronics",
              description: {
                en: "Core circuit analysis and design",
                ru: "Базовый анализ и проектирование схем",
              },
              provider: "MITx (edX, audit)",
              url: "https://www.edx.org/course/circuits-and-electronics-1-basic-circuit-analysis",
              price: "Free to audit",
            },
            {
              name: "Introduction to Electronics",
              description: {
                en: "Diodes, transistors, op-amps",
                ru: "Диоды, транзисторы, ОУ",
              },
              provider: "Georgia Tech (Coursera)",
              url: "https://www.coursera.org/learn/electronics",
              price: "Free to audit",
            },
            {
              name: "KiCad Like a Pro (intro resources)",
              description: {
                en: "PCB design fundamentals",
                ru: "Основы проектирования печатных плат",
              },
              provider: "Open tutorials",
              url: "https://kicad.org/help/learn/",
              price: "Free",
            },
            {
              name: "Signals and Systems (Intro)",
              description: {
                en: "Signals, sampling, LTI systems",
                ru: "Сигналы, дискретизация, LTI‑системы",
              },
              provider: "Khan Academy/OpenCourseWare",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "IEEE Micromouse (concept)",
              description: {
                en: "Autonomous maze-navigating robot challenge",
                ru: "Задача по автономной навигации в лабиринте",
              },
              url: "https://ieee.org",
              level: "intermediate",
            },
            {
              name: "Hackaday Prize",
              description: {
                en: "Open hardware design competition",
                ru: "Конкурс открытых аппаратных проектов",
              },
              url: "https://hackaday.io/prize",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Electronics & Embedded KZ",
              description: {
                en: "Kazakhstan makers and embedded enthusiasts",
                ru: "Мейкеры и энтузиасты встраиваемых систем Казахстана",
              },
              url: "https://t.me/embedded_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "KBTU",
              location: "Almaty",
              programs: ["Electrical & Electronics Engineering"],
              url: "https://kbtu.edu.kz",
            },
            {
              name: "Nazarbayev University",
              location: "Astana",
              programs: ["Electrical & Computer Engineering"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
      {
        id: "civil-engineering",
        name: { en: "Civil Engineering", ru: "Гражданское строительство" },
        description: {
          en: "Design and maintain infrastructure: buildings, roads, water systems",
          ru: "Проектирование и эксплуатация инфраструктуры: здания, дороги, водные системы",
        },
        roadmap: [
          {
            id: "grade7-civil",
            grade: 7,
            title: {
              en: "Grade 7 - Built Environment",
              ru: "7 класс - Искусственная среда",
            },
            description: {
              en: "Structures around us, measurement and safety",
              ru: "Окружающие конструкции, измерения и безопасность",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-structures-everywhere",
                title: {
                  en: "Structures Everywhere",
                  ru: "Конструкции вокруг нас",
                },
                description: {
                  en: "Beams, columns, arches; load paths concept",
                  ru: "Балки, колонны, арки; идея путей нагрузок",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Photo-log 10 structures; annotate load paths",
                  ru: "Фото‑дневник 10 конструкций; отметьте пути нагрузок",
                },
              },
              {
                id: "g7-measure-draw-civil",
                title: {
                  en: "Measure & Draw (Civil)",
                  ru: "Измерение и черчение (Civil)",
                },
                description: {
                  en: "Tape, level, scale; simple site sketch",
                  ru: "Рулетка, уровень, масштаб; простой эскиз площадки",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Sketch a classroom with dimensions and scale bar",
                  ru: "Набросайте план класса с размерами и масштабом",
                },
              },
              {
                id: "g7-safety-sustain",
                title: {
                  en: "Safety & Sustainability",
                  ru: "Безопасность и устойчивость",
                },
                description: {
                  en: "PPE basics and sustainability ideas (reduce, reuse)",
                  ru: "Основы СИЗ и идеи устойчивости (снижение, повторное использование)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a safety checklist and green ideas list for a mini-build",
                  ru: "Создайте чек‑лист безопасности и идеи устойчивости для мини‑проекта",
                },
              },
            ],
          },
          {
            id: "grade8-civil",
            grade: 8,
            title: {
              en: "Grade 8 - Materials & Surveying",
              ru: "8 класс - Материалы и съемка",
            },
            description: {
              en: "Concrete, soils and land surveying basics",
              ru: "Бетон, грунты и основы геодезической съемки",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-concrete",
                title: {
                  en: "Concrete Lab (Intro)",
                  ru: "Бетонная лаборатория (введение)",
                },
                description: {
                  en: "Mix design idea, curing and compressive strength",
                  ru: "Идея подбора состава, твердение и прочность на сжатие",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Cast small cubes; perform crush test (safe demo or sim)",
                  ru: "Отлейте кубики; выполните испытание на сжатие (демо/симуляция)",
                },
              },
              {
                id: "g8-soil-intro",
                title: {
                  en: "Soil Mechanics (Intro)",
                  ru: "Механика грунтов (введение)",
                },
                description: {
                  en: "Grain size, moisture, and bearing concept",
                  ru: "Крупность, влажность и идея несущей способности",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Sieve household sands/soils; chart gradation",
                  ru: "Просейте бытовой песок/грунт; постройте градуировку",
                },
              },
              {
                id: "g8-surveying",
                title: { en: "Surveying Basics", ru: "Основы съемки" },
                description: {
                  en: "Level, angle and distance measurements",
                  ru: "Измерение высот, углов и расстояний",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Run a level loop around school; compute closure error",
                  ru: "Выполните нивелирование по кольцу школы; посчитайте невязку",
                },
              },
            ],
          },
          {
            id: "grade9-civil",
            grade: 9,
            title: {
              en: "Grade 9 - Structures & Water",
              ru: "9 класс - Конструкции и вода",
            },
            description: {
              en: "Trusses, beams and basic hydrology",
              ru: "Фермы, балки и основы гидрологии",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-trusses",
                title: { en: "Truss Design", ru: "Проектирование ферм" },
                description: {
                  en: "Members in tension/compression and stability",
                  ru: "Стержни на растяжение/сжатие и устойчивость",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Build a stick truss; test load and plot deflection",
                  ru: "Постройте ферму из реек; испытайте нагрузкой и постройте прогиб",
                },
              },
              {
                id: "g9-beams",
                title: { en: "Beams & Loads", ru: "Балки и нагрузки" },
                description: {
                  en: "Load types, shear and deflection concepts",
                  ru: "Типы нагрузок, поперечная сила и идея прогиба",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Measure deflection of a beam under distributed vs point load",
                  ru: "Измерьте прогиб балки при распределенной и сосредоточенной нагрузке",
                },
              },
              {
                id: "g9-hydrology",
                title: { en: "Hydrology Basics", ru: "Основы гидрологии" },
                description: {
                  en: "Runoff, drainage and simple open‑channel flow",
                  ru: "Сточные воды, дренаж и простой открытый поток",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Build a rain runoff model; observe infiltration vs slope",
                  ru: "Соберите модель стока дождя; изучите инфильтрацию vs уклон",
                },
              },
            ],
          },
          {
            id: "grade10-civil",
            grade: 10,
            title: {
              en: "Grade 10 - Codes, BIM & Transport",
              ru: "10 класс - Нормы, BIM и транспорт",
            },
            description: {
              en: "Loads/codes, BIM intro and transport planning",
              ru: "Нагрузки/нормы, введение в BIM и транспортное планирование",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-codes-loads",
                title: {
                  en: "Loads & Codes (Intro)",
                  ru: "Нагрузки и нормы (введение)",
                },
                description: {
                  en: "Dead/live loads and safety factors idea",
                  ru: "Постоянные/временные нагрузки и идея коэффициентов запаса",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Estimate loads for a small room; create a load table",
                  ru: "Оцените нагрузки комнаты; составьте таблицу нагрузок",
                },
              },
              {
                id: "g10-bim",
                title: { en: "BIM (Intro)", ru: "BIM (введение)" },
                description: {
                  en: "Revit or free BIM: families, views, schedules",
                  ru: "Revit или бесплатный BIM: семейства, виды, спецификации",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Model a one‑room building with door/window schedule",
                  ru: "Смоделируйте одно помещение со спецификацией дверей/окон",
                },
              },
              {
                id: "g10-transport",
                title: {
                  en: "Transportation Planning",
                  ru: "Транспортное планирование",
                },
                description: {
                  en: "Trip generation, capacity and simple traffic sims",
                  ru: "Генерация поездок, пропускная способность и простые симуляции",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Survey traffic at an intersection; propose timing changes",
                  ru: "Изучите трафик на перекрестке; предложите изменения фаз",
                },
              },
            ],
          },
          {
            id: "grade11-civil",
            grade: 11,
            title: {
              en: "Grade 11 - Resilience & Capstone",
              ru: "11 класс - Устойчивость и капстоун",
            },
            description: {
              en: "Resilient design, environment and capstone design",
              ru: "Устойчивое проектирование, экология и итоговый проект",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-environment",
                title: {
                  en: "Environmental & EIA (Intro)",
                  ru: "Экология и ОВОС (введение)",
                },
                description: {
                  en: "Impacts, mitigation and monitoring concepts",
                  ru: "Воздействия, смягчение и мониторинг",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draft a mini‑EIA for a footbridge concept",
                  ru: "Подготовьте мини‑ОВОС для пешеходного моста",
                },
              },
              {
                id: "g11-resilience",
                title: { en: "Resilience & Risk", ru: "Жизнестойкость и риск" },
                description: {
                  en: "Redundancy, flood/wind seismic ideas",
                  ru: "Резервирование, наводнение/ветер, сейсмика",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Assess flood risk on campus map; propose mitigations",
                  ru: "Оцените риск подтопления на схеме кампуса; предложите меры",
                },
              },
              {
                id: "g11-capstone-civil",
                title: {
                  en: "Capstone: Small Infrastructure",
                  ru: "Капстоун: малая инфраструктура",
                },
                description: {
                  en: "Design a small structure/site with drawings and schedule",
                  ru: "Спроектируйте малую конструкцию/площадку с чертежами и графиком",
                },
                timeline: { en: "5 weeks", ru: "5 недель" },
                project: {
                  en: "Deliver site plan, sections, load estimate and BoQ",
                  ru: "Предоставьте генплан, разрезы, расчет нагрузок и ведомость объемов",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Civil Engineer", ru: "Инженер-строитель" },
          { en: "Structural Engineer", ru: "Инженер-конструктор" },
          {
            en: "Transportation/Water Engineer",
            ru: "Инженер транспорта/водных систем",
          },
        ],
        topUniversities: [
          "MIT",
          "UC Berkeley",
          "Imperial College London",
          "ETH Zurich",
          "TUM",
        ],
        averageSalary: {
          entry: "$70,000",
          mid: "$95,000",
          senior: "$130,000+",
        },
        globalResources: {
          courses: [
            {
              name: "Introduction to Structural Engineering",
              description: {
                en: "Fundamentals of structural behavior and design",
                ru: "Основы поведения и проектирования конструкций",
              },
              provider: "edX (audit)",
              url: "https://www.edx.org/learn/structural-engineering",
              price: "Free to audit",
            },
            {
              name: "Concrete Technology (Intro)",
              description: {
                en: "Concrete materials and properties",
                ru: "Материалы и свойства бетона",
              },
              provider: "Coursera/edX (audit)",
              url: "https://www.coursera.org/search?query=concrete%20technology",
              price: "Free to audit",
            },
            {
              name: "Soil Mechanics (Basics)",
              description: {
                en: "Soil properties, bearing and consolidation",
                ru: "Свойства грунтов, несущая способность и консолидация",
              },
              provider: "MIT OCW",
              url: "https://ocw.mit.edu",
              price: "Free",
            },
            {
              name: "Introduction to BIM",
              description: {
                en: "BIM concepts and workflows",
                ru: "Концепции и процессы BIM",
              },
              provider: "Open online resources",
              url: "https://www.autodesk.com/solutions/bim",
              price: "Free",
            },
          ],
          competitions: [
            {
              name: "Future City Competition",
              description: {
                en: "Middle/high school city design challenge",
                ru: "Конкурс по проектированию города для школьников",
              },
              url: "https://futurecity.org",
              level: "beginner",
            },
            {
              name: "ASCE Student Competitions (concept)",
              description: {
                en: "Concrete canoe, steel bridge style events",
                ru: "Соревнования типа железный мост, бетонная лодка",
              },
              url: "https://www.asce.org",
              level: "advanced",
            },
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Civil Engineering KZ",
              description: {
                en: "Community for civil/structural topics",
                ru: "Сообщество по гражданскому/конструктивному строительству",
              },
              url: "https://t.me/civil_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Satbayev University",
              location: "Almaty",
              programs: ["Civil Engineering", "Structural Engineering"],
              url: "https://satbayev.university",
            },
            {
              name: "Nazarbayev University",
              location: "Astana",
              programs: ["Civil & Environmental Engineering"],
              url: "https://nu.edu.kz",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "law",
    name: { en: "Law", ru: "Юриспруденция" },
    description: {
      en: "Practice law and represent clients in legal matters",
      ru: "Практика права и представление клиентов в правовых вопросах",
    },
    overview: {
      en: "Advocate for justice, represent clients in court, and navigate complex legal systems",
      ru: "Защищайте справедливость, представляйте клиентов в суде и ориентируйтесь в сложных правовых системах",
    },
    icon: "⚖️",
    color: "from-yellow-500 to-orange-600",
    category: "Law & Justice",
    demandLevel: "Medium",
    averageSalary: "$60,000 - $200,000+",
    topUniversities: [
      "Harvard Law",
      "Yale Law",
      "Stanford Law",
      "Columbia",
      "KazGUU",
    ],
    skills: [
      { en: "Legal Research", ru: "Правовые исследования" },
      { en: "Writing", ru: "Письмо" },
      { en: "Argumentation", ru: "Аргументация" },
      { en: "Critical Analysis", ru: "Критический анализ" },
    ],
    stats: {
      avgSalary: "$95K",
      jobGrowth: "+9%",
      popularity: "Medium",
    },
    subspecializations: [
      {
        id: "corporate-law",
        name: { en: "Corporate Law", ru: "Корпоративное право" },
        description: {
          en: "Legal frameworks for businesses, transactions, compliance, and governance",
          ru: "Правовые основы для бизнеса, сделок, комплаенса и корпоративного управления",
        },
        roadmap: [
          {
            id: "grade7-corp-law",
            grade: 7,
            title: { en: "Grade 7 - Law & Society", ru: "7 класс - Право и общество" },
            description: {
              en: "What laws do, how rules work, and basics of fair dealing",
              ru: "Зачем нужны законы, как работают правила и основы добросовестности",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-rule-of-law",
                title: { en: "Rule of Law Basics", ru: "Основы верховенства права" },
                description: {
                  en: "Why societies use laws; fairness and equal treatment",
                  ru: "Почему общества используют законы; справедливость и равное отношение",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a classroom code of conduct with fair procedures",
                  ru: "Создайте классный свод правил с честными процедурами",
                },
              },
              {
                id: "g7-rights-responsibilities",
                title: { en: "Rights & Responsibilities", ru: "Права и обязанности" },
                description: {
                  en: "Individual rights vs community responsibilities",
                  ru: "Индивидуальные права и обязанности перед сообществом",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a one-page charter balancing rights and responsibilities",
                  ru: "Составьте одностраничную хартию, балансирующую права и обязанности",
                },
              },
              {
                id: "g7-ethical-dilemmas",
                title: { en: "Everyday Ethics", ru: "Повседневная этика" },
                description: {
                  en: "Honesty in schoolwork, teamwork, and sharing credit",
                  ru: "Честность в учебе, командной работе и разделении заслуг",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Analyze 3 short dilemmas and propose fair resolutions",
                  ru: "Проанализируйте 3 короткие дилеммы и предложите справедливые решения",
                },
              },
            ],
          },
          {
            id: "grade8-corp-law",
            grade: 8,
            title: { en: "Grade 8 - Contracts & Research", ru: "8 класс - Контракты и правовой поиск" },
            description: {
              en: "Basics of agreements and how to find reliable sources",
              ru: "Основы договоров и поиск надежных источников",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-contract-elements",
                title: { en: "Contract Elements", ru: "Элементы договора" },
                description: {
                  en: "Offer, acceptance, consideration; clear terms",
                  ru: "Оферта, акцепт, встречное предоставление; ясные условия",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draft a simple club agreement (roles, duties, timeline)",
                  ru: "Составьте простой договор клуба (роли, обязанности, сроки)",
                },
              },
              {
                id: "g8-legal-research",
                title: { en: "Legal Research Basics", ru: "Основы правового поиска" },
                description: {
                  en: "Primary vs secondary sources; citations",
                  ru: "Первичные и вторичные источники; ссылки",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a mini annotated bibliography on a school policy",
                  ru: "Создайте мини‑аннотированную библиографию по школьной политике",
                },
              },
              {
                id: "g8-negotiation-intro",
                title: { en: "Negotiation (Intro)", ru: "Переговоры (введение)" },
                description: {
                  en: "Interests vs positions; win‑win mindset",
                  ru: "Интересы vs позиции; установка win‑win",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Role‑play a simple negotiation scenario with outcome summary",
                  ru: "Разыграйте переговорный сценарий и подведите итоги",
                },
              },
            ],
          },
          {
            id: "grade9-corp-law",
            grade: 9,
            title: { en: "Grade 9 - Business Forms & IP", ru: "9 класс - Формы бизнеса и ИС" },
            description: {
              en: "Entities, responsibilities, and basics of intellectual property",
              ru: "Организационно‑правовые формы, ответственность и основы ИС",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-entity-types",
                title: { en: "Business Entity Types", ru: "Типы бизнес‑организаций" },
                description: {
                  en: "Sole proprietorship, partnership, LLC, corporation",
                  ru: "ИП, товарищество, ТОО/LLC, корпорация",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Compare entity types for a sample startup in a 1‑pager",
                  ru: "Сравните формы для стартапа на одной странице",
                },
              },
              {
                id: "g9-ip-basics",
                title: { en: "Intellectual Property Basics", ru: "Основы интеллектуальной собственности" },
                description: {
                  en: "Copyright, trademarks, patents (concepts only)",
                  ru: "Авторское право, товарные знаки, патенты (концепции)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Develop a brand name and logo; check for conflicts (search)",
                  ru: "Разработайте бренд и логотип; проверьте конфликты (поиск)",
                },
              },
              {
                id: "g9-contract-clauses",
                title: { en: "Common Contract Clauses", ru: "Типовые условия договоров" },
                description: {
                  en: "Confidentiality, warranties, liability, termination",
                  ru: "Конфиденциальность, гарантии, ответственность, расторжение",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Annotate 8 clauses in a sample service agreement",
                  ru: "Промаркируйте 8 условий в образце договора услуг",
                },
              },
            ],
          },
          {
            id: "grade10-corp-law",
            grade: 10,
            title: { en: "Grade 10 - Governance & Compliance", ru: "10 класс - Управление и комплаенс" },
            description: {
              en: "Boards, policies, reporting and stakeholder duties",
              ru: "Советы директоров, политики, отчетность и обязанности стейкхолдеров",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-board-governance",
                title: { en: "Board & Governance", ru: "Совет и управление" },
                description: {
                  en: "Duties of care/loyalty, committees, minutes",
                  ru: "Обязанности осмотрительности/лояльности, комитеты, протоколы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Simulate a board meeting; produce agenda and minutes",
                  ru: "Смоделируйте заседание совета; подготовьте повестку и протокол",
                },
              },
              {
                id: "g10-compliance",
                title: { en: "Compliance Programs", ru: "Комплаенс‑программы" },
                description: {
                  en: "Policies, training, reporting channels, audits (intro)",
                  ru: "Политики, обучение, каналы сообщений, аудиты (введение)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft a code of conduct and reporting flowchart",
                  ru: "Подготовьте кодекс поведения и схему сообщений о нарушениях",
                },
              },
              {
                id: "g10-contract-lifecycle",
                title: { en: "Contract Lifecycle", ru: "Жизненный цикл договора" },
                description: {
                  en: "Intake, drafting, review, approval, renewal",
                  ru: "Инициирование, составление, ревизия, утверждение, продление",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Map a lifecycle for a school vendor contract",
                  ru: "Составьте карту жизненного цикла договора школьного поставщика",
                },
              },
            ],
          },
          {
            id: "grade11-corp-law",
            grade: 11,
            title: { en: "Grade 11 - Transactions & Capstone", ru: "11 класс - Сделки и капстоун" },
            description: {
              en: "M&A basics, due diligence overview, and capstone",
              ru: "Основы M&A, обзор due diligence и итоговый проект",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-termsheet",
                title: { en: "Term Sheet Basics", ru: "Основы термшита" },
                description: {
                  en: "Key terms: valuation, options, reps & warranties",
                  ru: "Ключевые условия: оценка, опционы, заверения и гарантии",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Draft a simple term sheet for a mock investment",
                  ru: "Составьте простой термшит для учебной инвестиции",
                },
              },
              {
                id: "g11-due-diligence",
                title: { en: "Due Diligence (Intro)", ru: "Due Diligence (введение)" },
                description: {
                  en: "Checklists, data rooms, risk flags (concepts)",
                  ru: "Чек‑листы, data room, риски (концепции)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a DD checklist for a small acquisition",
                  ru: "Создайте DD‑чек‑лист для небольшой сделки",
                },
              },
              {
                id: "g11-capstone-corp",
                title: { en: "Capstone: Board Brief", ru: "Капстоун: брифинг для совета" },
                description: {
                  en: "Summarize a mock deal’s issues, risks, and next steps",
                  ru: "Суммируйте вопросы, риски и шаги по учебной сделке",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Deliver a 5‑slide board brief and Q&A script",
                  ru: "Подготовьте 5‑слайдовую записку для совета и скрипт Q&A",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Corporate Lawyer", ru: "Юрист по корпоративному праву" },
          { en: "Compliance Officer", ru: "Специалист по комплаенсу" },
          { en: "In‑house Counsel", ru: "Корпоративный юрист" },
        ],
        topUniversities: ["Harvard", "Yale", "Stanford", "Oxford", "Cambridge"],
        averageSalary: { entry: "$90,000", mid: "$160,000", senior: "$250,000+" },
        globalResources: {
          courses: [
            {
              name: "Corporate & Commercial Law I",
              description: {
                en: "Foundations of corporate and commercial law",
                ru: "Основы корпоративного и коммерческого права",
              },
              provider: "University of Illinois (Coursera)",
              url: "https://www.coursera.org/learn/corporate-commercial-law-part1",
              price: "Free to audit",
            },
            {
              name: "American Contract Law",
              description: {
                en: "Contract principles through cases",
                ru: "Принципы договорного права через кейсы",
              },
              provider: "Yale (Coursera)",
              url: "https://www.coursera.org/specializations/american-contract-law",
              price: "Free to audit",
            },
            {
              name: "Justice",
              description: {
                en: "Ethics and law in society",
                ru: "Этика и право в обществе",
              },
              provider: "Harvard (edX)",
              url: "https://www.edx.org/course/justice",
              price: "Free to audit",
            }
          ],
          competitions: [
            {
              name: "High School Mock Trial",
              description: {
                en: "Trial simulations for students",
                ru: "Симуляции судебных процессов для школьников",
              },
              url: "https://www.nationalmocktrial.org",
              level: "intermediate",
            },
            {
              name: "DECA Business Law Events",
              description: {
                en: "Business law focused competitive case events",
                ru: "Кейсовые соревнования по бизнес‑праву",
              },
              url: "https://www.deca.org",
              level: "beginner",
            }
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Law Students Kazakhstan",
              description: {
                en: "Community for aspiring lawyers and students",
                ru: "Сообщество будущих юристов и студентов",
              },
              url: "https://t.me/law_students_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "M. Narikbayev KAZGUU University",
              location: "Astana",
              programs: ["Law", "Business Law"],
              url: "https://kazguu.kz",
            },
            {
              name: "KIMEP University",
              location: "Almaty",
              programs: ["Law", "International Law"],
              url: "https://kimep.kz",
            }
          ],
        },
      },
      {
        id: "criminal-law",
        name: { en: "Criminal Law", ru: "Уголовное право" },
        description: {
          en: "Crimes, procedures, rights, investigations, and advocacy",
          ru: "Преступления, процедуры, права, расследования и адвокатура",
        },
        roadmap: [
          {
            id: "grade7-crim-law",
            grade: 7,
            title: { en: "Grade 7 - Community & Rules", ru: "7 класс - Сообщество и правила" },
            description: {
              en: "Why rules matter, fairness, and consequences",
              ru: "Почему важны правила, справедливость и последствия",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-rules-fairness",
                title: { en: "Fair Rules", ru: "Справедливые правила" },
                description: {
                  en: "Proportionate consequences and consistency",
                  ru: "Соразмерные последствия и последовательность",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Revise a school rule for fairness; justify changes",
                  ru: "Перепишите школьное правило справедливо; обоснуйте изменения",
                },
              },
              {
                id: "g7-conflict-resolution",
                title: { en: "Conflict Resolution", ru: "Разрешение конфликтов" },
                description: {
                  en: "Listening and de‑escalation basics",
                  ru: "Активное слушание и деэскалация",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Role‑play 2 conflicts and write reflections",
                  ru: "Разыграйте 2 конфликта и напишите рефлексию",
                },
              },
              {
                id: "g7-rights-intro",
                title: { en: "Rights (Intro)", ru: "Права (введение)" },
                description: {
                  en: "Basic concepts of rights in society",
                  ru: "Базовые концепции прав в обществе",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Create a rights and responsibilities poster",
                  ru: "Создайте постер прав и обязанностей",
                },
              },
            ],
          },
          {
            id: "grade8-crim-law",
            grade: 8,
            title: { en: "Grade 8 - Process & Evidence", ru: "8 класс - Процесс и доказательства" },
            description: {
              en: "Criminal process overview and evidence basics",
              ru: "Обзор уголовного процесса и основы доказательств",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-process",
                title: { en: "Criminal Process", ru: "Уголовный процесс" },
                description: {
                  en: "From investigation to trial (overview)",
                  ru: "От расследования до суда (обзор)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Map a process flow for a mock case",
                  ru: "Составьте карту процесса для учебного дела",
                },
              },
              {
                id: "g8-evidence-basics",
                title: { en: "Evidence Basics", ru: "Основы доказательств" },
                description: {
                  en: "Relevance, reliability, chain of custody",
                  ru: "Относимость, надежность, цепь хранения",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Design a chain of custody form and example log",
                  ru: "Создайте форму цепи хранения и пример журнала",
                },
              },
              {
                id: "g8-rights-police",
                title: { en: "Rights & Police", ru: "Права и полиция" },
                description: {
                  en: "Safe interactions and rights awareness",
                  ru: "Безопасное взаимодействие и знание прав",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Draft a student guide for safe, respectful interactions",
                  ru: "Подготовьте гид по безопасному уважительному взаимодействию",
                },
              },
            ],
          },
          {
            id: "grade9-crim-law",
            grade: 9,
            title: { en: "Grade 9 - Crimes & Advocacy", ru: "9 класс - Составы преступлений и адвокация" },
            description: {
              en: "Elements of crimes, defenses, and advocacy basics",
              ru: "Состав преступлений, защиты и основы адвокации",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-crime-elements",
                title: { en: "Elements of Crimes", ru: "Состав преступления" },
                description: {
                  en: "Actus reus, mens rea; examples",
                  ru: "Actus reus, mens rea; примеры",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Analyze 3 vignettes and identify elements present",
                  ru: "Проанализируйте 3 сюжета и определите элементы состава",
                },
              },
              {
                id: "g9-defenses",
                title: { en: "Defenses (Overview)", ru: "Защиты (обзор)" },
                description: {
                  en: "Self‑defense, necessity, insanity (concepts)",
                  ru: "Необходимая оборона, крайняя необходимость, невменяемость (концепции)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Debate a case with assigned defense theories",
                  ru: "Проведите дебаты по делу с назначенными линиями защиты",
                },
              },
              {
                id: "g9-advocacy",
                title: { en: "Advocacy & Arguments", ru: "Адвокация и аргументы" },
                description: {
                  en: "Claim, evidence, reasoning; speaking skills",
                  ru: "Тезис, доказательства, обоснование; ораторские навыки",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Deliver a 3‑minute argument with structured outline",
                  ru: "Представьте 3‑минутный аргумент по структуре",
                },
              },
            ],
          },
          {
            id: "grade10-crim-law",
            grade: 10,
            title: { en: "Grade 10 - Procedure & Forensics", ru: "10 класс - Процедуры и криминалистика" },
            description: {
              en: "Procedural rules overview and basic forensic concepts",
              ru: "Обзор процессуальных правил и базовые идеи криминалистики",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-procedure",
                title: { en: "Procedure (Overview)", ru: "Процедура (обзор)" },
                description: {
                  en: "Bail, arraignment, discovery, motions (intro)",
                  ru: "Залог, предъявление обвинения, раскрытие, ходатайства (введение)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a pre‑trial timeline for a mock case",
                  ru: "Составьте график досудебных стадий для учебного дела",
                },
              },
              {
                id: "g10-forensics",
                title: { en: "Forensics Basics", ru: "Основы криминалистики" },
                description: {
                  en: "Fingerprints, footprints, and trace evidence (safe demo)",
                  ru: "Отпечатки, следы и следовая информация (учебные демонстрации)",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Collect mock prints and match to samples; report",
                  ru: "Соберите учебные отпечатки и сопоставьте; подготовьте отчет",
                },
              },
              {
                id: "g10-witness",
                title: { en: "Witness Skills", ru: "Навыки свидетеля" },
                description: {
                  en: "Observation, memory pitfalls, and statements",
                  ru: "Наблюдение, ошибки памяти и показания",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Write a witness statement from a short scenario",
                  ru: "Напишите показания свидетеля по короткому сценарию",
                },
              },
            ],
          },
          {
            id: "grade11-crim-law",
            grade: 11,
            title: { en: "Grade 11 - Mock Trial & Capstone", ru: "11 класс - Учебный процесс и капстоун" },
            description: {
              en: "Trial roles, case strategy, and full mock trial",
              ru: "Роли в суде, стратегия по делу и полный учебный процесс",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-trial-roles",
                title: { en: "Trial Roles & Objections", ru: "Роли в суде и возражения" },
                description: {
                  en: "Judge, counsel, witnesses; basic objections",
                  ru: "Судья, стороны, свидетели; базовые возражения",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a roles matrix and objection cheat sheet",
                  ru: "Создайте матрицу ролей и шпаргалку по возражениям",
                },
              },
              {
                id: "g11-case-prep",
                title: { en: "Case Preparation", ru: "Подготовка дела" },
                description: {
                  en: "Theme, theory of case, witness prep",
                  ru: "Тема, теория дела, подготовка свидетелей",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Assemble exhibits and direct/cross outlines",
                  ru: "Соберите вещественные доказательства и планы прямого/перекрёстного допроса",
                },
              },
              {
                id: "g11-capstone-trial",
                title: { en: "Capstone: Mock Trial", ru: "Капстоун: учебный процесс" },
                description: {
                  en: "Conduct a full mock trial and debrief",
                  ru: "Проведите полный учебный процесс и дебрифинг",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Run trial; submit transcript, rulings, and reflections",
                  ru: "Проведите процесс; сдайте стенограмму, определения и рефлексию",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "Criminal Defense Lawyer", ru: "Адвокат по уголовным делам" },
          { en: "Prosecutor", ru: "Прокурор" },
          { en: "Forensic Analyst (pathway)", ru: "Криминалист (путь)" },
        ],
        topUniversities: ["Harvard", "Yale", "Stanford", "Oxford", "Cambridge"],
        averageSalary: { entry: "$70,000", mid: "$120,000", senior: "$200,000+" },
        globalResources: {
          courses: [
            {
              name: "Introduction to Criminal Law",
              description: {
                en: "Core concepts of criminal liability",
                ru: "Ключевые концепции уголовной ответственности",
              },
              provider: "Coursera/edX (audit)",
              url: "https://www.coursera.org/search?query=criminal%20law",
              price: "Free to audit",
            },
            {
              name: "Forensic Science (Intro)",
              description: {
                en: "Basics of forensic evidence",
                ru: "Основы криминалистических доказательств",
              },
              provider: "edX (audit)",
              url: "https://www.edx.org/learn/forensic-science",
              price: "Free to audit",
            },
            {
              name: "Justice",
              description: {
                en: "Ethics and law in society",
                ru: "Этика и право в обществе",
              },
              provider: "Harvard (edX)",
              url: "https://www.edx.org/course/justice",
              price: "Free to audit",
            }
          ],
          competitions: [
            {
              name: "National Mock Trial",
              description: {
                en: "High school mock trial competition",
                ru: "Школьное соревнование по учебным процессам",
              },
              url: "https://www.nationalmocktrial.org",
              level: "intermediate",
            }
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "Criminal Law KZ",
              description: {
                en: "Community focused on criminal justice topics",
                ru: "Сообщество по темам уголовного правосудия",
              },
              url: "https://t.me/crimlaw_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "M. Narikbayev KAZGUU University",
              location: "Astana",
              programs: ["Criminal Law", "Law"],
              url: "https://kazguu.kz",
            }
          ],
        },
      },
      {
        id: "international-law",
        name: { en: "International Law", ru: "Международное право" },
        description: {
          en: "Public and private international law, treaties, trade, and human rights",
          ru: "Международное публичное и частное право, договоры, торговля и права человека",
        },
        roadmap: [
          {
            id: "grade7-int-law",
            grade: 7,
            title: { en: "Grade 7 - Global Citizenship", ru: "7 класс - Глобальное гражданство" },
            description: {
              en: "Countries, organizations, and cooperation basics",
              ru: "Страны, организации и основы сотрудничества",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g7-un-basics",
                title: { en: "What the UN Does", ru: "Чем занимается ООН" },
                description: {
                  en: "Intro to UN, UNICEF, WHO roles",
                  ru: "Введение в роли ООН, ЮНИСЕФ, ВОЗ",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Make a one‑page explainer on a UN agency",
                  ru: "Подготовьте одностраничный обзор агентства ООН",
                },
              },
              {
                id: "g7-cultural-competence",
                title: { en: "Cultural Competence", ru: "Культурная компетентность" },
                description: {
                  en: "Respectful communication across cultures",
                  ru: "Уважительная коммуникация между культурами",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Create a cultural etiquette guide for 2 countries",
                  ru: "Создайте гид по этикету для 2 стран",
                },
              },
              {
                id: "g7-disputes-intro",
                title: { en: "Disputes & Mediation", ru: "Споры и медиация" },
                description: {
                  en: "Basic mediation steps and neutrality",
                  ru: "Шаги медиации и нейтральность",
                },
                timeline: { en: "1 week", ru: "1 неделя" },
                project: {
                  en: "Run a classroom mediation exercise and reflect",
                  ru: "Проведите учебную медиацию и напишите рефлексию",
                },
              },
            ],
          },
          {
            id: "grade8-int-law",
            grade: 8,
            title: { en: "Grade 8 - Treaties & Rights", ru: "8 класс - Договоры и права" },
            description: {
              en: "Treaty concepts and human rights frameworks",
              ru: "Основы договоров и системы прав человека",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g8-treaty",
                title: { en: "What Is a Treaty?", ru: "Что такое договор?" },
                description: {
                  en: "Parties, consent, reservations (overview)",
                  ru: "Стороны, согласие, оговорки (обзор)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Summarize a landmark treaty in a 1‑pager",
                  ru: "Суммируйте ключевой договор на одной странице",
                },
              },
              {
                id: "g8-human-rights",
                title: { en: "Human Rights Basics", ru: "Основы прав человека" },
                description: {
                  en: "UDHR and regional systems (overview)",
                  ru: "ВДПЧ и региональные системы (обзор)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Create a poster on 10 key UDHR articles",
                  ru: "Создайте постер о 10 ключевых статьях ВДПЧ",
                },
              },
              {
                id: "g8-model-un-intro",
                title: { en: "Model UN (Intro)", ru: "Модель ООН (введение)" },
                description: {
                  en: "Rules of procedure and position papers",
                  ru: "Правила процедуры и позиционные документы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Write a position paper on a global issue",
                  ru: "Напишите позиционный документ по мировой проблеме",
                },
              },
            ],
          },
          {
            id: "grade9-int-law",
            grade: 9,
            title: { en: "Grade 9 - Humanitarian & Sea Law", ru: "9 класс - Гуманитарное право и морское право" },
            description: {
              en: "IHL basics and law of the sea overview",
              ru: "Основы МГП и обзор морского права",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g9-ihl",
                title: { en: "International Humanitarian Law", ru: "Международное гуманитарное право" },
                description: {
                  en: "Civilians, combatants, protected symbols",
                  ru: "Гражданские, комбатанты, охраняемые символы",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create an IHL scenario map and rules checklist",
                  ru: "Создайте карту сценария МГП и чек‑лист правил",
                },
              },
              {
                id: "g9-law-of-sea",
                title: { en: "Law of the Sea (Intro)", ru: "Морское право (введение)" },
                description: {
                  en: "Territorial seas, EEZ, navigation",
                  ru: "Территориальные воды, ИЭЗ, судоходство",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draw maritime zones for a coastline; annotate",
                  ru: "Нанесите морские зоны на побережье; сделайте пометки",
                },
              },
              {
                id: "g9-icj-cases",
                title: { en: "ICJ Case Briefs", ru: "Обзоры дел МС ООН" },
                description: {
                  en: "Summarize facts, issues, holdings (intro)",
                  ru: "Факты, вопросы, решения (введение)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Write 2 brief case summaries using a template",
                  ru: "Подготовьте 2 кратких обзора дел по шаблону",
                },
              },
            ],
          },
          {
            id: "grade10-int-law",
            grade: 10,
            title: { en: "Grade 10 - Trade & Arbitration", ru: "10 класс - Торговля и арбитраж" },
            description: {
              en: "Trade rules overview and dispute settlement concepts",
              ru: "Обзор правил торговли и концепции разрешения споров",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g10-wto-basics",
                title: { en: "WTO & Trade Basics", ru: "ВТО и основы торговли" },
                description: {
                  en: "Tariffs, MFN, national treatment (overview)",
                  ru: "Тарифы, РНБ, национальный режим (обзор)",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Create a trade dispute infographic (timeline, rules)",
                  ru: "Создайте инфографику торгового спора (сроки, правила)",
                },
              },
              {
                id: "g10-arbitration-intro",
                title: { en: "Arbitration (Intro)", ru: "Арбитраж (введение)" },
                description: {
                  en: "Arbitration clauses and seats (concepts)",
                  ru: "Арбитражные оговорки и места арбитража (концепции)",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Draft an arbitration clause for a sample contract",
                  ru: "Напишите арбитражную оговорку для образца договора",
                },
              },
              {
                id: "g10-treaty-research",
                title: { en: "Treaty Research", ru: "Поиск договоров" },
                description: {
                  en: "Find and cite treaties with official sources",
                  ru: "Поиск и цитирование договоров из официальных источников",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Build a mini treaty bibliography (5 sources)",
                  ru: "Соберите мини‑библиографию договоров (5 источников)",
                },
              },
            ],
          },
          {
            id: "grade11-int-law",
            grade: 11,
            title: { en: "Grade 11 - Moot & Capstone", ru: "11 класс - Мут‑корт и капстоун" },
            description: {
              en: "Moot court style briefs and oral arguments",
              ru: "Письменные меморандумы и устные аргументы в стиле мут‑корта",
            },
            duration: "Full academic year",
            tasks: [
              {
                id: "g11-brief-writing",
                title: { en: "Brief Writing", ru: "Написание меморандума" },
                description: {
                  en: "Issue framing, authority, and argument structure",
                  ru: "Формулировка вопросов, источники и структура аргументов",
                },
                timeline: { en: "3 weeks", ru: "3 недели" },
                project: {
                  en: "Write a 3‑page brief on a model dispute",
                  ru: "Напишите 3‑страничный меморандум по модельному спору",
                },
              },
              {
                id: "g11-oral-advocacy",
                title: { en: "Oral Advocacy", ru: "Устная адвокация" },
                description: {
                  en: "Time control, persuasion, and Q&A handling",
                  ru: "Контроль времени, убеждение и ответы на вопросы",
                },
                timeline: { en: "2 weeks", ru: "2 недели" },
                project: {
                  en: "Deliver 5‑minute oral argument with feedback",
                  ru: "Представьте 5‑минутную устную речь с обратной связью",
                },
              },
              {
                id: "g11-capstone-intlaw",
                title: { en: "Capstone: Model ICJ/MUN", ru: "Капстоун: Модель МС ООН/МООН" },
                description: {
                  en: "Run a mini hearing or MUN session",
                  ru: "Проведите мини‑слушание или сессию МООН",
                },
                timeline: { en: "4 weeks", ru: "4 недели" },
                project: {
                  en: "Organize session, roles, and resolution document",
                  ru: "Организуйте сессию, роли и проект резолюции",
                },
              },
            ],
          },
        ],
        careerPaths: [
          { en: "International Lawyer", ru: "Юрист по международному праву" },
          { en: "Trade Policy Analyst", ru: "Аналитик торговой политики" },
          { en: "Human Rights Advocate", ru: "Правозащитник" },
        ],
        topUniversities: ["Harvard", "Yale", "Stanford", "Oxford", "Cambridge"],
        averageSalary: { entry: "$80,000", mid: "$140,000", senior: "$220,000+" },
        globalResources: {
          courses: [
            {
              name: "International Law",
              description: {
                en: "Public international law foundations",
                ru: "Основы международного публичного права",
              },
              provider: "Leiden (Coursera)",
              url: "https://www.coursera.org/learn/international-law",
              price: "Free to audit",
            },
            {
              name: "Human Rights Law",
              description: {
                en: "Global human rights frameworks",
                ru: "Глобальные системы прав человека",
              },
              provider: "edX (audit)",
              url: "https://www.edx.org/learn/human-rights",
              price: "Free to audit",
            },
            {
              name: "Model United Nations Prep",
              description: {
                en: "Position papers and procedures",
                ru: "Позиционные документы и процедуры",
              },
              provider: "Open resources",
              url: "https://bestdelegate.com/resources/",
              price: "Free",
            }
          ],
          competitions: [
            {
              name: "Model United Nations",
              description: {
                en: "Global MUN conferences",
                ru: "Глобальные конференции МООН",
              },
              url: "https://www.nmun.org",
              level: "intermediate",
            }
          ],
        },
        kazakhstanResources: {
          communities: [
            {
              name: "International Law KZ",
              description: {
                en: "Community for international law students",
                ru: "Сообщество студентов международного права",
              },
              url: "https://t.me/intlaw_kz",
              type: "Telegram",
            },
          ],
          universities: [
            {
              name: "Al‑Farabi Kazakh National University (Law)",
              location: "Almaty",
              programs: ["International Law", "Public Law"],
              url: "https://www.kaznu.kz",
            },
            {
              name: "KIMEP University",
              location: "Almaty",
              programs: ["International Law"],
              url: "https://kimep.kz",
            }
          ],
        },
      },
    ],
  },
  {
    slug: "arts",
    name: { en: "Arts", ru: "Искусство" },
    description: {
      en: "Express creativity through various artistic mediums and forms",
      ru: "Выражение творчества через различные художественные средства и формы",
    },
    overview: {
      en: "Create beautiful and meaningful art that inspires, challenges, and communicates ideas",
      ru: "Создавайте красивое и значимое искусство, которое вдохновляет, бросает вызов и передает идеи",
    },
    icon: "🎨",
    color: "from-pink-500 to-purple-600",
    category: "Arts & Design",
    demandLevel: "Low",
    averageSalary: "$35,000 - $80,000+",
    topUniversities: ["RISD", "Parsons", "Art Center", "SCAD", "KazNAA"],
    skills: [
      { en: "Creativity", ru: "Творчество" },
      { en: "Visual Design", ru: "Визуальный дизайн" },
      { en: "Art History", ru: "История искусства" },
      { en: "Technical Skills", ru: "Технические навыки" },
    ],
    stats: {
      avgSalary: "$45K",
      jobGrowth: "+4%",
      popularity: "Medium",
    },
    subspecializations: [
      {
        id: "visual-arts",
          name: { en: "Visual Arts & Design", ru: "Визуальные искусства и дизайн" },
          description: {
            en: "Drawing, painting, digital art, and visual communication",
            ru: "Рисунок, живопись, цифровое искусство и визуальная коммуникация",
          },
          roadmap: [
            {
              id: "grade7-visual",
              grade: 7,
              title: { en: "Grade 7 - Foundations", ru: "7 класс - Основы" },
              description: {
                en: "Observation, sketching, color, composition basics",
                ru: "Наблюдение, скетчинг, цвет и композиция",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g7-sketching",
                  title: { en: "Sketching & Observation", ru: "Скетчинг и наблюдение" },
                  description: {
                    en: "Line, shape, proportion and shading",
                    ru: "Линия, форма, пропорции и штриховка",
                  },
                  timeline: { en: "4 weeks", ru: "4 недели" },
                  project: {
                    en: "Produce a 10‑page sketchbook with still life studies",
                    ru: "Создайте 10‑страничный скетчбук с натюрмортами",
                  },
                },
                {
                  id: "g7-color-theory",
                  title: { en: "Color Theory (Intro)", ru: "Теория цвета (введение)" },
                  description: {
                    en: "Hue, value, saturation; color wheel",
                    ru: "Тон, светлота, насыщенность; цветовой круг",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Paint a color wheel and 3 color schemes",
                    ru: "Нарисуйте цветовой круг и 3 цветовые схемы",
                  },
                },
                {
                  id: "g7-composition",
                  title: { en: "Composition Basics", ru: "Основы композиции" },
                  description: {
                    en: "Rule of thirds, balance, focal point",
                    ru: "Правило третей, баланс, центр внимания",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Create a poster applying two composition rules",
                    ru: "Создайте постер, применяя два правила композиции",
                  },
                },
              ],
            },
            {
              id: "grade8-visual",
              grade: 8,
              title: { en: "Grade 8 - Media & History", ru: "8 класс - Медиа и история" },
              description: {
                en: "Watercolor, acrylic, and art movements",
                ru: "Акварель, акрил и художественные направления",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g8-watercolor",
                  title: { en: "Watercolor Techniques", ru: "Техники акварели" },
                  description: {
                    en: "Wet‑on‑wet, washes, layering",
                    ru: "Мокрое по мокрому, лессировки, слои",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Complete a landscape using 3 watercolor techniques",
                    ru: "Создайте пейзаж, применив 3 акварельные техники",
                  },
                },
                {
                  id: "g8-acrylic",
                  title: { en: "Acrylic Painting", ru: "Акриловая живопись" },
                  description: {
                    en: "Brushwork, texture, underpainting",
                    ru: "Мазки, фактура, подмалевок",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Paint a still life with layered textures",
                    ru: "Напишите натюрморт с многослойной фактурой",
                  },
                },
                {
                  id: "g8-art-history",
                  title: { en: "Art History (Intro)", ru: "История искусств (введение)" },
                  description: {
                    en: "Renaissance to modern; analyze styles",
                    ru: "От Ренессанса до современности; анализ стилей",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Create a timeline and a style comparison sheet",
                    ru: "Создайте хронологию и сравнительную таблицу стилей",
                  },
                },
              ],
            },
            {
              id: "grade9-visual",
              grade: 9,
              title: { en: "Grade 9 - Digital & Typography", ru: "9 класс - Цифровое и типографика" },
              description: {
                en: "Digital illustration, photo editing, and type",
                ru: "Цифровая иллюстрация, фоторедактирование и шрифт",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g9-digital-illustration",
                  title: { en: "Digital Illustration", ru: "Цифровая иллюстрация" },
                  description: {
                    en: "Vector shapes, layers, brushes",
                    ru: "Векторные формы, слои, кисти",
                  },
                  timeline: { en: "4 weeks", ru: "4 недели" },
                  project: {
                    en: "Design a 3‑poster set for a school event",
                    ru: "Создайте набор из 3 постеров для школьного события",
                  },
                },
                {
                  id: "g9-photo-editing",
                  title: { en: "Photo Editing Basics", ru: "Основы фоторедактирования" },
                  description: {
                    en: "Exposure, color correction, retouch",
                    ru: "Экспозиция, цветокоррекция, ретушь",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Prepare a before/after portfolio of 5 photos",
                    ru: "Подготовьте портфолио до/после из 5 фото",
                  },
                },
                {
                  id: "g9-typography",
                  title: { en: "Typography", ru: "Типографика" },
                  description: {
                    en: "Font pairing, hierarchy, readability",
                    ru: "Сочетание шрифтов, иерархия, читабельность",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Design a magazine cover with type hierarchy",
                    ru: "Создайте обложку журнала с иерархией шрифтов",
                  },
                },
              ],
            },
            {
              id: "grade10-visual",
              grade: 10,
              title: { en: "Grade 10 - Branding & UX", ru: "10 класс - Брендинг и UX" },
              description: {
                en: "Brand systems, layout, and basic UX thinking",
                ru: "Бренд‑системы, макеты и основы UX‑мышления",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g10-brand-system",
                  title: { en: "Brand System", ru: "Бренд‑система" },
                  description: {
                    en: "Logo, colors, components, guidelines",
                    ru: "Логотип, цвета, компоненты, гайдлайны",
                  },
                  timeline: { en: "4 weeks", ru: "4 недели" },
                  project: {
                    en: "Make a 6‑page brand book for a fictional brand",
                    ru: "Сделайте 6‑страничный брендбук для вымышленного бренда",
                  },
                },
                {
                  id: "g10-layout-grid",
                  title: { en: "Layout & Grid", ru: "Макет и сетка" },
                  description: {
                    en: "Grids, white space, rhythm in layouts",
                    ru: "Сетки, белое пространство, ритм в макетах",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Design a 4‑page brochure with grid system",
                    ru: "Сверстайте 4‑страничный буклет с сеткой",
                  },
                },
                {
                  id: "g10-ux-wireframes",
                  title: { en: "UX Wireframes", ru: "UX‑вайрфреймы" },
                  description: {
                    en: "User flows, wireframes, click‑through",
                    ru: "Пользовательские потоки, вайрфреймы, кликабельный прототип",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Prototype a 3‑screen app flow in Figma",
                    ru: "Сделайте прототип 3 экранов приложения в Figma",
                  },
                },
              ],
            },
            {
              id: "grade11-visual",
              grade: 11,
              title: { en: "Grade 11 - Portfolio & Exhibition", ru: "11 класс - Портфолио и выставка" },
              description: {
                en: "Curation, critique, and public showcase",
                ru: "Кураторство, критика и публичная выставка",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g11-portfolio",
                  title: { en: "Portfolio Curation", ru: "Кураторство портфолио" },
                  description: {
                    en: "Select, sequence, and present works",
                    ru: "Выбор, последовательность и представление работ",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Build a 12‑piece portfolio with artist statements",
                    ru: "Соберите портфолио из 12 работ с комментариями автора",
                  },
                },
                {
                  id: "g11-critique",
                  title: { en: "Critique & Iteration", ru: "Критика и итерации" },
                  description: {
                    en: "Feedback loops and refinement",
                    ru: "Циклы обратной связи и доработка",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Iterate 3 pieces based on critique notes",
                    ru: "Доработайте 3 работы по комментариям критики",
                  },
                },
                {
                  id: "g11-exhibition",
                  title: { en: "Capstone: Exhibition", ru: "Капстоун: выставка" },
                  description: {
                    en: "Plan and mount a show",
                    ru: "Планирование и монтаж выставки",
                  },
                  timeline: { en: "4 weeks", ru: "4 недели" },
                  project: {
                    en: "Host a pop‑up show with catalog and labels",
                    ru: "Проведите поп‑ап выставку с каталогом и этикетками",
                  },
                },
              ],
            },
          ],
          careerPaths: [
            { en: "Graphic Designer", ru: "Графический дизайнер" },
            { en: "Illustrator", ru: "Иллюстратор" },
            { en: "Art Director (pathway)", ru: "Арт‑директор (путь)" },
          ],
          topUniversities: ["RISD", "Parsons", "Royal College of Art", "CalArts", "Pratt"],
          averageSalary: { entry: "$40,000", mid: "$65,000", senior: "$100,000+" },
          globalResources: {
            courses: [
              {
                name: "Graphic Design Specialization (Audit)",
                description: {
                  en: "Typography, image, composition",
                  ru: "Типографика, изображение, композиция",
                },
                provider: "CalArts (Coursera)",
                url: "https://www.coursera.org/specializations/graphic-design",
                price: "Free to audit",
              },
              {
                name: "Digital Illustration",
                description: {
                  en: "Vector and raster techniques",
                  ru: "Векторные и растровые техники",
                },
                provider: "OpenLearn/Coursera (audit)",
                url: "https://www.coursera.org/search?query=digital%20illustration",
                price: "Free to audit",
              },
              {
                name: "Figma for Beginners",
                description: {
                  en: "Interface design fundamentals",
                  ru: "Основы дизайна интерфейсов",
                },
                provider: "Free tutorials",
                url: "https://help.figma.com/",
                price: "Free",
              }
            ],
            competitions: [
              {
                name: "Scholastic Art & Writing Awards",
                description: {
                  en: "National art competition for students",
                  ru: "Национальный конкурс искусства для школьников",
                },
                url: "https://www.artandwriting.org",
                level: "beginner",
              },
              {
                name: "Adobe Creative Jams",
                description: {
                  en: "Design hackathons and challenges",
                  ru: "Дизайн‑хакатоны и челленджи",
                },
                url: "https://www.adobecreativejams.com",
                level: "intermediate",
              }
            ],
          },
          kazakhstanResources: {
            communities: [
              {
                name: "Artists Kazakhstan",
                description: {
                  en: "Community for visual artists and designers",
                  ru: "Сообщество художников и дизайнеров",
                },
                url: "https://t.me/art_kz",
                type: "Telegram",
              },
            ],
            universities: [
              {
                name: "Kazakh National Academy of Arts (T. Zhurgenov)",
                location: "Almaty",
                programs: ["Fine Arts", "Design", "Graphic Design"],
                url: "https://kaznai.kz",
              }
            ],
          },
        },
        {
          id: "music-production",
          name: { en: "Music Production & Performance", ru: "Музыкальное продюсирование и исполнительство" },
          description: {
            en: "Theory, composition, recording, mixing, and performance",
            ru: "Теория, композиция, запись, сведение и исполнительство",
          },
          roadmap: [
            {
              id: "grade7-music",
              grade: 7,
              title: { en: "Grade 7 - Rhythm & Notation", ru: "7 класс - Ритм и нотация" },
              description: {
                en: "Beat, note values, scales and basic instrument skills",
                ru: "Пульс, длительности, гаммы и базовые навыки на инструменте",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g7-rhythm",
                  title: { en: "Rhythm Training", ru: "Ритмическая подготовка" },
                  description: {
                    en: "Clapping patterns, counting, tempo",
                    ru: "Хлопковые рисунки, счет, темп",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Perform a 60‑second rhythm étude accurately",
                    ru: "Исполните 60‑секундное ритмическое этюд точно",
                  },
                },
                {
                  id: "g7-notation",
                  title: { en: "Notation & Scales", ru: "Нотация и гаммы" },
                  description: {
                    en: "Staff, key signatures, major/minor scales",
                    ru: "Нотный стан, тональности, мажор/минор",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Write and play a 16‑bar melody in C or G",
                    ru: "Напишите и исполните 16‑тактовую мелодию в C или G",
                  },
                },
                {
                  id: "g7-instrument-voice",
                  title: { en: "Instrument/Voice Basics", ru: "Основы инструмента/вокала" },
                  description: {
                    en: "Posture, breathing, warm‑ups",
                    ru: "Поза, дыхание, разминка",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Record a 30‑second practice clip (audio/video)",
                    ru: "Запишите 30‑секундный фрагмент практики (аудио/видео)",
                  },
                },
              ],
            },
            {
              id: "grade8-music",
              grade: 8,
              title: { en: "Grade 8 - DAW & Songwriting", ru: "8 класс - DAW и авторство" },
              description: {
                en: "Intro to digital audio workstation and songwriting",
                ru: "Введение в цифровую аудио‑станцию и авторство песен",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g8-daw",
                  title: { en: "DAW Basics", ru: "Основы DAW" },
                  description: {
                    en: "Tracks, MIDI, audio, and effects",
                    ru: "Дорожки, MIDI, аудио и эффекты",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Produce a 60‑second track with 3 instruments and EQ",
                    ru: "Сделайте 60‑секундный трек с 3 инструментами и EQ",
                  },
                },
                {
                  id: "g8-songwriting",
                  title: { en: "Songwriting", ru: "Авторство песен" },
                  description: {
                    en: "Form (verse/chorus), hooks, lyrics",
                    ru: "Форма (куплет/припев), хуки, тексты",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Compose a 90‑second song draft with lyrics",
                    ru: "Напишите 90‑секундный черновик песни с текстом",
                  },
                },
                {
                  id: "g8-ensemble",
                  title: { en: "Ensemble Basics", ru: "Основы ансамбля" },
                  description: {
                    en: "Timing, listening, dynamics in a group",
                    ru: "Тайминг, слушание, динамика в группе",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Rehearse and record a group performance",
                    ru: "Отрепетируйте и запишите групповое выступление",
                  },
                },
              ],
            },
            {
              id: "grade9-music",
              grade: 9,
              title: { en: "Grade 9 - Recording & Mixing", ru: "9 класс - Запись и сведение" },
              description: {
                en: "Microphones, gain staging, EQ and compression basics",
                ru: "Микрофоны, уровни, основы EQ и компрессии",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g9-recording",
                  title: { en: "Recording Techniques", ru: "Техники записи" },
                  description: {
                    en: "Mic placement, room acoustics, takes",
                    ru: "Расположение микрофона, акустика помещения, дубли",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Record a vocal/instrument with two mic setups",
                    ru: "Запишите вокал/инструмент с двумя схемами микрофона",
                  },
                },
                {
                  id: "g9-mixing",
                  title: { en: "Mixing Basics", ru: "Основы сведения" },
                  description: {
                    en: "Balance, EQ, compression, reverb",
                    ru: "Баланс, EQ, компрессия, реверберация",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Mix a 6‑track session and export WAV/MP3",
                    ru: "Сведите сессию из 6 дорожек и экспортируйте WAV/MP3",
                  },
                },
                {
                  id: "g9-theory",
                  title: { en: "Music Theory Applied", ru: "Применение музыкотеории" },
                  description: {
                    en: "Intervals, chords, progressions",
                    ru: "Интервалы, аккорды, прогрессии",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Write a 16‑bar chord progression and melody",
                    ru: "Напишите 16‑тактовую аккордовую последовательность и мелодию",
                  },
                },
              ],
            },
            {
              id: "grade10-music",
              grade: 10,
              title: { en: "Grade 10 - Production & Live", ru: "10 класс - Продакшн и лайв" },
              description: {
                en: "Arranging, advanced production, and live sound",
                ru: "Аранжировка, продвинутый продакшн и лайв‑звук",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g10-arranging",
                  title: { en: "Arranging", ru: "Аранжировка" },
                  description: {
                    en: "Instrumentation, voicing, transitions",
                    ru: "Инструментовка, голосоведение, переходы",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Arrange a 2‑minute piece for 3–5 parts",
                    ru: "Аранжируйте 2‑минутное произведение для 3–5 партий",
                  },
                },
                {
                  id: "g10-advanced-production",
                  title: { en: "Advanced Production", ru: "Продвинутый продакшн" },
                  description: {
                    en: "Automation, sidechain, parallel processing",
                    ru: "Автоматизация, сайдчейн, параллельная обработка",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Produce a 2‑minute track using 3 advanced techniques",
                    ru: "Создайте 2‑минутный трек с 3 продвинутыми приемами",
                  },
                },
                {
                  id: "g10-live-sound",
                  title: { en: "Live Sound Basics", ru: "Основы лайв‑звука" },
                  description: {
                    en: "PA setup, gain staging, monitors",
                    ru: "Настройка PA, уровни, мониторы",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Plan a school concert tech rider and stage plot",
                    ru: "Подготовьте райдер и схему сцены для школьного концерта",
                  },
                },
              ],
            },
            {
              id: "grade11-music",
              grade: 11,
              title: { en: "Grade 11 - EP & Performance", ru: "11 класс - EP и выступление" },
              description: {
                en: "Produce an EP and stage a live set",
                ru: "Создание мини‑альбома и подготовка лайв‑сета",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g11-ep-planning",
                  title: { en: "EP Planning", ru: "Планирование EP" },
                  description: {
                    en: "Concept, tracklist, schedule",
                    ru: "Концепция, треклист, график",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Create an EP plan (3–4 tracks) with deadlines",
                    ru: "Создайте план EP (3–4 трека) со сроками",
                  },
                },
                {
                  id: "g11-production-execution",
                  title: { en: "Production Execution", ru: "Реализация продакшна" },
                  description: {
                    en: "Record, edit, mix; cover art",
                    ru: "Запись, редактирование, сведение; обложка",
                  },
                  timeline: { en: "5 weeks", ru: "5 недель" },
                  project: {
                    en: "Finish 3 mastered tracks and cover artwork",
                    ru: "Завершите 3 мастер‑трека и обложку",
                  },
                },
                {
                  id: "g11-capstone-live",
                  title: { en: "Capstone: Live Set", ru: "Капстоун: лайв‑сет" },
                  description: {
                    en: "Perform a 10–15 minute set",
                    ru: "Выступите с 10–15‑минутным сетом",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Deliver a live performance and video recording",
                    ru: "Проведите живое выступление и видеозапись",
                  },
                },
              ],
            },
          ],
          careerPaths: [
            { en: "Music Producer", ru: "Музыкальный продюсер" },
            { en: "Sound Engineer", ru: "Звукорежиссер" },
            { en: "Performer", ru: "Исполнитель" },
          ],
          topUniversities: ["Berklee", "Juilliard", "USC Thornton", "Royal Academy of Music", "NYU"],
          averageSalary: { entry: "$45,000", mid: "$70,000", senior: "$120,000+" },
          globalResources: {
            courses: [
              {
                name: "Music Production",
                description: {
                  en: "DAW workflows, recording, mixing",
                  ru: "Работа в DAW, запись, сведение",
                },
                provider: "Berklee (Coursera)",
                url: "https://www.coursera.org/specializations/music-production",
                price: "Free to audit",
              },
              {
                name: "Introduction to Music Theory",
                description: {
                  en: "Foundational music theory",
                  ru: "Базовая теория музыки",
                },
                provider: "edX/Khan Academy",
                url: "https://www.khanacademy.org/humanities/music",
                price: "Free",
              },
              {
                name: "Live Sound Engineering (Intro)",
                description: {
                  en: "Basics of live sound",
                  ru: "Основы лайв‑звука",
                },
                provider: "Coursera/edX (audit)",
                url: "https://www.coursera.org/search?query=live%20sound",
                price: "Free to audit",
              }
            ],
            competitions: [
              {
                name: "Student Songwriting Contests",
                description: {
                  en: "Songwriting competitions for students",
                  ru: "Конкурсы авторов песен для студентов",
                },
                url: "https://www.songwritingcompetition.com",
                level: "intermediate",
              },
              {
                name: "Battle of the Bands (school/region)",
                description: {
                  en: "Live performance competitions",
                  ru: "Соревнования живых выступлений",
                },
                url: "https://www.battleofthebands.com",
                level: "beginner",
              }
            ],
          },
          kazakhstanResources: {
            communities: [
              {
                name: "Musicians Kazakhstan",
                description: {
                  en: "Community for musicians and producers",
                  ru: "Сообщество музыкантов и продюсеров",
                },
                url: "https://t.me/music_kz",
                type: "Telegram",
              },
            ],
            universities: [
              {
                name: "Kazakh National Conservatory (Kurmanğazy)",
                location: "Almaty",
                programs: ["Performance", "Sound Engineering"],
                url: "https://conservatoire.kz",
              },
              {
                name: "Kazakh National University of Arts",
                location: "Astana",
                programs: ["Music", "Sound Engineering"],
                url: "https://kaznui.kz",
              }
            ],
          },
        },
        {
          id: "film-media",
          name: { en: "Film & Media Production", ru: "Кино и медиапродакшн" },
          description: {
            en: "Storytelling, cinematography, editing, and production",
            ru: "Сторителлинг, операторское дело, монтаж и продакшн",
          },
          roadmap: [
            {
              id: "grade7-film",
              grade: 7,
              title: { en: "Grade 7 - Story & Shots", ru: "7 класс - История и кадры" },
              description: {
                en: "Visual storytelling and basic shot vocabulary",
                ru: "Визуальный сторителлинг и базовая терминология кадров",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g7-storytelling",
                  title: { en: "Storytelling Basics", ru: "Основы сторителлинга" },
                  description: {
                    en: "Beginning, conflict, resolution",
                    ru: "Начало, конфликт, развязка",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Write a 1‑page script for a 60‑sec short",
                    ru: "Напишите 1‑страничный сценарий для 60‑сек ролика",
                  },
                },
                {
                  id: "g7-shot-types",
                  title: { en: "Shot Types", ru: "Типы кадров" },
                  description: {
                    en: "WS/MS/CU, angles, movement",
                    ru: "ШД/СР/КП, ракурсы, движения",
                  },
                  timeline: { en: "1 week", ru: "1 неделя" },
                  project: {
                    en: "Storyboard 10 shots covering core types",
                    ru: "Сделайте раскадровку из 10 кадров основных типов",
                  },
                },
                {
                  id: "g7-mobile-filming",
                  title: { en: "Mobile Filming", ru: "Съемка на телефон" },
                  description: {
                    en: "Lighting basics and steady shots",
                    ru: "Основы света и стабилизации",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Film a 60‑sec scene on mobile and edit cuts",
                    ru: "Снимите 60‑сек сцену на телефон и смонтируйте склейки",
                  },
                },
              ],
            },
            {
              id: "grade8-film",
              grade: 8,
              title: { en: "Grade 8 - Script & Edit", ru: "8 класс - Сценарий и монтаж" },
              description: {
                en: "Script formatting, coverage, and editing workflows",
                ru: "Формат сценария, кавередж и процессы монтажа",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g8-script-format",
                  title: { en: "Script Formatting", ru: "Формат сценария" },
                  description: {
                    en: "Sluglines, action, dialogue",
                    ru: "Слаглайны, действия, диалоги",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Write a 3‑page short script (proper format)",
                    ru: "Напишите 3‑страничный сценарий (правильный формат)",
                  },
                },
                {
                  id: "g8-editing",
                  title: { en: "Editing Basics", ru: "Основы монтажа" },
                  description: {
                    en: "Continuity, pacing, L‑cuts/J‑cuts",
                    ru: "Непрерывность, темп, L‑/J‑склейки",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Edit a 2‑minute scene with continuity and rhythm",
                    ru: "Смонтируйте 2‑минутную сцену с непрерывностью и ритмом",
                  },
                },
                {
                  id: "g8-sound",
                  title: { en: "Sound Basics", ru: "Основы звука" },
                  description: {
                    en: "Dialogue, ambience, foley",
                    ru: "Диалоги, амбиент, шумы",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Add foley and ambience to a silent clip",
                    ru: "Добавьте шумы и амбиент к немому клипу",
                  },
                },
              ],
            },
            {
              id: "grade9-film",
              grade: 9,
              title: { en: "Grade 9 - Cinematography & Doc", ru: "9 класс - Операторское и док" },
              description: {
                en: "Camera, lenses, exposure; documentary storytelling",
                ru: "Камера, объективы, экспозиция; документальный сторителлинг",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g9-cinematography",
                  title: { en: "Cinematography", ru: "Операторское дело" },
                  description: {
                    en: "Exposure triangle and composition",
                    ru: "Экспозиционный треугольник и композиция",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Shoot a 90‑sec mood piece using manual exposure",
                    ru: "Снимите 90‑сек ролик‑настроение с ручной экспозицией",
                  },
                },
                {
                  id: "g9-documentary",
                  title: { en: "Documentary Basics", ru: "Основы документалистики" },
                  description: {
                    en: "Interview, B‑roll, ethics",
                    ru: "Интервью, перебивки, этика",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Create a 3‑minute micro‑doc about a local story",
                    ru: "Снимите 3‑минутный микродок о местной истории",
                  },
                },
                {
                  id: "g9-vfx-intro",
                  title: { en: "VFX (Intro)", ru: "VFX (введение)" },
                  description: {
                    en: "Keying, masks, motion graphics basics",
                    ru: "Кеинг, маски, основы моушн‑графики",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Add a simple motion graphic title to a scene",
                    ru: "Добавьте простой титр‑моушн к сцене",
                  },
                },
              ],
            },
            {
              id: "grade10-film",
              grade: 10,
              title: { en: "Grade 10 - Direct & Produce", ru: "10 класс - Режиссура и продюсирование" },
              description: {
                en: "Directing actors, scheduling, budgeting basics",
                ru: "Работа с актерами, планирование, основы бюджета",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g10-directing",
                  title: { en: "Directing Actors", ru: "Режиссура актеров" },
                  description: {
                    en: "Blocking, beats, directing notes",
                    ru: "Мизансцены, бииты, режиссерские заметки",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Direct a 2‑minute dialogue scene with shot list",
                    ru: "Снимите 2‑минутную диалоговую сцену по шот‑листу",
                  },
                },
                {
                  id: "g10-production",
                  title: { en: "Production Management", ru: "Продакшн‑менеджмент" },
                  description: {
                    en: "Schedules, call sheets, permits (intro)",
                    ru: "Графики, колл‑листы, разрешения (введение)",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Create a schedule and call sheet for a short",
                    ru: "Создайте график и колл‑лист для короткометражки",
                  },
                },
                {
                  id: "g10-color-grade",
                  title: { en: "Color & Grade", ru: "Цвет и грейдинг" },
                  description: {
                    en: "Color correction and stylistic grading",
                    ru: "Цветокоррекция и стилистический грейдинг",
                  },
                  timeline: { en: "2 weeks", ru: "2 недели" },
                  project: {
                    en: "Grade a scene in two styles and export LUT",
                    ru: "Сгрейдите сцену в двух стилях и экспортируйте LUT",
                  },
                },
              ],
            },
            {
              id: "grade11-film",
              grade: 11,
              title: { en: "Grade 11 - Festival Short", ru: "11 класс - Фестивальная короткометражка" },
              description: {
                en: "Complete a short film to festival standards",
                ru: "Завершите короткометражный фильм по фестивальным стандартам",
              },
              duration: "Full academic year",
              tasks: [
                {
                  id: "g11-preproduction",
                  title: { en: "Pre‑production", ru: "Препродакшн" },
                  description: {
                    en: "Script lock, casting, locations",
                    ru: "Финал сценария, кастинг, локации",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Deliver script, shot list, schedule, and budget",
                    ru: "Подготовьте сценарий, шот‑лист, график и бюджет",
                  },
                },
                {
                  id: "g11-production",
                  title: { en: "Production", ru: "Продакшн" },
                  description: {
                    en: "Shoot and record clean sound",
                    ru: "Съемка и запись чистого звука",
                  },
                  timeline: { en: "3 weeks", ru: "3 недели" },
                  project: {
                    en: "Film principal photography for a 5–8 min short",
                    ru: "Отснимите основной материал для 5–8‑мин короткометражки",
                  },
                },
                {
                  id: "g11-capstone-festival",
                  title: { en: "Capstone: Festival Cut", ru: "Капстоун: фестивальная версия" },
                  description: {
                    en: "Edit, sound, color, deliverables and submission",
                    ru: "Монтаж, звук, цвет, финальные материалы и отправка",
                  },
                  timeline: { en: "5 weeks", ru: "5 недель" },
                  project: {
                    en: "Submit a final DCP/MP4 and a festival submission pack",
                    ru: "Подайте финальный DCP/MP4 и пакет подачи на фестиваль",
                  },
                },
              ],
            },
          ],
          careerPaths: [
            { en: "Director", ru: "Режиссер" },
            { en: "Editor", ru: "Монтажер" },
            { en: "Cinematographer", ru: "Оператор‑постановщик" },
          ],
          topUniversities: ["USC", "NYU Tisch", "UCLA", "AFI", "London Film School"],
          averageSalary: { entry: "$50,000", mid: "$85,000", senior: "$150,000+" },
          globalResources: {
            courses: [
              {
                name: "Filmmaking (Foundations)",
                description: {
                  en: "From story to edit",
                  ru: "От истории до монтажа",
                },
                provider: "Coursera/edX (audit)",
                url: "https://www.coursera.org/search?query=filmmaking",
                price: "Free to audit",
              },
              {
                name: "Video Editing Basics",
                description: {
                  en: "Editing workflows and techniques",
                  ru: "Процессы и техники монтажа",
                },
                provider: "Adobe/DaVinci tutorials",
                url: "https://www.blackmagicdesign.com/products/davinciresolve/training",
                price: "Free",
              },
              {
                name: "Cinematography (Intro)",
                description: {
                  en: "Exposure, lenses and lighting",
                  ru: "Экспозиция, оптика и свет",
                },
                provider: "Open resources",
                url: "https://noamkroll.com/category/cinematography/",
                price: "Free",
              }
            ],
            competitions: [
              {
                name: "All American High School Film Festival",
                description: {
                  en: "Festival for student filmmakers",
                  ru: "Фестиваль для школьных кинематографистов",
                },
                url: "https://hsfilmfest.com",
                level: "intermediate",
              },
              {
                name: "48 Hour Film Project (Youth tracks)",
                description: {
                  en: "Fast‑paced filmmaking competition",
                  ru: "Скоростной конкурс по созданию фильмов",
                },
                url: "https://www.48hourfilm.com",
                level: "advanced",
              }
            ],
          },
          kazakhstanResources: {
            communities: [
              {
                name: "Filmmakers Kazakhstan",
                description: {
                  en: "Community for filmmakers and editors",
                  ru: "Сообщество кинематографистов и монтажеров",
                },
                url: "https://t.me/film_kz",
                type: "Telegram",
              },
            ],
            universities: [
              {
                name: "Kazakh National Academy of Arts (T. Zhurgenov)",
                location: "Almaty",
                programs: ["Film Directing", "Cinematography", "Editing"],
                url: "https://kaznai.kz",
              }
            ],
          },
        },
    ],
  },
];

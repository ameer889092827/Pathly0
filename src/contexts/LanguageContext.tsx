"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SupportedLanguage = "en" | "ru";

type TranslationDict = Record<string, { en: string; ru: string }>;

const translations: TranslationDict = {
  // Navbar
  "nav.home": { en: "Home", ru: "Главная" },
  "nav.majors": { en: "Majors", ru: "Специальности" },
  "nav.assessment": { en: "Assessment", ru: "Тест" },
  "nav.progress": { en: "Progress", ru: "Прогресс" },
  "nav.welcome": { en: "Welcome", ru: "Добро пожаловать" },

  // Hero
  "hero.title": {
    en: "Discover Your Perfect College Major",
    ru: "Найдите свою идеальную специальность",
  },
  "hero.subtitle": {
    en: "Take a personalized assessment and get step-by-step guidance toward your dream career.",
    ru: "Пройдите персонализированный тест и получите пошаговое руководство к вашей карьере.",
  },
  "hero.startAssessment": { en: "Start Assessment", ru: "Начать тест" },
  "hero.browseMajors": { en: "Browse Majors", ru: "Смотреть специальности" },
  "hero.whyChooseUs": { en: "Why choose Pathly?", ru: "Почему Pathly?" },
  "hero.whyChooseUsSubtitle": {
    en: "The easiest way to explore majors and plan your journey.",
    ru: "Самый простой способ изучить специальности и спланировать путь.",
  },
  "hero.readyToStart": { en: "Ready to start?", ru: "Готовы начать?" },
  "hero.readyToStartSubtitle": {
    en: "Join thousands of students exploring their future.",
    ru: "Присоединяйтесь к тысячам студентов, изучающим своё будущее.",
  },
  "hero.getStarted": { en: "Get Started", ru: "Начать" },

  // Majors page
  "majors.title": {
    en: "Explore College Majors",
    ru: "Изучайте специальности",
  },
  "majors.subtitle": {
    en: "Discover detailed information about college majors, career outcomes, and academic roadmaps.",
    ru: "Подробная информация о специальностях, карьере и учебных дорожных картах.",
  },
  "majors.searchPlaceholder": {
    en: "Search majors...",
    ru: "Поиск специальностей...",
  },
  "majors.viewRoadmap": { en: "View Roadmap", ru: "Смотреть дорожную карту" },
  "majors.noResults": {
    en: "No majors found matching your search.",
    ru: "Ничего не найдено по вашему запросу.",
  },

  // Roadmap page
  "roadmap.back": { en: "Back to Majors", ru: "Назад к специальностям" },
  "roadmap.requirements": { en: "Recommended Steps", ru: "Рекомендуемые шаги" },
  "roadmap.communities": { en: "Communities", ru: "Сообщества" },
  "roadmap.courses": { en: "Recommended Courses", ru: "Рекомендуемые курсы" },
  "roadmap.resources": { en: "Resources", ru: "Ресурсы" },

  // Progress page
  "progress.title": { en: "Your Progress", ru: "Ваш прогресс" },
  "progress.subtitle": {
    en: "Track your career exploration journey",
    ru: "Отслеживайте ваш путь изучения карьеры",
  },
  "progress.achievements": { en: "Achievements", ru: "Достижения" },
  "progress.recentActivity": {
    en: "Recent Activity",
    ru: "Недавняя активность",
  },
  "progress.overview": { en: "Overview", ru: "Обзор" },
  "progress.goals": { en: "Goals", ru: "Цели" },
  "progress.analytics": { en: "Analytics", ru: "Аналитика" },
  "progress.activity": { en: "Activity", ru: "Активность" },
  "progress.dailyChallenge": { en: "Daily Challenge", ru: "Ежедневный вызов" },
  "progress.completeChallenge": {
    en: "Complete Challenge",
    ru: "Завершить вызов",
  },
  "progress.challengeCompleted": {
    en: "Challenge completed! +{points} points earned",
    ru: "Вызов завершен! +{points} очков заработано",
  },
  "progress.explorationProgress": {
    en: "Exploration Progress",
    ru: "Прогресс исследования",
  },
  "progress.complete": { en: "Complete", ru: "Завершено" },
  "progress.majorsExplored": {
    en: "Majors Explored",
    ru: "Изучено специальностей",
  },
  "progress.topExplorer": {
    en: "🌟 Top Explorer!",
    ru: "🌟 Главный исследователь!",
  },
  "progress.gettingThere": { en: "🚀 Getting there!", ru: "🚀 Уже почти!" },
  "progress.justStarting": {
    en: "✨ Just starting!",
    ru: "✨ Только начинаем!",
  },
  "progress.roadmapsViewed": {
    en: "Roadmaps Viewed",
    ru: "Просмотрено дорожных карт",
  },
  "progress.roadmapMaster": {
    en: "🎯 Roadmap Master!",
    ru: "🎯 Мастер дорожных карт!",
  },
  "progress.goodPlanning": {
    en: "📋 Good planning!",
    ru: "📋 Хорошее планирование!",
  },
  "progress.startExploring": {
    en: "🔍 Start exploring!",
    ru: "🔍 Начните исследовать!",
  },
  "progress.assessmentsTaken": {
    en: "Assessments Taken",
    ru: "Пройдено тестов",
  },
  "progress.selfAware": { en: "🧠 Self-aware!", ru: "🧠 Самосознательный!" },
  "progress.takeFirstStep": {
    en: "💭 Take your first step!",
    ru: "💭 Сделайте первый шаг!",
  },
  "progress.learningStreak": { en: "Learning Streak", ru: "Серия обучения" },
  "progress.currentStreak": { en: "Current Streak", ru: "Текущая серия" },
  "progress.keepItUp": { en: "🔥 Keep it up!", ru: "🔥 Так держать!" },
  "progress.startYourStreak": {
    en: "Start your streak today!",
    ru: "Начните свою серию сегодня!",
  },
  "progress.longestStreak": { en: "Longest Streak", ru: "Самая длинная серия" },
  "progress.personalBest": { en: "Personal best", ru: "Личный рекорд" },
  "progress.weeklyGoal": {
    en: "Weekly Goal: {current}/{total} days",
    ru: "Недельная цель: {current}/{total} дней",
  },
  "progress.sevenDayStreakBonus": {
    en: "7-Day Streak Bonus",
    ru: "Бонус за 7 дней подряд",
  },
  "progress.fourteenDayStreakBonus": {
    en: "14-Day Streak Bonus",
    ru: "Бонус за 14 дней подряд",
  },
  "progress.thirtyDayStreakBonus": {
    en: "30-Day Streak Bonus",
    ru: "Бонус за 30 дней подряд",
  },
  "progress.quickStats": { en: "Quick Stats", ru: "Краткая статистика" },
  "progress.totalPoints": { en: "Total Points", ru: "Всего очков" },
  "progress.totalDaysActive": {
    en: "Total Days Active",
    ru: "Всего активных дней",
  },
  "progress.progressVsAverage": {
    en: "Your Progress vs. Average",
    ru: "Ваш прогресс против среднего",
  },
  "progress.exploration": { en: "Exploration", ru: "Исследование" },
  "progress.learning": { en: "Learning", ru: "Обучение" },
  "progress.assessment": { en: "Assessment", ru: "Оценка" },
  "progress.continueJourney": {
    en: "Continue Your Journey",
    ru: "Продолжайте свой путь",
  },
  "progress.continueJourneyDesc": {
    en: "Keep exploring to unlock more achievements and get closer to finding your perfect major.",
    ru: "Продолжайте исследовать, чтобы разблокировать больше достижений и приблизиться к поиску идеальной специальности.",
  },
  "progress.exploreMoreMajors": {
    en: "Explore More Majors",
    ru: "Изучить больше специальностей",
  },
  "progress.takeAssessment": { en: "Take Assessment", ru: "Пройти тест" },
  "progress.shareProgress": {
    en: "Share Your Progress",
    ru: "Поделиться прогрессом",
  },
  "progress.myPathlyProgress": {
    en: "My Pathly Progress",
    ru: "Мой прогресс в Pathly",
  },
  "progress.progressCopied": {
    en: "Progress copied to clipboard!",
    ru: "Прогресс скопирован в буфер обмена!",
  },
  "progress.shareProgressButton": {
    en: "Share Progress",
    ru: "Поделиться прогрессом",
  },
  "progress.inspireOthers": {
    en: "Inspire others with your learning journey!",
    ru: "Вдохновите других своим учебным путем!",
  },
  "progress.personalGoals": { en: "Personal Goals", ru: "Личные цели" },
  "progress.addGoal": { en: "Add Goal", ru: "Добавить цель" },
  "progress.progress": { en: "Progress", ru: "Прогресс" },
  "progress.unit.majors": { en: "majors", ru: "специальностей" },
  "progress.unit.assessments": { en: "assessments", ru: "тестов" },
  "progress.unit.roadmaps": { en: "roadmaps", ru: "дорожных карт" },
  "progress.unit.tasks": { en: "tasks", ru: "задач" },
  "progress.updateProgress": { en: "Update Progress", ru: "Обновить прогресс" },
  "progress.earned": { en: "Earned {date}", ru: "Заработано {date}" },
  "progress.learningAnalytics": {
    en: "Learning Analytics",
    ru: "Аналитика обучения",
  },
  "progress.learningPatterns": {
    en: "Learning Patterns",
    ru: "Шаблоны обучения",
  },
  "progress.mostActiveDay": {
    en: "Most Active Day",
    ru: "Самый активный день",
  },
  "progress.peakHour": { en: "Peak Hour", ru: "Пиковый час" },
  "progress.favoriteCategory": {
    en: "Favorite Category",
    ru: "Любимая категория",
  },
  "progress.progressTrends": {
    en: "Progress Trends",
    ru: "Тенденции прогресса",
  },
  "progress.improvementRate": { en: "Improvement Rate", ru: "Темп улучшения" },
  "progress.averageSession": { en: "Average Session", ru: "Средняя сессия" },
  "progress.min": { en: "min", ru: "мин" },
  "progress.totalTime": { en: "Total Time", ru: "Общее время" },
  "progress.hours": { en: "hours", ru: "часов" },
  "progress.weeklyLearningReport": {
    en: "Weekly Learning Report",
    ru: "Еженедельный отчет об обучении",
  },
  "progress.export": { en: "Export", ru: "Экспорт" },
  "progress.weeklyReportsComingSoon": {
    en: "Weekly reports coming soon!",
    ru: "Еженедельные отчеты скоро появятся!",
  },
  "progress.weeklyReportsDesc": {
    en: "Track your learning patterns and get personalized insights.",
    ru: "Отслеживайте свои шаблоны обучения и получайте персонализированные идеи.",
  },
  "progress.todaysLearningTip": {
    en: "Today's Learning Tip",
    ru: "Сегодняшний совет по обучению",
  },
  "progress.amazingStreak": {
    en: "🔥 Amazing! You're on a {streak}-day streak! Keep the momentum going by exploring something new today.",
    ru: "🔥 Отлично! Вы на серии из {streak} дней! Продолжайте в том же духе, изучая что-то новое сегодня.",
  },
  "progress.startLearningJourney": {
    en: "💡 Start your learning journey today! Even 15 minutes of exploration can lead to amazing discoveries.",
    ru: "💡 Начните свой путь обучения сегодня! Даже 15 минут исследования могут привести к удивительным открытиям.",
  },
  "progress.yourCurrentStreak": {
    en: "Your current streak",
    ru: "Ваша текущая серия",
  },
  "progress.days": { en: "days", ru: "дней" },
  "progress.startMyStreak": { en: "Start My Streak", ru: "Начать мою серию" },
  "progress.noRecentActivity": {
    en: "No recent activity. Start exploring!",
    ru: "Нет недавней активности. Начните исследовать!",
  },
};

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: keyof typeof translations) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as SupportedLanguage | null)
        : null;
    if (saved === "en" || saved === "ru") {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: SupportedLanguage) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  };

  const t = useMemo(() => {
    return (key: keyof typeof translations) =>
      translations[key]?.[language] ?? String(key);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage: handleSetLanguage, t }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

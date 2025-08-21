"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Target,
  Award,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  Users,
  Calendar,
  Flame,
  BarChart3,
  RefreshCw,
  Lightbulb,
  Share2,
  Plus
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Achievement = {
  id: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  icon: any;
  earned: boolean;
  date?: string;
  progress?: number;
  requirement: number;
  current: number;
  points: number;
  rarity: "common" | "rare" | "epic" | "legendary";
};
type UserAchievementsState = Record<string, { date: string }>;

type Activity = {
  id: string;
  action: { en: string; ru: string };
  time: string;
  type: "roadmap" | "assessment" | "major" | "milestone" | "goal" | "streak" | "challenge";
  points?: number;
};

type Goal = {
  id: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  target: number;
  current: number;
  unit: string;
  deadline?: string;
  completed: boolean;
  category: "learning" | "exploration" | "skill" | "achievement";
  isCustom?: boolean;
};

type StreakData = {
  currentStreak: number;
  longestStreak: number;
  lastActivity: string;
  totalDays: number;
  weeklyGoal: number;
  weeklyProgress: number;
  lastWeek?: number;
};

type WelcomeChallenge = {
  id: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  completed: boolean;
  points: number;
}
type WelcomeChallengeState = {
    challenge: WelcomeChallenge;
    completedToday: boolean;
    totalCompleted: number;
} | null;

const welcomeChallenges: Omit<WelcomeChallenge, 'completed'>[] = [
    { id: 'day1-explore-major', title: { en: "Day 1: Explore a Major", ru: "День 1: Изучите специальность" }, description: { en: "Start your journey by exploring one major in detail.", ru: "Начните свой путь с детального изучения одной специальности." }, points: 25 },
    { id: 'day2-view-roadmap', title: { en: "Day 2: View a Roadmap", ru: "День 2: Просмотрите дорожную карту" }, description: { en: "Check out the steps for a major you're interested in.", ru: "Ознакомьтесь с шагами для интересующей вас специальности." }, points: 20 },
    { id: 'day3-set-goal', title: { en: "Day 3: Set a Personal Goal", ru: "День 3: Установите личную цель" }, description: { en: "Add a custom goal to your progress tracker.", ru: "Добавьте персональную цель в свой трекер прогресса." }, points: 15 },
    { id: 'day4-explore-three', title: { en: "Day 4: Explore Three Majors", ru: "День 4: Изучите три специальности" }, description: { en: "Broaden your horizons by looking at three different majors.", ru: "Расширьте свой кругозор, рассмотрев три разные специальности." }, points: 30 },
    { id: 'day5-take-assessment', title: { en: "Day 5: Take an Assessment", ru: "День 5: Пройдите оценку" }, description: { en: "Learn more about yourself with our career assessment.", ru: "Узнайте больше о себе с помощью нашей карьерной оценки." }, points: 40 },
    { id: 'day6-share-progress', title: { en: "Day 6: Share Your Progress", ru: "День 6: Поделитесь своим прогрессом" }, description: { en: "Inspire others by sharing your journey so far.", ru: "Вдохновите других, поделившись своим путешествием." }, points: 20 },
    { id: 'day7-achieve-streak', title: { en: "Day 7: Achieve a 3-Day Streak", ru: "День 7: Достигните 3-дневной серии" }, description: { en: "Login for three consecutive days to build a habit.", ru: "Заходите в систему три дня подряд, чтобы выработать привычку." }, points: 50 },
];

const allPossibleGoals: Omit<Goal, "id" | "completed" | "current">[] = [
    { title: { en: "Explore 5 Majors", ru: "Изучить 5 специальностей" }, description: { en: "Broaden your horizons by looking at 5 different majors.", ru: "Расширьте свой кругозор, рассмотрев 5 различных специальностей." }, target: 5, unit: "majors", category: "exploration" },
    { title: { en: "View 3 Roadmaps", ru: "Просмотреть 3 дорожные карты" }, description: { en: "Get a detailed plan for 3 different majors.", ru: "Получите подробный план для 3 различных специальностей." }, target: 3, unit: "roadmaps", category: "learning" },
    { title: { en: "Achieve a 3-Day Streak", ru: "Достичь 3-дневной серии" }, description: { en: "Log in for 3 consecutive days.", ru: "Заходите в систему 3 дня подряд." }, target: 3, unit: "days", category: "achievement" },
    { title: { en: "Reach Level 3", ru: "Достичь 3-го уровня" }, description: { en: "Gain enough experience to get to level 3.", ru: "Наберите достаточно опыта, чтобы достичь 3-го уровня." }, target: 3, unit: "level", category: "achievement" }
];


export default function ProgressPage() {
  const { t, language } = useLanguage();
  const [stats, setStats] = useState({
    majorsExplored: 0,
    roadmapsViewed: 0,
    assessmentsTaken: 0,
    totalProgress: 0,
    totalPoints: 0,
    level: 1,
    experience: 0,
    experienceToNext: 100,
  });
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastActivity: "",
    totalDays: 0,
    weeklyGoal: 5,
    weeklyProgress: 0,
  });
  const [selectedTab, setSelectedTab] = useState("overview");
  const [welcomeChallengeState, setWelcomeChallengeState] = useState<WelcomeChallengeState>(null);
  const [isCreateGoalModalOpen, setCreateGoalModalOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', target: 1, unit: '' });

  useEffect(() => {
    loadProgress();
    loadStreakData();
    loadWelcomeChallenge();
    addActivity("Viewed progress page", "milestone", 5);
  }, []);

  useEffect(() => {
    // Only run checks/updates after initial stats are loaded
    if (stats.totalPoints > 0) {
        loadGoals();
        updateGoalsFromStats();
        checkAndAwardAchievements();
    }
  }, [stats.totalPoints]); // Depend on a core stat

  useEffect(() => {
    if (goals.length > 0) {
      updateGoalsFromStats();
    }
  }, [stats.majorsExplored, stats.assessmentsTaken, stats.roadmapsViewed, streakData.currentStreak, stats.level]);

  const loadProgress = () => {
    const visited = JSON.parse(localStorage.getItem("visitedMajors") || "[]");
    const viewedRoadmaps = JSON.parse(localStorage.getItem("viewedRoadmaps") || "[]");
    const completedAssessments = JSON.parse(localStorage.getItem("completedAssessments") || "[]");
    const activities: Activity[] = JSON.parse(localStorage.getItem("userActivities") || "[]");
    const majorProgress: Record<string, number> = JSON.parse(localStorage.getItem("majorProgress") || "{}");
    const totalPoints = parseInt(localStorage.getItem("totalPoints") || "0");
    const savedAchievements: UserAchievementsState = JSON.parse(localStorage.getItem("userAchievementsState") || "{}");
    const savedGoals: Goal[] = JSON.parse(localStorage.getItem("userGoals") || "[]");

    const roadmapProgresses = Object.values(majorProgress);
    const avgRoadmapProgress = roadmapProgresses.length > 0
        ? roadmapProgresses.reduce((sum: number, progress: number) => sum + progress, 0) / roadmapProgresses.length
        : 0;

    const explorationScore = Math.min(100, (visited.length * 8) + (viewedRoadmaps.length * 12));
    const learningScore = Math.min(100, avgRoadmapProgress * 0.6);
    const assessmentScore = Math.min(100, completedAssessments.length * 20);
    const totalProgress = Math.round((explorationScore * 0.4) + (learningScore * 0.4) + (assessmentScore * 0.2));

    const level = Math.floor(totalPoints / 100) + 1;
    const experience = totalPoints % 100;
    const experienceToNext = 100;

    const newStats = {
        majorsExplored: visited.length,
        roadmapsViewed: viewedRoadmaps.length,
        assessmentsTaken: completedAssessments.length,
        totalProgress,
        totalPoints,
        level,
        experience,
        experienceToNext,
    };
    setStats(newStats);

    setRecentActivity(activities.slice(-15).reverse());

    // Use a static list of definitions for rendering
    const achievementsDefinitions: Omit<Achievement, 'earned' | 'date' | 'progress' | 'current'>[] = [
        { id: "first-major", title: { en: "Explorer", ru: "Исследователь" }, description: { en: "Explored your first college major", ru: "Изучили первую специальность" }, icon: BookOpen, requirement: 1, points: 50, rarity: "common" },
        { id: "major-enthusiast", title: { en: "Major Enthusiast", ru: "Энтузиаст специальностей" }, description: { en: "Explored 5 different college majors", ru: "Изучили 5 различных специальностей" }, icon: Target, requirement: 5, points: 150, rarity: "rare" },
        { id: "roadmap-master", title: { en: "Roadmap Master", ru: "Мастер дорожных карт" }, description: { en: "Viewed detailed roadmaps for 5 majors", ru: "Просмотрели детальные дорожные карты для 5 специальностей" }, icon: TrendingUp, requirement: 5, points: 200, rarity: "epic" },
        { id: "assessment-complete", title: { en: "Self-Aware", ru: "Самосознательный" }, description: { en: "Completed career assessment", ru: "Завершили карьерную оценку" }, icon: Award, requirement: 1, points: 100, rarity: "common" },
        { id: "streak-master", title: { en: "Streak Master", ru: "Мастер серий" }, description: { en: "Maintain a 7-day learning streak", ru: "Поддерживайте 7-дневную серию обучения" }, icon: Flame, requirement: 7, points: 300, rarity: "epic" },
        { id: "goal-achiever", title: { en: "Goal Achiever", ru: "Достигающий целей" }, description: { en: "Complete 3 personal goals", ru: "Завершите 3 личные цели" }, icon: Target, requirement: 3, points: 250, rarity: "rare" },
    ];

    const achievementsList = achievementsDefinitions.map(def => {
        const earnedInfo = savedAchievements[def.id];
        const current = getAchievementCurrentValue(def.id, newStats, savedGoals, streakData);
        return {
            ...def,
            earned: !!earnedInfo,
            date: earnedInfo?.date,
            current: current,
            progress: Math.min(100, (current / def.requirement) * 100),
        };
    });
    setAchievements(achievementsList);
  };

    const getAchievementCurrentValue = (id: string, currentStats: typeof stats, currentGoals: Goal[], currentStreak: StreakData) => {
        switch (id) {
            case 'first-major':
            case 'major-enthusiast':
                return currentStats.majorsExplored;
            case 'roadmap-master':
                return currentStats.roadmapsViewed;
            case 'assessment-complete':
                return currentStats.assessmentsTaken;
            case 'streak-master':
                return currentStreak.currentStreak;
            case 'goal-achiever':
                return currentGoals.filter(g => g.completed).length;
            default:
                return 0;
        }
    };

    const checkAndAwardAchievements = () => {
        const savedAchievements: UserAchievementsState = JSON.parse(localStorage.getItem("userAchievementsState") || "{}");
        const savedGoals: Goal[] = JSON.parse(localStorage.getItem("userGoals") || "[]");
        const achievementsDefinitions: Omit<Achievement, 'earned' | 'date' | 'progress' | 'current'>[] = [
             { id: "first-major", title: { en: "Explorer", ru: "Исследователь" }, description: { en: "Explored your first college major", ru: "Изучили первую специальность" }, icon: BookOpen, requirement: 1, points: 50, rarity: "common" },
             { id: "major-enthusiast", title: { en: "Major Enthusiast", ru: "Энтузиаст специальностей" }, description: { en: "Explored 5 different college majors", ru: "Изучили 5 различных специальностей" }, icon: Target, requirement: 5, points: 150, rarity: "rare" },
             { id: "roadmap-master", title: { en: "Roadmap Master", ru: "Мастер дорожных карт" }, description: { en: "Viewed detailed roadmaps for 5 majors", ru: "Просмотрели детальные дорожные карты для 5 специальностей" }, icon: TrendingUp, requirement: 5, points: 200, rarity: "epic" },
             { id: "assessment-complete", title: { en: "Self-Aware", ru: "Самосознательный" }, description: { en: "Completed career assessment", ru: "Завершили карьерную оценку" }, icon: Award, requirement: 1, points: 100, rarity: "common" },
             { id: "streak-master", title: { en: "Streak Master", ru: "Мастер серий" }, description: { en: "Maintain a 7-day learning streak", ru: "Поддерживайте 7-дневную серию обучения" }, icon: Flame, requirement: 7, points: 300, rarity: "epic" },
             { id: "goal-achiever", title: { en: "Goal Achiever", ru: "Достигающий целей" }, description: { en: "Complete 3 personal goals", ru: "Завершите 3 личные цели" }, icon: Target, requirement: 3, points: 250, rarity: "rare" },
        ];

        let changed = false;
        achievementsDefinitions.forEach(def => {
            const current = getAchievementCurrentValue(def.id, stats, savedGoals, streakData);
            if (current >= def.requirement && !savedAchievements[def.id]) {
                savedAchievements[def.id] = { date: new Date().toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' }) };
                addActivity(`Earned achievement: ${def.title.en}`, "milestone", def.points);
                changed = true;
            }
        });

        if (changed) {
            localStorage.setItem("userAchievementsState", JSON.stringify(savedAchievements));
        }
    };


  const loadGoals = () => {
    const savedGoals: Goal[] = JSON.parse(localStorage.getItem("userGoals") || "[]");
    if (savedGoals.length === 0) {
      const defaultGoals: Goal[] = [
        { id: "explore-3-majors", title: { en: "Explore 3 Majors", ru: "Изучить 3 специальности" }, description: { en: "Learn about different career paths", ru: "Узнать о различных карьерных путях" }, target: 3, current: stats.majorsExplored, unit: "majors", category: "exploration", completed: false, },
        { id: "complete-assessment", title: { en: "Take Career Assessment", ru: "Пройдите карьерный тест" }, description: { en: "Discover your strengths and interests", ru: "Откройте свои сильные стороны и интересы" }, target: 1, current: stats.assessmentsTaken, unit: "assessments", category: "learning", completed: false, },
        { id: "view-2-roadmaps", title: { en: "View 2 Roadmaps", ru: "Просмотреть 2 дорожные карты" }, description: { en: "Plan your learning journey", ru: "Спланируйте свой путь обучения" }, target: 2, current: stats.roadmapsViewed, unit: "roadmaps", category: "learning", completed: false, },
      ];
      setGoals(defaultGoals);
      localStorage.setItem("userGoals", JSON.stringify(defaultGoals));
    } else {
      setGoals(savedGoals);
    }
  };

  const loadWelcomeChallenge = () => {
    const totalCompleted = parseInt(localStorage.getItem('welcomeChallengesCompleted') || '0');
    const lastCompletionDate = localStorage.getItem('lastWelcomeChallengeCompletionDate') || '';
    const today = new Date().toDateString();

    if (totalCompleted >= welcomeChallenges.length) {
        setWelcomeChallengeState(null); // All challenges are done
        return;
    }

    const completedToday = lastCompletionDate === today;
    const currentChallengeDef = welcomeChallenges[totalCompleted];
    const challenge: WelcomeChallenge = { ...currentChallengeDef, completed: completedToday };

    setWelcomeChallengeState({ challenge, completedToday, totalCompleted });
  };

  const completeWelcomeChallenge = () => {
      if (welcomeChallengeState && !welcomeChallengeState.completedToday) {
          const newTotalCompleted = welcomeChallengeState.totalCompleted + 1;
          localStorage.setItem('welcomeChallengesCompleted', newTotalCompleted.toString());
          localStorage.setItem('lastWelcomeChallengeCompletionDate', new Date().toDateString());
          addActivity(`Completed challenge: ${welcomeChallengeState.challenge.title.en}`, "challenge", welcomeChallengeState.challenge.points);
          loadWelcomeChallenge();
      }
  };

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const loadStreakData = () => {
    const savedStreak: StreakData = JSON.parse(localStorage.getItem("userStreak") || "{}");
    const today = new Date().toDateString();
    const currentWeek = getWeekNumber(new Date());

    if (Object.keys(savedStreak).length === 0 || !savedStreak.lastActivity) {
      const newStreak: StreakData = { currentStreak: 1, longestStreak: 1, lastActivity: today, totalDays: 1, weeklyGoal: 5, weeklyProgress: 1, lastWeek: currentWeek };
      setStreakData(newStreak);
      localStorage.setItem("userStreak", JSON.stringify(newStreak));
    } else {
      if (savedStreak.lastActivity !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (savedStreak.lastActivity === yesterday.toDateString()) {
          savedStreak.currentStreak += 1;
        } else {
          savedStreak.currentStreak = 1;
        }

        savedStreak.longestStreak = Math.max(savedStreak.longestStreak, savedStreak.currentStreak);
        savedStreak.lastActivity = today;
        savedStreak.totalDays += 1;

        if (savedStreak.lastWeek !== currentWeek) {
          savedStreak.weeklyProgress = 1;
          savedStreak.lastWeek = currentWeek;
        } else {
          savedStreak.weeklyProgress = Math.min(savedStreak.weeklyProgress + 1, savedStreak.weeklyGoal);
        }

        localStorage.setItem("userStreak", JSON.stringify(savedStreak));
      }
      setStreakData(savedStreak);
    }
  };

  const addActivity = (action: string, type: Activity["type"], points: number = 0) => {
    const activities: Activity[] = JSON.parse(localStorage.getItem("userActivities") || "[]");
    const newActivity: Activity = { id: Date.now().toString(), action: { en: action, ru: action }, time: new Date().toLocaleString(language), type, points, };
    activities.push(newActivity);
    localStorage.setItem("userActivities", JSON.stringify(activities.slice(-50)));

    if (points > 0) {
      const currentPoints = parseInt(localStorage.getItem("totalPoints") || "0");
      localStorage.setItem("totalPoints", (currentPoints + points).toString());
    }

    loadStreakData();
    loadProgress();
  };

  const suggestNewGoal = () => {
      const existingGoalIds = goals.map(g => g.id);
      const nextGoalData = allPossibleGoals.find(p => !existingGoalIds.includes(p.title.en.toLowerCase().replace(/ /g, '-')));

      if (nextGoalData) {
          const newGoal: Goal = {
              ...nextGoalData,
              id: nextGoalData.title.en.toLowerCase().replace(/ /g, '-'),
              current: 0,
              completed: false,
          };
          const updatedGoals = [...goals, newGoal];
          setGoals(updatedGoals);
          localStorage.setItem("userGoals", JSON.stringify(updatedGoals));
      }
  };

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.title.trim() || !newGoal.unit.trim() || newGoal.target < 1) {
        alert("Please fill out all fields for your custom goal.");
        return;
    }

    const newCustomGoal: Goal = {
        id: `custom-${Date.now()}`,
        title: { en: newGoal.title, ru: newGoal.title },
        description: { en: `Achieve a target of ${newGoal.target} ${newGoal.unit}`, ru: `Достигните цели в ${newGoal.target} ${newGoal.unit}` },
        target: newGoal.target,
        current: 0,
        unit: newGoal.unit,
        completed: false,
        category: "skill",
        isCustom: true,
    };

    const updatedGoals = [...goals, newCustomGoal];
    setGoals(updatedGoals);
    localStorage.setItem("userGoals", JSON.stringify(updatedGoals));

    setNewGoal({ title: '', target: 1, unit: '' });
    setCreateGoalModalOpen(false);
    addActivity(`Created a new goal: ${newGoal.title}`, 'goal', 10);
  };

  const updateGoalsFromStats = () => {
    const updatedGoals = goals.map((goal: Goal) => {
      // Custom goals are not auto-updated from stats. They would need manual updates,
      // which is a larger feature. For now, we only auto-update predefined goals.
      if (goal.isCustom) return goal;

      let newCurrent = goal.current;
      switch (goal.id) {
        case "explore-3-majors":
        case "explore-5-majors":
          newCurrent = stats.majorsExplored;
          break;
        case "complete-assessment":
          newCurrent = stats.assessmentsTaken;
          break;
        case "view-2-roadmaps":
        case "view-3-roadmaps":
          newCurrent = stats.roadmapsViewed;
          break;
        case "achieve-a-3-day-streak":
            newCurrent = streakData.currentStreak;
            break;
        case "reach-level-3":
            newCurrent = stats.level;
            break;
      }

      const completed = newCurrent >= goal.target;
      if (completed && !goal.completed) {
        addActivity(`Completed goal: ${goal.title.en}`, "goal", 50);
      }
      return { ...goal, current: newCurrent, completed };
    });

    if (JSON.stringify(goals) !== JSON.stringify(updatedGoals)) {
        setGoals(updatedGoals);
        localStorage.setItem("userGoals", JSON.stringify(updatedGoals));
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-600 bg-gray-100";
      case "rare": return "text-blue-600 bg-blue-100";
      case "epic": return "text-purple-600 bg-purple-100";
      case "legendary": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-gray-200";
      case "rare": return "border-blue-200";
      case "epic": return "border-purple-200";
      case "legendary": return "border-yellow-200";
      default: return "border-gray-200";
    }
  };

  const availableGoals = allPossibleGoals.filter(p => !goals.some(g => g.id === p.title.en.toLowerCase().replace(/ /g, '-')));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("progress.title")}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("progress.subtitle")}</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-white p-1 rounded-xl shadow-sm">
                <TabsTrigger value="overview" className="rounded-lg">{t("progress.overview")}</TabsTrigger>
                <TabsTrigger value="goals" className="rounded-lg">{t("progress.goals")}</TabsTrigger>
                <TabsTrigger value="achievements" className="rounded-lg">{t("progress.achievements")}</TabsTrigger>
                <TabsTrigger value="activity" className="rounded-lg">{t("progress.activity")}</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Level {stats.level}</span>
                          <Badge variant="secondary" className="bg-white/20 text-white">{stats.experience}/{stats.experienceToNext} XP</Badge>
                        </CardTitle>
                        <CardDescription className="text-purple-100">Keep learning to level up and unlock new features!</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Progress value={(stats.experience / stats.experienceToNext) * 100} className="h-3 bg-white/20" />
                      </CardContent>
                    </Card>

                    {welcomeChallengeState && (
                        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                <span>🏆 {t("progress.welcomeChallenge")} ({welcomeChallengeState.totalCompleted + 1}/7)</span>
                                <Badge variant="secondary" className="bg-white/20 text-white">+{welcomeChallengeState.challenge.points} pts</Badge>
                                </CardTitle>
                                <CardDescription className="text-orange-100">{welcomeChallengeState.challenge.title[language]}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-orange-100 mb-4">{welcomeChallengeState.challenge.description[language]}</p>
                                {welcomeChallengeState.completedToday ? (
                                <div className="flex items-center text-green-200">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    {t("progress.challengeCompletedToday")}
                                </div>
                                ) : (
                                <Button variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={completeWelcomeChallenge}>
                                    {t("progress.completeChallenge")}
                                </Button>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center"><BarChart3 className="w-5 h-5 mr-2" />{t("progress.explorationProgress")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-center mb-8">
                          <div className="relative w-32 h-32">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                              <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                              <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 50}`} strokeDashoffset={`${2 * Math.PI * 50 * (1 - stats.totalProgress / 100)}`} className="transition-all duration-1000 ease-out"/>
                              <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient></defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">{stats.totalProgress}%</div>
                                <div className="text-sm text-gray-600">{t("progress.complete")}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-4 bg-purple-50 rounded-xl"><div className="text-2xl font-bold text-purple-600">{stats.majorsExplored}</div><div className="text-sm text-gray-600">{t("progress.majorsExplored")}</div><div className="text-xs text-purple-500 mt-1">{stats.majorsExplored >= 5 ? t("progress.topExplorer") : stats.majorsExplored >= 3 ? t("progress.gettingThere") : t("progress.justStarting")}</div></div>
                          <div className="p-4 bg-blue-50 rounded-xl"><div className="text-2xl font-bold text-blue-600">{stats.roadmapsViewed}</div><div className="text-sm text-gray-600">{t("progress.roadmapsViewed")}</div><div className="text-xs text-blue-500 mt-1">{stats.roadmapsViewed >= 5 ? t("progress.roadmapMaster") : stats.roadmapsViewed >= 2 ? t("progress.goodPlanning") : t("progress.startExploring")}</div></div>
                          <div className="p-4 bg-green-50 rounded-xl"><div className="text-2xl font-bold text-green-600">{stats.assessmentsTaken}</div><div className="text-sm text-gray-600">{t("progress.assessmentsTaken")}</div><div className="text-xs text-green-500 mt-1">{stats.assessmentsTaken >= 1 ? t("progress.selfAware") : t("progress.takeFirstStep")}</div></div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader><CardTitle className="flex items-center"><Flame className="w-5 h-5 mr-2 text-orange-500" />{t("progress.learningStreak")}</CardTitle></CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="text-center"><div className="text-4xl font-bold text-orange-600 mb-2">{streakData.currentStreak}</div><div className="text-sm text-gray-600">{t("progress.currentStreak")}</div><div className="text-xs text-gray-500 mt-1">{streakData.currentStreak > 0 ? t("progress.keepItUp") : t("progress.startYourStreak")}</div></div>
                          <div className="text-center"><div className="text-4xl font-bold text-purple-600 mb-2">{streakData.longestStreak}</div><div className="text-sm text-gray-600">{t("progress.longestStreak")}</div><div className="text-xs text-gray-500 mt-1">{t("progress.personalBest")}</div></div>
                        </div>
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-2"><span className="text-sm text-gray-600">{t("progress.weeklyGoal", { current: streakData.weeklyProgress, total: streakData.weeklyGoal })}</span><span className="text-sm text-gray-600">{Math.round((streakData.weeklyProgress / streakData.weeklyGoal) * 100)}%</span></div>
                          <Progress value={(streakData.weeklyProgress / streakData.weeklyGoal) * 100} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader><CardTitle className="text-lg">{t("progress.quickStats")}</CardTitle></CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between"><span className="text-sm text-gray-600">{t("progress.totalPoints")}</span><span className="font-semibold text-purple-600">{stats.totalPoints}</span></div>
                        <div className="flex items-center justify-between"><span className="text-sm text-gray-600">{t("progress.totalDaysActive")}</span><span className="font-semibold text-blue-600">{streakData.totalDays}</span></div>
                        <div className="flex items-center justify-between"><span className="text-sm text-gray-600">{t("progress.achievements") }</span><span className="font-semibold text-green-600">{achievements.filter(a => a.earned).length}</span></div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      <CardHeader><CardTitle>{t("progress.continueJourney")}</CardTitle><CardDescription className="text-purple-100">{t("progress.continueJourneyDesc")}</CardDescription></CardHeader>
                      <CardContent className="space-y-2">
                        <Link href="/majors"><Button variant="secondary" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30">{t("progress.exploreMoreMajors")}</Button></Link>
                        <Link href="/assessment"><Button variant="secondary" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30">{t("progress.takeAssessment")}</Button></Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader><CardTitle className="text-lg">{t("progress.shareProgress")}</CardTitle></CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full" onClick={() => {
                            const shareText = `🎓 I'm on Level ${stats.level} with ${stats.totalProgress}% progress on Pathly! Join me in exploring college majors!`;
                            if (navigator.share) {
                              navigator.share({ title: t("progress.myPathlyProgress"), text: shareText, url: window.location.origin });
                            } else {
                              navigator.clipboard.writeText(shareText);
                              alert(t("progress.progressCopied"));
                            }
                          }}><Share2 className="w-4 h-4 mr-2" />{t("progress.shareProgressButton")}</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="goals" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{t("progress.personalGoals")}</h2>
                  <div className="flex gap-2">
                    <Button onClick={suggestNewGoal} disabled={availableGoals.length === 0} variant="outline">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      {availableGoals.length > 0 ? t("Suggest Goal") : t("No New Goals")}
                    </Button>
                    <Button onClick={() => setCreateGoalModalOpen(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      {t("Create Goal")}
                    </Button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {goals.map((goal: Goal) => (
                    <Card key={goal.id} className={goal.completed ? "border-green-200 bg-green-50" : ""}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className={goal.completed ? "text-green-800" : ""}>{goal.title[language]}</span>
                          {goal.completed && (<CheckCircle className="w-5 h-5 text-green-600" />)}
                        </CardTitle>
                        <CardDescription className={goal.completed ? "text-green-700" : ""}>{goal.description[language]}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">{t("progress.progress")}</span>
                            <span className="text-sm font-medium">{goal.current}/{goal.target} {goal.unit}</span>
                          </div>
                          <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">{t("progress.achievements")}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement: Achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <Card key={achievement.id} className={`${achievement.earned ? getRarityBorder(achievement.rarity) : "border-gray-200"}`}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className={achievement.earned ? "text-gray-900" : "text-gray-500"}>{achievement.title[language]}</span>
                            <Badge variant="outline" className={getRarityColor(achievement.rarity)}>{achievement.points} pts</Badge>
                          </CardTitle>
                          <CardDescription className={achievement.earned ? "text-gray-600" : "text-gray-400"}>{achievement.description[language]}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center">
                                <div className={`p-3 rounded-lg mr-4 ${achievement.earned ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}><IconComponent className="w-6 h-6" /></div>
                                <div className="flex-1">
                                {achievement.earned ? (
                                    <div className="flex items-center text-sm text-green-600"><CheckCircle className="w-4 h-4 mr-2" />{t("Achievement earned", { date: achievement.date })}</div>
                                ) : (
                                    <div>
                                    <div className="text-sm text-gray-500 mb-2">{achievement.current}/{achievement.requirement}</div>
                                    <Progress value={achievement.progress || 0} className="h-2" />
                                    </div>
                                )}
                                </div>
                            </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{t("progress.recentActivity")}</h2>
                  <Button variant="outline" size="sm" onClick={() => loadProgress()}><RefreshCw className="w-4 h-4 mr-2" />{t("progress.refresh")}</Button>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {recentActivity.length > 0 ? (
                        recentActivity.map((activity: Activity) => (
                          <div key={activity.id} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-900 font-medium">{activity.action[language] || activity.action['en']}</p>
                                {activity.points && (<Badge variant="outline" className="text-xs">+{activity.points} pts</Badge>)}
                              </div>
                              <p className="text-xs text-gray-500 flex items-center mt-1"><Clock className="w-3 h-3 mr-1" />{activity.time}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                          <p>{t("progress.noRecentActivity")}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {isCreateGoalModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setCreateGoalModalOpen(false)}>
            <Card className="w-full max-w-md" onClick={e => e.stopPropagation()}>
                <CardHeader>
                    <CardTitle>{t("Goal Title")}</CardTitle>
                    <CardDescription>{t("Goal Description")}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleCreateGoal} className="space-y-4">
                        <div>
                            <Label htmlFor="goal-title">{t("Goal Title")}</Label>
                            <Input id="goal-title" value={newGoal.title} onChange={e => setNewGoal({...newGoal, title: e.target.value})} placeholder={t("Goal Title Placeholder")} required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="goal-target">{t("Goal Target")}</Label>
                                <Input id="goal-target" type="number" min="1" value={newGoal.target} onChange={e => setNewGoal({...newGoal, target: parseInt(e.target.value, 10)})} required />
                            </div>
                            <div>
                                <Label htmlFor="goal-unit">{t("Goal Unit")}</Label>
                                <Input id="goal-unit" value={newGoal.unit} onChange={e => setNewGoal({...newGoal, unit: e.target.value})} placeholder={t("Goal Unit Placeholder")} required />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 pt-4">
                            <Button type="button" variant="ghost" onClick={() => setCreateGoalModalOpen(false)}>{t("Cancel")}</Button>
                            <Button type="submit">{t("Add Goal")}</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}

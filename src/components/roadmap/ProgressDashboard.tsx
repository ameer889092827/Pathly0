
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, Star, TrendingUp, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ProgressStats = {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  completionRate: number;
  streak: number;
  timeSpent: string;
  nextMilestone: {
    title: string;
    progress: number;
    tasksLeft: number;
  };
};

type Props = {
  majorSlug: string;
  stages: any[];
};

export default function ProgressDashboard({ majorSlug, stages }: Props) {
  const { language } = useLanguage();
  const [stats, setStats] = useState<ProgressStats>({
    totalTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
    completionRate: 0,
    streak: 0,
    timeSpent: "0h",
    nextMilestone: {
      title: "First Stage Complete",
      progress: 0,
      tasksLeft: 0
    }
  });

  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    const userProgress = JSON.parse(localStorage.getItem(`roadmap_progress_${majorSlug}`) || "{}");
    const allTasks = stages.flatMap(stage => stage.tasks || []);
    
    const completedCount = allTasks.filter(task => 
      userProgress[task.id]?.completed || task.completed
    ).length;
    
    const inProgressCount = allTasks.filter(task => 
      userProgress[task.id]?.inProgress || task.inProgress
    ).length;

    const completionRate = allTasks.length > 0 ? (completedCount / allTasks.length) * 100 : 0;

    // Calculate streak (consecutive days with activity)
    const activities = JSON.parse(localStorage.getItem("userActivities") || "[]");
    const roadmapActivities = activities.filter((a: any) => a.type === "roadmap");
    const streak = calculateStreak(roadmapActivities);

    // Find next milestone
    const nextMilestone = findNextMilestone(stages, userProgress);

    setStats({
      totalTasks: allTasks.length,
      completedTasks: completedCount,
      inProgressTasks: inProgressCount,
      completionRate,
      streak,
      timeSpent: calculateTimeSpent(userProgress),
      nextMilestone
    });

    // Calculate achievements
    const newAchievements = calculateAchievements(completedCount, streak, completionRate);
    setAchievements(newAchievements);
  }, [majorSlug, stages]);

  const calculateStreak = (activities: any[]) => {
    if (activities.length === 0) return 0;
    
    const today = new Date();
    let streak = 0;
    let currentDate = new Date(today);
    
    for (let i = 0; i < 30; i++) {
      const dateString = currentDate.toDateString();
      const hasActivity = activities.some(a => 
        new Date(a.time).toDateString() === dateString
      );
      
      if (hasActivity) {
        streak++;
      } else if (streak > 0) {
        break;
      }
      
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return streak;
  };

  const findNextMilestone = (stages: any[], userProgress: any) => {
    for (const stage of stages) {
      const stageTasks = stage.tasks || [];
      const completedInStage = stageTasks.filter((task: any) => 
        userProgress[task.id]?.completed || task.completed
      ).length;
      
      if (completedInStage < stageTasks.length) {
        return {
          title: stage.title[language] || stage.title.en,
          progress: stageTasks.length > 0 ? (completedInStage / stageTasks.length) * 100 : 0,
          tasksLeft: stageTasks.length - completedInStage
        };
      }
    }
    
    return {
      title: "All Stages Complete!",
      progress: 100,
      tasksLeft: 0
    };
  };

  const calculateTimeSpent = (userProgress: any) => {
    // Simple estimation based on completed tasks
    const completedTasks = Object.values(userProgress).filter((p: any) => p.completed).length;
    const estimatedHours = completedTasks * 2; // Estimate 2 hours per task
    return `${estimatedHours}h`;
  };

  const calculateAchievements = (completed: number, streak: number, completionRate: number) => {
    const achievements = [];
    
    if (completed >= 1) {
      achievements.push({
        id: "first-task",
        title: { en: "First Steps", ru: "Первые шаги" },
        icon: Target,
        earned: true
      });
    }
    
    if (completed >= 5) {
      achievements.push({
        id: "task-warrior",
        title: { en: "Task Warrior", ru: "Воин задач" },
        icon: Trophy,
        earned: true
      });
    }
    
    if (streak >= 3) {
      achievements.push({
        id: "consistent",
        title: { en: "Consistent Learner", ru: "Последовательный ученик" },
        icon: Calendar,
        earned: true
      });
    }
    
    if (completionRate >= 25) {
      achievements.push({
        id: "quarter-master",
        title: { en: "Quarter Master", ru: "Четверть пути" },
        icon: Star,
        earned: true
      });
    }

    return achievements;
  };

  const getMotivationalMessage = () => {
    if (stats.completionRate >= 75) {
      return {
        en: "You're almost there! Keep pushing forward!",
        ru: "Вы почти у цели! Продолжайте двигаться вперед!"
      };
    } else if (stats.completionRate >= 50) {
      return {
        en: "Great progress! You're halfway there!",
        ru: "Отличный прогресс! Вы на полпути!"
      };
    } else if (stats.completionRate >= 25) {
      return {
        en: "Good start! Keep building momentum!",
        ru: "Хорошее начало! Продолжайте набирать обороты!"
      };
    } else {
      return {
        en: "Every expert was once a beginner. You've got this!",
        ru: "Каждый эксперт когда-то был новичком. У вас получится!"
      };
    }
  };

  const motivationalMessage = getMotivationalMessage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Overall Progress */}
      <Card className="col-span-full bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Completion Rate</span>
                <span className="font-semibold">{Math.round(stats.completionRate)}%</span>
              </div>
              <Progress value={stats.completionRate} className="h-3" />
            </div>
            <p className="text-sm text-gray-700 italic">
              {motivationalMessage[language]}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Summary */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Completed</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {stats.completedTasks}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">In Progress</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {stats.inProgressTasks}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Total</span>
              <Badge variant="outline">
                {stats.totalTasks}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streak */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Learning Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.streak}</div>
            <div className="text-xs text-gray-500">days</div>
          </div>
        </CardContent>
      </Card>

      {/* Time Spent */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Time Invested
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.timeSpent}</div>
            <div className="text-xs text-gray-500">estimated</div>
          </div>
        </CardContent>
      </Card>

      {/* Next Milestone */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Next Milestone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-sm font-medium truncate">{stats.nextMilestone.title}</div>
            <Progress value={stats.nextMilestone.progress} className="h-2" />
            <div className="text-xs text-gray-500">
              {stats.nextMilestone.tasksLeft} tasks left
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="col-span-full md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {achievements.length > 0 ? (
              achievements.map((achievement) => (
                <Badge 
                  key={achievement.id} 
                  variant="secondary" 
                  className="bg-yellow-100 text-yellow-800 flex items-center gap-1"
                >
                  <achievement.icon className="w-3 h-3" />
                  {achievement.title[language]}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-gray-500">
                Complete your first task to earn achievements!
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

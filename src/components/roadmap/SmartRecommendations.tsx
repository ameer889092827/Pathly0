
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, Target, Clock, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Recommendation = {
  id: string;
  type: "task" | "resource" | "competition" | "project";
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  priority: "high" | "medium" | "low";
  estimatedTime: string;
  reason: { en: string; ru: string };
  action: {
    text: { en: string; ru: string };
    url?: string;
  };
};

type Props = {
  majorSlug: string;
  stages: any[];
  currentProgress: number;
};

export default function SmartRecommendations({ majorSlug, stages, currentProgress }: Props) {
  const { language } = useLanguage();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    generateRecommendations();
  }, [majorSlug, currentProgress]);

  const generateRecommendations = () => {
    const userProgress = JSON.parse(localStorage.getItem(`roadmap_progress_${majorSlug}`) || "{}");
    const activities = JSON.parse(localStorage.getItem("userActivities") || "[]");
    const visitedMajors = JSON.parse(localStorage.getItem("visitedMajors") || "[]");
    
    const newRecommendations: Recommendation[] = [];

    // Find next logical task
    const nextTask = findNextTask(stages, userProgress);
    if (nextTask) {
      newRecommendations.push({
        id: "next-task",
        type: "task",
        title: nextTask.title,
        description: nextTask.description,
        priority: "high",
        estimatedTime: nextTask.estimatedTime,
        reason: {
          en: "This is your next logical step in the learning path",
          ru: "Это ваш следующий логический шаг в обучении"
        },
        action: {
          text: { en: "Start Task", ru: "Начать задачу" }
        }
      });
    }

    // Recommend based on progress level
    if (currentProgress < 25) {
      newRecommendations.push({
        id: "foundation-focus",
        type: "resource",
        title: { en: "Build Strong Foundations", ru: "Создайте прочную основу" },
        description: { en: "Focus on mastering basic concepts before moving to advanced topics", ru: "Сосредоточьтесь на освоении основных концепций перед переходом к продвинутым темам" },
        priority: "high",
        estimatedTime: "2-4 weeks",
        reason: {
          en: "Strong foundations are crucial for long-term success",
          ru: "Прочные основы критически важны для долгосрочного успеха"
        },
        action: {
          text: { en: "Review Basics", ru: "Повторить основы" }
        }
      });
    } else if (currentProgress >= 50) {
      newRecommendations.push({
        id: "portfolio-project",
        type: "project",
        title: { en: "Build a Portfolio Project", ru: "Создайте проект для портфолио" },
        description: { en: "Start working on a comprehensive project to showcase your skills", ru: "Начните работу над комплексным проектом, чтобы продемонстрировать свои навыки" },
        priority: "high",
        estimatedTime: "4-8 weeks",
        reason: {
          en: "You have enough knowledge to tackle real projects",
          ru: "У вас достаточно знаний для решения реальных проектов"
        },
        action: {
          text: { en: "Start Project", ru: "Начать проект" }
        }
      });
    }

    // Competition recommendations
    if (currentProgress >= 30) {
      newRecommendations.push({
        id: "competitions",
        type: "competition",
        title: { en: "Join Competitions", ru: "Участвуйте в соревнованиях" },
        description: { en: "Test your skills against others and gain recognition", ru: "Проверьте свои навыки в сравнении с другими и получите признание" },
        priority: "medium",
        estimatedTime: "Varies",
        reason: {
          en: "Competitions provide practical experience and networking opportunities",
          ru: "Соревнования дают практический опыт и возможности для нетворкинга"
        },
        action: {
          text: { en: "Find Competitions", ru: "Найти соревнования" },
          url: "https://devpost.com/"
        }
      });
    }

    // Learning streak recommendation
    const recentActivity = activities.filter((a: any) => 
      new Date(a.time).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
    );
    
    if (recentActivity.length === 0) {
      newRecommendations.push({
        id: "keep-momentum",
        type: "task",
        title: { en: "Keep Your Momentum", ru: "Сохраните импульс" },
        description: { en: "You haven't been active lately. Let's get back on track!", ru: "Вы давно не были активны. Давайте вернемся в колею!" },
        priority: "high",
        estimatedTime: "30 min",
        reason: {
          en: "Consistency is key to successful learning",
          ru: "Последовательность - ключ к успешному обучению"
        },
        action: {
          text: { en: "Continue Learning", ru: "Продолжить обучение" }
        }
      });
    }

    setRecommendations(newRecommendations);
  };

  const findNextTask = (stages: any[], userProgress: any) => {
    for (const stage of stages) {
      const stageTasks = stage.tasks || [];
      for (const task of stageTasks) {
        const taskProgress = userProgress[task.id];
        if (!taskProgress?.completed && !taskProgress?.inProgress) {
          return task;
        }
      }
    }
    return null;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "task": return <Target className="w-4 h-4" />;
      case "resource": return <Star className="w-4 h-4" />;
      case "competition": return <Star className="w-4 h-4" />;
      case "project": return <Lightbulb className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  if (recommendations.length === 0) return null;

  return (
    <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-purple-600" />
          Smart Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.slice(0, 3).map((rec) => (
            <div key={rec.id} className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getTypeIcon(rec.type)}
                  <h4 className="font-semibold text-gray-900">
                    {rec.title[language]}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(rec.priority)}>
                    {rec.priority}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {rec.estimatedTime}
                  </Badge>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">
                {rec.description[language]}
              </p>
              
              <p className="text-xs text-gray-500 mb-3 italic">
                💡 {rec.reason[language]}
              </p>
              
              <Button 
                size="sm" 
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
                onClick={() => {
                  if (rec.action.url) {
                    window.open(rec.action.url, '_blank');
                  }
                }}
              >
                {rec.action.text[language]}
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

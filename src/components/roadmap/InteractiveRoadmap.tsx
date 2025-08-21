
"use client";

import React, { useState, useEffect } from "react";
import { Check, Clock, Play, Star, Users, BookOpen, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export type RoadmapTask = {
  id: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  type: "skill" | "project" | "course" | "certification" | "experience";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  resources: Array<{
    type: "course" | "book" | "tutorial" | "practice" | "community";
    name: string;
    url: string;
    description: { en: string; ru: string };
  }>;
  prerequisites?: string[];
  completed: boolean;
  inProgress: boolean;
  dateCompleted?: string;
  dateStarted?: string;
};

export type RoadmapStage = {
  id: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  phase: "foundation" | "intermediate" | "advanced" | "specialization";
  order: number;
  tasks: RoadmapTask[];
  milestoneReward?: {
    title: { en: string; ru: string };
    description: { en: string; ru: string };
    badge: string;
  };
};

type InteractiveRoadmapProps = {
  majorSlug: string;
  stages: RoadmapStage[];
  onProgressUpdate?: (progress: number) => void;
};

export default function InteractiveRoadmap({ 
  majorSlug, 
  stages, 
  onProgressUpdate 
}: InteractiveRoadmapProps) {
  const { t, language } = useLanguage();
  const [userProgress, setUserProgress] = useState<Record<string, RoadmapTask>>({});
  const [selectedTask, setSelectedTask] = useState<RoadmapTask | null>(null);
  const [overallProgress, setOverallProgress] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`roadmap_progress_${majorSlug}`);
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, [majorSlug]);

  // Calculate overall progress
  useEffect(() => {
    const allTasks = stages.flatMap(stage => stage.tasks || []);
    const completedTasks = allTasks.filter(task => 
      userProgress[task.id]?.completed || task.completed
    );
    const progress = allTasks.length > 0 ? (completedTasks.length / allTasks.length) * 100 : 0;
    setOverallProgress(progress);
    onProgressUpdate?.(progress);
  }, [userProgress, stages, onProgressUpdate]);

  // Update task progress
  const updateTaskProgress = (taskId: string, updates: Partial<RoadmapTask>) => {
    const updatedProgress = {
      ...userProgress,
      [taskId]: { ...userProgress[taskId], ...updates }
    };
    setUserProgress(updatedProgress);
    localStorage.setItem(`roadmap_progress_${majorSlug}`, JSON.stringify(updatedProgress));

    // Track progress activity
    const activities = JSON.parse(localStorage.getItem("userActivities") || "[]");
    const allTasks = stages.flatMap(s => s.tasks || []);
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
      activities.push({
        id: Date.now().toString(),
        action: { 
          en: `${updates.completed ? 'Completed' : 'Started'} task: ${task.title.en}`,
          ru: `${updates.completed ? 'Завершил' : 'Начал'} задачу: ${task.title.ru}`
        },
        time: new Date().toLocaleString(),
        type: "roadmap" as const,
      });
      localStorage.setItem("userActivities", JSON.stringify(activities.slice(-50)));
    }
  };

  const startTask = (task: RoadmapTask) => {
    updateTaskProgress(task.id, {
      inProgress: true,
      dateStarted: new Date().toISOString(),
    });
  };

  const completeTask = (task: RoadmapTask) => {
    updateTaskProgress(task.id, {
      completed: true,
      inProgress: false,
      dateCompleted: new Date().toISOString(),
    });
  };

  const getTaskStatus = (task: RoadmapTask) => {
    const progress = userProgress[task.id];
    if (progress?.completed || task.completed) return "completed";
    if (progress?.inProgress || task.inProgress) return "in-progress";
    return "not-started";
  };

  const getStageProgress = (stage: RoadmapStage) => {
    if (!stage.tasks || stage.tasks.length === 0) return 0;
    const completedTasks = stage.tasks.filter(task => getTaskStatus(task) === "completed");
    return (completedTasks.length / stage.tasks.length) * 100;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "skill": return <Star className="w-4 h-4" />;
      case "project": return <Trophy className="w-4 h-4" />;
      case "course": return <BookOpen className="w-4 h-4" />;
      case "certification": return <Trophy className="w-4 h-4" />;
      case "experience": return <Users className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Learning Journey</h2>
            <p className="text-purple-100">Track your progress and unlock achievements</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{Math.round(overallProgress)}%</div>
            <div className="text-purple-100">Complete</div>
          </div>
        </div>
        <Progress value={overallProgress} className="h-3 bg-white/20" />
      </div>

      {/* Roadmap Stages */}
      <div className="space-y-8">
        {stages.map((stage, stageIndex) => {
          const stageProgress = getStageProgress(stage);
          const isUnlocked = stageIndex === 0 || getStageProgress(stages[stageIndex - 1]) >= 80;

          return (
            <div
              key={stage.id}
              className={`relative ${!isUnlocked ? 'opacity-50' : ''}`}
            >
              {/* Stage Header */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      stageProgress === 100 
                        ? 'bg-green-100 text-green-600' 
                        : stageProgress > 0 
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {stageProgress === 100 ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <span className="font-bold">{stageIndex + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {stage.title[language]}
                      </h3>
                      <p className="text-gray-600">{stage.description[language]}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {Math.round(stageProgress)}%
                    </div>
                    <Badge variant="outline" className="mt-1">
                      {stage.phase}
                    </Badge>
                  </div>
                </div>
                <Progress value={stageProgress} className="h-2" />
              </div>

              {/* Tasks Grid */}
              {isUnlocked && stage.tasks && stage.tasks.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8">
                  {stage.tasks.map((task) => {
                    const status = getTaskStatus(task);
                    const progress = userProgress[task.id];

                    return (
                      <div
                        key={task.id}
                        className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          status === "completed"
                            ? "border-green-200 bg-green-50"
                            : status === "in-progress"
                            ? "border-blue-200 bg-blue-50"
                            : "border-gray-200 hover:border-purple-200"
                        }`}
                        onClick={() => setSelectedTask(task)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              status === "completed"
                                ? "bg-green-100 text-green-600"
                                : status === "in-progress"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-400"
                            }`}>
                              {status === "completed" ? (
                                <Check className="w-4 h-4" />
                              ) : status === "in-progress" ? (
                                <Clock className="w-4 h-4" />
                              ) : (
                                getTypeIcon(task.type)
                              )}
                            </div>
                          </div>
                          <Badge className={getDifficultyColor(task.difficulty)}>
                            {task.difficulty}
                          </Badge>
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-2">
                          {task.title[language]}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {task.description[language]}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {task.estimatedTime}
                          </span>
                          {status === "not-started" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                startTask(task);
                              }}
                            >
                              <Play className="w-3 h-3 mr-1" />
                              Start
                            </Button>
                          )}
                          {status === "in-progress" && (
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                completeTask(task);
                              }}
                            >
                              <Check className="w-3 h-3 mr-1" />
                              Complete
                            </Button>
                          )}
                          {status === "completed" && (
                            <Badge variant="default" className="bg-green-600">
                              ✓ Done
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Milestone Reward */}
              {stage.milestoneReward && stageProgress === 100 && (
                <div className="mt-6 ml-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white">
                  <div className="flex items-center">
                    <Trophy className="w-6 h-6 mr-3" />
                    <div>
                      <h4 className="font-semibold">{stage.milestoneReward.title[language]}</h4>
                      <p className="text-sm opacity-90">{stage.milestoneReward.description[language]}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Line */}
              {stageIndex < stages.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTask(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                    {getTypeIcon(selectedTask.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedTask.title[language]}
                    </h3>
                    <div className="flex items-center mt-1 space-x-2">
                      <Badge className={getDifficultyColor(selectedTask.difficulty)}>
                        {selectedTask.difficulty}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {selectedTask.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-700 mb-6">{selectedTask.description[language]}</p>

              {/* Resources */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                <div className="space-y-3">
                  {selectedTask.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">{resource.name}</h5>
                          <p className="text-sm text-gray-600">{resource.description[language]}</p>
                        </div>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3">
                {getTaskStatus(selectedTask) === "not-started" && (
                  <Button onClick={() => {
                    startTask(selectedTask);
                    setSelectedTask(null);
                  }}>
                    <Play className="w-4 h-4 mr-2" />
                    Start Task
                  </Button>
                )}
                {getTaskStatus(selectedTask) === "in-progress" && (
                  <Button onClick={() => {
                    completeTask(selectedTask);
                    setSelectedTask(null);
                  }}>
                    <Check className="w-4 h-4 mr-2" />
                    Mark Complete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

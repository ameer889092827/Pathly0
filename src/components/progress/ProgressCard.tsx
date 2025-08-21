
"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Star, 
  BookOpen, 
  Target, 
  Clock,
  TrendingUp
} from "lucide-react";

type ProgressCardProps = {
  title: string;
  description: string;
  progress: number;
  total: number;
  color: "purple" | "blue" | "green" | "orange";
  icon: "trophy" | "star" | "book" | "target" | "clock" | "trending";
  showBadge?: boolean;
  badgeText?: string;
};

export default function ProgressCard({
  title,
  description,
  progress,
  total,
  color,
  icon,
  showBadge,
  badgeText
}: ProgressCardProps) {
  const colorClasses = {
    purple: {
      bg: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      light: "bg-purple-50",
      border: "border-purple-200"
    },
    blue: {
      bg: "from-blue-500 to-blue-600", 
      text: "text-blue-600",
      light: "bg-blue-50",
      border: "border-blue-200"
    },
    green: {
      bg: "from-green-500 to-green-600",
      text: "text-green-600", 
      light: "bg-green-50",
      border: "border-green-200"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      text: "text-orange-600",
      light: "bg-orange-50", 
      border: "border-orange-200"
    }
  };

  const icons = {
    trophy: Trophy,
    star: Star,
    book: BookOpen,
    target: Target,
    clock: Clock,
    trending: TrendingUp
  };

  const IconComponent = icons[icon];
  const progressPercentage = total > 0 ? (progress / total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden bg-white rounded-2xl p-6 border-2 ${colorClasses[color].border} hover:shadow-lg transition-all duration-300`}
    >
      {/* Background Gradient */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClasses[color].bg} opacity-10 rounded-full transform translate-x-6 -translate-y-6`} />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-3 ${colorClasses[color].light} rounded-xl mr-4`}>
            <IconComponent className={`w-6 h-6 ${colorClasses[color].text}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        {showBadge && badgeText && (
          <Badge variant="outline" className={colorClasses[color].text}>
            {badgeText}
          </Badge>
        )}
      </div>

      {/* Progress Stats */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{progress}</span>
          <span className="text-gray-500 ml-1">/ {total}</span>
        </div>
        <div className="text-right">
          <div className={`text-xl font-bold ${colorClasses[color].text}`}>
            {Math.round(progressPercentage)}%
          </div>
          <div className="text-xs text-gray-500">Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress 
        value={progressPercentage} 
        className={`h-3 ${colorClasses[color].light}`}
      />

      {/* Motivational Text */}
      {progressPercentage === 100 ? (
        <div className="mt-4 flex items-center text-sm text-green-600">
          <Trophy className="w-4 h-4 mr-2" />
          Congratulations! 🎉
        </div>
      ) : progressPercentage > 75 ? (
        <div className="mt-4 text-sm text-orange-600">
          Almost there! Keep going! 💪
        </div>
      ) : progressPercentage > 25 ? (
        <div className="mt-4 text-sm text-blue-600">
          Great progress! Continue the journey! 🚀
        </div>
      ) : (
        <div className="mt-4 text-sm text-gray-600">
          Every journey begins with a single step! ✨
        </div>
      )}
    </motion.div>
  );
}

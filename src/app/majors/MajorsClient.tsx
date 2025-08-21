"use client";

import { useMemo, useState, useEffect } from "react";
import {
  BookOpen,
  Filter,
  Search,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Major } from "@/data/majors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function MajorsClient({ majors }: { majors: Major[] }) {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    majors.forEach((m) => set.add(m.category));
    return Array.from(set);
  }, [majors]);

  const trackMajorView = (majorSlug: string) => {
    const visited = JSON.parse(localStorage.getItem("visitedMajors") || "[]");
    if (!visited.includes(majorSlug)) {
      visited.push(majorSlug);
      localStorage.setItem("visitedMajors", JSON.stringify(visited));

      // Add to activity log
      const activities = JSON.parse(localStorage.getItem("userActivities") || "[]");
      activities.push({
        id: Date.now().toString(),
        action: { en: `Explored ${majors.find(m => m.slug === majorSlug)?.name.en}`, ru: `Изучил ${majors.find(m => m.slug === majorSlug)?.name.ru}` },
        time: new Date().toLocaleString(),
        type: "major"
      });
      localStorage.setItem("userActivities", JSON.stringify(activities.slice(-50)));
    }
  };

  const filteredMajors = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return majors.filter((m) => {
      const matchesCategory =
        selectedCategory === "All" || m.category === selectedCategory;
      const matchesTerm =
        term.length === 0 ||
        m.name[language].toLowerCase().includes(term) ||
        m.overview[language].toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [majors, searchTerm, selectedCategory, language]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("majors.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("majors.subtitle")}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("majors.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center px-6 py-3 bg-white border border-gray-200 rounded-xl">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700">{selectedCategory}</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Majors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredMajors.map((major) => (
            <div
              key={major.slug}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${major.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {major.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {major.name[language]}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {major.overview[language]}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" /> Avg Salary
                    </div>
                    <span className="font-semibold text-gray-900">
                      {major.stats.avgSalary}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-1" /> Job Growth
                    </div>
                    <span className="font-semibold text-green-600">
                      {major.stats.jobGrowth}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" /> Popularity
                    </div>
                    <span className="font-semibold text-gray-900">
                      {major.stats.popularity}
                    </span>
                  </div>
                </div>

                <Link
                    href={`/majors/${major.slug}`}
                    onClick={() => trackMajorView(major.slug)}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/20"
                    >
                      {t("majors.viewRoadmap")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredMajors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t("majors.noResults")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
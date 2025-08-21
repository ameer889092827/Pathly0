"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  ChevronRight,
  Target,
  Zap,
  Award,
} from "lucide-react";
import { getMajorBySlug } from "@/data/majors";
import { useLanguage } from "@/contexts/LanguageContext";
import InteractiveRoadmap from "@/components/roadmap/InteractiveRoadmap";
import ProgressDashboard from "@/components/roadmap/ProgressDashboard";
import SmartRecommendations from "@/components/roadmap/SmartRecommendations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SpecializationSelector from "@/components/roadmap/SpecializationSelector";

export default function MajorDetailClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const major = useMemo(() => getMajorBySlug(slug), [slug]);
  const [selectedSubspecialization, setSelectedSubspecialization] = useState<
    string | null
  >(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Normalize majors data roadmap shape to InteractiveRoadmap's expected shape
  const normalizeStages = (stages: any[]) => {
    const mapPhase = (
      grade: number,
    ): "foundation" | "intermediate" | "advanced" | "specialization" => {
      if (grade <= 7) return "foundation";
      if (grade <= 9) return "intermediate";
      if (grade === 10) return "advanced";
      return "specialization";
    };

    return (stages || []).map((stage: any, index: number) => {
      const phase = mapPhase(stage.grade ?? 7);
      const order = index + 1;
      const tasks = (stage.tasks || []).map((task: any) => {
        const hasProject = Boolean(task.project?.en || task.project?.ru);
        const difficulty =
          stage.grade <= 7
            ? "beginner"
            : stage.grade <= 9
              ? "intermediate"
              : "advanced";
        const estimatedTime =
          task.timeline?.[language] || task.timeline?.en || "";

        // Flatten resources into the structure expected by InteractiveRoadmap
        const normalizedResources: Array<{
          type: "course" | "book" | "tutorial" | "practice" | "community";
          name: string;
          url: string;
          description: { en: string; ru: string };
        }> = [];

        if (task.resources?.global) {
          task.resources.global.forEach((name: string) =>
            normalizedResources.push({
              type: "tutorial",
              name,
              url: "#",
              description: { en: name, ru: name },
            }),
          );
        }
        if (task.resources?.competitions) {
          task.resources.competitions.forEach((name: string) =>
            normalizedResources.push({
              type: "practice",
              name,
              url: "#",
              description: { en: name, ru: name },
            }),
          );
        }
        if (task.resources?.kazakhstan) {
          task.resources.kazakhstan.forEach((name: string) =>
            normalizedResources.push({
              type: "community",
              name,
              url: "#",
              description: { en: name, ru: name },
            }),
          );
        }

        return {
          id: `${stage.id}-${task.id}`,
          title: task.title,
          description: hasProject
            ? {
                en: `${task.description?.en || ""}${task.project?.en ? `\n\nProject: ${task.project.en}` : ""}`.trim(),
                ru: `${task.description?.ru || ""}${task.project?.ru ? `\n\nПроект: ${task.project.ru}` : ""}`.trim(),
              }
            : task.description,
          type: hasProject ? "project" : "skill",
          difficulty,
          estimatedTime,
          resources: normalizedResources,
          prerequisites: [],
          completed: false,
          inProgress: false,
        };
      });

      return {
        id: stage.id,
        title: stage.title,
        description: stage.description,
        phase,
        order,
        tasks,
        milestoneReward: undefined,
      };
    });
  };

  if (!major) return null;

  const selectedSubspec = selectedSubspecialization
    ? major.subspecializations.find((s) => s.id === selectedSubspecialization)
    : null;

  if (!selectedSubspecialization && major.subspecializations.length > 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/majors"
          className="inline-flex items-center text-purple-600 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("roadmap.back")}
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${major.color}`} />
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {major.name[language]}
            </h1>
            <p className="text-gray-600 mb-8 max-w-3xl">
              {major.overview[language]}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="flex items-center p-4">
                  <DollarSign className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Average Salary</div>
                    <div className="text-xl font-bold">
                      {major.stats.avgSalary}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Job Growth</div>
                    <div className="text-xl font-bold">
                      {major.stats.jobGrowth}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Users className="w-8 h-8 text-purple-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Popularity</div>
                    <div className="text-xl font-bold">
                      {major.stats.popularity}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subspecializations Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choose Your Specialization Path
              </h2>
              <p className="text-gray-600 mb-8">
                Each specialization offers a unique career path with specific
                skills, projects, and opportunities. Choose the one that matches
                your interests and goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {major.subspecializations.map((subspec) => (
                  <Card
                    key={subspec.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-300 group"
                    onClick={() => setSelectedSubspecialization(subspec.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <Target className="w-8 h-8 text-purple-600 group-hover:text-purple-700" />
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors">
                        {subspec.name[language]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {subspec.description[language]}
                      </p>

                      {/* Career Paths Preview */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Career Paths:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {/* This line needs to be fixed based on the error provided */}
                          {subspec.careerPaths
                            .slice(0, 3)
                            .map((career, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {career[language]}
                              </Badge>
                            ))}
                          {subspec.careerPaths.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{subspec.careerPaths.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Roadmap Preview */}
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="w-4 h-4 mr-2" />
                        {subspec.roadmap.length} learning stages
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Removed General Resources section as per changes */}
          </div>
        </div>
      </div>
    );
  }

  if (!selectedSubspec) return null;

  const normalizedStages = normalizeStages(selectedSubspec.roadmap);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Navigation */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/majors" className="text-purple-600 hover:underline">
          Majors
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link
          href={`/majors/${slug}`}
          className="text-purple-600 hover:underline"
          onClick={() => setSelectedSubspecialization(null)}
        >
          {major.name[language]}
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-600">{selectedSubspec.name[language]}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${major.color}`} />
        <div className="p-6 md:p-10">
          {/* Subspecialization Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 bg-gradient-to-r ${major.color} rounded-lg`}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {selectedSubspec.name[language]}
                </h1>
                <p className="text-lg text-gray-600">
                  {selectedSubspec.description[language]}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 max-w-4xl">
              {selectedSubspec.description[language]}
            </p>

            {/* Career Paths */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Career Opportunities
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedSubspec.careerPaths.map((career, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-800"
                  >
                    {career[language]}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Dashboard */}
          <div className="mb-8">
            <ProgressDashboard
              majorSlug={`${major.slug}-${selectedSubspec.id}`}
              stages={normalizedStages}
            />
          </div>

          {/* Smart Recommendations */}
          <SmartRecommendations
            majorSlug={`${major.slug}-${selectedSubspec.id}`}
            stages={normalizedStages}
            currentProgress={currentProgress}
          />

          {/* Interactive Roadmap */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Complete Learning Roadmap
            </h2>
            <InteractiveRoadmap
              majorSlug={`${major.slug}-${selectedSubspec.id}`}
              stages={normalizedStages}
              onProgressUpdate={(progress) => {
                setCurrentProgress(progress);
                const savedProgress = JSON.parse(
                  localStorage.getItem("majorProgress") || "{}",
                );
                savedProgress[`${major.slug}-${selectedSubspec.id}`] = progress;
                localStorage.setItem(
                  "majorProgress",
                  JSON.stringify(savedProgress),
                );
              }}
            />
          </div>

          {/* Detailed Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Global Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Global Resources
              </h3>

              {/* Courses */}
              {selectedSubspec.globalResources.courses.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Online Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedSubspec.globalResources.courses.map(
                        (course, index) => (
                          <a
                            key={index}
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {course.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-1">
                                  {course.description[language]}
                                </p>
                                <p className="text-xs text-gray-500">
                                  by {course.provider}
                                </p>
                              </div>
                              <Badge
                                variant={
                                  course.price === "Free"
                                    ? "secondary"
                                    : "outline"
                                }
                              >
                                {course.price}
                              </Badge>
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Competitions */}
              {selectedSubspec.globalResources.competitions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Competitions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedSubspec.globalResources.competitions.map(
                        (comp, index) => (
                          <a
                            key={index}
                            href={comp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {comp.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {comp.description[language]}
                                </p>
                              </div>
                              <Badge
                                variant="outline"
                                className={
                                  comp.level === "beginner"
                                    ? "bg-green-50 text-green-700"
                                    : comp.level === "intermediate"
                                      ? "bg-yellow-50 text-yellow-700"
                                      : "bg-red-50 text-red-700"
                                }
                              >
                                {comp.level}
                              </Badge>
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Kazakhstan Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Kazakhstan Resources
              </h3>

              {/* Local Communities */}
              {selectedSubspec.kazakhstanResources.communities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Local Communities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedSubspec.kazakhstanResources.communities.map(
                        (community, index) => (
                          <a
                            key={index}
                            href={community.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {community.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {community.description[language]}
                                </p>
                              </div>
                              <Badge variant="outline">{community.type}</Badge>
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Universities */}
              {selectedSubspec.kazakhstanResources.universities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Universities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedSubspec.kazakhstanResources.universities.map(
                        (uni, index) => (
                          <a
                            key={index}
                            href={uni.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                          >
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {uni.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-1">
                                {uni.location}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {uni.programs.map((program, pIndex) => (
                                  <Badge
                                    key={pIndex}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {program}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => setSelectedSubspecialization(null)}
              variant="outline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Specializations
            </Button>
            <Button
              onClick={() => {
                // Track specialization selection
                const activities = JSON.parse(
                  localStorage.getItem("userActivities") || "[]",
                );
                activities.push({
                  id: Date.now().toString(),
                  action: {
                    en: `Started ${selectedSubspec.name.en} specialization`,
                    ru: `Начал специализацию ${selectedSubspec.name.ru}`,
                  },
                  time: new Date().toLocaleString(),
                  type: "specialization",
                });
                localStorage.setItem(
                  "userActivities",
                  JSON.stringify(activities.slice(-50)),
                );
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Target className="w-4 h-4 mr-2" />
              Start Learning Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

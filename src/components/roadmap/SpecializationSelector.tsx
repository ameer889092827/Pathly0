
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, DollarSign, GraduationCap, TrendingUp, Users } from "lucide-react";
import { Subspecialization } from "@/data/majors";
import { useLanguage } from "@/contexts/LanguageContext";

interface SpecializationSelectorProps {
  subspecializations: Subspecialization[];
  onSelectSpecialization: (subspecialization: Subspecialization) => void;
  majorName: { en: string; ru: string };
}

export default function SpecializationSelector({ 
  subspecializations, 
  onSelectSpecialization, 
  majorName 
}: SpecializationSelectorProps) {
  const { language } = useLanguage();
  const [selectedSubspec, setSelectedSubspec] = useState<Subspecialization | null>(null);

  const handleSelect = (subspecialization: Subspecialization) => {
    setSelectedSubspec(subspecialization);
  };

  const handleConfirmSelection = () => {
    if (selectedSubspec) {
      onSelectSpecialization(selectedSubspec);
    }
  };

  const getDemandColor = (salary: { entry: string }) => {
    const entryNum = parseInt(salary.entry.replace(/[^0-9]/g, ''));
    if (entryNum >= 100000) return "bg-green-100 text-green-800 border-green-200";
    if (entryNum >= 70000) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Choose Your Specialization' : 'Выберите свою специализацию'}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {language === 'en' 
            ? `Select a specialization within ${majorName.en} to get your personalized roadmap`
            : `Выберите специализацию в ${majorName.ru}, чтобы получить персонализированный план обучения`
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {subspecializations.map((subspec) => (
          <Card 
            key={subspec.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedSubspec?.id === subspec.id 
                ? 'ring-2 ring-purple-500 shadow-lg' 
                : 'hover:border-purple-300'
            }`}
            onClick={() => handleSelect(subspec)}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {subspec.name[language]}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {subspec.description[language]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Salary Information */}
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">
                      {language === 'en' ? 'Salary Range:' : 'Зарплата:'}
                    </span>
                    <div className="text-xs text-gray-600">
                      {language === 'en' ? 'Entry:' : 'Начальная:'} {subspec.averageSalary.entry}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === 'en' ? 'Senior:' : 'Старшая:'} {subspec.averageSalary.senior}
                    </div>
                  </div>
                </div>

                {/* Career Paths */}
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">
                      {language === 'en' ? 'Career Paths:' : 'Карьерные пути:'}
                    </span>
                    <div className="text-xs text-gray-600 mt-1">
                      {subspec.careerPaths.slice(0, 2).map((path, index) => (
                        <div key={index}>• {path[language]}</div>
                      ))}
                      {subspec.careerPaths.length > 2 && (
                        <div className="text-gray-500">
                          +{subspec.careerPaths.length - 2} {language === 'en' ? 'more' : 'еще'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Top Universities */}
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">
                      {language === 'en' ? 'Top Universities:' : 'Лучшие университеты:'}
                    </span>
                    <div className="text-xs text-gray-600 mt-1">
                      {subspec.topUniversities.slice(0, 3).join(', ')}
                      {subspec.topUniversities.length > 3 && '...'}
                    </div>
                  </div>
                </div>

                {/* Roadmap Stages Count */}
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {subspec.roadmap.length} {language === 'en' ? 'Grade Levels' : 'Классов'}
                  </span>
                </div>

                {/* Demand Level Badge */}
                <div className="pt-2">
                  <Badge className={getDemandColor(subspec.averageSalary)}>
                    {language === 'en' ? 'Market Demand' : 'Спрос на рынке'}: 
                    {parseInt(subspec.averageSalary.entry.replace(/[^0-9]/g, '')) >= 100000 
                      ? (language === 'en' ? ' High' : ' Высокий')
                      : parseInt(subspec.averageSalary.entry.replace(/[^0-9]/g, '')) >= 70000
                      ? (language === 'en' ? ' Medium' : ' Средний')
                      : (language === 'en' ? ' Growing' : ' Растущий')
                    }
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selection Details */}
      {selectedSubspec && (
        <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl text-purple-900">
              {selectedSubspec.name[language]}
            </CardTitle>
            <CardDescription className="text-purple-700">
              {selectedSubspec.description[language]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  {language === 'en' ? 'All Career Opportunities:' : 'Все карьерные возможности:'}
                </h4>
                <ul className="space-y-1 text-sm text-purple-800">
                  {selectedSubspec.careerPaths.map((path, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      {path[language]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  {language === 'en' ? 'What You\'ll Learn:' : 'Что вы изучите:'}
                </h4>
                <div className="text-sm text-purple-800">
                  <p className="mb-2">
                    {language === 'en' 
                      ? `Complete ${selectedSubspec.roadmap.length}-year roadmap from Grade 7 to 11`
                      : `Полный ${selectedSubspec.roadmap.length}-летний план обучения с 7 по 11 класс`
                    }
                  </p>
                  <p>
                    {language === 'en' 
                      ? 'Hands-on projects, competitions, and real-world applications'
                      : 'Практические проекты, соревнования и реальные применения'
                    }
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Button */}
      {selectedSubspec && (
        <div className="text-center">
          <Button
            onClick={handleConfirmSelection}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {language === 'en' ? 'Start Learning Journey' : 'Начать обучение'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            {language === 'en' 
              ? 'Get your detailed grade-by-grade roadmap with projects and resources'
              : 'Получите детальный план обучения по классам с проектами и ресурсами'
            }
          </p>
        </div>
      )}
    </div>
  );
}

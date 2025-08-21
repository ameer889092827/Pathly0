"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Footer from "@/components/footer";

interface Question {
  id: number;
  question: { en: string; ru: string };
  options: { en: string[]; ru: string[] };
  weights: {
    computerScience: number;
    businessAdmin: number;
    psychology: number;
    mechanicalEng: number;
    nursing: number;
    marketing: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: {
      en: "What type of problems do you enjoy solving the most?",
      ru: "Какие типы задач вам больше всего нравится решать?",
    },
    options: {
      en: [
        "Complex algorithms and coding challenges",
        "Business strategy and financial analysis",
        "Understanding human behavior and emotions",
        "Engineering designs and mechanical systems",
        "Healthcare and helping people heal",
        "Creative campaigns and brand strategies",
      ],
      ru: [
        "Сложные алгоритмы и задачи программирования",
        "Бизнес-стратегия и финансовый анализ",
        "Понимание человеческого поведения и эмоций",
        "Инженерные проекты и механические системы",
        "Здравоохранение и помощь людям в выздоровлении",
        "Креативные кампании и стратегии брендинга",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 5,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 2,
    question: {
      en: "Which work environment appeals to you most?",
      ru: "Какая рабочая среда вам больше всего нравится?",
    },
    options: {
      en: [
        "Tech companies and startups",
        "Corporate offices and boardrooms",
        "Research labs and counseling centers",
        "Manufacturing plants and design studios",
        "Hospitals and healthcare facilities",
        "Creative agencies and media companies",
      ],
      ru: [
        "Технологические компании и стартапы",
        "Корпоративные офисы и залы заседаний",
        "Исследовательские лаборатории и консультационные центры",
        "Производственные предприятия и дизайн-студии",
        "Больницы и медицинские учреждения",
        "Креативные агентства и медиа-компании",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 1,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 1,
        businessAdmin: 5,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 2,
      },
      {
        computerScience: 1,
        businessAdmin: 0,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 1,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 2,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 2,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 3,
    question: {
      en: "What motivates you most in your future career?",
      ru: "Что больше всего мотивирует вас в будущей карьере?",
    },
    options: {
      en: [
        "Building innovative technology solutions",
        "Leading teams and making strategic decisions",
        "Understanding and helping people improve their lives",
        "Designing and building physical products",
        "Providing direct care and healing to patients",
        "Creating compelling content and driving engagement",
      ],
      ru: [
        "Создание инновационных технологических решений",
        "Руководство командами и принятие стратегических решений",
        "Понимание и помощь людям в улучшении их жизни",
        "Проектирование и создание физических продуктов",
        "Оказание прямой помощи и лечения пациентов",
        "Создание убедительного контента и повышение вовлеченности",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 2,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 5,
        psychology: 1,
        mechanicalEng: 1,
        nursing: 1,
        marketing: 2,
      },
      {
        computerScience: 0,
        businessAdmin: 1,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 3,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 2,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 2,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 4,
    question: {
      en: "Which subjects did you enjoy most in school?",
      ru: "Какие предметы вам больше всего нравились в школе?",
    },
    options: {
      en: [
        "Mathematics, Physics, and Computer Science",
        "Economics, Business Studies, and Mathematics",
        "Psychology, Biology, and Social Sciences",
        "Physics, Mathematics, and Engineering",
        "Biology, Chemistry, and Health Sciences",
        "Art, English, and Social Studies",
      ],
      ru: [
        "Математика, Физика и Информатика",
        "Экономика, Бизнес и Математика",
        "Психология, Биология и Социальные науки",
        "Физика, Математика и Инженерия",
        "Биология, Химия и Медицинские науки",
        "Искусство, Английский и Обществознание",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 1,
        psychology: 0,
        mechanicalEng: 2,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 2,
        businessAdmin: 5,
        psychology: 0,
        mechanicalEng: 1,
        nursing: 0,
        marketing: 2,
      },
      {
        computerScience: 0,
        businessAdmin: 1,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 2,
        marketing: 1,
      },
      {
        computerScience: 2,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 2,
        psychology: 2,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 5,
    question: {
      en: "How do you prefer to work on projects?",
      ru: "Как вы предпочитаете работать над проектами?",
    },
    options: {
      en: [
        "Independently with code and data",
        "Leading teams and coordinating resources",
        "Collaborating closely with people",
        "Hands-on building and prototyping",
        "Direct patient care and interaction",
        "Creative brainstorming and campaigns",
      ],
      ru: [
        "Самостоятельно с кодом и данными",
        "Руководство командами и координация ресурсов",
        "Тесное сотрудничество с людьми",
        "Практическое создание и прототипирование",
        "Прямой уход за пациентами и взаимодействие",
        "Креативный мозговой штурм и кампании",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 1,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 5,
        psychology: 1,
        mechanicalEng: 1,
        nursing: 1,
        marketing: 3,
      },
      {
        computerScience: 1,
        businessAdmin: 2,
        psychology: 5,
        mechanicalEng: 1,
        nursing: 4,
        marketing: 2,
      },
      {
        computerScience: 2,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 3,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 3,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 6,
    question: {
      en: "What type of challenges excite you most?",
      ru: "Какие типы вызовов вас больше всего волнуют?",
    },
    options: {
      en: [
        "Debugging complex code and optimizing algorithms",
        "Analyzing market trends and making investment decisions",
        "Researching human behavior and conducting studies",
        "Designing mechanical systems and solving engineering problems",
        "Diagnosing health issues and providing medical care",
        "Creating viral content and building brand awareness",
      ],
      ru: [
        "Отладка сложного кода и оптимизация алгоритмов",
        "Анализ рыночных трендов и принятие инвестиционных решений",
        "Исследование человеческого поведения и проведение исследований",
        "Проектирование механических систем и решение инженерных задач",
        "Диагностика проблем со здоровьем и оказание медицинской помощи",
        "Создание вирусного контента и повышение узнаваемости бренда",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 1,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 5,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 1,
        businessAdmin: 0,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 1,
        marketing: 0,
      },
      {
        computerScience: 2,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 2,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 7,
    question: {
      en: "Which tools and technologies interest you most?",
      ru: "Какие инструменты и технологии вас больше всего интересуют?",
    },
    options: {
      en: [
        "Programming languages, databases, and AI frameworks",
        "Financial software, analytics tools, and spreadsheets",
        "Statistical software, survey tools, and research databases",
        "CAD software, 3D modeling, and simulation tools",
        "Medical equipment, diagnostic tools, and patient records",
        "Design software, social media platforms, and analytics",
      ],
      ru: [
        "Языки программирования, базы данных и фреймворки ИИ",
        "Финансовое ПО, аналитические инструменты и электронные таблицы",
        "Статистическое ПО, инструменты опросов и исследовательские базы данных",
        "CAD ПО, 3D моделирование и инструменты симуляции",
        "Медицинское оборудование, диагностические инструменты и карты пациентов",
        "Дизайнерское ПО, социальные сети и аналитика",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 1,
        psychology: 1,
        mechanicalEng: 1,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 2,
        businessAdmin: 5,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 2,
        businessAdmin: 1,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 1,
        marketing: 1,
      },
      {
        computerScience: 3,
        businessAdmin: 0,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 0,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 2,
        psychology: 0,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
  {
    id: 8,
    question: {
      en: "What impact do you want to make in the world?",
      ru: "Какое влияние вы хотите оказать на мир?",
    },
    options: {
      en: [
        "Innovate technology that changes how people live and work",
        "Build successful companies and create economic value",
        "Improve mental health and understanding of human behavior",
        "Design solutions for engineering and environmental challenges",
        "Heal and care for people in need",
        "Influence culture and how people think about brands",
      ],
      ru: [
        "Внедрять технологии, которые меняют жизнь и работу людей",
        "Создавать успешные компании и экономическую ценность",
        "Улучшать психическое здоровье и понимание человеческого поведения",
        "Проектировать решения для инженерных и экологических вызовов",
        "Лечить и заботиться о нуждающихся людях",
        "Влиять на культуру и то, как люди думают о брендах",
      ],
    },
    weights: [
      {
        computerScience: 5,
        businessAdmin: 1,
        psychology: 0,
        mechanicalEng: 2,
        nursing: 0,
        marketing: 1,
      },
      {
        computerScience: 1,
        businessAdmin: 5,
        psychology: 0,
        mechanicalEng: 1,
        nursing: 0,
        marketing: 2,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 5,
        mechanicalEng: 0,
        nursing: 3,
        marketing: 0,
      },
      {
        computerScience: 2,
        businessAdmin: 1,
        psychology: 0,
        mechanicalEng: 5,
        nursing: 0,
        marketing: 0,
      },
      {
        computerScience: 0,
        businessAdmin: 0,
        psychology: 3,
        mechanicalEng: 0,
        nursing: 5,
        marketing: 0,
      },
      {
        computerScience: 1,
        businessAdmin: 3,
        psychology: 1,
        mechanicalEng: 0,
        nursing: 0,
        marketing: 5,
      },
    ],
  },
];

const majorNames = {
  en: {
    computerScience: "Computer Science",
    businessAdmin: "Business Administration",
    psychology: "Psychology",
    mechanicalEng: "Mechanical Engineering",
    nursing: "Nursing",
    marketing: "Marketing",
  },
  ru: {
    computerScience: "Информатика",
    businessAdmin: "Администрирование бизнеса",
    psychology: "Психология",
    mechanicalEng: "Машиностроение",
    nursing: "Сестринское дело",
    marketing: "Маркетинг",
  },
};

export default function AssessmentPage() {
  const { t, language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1),
  );
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<{ [key: string]: number }>({});

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScores = {
      computerScience: 0,
      businessAdmin: 0,
      psychology: 0,
      mechanicalEng: 0,
      nursing: 0,
      marketing: 0,
    };

    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== -1) {
        const weights = questions[questionIndex].weights[answerIndex];
        Object.keys(weights).forEach((major) => {
          totalScores[major as keyof typeof totalScores] +=
            weights[major as keyof typeof weights];
        });
      }
    });

    setScores(totalScores);
    setShowResults(true);
  };

  const handleSubmit = () => {
    calculateResults();
  };

  const getTopMajors = () => {
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([major, score]) => ({
        major,
        score,
        name: majorNames[language][major as keyof (typeof majorNames)["en"]],
      }));
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const allQuestionsAnswered = answers.every((answer) => answer !== -1);

  if (showResults) {
    const topMajors = getTopMajors();

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Trophy className="h-16 w-16 text-yellow-500" />
                </div>
                <CardTitle className="text-3xl">
                  {t("Assessment results")}
                </CardTitle>
                <CardDescription>{t("Recommended Majors")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {topMajors.map((result, index) => (
                  <div
                    key={result.major}
                    className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-blue-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-purple-600">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{result.name}</h3>
                        <p className="text-sm text-gray-600">
                          Score: {result.score}%
                        </p>
                      </div>
                    </div>
                    <Link href={`/majors/${result.major}`}>
                      <Button>{t("View Roadmap")}</Button>
                    </Link>
                  </div>
                ))}

                <div className="text-center pt-6">
                  <Link href="/majors">
                    <Button variant="outline" className="mr-4">
                      {t("majors.title")}
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers(new Array(questions.length).fill(-1));
                      setShowResults(false);
                      setScores({});
                    }}
                  >
                    Retake Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {t("Assesment")}
              </CardTitle>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    {t("Question")} {currentQuestion + 1} {t("of")}{" "}
                    {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {question.question[language]}
                </h3>

                <RadioGroup
                  value={answers[currentQuestion]?.toString() || ""}
                  onValueChange={(value) => handleAnswer(parseInt(value))}
                  className="space-y-3"
                >
                  {question.options[language].map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("Previous")}
                </Button>

                {currentQuestion === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={!allQuestionsAnswered}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {t("Submit")}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === -1}
                  >
                    {t("Next")}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// The Hero component is not defined in the provided code, so I cannot fix the missing brace.
// Assuming the intention was to fix the AssessmentPage component.

// import { Target, ArrowRight, CheckCircle } from "lucide-react";
// import Link from "next/link";

// export default function AssessmentPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
//       <Navbar />

//       <div className="pt-24 pb-16">
//         <div className="container mx-auto px-4">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Target className="w-8 h-8 text-purple-600" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Find Your Perfect Major
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Take our simple interest assessment to discover college majors
//               that align with your passions and career goals.
//             </p>
//           </div>

//           {/* Assessment Card */}
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
//               <div className="text-center mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                   Interest Assessment
//                 </h2>
//                 <p className="text-gray-600">
//                   Answer 10 quick questions about your interests, strengths, and
//                   career preferences.
//                 </p>
//               </div>

//               {/* Features */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">
//                     Takes only 5 minutes to complete
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">
//                     Personalized major recommendations
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">
//                     Detailed career path insights
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                   <span className="text-gray-700">
//                     No registration required
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <button className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                   Start Assessment
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* How it works */}
//           <div className="mt-16 text-center">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-8">
//               How It Works
//             </h3>
//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               <div className="p-6">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-purple-600 font-bold text-lg">1</span>
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">
//                   Answer Questions
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Share your interests, skills, and career preferences through
//                   our guided questionnaire.
//                 </p>
//               </div>
//               <div className="p-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-blue-600 font-bold text-lg">2</span>
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">
//                   Get Matches
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Receive personalized major recommendations based on your
//                   unique profile and interests.
//                 </p>
//               </div>
//               <div className="p-6">
//                 <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-indigo-600 font-bold text-lg">3</span>
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">
//                   Explore Paths
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Dive deep into recommended majors with detailed roadmaps and
//                   career insights.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

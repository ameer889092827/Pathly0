
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Linkedin, MessageCircle, Mail, Github, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DeveloperPage() {
  const { t, language } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      label: t('dev.phone'),
      value: "+7 775 496 3823",
      href: "tel:+77754963823",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Linkedin,
      label: t('dev.linkedin'),
      value: "Amir Pashayev",
      href: "https://linkedin.com/in/amir-pashayev",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: MessageCircle,
      label: t('dev.telegram'),
      value: "@ppashayev",
      href: "https://t.me/ppashayev",
      color: "bg-cyan-100 text-cyan-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('dev.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('dev.description')}
            </p>
          </div>

          {/* Developer Info Card */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AP
              </div>
              <CardTitle className="text-2xl">{t('dev.name')}</CardTitle>
              <CardDescription className="text-lg">
                Full Stack Developer & UI/UX Designer
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              
              {/* Project Attribution */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-gray-800">
                    {t('dev.projectBy')} {t('dev.name')}
                  </span>
                </div>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? "This website and project was created with passion to help students find their perfect career path."
                    : "Этот веб-сайт и проект были созданы с страстью, чтобы помочь студентам найти их идеальный карьерный путь."
                  }
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactMethods.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 rounded-full ${contact.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {contact.value}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'en' ? 'Technologies Used' : 'Использованные технологии'}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    'Next.js', 'React', 'TypeScript', 'Supabase', 
                    'Tailwind CSS', 'Framer Motion', 'Radix UI'
                  ].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {language === 'en' ? 'About the Project' : 'О проекте'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? "Pathly was built to bridge the gap between student uncertainty and career clarity. Using modern web technologies and thoughtful UX design, this platform provides personalized career guidance through interactive assessments and comprehensive roadmaps."
                      : "Pathly был создан, чтобы устранить разрыв между неопределенностью студентов и ясностью карьеры. Используя современные веб-технологии и продуманный UX-дизайн, эта платформа предоставляет персонализированное карьерное руководство через интерактивные оценки и всеобъемлющие дорожные карты."
                    }
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {language === 'en' ? 'Get in Touch' : 'Связаться'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? "I'm always open to discussing new projects, collaboration opportunities, or just chatting about technology and education. Feel free to reach out through any of the contact methods above!"
                      : "Я всегда открыт для обсуждения новых проектов, возможностей сотрудничества или просто разговоров о технологиях и образовании. Не стесняйтесь обращаться через любой из указанных выше способов связи!"
                    }
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="mailto:amir.pashayev@example.com"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Send Email' : 'Отправить Email'}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

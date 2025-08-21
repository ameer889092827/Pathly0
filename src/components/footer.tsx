import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/assessment"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Take Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/majors"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Browse Majors
                </Link>
              </li>
              <li>
                <Link
                  href="/progress"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Track Progress
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmaps"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  View Roadmaps
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/career-guide"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Career Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/college-prep"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  College Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About Pathly
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold text-purple-400 mr-4">
              Pathly
            </span>
            <span className="text-gray-400">
              © {currentYear} Pathly. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Helping students discover their perfect college major and plan their
            academic journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
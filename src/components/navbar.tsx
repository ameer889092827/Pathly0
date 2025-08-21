"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { UserCircle, User } from "lucide-react";
import UserProfile from "./user-profile";
import LanguageSwitcher from "./language-switcher";
import NavbarLinksClient from "./navbar-links-client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const supabase = createClient();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
    }

    supabase.auth.getUser().then(({ data }) => {
      const user = data.user;
      if (user) {
        setUserEmail(user.email ?? null);
        const name = (user.user_metadata as any)?.full_name ?? null;
        setUserName(name);
        if (name) {
          localStorage.setItem("userName", name);
        }
      } else {
        setUserEmail(null);
        setUserName(null);
        localStorage.removeItem("userName");
      }
    });
  }, [supabase]);

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold text-purple-600">
          Pathly
        </Link>
        <NavbarLinksClient />
        <LanguageSwitcher />
        <div className="flex gap-4 items-center">
          {userEmail ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              {userName && (
                <div className="hidden md:flex items-center text-sm text-gray-600 mr-4">
                  <User className="w-4 h-4 mr-2 text-purple-600" />
                  {t("nav.welcome")}, <span className="font-medium text-purple-600 ml-1">{userName}</span>
                </div>
              )}
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
"use client"

import Link from "next/link"
import { Facebook, Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-green-50 dark:fill-gray-950"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-green-900 to-green-800 text-white py-12 px-4 md:px-6 lg:px-8 dark:from-green-950 dark:to-green-900 border-t dark:border-green-800 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto relative">
          <div className="grid gap-10 md:grid-cols-12">
            {/* About section */}
            <div className="md:col-span-7">
              <h3 className="text-xl font-bold mb-4 relative inline-block flex items-center">
                <span className="relative z-10">Arqam Hussain</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-green-600 dark:bg-green-700 opacity-40 rounded"></span>
              </h3>
              <p className="text-sm text-white mb-4 leading-relaxed">
                Passionate about creating intuitive digital experiences that solve real-world problems. Specializing in
                web development and UI/UX design with a focus on educational technology.
              </p>

              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-green-200 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=arqamt40@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    arqamt40@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Connect section */}
            <div className="md:col-span-5">
              <h3 className="text-xl font-bold mb-4 relative inline-block flex items-center">
                <span className="relative z-10">Connect With Me</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-green-600 dark:bg-green-700 opacity-40 rounded"></span>
              </h3>

              <div className="flex gap-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/arqam-hussain-%D8%A7%D8%B1%D9%82%D9%85-%D8%AD%D8%B3%DB%8C%D9%86-1a541a28a/"
                  target="_blank"
                  className="bg-green-800 hover:bg-green-700 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 transform dark:bg-green-900 dark:hover:bg-green-800"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/arqam66"
                  target="_blank"
                  className="bg-green-800 hover:bg-green-700 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 transform dark:bg-green-900 dark:hover:bg-green-800"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/arqam.tahir.921/"
                  target="_blank"
                  className="bg-green-800 hover:bg-green-700 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 transform dark:bg-green-900 dark:hover:bg-green-800"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-8 bg-green-800/30 p-4 rounded-lg border border-green-700/30 dark:bg-green-900/30 dark:border-green-700/30">
                <p className="text-sm text-white italic">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-xs text-white mt-2 text-right">— Nelson Mandela</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-green-800/50 dark:border-green-700/50 text-center relative">
            <p className="text-sm text-white">All rights reserved to Arqam Hussain</p>

            {/* Scroll to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="absolute right-0 top-6 bg-green-700 hover:bg-green-600 p-2 rounded-full text-white transition-all duration-300 hover:scale-110 transform dark:bg-green-800 dark:hover:bg-green-700"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}


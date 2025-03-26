"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Compass, Navigation } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { MapBackground } from "@/components/map-background"
import { CompassRose } from "@/components/compass-rose"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-950 dark:text-white relative">
      <MapBackground />

      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 px-4 md:px-6 lg:px-8 border-b border-green-700 shadow-lg dark:from-green-900 dark:to-green-800 dark:border-green-900 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto flex items-center relative">
          <Link href="/" className="flex items-center">
            <Compass className="h-6 w-6 mr-2 text-green-200" />
            <div>
              <h1 className="text-xl font-bold">UOK Map</h1>
              <p className="text-xs text-green-200 flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> University of Karachi Campus Navigator
              </p>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 relative">
        <div className="absolute top-8 right-8 opacity-20 dark:opacity-10 hidden lg:block">
          <CompassRose className="w-40 h-40 text-green-800 dark:text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6 relative inline-block flex items-center">
          <Compass className="h-6 w-6 mr-2" />
          <span className="relative z-10">About University of Karachi</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200 dark:bg-green-800 opacity-40 rounded"></span>
        </h1>

        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/university-gate.png"
              fill
              alt="University of Karachi Main Gate"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  University of Karachi
                </h2>
                <p className="text-sm md:text-base">
                  Established 1951 • One of Pakistan's premier educational institutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] dark:bg-gray-900 dark:border-green-900 bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
              <CardTitle className="text-green-800 dark:text-white flex items-center">
                <Navigation className="h-4 w-4 mr-2 text-green-700 dark:text-green-400" />
                History
              </CardTitle>
            </CardHeader>
            <CardContent className="dark:text-white">
              <p>
                The University of Karachi was established in 1951 as a federal university. It became the university of
                the province of Sindh in 1962 following the implementation of the University of Karachi Act 1961.
              </p>
              <p className="mt-4">
                Today, it is one of the largest universities in Pakistan, with over 800 faculty members and more than
                24,000 students. The university offers a wide range of undergraduate and graduate programs across
                various disciplines.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] dark:bg-gray-900 dark:border-green-900 bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
              <CardTitle className="text-green-800 dark:text-white flex items-center">
                <Navigation className="h-4 w-4 mr-2 text-green-700 dark:text-green-400" />
                Campus
              </CardTitle>
            </CardHeader>
            <CardContent className="dark:text-white">
              <p>
                The University of Karachi campus spans over 1,279 acres (5.18 km²) and is located in the heart of
                Karachi. The campus features numerous academic buildings, research centers, libraries, sports
                facilities, and residential areas.
              </p>
              <p className="mt-4">
                With its sprawling green spaces and modern infrastructure, the campus provides an ideal environment for
                academic pursuits and extracurricular activities.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] dark:bg-gray-900 dark:border-green-900 bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
              <CardTitle className="text-green-800 dark:text-white flex items-center">
                <Navigation className="h-4 w-4 mr-2 text-green-700 dark:text-green-400" />
                Academic Excellence
              </CardTitle>
            </CardHeader>
            <CardContent className="dark:text-white">
              <p>
                The University of Karachi is known for its academic excellence and research contributions. It houses
                numerous departments and research institutes that are at the forefront of innovation and discovery.
              </p>
              <p className="mt-4">
                The university has produced many notable alumni who have made significant contributions in various
                fields including science, arts, politics, and business.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="dark:bg-gray-900 dark:border-green-900 shadow-lg bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-700 to-green-600 text-white dark:from-green-900 dark:to-green-800 border-b border-green-600 dark:border-green-800 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
              <CardTitle className="text-white flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Campus Map
              </CardTitle>
              <CardDescription className="text-green-100">
                An overview of the University of Karachi campus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden h-[400px] mb-4">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="University of Karachi Campus Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-green-700 dark:text-white">
                The University of Karachi campus is divided into several zones, with departments grouped by disciplines.
                Our Campus Navigator tool helps you find the most efficient route to any department from your entry
                gate.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8 p-8 bg-green-100/50 dark:bg-green-900/30 rounded-lg shadow-md border border-green-200 dark:border-green-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400 flex items-center justify-center">
            <Compass className="h-5 w-5 mr-2" />
            Find Your Way Around Campus
          </h2>
          <p className="mb-6 max-w-2xl mx-auto dark:text-white text-green-800">
            Use our Campus Navigator to get directions to any department from your preferred entrance gate. The tool
            provides Google Maps directions to help you navigate the campus efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green-700 hover:bg-green-600 transition-all duration-300 hover:scale-105 dark:bg-green-800 dark:hover:bg-green-700 flex items-center gap-2"
            >
              <Link href="/">
                <Navigation className="h-4 w-4" />
                Go to Navigator
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="dark:bg-green-900/50 dark:border-green-700 dark:text-white hover:bg-green-100 dark:hover:bg-green-800/50 border-green-300 flex items-center gap-2"
            >
              <Link href="/departments">
                <MapPin className="h-4 w-4" />
                View All Departments
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            className="bg-green-700 hover:bg-green-600 transition-all duration-300 hover:scale-105 dark:bg-green-800 dark:hover:bg-green-700 flex items-center gap-2"
          >
            <Link href="/">
              <Compass className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}


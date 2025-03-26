"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Compass, Navigation } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { MapBackground } from "@/components/map-background"
import { CompassRose } from "@/components/compass-rose"

export default function ContactPage() {
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
          <MapPin className="h-6 w-6 mr-2" />
          <span className="relative z-10">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200 dark:bg-green-800 opacity-40 rounded"></span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-green-900 bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
              <CardTitle className="dark:text-white flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-700 dark:text-green-400" />
                Send Us a Message
              </CardTitle>
              <CardDescription className="dark:text-green-200 text-green-700">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium dark:text-white text-green-800">
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="dark:bg-gray-800 dark:border-green-700 border-green-300 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium dark:text-white text-green-800">
                      Last name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="dark:bg-gray-800 dark:border-green-700 border-green-300 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium dark:text-white text-green-800">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="dark:bg-gray-800 dark:border-green-700 border-green-300 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium dark:text-white text-green-800">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject"
                    className="dark:bg-gray-800 dark:border-green-700 border-green-300 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium dark:text-white text-green-800">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] dark:bg-gray-800 dark:border-green-700 border-green-300 dark:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-600 transition-all duration-300 hover:scale-105 dark:bg-green-800 dark:hover:bg-green-700 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-green-900 bg-white border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
              <CardTitle className="dark:text-white flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-green-700 dark:text-green-400" />
                Contact Information
              </CardTitle>
              <CardDescription className="dark:text-green-200 text-green-700">
                Here's how you can reach us directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-700 mt-0.5 dark:text-green-400" />
                <div>
                  <h3 className="font-medium dark:text-white text-green-900 font-semibold">Address</h3>
                  <p className="text-sm text-green-700 mt-1 dark:text-white">
                    University of Karachi
                    <br />
                    University Road
                    <br />
                    Karachi-75270
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-700 mt-0.5 dark:text-green-400" />
                <div>
                  <h3 className="font-medium dark:text-white text-green-900 font-semibold">Phone</h3>
                  <p className="text-sm text-green-700 mt-1 dark:text-white">
                    <a href="tel:+922199261300" className="hover:text-green-900 dark:hover:text-green-300">
                      +92-21-99261300
                    </a>
                    <br />
                    <a href="tel:+922199261301" className="hover:text-green-900 dark:hover:text-green-300">
                      +92-21-99261301
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-700 mt-0.5 dark:text-green-400" />
                <div>
                  <h3 className="font-medium dark:text-white text-green-900 font-semibold">Email</h3>
                  <p className="text-sm text-green-700 mt-1 dark:text-white">
                    <a href="mailto:info@uok.edu.pk" className="hover:text-green-900 dark:hover:text-green-300">
                      info@uok.edu.pk
                    </a>
                    <br />
                    <a href="mailto:support@uok.edu.pk" className="hover:text-green-900 dark:hover:text-green-300">
                      support@uok.edu.pk
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-700 mt-0.5 dark:text-green-400" />
                <div>
                  <h3 className="font-medium dark:text-white text-green-900 font-semibold">Office Hours</h3>
                  <p className="text-sm text-green-700 mt-1 dark:text-white">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="pt-4 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg opacity-0 group-hover:opacity-75 blur transition duration-300"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1505720582095!2d67.11493931500692!3d24.93057498400958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf22becb0f%3A0xd5e50842c5c4867b!2sUniversity%20of%20Karachi!5e0!3m2!1sen!2s!4v1647887573867!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="University of Karachi Map"
                  className="rounded-lg relative z-10"
                ></iframe>
              </div>
            </CardContent>
          </Card>
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


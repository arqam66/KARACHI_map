"use client"

import { useState } from "react"
import { MapPin, Navigation, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { MapBackground } from "@/components/map-background"
import { CompassRose } from "@/components/compass-rose"

export default function Home() {
  const [selectedGate, setSelectedGate] = useState<string | undefined>()
  const [selectedDept, setSelectedDept] = useState<string | undefined>()

  const getDirectionUrl = () => {
    if (!selectedGate || !selectedDept) return "#"

    const department = departmentData.find((d) => d.name === selectedDept)
    if (!department) return "#"

    return department.gates[selectedGate as keyof typeof department.gates] || "#"
  }

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-950 dark:text-white relative">
      <MapBackground />

      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 px-4 md:px-6 lg:px-8 border-b border-green-700 shadow-lg dark:from-green-900 dark:to-green-800 dark:border-green-900 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto flex items-center relative">
          <div className="flex items-center">
            <Compass className="h-6 w-6 mr-2 text-green-200" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">UOK Map</h1>
              <p className="text-sm text-green-200 flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> University of Karachi Campus Navigator
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 relative">
        <div className="absolute top-8 right-8 opacity-20 dark:opacity-10 hidden lg:block">
          <CompassRose className="w-40 h-40 text-green-800 dark:text-green-500" />
        </div>

        <Card className="mb-8 overflow-hidden border-green-200 dark:border-green-900 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] bg-white/80 dark:bg-gray-900/80">
          <CardHeader className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-t-lg dark:from-green-900 dark:to-green-800 border-b border-green-600 dark:border-green-800 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            <CardTitle className="text-2xl flex items-center">
              <Navigation className="h-5 w-5 mr-2" />
              Find Your Way Around Campus
            </CardTitle>
            <CardDescription className="text-green-100">
              Select your entry gate and destination to get directions
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 dark:bg-transparent">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-green-200">I'm entering from:</label>
                <Select onValueChange={setSelectedGate}>
                  <SelectTrigger className="dark:bg-gray-800 dark:border-green-700 border-green-300">
                    <SelectValue placeholder="Select an entrance gate" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 bg-white">
                    <SelectItem value="gate1">Silver Jubilee Gate-1</SelectItem>
                    <SelectItem value="gate2">Staff Gate-2</SelectItem>
                    <SelectItem value="gate3">Maskan Gate-3</SelectItem>
                    <SelectItem value="gate4">Metroville Gate-4 (Golden Jubilee)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-green-200">I'm looking for:</label>
                <Select onValueChange={setSelectedDept}>
                  <SelectTrigger className="dark:bg-gray-800 dark:border-green-700 border-green-300">
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 bg-white">
                    {departmentData.map((dept, index) => (
                      <SelectItem key={index} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              className="mt-6 w-full md:w-auto bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              disabled={!selectedGate || !selectedDept}
              asChild
            >
              <Link href={getDirectionUrl()} target="_blank">
                <MapPin className="h-4 w-4" />
                Get Directions
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400 relative inline-block">
            <span className="relative z-10 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              All Departments
            </span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200 dark:bg-green-800 opacity-40 rounded"></span>
          </h2>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2 dark:bg-gray-800 bg-green-100">
              <TabsTrigger
                value="list"
                className="dark:data-[state=active]:bg-green-800 data-[state=active]:bg-green-300"
              >
                List View
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="dark:data-[state=active]:bg-green-800 data-[state=active]:bg-green-300"
              >
                Table View
              </TabsTrigger>
            </TabsList>
            <TabsContent value="list" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {departmentData.map((dept, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-900 dark:border-green-900 hover:scale-[1.02] transition-all duration-300 bg-white"
                  >
                    <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 p-4 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
                      <CardTitle className="text-lg text-green-900 dark:text-gray-100 flex items-center font-medium">
                        <MapPin className="h-4 w-4 mr-2 text-green-700 dark:text-green-400" />
                        {dept.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-green-700 mb-3 dark:text-white font-medium">Directions from:</p>
                      <div className="grid grid-cols-1 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start dark:bg-gray-800 dark:border-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors border-green-300"
                          asChild
                        >
                          <Link href={dept.gates.gate1} target="_blank">
                            <span className="font-medium">Silver Jubilee Gate-1</span>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start dark:bg-gray-800 dark:border-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors border-green-300"
                          asChild
                        >
                          <Link href={dept.gates.gate2} target="_blank">
                            <span className="font-medium">Staff Gate-2</span>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start dark:bg-gray-800 dark:border-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors border-green-300"
                          asChild
                        >
                          <Link href={dept.gates.gate3} target="_blank">
                            <span className="font-medium">Maskan Gate-3</span>
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="justify-start dark:bg-gray-800 dark:border-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors border-green-300"
                          asChild
                        >
                          <Link href={dept.gates.gate4} target="_blank">
                            <span className="font-medium">Metroville Gate-4</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="table" className="mt-4">
              <div className="overflow-x-auto">
                <Table className="dark:bg-gray-900/80 bg-white border border-green-200 dark:border-green-900 rounded-lg overflow-hidden">
                  <TableHeader className="dark:bg-green-900/50 bg-green-100">
                    <TableRow>
                      <TableHead className="w-[250px] dark:text-green-200 text-green-800">Department</TableHead>
                      <TableHead className="dark:text-green-200 text-green-800">Silver Jubilee Gate-1</TableHead>
                      <TableHead className="dark:text-green-200 text-green-800">Staff Gate-2</TableHead>
                      <TableHead className="dark:text-green-200 text-green-800">Maskan Gate-3</TableHead>
                      <TableHead className="dark:text-green-200 text-green-800">Metroville Gate-4</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departmentData.map((dept, index) => (
                      <TableRow
                        key={index}
                        className="dark:border-green-900/50 border-green-200 dark:hover:bg-green-900/20 hover:bg-green-50"
                      >
                        <TableCell className="font-medium dark:text-white">{dept.name}</TableCell>
                        <TableCell>
                          <Button
                            variant="link"
                            size="sm"
                            className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300"
                            asChild
                          >
                            <Link href={dept.gates.gate1} target="_blank">
                              View Route
                            </Link>
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="link"
                            size="sm"
                            className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300"
                            asChild
                          >
                            <Link href={dept.gates.gate2} target="_blank">
                              View Route
                            </Link>
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="link"
                            size="sm"
                            className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300"
                            asChild
                          >
                            <Link href={dept.gates.gate3} target="_blank">
                              View Route
                            </Link>
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="link"
                            size="sm"
                            className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300"
                            asChild
                          >
                            <Link href={dept.gates.gate4} target="_blank">
                              View Route
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Card className="mb-8 dark:bg-gray-900 dark:border-green-900 overflow-hidden bg-white border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 dark:bg-green-900/50 border-b border-green-300 dark:border-green-800">
            <CardTitle className="text-xl text-green-900 dark:text-gray-100 flex items-center font-medium">
              <Compass className="h-5 w-5 mr-2 text-green-700 dark:text-green-400" />
              About University of Karachi
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-6">
                <p className="mb-4 dark:text-white leading-relaxed">
                  The University of Karachi (UoK) is one of Pakistan's largest universities, located in Karachi, Sindh,
                  Pakistan. It was established in 1951 and offers a wide range of undergraduate and graduate programs.
                </p>
                <p className="dark:text-white leading-relaxed">
                  The campus spans over 1,279 acres and houses numerous academic departments, research centers, and
                  facilities. This navigation tool helps students, faculty, and visitors find their way around the
                  expansive campus.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/70 dark:text-green-100">
                    Founded 1951
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/70 dark:text-green-100">
                    1,279 Acres
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/70 dark:text-green-100">
                    24,000+ Students
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/70 dark:text-green-100">
                    800+ Faculty
                  </span>
                </div>
              </div>
              <div className="h-[300px] md:h-auto relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <Image
                  src="/images/university-gate.png"
                  fill
                  alt="University of Karachi Main Gate"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20 flex items-end p-4">
                  <div className="text-white text-sm">Main Entrance Gate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

// Sample data for departments
const departmentData = [
  {
    name: "Department of General History",
    gates: {
      gate1: "https://goo.gl/maps/jHNxATn5kQTJqe988",
      gate2: "https://goo.gl/maps/gykj9Y6JYWrFXW4b8",
      gate3: "https://goo.gl/maps/4AqxQZE4ZDsbVs427",
      gate4: "https://goo.gl/maps/MxumiEYumLwJoq6k7",
    },
  },
  {
    name: "Department of Economics",
    gates: {
      gate1: "https://goo.gl/maps/wnWdSPjWQsLmsq3x9",
      gate2: "https://goo.gl/maps/9K87edzK6sLxLwPM9",
      gate3: "https://goo.gl/maps/X2K9EKLhpi5kT3gq5",
      gate4: "https://goo.gl/maps/sk1bb9ixvQ5CEetN6",
    },
  },
  {
    name: "Department of Library & Information Science",
    gates: {
      gate1: "https://goo.gl/maps/8d8jwh69S7bsG6Rr9",
      gate2: "https://goo.gl/maps/NZ1pEAPJxZ2K7Cr56",
      gate3: "https://goo.gl/maps/tba1eDaSvUBcmppo8",
      gate4: "https://goo.gl/maps/Y9pQ5kRAfnybqoYv6",
    },
  },
  {
    name: "Department of Islamic Learning",
    gates: {
      gate1: "https://goo.gl/maps/iQC1LzkAD2oXg2kXA",
      gate2: "https://goo.gl/maps/ugNifqwdFNarFi6J9",
      gate3: "https://goo.gl/maps/H7Chmd112PSqbuJa9",
      gate4: "https://goo.gl/maps/7P21JPBNxYXhf8go8",
    },
  },
  {
    name: "Women's Studies Centre",
    gates: {
      gate1: "https://goo.gl/maps/CzTuPuZ6t4kqLwCT6",
      gate2: "https://goo.gl/maps/nDxSc1Tsh7Fv9X766",
      gate3: "https://goo.gl/maps/UF5FzZJj6F4Eu8pA8",
      gate4: "https://goo.gl/maps/pDyudxQA2kzwGUNc9",
    },
  },
  {
    name: "Department of Mathematics",
    gates: {
      gate1: "https://goo.gl/maps/Af8VPFi6ZSMaGUAq9",
      gate2: "https://goo.gl/maps/yyBAH332CfpCow1J6",
      gate3: "https://goo.gl/maps/H7tbWtWUwZSo3gy28",
      gate4: "https://goo.gl/maps/a9swxzGGwuSck2MY7",
    },
  },
]


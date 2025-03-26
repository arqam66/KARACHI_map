"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Compass, Navigation } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { MapBackground } from "@/components/map-background"
import { CompassRose } from "@/components/compass-rose"

export default function DepartmentsPage() {
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 relative inline-block flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="relative z-10">All Departments</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200 dark:bg-green-800 opacity-40 rounded"></span>
            </h1>
            <p className="text-green-700 dark:text-white ml-8">
              Find directions to any department from all campus gates
            </p>
          </div>
        </div>

        <Card className="dark:bg-gray-900 dark:border-green-900 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-700 to-green-600 text-white dark:from-green-900 dark:to-green-800 border-b border-green-600 dark:border-green-800 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            <CardTitle className="flex items-center">
              <Navigation className="h-5 w-5 mr-2" />
              University of Karachi Departments
            </CardTitle>
            <CardDescription className="text-green-100">
              Click on "View Route" to get Google Maps directions from your selected gate
            </CardDescription>
          </CardHeader>
          <CardContent className="dark:bg-transparent">
            <div className="overflow-x-auto">
              <Table className="border border-green-200 dark:border-green-900 rounded-lg overflow-hidden">
                <TableHeader className="bg-green-100 dark:bg-green-900/50">
                  <TableRow>
                    <TableHead className="w-[300px] text-green-900 dark:text-white font-semibold">Department</TableHead>
                    <TableHead className="text-green-900 dark:text-white font-semibold">
                      Silver Jubilee Gate-1
                    </TableHead>
                    <TableHead className="text-green-900 dark:text-white font-semibold">Staff Gate-2</TableHead>
                    <TableHead className="text-green-900 dark:text-white font-semibold">Maskan Gate-3</TableHead>
                    <TableHead className="text-green-900 dark:text-white font-semibold">Metroville Gate-4</TableHead>
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
                          className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300 flex items-center gap-1"
                          asChild
                        >
                          <Link href={dept.gates.gate1} target="_blank">
                            <MapPin className="h-3 w-3" />
                            View Route
                          </Link>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="link"
                          size="sm"
                          className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300 flex items-center gap-1"
                          asChild
                        >
                          <Link href={dept.gates.gate2} target="_blank">
                            <MapPin className="h-3 w-3" />
                            View Route
                          </Link>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="link"
                          size="sm"
                          className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300 flex items-center gap-1"
                          asChild
                        >
                          <Link href={dept.gates.gate3} target="_blank">
                            <MapPin className="h-3 w-3" />
                            View Route
                          </Link>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="link"
                          size="sm"
                          className="dark:text-green-400 text-green-700 hover:text-green-900 dark:hover:text-green-300 flex items-center gap-1"
                          asChild
                        >
                          <Link href={dept.gates.gate4} target="_blank">
                            <MapPin className="h-3 w-3" />
                            View Route
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

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

// Full department data
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
  {
    name: "Department of Applied Chemistry",
    gates: {
      gate1: "https://goo.gl/maps/z5HdB8USVUzwajJb8",
      gate2: "https://goo.gl/maps/6RxXJCvW7cwPzeHV9",
      gate3: "https://goo.gl/maps/HSNUBM8waZMHG84W7",
      gate4: "https://goo.gl/maps/MxwQpc2mRRSLERiy5",
    },
  },
  {
    name: "Department of Physiology",
    gates: {
      gate1: "https://goo.gl/maps/CAXKqQ5S7KpoeUfPA",
      gate2: "https://goo.gl/maps/o5Ya45bRmNqcxrpu6",
      gate3: "https://goo.gl/maps/FxTEVphcS666CZER8",
      gate4: "https://goo.gl/maps/CipBzbVsu4gUFexf9",
    },
  },
  {
    name: "Department of Statistics",
    gates: {
      gate1: "https://goo.gl/maps/xgU7S8UBTiSN4W1n9",
      gate2: "https://goo.gl/maps/TymAbhFtY4pqmnzX8",
      gate3: "https://goo.gl/maps/84mAT2ccydFvQDqK7",
      gate4: "https://goo.gl/maps/fEXRPcpiYF1dvpXs6",
    },
  },
  {
    name: "Department of Agriculture & Agri. Bus. Mng.",
    gates: {
      gate1: "https://maps.app.goo.gl/6XvWxgpJYV9Fx24z8",
      gate2: "https://maps.app.goo.gl/oHBDaaQCikzBXrBW8",
      gate3: "https://maps.app.goo.gl/EXvr19N1vvPSXgA88",
      gate4: "https://maps.app.goo.gl/5AiFvYQM33DSev5Q7",
    },
  },
  {
    name: "Institute of Environmental Studies",
    gates: {
      gate1: "https://goo.gl/maps/qEV6V6L5ewcb76336",
      gate2: "https://goo.gl/maps/ikwTivR6XkmKKPbo9",
      gate3: "https://goo.gl/maps/c1Srvtarm4hpHkuJ7",
      gate4: "https://goo.gl/maps/JDskjxXTYDP1SC2f7",
    },
  },
  {
    name: "Department of Physics",
    gates: {
      gate1: "https://goo.gl/maps/toTMV1gkZSwTh7CRA",
      gate2: "https://goo.gl/maps/7RVkv5EzKm3ZWTCS6",
      gate3: "https://goo.gl/maps/R2tdZHBhYXGb8WTg6",
      gate4: "https://goo.gl/maps/nhWs1X4kpiZak6ZC7",
    },
  },
]


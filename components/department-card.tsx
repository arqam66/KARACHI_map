"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink } from "lucide-react"

interface DepartmentCardProps {
  department: {
    name: string
    gates: {
      gate1: string
      gate2: string
      gate3: string
      gate4: string
    }
  }
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const [selectedGate, setSelectedGate] = useState<string | undefined>()

  const getGateUrl = () => {
    if (!selectedGate) return "#"

    switch (selectedGate) {
      case "gate1":
        return department.gates.gate1
      case "gate2":
        return department.gates.gate2
      case "gate3":
        return department.gates.gate3
      case "gate4":
        return department.gates.gate4
      default:
        return "#"
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 p-4 dark:from-green-900 dark:to-green-800">
        <CardTitle className="text-lg dark:text-white">{department.name}</CardTitle>
        <CardDescription className="dark:text-green-100">Select your entry gate to get directions</CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <Select onValueChange={setSelectedGate}>
          <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <SelectValue placeholder="Select an entrance gate" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
            <SelectItem value="gate1">Silver Jubilee Gate-1</SelectItem>
            <SelectItem value="gate2">Staff Gate-2</SelectItem>
            <SelectItem value="gate3">Maskan Gate-3</SelectItem>
            <SelectItem value="gate4">Metroville Gate-4</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="w-full bg-green-700 hover:bg-green-600 transition-all duration-300 hover:shadow-md dark:bg-green-800 dark:hover:bg-green-700"
          disabled={!selectedGate}
          asChild
        >
          <Link href={getGateUrl()} target="_blank" rel="noopener noreferrer">
            Get Directions
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}


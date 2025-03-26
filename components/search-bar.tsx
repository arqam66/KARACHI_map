"use client"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Department {
  name: string
  gates: {
    gate1: string
    gate2: string
    gate3: string
    gate4: string
  }
}

interface SearchBarProps {
  departments: Department[]
  className?: string
}

export function SearchBar({ departments, className = "" }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Department[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Filter departments based on search query
    if (searchQuery.trim() === "") {
      setSuggestions([])
    } else {
      const filteredDepts = departments.filter((dept) => dept.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setSuggestions(filteredDepts)
    }
  }, [searchQuery, departments])

  useEffect(() => {
    // Close suggestions when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative w-full max-w-md ${className}`} ref={searchRef}>
      <Input
        placeholder="Search departments..."
        className="bg-white/10 border-green-700 text-white placeholder:text-green-200 pr-10 dark:bg-gray-800 dark:border-gray-700 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full text-white/70 hover:text-white hover:bg-transparent"
      >
        <Search className="h-4 w-4" />
      </Button>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {suggestions.map((dept, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-green-100 dark:hover:bg-green-900/30 cursor-pointer text-gray-800 dark:text-white"
                onClick={() => {
                  setSearchQuery(dept.name)
                  setShowSuggestions(false)
                }}
              >
                {dept.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}


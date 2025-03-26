export function CompassRose({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" fillOpacity="0.3" />

        {/* North */}
        <path d="M50 5L53 15H47L50 5Z" fill="currentColor" />
        <text x="50" y="25" textAnchor="middle" fontSize="8" fill="currentColor">
          N
        </text>

        {/* East */}
        <path d="M95 50L85 53V47L95 50Z" fill="currentColor" />
        <text x="75" y="52" textAnchor="middle" fontSize="8" fill="currentColor">
          E
        </text>

        {/* South */}
        <path d="M50 95L47 85H53L50 95Z" fill="currentColor" />
        <text x="50" y="80" textAnchor="middle" fontSize="8" fill="currentColor">
          S
        </text>

        {/* West */}
        <path d="M5 50L15 47V53L5 50Z" fill="currentColor" />
        <text x="25" y="52" textAnchor="middle" fontSize="8" fill="currentColor">
          W
        </text>

        {/* Lines */}
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="20" y1="80" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    </div>
  )
}


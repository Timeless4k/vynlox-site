import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Users, 
  Target, 
  Phone, 
  Calendar,
  PlayCircle,
  FileText,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  Star,
  LucideIcon
} from "lucide-react"

const navigation = [
  { 
    name: "Services", 
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "AI Workshop",
        href: "/workshop",
        description: "Free 60-min session on AI automation",
        icon: Users,
        badge: "Free" as const
      },
      {
        name: "Strategy Audit",
        href: "/audit",
        description: "90-min deep dive into your processes",
        icon: Target,
        badge: "Popular" as const
      },
      {
        name: "Done-for-You",
        href: "/done-for-you",
        description: "We build and manage your AI systems",
        icon: Zap,
        badge: "Premium" as const
      }
    ]
  },
  { 
    name: "Resources", 
    href: "/resources",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Case Studies",
        href: "/case-studies",
        description: "Real results from real founders",
        icon: Award,
        badge: undefined
      },
      {
        name: "AI Readiness Quiz",
        href: "/quiz",
        description: "5-min assessment of your AI potential",
        icon: FileText,
        badge: undefined
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Latest insights on AI automation",
        icon: PlayCircle,
        badge: undefined
      }
    ]
  },
  { name: "About", href: "/about" },
]

const quickActions = [
  {
    name: "Book Free Call",
    href: "/book-call",
    icon: Phone,
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Join Workshop",
    href: "/workshop",
    icon: Calendar,
    color: "from-purple-500 to-fuchsia-500"
  }
]

// Add type definition for dropdown items
type DropdownItem = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  badge?: "Free" | "Popular" | "Premium";
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      setScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-xl" 
          : "bg-transparent"
      }`}
    >
      {/* Top notification bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-sm py-2 px-4 text-center overflow-hidden"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>🎉 Free AI Workshop - Next session: Tomorrow 2 PM EST</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-3"
                whileHover={{ rotate: 5 }}
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 group-hover:from-purple-200 group-hover:to-fuchsia-200 transition-all duration-300">
                Vynlox
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group-hover:bg-gray-800/50 rounded-lg">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group/item"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center group-hover/item:from-purple-500/30 group-hover/item:to-fuchsia-500/30 transition-colors">
                                    <dropdownItem.icon className="w-5 h-5 text-purple-400" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium text-white group-hover/item:text-purple-200 transition-colors">
                                        {dropdownItem.name}
                                      </h4>
                                      {dropdownItem.badge && (
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                                          dropdownItem.badge === 'Free' ? 'bg-emerald-500/20 text-emerald-400' :
                                          dropdownItem.badge === 'Popular' ? 'bg-orange-500/20 text-orange-400' :
                                          'bg-purple-500/20 text-purple-400'
                                        }`}>
                                          {dropdownItem.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Quick Actions */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-gray-700">
              {quickActions.map((action) => (
                <motion.div key={action.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${action.color} text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <action.icon className="w-4 h-4" />
                    {action.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-b border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <dropdownItem.icon className="w-5 h-5 text-purple-400" />
                                <div>
                                  <div className="font-medium">{dropdownItem.name}</div>
                                  <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Quick Actions */}
              <div className="pt-6 border-t border-gray-800 space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navigation.length + index) * 0.1 }}
                  >
                    <Link
                      href={action.href}
                      className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${action.color} text-white font-medium rounded-lg shadow-lg`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <action.icon className="w-5 h-5" />
                      {action.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-gray-800"
              >
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>4.9/5 rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>500+ clients</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{"< 2hr response"}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
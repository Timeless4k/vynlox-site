import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/vynlox",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/vynlox",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/vynlox",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:hello@vynlox.com",
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold gradient-text">Vynlox</span>
            </Link>
            <p className="text-muted max-w-xs">
              Smart, builder-led AI consulting studio helping founders scale their businesses with cutting-edge automation and AI solutions.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted hover:text-emerald transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Stay Updated</h3>
            <p className="mt-4 text-muted">Get the latest insights on AI and automation.</p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-border bg-dark px-4 py-2 text-white placeholder-muted focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} Vynlox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
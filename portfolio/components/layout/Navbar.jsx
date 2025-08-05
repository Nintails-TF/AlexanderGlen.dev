import Link from "next/link"; // Necessary to create links between pages.

// TODO: Mobile Responsiveness - Turn horizontal navbar into hamburger menu when screen size is limited.

/* 
The NavLinks function purpose is to create an ordered list of navigation links within our Navbar.
*/
function NavLinks() {
  const links = [
    // Links are local and not global scope, to prevent overhead.
    // Page links are dynamically created, then displayed within our navbar.
    { href: "/projects", label: "Projects" }, // label = Displayed text.
    { href: "/writeups", label: "Write-ups" },
    { href: "/blog", label: "Blog" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <ul className="flex space-x-6"> {/* Using ul instead of div to aid screen readers/accessbility tools. */}
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="hover:text-blue-400">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full bg-gray-900 text-white z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Outer div acts as a centered container, with slight horizontal padding.*/}
        <div className="flex justify-between items-center h-16">
          {/* Inner div is a flexbox, so child elements are equal distance horizontally.*/}
          <Link href="/" className="font-bold text-xl">
            Alexander Glen
          </Link>
          {/* Branding/Logo link, separate from other list items and larger.*/}
          <div className="flex space-x-6">
            <NavLinks />
            {/* Calling our NavLink function, to render our list items.*/}
          </div>
        </div>
      </div>
    </nav>
  );
}

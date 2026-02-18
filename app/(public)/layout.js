import Link from 'next/link';

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVIGATION BAR - Matches Sitemap Links */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 border border-gray-400 flex items-center justify-center font-bold text-[10px]">LOGO</div>
            <span className="font-bold text-xl tracking-tighter">EVENT<span className="text-gray-500">SYNC</span></span>
          </Link>

          {/* SITEMAP NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/services" className="hover:text-black transition">Services</Link>
            <Link href="/gallery" className="hover:text-black transition">Gallery</Link>
            <Link href="/packages" className="hover:text-black transition">Packages</Link>
            <Link href="/contact" className="hover:text-black transition">Contact Us</Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:underline">
              Login
            </Link>
            <Link 
              href="/quote" 
              className="bg-black text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-gray-800 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER - As seen in Sitemap/Wireframe */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-12 h-12 bg-gray-300 border border-gray-400 mb-4 flex items-center justify-center font-bold text-[10px]">LOGO</div>
            <p className="text-xs text-gray-500">© 2026 HQ Events Management Services. Serving Davao City since 2017.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-sm mb-2 text-gray-400 uppercase">Quick Links</h4>
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/services" className="text-sm hover:underline">Services</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-sm mb-2 text-gray-400 uppercase">Resources</h4>
            <Link href="/gallery" className="text-sm hover:underline">Gallery</Link>
            <Link href="/packages" className="text-sm hover:underline">Packages</Link>
            <Link href="/quote" className="text-sm hover:underline">Request a Quote</Link>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2 text-gray-400 uppercase">Contact</h4>
            <p className="text-sm text-gray-600">Davao City, Philippines</p>
            <p className="text-sm text-gray-600">Messenger: HQ Productions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
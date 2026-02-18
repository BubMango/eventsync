import Link from 'next/link';

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl tracking-tighter uppercase">
            HQ<span className="text-gray-400 font-light text-xl italic ml-1 underline underline-offset-4 decoration-1 decoration-gray-300">Productions</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/about" className="hover:text-gray-500 transition">About</Link>
            <Link href="/services" className="hover:text-gray-500 transition">Services</Link>
            <Link href="/gallery" className="hover:text-gray-500 transition">Gallery</Link>
            <Link href="/packages" className="hover:text-gray-500 transition">Packages</Link>
            <Link href="/contact" className="hover:text-gray-500 transition">Contact Us</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium px-4">Login</Link>
            <Link href="/quote" className="bg-black text-white px-6 py-2 text-sm rounded-sm font-medium hover:bg-zinc-800 transition">
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="bg-zinc-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="font-bold text-xl mb-4">HQ PRODUCTIONS</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Davao's premier event logistics and management service. Serving since 2017.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Explore</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/packages">Packages</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Support</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/contact">Contact</Link>
              <Link href="/quote">Quote Request</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Location</h4>
            <p className="text-sm text-gray-600 mb-2">Davao City, Philippines</p>
            <p className="text-sm text-gray-600 underline italic">HQ Events Management Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
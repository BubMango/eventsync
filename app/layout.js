import "./globals.css";

export const metadata = {
  title: "EventSync | HQ Productions",
  description: "Role-based event management for Davao City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
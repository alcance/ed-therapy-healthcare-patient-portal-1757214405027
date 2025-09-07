import './globals.css'

export const metadata = {
  title: 'ed-therapy-healthcare-patient-portal-1757214405027 - Healthcare Portal',
  description: 'Dont feel pain again',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl text-blue-600">ed-therapy-healthcare-patient-portal-1757214405027</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center">
            <p>© 2025 ed-therapy-healthcare-patient-portal-1757214405027 - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
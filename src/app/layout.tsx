export default function Layout({ children }) {
  return (
    <html>
      <body>
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-lg py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">ModeHemsida</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-gray-500 cursor-pointer">Hem</li>
            <li className="hover:text-gray-500 cursor-pointer">Uppladdningar</li>
            <li className="hover:text-gray-500 cursor-pointer">Profil</li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
    </body>
    </html>
  );
}

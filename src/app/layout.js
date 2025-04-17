import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by me',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6"> 
          <main className="flex flex-col items-center justify-start px-6 md:px-8 gap-32">
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by me',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <main className="flex flex-col items-center justify-start px-6 md:px-8 gap-32">
          {children}
        </main>
      </body>
    </html>
  );
}

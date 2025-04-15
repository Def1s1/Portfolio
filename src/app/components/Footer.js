export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-10 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">
          Have a project in mind?
        </h2>

        <a
          href="mailto:solution.b1214@gmail.com"
          className="inline-block text-[#00FF6C] font-semibold text-sm sm:text-base underline underline-offset-4 hover:text-white transition-all mb-8"
        >
          solution.b1214@gmail.com
        </a>

        <div className="text-sm text-white/60 mt-10">
          © 2025 Anton Ivakhiv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

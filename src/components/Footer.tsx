export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-[14px] font-bold">Camil Hennebert</p>
          <p className="text-[13px] text-text-secondary">Data Analyst</p>
        </div>
        <div className="flex gap-6 text-[13px]">
          <a
            href="mailto:camilhennebertpro@gmail.com"
            className="text-text-secondary hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/camil-hennebert-1532661a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Camil444"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

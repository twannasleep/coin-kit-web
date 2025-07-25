import Image from 'next/image';
import ConnectButton from '@/components/ConnectButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Coin Kit Web</h1>
        <p className="text-lg mb-4">Connect your wallet using Reown AppKit</p>

        {/* Connect Button Component */}
        <div className="my-8">
          <ConnectButton />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://cloud.reown.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel logomark"
              className="dark:invert"
              height={20}
              src="/vercel.svg"
              width={20}
            />
            Get Project ID
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://docs.reown.com/appkit/next/core/installation"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read Docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.reown.com/appkit/next/core/hooks"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="File icon" height={16} src="/file.svg" width={16} />
          Learn Hooks
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://cloud.reown.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="Window icon" height={16} src="/window.svg" width={16} />
          Reown Cloud
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://reown.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="Globe icon" height={16} src="/globe.svg" width={16} />
          Go to reown.com →
        </a>
      </footer>
    </div>
  );
}

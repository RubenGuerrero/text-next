import Link from "next/link";
import Container from "./container";

import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="w-56 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
          a
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="/img/logo.svg"
              alt="ChitChat Logo"
            />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">
              You have a new message!
            </p>
          </div>
        </div>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <Link href="/" locale="es">
          <a>Spanish</a>
        </Link>
      </Container>
    </footer>
  );
}

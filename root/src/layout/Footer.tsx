import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="dark:text-zinc-300 dark:bg-zinc-800 bg-zinc-200">
      <div className="w-11/12 sm:w-8/12 mx-auto p-6 text-center font-[Vitro_core]">
        <span className="text-sm font-semibold">
          2023 &copy;{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ferv0r2"
            className="mx-1 hover:text-indigo-600"
          >
            Ferv0r2
          </a>{" "}
          ALL LISENCE RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

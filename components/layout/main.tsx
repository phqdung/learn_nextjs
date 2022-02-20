import { LayoutProps } from "@/models/common";
import Link from "next/link";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div data-layoutid="main-layout">
      <h1>Main Layout</h1>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
};

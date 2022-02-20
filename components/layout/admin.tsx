import { LayoutProps } from "@/models/common";
import Link from "next/link";
import { FC } from "react";

export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div data-layoutid="admin-layout">
      <h1>Admin Layout</h1>

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

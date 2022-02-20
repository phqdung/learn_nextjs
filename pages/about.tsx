import { AdminLayout, MainLayout } from "@/components/layout";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { NextPageWithLayout } from "../models";

export interface AboutPageProps {}

const AboutPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>This is a about page</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

AboutPage.Layout = AdminLayout;

export default AboutPage;

//import Header from "@/components/common/header";
import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

const Contact: FC = () => {
  const [postList, setPostList] = useState([]);

  const router = useRouter();
  console.log("router query:", router.query);

  let page: number = !router.query?.page ? 1 : Number(router.query?.page);

  useEffect(() => {
    (async () => {
      //if (!router.query?.page) return;

      console.log("begin fetch data from client");
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  const handleNextPage = () => {
    router.push(
      {
        pathname: "/contact",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <h1>This is about page</h1>

      <Header />

      <ul className="post-list">
        {postList.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>

      <button onClick={handleNextPage}>next page</button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log("get static props");

  return {
    props: {},
  };
};

export default Contact;

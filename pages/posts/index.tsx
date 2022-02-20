import { GetStaticProps } from "next";
import React, { FC } from "react";
import Link from "next/link";

export interface PostListPageProps {
  posts: any[];
}

const PostListPage: React.FC<PostListPageProps> = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async () => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};

export default PostListPage;

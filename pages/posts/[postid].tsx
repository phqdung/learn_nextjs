import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";

export interface PostDetailPageProps {
  post: any;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ post }) => {
  const router = useRouter();

  console.log("isFallback: ", router.isFallback);
  if (router.isFallback) {
    return <div style={{ fontSize: "2rem" }}>Loading...</div>;
  }

  if (!post) return null;

  return (
    <div>
      <p>
        <strong>id</strong>: {post.id}
      </p>
      <p>
        <strong>title</strong>: {post.title}
      </p>
      <p>
        <strong>author</strong>: {post.author}
      </p>
      <p>
        <strong>description</strong>: {post.description}
      </p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // this function will be excuted on build time
  //fetch data
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postid: post.id } })),
    fallback: true, // false or 'blocking', true
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  // this function will be excuted on build time
  console.log("render static page with id = ", context.params?.postid);
  const postid = context.params?.postid;

  let post = null;
  if (postid) {
    const response = await fetch(
      `https://js-post-api.herokuapp.com/api/posts/${postid}`
    );
    post = await response.json();
    console.log("post: ", post);
  }

  await new Promise((res) => setTimeout(res, 3000));

  if (!post || Object.keys(post).length === 0)
    return {
      notFound: true,
    };

  return {
    props: {
      post: post,
    },
    revalidate: 60,
  };
};

export default PostDetailPage;

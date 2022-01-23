import { useRouter } from "next/router";
import React, { FC } from "react";

export interface PostDetailPageProps {}

const PostDetailPage: React.FC<PostDetailPageProps> = () => {
  const router = useRouter();

  return <div>Post Detail Page with {JSON.stringify(router.query)}</div>;
};

export default PostDetailPage;

import { useRouter } from "next/router";
import React, { FC } from "react";

export interface PostSlugPageProps {}

const PostSlugPage: React.FC<PostSlugPageProps> = () => {
  const router = useRouter();

  return <div>Post Detail Slug Page with {JSON.stringify(router.query)}</div>;
};

export default PostSlugPage;

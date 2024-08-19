import Post from "./post";
import { PostContext } from "./context";
import { Key } from "react";
import Comment from "./Comment";

export default function Project() {
  const data = PostContext();
  console.log(data);

  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-LightGray text-base">
      <div className="mt-12 w-[650px]">
        {/* {Posts.comments.map((comment: { id: Key | null | undefined }) => (
          <Post key={comment.id} comment={comment} />
        ))} */}

        <Comment />
      </div>
    </div>
  );
}

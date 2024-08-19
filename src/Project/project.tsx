import Post from "./post";
import { usePostContext } from "./context";
import Comment from "./Comment";
import { Key } from "react";

export default function Project() {
  const data = usePostContext();
  const Posts = data[0];
  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-LightGray text-base">
      <div className="mt-12 w-[650px]">
        {Posts.comments.map((comment: { id: Key | null | undefined }) => (
          <Post key={comment.id} comment={comment} />
        ))}

        <Comment />
      </div>
    </div>
  );
}

import Post from "./post";
import useLocalStorage from "../components/useLocalStorage";
import Posts from "/data.json";
import { Key } from "react";

export default function Project() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-LightGray text-base">
      <div className="mt-12 w-[650px]">
        {Posts.comments.map((comment: { id: Key | null | undefined }) => (
          <Post key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

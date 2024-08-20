import Post from "./post";
import { usePostContext } from "./context";
import MakeComment from "./Comment";

export default function Project() {
  const data = usePostContext();
  const Posts = data[0];
  // console.log(data);
  console.log(Posts);
  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-LightGray text-base">
      <div className="mt-12 w-[650px]">
        <div className="flex flex-col gap-5">
          {Posts.comments.map((comment) => (
            <Post key={comment.id} comment={comment} />
          ))}
        </div>

        <MakeComment user={Posts.currentUser} />
      </div>
    </div>
  );
}

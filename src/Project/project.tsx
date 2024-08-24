import Post from "./post";
import { usePostContext } from "./context";
import MakeComment from "./Comment";

export default function Project() {
  const { comments, currentUser } = usePostContext();
  // console.log(comments, currentUser);
  // const Posts = data;

  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-LightGray text-base">
      <div className="mt-12 w-[650px]">
        <div className="flex flex-col gap-5">
          {comments.map((comment) => (
            <Post key={comment.id} comment={comment} />
          ))}
        </div>

        <MakeComment replying={false} id={0} user={currentUser} />
      </div>
    </div>
  );
}

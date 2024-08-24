import { Reply } from "./context";
import Post from "./post";
interface ReplyProps {
  replies: Reply[];
}
export default function ReplyComponent({ replies }: ReplyProps) {
  // console.log(replies);
  return (
    <div className="flex py-5">
      <div className="mx-10 max-h-max w-1 rounded-md bg-neutral-GrayishBlue/40"></div>
      <div className="flex w-full flex-col gap-5">
        {replies.map((reply) => (
          <Post key={reply.id} comment={reply} />
        ))}
      </div>
    </div>
  );
}

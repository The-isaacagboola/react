import { useEffect, useState } from "react";
import { usePostContext } from "./context";
import { Reply } from "./context";
interface Image {
  png: string;
  webp: string;
}

interface User {
  image: Image;
  username: string;
}

type CommentProps = {
  user: User;
  replying: boolean;
  replyingTo?: string;
  id: number;
  setOpenReplyBox?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MakeComment({
  replying = false,
  replyingTo,
  user,
  id,
  setOpenReplyBox,
}: CommentProps) {
  const delegate = usePostContext();
  const { makeNewPost, insertReply, next } = delegate;

  const [typedComment, setTypedComment] = useState("");
  const [template, setTemplate] = useState<Reply>({
    id: next + 1,
    content: typedComment,
    createdAt: Date.now(),
    score: 0,
    replyingTo: replyingTo,
    user: {
      image: {
        png: user.image.png,
        webp: user.image.webp,
      },
      username: user.username,
    },
  });

  function applyComment(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTypedComment(e.target.value);
  }

  function sendPost() {
    console.log(typedComment, template);
    if (typedComment.trim() !== "") {
      makeNewPost(template);
      setTypedComment("");
    } else return;
  }

  function sendReply(id: number) {
    if (typedComment.trim() !== "" && setOpenReplyBox && replyingTo) {
      setTemplate((prevTemp) => ({ ...prevTemp, replyingTo: replyingTo }));
      insertReply(id, template);
      setTypedComment("");
      setOpenReplyBox(false);
    } else return;
  }

  useEffect(() => {
    setTemplate((prev) => ({
      ...prev,
      content: typedComment,
    }));
  }, [typedComment]);
  return (
    <div className="mb-6 mt-4 flex gap-4 rounded-lg bg-neutral-White p-4">
      <img
        className="h-[40px] w-[40px]"
        src={user.image.png}
        alt="image of user"
      />

      <textarea
        className="border-primary max-h-[80px] min-h-20 w-full rounded-lg border-2 p-2 text-neutral-GrayishBlue/60 outline-none"
        value={typedComment}
        placeholder="Add a comment..."
        onChange={applyComment}
      />

      <button
        className="h-fit rounded-lg bg-primary-ModerateBlue px-4 py-2 text-neutral-VeryLightGray"
        onClick={replying ? () => sendReply(id) : sendPost}
      >
        SEND
      </button>
    </div>
  );
}

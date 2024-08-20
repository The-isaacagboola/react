import { useEffect, useState } from "react";
import { Comment, usePostContext } from "./context";
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
};

export default function MakeComment({ user }: CommentProps) {
  const delegate = usePostContext();

  const sendPostFn = delegate[2];

  const [typedComment, setTypedComment] = useState("");
  const [template, setTemplate] = useState<Comment>({
    id: 1,
    content: typedComment,
    createdAt: Date.now(),
    score: 0,
    user: {
      image: {
        png: user.image.png,
        webp: user.image.webp,
      },
      username: user.username,
    },
    replies: [],
  });

  function applyComment(e) {
    setTypedComment(e.target.value);
  }

  function sendPost() {
    console.log(typedComment, template);
    sendPostFn(template);
  }

  useEffect(() => {
    setTemplate((prev) => ({
      ...prev,
      content: typedComment,
    }));
  }, [typedComment]);
  return (
    <div className="mt-4 flex gap-4 rounded-lg bg-neutral-White p-4">
      <img
        className="h-[40px] w-[40px]"
        src={user.image.png}
        alt="image of user"
      />

      <textarea
        className="border-primary max-h-[80px] min-h-20 w-full rounded-lg border-2 p-2 text-neutral-GrayishBlue/60 outline-none"
        placeholder="Add a comment..."
        onChange={applyComment}
      />

      <button
        className="h-fit rounded-lg bg-primary-ModerateBlue px-4 py-2 text-neutral-VeryLightGray"
        onClick={sendPost}
      >
        SEND
      </button>
    </div>
  );
}

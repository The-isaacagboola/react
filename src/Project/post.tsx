import { Comment } from "./context";
import ReplyComponent from "./reply";
import { usePostContext } from "./context";
import deleteImage from "../../images/icon-delete.svg";
import editIcon from "../../images/icon-edit.svg";
import { useState } from "react";
import MakeComment from "./Comment";

type PostProps = {
  comment: Comment;
};

export default function Post({ comment }: PostProps) {
  const [openReplyBox, setOpenReplyBox] = useState(false);
  const [replyingTo, setReplyingTo] = useState("");
  const { currentUser } = usePostContext();
  const userName = currentUser.username;
  // const currentUser = content[0].currentUser;

  function formatTimeAgo(timeInMilliseconds: string | number): string {
    if (typeof timeInMilliseconds !== "string") {
      const timeDistance = Date.now() - timeInMilliseconds;
      const days = Math.floor(timeDistance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(timeDistance / (60 * 60 * 1000));
      const minutes = Math.floor(timeDistance / (60 * 1000));

      if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      }
    } else return timeInMilliseconds;
  }

  function handleReply() {
    setOpenReplyBox((prev) => !prev);
    setReplyingTo(comment.user.username);
    // console.log(replyingTo);
  }

  return (
    <div>
      <div className="flex rounded-xl bg-neutral-White p-6">
        <div className="mr-4 flex max-h-[110px] flex-col items-center gap-2 rounded-md bg-neutral-LightGray px-2 py-1 text-xl text-primary-LightGrayishBlue">
          <button className="span cursor-pointer">+</button>
          <span className="text-primary-ModerateBlue">{comment.score}</span>
          <button className="span cursor-pointer">-</button>
        </div>

        <div className="w-full">
          <div className="mb-4 flex h-fit w-full justify-between">
            <div className="flex h-6 items-center gap-2 object-contain">
              <img
                className="mr-1 h-10 cursor-pointer"
                src={comment.user.image.png}
                alt="display picture"
              />
              <p className="mr-1 font-bold text-neutral-DarkBlue/90">
                {comment.user.username}
              </p>

              {comment.user.username === userName ? (
                <p className="mr-2 rounded bg-primary-ModerateBlue px-1 pb-1 text-neutral-White">
                  you
                </p>
              ) : null}

              <p className="text-neutral-GrayishBlue">
                {formatTimeAgo(comment.createdAt)}
              </p>
            </div>

            {comment.user.username !== userName ? (
              <div className="flex cursor-pointer items-center gap-2 object-contain hover:opacity-80">
                <img
                  className="h-4"
                  src="./images/icon-reply.svg"
                  alt="reply icon"
                />
                <p
                  onClick={handleReply}
                  className="text-base font-bold text-primary-ModerateBlue"
                >
                  Reply
                </p>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="flex cursor-pointer items-center gap-2 font-[500] text-primary-SoftRed hover:opacity-70">
                  <img
                    className="h-4 w-4"
                    src={deleteImage}
                    alt="delete icon"
                  />
                  <p>Delete</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2 font-[500] text-primary-ModerateBlue hover:opacity-70">
                  <img className="h-4 w-4" src={editIcon} alt="edit icon" />
                  <p>Edit</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="text-neutral-GrayishBlue">
              {comment.replyingTo ? (
                <span className="font-semibold text-primary-ModerateBlue">
                  @{comment.replyingTo}{" "}
                </span>
              ) : null}
              {comment.content}
            </p>
          </div>
        </div>
      </div>

      {openReplyBox ? (
        <MakeComment
          id={comment.id}
          replying={true}
          replyingTo={replyingTo}
          user={currentUser}
          setOpenReplyBox={setOpenReplyBox}
        />
      ) : null}

      {comment.replies && comment.replies.length > 0 ? (
        <ReplyComponent replies={comment.replies} />
      ) : null}
    </div>
  );
}

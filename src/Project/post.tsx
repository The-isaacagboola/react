export default function Post({ comment }) {
  console.log(comment);
  return (
    <div className="mb-5 flex rounded-xl bg-neutral-White p-6">
      <p className="mr-4 flex max-h-[110px] flex-col items-center gap-2 rounded-md bg-neutral-LightGray px-2 py-1 text-xl text-primary-LightGrayishBlue">
        <span className="span cursor-pointer">+</span>
        <span className="text-primary-ModerateBlue">{comment.score}</span>
        <span className="span cursor-pointer">-</span>
      </p>

      <div>
        <div className="mb-4 flex h-fit w-full justify-between">
          <div className="flex h-6 items-center gap-2 object-contain">
            <img
              className="h-10 cursor-pointer"
              src={comment.user.image.png}
              alt="display picture"
            />
            <p className="font-bold text-neutral-DarkBlue">
              {comment.user.username}
            </p>
            <p className="text-neutral-GrayishBlue">{comment.createdAt}</p>
          </div>
          <div className="flex cursor-pointer items-center gap-2 object-contain">
            <img
              className="h-4"
              src="./images/icon-reply.svg"
              alt="reply icon"
            />
            <p className="text-base font-bold text-primary-ModerateBlue">
              Reply
            </p>
          </div>
        </div>

        <div>
          <p className="text-neutral-GrayishBlue">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

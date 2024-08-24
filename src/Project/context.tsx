import { createContext, ReactNode, useContext, useMemo } from "react";
import UseLocalStorage from "../components/useLocalStorage";
import Posts from "../assets/data.json";

// Define the type for the image object
interface Image {
  png: string;
  webp: string;
}

// Define the type for the user object
interface User {
  image: Image;
  username: string;
}

// Define the type for a reply
export type Reply = {
  id: number;
  content: string;
  createdAt: string | number;
  score: number;
  replyingTo: string;
  user: User;
};

// Define the type for a comment
export type Comment = {
  id: number;
  content: string;
  createdAt: string | number;
  score: number;
  user: User;
  replies?: Reply[];
  replyingTo?: string;
};

// Define the type for the overall data structure
export type Data = {
  currentUser: User;
  comments: Comment[];
};

type Children = { children: ReactNode };
// type MakeNewPost = () => void;

const postContext = createContext<{
  comments: Comment[];
  currentUser: User;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  makeNewPost: (arg: Comment) => void;
  insertReply: (id: number, reply: Reply) => void;
  next: number;
} | null>(null);

// const postContext = createContext(null);
export default function Context({ children }: Children) {
  const [data, setData] = UseLocalStorage("Posts", JSON.stringify(Posts));

  const { comments, currentUser } = data;

  function makeNewPost(newComment: Omit<Comment, "id">): void {
    setData((prevData: Data) => ({
      ...prevData,
      comments: [
        ...prevData.comments,
        {
          ...newComment,
          id: prevData.comments.length + 1,
        },
      ],
    }));
  }

  function insertReply(id: number, reply: Reply): void {
    const copyData = { ...data };

    const commentIndex = copyData.comments.findIndex(
      (comment: Comment) => comment.id === id,
    );

    if (commentIndex !== -1) {
      if (!copyData.comments[commentIndex].replies) {
        copyData.comments[commentIndex].replies = [];
      }
      copyData.comments[commentIndex].replies!.push(reply);

      setData(copyData);
    } else {
      console.error(`Comment with id ${id} not found`);

      const copyComments = copyData.comments;
      // console.log(reply, id); //////adjust the replies you are working on at the bottom
      let commentIndex: number;
      copyComments.forEach((item: Comment) => {
        const replies = item.replies;
        const target = replies.find((reply) => reply.id === id);
        if (target) {
          commentIndex = item.id;
        }
      });
      // console.log(commentIndex, id);
      const newArray = copyComments.map((item) => {
        if (item.id === commentIndex) {
          const theComment = item;
          theComment.replies.push(reply);
          return { ...item, ...theComment };
        } else return item;
      });
      console.log(newArray);
    }
  }

  const next = useMemo(() => {
    const comments = data.comments;
    const aggregatedReplies = comments.reduce((acc: number, item: Comment) => {
      acc += 1;
      if (item.replies) return (acc += item.replies.length);
      else return (acc += 1);
    }, 0);
    return aggregatedReplies;
  }, [data]);

  return (
    <postContext.Provider
      value={{ comments, currentUser, setData, makeNewPost, insertReply, next }}
    >
      {children}
    </postContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePostContext() {
  const posts = useContext(postContext);

  if (!posts) {
    throw new Error(
      "usePostContext must be used within a PostContext.Provider",
    );
  }

  return posts;
}

import { createContext, ReactNode, useContext } from "react";
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
  createdAt: string;
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

const postContext = createContext<
  | [
      Data,
      React.Dispatch<React.SetStateAction<Data>>,
      (newComment: Comment) => void,
      (id: number, reply: Reply) => void,
    ]
  | null
>(null);

// const postContext = createContext(null);
export default function Context({ children }: Children) {
  const [data, setData] = UseLocalStorage("Posts", JSON.stringify(Posts));

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

      console.log(copyData);
      setData(copyData);
    } else {
      console.error(`Comment with id ${id} not found`);
    }
  }

  // function effectScore(arg: "increment" | "decrement") {
  //   if (arg === "increment") {

  //   }
  // }

  return (
    <postContext.Provider value={[data, setData, makeNewPost, insertReply]}>
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

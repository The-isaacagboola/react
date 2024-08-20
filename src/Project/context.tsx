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
  [Data, React.Dispatch<React.SetStateAction<Data>>, (arg1: any) => void] | null
>(null);

// const postContext = createContext(null);
export default function Context({ children }: Children) {
  const [data, setData] = UseLocalStorage("Posts", JSON.stringify(Posts));

  function makeNewPost(newComment: Omit<Comment, "id">): void {
    setData((prevData) => ({
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

  return (
    <postContext.Provider value={[data, setData, makeNewPost]}>
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

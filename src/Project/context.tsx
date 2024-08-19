import { createContext, ReactNode, useContext } from "react";
import UseLocalStorage from "../components/useLocalStorage";
import Posts from "/data.json?url";

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
interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

// Define the type for a comment
interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

// Define the type for the overall data structure
export type Data = {
  currentUser: User;
  comments: Comment[];
};

type Children = { children: ReactNode };

const postContext = createContext<
  [Data, React.Dispatch<React.SetStateAction<Data>>] | null
>(null);

// const postContext = createContext(null);
export default function Context({ children }: Children) {
  const [data, setData] = UseLocalStorage("Posts", JSON.stringify(Posts));

  return (
    <postContext.Provider value={[data, setData]}>
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

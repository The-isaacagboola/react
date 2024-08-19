import { createContext, ReactNode, useContext } from "react";
import UseLocalStorage from "../components/useLocalStorage";
import Posts from "/data.json";

const postContext = createContext(null);
type Children = { children: ReactNode };

export default function Context({ children }: Children) {
  const [data, setData] = UseLocalStorage("Posts", Posts);

  return (
    <PostContext.Provider value={[data, setData]}>
      {children}
    </PostContext.Provider>
  );
}

export function PostContext() {
  const posts = useContext(postContext);

  return posts;
}

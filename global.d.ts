import { Data } from "./src/Project/context";
declare module "*.json" {
  const value: Data;
  export default value;
}

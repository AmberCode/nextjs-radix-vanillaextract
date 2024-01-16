import { hello } from "@andrius/utils";
import MyButton from "./components/button/button";

export default function Page() {
  hello();
  return (
    <>
      <div>Main page</div>
      <div>
        <MyButton />
      </div>
    </>
  );
}

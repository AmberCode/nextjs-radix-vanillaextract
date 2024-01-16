import { myButton } from "./button.css";
import { Button } from "@radix-ui/themes";

export default function MyButton() {
  return (
    <>
      <button className={myButton}>Click me</button>
      <Button variant="solid">Click me!</Button>
    </>
  );
}

import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="WebApp">From home docs page</Button>   
   </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className=" my-10">
      <Input/>
      <Button>
        Primary
      </Button>
      <Button variant="destructive">
        Destructive
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="muted">
        Muted
      </Button>
      <Button variant="teritrary">
        Muted
      </Button>
    </div>
  );
}

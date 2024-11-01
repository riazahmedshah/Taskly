
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await getCurrent();

  if(!user){
    redirect("/sign-in");
  } 

  return(
    <div>
      <h1>This is a home page</h1>
    </div>
  )
}

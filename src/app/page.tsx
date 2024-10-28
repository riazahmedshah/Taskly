"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logot";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {
  const {mutate} = useLogout();

  const router = useRouter();
  const {data, isLoading} = useCurrent();



  useEffect(() => {
    if(!data && !isLoading){
      router.replace("/sign-in")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  return(
    <div>
      Only authorisez person can see this page.
      <Button onClick={() => mutate()}>
          Logout
      </Button>
    </div>
  )
}

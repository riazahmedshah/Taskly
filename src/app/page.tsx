"use client";

import { useCurrent } from "@/features/auth/api/use-current";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {
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
    </div>
  )
}

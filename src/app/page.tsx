'use client'
import TopBar from "@/components/ui/topbar";
import UserDetails from "@/components/UserDetails";
import UserDetailsSkeleton from "@/components/UserDetailsSkeleton";
import { getUser } from "@/service/api";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<UserDetailsSkeleton/>}>
        <UserContainer/>
      </Suspense>
    </div>
  );
}

function UserContainer(){
  const {data, refetch} = useSuspenseQuery({
    queryKey:["user"],
    queryFn:getUser,
    refetchOnWindowFocus:false
  });
  return(
    <>
      <TopBar onGenerate={refetch}/>
      {data && (
          <UserDetails user={data.results[0]} info={data.info}/>
      )}
    </>
  )
}

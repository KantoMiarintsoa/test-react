'use client'
import TopBar from "@/components/ui/topbar";
import UserDetails from "@/components/UserDetails";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopBar/>
      <UserDetails/>
    </div>
  );
}

import { Suspense } from "react";
import HomeLayout from "@/../layout/HomeLayout";
import { BiLoaderCircle } from "react-icons/bi";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <BiLoaderCircle className="animate-spin h-12 w-12 text-[#484646]" />
  </div>
);

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      </HomeLayout>
    </Suspense>
  );
}

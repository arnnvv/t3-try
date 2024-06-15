import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage(): Promise<JSX.Element> {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

import Landing from "@/components/homecomponents/landing";
import TransitionEffect from "@/components/transition";


export default function Home() {

  return (
    <>
      <TransitionEffect />
      <main className="dark:bg-black dark:text-zinc-50">
        <Landing />
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
      </main>
    </>
  )
}

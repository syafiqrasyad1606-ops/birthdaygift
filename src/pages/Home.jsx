import GiftBox from "../components/GiftBox";

function Home() {
  return (

    <main
      className="
      min-h-[100dvh]
      w-full
      overflow-hidden
      bg-gradient-to-br
      from-pink-100
      via-rose-50
      to-pink-200
      flex
      items-center
      justify-center
      px-4
      py-8
      sm:px-6
      md:px-8
      "
    >
      <GiftBox />
    </main>
  );
}

export default Home;

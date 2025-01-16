import SearchForm from "@/components/SearchForm";
import StarupCard from "@/components/StarupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  interface StartupCardType {
    _createAt: object;
    views: number;
    author: { _id: number };
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
  }
  const query = (await searchParams).query;
  const posts = [
    {
      _createAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Adrien" },
      _id: 1,
      description: "This is a description",
      image:
        "https://i.pinimg.com/736x/26/99/ae/2699ae26a1ce8a2e724e0e6ad7a9cbf1.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect with Entrpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search resultes for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0
            ? posts.map((post: StartupCardType) => (
                <StarupCard key={post?._id} post={post} />
              ))
            : ""}
        </ul>
      </section>
    </>
  );
}

import { Box } from "~/components/home/box";
import { Header } from "~/components/layouts/header";

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col border">
      <Header />
      <Box />
    </main>
  );
}

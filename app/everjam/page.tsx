import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export const metadata = {
  title: "Everjam",
  description: "Everjam",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Everjam</h1>
      <p className="mb-8">
        Everjam started as a dream to spread the wonderful practise of contact
        improvisation more widely. It has had a few shapes already, but the
        current iteration is to bring some of our contact improv jams out in
        public places and document it under the hashtag <b>#everjam</b>.
      </p>
      <p className="mb-8">
        We have started prototyping it in Barcelona and we love it. In the
        future, I envison these jams to happen all around the world, both
        bringing joy to the dancers, external witnesses and serving as a
        recruitment tool for contact improv.
      </p>
      <p className="mb-8">
        For more info, see
        <Link
          style={{
            textDecoration: "underline",
            marginLeft: "5px",
            marginRight: "10px",
          }}
          href="https://everjam.substack.com/p/everjam-manifesto"
        >
          The everjam manifesto
        </Link>
        <Link
          style={{ textDecoration: "underline" }}
          href="https://www.instagram.com/explore/tags/everjam/"
        >
          #everjam on instagram
        </Link>
      </p>
    </section>
  );
}

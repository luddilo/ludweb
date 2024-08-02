import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ludvig</h1>
      <p className="mb-4">
        I am a dancer, coder and entrepreneur. I am enormously passionate about
        contact improvisation and focus most of my creative energy there. Here
        you can see some of the projects I have ongoing.
      </p>
      <ol>
        <li>
          <Link href={"/everjam"} style={{ textDecoration: "underline" }}>
            Everjam
          </Link>
          - public CI jams to spread the practise
        </li>
        <li>
          <Link href={"/canvas"} style={{ textDecoration: "underline" }}>
            Canvas
          </Link>
          - 1on1 CI sessions to help you expand
        </li>
        <li>
          <Link
            href={"/temple-of-contact"}
            style={{ textDecoration: "underline" }}
          >
            Temple-of-contact
          </Link>
          - My residential CI studio in Barcelona, Spain. Open for hosting and
          cat-sitting.
        </li>
      </ol>
    </section>
  );
}

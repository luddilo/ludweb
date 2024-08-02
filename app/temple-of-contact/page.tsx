import Link from "next/link";

export const metadata = {
  title: "Temple of contact",
  description: "We dance and live together",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Temple of contact
      </h1>
      <p className="mb-8">
        I live together with my cat Halloumi in Gracia, Barcelona, in a
        beautiful flat (
        <Link
          href={
            "https://drive.google.com/drive/folders/1yYbMPjoy_-6r9knQKYJfopVhBHeXKsc7?usp=drive_link"
          }
          style={{ textDecoration: "underline" }}
        >
          see more pictures
        </Link>
        ) with a big living room that I have made into a dance-studio. I like to
        have people around, so I typically host one or more contact dancers from
        around the world (on beds in the dance space). We dance, cook, eat and
        live together. You pay what you are comfortable with. If you are
        interested in coming to visit, please reach out. I'm also on the lookout
        for cat-sitters!
      </p>
    </section>
  );
}

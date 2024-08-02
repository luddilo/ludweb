import Link from "next/link";
import { projects } from "./projects";
import { ArrowIcon } from "../components/icons";

export const metadata = {
  title: "Coding",
  description: "Is coding",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Coding</h1>
      <p className="mb-8">
        My professional history in brief: Geek gone management gone startup CEO
        gone startup CTO gone Product manager gone coder.
      </p>
      <p className="mb-8">
        I am currently happily coding for{" "}
        <Link href={"https://ridestore.com"}>Ridestore</Link> as well as
        maintaining and/or building a few private projects:
      </p>

      <ol>
        {projects.map((project) => (
          <li className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
            <p className="ml-2">
              <Link href={project.link}>
                <strong>{project.name}</strong>: {project.desc}
              </Link>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

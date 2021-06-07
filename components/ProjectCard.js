import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, slug, cookingTime, thumbnail } = project.fields;

  return (
    <li key={thumbnail.fields.file.url} className="relative">
      <div className="focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 group block w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
        <Image
          className="group-hover:opacity-75 object-cover "
          layout="fill"
          src={"https:" + thumbnail.fields.file.url}
        />
        <Link href={"/projects/" + slug}>
          <a className="focus:outline-none absolute inset-0" />
        </Link>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {title}
      </p>
    </li>
  );
}

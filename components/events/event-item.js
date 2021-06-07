import Button from "../ui/button";
import Image from "next/image";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className="relative">
      <div className="focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 group block w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
        <Image
          className="group-hover:opacity-75 object-cover "
          layout="fill"
          src={"/" + image}
          alt={title}
        />
        <Button
          className="focus:outline-none absolute inset-0"
          link={exploreLink}
        />
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        <time>{humanReadableDate}</time>
      </p>

      <address className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {formattedAddress}
      </address>
    </li>
  );
}

export default EventItem;

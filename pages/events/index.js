import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import MainLayout from "layouts/main";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <MainLayout>
      <div className="my-16 container mx-auto px-4">
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </div>
    </MainLayout>
  );
}

export default AllEventsPage;

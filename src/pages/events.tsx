import { api } from "@/utils/api";
import type { NextPage } from "next";

const Events: NextPage = () => {
  const { data: events, isLoading } = api.events.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!events) {
    return <div>No events found</div>;
  }

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;

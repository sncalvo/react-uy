import MainLayout from '@/components/layouts/MainLayout';
import EventCard from '@/components/molecules/EventCard';
import type { NextPageWithLayout } from '@/types/layout';
import { api } from '@/utils/api';

const Events: NextPageWithLayout = () => {
  const { data: events, isLoading } = api.events.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-3 md:grid-cols-3 lg:grid-cols-4">
        {Array(8).map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-3 pt-24 md:grid-cols-3 lg:grid-cols-4">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

Events.getLayout = MainLayout;

export default Events;

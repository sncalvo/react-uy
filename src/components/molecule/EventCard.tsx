import type { Event } from "@prisma/client";
import Image from "next/image";

type Props = {
  event?: Event;
  onClick?: () => void;
};

const EventCard = ({ event, onClick }: Props) => {
  if (!event) {
    return (
      <button className="relative flex h-48 w-52 animate-pulse flex-col items-center justify-center space-y-4 overflow-hidden rounded-lg p-4 shadow-lg" />
    );
  }

  return (
    <button className="relative flex h-48 w-52 flex-col items-center justify-center space-y-4 overflow-hidden rounded-lg p-4 shadow-lg">
      <figure className="absolute h-full w-full" onClick={onClick}>
        <Image
          src={event.image}
          alt={`Banner image for ${event.name}`}
          fill
          className="blur-sm"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </figure>
      <div className="z-10 text-start">
        <h2 className="text-2xl font-bold text-white">{event.name}</h2>
        <p className="overflow-ellipsis text-gray-200">{event.description}</p>
      </div>
    </button>
  );
};

export default EventCard;

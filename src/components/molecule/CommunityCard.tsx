import type { Community } from "@prisma/client";
import Image from "next/image";

type Props = {
  community?: Community;
  onClick?: () => void;
};

const CommunityCard = ({ community, onClick }: Props) => {
  if (!community) {
    return (
      <button className="relative flex h-48 w-52 animate-pulse flex-col items-center justify-center space-y-4 overflow-hidden rounded-lg p-4 shadow-lg" />
    );
  }

  return (
    <button className="relative flex h-48 w-52 flex-col items-center justify-center overflow-hidden rounded-lg p-4 shadow-lg transition-all hover:scale-105">
      <figure className="absolute h-full w-full" onClick={onClick}>
        <Image
          src={community.image}
          alt={`Banner image for ${community.name}`}
          fill
          className="blur-sm"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </figure>
      <div className="z-10 text-start">
        <h2 className="text-2xl font-bold text-white">{community.name}</h2>
        <p className="overflow-ellipsis text-gray-200">
          {community.description}
        </p>
      </div>
    </button>
  );
};

export default CommunityCard;

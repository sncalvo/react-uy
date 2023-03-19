import CommunityCard from '@/components/molecules/CommunityCard';
import { api } from '@/utils/api';

const Communities = () => {
  const { data: communities, isLoading } = api.communities.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-3 pt-24 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array(8).map((_, index) => (
          <CommunityCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-3 pt-24 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {communities?.map((community) => (
        <CommunityCard
          key={community.id}
          community={community}
          onClick={() => window.open(community.link, community.name)}
        />
      ))}
    </div>
  );
};

export default Communities;

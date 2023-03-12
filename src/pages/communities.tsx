import MainLayout from "@/components/layouts/MainLayout";
import CommunityCard from "@/components/molecule/CommunityCard";
import type { NextPageWithLayout } from "@/types/layout";
import { api } from "@/utils/api";

const Communities: NextPageWithLayout = () => {
  const { data: communities, isLoading } = api.communities.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-3 md:grid-cols-3 lg:grid-cols-4">
        {Array(8).map((_, index) => (
          <CommunityCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-3 md:grid-cols-3 lg:grid-cols-4">
      {communities?.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </div>
  );
};

Communities.getLayout = MainLayout;

export default Communities;

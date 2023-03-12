import MainLayout from "@/components/layouts/MainLayout";
import type { NextPageWithLayout } from "@/types/layout";
import { api } from "@/utils/api";

const Communities: NextPageWithLayout = () => {
  const { data: communities, isLoading } = api.communities.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!communities) {
    return <div>No communities found</div>;
  }

  return (
    <div>
      {communities.map((community) => (
        <div key={community.id}>
          <h1>{community.name}</h1>
          <p>{community.description}</p>
        </div>
      ))}
    </div>
  );
};

Communities.getLayout = MainLayout;

export default Communities;

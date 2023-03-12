import { api } from "@/utils/api";
import type { NextPage } from "next";

const Communities: NextPage = () => {
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

export default Communities;

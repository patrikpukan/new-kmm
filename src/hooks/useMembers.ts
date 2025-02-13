import { useState, useEffect } from "react";

interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  // Add other member properties as needed
}

interface UseMembersReturn {
  members: Member[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const useMembers = (): UseMembersReturn => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMembers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/data/members.json");
      if (!response.ok) {
        throw new Error("Failed to fetch members data");
      }
      const data = await response.json();
      setMembers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return {
    members,
    isLoading,
    error,
    refetch: fetchMembers,
  };
};

export default useMembers;
export type { Member };

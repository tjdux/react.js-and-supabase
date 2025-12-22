import { type Database } from "@/database.types";

type PostEntity = Database["public"]["Tables"]["post"]["Row"];
type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];

type Post = PostEntity & { author: ProfileEntity };

type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};

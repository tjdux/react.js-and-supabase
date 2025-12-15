import { type Database } from "@/database.types";

type PostEntity = Database["public"]["Tables"]["post"]["Row"];

type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};

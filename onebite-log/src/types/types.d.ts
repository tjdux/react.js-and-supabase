import { type Database } from "@/database.types";

type PostEntity = Database["public"]["Tables"]["post"]["Row"];
type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];
type CommentEntity = Database["public"]["Tables"]["comment"]["Row"];

type Post = PostEntity & { author: ProfileEntity; isLiked: boolean };
type Comment = CommentEntity & { author: ProfileEntity };
type NestedComment = Comment & {
  parentComment?: Comment;
  children: NestedComment[];
};

type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};

export type Theme = "system" | "dark" | "light";

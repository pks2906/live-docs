import { LIVEBLOCKS_SECRET_KEY } from "@/app/config";
import { Liveblocks } from "@liveblocks/node";

export const liveblocks = new Liveblocks({
  secret: LIVEBLOCKS_SECRET_KEY
});

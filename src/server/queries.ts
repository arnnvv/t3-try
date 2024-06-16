import "server-only";
import db from "./db";
import {
  type AnyColumn,
  type SQL,
  type SQLWrapper,
  type sql,
} from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

const getImages = async (): Promise<Image[]> => {
  const { userId } = auth();

  if (!userId) throw new Error("Not logged in");

  const images: Image[] = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    orderBy: (
      model,
      {
        desc,
      }: {
        sql: typeof sql;
        asc: (column: SQLWrapper | AnyColumn) => SQL<unknown>;
        desc: (column: SQLWrapper | AnyColumn) => SQL<unknown>;
      },
    ) => desc(model.createdAt),
  });

  return images;
};

export default getImages;

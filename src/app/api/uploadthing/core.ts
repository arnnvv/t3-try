import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { FileUploadData } from "uploadthing/types";
import db from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(
      ({
        req,
      }: {
        req: NextRequest;
        res: undefined;
        event: undefined;
      } & {
        files: readonly FileUploadData[];
        input: undefined;
      }): { userId: string } => {
        const { userId } = auth();
        if (!userId) throw new UploadThingError("Unauthorized");
        return { userId };
      },
    )
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

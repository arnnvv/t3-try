import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { FileUploadData } from "uploadthing/types";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(
      async ({
        req,
      }: {
        req: NextRequest;
        res: undefined;
        event: undefined;
      } & {
        files: readonly FileUploadData[];
        input: undefined;
      }): Promise<{ userId: string }> => {
        const { userId } = auth();
        if (!userId) throw new UploadThingError("Unauthorized");
        return { userId };
      },
    )
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

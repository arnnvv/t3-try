import { clerkClient } from "@clerk/nextjs/server";
import { type FC } from "react";
import { getImage } from "~/server/queries";

const FullImage: FC<{ photoId: string }> = async (props: {
  photoId: string;
}): Promise<JSX.Element> => {
  const photoIdAsNum = Number(props.photoId);
  if (Number.isNaN(photoIdAsNum))
    throw new Error(`Invalid photo ID: ${props.photoId}`);

  const image = await getImage(photoIdAsNum);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div>{uploaderInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default FullImage;

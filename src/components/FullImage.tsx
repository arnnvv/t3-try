import { type FC } from "react";
import { getImage } from "~/server/queries";

const FullImage: FC<{ photoId: string }> = async (props: {
  photoId: string;
}): Promise<JSX.Element> => {
  const photoIdAsNum = Number(props.photoId);
  if (Number.isNaN(photoIdAsNum))
    throw new Error(`Invalid photo ID: ${props.photoId}`);

  const image = await getImage(photoIdAsNum);

  return (
    <div className="flex h-full w-full min-w-0 bg-zinc-900/50">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
};

export default FullImage;

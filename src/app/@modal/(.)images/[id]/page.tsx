import { getImage } from "~/server/queries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const photoIdAsNum = Number(photoId);
  if (Number.isNaN(photoIdAsNum))
    throw new Error(`Invalid photo ID: ${photoId}`);

  const image = await getImage(photoIdAsNum);
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
};

export default PhotoModal;

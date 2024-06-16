import { getImage } from "~/server/queries";
import Modal from "./modal";

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
    <Modal>
      <img src={image.url} alt={image.name} className="w-96" />
    </Modal>
  );
};

export default PhotoModal;

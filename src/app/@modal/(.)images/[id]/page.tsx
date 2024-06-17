import Modal from "./modal";
import FullImage from "~/components/FullImage";

const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element => {
  const photoIdAsNum = Number(photoId);
  if (Number.isNaN(photoIdAsNum))
    throw new Error(`Invalid photo ID: ${photoId}`);

  return (
    <Modal>
      <FullImage photoId={photoIdAsNum} />
    </Modal>
  );
};

export default PhotoModal;

import Modal from "./modal";
import FullImage from "~/components/FullImage";

const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element => (
  <Modal>
    <FullImage photoId={photoId} />
  </Modal>
);

export default PhotoModal;

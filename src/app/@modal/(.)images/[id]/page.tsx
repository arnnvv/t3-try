import { FullImage } from "~/components/FullImage";
import Modal from "./modal";

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

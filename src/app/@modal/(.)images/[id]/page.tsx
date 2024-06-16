const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element => <div>{photoId}</div>;

export default PhotoModal;

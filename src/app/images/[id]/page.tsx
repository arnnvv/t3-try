import FullImage from "~/components/FullImage";

const PhotoPage = ({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element => {
  const photoIdAsNum = Number(photoId);
  if (Number.isNaN(photoIdAsNum))
    throw new Error(`Invalid photo ID: ${photoId}`);

  return <FullImage photoId={photoIdAsNum} />;
};

export default PhotoPage;

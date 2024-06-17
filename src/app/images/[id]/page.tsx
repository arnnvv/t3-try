import FullImage from "~/components/FullImage";

const PhotoPage = ({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element => (
  <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
    <FullImage photoId={photoId} />;
  </div>
);

export default PhotoPage;

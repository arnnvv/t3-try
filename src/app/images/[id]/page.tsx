import { FullImage } from "~/components/FullImage";

export default function FulImage({
  params: { id: photoId },
}: {
  params: { id: string };
}): JSX.Element {
  return (
  <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
    <FullImage photoId={photoId} />;
  </div>
);
}

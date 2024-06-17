import { type FC } from "react";
import { getImage } from "~/server/queries";

const FiullImage: FC<{ photoId: number }> = async (props: {
  photoId: number;
}): Promise<JSX.Element> => {
  const image = await getImage(props.photoId);

  return <img src={image.url} alt={image.name} className="w-96" />;
};

export default FiullImage;

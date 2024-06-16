import Image from "next/image";
import Link from "next/link";
import getImages from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async (): Promise<JSX.Element> => {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map(
        (photo: Image): JSX.Element => (
          <div key={photo.id} className="flex w-48 flex-col justify-center">
            <Link href={`/images/${photo.id}`} className={"w-full"}>
              <Image
                src={photo.url}
                alt={photo.name}
                style={{ objectFit: "contain" }}
                width={480}
                height={480}
              />
            </Link>
            <p>{photo.name}</p>
          </div>
        ),
      )}
    </div>
  );
};

export default Images;

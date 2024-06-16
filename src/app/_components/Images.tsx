import getImages from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async (): Promise<JSX.Element> => {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map(
        (photo: Image): JSX.Element => (
          <div key={photo.id} className="flex w-48 flex-col">
            <img src={photo.url} alt="image" />
            <p>{photo.name}</p>
          </div>
        ),
      )}
    </div>
  );
};

export default Images;

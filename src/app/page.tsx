import db from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage(): Promise<JSX.Element> {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map(
          (photo: {
            id: number;
            name: string;
            url: string;
            createdAt: Date;
            updatedAt: Date | null;
          }): JSX.Element => (
            <div key={photo.id} className="flex w-48 flex-col">
              <img src={photo.url} alt="image" />
              <p>{photo.name}</p>
            </div>
          ),
        )}
      </div>
    </main>
  );
}

export default function HomePage(): JSX.Element {
  const photoUrls: string[] = [
    "https://www.boredpanda.com/blog/wp-content/uploads/2019/02/fake-news-photos-viral-photoshop-1-5c6fe612590ec__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2019/02/fake-news-photos-viral-photoshop-18-5c6fe631f2eb3__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2019/02/fake-news-photos-viral-photoshop-12-5c6fe6271254d__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2019/02/fake-news-photos-viral-photoshop-7-5c6fe61d585f4__700.jpg",
  ];

  const photos = photoUrls.map(
    (
      url: string,
      index: number,
    ): {
      id: string;
      url: string;
    } => ({
      id: (index + 1).toString(),
      url,
    }),
  );

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {photos.map(
          (photo: { id: string; url: string }): JSX.Element => (
            <div key={photo.id} className="w-48">
              <img src={photo.url} alt="image" />
            </div>
          ),
        )}
      </div>
      Hello(galary in progress)
    </main>
  );
}

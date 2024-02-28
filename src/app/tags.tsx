export async function Tags() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:3001/tags", {
    next: {
      tags: ["get-tags"],
    },
  });
  const data = await response.json();

  return (
    <ul>
      {data.map((tag: { slug: string }) => (
        <li key={tag.slug}>{tag.slug}</li>
      ))}
    </ul>
  );
}

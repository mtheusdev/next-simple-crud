import { revalidateTag } from "next/cache";
import { AddTagButton } from "./add-tag-button";

export function AddTag() {
  const handleCreate = async (form: FormData) => {
    "use server";

    const slug = form.get("slug");

    if (!slug) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch("http://localhost:3001/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });

    revalidateTag("get-tags");
  };

  return (
    <form action={handleCreate} method="POST">
      <input type="text" name="slug" placeholder="Slug da tag" />
      <AddTagButton />
    </form>
  );
}

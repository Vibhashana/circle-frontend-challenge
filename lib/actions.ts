"use server";

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { books } = await response.json();
    return books ?? [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const fetchBook = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { book } = await response.json();
    return book ?? {};
  } catch (error) {
    console.error("Error fetching book:", error);
  }
};

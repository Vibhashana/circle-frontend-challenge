"use server";

import { Book } from "@/types/book-types";

export const fetchBooks = async (query?: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { books } = await response.json();

    if (!query?.trim()) {
      return books ?? [];
    }

    const searchQuery = query.toLowerCase().trim();
    const filteredBooks = books.filter(
      (book: Book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.isbn?.toLowerCase().includes(searchQuery)
    );

    return filteredBooks ?? [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const fetchBookById = async (id: string) => {
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

interface SuccessResponse {
  message: string;
  book: Book;
}

export const purchaseBook = async (id: string | number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${id}/purchase`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Book not found");
      }
      if (response.status === 500) {
        throw new Error("Book is currently out of stock");
      }
      throw new Error("Something went wrong");
    }

    return data as SuccessResponse;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to purchase book");
  }
};

export const fetchBooksByAuthor = async (
  author: string,
  currentBookId?: number
) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { books } = await response.json();
    const filteredBooks = books.filter(
      (book: Book) => book.author === author && book.id !== currentBookId
    );
    return filteredBooks ?? [];
  } catch (error) {
    console.error("Error fetching books by author:", error);
    return [];
  }
};

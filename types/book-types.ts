export type Book = {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  price: number;
  availableStock?: number;
};

export type Books = Book[];

export type Reservation = {
  date: Date | null;
  id: string;
  role?: "Chiusura" | "Apertura" | null;
};

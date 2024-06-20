import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReservationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  role?: "Chiusura" | "Apertura";
};

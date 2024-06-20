/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Reservation as PrismaReservation } from "@prisma/client";

export class ReservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReservationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.reservation.count(args);
  }

  async reservations(
    args: Prisma.ReservationFindManyArgs
  ): Promise<PrismaReservation[]> {
    return this.prisma.reservation.findMany(args);
  }
  async reservation(
    args: Prisma.ReservationFindUniqueArgs
  ): Promise<PrismaReservation | null> {
    return this.prisma.reservation.findUnique(args);
  }
  async createReservation(
    args: Prisma.ReservationCreateArgs
  ): Promise<PrismaReservation> {
    return this.prisma.reservation.create(args);
  }
  async updateReservation(
    args: Prisma.ReservationUpdateArgs
  ): Promise<PrismaReservation> {
    return this.prisma.reservation.update(args);
  }
  async deleteReservation(
    args: Prisma.ReservationDeleteArgs
  ): Promise<PrismaReservation> {
    return this.prisma.reservation.delete(args);
  }
}

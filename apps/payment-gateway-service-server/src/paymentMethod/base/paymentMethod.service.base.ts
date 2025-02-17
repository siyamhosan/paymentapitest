/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PaymentMethod as PrismaPaymentMethod,
  Payment as PrismaPayment,
  Currency as PrismaCurrency,
} from "@prisma/client";

export class PaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentMethodCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentMethod.count(args);
  }

  async paymentMethods<T extends Prisma.PaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentMethodFindManyArgs>
  ): Promise<PrismaPaymentMethod[]> {
    return this.prisma.paymentMethod.findMany<Prisma.PaymentMethodFindManyArgs>(
      args
    );
  }
  async paymentMethod<T extends Prisma.PaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentMethodFindUniqueArgs>
  ): Promise<PrismaPaymentMethod | null> {
    return this.prisma.paymentMethod.findUnique(args);
  }
  async createPaymentMethod<T extends Prisma.PaymentMethodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentMethodCreateArgs>
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.create<T>(args);
  }
  async updatePaymentMethod<T extends Prisma.PaymentMethodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentMethodUpdateArgs>
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.update<T>(args);
  }
  async deletePaymentMethod<T extends Prisma.PaymentMethodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentMethodDeleteArgs>
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.paymentMethod
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getCurrency(parentId: string): Promise<PrismaCurrency | null> {
    return this.prisma.paymentMethod
      .findUnique({
        where: { id: parentId },
      })
      .currency();
  }
}

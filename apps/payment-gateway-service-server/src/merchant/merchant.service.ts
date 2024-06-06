import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MerchantServiceBase } from "./base/merchant.service.base";

@Injectable()
export class MerchantService extends MerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

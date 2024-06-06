import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmsServiceBase } from "./base/sms.service.base";

@Injectable()
export class SmsService extends SmsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

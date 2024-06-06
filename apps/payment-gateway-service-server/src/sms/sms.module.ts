import { Module } from "@nestjs/common";
import { SmsModuleBase } from "./base/sms.module.base";
import { SmsService } from "./sms.service";
import { SmsController } from "./sms.controller";
import { SmsResolver } from "./sms.resolver";

@Module({
  imports: [SmsModuleBase],
  controllers: [SmsController],
  providers: [SmsService, SmsResolver],
  exports: [SmsService],
})
export class SmsModule {}

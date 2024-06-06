import { Module } from "@nestjs/common";
import { MerchantModuleBase } from "./base/merchant.module.base";
import { MerchantService } from "./merchant.service";
import { MerchantController } from "./merchant.controller";
import { MerchantResolver } from "./merchant.resolver";

@Module({
  imports: [MerchantModuleBase],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantResolver],
  exports: [MerchantService],
})
export class MerchantModule {}

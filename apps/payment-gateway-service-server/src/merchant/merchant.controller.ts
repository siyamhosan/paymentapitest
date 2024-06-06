import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MerchantService } from "./merchant.service";
import { MerchantControllerBase } from "./base/merchant.controller.base";

@swagger.ApiTags("merchants")
@common.Controller("merchants")
export class MerchantController extends MerchantControllerBase {
  constructor(protected readonly service: MerchantService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SmsService } from "./sms.service";
import { SmsControllerBase } from "./base/sms.controller.base";

@swagger.ApiTags("sms")
@common.Controller("sms")
export class SmsController extends SmsControllerBase {
  constructor(protected readonly service: SmsService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { SmsResolverBase } from "./base/sms.resolver.base";
import { Sms } from "./base/Sms";
import { SmsService } from "./sms.service";

@graphql.Resolver(() => Sms)
export class SmsResolver extends SmsResolverBase {
  constructor(protected readonly service: SmsService) {
    super(service);
  }
}

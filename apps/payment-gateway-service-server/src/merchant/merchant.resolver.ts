import * as graphql from "@nestjs/graphql";
import { MerchantResolverBase } from "./base/merchant.resolver.base";
import { Merchant } from "./base/Merchant";
import { MerchantService } from "./merchant.service";

@graphql.Resolver(() => Merchant)
export class MerchantResolver extends MerchantResolverBase {
  constructor(protected readonly service: MerchantService) {
    super(service);
  }
}

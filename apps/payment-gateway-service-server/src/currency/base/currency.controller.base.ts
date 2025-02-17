/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CurrencyService } from "../currency.service";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { Currency } from "./Currency";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { PaymentMethodFindManyArgs } from "../../paymentMethod/base/PaymentMethodFindManyArgs";
import { PaymentMethod } from "../../paymentMethod/base/PaymentMethod";
import { PaymentMethodWhereUniqueInput } from "../../paymentMethod/base/PaymentMethodWhereUniqueInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

export class CurrencyControllerBase {
  constructor(protected readonly service: CurrencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  async createCurrency(
    @common.Body() data: CurrencyCreateInput
  ): Promise<Currency> {
    return await this.service.createCurrency({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @ApiNestedQuery(CurrencyFindManyArgs)
  async currencies(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.currencies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async currency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.currency({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        symbolField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCurrency(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.updateCurrency({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCurrency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.deleteCurrency({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          symbolField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/paymentMethods")
  @ApiNestedQuery(PaymentMethodFindManyArgs)
  async findPaymentMethods(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<PaymentMethod[]> {
    const query = plainToClass(PaymentMethodFindManyArgs, request.query);
    const results = await this.service.findPaymentMethods(params.id, {
      ...query,
      select: {
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        smsExtractor: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/paymentMethods")
  async connectPaymentMethods(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentMethodWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentMethods: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentMethods")
  async updatePaymentMethods(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentMethodWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentMethods: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentMethods")
  async disconnectPaymentMethods(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentMethodWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentMethods: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        currency: {
          select: {
            id: true,
          },
        },

        id: true,

        paymentMethod: {
          select: {
            id: true,
          },
        },

        status: true,
        trxId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  async connectPayments(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  async updatePayments(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  async disconnectPayments(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }
}

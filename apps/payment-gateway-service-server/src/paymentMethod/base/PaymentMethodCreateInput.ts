/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PaymentCreateNestedManyWithoutPaymentMethodsInput } from "./PaymentCreateNestedManyWithoutPaymentMethodsInput";

@InputType()
class PaymentMethodCreateInput {
  @ApiProperty({
    required: false,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currency?: CurrencyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutPaymentMethodsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutPaymentMethodsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutPaymentMethodsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutPaymentMethodsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smsExtractor?: string | null;
}

export { PaymentMethodCreateInput as PaymentMethodCreateInput };

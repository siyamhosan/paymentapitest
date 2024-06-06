import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";
import { SmsTitle } from "../sms/SmsTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentMethod.id"
          reference="PaymentMethod"
          label="PaymentMethod"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="smsItems"
          reference="Sms"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SmsTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="trxId" source="trxId" />
      </SimpleForm>
    </Edit>
  );
};

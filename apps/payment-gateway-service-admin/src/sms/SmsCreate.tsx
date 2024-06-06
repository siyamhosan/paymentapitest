import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";

export const SmsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <ReferenceInput source="payment.id" reference="Payment" label="Payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <DateTimeInput label="receivedAt" source="receivedAt" />
        <TextInput label="senderPhoneNumber" source="senderPhoneNumber" />
      </SimpleForm>
    </Create>
  );
};

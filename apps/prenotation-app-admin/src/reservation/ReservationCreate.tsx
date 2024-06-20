import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  SelectInput,
} from "react-admin";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Date" source="date" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "Chiusura", value: "Chiusura" },
            { label: "Apertura", value: "Apertura" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

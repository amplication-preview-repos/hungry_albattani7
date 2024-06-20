import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  SelectInput,
} from "react-admin";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

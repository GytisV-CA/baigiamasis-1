import {
  IIdentifiableItem,
  ITableField,
  IUpdatePayload,
  ValidValueType,
} from '../../../shared/types';
import Button from '../../atoms-md/Button';
import TextField from '../../atoms-md/TextField';

interface IFormProps<dataType extends IIdentifiableItem> {
  fields: ITableField<ValidValueType>[];
  onSubmit?: (fieldsData: IUpdatePayload<dataType>['fieldsData']) => void;
  verb?: string;
}

export default function Form<dataType extends IIdentifiableItem>({
  fields,
  onSubmit,
  verb,
}: IFormProps<dataType>) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const obj = Object.fromEntries(formData.entries());

        if (onSubmit && obj) {
          onSubmit(obj as IUpdatePayload<dataType>['fieldsData']);
        }
      }}
    >
      {fields.map((field) => {
        return (
          <TextField
            key={field.slug}
            variant='outlined'
            type={field.inputType ?? 'text'}
            size={field.inputType === 'number' ? 8 : undefined}
            name={field.slug}
            defaultValue={field.value}
            labelText={field.displayTitle}
            containerBackgroundColor='var(--md-sys-color-surface-container-high)'
          />
        );
      })}
      <div className='action-bar'>
        <Button title={verb} icon='done' variant='filled' type='submit' />
      </div>
    </form>
  );
}

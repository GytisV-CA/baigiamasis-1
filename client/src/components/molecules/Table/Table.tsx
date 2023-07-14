import { useContext, createContext, useState } from 'react';
import { DataTypeContext } from '../../../App';
import {
  IIdentifiableItem,
  ITableField,
  IUpdatePayload,
  ValidValueType,
} from '../../../shared/types';
import {
  StyledTable,
  StyledTableColHeader,
  StyledTableRowWrapper,
  StyledTableCell,
  StyledButtonBox,
  StyledTableRowUnderlay1,
  StyledTableRowUnderlay2,
  StyledPromptBox,
} from './style';
import DataFieldDisplay from '../../atoms/DataFieldDisplay';
import TextField from '../../atoms-md/TextField';
import Button from '../../atoms-md/Button';

export const DataEntryContext = createContext<IIdentifiableItem | null>(null);

interface ITableRowItemProps<dataType extends IIdentifiableItem> {
  fields: ITableField<ValidValueType>[];
  rowIndex: number;
  isEditable?: boolean;
  editCallback?: (
    id: dataType['id'],
    fieldsData: IUpdatePayload<dataType>['fieldsData']
  ) => void;
  deleteCallback?: (id: dataType['id']) => void;
}

function TableRowItem<dataType extends IIdentifiableItem>({
  fields,
  rowIndex,
  isEditable = false,
  editCallback,
  deleteCallback,
}: ITableRowItemProps<dataType>) {
  type CrudModeTypes = 'R' | 'U' | 'D'; // Read Update Delete

  const [crudMode, setCrudMode] = useState<CrudModeTypes>('R');
  const id = useContext(DataEntryContext)?.id;

  if (isEditable && crudMode === 'U') {
    return (
      <StyledTableRowWrapper>
        <StyledTableRowUnderlay1
          $row={rowIndex}
          $columnSpan={fields.length + 1}
          className='underlay'
        />
        <StyledTableRowUnderlay2
          $row={rowIndex}
          $columnSpan={fields.length + 1}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.target as HTMLFormElement);
            const obj = Object.fromEntries(formData.entries());

            if (editCallback && id && obj) {
              editCallback(id, obj as IUpdatePayload<dataType>['fieldsData']);
              setCrudMode('R');
            }
          }}
        >
          {fields.map((field, index) => {
            return (
              <StyledTableCell
                key={field.slug}
                $column={index + 1}
                $row={rowIndex}
              >
                <TextField
                  variant='outlined'
                  type={field.inputType ?? 'text'}
                  size={field.inputType === 'number' ? 8 : undefined}
                  name={field.slug}
                  defaultValue={field.value}
                  labelText={field.displayTitle}
                />
              </StyledTableCell>
            );
          })}
          <StyledTableCell
            key={'extra_comp'}
            $column={fields.length + 1}
            $row={rowIndex}
          >
            <StyledButtonBox>
              <Button
                title='Išsaugoti'
                icon='done'
                variant='filled'
                type='submit'
              />
              <Button
                title='Atšaukti'
                icon='cancel'
                variant='tonal'
                action={() => {
                  setCrudMode('R');
                }}
              />
            </StyledButtonBox>
          </StyledTableCell>
        </form>
      </StyledTableRowWrapper>
    );
  } else {
    return (
      <StyledTableRowWrapper $highlight={crudMode === 'D'}>
        <StyledTableRowUnderlay1
          $row={rowIndex}
          $columnSpan={fields.length + Number(isEditable)}
          $highlight={crudMode === 'D'}
          className='underlay'
        />
        <StyledTableRowUnderlay2
          $row={rowIndex}
          $columnSpan={fields.length + Number(isEditable)}
        />
        {fields.map((field, index) => {
          return (
            <StyledTableCell
              key={field.slug}
              $column={index + 1}
              $row={rowIndex}
              $highlight={crudMode === 'D'}
            >
              <DataFieldDisplay<typeof field.value>
                value={field.value}
                formatter={field.displayFormatter}
              />
            </StyledTableCell>
          );
        })}
        {isEditable && (
          <StyledTableCell
            key={'extra_comp'}
            $column={fields.length + 1}
            $row={rowIndex}
            $highlight={crudMode === 'D'}
          >
            {crudMode === 'D' ? (
              <StyledPromptBox>
                <div>Ar tikrai norite ištrinti</div>
                <StyledButtonBox>
                  <Button
                    title='Taip'
                    icon='done'
                    variant='filled'
                    action={() => {
                      if (deleteCallback && id) {
                        deleteCallback(id);
                      }
                      setCrudMode('R');
                    }}
                  />
                  <Button
                    title='Atšaukti'
                    icon='cancel'
                    variant='tonal'
                    action={() => {
                      setCrudMode('R');
                    }}
                  />
                </StyledButtonBox>
              </StyledPromptBox>
            ) : (
              <StyledButtonBox>
                <Button
                  title='Redaguoti'
                  icon='edit'
                  variant='text'
                  action={() => setCrudMode('U')}
                />
                <Button
                  title='Ištrinti'
                  icon='delete'
                  variant='text'
                  action={() => setCrudMode('D')}
                />
              </StyledButtonBox>
            )}
          </StyledTableCell>
        )}
      </StyledTableRowWrapper>
    );
  }
}

interface ITableProps<dataType extends IIdentifiableItem> {
  displayData: dataType[];
  isEditable?: boolean;
  editCallback?: ITableRowItemProps<dataType>['editCallback'];
  deleteCallback?: (id: dataType['id']) => void;
  rowCount?: number;
}

export default function Table<dataType extends IIdentifiableItem>({
  displayData,
  isEditable = false,
  editCallback,
  deleteCallback,
  rowCount,
}: ITableProps<dataType>) {
  // console.log('rendering Table');

  const { getFieldsFunction } = useContext(DataTypeContext);

  return (
    <StyledTable
      $rowCount={rowCount && rowCount + 1}
      $colCount={getFieldsFunction().length + Number(isEditable)}
    >
      <StyledTableRowWrapper>
        {getFieldsFunction().map((field, index) => (
          <StyledTableColHeader
            key={`header_${field.slug}`}
            $column={index + 1}
            $align={field.displayFormatter.align}
          >
            {field.displayTitle}
          </StyledTableColHeader>
        ))}
      </StyledTableRowWrapper>
      {displayData.map((item, index) => (
        <DataEntryContext.Provider key={`context_${item.id}`} value={item}>
          <TableRowItem<dataType>
            key={`row_${item.id}`}
            fields={getFieldsFunction(item)}
            rowIndex={index + 2}
            isEditable={isEditable}
            editCallback={editCallback}
            deleteCallback={deleteCallback}
          />
        </DataEntryContext.Provider>
      ))}
    </StyledTable>
  );
}

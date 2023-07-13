import { ReactNode, useContext, createContext } from 'react';
import { DataTypeContext } from '../../../App';
import { IIdentifiableItem, ITableField } from '../../../shared/types';
import {
  StyledTable,
  StyledTableColHeader,
  StyledTableRowWrapper,
  StyledTableCell,
} from './styles';
import DataFieldDisplay from '../../atoms/DataFieldDisplay';

export const DataEntryContext = createContext<IIdentifiableItem | null>(null);

interface ITableRowItemProps {
  fields: ITableField<any>[];
  rowIndex: number;
  rowExtraComponent?: () => ReactNode;
}

function TableRowItem({
  fields,
  rowIndex,
  rowExtraComponent,
}: ITableRowItemProps) {
  return (
    <StyledTableRowWrapper>
      {fields.map((field, index) => (
        <StyledTableCell key={field.slug} $column={index + 1} $row={rowIndex}>
          <DataFieldDisplay<typeof field.value>
            value={field.value}
            formatter={field.displayFormatter}
          />
        </StyledTableCell>
      ))}
      {rowExtraComponent && (
        <StyledTableCell
          key={'extra_comp'}
          $column={fields.length + 1}
          $row={rowIndex}
        >
          {rowExtraComponent()}
        </StyledTableCell>
      )}
    </StyledTableRowWrapper>
  );
}

export default function Table<dataType extends IIdentifiableItem>({
  displayData,
  rowExtraComponent,
}: {
  displayData: dataType[];
  rowExtraComponent?: () => ReactNode;
}) {
  // console.log('rendering Table');

  const { getFieldsFunction } = useContext(DataTypeContext);

  return (
    <StyledTable>
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
          <TableRowItem
            key={`row_${item.id}`}
            fields={getFieldsFunction(item)}
            rowIndex={index + 2}
            rowExtraComponent={rowExtraComponent}
          />
        </DataEntryContext.Provider>
      ))}
    </StyledTable>
  );
}

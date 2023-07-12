import { useContext } from 'react';
import { DataTypeContext } from '../../../App';
import { IIdentifiableItem, ITableField } from '../../../shared/types';
import {
  StyledTable,
  StyledTableColHeader,
  StyledTableRowWrapper,
  StyledTableCell,
} from './styles';
import DataFieldDisplay from '../../atoms/DataFieldDisplay';

interface ITableRowItemProps {
  fields: ITableField<any>[];
  rowIndex: number;
}

function TableRowItem({ fields, rowIndex }: ITableRowItemProps) {
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
    </StyledTableRowWrapper>
  );
}

export default function Table({ data }: { data: IIdentifiableItem[] }) {
  console.log('rendering Table');

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
      {data.map((item, index) => (
        <TableRowItem
          key={`row_${item.id}`}
          fields={getFieldsFunction(item)}
          rowIndex={index + 2}
        />
      ))}
    </StyledTable>
  );
}

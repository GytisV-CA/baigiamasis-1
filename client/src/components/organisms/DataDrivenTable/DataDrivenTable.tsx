import { QueryFunction, useQuery } from '@tanstack/react-query';
import { ReactNode, useContext, useState } from 'react';
import PagedSearchTable from '../PagedSearchTable';
import { ISearchableItem } from '../PagedSearchTable/PagedSearchTable';
import Button from '../../atoms-md/Button';
import { DataEntryContext } from '../../molecules/Table/Table';

function AddButton() {
  return <Button variant='elevated'>Pridėti naują</Button>;
}

function RowActionButtons() {
  const dataEntryContext = useContext(DataEntryContext);
  return (
    <div>
      <Button variant='tonal'>Redaguoti</Button>
      <Button variant='tonal'>Ištrinti</Button>
    </div>
  );
}

interface IDataDrivenPagedTableProps<dataType> {
  queryKey: string[];
  queryFn: QueryFunction<dataType[], string[], any>;
  itemsPerPage?: number;
  rowExtraComponent?: ReactNode;
}

export default function DataDrivenTable<dataType extends ISearchableItem>({
  queryKey,
  queryFn,
  itemsPerPage = 60,
}: IDataDrivenPagedTableProps<dataType>) {
  // console.log('rendering DataDrivenPagedTable');

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    staleTime: 10000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load data...</div>;
  }

  return (
    <PagedSearchTable
      data={data}
      itemsPerPage={itemsPerPage}
      injectedComponent={AddButton()}
      rowExtraComponent={RowActionButtons}
    />
  );
}

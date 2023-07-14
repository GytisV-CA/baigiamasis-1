import { QueryFunction, useMutation, useQuery } from '@tanstack/react-query';
import { ReactNode, useContext, useRef, useState } from 'react';
import { DataTypeContext } from '../../../App';
import { IIdentifiableItem, IUpdatePayload } from '../../../shared/types';
import { queryClient } from '../../../main';
import PagedSearchTable from '../PagedSearchTable';
import Modal from '../../molecules/Modal';
import Form from '../../molecules/Form';
interface IDataDrivenPagedTableProps<dataType extends IIdentifiableItem> {
  queryKey: string[];
  queryFn: QueryFunction<dataType[], string[]>;
  insertFn?: (variables: {
    fieldsData: IUpdatePayload<dataType>['fieldsData'];
  }) => Promise<unknown>;
  updateFn?: (variables: IUpdatePayload<dataType>) => Promise<unknown>;
  deleteFn?: (variables: { id: dataType['id'] }) => Promise<unknown>;
  itemsPerPage?: number;
  rowExtraComponent?: ReactNode;
}

export default function DataDrivenTable<dataType extends IIdentifiableItem>({
  queryKey,
  queryFn,
  insertFn,
  updateFn,
  deleteFn,
  itemsPerPage = 60,
}: IDataDrivenPagedTableProps<dataType>) {
  // console.log('rendering DataDrivenPagedTable');

  const [isCreating, setIsCreating] = useState(false);
  const [unreadResponseMsg, setUnreadResponseMsg] = useState<string | null>(
    null
  );

  const modalRootElementRef = useRef(document.getElementById('modal-root'));

  const { getFieldsFunction, crudMessages } = useContext(DataTypeContext);

  const query = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    staleTime: 10000,
  });

  const insMutation = useMutation({
    mutationFn: insertFn,
    onSuccess: (data: dataType) => {
      queryClient.setQueryData(queryKey, (previousData: dataType[]) => [
        ...previousData,
        data,
      ]);

      setIsCreating(false);
      setUnreadResponseMsg(crudMessages['success']['insertSingle'] ?? '...');
      // await queryClient.invalidateQueries(queryKey);
    },
    onError: () => {
      setUnreadResponseMsg(crudMessages['fail']['insertSingle'] ?? '...');
    },
  });

  const updMutation = useMutation({
    mutationFn: updateFn,
    onSuccess: async () => {
      setUnreadResponseMsg(crudMessages['success']['updateSingle'] ?? '...');
      await queryClient.invalidateQueries(queryKey);
    },
    onError: () => {
      setUnreadResponseMsg(crudMessages['fail']['updateSingle'] ?? '...');
    },
  });

  const delMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: (_data: unknown, variables: { id: dataType['id'] }) => {
      queryClient.setQueryData(queryKey, (previousData: dataType[]) =>
        previousData.filter((i) => i.id !== variables.id)
      );

      setUnreadResponseMsg(crudMessages['success']['deleteSingle'] ?? '...');
      // await queryClient.invalidateQueries(queryKey);
    },
    onError: () => {
      setUnreadResponseMsg(crudMessages['fail']['deleteSingle'] ?? '...');
    },
  });

  const insertHandler = (
    fieldsData: IUpdatePayload<dataType>['fieldsData']
  ) => {
    insMutation.mutate({ fieldsData: fieldsData });
  };

  const updateHandler = (
    id: dataType['id'],
    fieldsData: IUpdatePayload<dataType>['fieldsData']
  ) => {
    updMutation.mutate({ id: id, fieldsData: fieldsData });
  };

  const deleteHandler = (id: dataType['id']) => {
    delMutation.mutate({ id: id });
  };

  const renderModalByStatus = () => {
    if (!modalRootElementRef.current) {
      return <>...</>;
    }
    if (query.isError) {
      return (
        <Modal modalRoot={modalRootElementRef.current} title='Error'>
          ...
        </Modal>
      );
    }
    if (
      query.isLoading ||
      insMutation.isLoading ||
      updMutation.isLoading ||
      delMutation.isLoading
    ) {
      return (
        <Modal modalRoot={modalRootElementRef.current} title='Loading'>
          ...
        </Modal>
      );
    }
    if (unreadResponseMsg) {
      return (
        <Modal
          modalRoot={modalRootElementRef.current}
          title={unreadResponseMsg}
          onExit={() => setUnreadResponseMsg(null)}
        >
          ...
        </Modal>
      );
    }
    if (isCreating) {
      return (
        <Modal
          modalRoot={modalRootElementRef.current}
          onExit={() => setIsCreating(false)}
        >
          <Form
            fields={getFieldsFunction()}
            verb='Pridėti naują'
            onSubmit={insertHandler}
          />
        </Modal>
      );
    }
  };

  if (!query.data) {
    if (!modalRootElementRef.current) {
      return <>...</>;
    }
    return (
      <Modal
        modalRoot={modalRootElementRef.current}
        title={query.isLoading ? 'Loading' : 'No data'}
      >
        ...
      </Modal>
    );
  }

  return (
    <>
      <PagedSearchTable
        data={query.data}
        itemsPerPage={itemsPerPage}
        isEditable
        onCreate={() => setIsCreating(true)}
        editCallback={updateHandler}
        deleteCallback={deleteHandler}
      />
      {renderModalByStatus()}
    </>
  );
}

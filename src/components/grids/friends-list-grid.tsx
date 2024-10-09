import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ColDef } from 'ag-grid-community';
import { useSelector } from 'react-redux';
import { selectAgGridButtonStyle } from '../../store/selectors/goathouse.selectors';
import { Friend } from '../../config/types';
import { placeholderFriendsList } from '../../config/consts';
import GridActions from './grid-actions/grid-actions';

const FriendsListGrid: React.FC = () => {
  const gridRef = useRef<AgGridReact<Friend>>(null);

  const agGridButtonStyle = useSelector(selectAgGridButtonStyle);

  const columnDefs: ColDef<Friend>[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'mutuals', headerName: 'Mutuals', flex: 1 },
    {
      width: 75,
      cellStyle: agGridButtonStyle,
      cellRenderer: (params: Friend) => {
        return (
          <GridActions
            navigateTo={'/profile/' + params.username}
            readOnly
          />
        )
      },
    },
  ];

  const defaultColDef: ColDef<Friend> = {
    sortable: true,
  };

  return (
    <div className='friends-list'>
      <div className='ag-theme-quartz' style={{ height: 400 }}>
        <AgGridReact
          ref={gridRef}
          rowData={placeholderFriendsList}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          modules={[ClientSideRowModelModule]}
        />
      </div>
    </div>
  );
};

export default FriendsListGrid;

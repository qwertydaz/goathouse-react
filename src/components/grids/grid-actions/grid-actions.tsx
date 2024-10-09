import './grid-actions.css';
import React from 'react';
import NavigateButton from '../../buttons/navigate-button';
import DeleteButton from '../../buttons/delete-button';

interface GridActionsProps {
  navigateTo: string;
  navigateToAfterDelete?: string;
  readOnly?: boolean;
}

const GridActions: React.FC<GridActionsProps> = ({
  navigateTo,
  navigateToAfterDelete,
  readOnly=false,
}) => {
  return (
    <div className='grid-actions'>
      <div className='navigate-grid-action'>
        <NavigateButton
          navigateTo={navigateTo}
          disabled
          block
          gridAction
        />
      </div>

      {
        readOnly
          ? null
          : <div className='delete-grid-action'>
              <DeleteButton
                navigateTo={navigateToAfterDelete}
                block
                gridAction
              />
            </div>
      }
    </div>
  );
};

export default GridActions;

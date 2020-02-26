import React, { useContext } from 'react';

import { TableContainer, DotStates } from './styles';
import ActionButtons from '../ActionButtons';
import { Store } from '../../store';

export default function OffersTable() {
  const [state] = useContext(Store);

  const offers = state;

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>url</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {offers?.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.advertiser_name}</td>
              <td>
                <a href={row.url} target="_blank" rel="noopener noreferrer">
                  {row.url}
                </a>
              </td>
              <td>
                <DotStates isEnabled={row.state} />
              </td>
              <td>
                <ActionButtons id={row.id} row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

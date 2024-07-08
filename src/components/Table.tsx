import React from 'react'
import {IRecord} from './Form'

interface ITableProps {
	rows: IRecord[],
	removeRecord: (date: string) => void
}

export const Table : React.FC<ITableProps> = ({rows, removeRecord}) => {
  return (
    <table>
			<thead>
				<tr>
				<th>Дата (ДД.ММ.ГГ)</th>
				<th>Пройдено км</th>
				<th>Действия</th>
				</tr>
			</thead>
			<tbody>
				{rows.map(row => (
					<tr key={row.date}>
						<td>{row.date}</td>
						<td>{row.distance}</td>
						<td>
							<input type='button' onClick={() => removeRecord(row.date)} value="✘"></input>
						</td>
					</tr>
				))}
			</tbody>
    </table>
  )
}

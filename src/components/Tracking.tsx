import {useState} from 'react'
import {Form, IRecord} from './Form'
import {Table} from './Table'

export const Tracking : React.FC = () => {
  const [records, setRecords] = useState<IRecord[]>([]);

  const addRecord = ({date, distance} : IRecord) : void => {
    setRecords(prevRecord => {
      const existing = prevRecord.find(record => record.date === date);

      if (existing) {
        const newDistance = parseFloat(existing.distance) + parseFloat(distance);
        existing.distance = String(newDistance);
        return [...prevRecord];
      } else {
        const newRecord = { date, distance };
        return [...prevRecord, newRecord].sort((a, b) => {
          return formattDate(b.date).getTime() - formattDate(a.date).getTime()
        });
      }
    });
  };

  const removeRecord = (date : string) : void => {
    setRecords(prevRecord => prevRecord.filter(record => record.date !== date));
  };

  const formattDate = (date: string) : Date => {
    const [day, month, year] = date.split('.');
    return new Date(Number(`20${year}`), Number(month) - 1, Number(day));
  };
  
  return (
    <div className='tracking'>
      <Form addRecord = {addRecord}/>
      <Table rows={records} removeRecord = {removeRecord}/>
    </div>
  )
}
import React, {useState, ChangeEvent, FormEvent} from 'react'

export interface IRecord {
  date: string,
  distance: string
}

interface IFormProps {
  addRecord: (record: IRecord) => void;
}

export const Form :React.FC<IFormProps> = ({addRecord}) => {
  const [data, setData] = useState<IRecord>({
    date: '',
    distance: ''
  });

  const handleSubmit = (event : FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
    addRecord(data);

    setData({
      date: '',
      distance: ''
    });
  };

  const handleChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    const {name, value} = event.target;
    setData((prevForm) => ({...prevForm, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label>Дата (ДД.ММ.ГГ)</label>
        <input id='date' name='date' value={data.date} onChange={handleChange} required></input>
      </div>

      <div className='field'>
        <label>Пройдено км</label>
        <input id='distance' name='distance' value={data.distance} onChange={handleChange} required></input>
      </div>
      
      <button>OK</button>
    </form>
  )
}

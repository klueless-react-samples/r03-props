import React, { useState } from 'react'

import { StringList, NameInput } from '../components';

export function Home() {
  const [people, setPeople] = useState(['David', 'Lisa', 'John']);
  const [animals, setAnimals] = useState(['Dog', 'Cat', 'Shark']);
  const [languages, setLanguages] = useState(['C#', 'Javascript', 'Go']);

  return (
    <div className="Home">

      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td>
            <NameInput title="Enter Persons Name" label="First Name: " items={people} addIt={setPeople} />
            <StringList title="List of People"  items={people}></StringList>
          </td>
          <td>
            <NameInput title="Enter Animals Name" label="Animal: " items={animals} addIt={setAnimals} />
            <StringList title="List of Animals"  items={animals}></StringList>
          </td>
          <td>
            <NameInput title="Enter Language" label="Language: " items={languages} addIt={setLanguages} />
            <StringList title="List of Languages"  items={languages}></StringList>
          </td>
        </tr>
        </tbody>
      </table>


    </div>
  );
}


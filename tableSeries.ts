import {Serie} from './serie'; 


export function createSeriesTable(serie: Serie[]): string {
  const tableHeader = `
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Channel</th>
          <th scope="col">Seasons</th>
        </tr>
      </thead>
      <tbody>
  `;
  const tableBody = serie
    .map(
      (serie) => `
        <tr>
          <th scope="row">${serie.id}</th>
          <td>${serie.name}</td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
        </tr>
      `
    )
    .join("");
    
  const averageSeasons = (serie.reduce((sum, serie) => sum + serie.seasons, 0) / serie.length).toFixed(1);

  const tableFooter = `
      </tbody>
    </table>
    <p>Seasons average: ${averageSeasons}</p>
  `;
  
  return `${tableHeader}${tableBody}${tableFooter}`;
}

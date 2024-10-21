import { Serie } from './serie';

export function createSeriesTable(series: Serie[]): string {
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

  const tableBody = series
    .map(
      (serie) => `
        <tr data-id="${serie.id}" class="series-row">
          <th scope="row">${serie.id}</th>
          <td>${serie.name}</td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
        </tr>
      `
    )
    .join("");

  const averageSeasons = (series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length).toFixed(1);

  const tableFooter = `
      </tbody>
    </table>
    <p>Seasons average: ${averageSeasons}</p>
  `;

  return `${tableHeader}${tableBody}${tableFooter}`;
}

// Función para crear una tarjeta con el detalle de una serie
export function createSerieCard(serie: Serie): string {
  return `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" class="btn btn-primary" target="_blank">More info</a>
      </div>
    </div>
  `;
}

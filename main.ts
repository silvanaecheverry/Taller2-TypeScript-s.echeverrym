import { series } from "./data"; 
import { createSeriesTable, createSerieCard } from "./tableSeries"; 

// Obtén los contenedores
const tableContainer: HTMLElement | null = document.getElementById("series-container");
const detailContainer: HTMLElement | null = document.getElementById("series-detail");

if (tableContainer && detailContainer) {
  tableContainer.innerHTML = createSeriesTable(series);

  const rows = document.querySelectorAll('.series-row');
  rows.forEach((row) => {
    row.addEventListener('click', () => {
      const serieId = Number(row.getAttribute('data-id'));
      const selectedSerie = series.find((serie) => serie.id === serieId);
      if (selectedSerie) {
        detailContainer.innerHTML = createSerieCard(selectedSerie);
      }
    });
  });
} else {
  console.error("No se encontraron los contenedores para la tabla o el detalle de series.");
}


import data from "./data/tableData.json";

export const Tabelle = ({ filterAnbieter, filterService, filterScore }) => {
  return (
    <table className="TableWrapper">
      <thead id="TableHeader">
        <tr>
          <th>anbieter</th>
          <th>datensatz</th>
          <th>zusammenfassung</th>
          <th>service</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody id="TableBody">
        {data
          .filter(
            (element) => !filterAnbieter || element.anbieter === filterAnbieter
          )
          .filter(
            (element) => !filterService || element.service === filterService
          )
          .filter((element) => !filterScore || element.score >= filterScore)
          .map((eintrag) => (
            <tr>
              <td>{eintrag.anbieter}</td>
              <td>{eintrag.datensatz}</td>
              <td>{eintrag.zusammenfassung}</td>
              <td>{eintrag.service}</td>
              <td>{eintrag.score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

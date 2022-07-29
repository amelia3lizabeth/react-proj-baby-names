import babyNamesData from "./babyNamesData.json";
import nameDataProp from "./nameDataProp";

function BabyNames(): JSX.Element {
  return (
    <>
      <h2>There are {babyNamesData.length} names.</h2>
      <p>{babyNamesData.map(PrintNames)} names</p>
    </>
  );
}

export default BabyNames;

function PrintNames(nameData: nameDataProp): JSX.Element {
  return (
    <>
      <div>{nameData.name}</div>
    </>
  );
}

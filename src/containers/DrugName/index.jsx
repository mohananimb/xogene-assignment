import { useDrugName } from "./hooks";
import Header from "../../components/Header";
import "./style.css";

const DrugName = () => {
  const { ndc, state } = useDrugName();
  
  return (
    <div>
      <Header title="DRUG DETAILS" />
      <div className="drugName__details">
        <div className="name_container">
          <h5>Name of drug</h5>
          <div className="name__details">
            <span>id: {state?.rxcui || "NA"}</span>
            <span>Name: {state?.name}</span>
            <span>Synonym: {state?.synonym || "NA"}</span>
          </div>
        </div>

        <div className="drugName__ndcc">
          <h5>Associate NDCs</h5>
          <ul>
            {ndc.map((item, index) => (
              <li key={item}>
                NDC {index + 1}: {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrugName;

import '../style/van.css'
export default function Category(props){
    var type = props.type;
    var typeElement = []
    if(type === "simple"){
        typeElement.push(
          <div key={props.type} className="category" style={{ backgroundColor: "#E17654" }}>
            {props.type}
          </div>
        );
    }else if(type === "luxury"){
        typeElement = (
          <div className="category" style={{ backgroundColor: "#161616" }}>
            {props.type}
          </div>
        );
    }else if(type === 'rugged'){
        typeElement = (
          <div
            className="category"
            style={{ backgroundColor: "#115E59" }}
          >
            {props.type}
          </div>
        );
    }
    return <>{typeElement}</>;
}
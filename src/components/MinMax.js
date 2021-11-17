function MinMax(props) {
    let max = 0,
      min = 0;
  
    if (props.value.length) {
      max = Math.max.apply(Math, props.value).toFixed(2);
      min = Math.min.apply(Math, props.value).toFixed(2);
    }
  
    return (
      <div className="m-4">
        <h2 className="text-right">Valores</h2>
        <p>
          <strong>Max:</strong> {max} {props.currency}
        </p>
        <p>
          <strong> Min:</strong> {min} {props.currency}
        </p>
      </div>
    );
  }
  
  export default MinMax;
interface ButtonData {
  buttonName: string;
  buttonReference: string;
}

function ButtonComponent(data: ButtonData) {
  return <a href={data.buttonReference}>{data.buttonName}</a>;
}

export default ButtonComponent;

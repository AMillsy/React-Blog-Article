import ArticleComponent from "../components/articleComponent";
import React from "react";

//DOESNT WORK NEED TO GET STATES WORKING
export default class Blogs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.location.state,
    };
  }

  findCard() {
    fetch("/api/blogs").then((response) => {
      console.log(response);
    });
  }

  render(): any {
    this.findCard();
    return (
      <ArticleComponent
        //REPLACE KEY WITH THE BLOGS ID
        key={1}
        title="Something"
        content="A
    B
    C"
      ></ArticleComponent>
    );
  }
}

import React from "react";
import ResultCard from "../../components/result-card/result-Card.component";
import { connect } from "react-redux";
import "./search_result_container.scss";

class ResultContainer extends React.Component {
  render() {
    // here we are checking if we have result we will pass it to resultCard otherwise we will render no result
    var query = "";
    query =
      this.props.results.length > 0 ? (
        this.props.results.map(result => {
          return (
            <div className="preview">
              <ResultCard key={ result.id } result={ result } />{ " " }
            </div>
          );
        })
      ) : (
          <h1>NO Result</h1>
        );

    return <div className="serch_result_container">{ query }</div>;
  }
}

const mapStateToProps = state => ({
  results: state.search.results.data
});
export default connect(mapStateToProps)(ResultContainer);

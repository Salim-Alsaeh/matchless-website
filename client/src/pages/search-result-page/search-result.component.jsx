import React from "react";
import { connect } from "react-redux";

import Spinner from "../../components/Spinner/Spinner";
import ResultContianer from "../../components/search-result-container/search_result_container";

class SearchResult extends React.Component {
  render() {
    return (
      <div className="serch_result">
        {/* // by checking the loading in search state we can render the result or spinner */ }
        { this.props.loading ? <Spinner /> : <ResultContianer /> }
      </div>
    );
  }
}
// maping loading from search state to component props
const mapStateToProps = state => ({
  loading: state.search.loading
});

export default connect(mapStateToProps)(SearchResult);

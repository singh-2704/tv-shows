
import {FC} from "react";
import ShowCard from "../components/ShowCard";
import SearchBar from "../components/SearchBar";
import {State} from "../store";
import { showLoadingSelector, showsQuerySelector, showsSelector } from "../selectors/Shows";
import {showsQueryChangeAction } from "../slices/Shows";
import { ConnectedProps, connect } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

type ShowListPageProps = {} & ReduxProps

const ShowListPage: FC<ShowListPageProps> = ({showsQueryChangeAction, shows, query, loading})=>{

  console.log("shows is", shows);
  
  
  return(
    <div className="mt-2">
      <div className="flex">
      <SearchBar
      value={query}
      onChange={(event)=>{showsQueryChangeAction(event.target.value)}}/>
      {loading && <LoadingSpinner/>}
      </div>
      
     <div className="flex flex-wrap justify-center">
      {shows && shows.map(s=>(<ShowCard key={s?.id} show={s}/>))}
      
    </div>
    </div>
  );
}
const mapStateToProps = (state: State)=>{
  return {query: showsQuerySelector(state), 
    shows: showsSelector(state),
    loading: showLoadingSelector(state)
  }
}
const mapDispatchToProps = {
  showsQueryChangeAction: showsQueryChangeAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>

export default connector(ShowListPage);


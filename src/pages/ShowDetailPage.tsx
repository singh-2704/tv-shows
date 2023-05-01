import { FC } from "react";
import CastCard from "../components/CastCard";
import GenrePill from "../components/GenrePill";
import { IoArrowBack }  from 'react-icons/io5';
import {Link} from "react-router-dom";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { ConnectedProps } from "react-redux";
import { connect } from "react-redux";
import {State} from "../store";
import { showsMapSelector,showLoadingSelector } from "../selectors/Shows";
import {loadShowAction} from "../actions/Shows";
import {useEffect} from "react";
import LoadingSpinner from "../components/LoadingSpinner";

type ownProps =  WithRouterProps

type ShowDetailPageProps = ownProps & ReduxProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({show, params, loadShow }) => {
  useEffect(()=>{
    loadShow(+params.showId)
  },[params.showId])

  if (!show){
    return <div><LoadingSpinner/></div>
  }
  return (
    <div className="mt-2">
        <Link to="/"><IoArrowBack/> Back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map(genres=><GenrePill name={genres} key={genres}/>)}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium|| "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058422.jpg"}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
         {show.summary && <p>{show.summary}</p>} 
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating.average}</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State, ownProps:  ownProps) =>{
  
  return {show: showsMapSelector(state)[+ownProps.params.showId],
  loading: showLoadingSelector(state),
  };
}

const mapDispatchToProps = {
  loadShow: loadShowAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>

export default withRouter(connector(ShowDetailPage));
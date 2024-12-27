import { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import LoadingSpinner from '../Components/LoadingSpinner';
import SearchBar from '../Components/SearchBar';
import ShowCard from '../Components/ShowCard';
import { showLoadedAction, showQueryAction } from '../Redux/Action/Show';
import { State } from '../Redux/Reducer/Store';
import {
  mapShowStateSelector,
  querySelector,
  showLoadingSelector,
} from '../Redux/Selectors/Shows';
import { Show } from '../Types/Modals';

const ShowListPage: FC<ReduxProps> = ({ showQuery, shows, query, loading }) => {
  useEffect(() => {
    showQuery('power');
  }, []);
  return (
    <div className="mt-2">
      <div className="flex ">
        <SearchBar
          value={query}
          onChange={(e) => {
            showQuery(e.target.value);
          }}
        />
        {loading && <LoadingSpinner />}
      </div>
      <div className="flex flex-wrap justify-center">
        {
          shows?.map((val: Show) => {
            return (
              <div key={val.id}>
                <ShowCard
                  id={val.id}
                  image={val.image}
                  name={val.name}
                  summary={val.summary}
                />{' '}
              </div>
            );
          })
          // ):(  <div className=" h-screen  w-full flex justify-center items-center  text-5xl  font-semibold    " > Loading ..... </div>
          // )
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showLoaded: showLoadedAction,
  showQuery: showQueryAction,
};

const mapSelectorToProps = (state: State) => {
  return {
    query: querySelector(state),
    shows: mapShowStateSelector(state),
    loading: showLoadingSelector(state),
  };
};

const connector = connect(mapSelectorToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowListPage);

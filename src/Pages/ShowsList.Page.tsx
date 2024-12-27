import { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import LoadingSpinner from '../Components/shared/LoadingSpinner';
import SearchBar from '../Components/shared/SearchBar';
import ShowCard from '../Components/shared/ShowCard';
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
    if (query === '') {
      showQuery('r');
    }
  }, [query]);
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="header">
        <p className="font-medium">My TV Show</p>
        <SearchBar value={query} onChange={showQuery} />
        {loading && <LoadingSpinner />}
      </div>
      <div className="flex flex-wrap px-6 gap-4 md:gap-6 justify-center">
        {shows?.map((val: Show) => (
          <ShowCard
            key={val.id}
            id={val.id}
            image={val.image}
            name={val.name}
            summary={val.summary}
          />
        ))}
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

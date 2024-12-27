import { FC, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import CastCard from '../Components/shared/CastCard';
import GenrePill from '../Components/shared/GenrePill';
import withRouter, { WithRouterProps } from '../hocs/withRouter';
import { State } from '../Redux/Reducer/Store';
import { cast, Placeholder } from '../Types/Modals';
// import { ShowCast, SingleShow } from "../Api/Api";
import LoadingSpinner from '../Components/shared/LoadingSpinner';
import { Button, buttonVariants } from '../Components/ui/button';
import { Card } from '../Components/ui/card';
import { showDetailId } from '../Redux/Action/ShowDetail';
import { castMapLoaded } from '../Redux/Selectors/CastSelector';
import { mapShowDetailSelector } from '../Redux/Selectors/ShowDetailSeletor';

type OwnProps = {} & WithRouterProps;

type ShowDetailPageProps = ReduxProps & OwnProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  showDetailId,
  cast,
  data,
}) => {
  const id = +params.show_id;

  useEffect(() => {
    showDetailId(id);
  }, [id]);

  if (data) {
    return (
      <div className="mt-2 bg-accent">
        <div className="header">
          <Link
            to="/"
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            <IoArrowBack /> Back
          </Link>

          <p></p>
        </div>
        <div>
          <div className="flex flex-col gap-4 md:gap-6 p-4 justify-center items-start">
            <Card className="flex gap-4 bg-secondary  p-2">
              {data?.genres?.map((val: string, index: number) => {
                return <GenrePill name={val} key={'j' + index} />;
              })}
            </Card>
            <Card className="gap-4 md:gap-6 p-4 flex sm:flex-row flex-col">
              <img
                src={data.image?.medium || data.image?.original || '5.5'}
                alt={data.name}
                className="object-cover object-center w-full rounded-md h-80"
              />
              <div className="gap-4 flex flex-col">
                <h2 className="text-4xl font-semibold tracking-wide">
                  {data.name}
                </h2>
                <p
                  className={'text-muted-foreground'}
                  dangerouslySetInnerHTML={{ __html: data.summary || '' }}
                ></p>
                <Button className="w-fit font-semibold" variant="outline">
                  <span> Rating:</span>
                  <span className="text-xs">
                    {data.rating?.average ?? '5.5'}/10
                  </span>
                </Button>
              </div>
            </Card>
          </div>
          <p className="w-full border-t-2" />
          <div className="flex flex-col gap-4 md:gap-6 p-4 justify-center items-start">
            <h4 className="text-xl font-semibold tracking-wide">Cast</h4>
            <div className="flex gap-4 flex-wrap">
              {cast ? (
                cast.splice(0, 10).map((val: cast) => {
                  return (
                    <div key={val.id}>
                      <CastCard
                        avatarLink={
                          val.image?.medium ||
                          val.image?.original ||
                          Placeholder
                        }
                        name={val.name}
                      />
                    </div>
                  );
                })
              ) : (
                <div className=" flex">
                  <LoadingSpinner />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" h-screen  w-full flex justify-center items-center  text-5xl  font-semibold    ">
        <div className=" flex">
          <LoadingSpinner />
        </div>
      </div>
    );
  }
};

const PropsAction = {
  showDetailId: showDetailId,
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  console.log('map to props id = ', ownProps.params.show_id);
  return {
    // data : showStateSelector (state)[+ownProps.params.show_id] ,
    data: mapShowDetailSelector(state),
    cast: castMapLoaded(state),
  };
};

const connector = connect(mapStateToProps, PropsAction);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));

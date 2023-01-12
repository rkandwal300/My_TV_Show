import { FC, useEffect , useState} from "react";
import { Link } from "react-router-dom";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { IoArrowBack } from 'react-icons/io5'
import { State } from "../Redux/Reducer/Store";
import { cast, castType, Placeholder, Show } from "../Types/Modals";
import { connect, ConnectedProps, ConnectProps } from "react-redux";
// import { ShowCast, SingleShow } from "../Api/Api";
import {  showDetailId } from "../Redux/Action/ShowDetail";
import {  mapShowDetailSelector } from "../Redux/Selectors/ShowDetailSeletor";
import { castMapLoaded } from "../Redux/Selectors/CastSelector";
import { showStateSelector } from "../Redux/Selectors/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";


type OwnProps = {} &WithRouterProps ;

type ShowDetailPageProps = ReduxProps &  OwnProps ;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params , showDetailId , cast , data }) => {

  const id = +params.show_id ;

  

useEffect(()=>{

  showDetailId(id);



},[id]);


if(data ){

  return (
    <div className="mt-2">
      <Link to= '/'  className="flex items-center"> 
        <IoArrowBack /> Back
      </Link>
      <h2 className="text-4xl font-semibold tracking-wide"> {data.name} </h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        
        { data.genres &&
        (data.genres).map(( val:string , index : number )=>{
            return <GenrePill name={val} key = {index} />
        })
        }
      </div>
      <div className="mt-2 flex">
        <img
        src={data.image?.medium || data.image?.original || '5.5' }
          alt={data.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML= {{ __html: data.summary || "" }} ></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max flex ">
            Rating: <span className="text-gray-700 flex ml-2">  {data.rating?.average || '5.5'} /10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          

          { cast ?  (  
            cast.map((val : cast ) =>{
                return <div key = {val.id }> <CastCard
                avatarLink={val.image?.medium || val.image?.original || Placeholder }
                name= {val.name}
                // name="Freya Allan"
              /></div >
            })) : (<div className=" flex"> <LoadingSpinner />  Loading........</div>)
          }

        </div>
      </div>
    </div>
  );
}
else{
  return <div className=" h-screen  w-full flex justify-center items-center  text-5xl  font-semibold    " > 
  <div className=" flex"> <LoadingSpinner />    Loading........</div>
  </div>
}
}

const PropsAction = {
  showDetailId  : showDetailId ,
}


const mapStateToProps = (state: State, ownProps : OwnProps ) =>{
  console.log( 'map to props id = ',ownProps.params.show_id);
  return {
    // data : showStateSelector (state)[+ownProps.params.show_id] ,
    data : mapShowDetailSelector (state) ,
    cast : castMapLoaded (state)    ,

  }
}

const connector =  connect (mapStateToProps , PropsAction);

type ReduxProps = ConnectedProps<typeof connector >


export default withRouter( connector(ShowDetailPage) );




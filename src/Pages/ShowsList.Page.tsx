import { useState , useEffect ,FC } from "react";
import { SearchProducts } from "../Api/Api";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../Types/Modals";
import { connect, ConnectedProps } from 'react-redux'
import {showLoadedAction, showQueryAction} from '../Redux/Action/Show'
import { mapShowStateSelector, querySelector, showLoadingSelector } from "../Redux/Selectors/Shows";
import { State } from "../Redux/Reducer/Store";
import LoadingSpinner from "../Components/LoadingSpinner";


type ShowDetailProps = ReduxProps ;


const ShowListPage : FC<ShowDetailProps> = ({ showQuery , shows ,  query , loading  }) => {
  


  return (
    <div className="mt-2">
      <div className="flex " > 
        <SearchBar value={query}  onChange = { (e)=> { showQuery( e.target.value) }  } /> 
        { loading  && <LoadingSpinner /> }
        </div>

      <div className="flex flex-wrap justify-center">
        { shows &&  shows.map(( val : Show) =>{
            return <div key = {val.id } >  
            <ShowCard  
                id={val.id}
                image={val.image}
                name={val.name}
                summary={val.summary}             
            /> </div> 

        }) 
        // ):(  <div className=" h-screen  w-full flex justify-center items-center  text-5xl  font-semibold    " > Loading ..... </div>
        // )     
        }

      </div>
    </div>
  )


}



const mapDispatchToProps = {
    showLoaded : showLoadedAction ,
    showQuery  : showQueryAction  ,
  }
  
  const mapSelectorToProps = (state : State)=> {
  
    return  {
      query   : querySelector (state)        ,    
      shows   : mapShowStateSelector (state) ,
      loading : showLoadingSelector (state)  ,
    }
  }

  const connector = connect ( mapSelectorToProps , mapDispatchToProps);

  type ReduxProps = ConnectedProps< typeof connector >


export default connector ( ShowListPage);


import React, { useState,useEffect, useRef} from 'react';
import axios from 'axios';
import ResultCard from './ResultCard/ResultCard';
import "./Add.css";

const Add = () => {
  
  const [searchValue, setSearchValue]= useState("");
  const [page, setPage]= useState(1);
  const [totalPage, setTotoalPage]= useState(0);
  // const [loading, setLoading]= useState(false);

  const [movies, setMovies]= useState([]);

  const inputRef = useRef(null);
  const loading = useRef(false);




  useEffect( () =>{
    inputRef.current.focus();
    const fetctData = async()=>{
      try{

        if(!searchValue){
        setMovies((pre) => pre=[]);
        return;
        }
        if(searchValue.length > 2){
  
          loading.current=true;
          
        await axios.get(`https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=2f965a68`).then(response =>{
          console.log(response.data);

        if(response.data.Response==='True'){
          setMovies(pre => [...pre , ...response.data.Search]);
          setTotoalPage((pre)=>pre=response.data.totalResults);
  
        }else{
          console.log(response.data.Error);
          setMovies([]);
        }
        loading.current=false;
  
        })

      }
    }catch(err){
        console.log(err);
        setMovies([]);
        loading.current=false;
  
  
      }

    }
    
    fetctData();

  } , [searchValue,page])


  return (
    <div className='add-page'>
    <div className='container'>
        <div className='add-content'>
            <div className='input-container'>
                <input type="text" placeholder="Search for a movie"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)
                  }
                  ref={inputRef}
                  />
            </div>

            {movies.length > 0 && 
                        <>
                        <ul className='results'>
                        <ResultCard movies={movies}/>
                        </ul>

                        {page < totalPage &&(
                        <button className='btn-more'
                          onClick={()=>setPage((page) =>page + 1)}>{loading ? "Loading...." : "Load More"}
                        </button>
                        )}
                        </>
            }


        </div>
    </div>
    </div>
  )
}

export default  Add

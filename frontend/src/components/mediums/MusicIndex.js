import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../lib/api'
import useFetch from '../../utils/useFetch'
import { Redirect } from 'react-router-dom'
import Spinner from '../common/Spinner'
import SelectYear from '../common/SelectYear'
import SelectMonth from '../common/SelectMonth'

function MusicIndex() {
  const { data: post, error } = useFetch(getAllPosts) 
  const [ recentPost, setRecentPost ] = useState('') //* setting state here.  

  useEffect(() => {
    const max = post ? post.length - 1 : null //* making the result ternary. Doing it here rather than the render, using the varaible to specify. Only creates variable max with post length if post exists. (-1 becaue length is not the same as the index number)

    const recentPost = max ? post[max] : null

    setRecentPost(recentPost) //* sets post with index that has the greatest value to state -> it can be resued using recentPost
  },[post]) //* every time post changes. It will trigger this function to run
	
	

  if (error) {
    return <Redirect to="/notfound" />
  }
	

  return (
    <div>
      <h1>Music Index</h1>
      <SelectYear />
      <SelectMonth />

      <br/>
      
      {recentPost ? 
        <div>
          <h1>{recentPost.title}</h1>
          <h2>{recentPost.music_title}</h2>

          <br/>

					
          {recentPost.mediums.map(medium => (
            medium.category === 3 ? //* music is category 3
						
              <div key={medium.id}>
                <h1>{medium.title}</h1>
                <h1>{medium.creator}</h1>
                <h1>{medium.duration}</h1>
                <img src={medium.image} alt={medium.title} />
                {/* <video src={medium.video} /> */}
              </div>						
              : //* if not 3
              null
          ))}
        </div>
        :
        <Spinner />	
      }
      
    </div>
  )

}

export default MusicIndex 

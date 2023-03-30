import React , { memo, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '../staticConfigs';
import { CircularProgress } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactInfo = memo(() => {
  const params = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const getContactInfo = useCallback(async (username) => {
    const response = await fetch(`${serverUrl}/users/${username}`)
    const data = await response.json()
    data && setUser(data)
    setLoading(false);
  },[])

  useEffect(() => {
    if(params.username){
      //request to server 
      setLoading(true);
      getContactInfo(params.username)
    }else{
      setLoading(false)
    }
  }, [params.username])


  if (loading){
    return <div><CircularProgress /></div>
  }

  if(!user){
    return <div> user not found </div>
  }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {user.linkedin && 
        <a href={user.linkedin} style={{textDecoration: 'none'}}>
          <LinkedInIcon sx={{ fontSize: 60, color:'#0A66C2' }} />
        </a>
      }
    
      {user.instagram && 
        <a href={user.instagram} style={{textDecoration: 'none'}}>
          <InstagramIcon sx={{ fontSize: 60, color:'#E4405F' }} />
        </a>
      }
    
      {user.github && 
        <a href={user.github} style={{textDecoration: 'none'}}>
          <GitHubIcon sx={{ fontSize: 60, color:'#151314' }} />
        </a>
      }
    
    </div>
 
  )
})


export default ContactInfo
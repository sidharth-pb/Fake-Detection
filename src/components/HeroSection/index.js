import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer , HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,
ArrowForward,ArrowRight} from './HeroElemnts';
import { Button } from '../ButtonElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [data, setData]= useState(null);
    const [out, setOut]= useState(null);
    const [print, setPrint] = useState(false);

    function getData(val) {
        setData(val.target.value);
        setPrint(false);
    }

  return (
      
   <HeroContainer id="home">
       <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
       </HeroBg>
       <HeroContent>
           <HeroH1><input type = "text" onChange={getData} /></HeroH1> 
           {/* ivide modify cheyyanam and a text area insert cheyyanam */}
           <HeroP>{print ? <h1>{out}</h1> : null}</HeroP>
           <HeroBtnWrapper>
               <Button 
               onClick = {() => {const reqOpt = {method: 'POST', headers:{"Content-Type":'application/json'}, body: JSON.stringify({data})} 
               fetch("http://127.0.0.1:5000/react", reqOpt).then(res => res.json()).then(res => {setOut(res); setPrint(true)})}}
              // to='signup' 
               onMouseEnter={onHover} 
               onMouseLeave={onHover}
               primary='true'
               dark='true'>
                   {/* Get started {hover ? <ArrowForward /> : <ArrowRight/>} */}
                   Check It
               </Button>
           </HeroBtnWrapper>
       </HeroContent>
   </HeroContainer>
  )
}

export default HeroSection
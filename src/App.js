import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [principle,setPrinciple] = useState(0);
  // console.log("==principle amount===", principle);

  const [interest,setInterest] = useState(0);
  // console.log("==Interest===", interest);

  const [year,setYear] = useState(0);
  // console.log("==Year===", year);

  const [result,setResult]= useState(0);

  const [isPrinciple,setIsPrinciple] =useState(true);
  const [isinterest,setIsInterest] = useState(true);
  const [isyear,setIsYear] = useState(true);

  const calculateInterest=(e) => {
    e.preventDefault();
    const result = (principle*interest*year)/100;
    setResult(result)
  }
  const handleReset=() =>{
    setPrinciple(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate =(e) =>{
      const {name,value}= e.target;
      
      if(name==='principlevalue'){
        setPrinciple(value);
        let res = (!!value.match(/^[0-9]+$/));
        if(res=== true){
          setIsPrinciple(true)
        }
        else{
          setIsPrinciple(false)
        }
      }

      else if(name==='interestvalue'){
        setInterest(value);
        let res = (!!value.match(/^[0-9]+$/));
        if(res=== true){
          setIsInterest(true)
        }
        else{
          setIsInterest(false)
        }
      }

      else if(name==='yearvalue'){
        setYear(value);
        let res = (!!value.match(/^[0-9]+$/));
        if(res=== true){
          setIsYear(true)
        }
        else{
          setIsYear(false)
        }
      }


  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 mt-5 ' style={{height:"90vh"}}>
        <div className='bg-light p-5 rounded' style={{width:"500px"}}>
            <h1>Simple Interest</h1>
            <p>calculate your simple interest easily</p>
            <div style={{height:"150px"}} className='d-flex flex-column bg-warning pt-3 rounded justify-content-center align-items-center'>
                <h2>&#8377;{result}</h2>
                <p>Total simple interest</p>
            </div>
            <form action="" className='mt-3' onSubmit={(e) => calculateInterest(e)}> 

            {/* React material UI */}
            <TextField className='w-100' id="outlined-basic" value={principle} name="principlevalue" label="&#8377; Principle Amount" variant="outlined" onChange={(e)=> validate(e)} />
            {
              !isPrinciple &&
              <div>
                <p className='text-danger'>Invalid input</p>
              </div>
            }

            <TextField className='w-100 mt-2' id="outlined-basic" value={interest} name='interestvalue' label="Rate of Interest(p.a)%" variant="outlined" onChange={(e)=>{validate(e)}}/>
            {
              !isinterest &&
              <div>
                <p className='text-danger'>Invalid input</p>
              </div>
            }

            <TextField className='w-100 mt-2' id="outlined-basic" name='yearvalue' value={year} label="Year(Yr)" variant="outlined" onChange={(e)=> validate(e)}/>
            {
              !isyear &&
              <div>
                <p className='text-danger'>Invalid input</p>
              </div>
            }
            
            

            <Stack direction="row" spacing={2} className='mt-3'>

                <Button disabled={isPrinciple && isinterest && isyear ?false:true} variant="contained" type='submit' className='bg-success' style={{height:"50px",width:"200px"}}>calculate</Button>
                <Button variant="contained" onClick={handleReset} className='bg-light' style={{height:"50px",width:"200px",color:"blue"}}>Reset</Button>

            </Stack>

            </form>
            
        </div>
        
    </div>
    
    </>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import CreateCard from './Componenet/CreateCard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import uuid from 'react-uuid'
const useStyles = makeStyles({
  root: {
    maxWidth:375,
    minWidth: 375,
    margin:'20px auto',
    padding: '10px 0px 10px 10px',
    backgroundColor:'darkviolet',
   
  },
  bullet: {
    display: 'inline-block',
    margin: '4 0px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    margin: 10,
    color:'#fff'
  },
  inputFiled: {
  padding: '13px 5px',
  width: '100%',
  marginLeft: -14,
  border:'none',
  borderRadius:4
  },

  subMitbtn: {
    padding: '8px 20px',
    backgroundColor:'blue',
    color:'white',
    fontWeight:'bold'
  },
  cardcompo:{
    display:'flex',
    flexWrap:'wrap',
  }
});

export default function App() {
  const classes = useStyles();
  const [isTrue, setisTrue] = useState(false)
  const [userdata, setuserdata] = useState({
    id:uuid(),
    title:'',
    user_info:''
  });
  const [cardArray, setcardArray] = useState([])

  const onchangeHandler = name=>e =>{
   setuserdata({
    ...userdata,
    id:uuid(),
        [name]:e.target.value
   })
  }

  const onClickHandler = () =>{
    setcardArray([userdata,...cardArray])
    //setisTrue(true)
    {console.log(userdata)}
    setuserdata({
      id:'',
      title:'',
      user_info:''
    })
    
  }
const removeHandler = (id) =>{
setcardArray(cardArray.filter((item)=>item.id!==id))
      
} 
  return (
    <>
<div className="App"> 

    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Your title
        </Typography>
        <Typography >
          <input type="text" name="title" onChange={onchangeHandler('title')} value={userdata.title} className={classes.inputFiled} placeholder="Title here..."/>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
        User information
        </Typography>
        <Typography>
        <input onChange={onchangeHandler('user_info')} name="user_info" value={userdata.user_info} className={classes.inputFiled} type="text" placeholder="Write some about this"/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickHandler} className={classes.subMitbtn}>Learn More</Button>
      </CardActions>
    </Card>  <hr/>
<div className={classes.cardcompo}>
{
  cardArray?.map((carValue,index)=>{
      return (
        <CreateCard title={carValue.title} user_info={carValue.user_info} key={index} id ={carValue.id} removeHandler={()=>removeHandler(carValue.id)}/>
      )
  })

}
</div>
   </div>
    </>
    
  );
}

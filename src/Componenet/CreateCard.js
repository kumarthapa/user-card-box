import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
  container : {
   display: 'flex',
   flexWrap:'wrap',
   padding: 7,
  },
  usercard : {
  textAlign:'left',
  width:200,
  border:'1px solid gray',
  borderRadius: 4,
  backgroundColor:'blue',
  padding:10,
  color:'white',
  },
  deleteicone : {
    float: 'right',
    marginTop:-3,
  }
})


const CreateCard = (props) => {
  const classes = useStyles();
  return (
    <>
   <div className={classes.container}>
   <div className={classes.usercard}>
   <span className={classes.deleteicone} ><HighlightOffIcon onClick={props.removeHandler}/></span>
  
      <h3>Title: {props.title}</h3>
      <h3>User Info: {props.user_info}</h3>
    </div>
   </div> 
    </>
  )
}



export default CreateCard

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import NewHeaderDesign from '../Header/NewHeaderDesign'

import useStickyState from '../../useStickyState';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function register()  {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [items,updateItems] = useStickyState("")
  // here is where we keep track of the values in the form
  const [name,setName] = useState("")
  const [description, setDescription] = useState("")

  // this is the action when the submit button is pushed
  const addItem = (event) => {
    const updateName = event=> setName(event.target.value)
    const updateDescription = event => setDescription(event.target.value)

    // we need to generate a unique id for the new items
    // so we get the id of the last item and add 1
    const lastId = items.length==0?0:items[items.length-1].id
    const item = {id:lastId+1, name:name, description:description, complete:false}
    updateItems(items.concat(item))
    document.getElementById("name").value = ""
    setName("")
    document.getElementById("description").value = ""
    setDescription("")

    event.preventDefault()
  }

  // these are called when the form elements are modified

  // handle the action when an item is clicked/completed
  // let flipItem = item => (event) => {
  //   item.complete=!item.complete
  //   let newitems = items.filter(x => (!(x.id===item.id)))
  //   updateItems(newitems)
  // }


  return (
    <>
      <NewHeaderDesign />

      <Container maxWidth="sm">
            <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" color="primary">
                    Register
                </Typography>
                <br/>

                <TextField
                id="outlined-account-input"
                label="Account"
                type="account"
                autoComplete="current-password"
                variant="outlined"
                fullWidth="ture"
                />
                <br />
                <br />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth="ture"
                />

            </CardContent>
            <CardActions>
            <Container maxWidth="md">
                <Button onClick={addItem} size="small" color="primary" variant="contained">
                    Register
                </Button>
                <br/>
            </Container>

            </CardActions>
            </Card>
      </Container>

        // <pre>
        // name = {JSON.stringify(name,null,2)}
        // </pre>
        // <br />
        // <pre>
        // description = {JSON.stringify(description, null,2)}
        // </pre>
        // <br />
        // <pre>
        // items ={JSON.stringify(items,null,2)}
        // </pre>
    </>
  );
}

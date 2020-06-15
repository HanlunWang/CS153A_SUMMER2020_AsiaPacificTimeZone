import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Container maxWidth="sm">
            <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" color="primary">
                    Sign in
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
                <Button size="small" color="primary" variant="contained">
                    Sign in
                </Button>
                <br/>
                <Typography variant="subtitle1" component="subtitle1" color="textSecondary">
                    New customer?&nbsp;
                    <Link component={RouterLink} to="/Register">
                        Start here.
                    </Link>
                </Typography>
            </Container>

            </CardActions>
            </Card>
      </Container>

  );
}

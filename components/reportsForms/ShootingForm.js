import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      direction: 'rtl',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="מי היורה" variant="outlined" />
      <TextField id="filled-basic" label="סוג נשק" variant="filled" />
      <TextField id="filled-basic" label="מספר נפגעים" variant="filled" type="number"/>
      <TextField
      id="datetime-local"
      label="זמן האירוע"
      variant="filled"
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      className={classes.textField}
      InputLabelProps={{
      shrink: true,
      }}
      />
    </form>
  );
}
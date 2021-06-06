import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShootingForm from '../components/reportsForms/ShootingForm.js';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    direction: 'rtl',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
      color: '#ffffff',
  },
  red: {
    background: '#ef5350',
  },
  orange: {
    background: '#ffa726',
  },
  yellow: {
    background: '#fdd835',
  },
  teal: {
    background: '#26a69a',
  },
  textField: {
      float: 'right'
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
        <Chip
        label="ירי"
        className={[classes.chip, classes.red]}
        clickable
        />
        
        <Chip
        label="דקירה"
        className={[classes.chip, classes.orange]}
        clickable
        />
        
        <Chip
        label="חטיפה"
        className={[classes.chip, classes.yellow]}
        clickable
        />

        <Chip
        label="תאונה"
        className={[classes.chip, classes.teal]}
        clickable
        />

        <ShootingForm></ShootingForm>
    </div>
  );
}

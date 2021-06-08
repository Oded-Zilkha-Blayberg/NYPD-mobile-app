// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       direction: 'rtl',
//     },
//   },
// }));

// const theme = createMuiTheme({
//   direction: 'rtl',
// });

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <ThemeProvider theme={theme}>
//       <form className={classes.root} noValidate autoComplete="off" dir="rtl">
//         <TextField
//         id="filled-basic"
//         label="מי היורה"
//         variant="outlined"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         />

//         <TextField
//         id="filled-basic"
//         label="סוג נשק"
//         variant="outlined"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         />

//         <TextField
//         id="filled-basic"
//         label="מספר נפגעים"
//         variant="outlined"
//         type="number"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         />

//         <TextField
//         id="datetime-local"
//         label="זמן האירוע"
//         variant="outlined"
//         type="datetime-local"
//         defaultValue={new Date()}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         />
//       </form>
//     </ThemeProvider>
//   );
// }
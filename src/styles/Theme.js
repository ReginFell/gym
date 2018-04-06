import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

export default createMuiTheme({
    palette: {
        primary: blue,
    },
    text: {
        primary: '#ffffff'
    },
    typography: {
        fontFamily:
        '-apple-system,system-ui,BlinkMacSystemFont,' +
        '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    }
});
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import white from 'material-ui/colors/blue';

export default createMuiTheme({
    palette: {
        primary: blue,
    },
    text: {
        primary: white
    },
    typography: {
        fontFamily:
        '-apple-system,system-ui,BlinkMacSystemFont,' +
        '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    }
});
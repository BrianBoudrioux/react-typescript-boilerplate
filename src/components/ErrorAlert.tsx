import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const ErrorAlert = (props: {error: boolean, setError: Function, message: string}) => {
    return (
        <>
            {props.error &&
                <Collapse in={props.error}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    props.setError(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        severity="error">{props.message}</Alert>
                </Collapse>}
        </>
    )
};

export default ErrorAlert;
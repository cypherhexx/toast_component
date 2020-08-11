import * as React from 'react';
import PropTypes from 'prop-types';
import "./GestaltToast.css"
import { Box, Mask, Text, Icon } from "gestalt";

const defaultAutoDismissTimeout = 5000;

function Timer(callback, delay) {
    let timerId = delay;
    let start = delay;
    let remaining = delay;

    this.clear = function() {
        clearTimeout(timerId);
    };

    this.pause = function() {
        clearTimeout(timerId);
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        console.log(remaining);
        start = Date.now();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    this.resume();
}

 export default class Toast extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {isRunning:false, timeout:false, toastStyle: null};
    }

     startTimer = () => {
         const { autoDismiss, onDismiss, autoDismissTimeout} = this.props;
         if (!autoDismiss) return;
         this.setState({ isRunning: true });
         this.timeout = new Timer(onDismiss, autoDismissTimeout);
     };

     clearTimer = () => {

         if (!this.props.autoDismiss) return;

         if (this.timeout) this.timeout.clear();
     };

     onMouseEnter = () => {
         this.setState({ isRunning: false }, () => {
             if (this.timeout) this.timeout.pause();
         });
     };
     onMouseLeave = () => {
         this.setState({ isRunning: true }, () => {
             if (this.timeout) this.timeout.resume();
         });
     };

     componentDidMount() {
         this.startTimer();

         const  transform_style ='rotate(15deg)';
         const toastStyle = {
             transition: 'transform .2s ease-in-out',
             transform: transform_style
         };
         this.setState({toastStyle:toastStyle});
     }
     componentWillUnmount() {
         this.clearTimer();
     }


    render() {
        let contents;
        // Confirmation Toasts
        const { color = 'darkGray', icon, thumbnail, text } = this.props;
        const hasMouseEvents = true;
        const handleMouseEnter = hasMouseEvents ? this.onMouseEnter : null;
        const handleMouseLeave = hasMouseEvents ? this.onMouseLeave : null;

        if (text instanceof Array && text.length > 1) {
            contents = (
                <Box xs={{display: 'flex'}}>
                    <Box xs={{display: 'flexColumn'}} flex="none" justifyContent="center">
                        {thumbnail ? (
                            <Mask shape="rounded" height={48} width={48}>
                                {thumbnail}
                            </Mask>
                        ) : null}
                    </Box>
                    <Box
                        xs={{display: 'flexColumn'}}
                        justifyContent="center"
                        dangerouslySetInlineStyle={{__style: {paddingLeft: 10}}}
                    >
                        <Box
                            dangerouslySetInlineStyle={{__style: {fontWeight: 'normal'}}}
                        >
                            <Text color="white" size="lg">
                                {text[0]}
                            </Text>
                        </Box>
                        <Text bold color="white" size="lg">
                            {text[1]}
                        </Text>
                    </Box>
                </Box>
            );
        } else {
            // Toasts as Guides
            contents = (
                <Box
                    xs={{display: 'flex'}}
                    justifyContent="between"
                    alignItems="center"
                >
                    <Text bold color="white" size="lg">
                        {text}
                    </Text>
                    {icon && (
                        <Box dangerouslySetInlineStyle={{__style: {paddingLeft: 24}}}>
                            <Icon accessibilityLabel="" color="white" icon={icon} size={36}/>
                        </Box>
                    )}
                </Box>
            );
        }

        return (
             <div className={"toast"}>
                <Box  maxWidth={376} width="100vw"    onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} >
                    <Box color={color} fit paddingX={8} paddingY={5}  >
                        {contents}
                    </Box>
                </Box>
             </div>
        );
    }
}

Toast.propTypes = {
    color: PropTypes.oneOf(["blue" , "darkGray" , "darkWash" , "eggplant" , "gray" , "green" , "lightGray" , "lightWash" , "maroon" , "midnight" , "navy" , "olive" , "orange" , "orchid" , "pine" , "purple" , "red" , "transparent" , "transparentDarkGray" , "watermelon" ,"white"]),
    icon: PropTypes.oneOf(['arrow-circle-forward']), // leaving open to additional icons in the future
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    thumbnail: PropTypes.node,
    autoDismiss:PropTypes.bool,
    autoDismissTimeout: PropTypes.number,
    onDismiss:Function.prototype.bind
};


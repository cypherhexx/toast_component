import React from "react";
import 'gestalt/dist/gestalt.css';
import {
    Avatar,
    Box,
    Button,
    Card,
    Heading,
    Link,
    Collage,
    Mask,
    Image,
    Checkbox,
    TextField,
    Text,
    Label,
    Column,
    Container,
    Divider,
    Flyout,
    Icon,
    IconButton,
    Layer,
    Letterbox,
    Switch,
    TextArea,
    Modal,
    Pog,
    Pulsar,
    Spinner,
    Sticky,
    Tabs,

    Tooltip,
    Touchable,
} from "gestalt";
import Toast from "./GestaltToast"

const Section = ({ children, title }) => (
    <Box padding={2}>
        <Box marginBottom={1}>
            <Heading size="xs">{title}</Heading>
        </Box>
        {children}
    </Box>
);

class GestaltUIPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = { checked: true, open: false, showLayer: false, isOpen: false, sm: false, md: false, lg: false, showModal: false, isPulsing: true,activeIndex: 0,showConfirmationToast: false,showConfirmationToast2: false, showConfirmationToast3: false,clicks: 0};


    this.handleTouch = this._handleTouch.bind(this);
    this.handleLinkClick = this._handleLinkClick.bind(this);
    this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
    this.handleConfirmationClick2 = this.handleConfirmationClick2.bind(this);
    this.handleConfirmationClick3 = this.handleConfirmationClick3.bind(this);
    this.handleToggleModal = this._handleToggleModal.bind(this);
    this.handleChange = this._handleChange.bind(this);
    this.handleChecked = this._handleChecked.bind(this);
    this.handleToggle = this._handleToggle.bind(this);
    this.handleToggleSmall = this._handleToggleSmall.bind(this);
    this.handleToggleMedium = this._handleToggleMedium.bind(this);
    this.handleToggleLarge = this._handleToggleLarge.bind(this);
    this.handleClick = this._handleClick.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
    this.anchorRef = React.createRef();

}

    handleToastDismiss(){
        this.setState(prevState => ({ showConfirmationToast: !prevState.showConfirmationToast }));

    };

    handleToastDismiss2(){
        this.setState(prevState => ({ showConfirmationToast2: !prevState.showConfirmationToast2 }));

    };

    handleToastDismiss3(){
        this.setState(prevState => ({ showConfirmationToast3: !prevState.showConfirmationToast3 }));

    };
    _handleTouch() {
        this.setState({
            clicks: this.state.clicks + 1,
        });
    };

    _handleLinkClick({ event }) {
        event.stopPropagation();
    };

    handleConfirmationClick({ event }) {
        this.setState(prevState => ({ showConfirmationToast: !prevState.showConfirmationToast }));
    };

    handleConfirmationClick2({ event }) {
        this.setState(prevState => ({ showConfirmationToast2: !prevState.showConfirmationToast2 }));
    };

    handleConfirmationClick3({ event }) {
        this.setState(prevState => ({ showConfirmationToast3: !prevState.showConfirmationToast3 }));
    };

    _handleToggleModal() {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    _handleToggleSmall() {
        this.setState(prevState => ({ sm: !prevState.sm }));
    }

    _handleToggleMedium() {
        this.setState(prevState => ({ md: !prevState.md }));
    }

    _handleToggleLarge() {
        this.setState(prevState => ({ lg: !prevState.lg }));
    }

    _handleToggle() {
        this.setState(prevState => ({ showLayer: !prevState.showLayer }));
    }

    _handleClick() {
        this.setState(() => ({ open: !this.state.open }));
    }

    _handleDismiss() {
        this.setState(() => ({ open: false }));
    }

    _handleChecked({ checked }) {
        this.setState({ checked });
    }

    _handleChange({ activeTabIndex, event }) {
        event.preventDefault();
        this.setState({
            activeIndex: activeTabIndex
        });
    }


    render() {
        const { showLayer } = this.state;
        const { sm, md, lg } = this.state;
        const { showModal } = this.state;
        const text = this.state.isPulsing ? 'Click to pause' : 'Click to show';
        const onToastDismiss = this.handleToastDismiss;
        const onToastDismiss2 = this.handleToastDismiss2;
        const onToastDismiss3 = this.handleToastDismiss3;
        return (

        <Box>
            <Section title="Avatar">
                <Box width={120}>
                    <Avatar
                        src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                        name="Jeanette Epps"
                    />
                </Box>
            </Section>


            <Section title="Box">
                <Box display="flex">
                    <Box column={4} color="lightGray">
                        <Text>1</Text>
                    </Box>
                    <Box column={4} color="darkGray">
                        <Text color="white">2</Text>
                    </Box>
                    <Box column={4} color="lightGray">
                        <Text>3</Text>
                    </Box>
                </Box>
            </Section>

            <Section title="Card">
                <Box maxWidth={200} padding={2} column={12}>
                    <Card>
                        <Link color="darkGray" href="https://pinterest.com">
                            <Avatar
                                name="Ben Silbermann"
                                src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                            />
                            <Box paddingX={3} paddingY={2}>
                                <Text align="center" bold>
                                    {"Ben"}
                                </Text>
                            </Box>
                        </Link>
                        <Button color="red" text="Follow" />
                    </Card>
                </Box>
            </Section>

            <Section title="Text">
                <Text>Text</Text>
            </Section>

            <Section title="TextField">
                <TextField onChange={() => {}} id="textfield" placeholder="Placeholder" />
            </Section>
            <Section title="CheckBox">
                <Checkbox
                    checked={this.state.checked}
                    id="usa"
                    name="usa"
                    onChange={this.handleChecked}
                />
                <Label htmlFor="usa">
                    <Box paddingX={2}>
                        <Text>United States of America</Text>
                    </Box>
                </Label>
            </Section>
            <Section title="Collage">
                <Collage
                    columns={3}
                    height={300}
                    width={300}
                    renderImage={({ index, width, height }) => {
                        const images = [
                            {
                                color: 'rgb(111, 91, 77)',
                                naturalHeight: 751,
                                naturalWidth: 564,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                            {
                                color: 'rgb(231, 186, 176)',
                                naturalHeight: 200,
                                naturalWidth: 98,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                            {
                                color: '#000',
                                naturalHeight: 300,
                                naturalWidth: 200,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                            {
                                color: '#000',
                                naturalHeight: 517,
                                naturalWidth: 564,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                            {
                                color: '#000',
                                naturalHeight: 806,
                                naturalWidth: 564,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                            {
                                color: '#000',
                                naturalHeight: 200,
                                naturalWidth: 200,
                                src: 'https://image.ibb.co/dzLoRv/Ben_Silberman.jpg',
                            },
                        ];
                        const image = images[index];
                        return (
                            <Mask wash width={width} height={height}>
                                <Image
                                    alt="collage image"
                                    color={image.color}
                                    fit="cover"
                                    naturalHeight={image.naturalHeight}
                                    naturalWidth={image.naturalWidth}
                                    src={image.src}
                                />
                            </Mask>
                        );
                    }}
                />
            </Section>
            <Section title="Column">
                <Box
                    display="flex"
                    direction="row"
                    paddingY={2}
                    marginLeft={-2}
                    marginRight={-2}
                    color="gray"
                    wrap
                >
                    <Column span={12}>
                        <Box paddingX={2} marginBottom={2}>
                            <Text color="white">Row</Text>
                        </Box>
                    </Column>
                    <Column span={6}>
                        <Box paddingX={2}>
                            <Box color="white">Column A</Box>
                        </Box>
                    </Column>
                    <Column span={6}>
                        <Box paddingX={2}>
                            <Box color="white">Column B</Box>
                        </Box>
                    </Column>
                </Box>
            </Section>
            <Section title="Container">
                <Box color="gray" padding={3}>
                    <Container>
                        <Box color="white" padding={3}>
                            <Text>Centered content</Text>
                        </Box>
                    </Container>
                </Box>
            </Section>
            <Section title="Divider">
                <Box color="white">
                    <Box padding={2}>
                        <Text>Some content</Text>
                    </Box>
                    <Divider />
                    <Box padding={2}>
                        <Text>Other content</Text>
                    </Box>
                </Box>
            </Section>
            <Section title="Flyout">
                <Box>
                    <Box display="inlineBlock" ref={this.anchorRef}>
                        <Button
                            accessibilityExpanded={!!this.state.open}
                            accessibilityHaspopup
                            onClick={this.handleClick}
                            text="Help"
                        />
                    </Box>
                    {this.state.open &&
                    <Flyout
                        anchor={this.anchorRef.current}
                        idealDirection="up"
                        onDismiss={this.handleDismiss}
                        size="md"
                    >
                        <Box padding={3}>
                            <Text bold align="center">
                                Need help with something? Check out our Help Center.
                            </Text>
                            <Box paddingX={2} marginTop={3}>
                                <Button color="red" text="Visit the help center" />
                            </Box>
                        </Box>
                    </Flyout>}
                </Box>
            </Section>
            <Section title="Icon">
                <Box alignItems="center" display="flex">
                    <Box marginRight={1} padding={1}>
                        <Icon icon="pin" accessibilityLabel="Pin" color="darkGray" />
                    </Box>
                    <Text align="center" bold color="darkGray">
                        Pinterest
                    </Text>
                </Box>
            </Section>
            <Section title="IconButton">
                <Box>
                    <Box display="inlineBlock" ref={this.anchorRef}>
                        <IconButton
                            accessibilityLabel="see more"
                            accessibilityHaspopup
                            accessibilityExpanded={this.state.isOpen}
                            icon="ellipsis"
                            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                        />
                    </Box>
                    {this.state.isOpen && (
                        <Flyout anchor={this.anchorRef.current} onDismiss={() => undefined} idealDirection="right">
                            <Box padding={2}>
                                <Text>I am a popup.</Text>
                            </Box>
                        </Flyout>
                    )}
                </Box>
            </Section>
            <Section title="Layer">
                <Box marginLeft={-1} marginRight={-1}>
                    <Box padding={1}>
                        <Button
                            text="Show Layer"
                            onClick={this.handleToggle}
                        />
                        {showLayer && (
                            <Layer>
                                <Box color="darkWash" position="fixed" top left right bottom display="flex" alignItems="center" justifyContent="center">
                                    <Box color="white" padding={3} display="flex" alignItems="center">
                                        <Text>Layer Content</Text>
                                        <Box marginStart={2}>
                                            <IconButton
                                                accessibilityLabel="Close"
                                                icon="cancel"
                                                onClick={this.handleToggle}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Layer>
                        )}
                    </Box>
                </Box>
            </Section>
            <Section title="LetterBox">
                <Letterbox width={200} height={300} contentAspectRatio={1}>
                    <Image
                        alt="square"
                        src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"
                        naturalWidth={1}
                        naturalHeight={1}
                    />
                </Letterbox>
            </Section>
            <Section title="Modal">
                <Box marginLeft={-1} marginRight={-1}>
                    <Box padding={1}>
                        <Button
                            text="size='sm'"
                            onClick={this.handleToggleSmall}
                        />
                        {sm && (
                            <Modal
                                accessibilityCloseLabel="close"
                                accessibilityModalLabel="View default padding and styling"
                                heading="Small modal"
                                onDismiss={this.handleToggleSmall}
                                footer={<Heading size="sm">Footer</Heading>}
                                size="sm"
                            >
                                <Box padding={2}>
                                    <Heading size="sm">Children</Heading>
                                </Box>
                            </Modal>
                        )}
                    </Box>
                    <Box padding={1}>
                        <Button
                            text="size='md'"
                            onClick={this.handleToggleMedium}
                        />
                        {md && (
                            <Modal
                                accessibilityCloseLabel="close"
                                accessibilityModalLabel="View default padding and styling"
                                heading="Medium modal"
                                onDismiss={this.handleToggleMedium}
                                footer={<Heading size="sm">Footer</Heading>}
                                size="md"
                            >
                                <Box padding={2}>
                                    <Heading size="sm">Children</Heading>
                                </Box>
                            </Modal>
                        )}
                    </Box>
                    <Box padding={1}>
                        <Button
                            text="size='lg'"
                            onClick={this.handleToggleLarge}
                        />
                        {lg && (
                            <Modal
                                accessibilityCloseLabel="close"
                                accessibilityModalLabel="View default padding and styling"
                                heading="Large modal"
                                onDismiss={this.handleToggleLarge}
                                footer={<Heading size="sm">Footer</Heading>}
                                size="lg"
                            >
                                <Box padding={2}>
                                    <Heading size="sm">Children</Heading>
                                </Box>
                            </Modal>
                        )}
                    </Box>
                </Box>
                <Box marginLeft={-1} marginRight={-1}>
                    <Box padding={1}>
                        <Button
                            text="Edit board"
                            onClick={this.handleToggleModal}
                        />
                        {showModal && (
                            <Modal
                                accessibilityCloseLabel="close"
                                accessibilityModalLabel="Edit Julia's board"
                                heading="Edit your board"
                                onDismiss={this.handleToggleModal}
                                footer={
                                    <Box
                                        justifyContent="between"
                                        display="flex"
                                        direction="row"
                                        marginLeft={-1}
                                        marginRight={-1}
                                    >
                                        <Box column={6} paddingX={1}>
                                            <Button text="Delete Board" inline />
                                        </Box>
                                        <Box column={6} paddingX={1}>
                                            <Box
                                                display="flex"
                                                direction="row"
                                                justifyContent="end"
                                                marginLeft={-1}
                                                marginRight={-1}
                                            >
                                                <Box paddingX={1}>
                                                    <Button text="Cancel" inline onClick={this.handleToggleModal} />
                                                </Box>
                                                <Box paddingX={1}>
                                                    <Button color="red" inline text="Save" />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                }
                                size="md"
                            >
                                <Box display="flex" direction="row" position="relative">
                                    <Column span={12}>
                                        <Box paddingY={2} paddingX={4} display="flex">
                                            <Column span={4}>
                                                <Label htmlFor="name">
                                                    <Text align="left" bold>
                                                        Name
                                                    </Text>
                                                </Label>
                                            </Column>
                                            <Column span={8}>
                                                <TextField id="name" onChange={() => undefined} />
                                            </Column>
                                        </Box>
                                        <Divider />
                                        <Box paddingY={2} paddingX={4} display="flex">
                                            <Column span={4}>
                                                <Label htmlFor="desc">
                                                    <Text align="left" bold>
                                                        Description
                                                    </Text>
                                                </Label>
                                            </Column>
                                            <Column span={8}>
                                                <TextArea id="desc" onChange={() => undefined} />
                                            </Column>
                                        </Box>
                                        <Divider />
                                        <Box paddingY={2} paddingX={4} display="flex">
                                            <Column span={4}>
                                                <Label htmlFor="notifications">
                                                    <Text align="left" bold>
                                                        Email Notifications
                                                    </Text>
                                                </Label>
                                            </Column>
                                            <Column span={8}>
                                                <Switch id="notifications" onChange={() => undefined} switched />
                                            </Column>
                                        </Box>
                                    </Column>
                                </Box>
                            </Modal>
                        )}
                    </Box>
                </Box>
            </Section>
            <Section title="Pog">
                <Pog
                    icon="heart"
                    iconColor="red"
                    bgColor="gray"
                />
            </Section>
            <Section title="Pulsar">
                <Box display="flex" direction="column">
                    <Box marginBottom={4}>
                        <Button
                            text={text}
                            onClick={() => this.setState({ isPulsing: !this.state.isPulsing })}
                            inline
                            size="md"
                        />
                    </Box>
                    <Pulsar paused={!this.state.isPulsing} />
                </Box>
            </Section>
            <Section title="Spinner">
                <Box>

                    <Spinner show={true} accessibilityLabel="Example spinner" />
                    <Text>Data</Text>
                </Box>
            </Section>
            <Section title="Sticky">
                <Box color="white" height={200} overflow="scroll">
                    <Box height={500} marginTop={10}>
                        <Box>
                            <Sticky top={0}>
                                <Box alignItems="center" color="lightGray" display="flex" height={40}>
                                    <Text>This should stick</Text>
                                </Box>
                            </Sticky>
                            <Box marginTop={10} position="relative">
                                <Text>Scroll</Text>
                                <Text>Keep scrolling</Text>
                                <Text>Scroll more</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 3 }}>
                                <Box alignItems="center" color="lightGray" display="flex" height={40} position="relative" dangerouslySetInlineStyle={{ __style: { zIndex: 2 } }}>
                                    <Text>This should also stick</Text>
                                </Box>
                            </Sticky>
                            <Box marginTop={10}>
                                <Text>Still scrolling</Text>
                                <Text>Tadaaaaa</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Section>
            <Section title="Toast">
                <Box>
                    <Button
                        inline
                        text={ this.state.showConfirmationToast ? 'Close toast' : 'Show confirmation toast' }
                        onClick={this.handleConfirmationClick}

                        size='md'
                    />
                    <Box
                        fit
                        dangerouslySetInlineStyle={{
                            __style: {
                                bottom: 50,
                                left: '10%',
                                transform: 'translateX(-50%)',
                            },
                        }}
                        paddingX={1}
                        position='fixed'
                    >
                        {this.state.showConfirmationToast3 ? (
                            <Toast
                                text={['Saved to', 'Home decor']}
                                autoDismiss={true}
                                onDismiss={onToastDismiss3.bind(this)}
                                autoDismissTimeout = {3000}
                                color={"gray"}
                                thumbnail={
                                    <Image
                                        alt='Saved to home decor board'
                                        naturalHeight={564}
                                        naturalWidth={564}
                                        src='https://image.ibb.co/dzLoRv/Ben_Silberman.jpg'
                                    />
                                }
                            />
                        ) : null}

                        {this.state.showConfirmationToast2 ? (
                            <Toast
                                text={['Saved to', 'Home decor']}
                                autoDismiss={true}
                                onDismiss={onToastDismiss2.bind(this)}
                                autoDismissTimeout = {3000}
                                color={"red"}
                                thumbnail={
                                    <Image
                                        alt='Saved to home decor board'
                                        naturalHeight={564}
                                        naturalWidth={564}
                                        src='https://image.ibb.co/dzLoRv/Ben_Silberman.jpg'
                                    />
                                }
                            />
                        ) : null}

                        {this.state.showConfirmationToast ? (
                            <Toast
                                text={['Saved to', 'Home decor']}
                                autoDismiss={true}
                                onDismiss={onToastDismiss.bind(this)}
                                autoDismissTimeout = {3000}
                                color={"green"}
                                thumbnail={
                                    <Image
                                        alt='Saved to home decor board'
                                        naturalHeight={564}
                                        naturalWidth={564}
                                        src='https://image.ibb.co/dzLoRv/Ben_Silberman.jpg'
                                    />
                                }
                            />
                        ) : null}


                    </Box>
                </Box>
            </Section>

            <Section title="Toast2">
                <Box>
                    <Button
                        inline
                        text={ this.state.showConfirmationToast2 ? 'Close toast' : 'Show confirmation toast' }
                        onClick={this.handleConfirmationClick2}
                        size='md'
                    />
                    <Box
                        fit
                        dangerouslySetInlineStyle={{
                            __style: {
                                bottom: 50,
                                left: '10%',
                                transform: 'translateX(-50%)',
                            },
                        }}
                        paddingX={1}
                        position='fixed'
                    >

                    </Box>
                </Box>
            </Section>

            <Section title="Toast3">
                <Box>
                    <Button
                        inline
                        text={ this.state.showConfirmationToast3 ? 'Close toast' : 'Show confirmation toast' }
                        onClick={this.handleConfirmationClick3}

                        size='md'
                    />
                    <Box
                        fit
                        dangerouslySetInlineStyle={{
                            __style: {
                                bottom: 50,
                                left: '10%',
                                transform: 'translateX(-50%)',
                            },
                        }}
                        paddingX={1}
                        position='fixed'
                    >

                    </Box>
                </Box>
            </Section>

            <Section title="Tab">
                <Tabs
                    tabs={[
                        {
                            text: "Boards",
                            href: "#"
                        },
                        {
                            text: "Pins",
                            href: "#"
                        },
                        {
                            text: "Topics",
                            href: "#"
                        }
                    ]}
                    activeTabIndex={this.state.activeIndex}
                    onChange={this.handleChange}
                />
            </Section>
            <Section title="Tooltip">
                <Box>
                    <Box padding={2}>
                        <Tooltip inline text="Inline tooltip">
                            <Button
                                accessibilityLabel="This tooltip wraps an inline button and occupies the same space"
                                color="gray"
                                text="Inline"
                                inline
                            />
                        </Tooltip>
                    </Box>
                    <Box padding={2}>
                        <Tooltip text="Full width tooltip">
                            <Button
                                accessibilityLabel="This tooltip wraps and allows a button to remain full width"
                                color="red"
                                text="Full width"
                            />
                        </Tooltip>
                    </Box>
                </Box>
            </Section>
            {/*<Section title="Touchable">*/}
                {/*<Box padding={2} width={150}>*/}
                    {/*<Touchable*/}
                        {/*mouseCursor="zoomIn"*/}
                        {/*onTouch={this.handleTouch}*/}
                        {/*shape="rounded"*/}
                    {/*>*/}
                        {/*<Mask shape="rounded">*/}
                            {/*<Image*/}
                                {/*alt="Antelope Canyon"*/}
                                {/*naturalHeight={1}*/}
                                {/*naturalWidth={1}*/}
                                {/*src="https://image.ibb.co/dzLoRv/Ben_Silberman.jpg"*/}
                            {/*/>*/}
                        {/*</Mask>*/}
                        {/*<Box paddingY={2}>*/}
                            {/*<Link*/}
                                {/*href="https://en.wikipedia.org/wiki/Antelope_Canyon"*/}
                                {/*onClick={this.handleLinkClick}*/}
                            {/*>*/}
                                {/*<Text align="center">Wiki Link</Text>*/}
                            {/*</Link>*/}
                        {/*</Box>*/}
                    {/*</Touchable>*/}
                    {/*<Box paddingY={2}>*/}
                        {/*<Text color="gray" align="center">*/}
                            {/*Clicked{' '}*/}
                            {/*{this.state.clicks}{' '}*/}
                            {/*{this.state.clicks === 1 ? 'time' : 'times'}*/}
                        {/*</Text>*/}
                    {/*</Box>*/}
                {/*</Box>*/}
            {/*</Section>*/}
        </Box>
        );
    }
}

 export  default  GestaltUIPage;

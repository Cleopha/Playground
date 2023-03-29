import { Box, Grid, GridItem } from "@chakra-ui/react";

type NavigationPadProps = {
    activeWindowIndex: number;
    onButtonClick: (index: number) => void;
};

const NavigationPad: React.FC<NavigationPadProps> = ({
    activeWindowIndex,
    onButtonClick,
}) => {
    return (
        <Box
            position="fixed"
            top="2rem"
            left="2rem"
            display="flex"
            flexDirection="column"
        >
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                {[...Array(9)].map((_, i) => (
                    <GridItem key={i}>
                        <Box
                            w="1.5rem"
                            h="1.5rem"
                            bg={i === activeWindowIndex ? "green" : "gray"}
                            cursor="pointer"
                            onClick={() => onButtonClick(i)}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default NavigationPad;
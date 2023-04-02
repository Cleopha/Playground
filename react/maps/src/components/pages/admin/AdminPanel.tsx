import React, { useState } from 'react';
import {
    Box,
    VStack,
    Image,
    Heading,
    Text,
    Divider,
    Table, Thead, Tbody, Tr, Th, Td, HStack, TableContainer, useColorModeValue, Button

} from '@chakra-ui/react';
import { IAlert } from '../../utils/alert';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { sortByAttribute } from '../../utils/textTransform';
import { alertData } from '../../fakeData/alert';
import { iconPerType } from '../../map/marker';
import { severityColors } from '../../card/CardAlert'
import { motion, AnimatePresence } from 'framer-motion';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

interface SidebarLinkProps {
    href: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, isActive, onClick }) => {
    const linkColor = useColorModeValue('blue.500', 'blue.200');
    const hoverBg = useColorModeValue('gray.200', 'gray.700');

    return (
        <MotionBox
            as="button"
            w="100%"
            textAlign="left"
            color={isActive ? linkColor : undefined}
            bg={isActive ? 'gray.700' : undefined}
            _hover={{ backgroundColor: hoverBg, textDecoration: 'none' }}
            onClick={onClick}
            py={1}
            borderRadius="md"
            position="relative"
            animate={{ paddingLeft: isActive ? 25 : 10 }}
            transition={{ duration: 0.3 }}
        >
            {label}
            <AnimatePresence>
                {isActive && (
                    <MotionBox
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.4 }}
                        position="absolute"
                        left={0}
                        top={0}
                        bottom={0}
                        width="4px"
                        backgroundColor={linkColor}
                        borderRadius="md"
                    />
                )}
            </AnimatePresence>
        </MotionBox>
    );
};

const Sidebar: React.FC = () => {
    const [activeLink, setActiveLink] = React.useState(0);

    const links = [
        { href: '#', label: 'Alerts' },
        { href: '#', label: 'Users' },
        { href: '#', label: 'Users' },
        { href: '#', label: 'Users' },
        { href: '#', label: 'Users' },
        { href: '#', label: 'Users' },
        // Ajoutez d'autres liens ici
    ];

    const handleLinkClick = (index: number) => {
        setActiveLink(index);
    };

    return (
        <VStack sx={{ display: 'flex', flex: 1 }} borderRight="1px" align="start" spacing={1}>
            <Box>
                <Heading size="sm" mb={2} fontSize={25}>
                    Admin Panel
                </Heading>
            </Box>
            <Divider bg="white" />
            {links.map((link, index) => (
                <SidebarLink
                    key={index}
                    href={link.href}
                    label={link.label}
                    isActive={activeLink === index}
                    onClick={() => handleLinkClick(index)}
                />
            ))}
        </VStack>
    );
};

const AlertAdminPanel = () => {
    const [sortedAlertData, setSortedAlertData] = useState(alertData);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

    const handleHeaderClick = (attribute: keyof IAlert) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

        const sortedData = [...sortedAlertData].sort(sortByAttribute<IAlert>(attribute, sortOrder!));

        setSortedAlertData(sortedData);
        setSortOrder(newSortOrder);
    };

    return (
        <div style={{ height: '91vh', width: '100vw', display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flex: 1, maxWidth: '175px' }}>
                <Sidebar />
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flex: 1 }}>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <Box height="40px">
                                <HStack spacing={"20"} ml={3} mt={1}>
                                    <Text size="sm" fontSize={20}>
                                        Alert
                                    </Text>

                                    <Box>
                                        <Button
                                            textColor={"#90cdf4"}
                                            leftIcon={<AddIcon />}
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => {
                                                // Handle the create button action
                                            }}
                                        >
                                            Create
                                        </Button>
                                        <Button
                                            textColor={"#90cdf4"}
                                            leftIcon={<RepeatIcon />}
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => {
                                                // Handle the refresh button action
                                            }}
                                        >
                                            Refresh
                                        </Button>
                                    </Box>
                                </HStack>
                            </Box>
                            <div style={{ height: '5px' }}>
                                <Divider mt='0.5' bg="white" />
                            </div>
                            <div style={{ display: 'flex', flex: 1, maxWidth: '100vw', justifyContent: "center", alignItems: "center" }}>
                                <TableContainer m={2} display={'block'} overflowY='auto' width={`calc(100vw - 175px)`} maxHeight={`calc(91vh - 55px)`}>
                                    <Table variant={'striped'} size='md'>
                                        <Thead >
                                            <Tr>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }}></Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }} cursor="pointer" onClick={() => handleHeaderClick('type')}>Type</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }} cursor="pointer" onClick={() => handleHeaderClick('department')}>Department</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }} cursor="pointer" onClick={() => handleHeaderClick('severity')}>Severity</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }}>Latitude</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }}>Longitude</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }} cursor="pointer" onClick={() => handleHeaderClick('title')}>Title</Th>
                                                <Th style={{ position: 'sticky', top: 0, background: '#1a202c' }} cursor="pointer" onClick={() => handleHeaderClick('description')}>Description</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {sortedAlertData.map((alert: IAlert) => (
                                                <Tr key={alert.id}>
                                                    <Td>
                                                        <EditIcon color="blue.500" _hover={{ color: 'blue.700', cursor: 'pointer' }} onClick={() => console.log('Modifier', alert.id)} mr={2} />
                                                        <DeleteIcon color="red.500" _hover={{ color: 'red.700', cursor: 'pointer' }} onClick={() => console.log('Supprimer', alert.id)} />
                                                    </Td>

                                                    <Td>
                                                        <HStack>
                                                            <Image mb={2} src={iconPerType[alert.type]} boxSize={"30px"} />
                                                            <Text >{alert.type}</Text>
                                                        </HStack>
                                                    </Td>
                                                    <Td>{alert.department}</Td>
                                                    <Td textColor={severityColors[alert.severity]}>{alert.severity}</Td>
                                                    <Td>{alert.lat}</Td>
                                                    <Td>{alert.lng}</Td>
                                                    <Td>{alert.title}</Td>
                                                    <Td>{alert.description}</Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertAdminPanel;

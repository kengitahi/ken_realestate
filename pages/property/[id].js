import {Box, Flex, Spacer, Text, Avatar} from '@chakra-ui/react';
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from '../../utils/fetchApi';

import ImageScrollbar from '../../components/ImageScrollbar';

export default function PropertyDetails({propertyDetails:{price, description, type, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, purpose, furnishingStatus,amenities,photos}}) {
    return(
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}

        </Box>
    )
}

export async function getServerSideProps({params: {id}}) {
    const data = await fetchApi(`${baseUrl}/properties/details?externalID=${id}`);
    return {
        props: {
            propertyDetails: data
        }
    }
}
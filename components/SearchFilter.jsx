import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import image from 'next/image';

// import { FilterData, getFilterValues } from '../utils/Filterdata';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../Assets/Images/noresult.svg';


function SearchFilter() {
  return (
    <div>SearchFilter</div>
  )
}

export default SearchFilter
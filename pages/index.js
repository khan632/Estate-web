import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";

import Property from "../components/Property";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner_image" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1} <br /> {desc2}{" "}
      </Text>
      <Button
        fontSize="xl"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
        color="white"
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

function Home({ propertyforSale, propertyforRent }) {
  // console.log(propertyforSale, propertyforRent);
  return (
    <Box>
      {/* <h1>hello</h1> */}
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyforRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Lands, Villas"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sell"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertyforSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const PropertyforSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const PropertyforRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyforRent: PropertyforRent?.hits,
      propertyforSale: PropertyforSale?.hits,
    },
  };
}

export default Home;

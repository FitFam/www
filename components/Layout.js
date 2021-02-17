import { Flex, Box, Image, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import LoggedInUserPicMenu from "../components/LoggedInUserPicMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>FitFam - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box height="100vh">
        <Flex
          px={6}
          py={4}
          borderBottom="2px solid"
          borderColor="#f8f8f8"
          align="center"
          justify="space-between"
          backgroundColor="white"
        >
          <Box>
            <NextLink href="/">
              <Link>
                <Image
                  src="/fitfam-blue@2x.png"
                  alt="FitFam"
                  height="25px"
                  ignoreFallback
                />
              </Link>
            </NextLink>
          </Box>

          <LoggedInUserPicMenu />
        </Flex>

        <Box px={6} py={4}>
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;

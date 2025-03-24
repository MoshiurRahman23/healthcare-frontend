import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import linkdin from "@/assets/landing_page/linkedin.png";
import instagram from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/healthPlan">
            Health Plan
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={4} py={2}>
          <Image src={facebook} height={30} width={30} alt="facebook Icon" />
          <Image src={linkdin} height={30} width={30} alt="facebook Icon" />
          <Image src={instagram} height={30} width={30} alt="instagram Icon" />
          <Image src={twitter} height={30} width={30} alt="twitter Icon" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          py={2}
        >
          <Typography component="p" color="white">
            &copy;2025 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography color="#fff" variant="h5" component="h2" fontWeight={600}>
            M
            <Box component="span" color="primary.main">
              R
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

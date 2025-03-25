import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  //   console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={500}>
            Explore Treatment Across Specialties.
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={300}>
            Experienced Doctor Across All Specialties.
          </Typography>
        </Box>
        <Stack direction="row" mt={5} gap={4}>
          {specialties.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                src={specialty.icon}
                alt="Image tag"
                height={50}
                width={50}
              ></Image>
              <Typography component="p" mt={2} fontSize={18} fontWeight={600}>
                {specialty.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;

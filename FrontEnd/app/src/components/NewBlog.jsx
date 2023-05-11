import { Box, Button, TextField } from "@mui/material";

export const NewBlog = () => {
  return (
    <>
      <Box m="20px" maxWidth="sm">
        <Box
          display="grid"
          gap="30px"
          m="40px 0 0 0"
          gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        >
          <header>NEW BLOG COMPONENT</header>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Blog Header"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values.firstName}
            name="blogHeader"
            // error={!!touched.firstName && !!errors.firstName}
            // helperText={touched.firstName && errors.firstName}
            // sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Blog Text"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values.lastName}
            name="blogMainText"
            // error={!!touched.lastName && !!errors.lastName}
            // helperText={touched.lastName && errors.lastName}
            // sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Blog Footer"
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values.email}
            name="blogFooter"
            // error={!!touched.email && !!errors.email}
            // helperText={touched.email && errors.email}
            // sx={{ gridColumn: "span 2" }}
          />
        </Box>
        <Button variant="contained" color="success" sx={{ marginTop: '30px' }}>
          Submit
        </Button>
      </Box>
    </>
  );
};

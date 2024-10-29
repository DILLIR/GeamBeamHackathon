import { Stack, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export interface ProductCardProps {
  product_name: string;
  product_description: string;
  image_link: string;
  product_link: string;
  product_price: string;
  warning_message: string;
}

export function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      gap={"16px"}
      sx={{
        border: "1px solid #E3E6EA",
        padding: "12px",
      }}
    >
      <img
        src={product.image_link}
        alt={product.product_name + " img"}
        style={{
          width: "100px",
        }}
      />
      <Stack gap={2}>
        <Typography fontSize={18} fontWeight={600}>
          {product.product_name}
        </Typography>
        <Typography fontSize={16}>{product.product_description}</Typography>
        <Typography fontSize={22} fontWeight={600} sx={{ color: "#FF4100" }}>
          {product.product_price}
        </Typography>
        <Stack gap={1} direction="row" alignItems="center">
          <Stack
            component="a"
            href={product.product_link}
            target="_blank"
            sx={{
              fontSize: 14,
              display: "flex",
              background: "#19213D",
              padding: "8px 16px",
              color: "white",
              width: "fit-content",
              transition: "opacity 0.3s",

              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            GO TO PRODUCT
          </Stack>
          <Tooltip title={product.warning_message} disableInteractive placement="top">
            <InfoIcon style={{
              color: "#FF4100",
              width: "40px",
              height: "40px",
            }}/>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
}

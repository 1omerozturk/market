"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import { Button, IconButton} from "@mui/material";
import { styled } from '@mui/material/styles';
import { AddShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const textt: string = "text-center text-xl font-bold";
const textt2: string =
  "font-sans text-gray-800 font-normal border-2 border-gray-500 rounded-lg my-1";

  // Button

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '2px solid',
    borderTopRightRadius:'25%',
    borderBottomLeftRadius:'25%',
    lineHeight: 1.5,
    color:'#000',
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color:'white',
      backgroundColor: '#0062cc',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 5px 0 0.2rem rgba(0,123,255,.9)',
    },
  });

// const router=useRouter(); 

const DetailClient = ({ product }: { product: any }) => {
  return (
    <div className="my-10 bg-slate-200 rounded-3xl shadow-2xl">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[200px] flex mr-2">
            <Image
              src={product.coverImage}
              fill
              alt={""}
              className="object-contain"
            />
          </div>
          <div className="w-1/2 bg-slate-300 rounded-3xl shadow-2xl py-2 my-2">
            <div className={textt}>
              <h1>
                <span className=" text-orange-700">Özellikler</span>
              </h1>
              <h2>{product?.Name}</h2>
              <div className={textt2}>{product?.Brand}</div>
              <div className={textt2}>{product?.os}</div>
              <div className={textt2}>{product?.battery_size}</div>
              <div className={textt2}>{product?.camera_pixels}</div>
              <div className={textt2}>{product?.Colors}</div>
              <div className={textt2}>{product?.Charging}</div>
              <div className={textt2}>{product?.Resolution}</div>
              <div className={textt2}>{product?.Size}</div>
            </div>
          </div>
        </div>
        <div className="text-center">

        <BootstrapButton variant="contained" disableRipple 
        // onClick={()=>router.push("/sepeteEkle")}
        >
      Sepete Ekle
<AddShoppingCart style={{marginLeft:"10px"}}/>
      </BootstrapButton>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;

import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import ParagraphMaterial from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import bootstrap from '../public/bootstrap.svg'
import Image from 'next/image'
export default function Cards({text, src}) {
    return (
        <div className='m-2 mt-5 text-center hover:bg-DarkFour hover:text-black'>
        <Card>
        {/* <CardImage> */}
            <Image src={`/${src}.svg`} alt="" height='100' width='100' />
        {/* </CardImage> */}
            <CardBody children='bg-black'>
                <ParagraphMaterial color="white">
                    <h1 className='text-center font-sans p-2'>{text}</h1>
                </ParagraphMaterial>
            </CardBody>

        </Card>
        </div>
    );
}
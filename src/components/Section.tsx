import React from 'react';
import styled from 'styled-components'
import { ISlideshow, IImage, SectionType } from './data/IProject';
import {Slideshow} from './Slideshow'

interface ISectionProps {
    type: string
    data?: string | ISlideshow[] | IImage
}

export const Section: React.FC<ISectionProps> = (props:ISectionProps) => {
    // if(!props.data){
    //     return null
    // }
  return (
    <Container>
        {props.type === SectionType.Header && <Header>{(props.data as string)}</Header>}
        {props.type === SectionType.Slideshow && <Slideshow data={(props.data as ISlideshow[])} />}
        {props.type === SectionType.Body && <Body>{(props.data as string)}</Body>}
    </Container>
  );
}


const Container = styled.div`
`

const Header = styled.h1`
font-size: 30px;
`

const Body = styled.p`
font-size: 16px;
`
import React from 'react'

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Container,
  } from "reactstrap"; 

function SkeletonCard({ title, switchMeal }) {
    return (
        <>
        <Card className="card-testimonial" style={{ height: "45vw" }}>
            <CardImg
              className="skeleton"
              alt=""
              top
              style={{ height: "23vw" }}
            />
            <CardBody>
              <h1 style={{fontSize: '3.7vw'}}>{title}</h1>
              <CardTitle className="text-center" tag="div">
                <h4 className="mx-auto skeleton header"></h4>
              </CardTitle>
              
            </CardBody>
            <CardFooter>
              <div className="skeleton link d-none d-lg-block mx-auto"></div>
              <Container fluid>
                <Button 
                    className="skeleton button d-none d-lg-block mx-auto" 
                    color="success" 
                    onClick={switchMeal}>
                </Button>
              </Container>
            </CardFooter>
        </Card>
        </>
    )
}

export default SkeletonCard
